// import { Link } from "react-router-dom";
import preety from "../../assets/preety.png";
import boy from "../../assets/boy.png";
import litte from "../../assets/little.png";

export default function Home() {
  return (
    <div className="mx-auto bg-slate-200">
      <div className="grid grid-flow-col justify-center items-center p-4 pr-6 gap-8">
        <img className="w-96 m-2" src={preety} alt="image1" />

        <h1 className=" text-6xl font-serif">syncMusic is feel</h1>
      </div>

      <div className="grid  place-items-center justify-end sm:mt-20">
        <img className="sm:w-96 w-48" src={litte} alt="image2" />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium"></h1>
    </div>
  );
}
