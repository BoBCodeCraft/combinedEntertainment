import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import TracksComponent from "./TracksComponent";

function Tracks({ accessToken }) {
  const { albumId } = useParams();
  const [tracks, setTracks] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/albums/${albumId}/tracks`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        setTracks(data.items);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, [albumId, accessToken]);

  const playTrack = (url) => {
    if (audio) {
      audio.pause();
    }

    if (buttonState && previewUrl === url) {
      setButtonState(false);
      setPreviewUrl("");
      setAudio(null);
    } else {
      const newAudio = new Audio(url);
      newAudio.play();
      setButtonState(true);
      setPreviewUrl(url);
      setAudio(newAudio);
    }
  };

  return (
    <div className="h-[100vh] w-[40vw] ml-[30vw] grid-cols-1 pl-[8vw] pt-[3vh] rounded-2xl">
      {tracks.map((track) => (
        <TracksComponent
          onClick={() => playTrack(track.preview_url)}
          buttonState={buttonState && previewUrl === track.preview_url}
          tracks={track}
          key={track.id}
        />
      ))}
    </div>
  );
}

export default Tracks;

Tracks.propTypes = {
  accessToken: PropTypes.string.isRequired,
};
