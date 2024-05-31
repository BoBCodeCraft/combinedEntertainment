import { PropTypes } from "prop-types";
// import { useEffect, useState } from "react";
// import Detail from "./Detail";
// import { useState } from "react";

function Card(props) {
  // console.log(props.artistId);
  // function handleClick() {
  //   props.setartId(props.artistId);
  //   // console.log(props.artistId);
  // }

  return (
    <div
      className="shadow-md transition-transform duration-300 transform hover:scale-90"
      // onClick={handleClick}
    >
      {/* <Detail artistid={artistid} /> */}
      <img
        src={props.image}
        alt="Card Image"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2 text-black">{props.name}</h3>
        {/* <p className="text-gray-700 text-base">{props.genre}</p> */}
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  genre: PropTypes.string,
  artistId: PropTypes.string,
  accessToken: PropTypes.string,
  onClick: PropTypes.func,
  setartId: PropTypes.func,
  // handleClick: PropTypes.func,
};

// const [artistAlbum, setartistAlbum] = useState([]);

// console.log(props.artistId);
// useEffect(() => {
//   async function getArtistAlbums() {
//     const albumsUrl = `https://api.spotify.com/v1/artists/${props.artistId}/albums`;
//     const albumsOptions = {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + props.accessToken,
//       },
//     };

//     const response = await fetch(albumsUrl, albumsOptions);
//     const data = await response.json();
//     console.log(data);
//     setartistAlbum(data.items);
//   }
//   getArtistAlbums();
// }, [props.artistId]);
