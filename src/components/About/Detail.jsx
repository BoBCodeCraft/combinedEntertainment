import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { useState } from "react";
import DetailComponent from "./DetailComponent";

function Detail(props) {
  const { artId } = useParams();
  const [albums, setalbums] = useState([]);

  useEffect(() => {
    async function getArtistAlbums() {
      const albumsUrl = `https://api.spotify.com/v1/artists/${artId}/albums`;
      const albumsOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + props.accessToken,
        },
      };

      const response = await fetch(albumsUrl, albumsOptions);
      const data = await response.json();
      // console.log(data);
      setalbums(data.items);
      console.log(albums);
    }
    getArtistAlbums();
  }, [artId]);

  return (
    <>
      <div className="w-full grid grid-cols-3 ml-[9vw] border border-solid border-black">
        {albums.map((item) => {
          return (
            <Link key={item.id} to={`${item.id}`}>
              <DetailComponent
                albumName={item.name}
                image={item.images[2].url}
                key={item.id}
              />
            </Link>
          );
        })}
      </div>

      {/* <Outlet /> */}
    </>
  );
}

export default Detail;

Detail.propTypes = {
  accessToken: PropTypes.string,
  artistId: PropTypes.string,
};

// console.log(props.accessToken);
