import v1 from "../assets/Vector1.png";
import v2 from "../assets/Vector2.png";
import v3 from "../assets/Vector3.png";
import v4 from "../assets/Vector4.png";
import v5 from "../assets/Vector5.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative w-full h-auto p-[12%] pb-6 bg-black text-white text-center text-4xl overflow-hidden">
      <div className="text-7xl font-normal uppercase mt-8">About Us</div>
      <div className="mt-14 leading-[3.4rem]">
        <span className="font-light">Welcome to </span>
        <span className="font-semibold italic">ActiveEye</span>
        <span className="font-light">
          , where cutting-edge technology meets a vision of a safer, smarter
          world. At the heart of our mission lies the belief that artificial
          intelligence can revolutionize the way we interact with our
          environment and with each other.
        </span>
      </div>

      <div className="mt-40 text-7xl font-normal uppercase">Our Vision</div>
      <div className="mt-14 leading-[3.4rem]">
        <span className="font-light text-4xl">
          Our journey began with a shared vision of making AI accessible and
          useful to everyone. We envisioned a world where the power of computer
          vision could enhance security, streamline processes, and provide
          valuable insights in real-time. Today, we proudly offer a platform
          that brings this vision to life.
        </span>
      </div>

      <div className="mt-48 text-7xl font-normal uppercase">CONTACT US</div>
      <div className="mt-14 leading-[3.4rem] flex flex-row w-full">
        <span className="font-light text-4xl w-full">
          <p className="font-light">
            Got questions, ideas, or feedback? We'd love to hear from you.
          </p>
          <p className="font-light">
            <span className="font-light">Reach out to us at our </span>
            <span className="font-semibold">
              <Link to="/contact" className="text-white">
                contact page
              </Link>
            </span>
            <span className="font-light">
              {" "}
              and let's shape the future together.
            </span>
          </p>
        </span>
      </div>

      <div className="mt-28 mb-10 flex flex-col w-full">
        <p className="font-light">
          <span className="font-light">Thank you for visiting </span>
          <span className="font-semibold italic">ActiveEye</span>
          <span className="font-light">.</span>
        </p>
        <p className="font-light">
          Together, we're contributing to a smarter and more secure world.
        </p>
      </div>

      {/* Gradients */}
      <img
        className="absolute top-0 right-0 w-[594px] h-[567px]"
        alt=""
        src={v3}
      />
      <img
        className="absolute top-[499px] left-[520px] w-[913px] h-[831px]"
        alt=""
        src={v2}
      />
      <img
        className="absolute top-[1244px] left-0 w-[615px] h-[901px]"
        alt=""
        src={v1}
      />
      <img
        className="absolute top-[1936px] right-0 w-[488px] h-[777px]"
        alt=""
        src={v5}
      />
      <img
        className="absolute top-0 left-0 w-[664.4px] h-[557.4px]"
        alt=""
        src={v4}
      />
    </div>
  );
};

export default About;
