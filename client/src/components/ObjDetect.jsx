import { Link } from "react-router-dom";
import backImg from "../assets/tech_bg_1.jpg";
import { useState } from "react";

const ObjDetect = () => {
  const [video, setVideo] = useState(null);
  const [processedVideos, setProcessedVideos] = useState({ webm: "", mp4: "" });
  const [isProcessing, setIsProcessing] = useState(0);
  const [updateMsg, setUpdateMsg] = useState("You can see your updates here!");

  const afterProcessing = () => {
    setUpdateMsg(
      `Your video has been processed. Check the "static" folder to see the results.`
    );
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const processVideo = async () => {
    if (video) {
      setIsProcessing(true);

      const formData = new FormData();
      formData.append("video", video);

      try {
        const response = await fetch("http://localhost:5000/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setProcessedVideos({
            webm: data.processed_video_webm,
            mp4: data.processed_video_mp4,
          });
        }
      } catch (error) {
        console.error("Error processing video:", error);
      }

      setIsProcessing(false);
      afterProcessing();
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-center text-2xl text-white ">
      {/* Bg-Img */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
        alt=""
        src={backImg}
      />

      <div className="mt-52 text-8xl font-semibold w-3/4 mx-auto">
        Object Detection
      </div>

      <div className="mt-40 text-2xl font-semibold flex flex-col mx-auto">
        <input
          type="file"
          className="text-xl p-4 mx-auto mb-4 pl-8 w-fit"
          accept="video/*"
          name="video"
          onChange={handleVideoChange}
        />
        <button
          className="text-xl w-fit mx-auto p-6 mt-8 rounded-full cursor-pointer border border-white/30 bg-opacity-80 bg-blue-900/50 text-white hover:scale-95 hover:bg-blue-900/80 disabled:bg-white/20 disabled:cursor-not-allowed"
          onClick={processVideo}
          disabled={!video || isProcessing}
        >
          Upload and Process Video
        </button>
      </div>

      {isProcessing ? (
        <p className="text-xl p-4 mt-6">Processing...</p>
      ) : (
        <div className="text-xl p-4 mt-6 mx-auto">{updateMsg}</div>
      )}
    </div>
  );
};

export default ObjDetect;
