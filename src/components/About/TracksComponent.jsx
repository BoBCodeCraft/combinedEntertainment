import React from "react";
import PropTypes from "prop-types";

function TracksComponent({ onClick, buttonState, tracks }) {
  return (
    <div className=" max-w-96 p-3 h-20 border-solid border-black border-2 rounded-3xl flex items-center justify-between pr-7 pl-3 mb-6">
      <p className=" m-2 ">{tracks.name}</p>
      <button onClick={onClick}>
        <i className={buttonState ? "fas fa-pause" : "fas fa-play"}></i>
      </button>
    </div>
  );
}

export default TracksComponent;

TracksComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonState: PropTypes.bool.isRequired,
  tracks: PropTypes.shape({
    name: PropTypes.string.isRequired,
    preview_url: PropTypes.string,
  }).isRequired,
};
