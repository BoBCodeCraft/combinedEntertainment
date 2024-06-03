import React from "react";
import { PropTypes } from "prop-types";

function DetailComponent(props) {
  return (
    <div className=" mt-10 rounded overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-90">
      <img className="w-full h-[70%] bg-cover" src={props.image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.albumName}</div>
        {/* <p className="text-gray-700 text-base">lets see</p> */}
      </div>
    </div>
  );
}

export default DetailComponent;

DetailComponent.propTypes = {
  albumName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
