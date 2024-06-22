import backImg from "../assets/tech_bg_1.jpg";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-center text-2xl text-white ">
      {/* Bg-Img */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
        alt=""
        src={backImg}
      />

      <div className="mt-[16%] text-8xl font-semibold w-3/4 mx-auto">
        Experience the wonders
      </div>
      <div className="mt-6 text-8xl font-semibold w-3/4 mx-auto">
        of AI in action!
      </div>

      <div
        className="mt-20 w-3/12 px-4 mx-auto hover:scale-105 cursor-pointer"
        onClick={() => (window.location.href = "/objectdetect")}
      >
        <div className="rounded-full border border-white/40 bg-blue-950/60 p-4 h-auto text-white">
          Explore Object Detection Model
        </div>
      </div>
    </div>
  );
};

export default Home;
