# Flask code for ObjDetect.js
# Activate conda environment before running this code

from flask import Flask, render_template, request, jsonify
import cv2 as cv
import imutils
import os
import joblib

app = Flask(__name__)

# Load the model weights and configuration
loaded_model_data = joblib.load('model.pkl')
thres = loaded_model_data['thres']
classes = loaded_model_data['classes']
configFile = loaded_model_data['configFile']
weightsFile = loaded_model_data['weightsFile']

# Recreate the model
net = cv.dnn_DetectionModel(weightsFile, configFile)
net.setInputSize(320, 320)
net.setInputScale(1.0/127.5)
net.setInputMean((127.5, 127.5, 127.5))
net.setInputSwapRB(True)

@app.route('/', methods=['GET', 'POST'])
def index(): 
    if request.method == 'POST':
        video_file = request.files['video']
        if video_file:
            video_path = f"uploads/{video_file.filename}"
            video_file.save(video_path)
            processed_video_webm, processed_video_mp4 = process_video(video_path)
            return jsonify({'processed_video_webm': processed_video_webm, 'processed_video_mp4': processed_video_mp4})

    return jsonify({'error': 'Video not processed'})

def process_video(video_path):
    cap = cv.VideoCapture(video_path)
    frame_width = int(cap.get(cv.CAP_PROP_FRAME_WIDTH))
    frame_height = int(cap.get(cv.CAP_PROP_FRAME_HEIGHT))
    frame_rate = cap.get(cv.CAP_PROP_FPS)
    
    output_path_webm = os.path.join('static', 'output.webm')
    output_path_mp4 = os.path.join('static', 'output.mp4')

    fourcc_webm = cv.VideoWriter_fourcc(*'VP90')
    out_webm = cv.VideoWriter(output_path_webm, fourcc_webm, frame_rate, (frame_width, frame_height))

    fourcc_mp4 = cv.VideoWriter_fourcc(*'mp4v')
    out_mp4 = cv.VideoWriter(output_path_mp4, fourcc_mp4, frame_rate, (frame_width, frame_height))

    while True:
        success, img = cap.read()
        if not success:
            break
        
        img = imutils.resize(img, width=frame_width, height=frame_height)

        classIds, confs, bbox = net.detect(img, confThreshold=thres)
        print(classIds, bbox)

        if len(classIds) != 0:
            for classId, confidence, box in zip(classIds.flatten(), confs.flatten(), bbox):
                cv.rectangle(img, box, color=(0, 255, 0), thickness=2)
                cv.putText(img, classes[classId - 1].upper(), (box[0] + 10, box[1] + 30),
                           cv.FONT_HERSHEY_COMPLEX, 1, (0, 255, 0), 2)
                cv.putText(img, str(round(confidence * 100, 2)), (box[0] + 10, box[1] + 60),
                           cv.FONT_HERSHEY_COMPLEX, 1, (0, 255, 0), 2)

        # Write the frame into the file
        out_webm.write(img)
        out_mp4.write(img)

    # Release the VideoCapture and VideoWriter objects
    cap.release()
    out_webm.release()
    out_mp4.release()

    return output_path_webm, output_path_mp4

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run()
