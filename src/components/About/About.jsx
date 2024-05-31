import Card from "./Card";
import brand from "../../assets/Super.png";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
// import { useState } from "react";

export default function SyncMusic(props) {
  // const [artId, setartId] = useState("");
  // console.log(artId);
  return (
    <>
      <div className="flex w-[100vw]">
        <div className="w-[30vw]  mr-7 flex flex-col items-center h-[50vh]">
          <div className=" h-[60%] w-[70%] ">
            <img
              src={brand}
              alt=""
              className=" w-full h-full object-cover mt-4"
            />
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2 p-3 w-80 ml-18 border-solid border-2 border-green-800 rounded-2xl"
              type="search"
              placeholder="search the music here "
              aria-label="Search"
              onChange={(e) => {
                props.setartist(e.target.value);
              }}
            />
          </form>
        </div>

        <div className="grid grid-cols-5 gap-7 mt-8">
          {props.results.map((item) => (
            <Link key={item.id} to={`${item.id}`}>
              <Card
                // setartId={setartId}
                artistId={item.id}
                accessToken={props.accessToken}
                // onClick={handleClick}
                name={item.name}
                key={item.id}
                followers={item.followers.total}
                genre={item.genres.length > 0 ? item.genres[0] : "Unknown"} // Updated to handle empty genres array
                image={item.images.length > 0 ? item.images[0].url : ""} // Updated to handle empty images array
              />
            </Link>
          ))}
        </div>
      </div>
      {/* <Outlet/> */}
    </>
  );
}

SyncMusic.propTypes = {
  results: PropTypes.array,
  accessToken: PropTypes.string,
  setartist: PropTypes.func,
};

// // Function to get tracks from an album
// async function getAlbumTracks(accessToken, albumId) {
//   const tracksUrl = https://api.spotify.com/v1/albums/${albumId}/tracks;
//   const tracksOptions = {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer ' + accessToken
//     }
//   };

//   const response = await fetch(tracksUrl, tracksOptions);
//   const data = await response.json();
//   return data.items;
// }

// // Main function to get artist and tracks data
// async function getArtistAndTracks(artistName) {
//   const accessToken = await getAccessToken();
//   const artist = await searchArtist(accessToken, artistName);
//   const albums = await getArtistAlbums(accessToken, artist.id);

//   console.log(Artist: ${artist.name});
//   for (const album of albums) {
//     console.log(Album: ${album.name});
//     const tracks = await getAlbumTracks(accessToken, album.id);
//     for (const track of tracks) {
//       console.log(` - Track: ${track.name}`);
//     }
//   }
// }

// // Example usage
// getArtistAndTracks('Adele').catch(console.error);
