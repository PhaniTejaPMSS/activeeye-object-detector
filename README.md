# ActiveEye

## Overview

* This project features an object detection website where users can upload videos, which are then processed by a Flask backend to detect objects.
* The frontend is built using React JS [Vite], and the backend is built using Flask. The processed video is saved in the 'static' folder inside the server folder.
* This backend uses pre-trained SSD MobileNet v3 model for Object Detection. The model uses COCO dataset for training. The COCO dataset consists of 80 classes of objects. [View Data](https://github.com/pjreddie/darknet/blob/master/data/coco.names)

![Home Page](https://github.com/PhaniTejaPMSS/activeeye-object-detector/assets/109794469/2521c407-7aa1-427a-9139-3fc7fb431377)

## Features

- **Video Upload**: Users can upload videos directly from the website.
- **Object Detection**: Utilizes advanced model SSD MobileNet v3 to detect objects in the uploaded videos.
- **Processed Video Output**: Saves the processed video with detected objects in the server's `static` folder.

## Project Structure
```
├── client # Frontend folder
│ ├── public
│ ├── src
│ │   ├── App.jsx
│ │   └── ... # Other files
│ ├── index.html
│ ├── package.json
│ └── ... # Other frontend files
│
├── server # Backend folder
│ ├── static
│ │ ├── output.mp4
│ │ └── output.webm
│ ├── uploads
│ │ └── video.mp4 # input video
│ ├── app.py
│ ├── requirements.txt
│ └── ... # Other backend files
│
└── README.md # This file
```

## Dependencies

- Node.js
- Python 3.9
- Flask
- OpenCV
- Other dependencies listed in `package.json` (client) and `requirements.txt` (server)

## Installation

Clone the repository:
   ```bash
   git clone https://github.com/PhaniTejaPMSS/activeeye-object-detector.git

   cd activeeye-object-detector
   ```

### Setting Up the Client
1. Navigate to the client folder:

    ```bash
    cd client
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

* The client will run at `http://localhost:5173`.

### Setting Up the Server
1. Navigate to the server folder:

    ```bash
    cd server
    ```

2. Create a virtual environment and activate it (optional but recommended):

    ```bash
    python -m venv venv
    
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Start the Flask server:

    ```bash
    flask run
    ```

* The server will run at `http://localhost:5000`.

## Usage

* Open your browser and go to `http://localhost:5173`.
* Upload a video and click on "Upload and Process Video".
* The backend will process the video, and the output will be saved in the `static` folder inside the `server` directory.

## License
This project is licensed under the MIT License.

## Contact
For any questions or inquiries, please reach out to phanitejacse2021@gmail.com.

