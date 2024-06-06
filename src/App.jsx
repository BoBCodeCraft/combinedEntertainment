import React from "react";
import ReactDOM from "react-dom/client";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";

import SyncMusic from "./components/About/About.jsx";
import { useState, useEffect } from "react";
import Detail from "./components/About/Detail.jsx";
import Tracks from "./components/About/Tracks.jsx";

function App() {
  const [results, setResults] = useState([]); // Corrected to initialize as an array
  const [artist, setArtist] = useState("shreya ghoshal");
  const [accessToken, setAccessToken] = useState("");
  const clientId = "fef4902ab9e64bc78c2a073b1ac2282b";
  const clientSecret = "6b8448e4a62c4813b49bc9b43119de8b";
  // console.log(accessToken);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const authUrl = "https://accounts.spotify.com/api/token";
      const authOptions = {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      };

      const response = await fetch(authUrl, authOptions);
      const data = await response.json();
      setAccessToken(data.access_token);
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    const fetchArtist = async () => {
      // Renamed from Artist to fetchArtist
      const searchUrl = `https://api.spotify.com/v1/search?q=${artist}&type=artist`;
      const searchOptions = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };

      const response = await fetch(searchUrl, searchOptions);
      const data = await response.json();
      console.log(data);

      const filteredData = data.artists.items.filter(
        (item) => item.name && item.images.length > 0
      );
      // console.log(filteredData[0].id);

      setResults(filteredData);
      // setResults(data.artists.items);
      // console.log(data);
      // console.log(results[0].id);
    };
    fetchArtist();
  }, [artist, accessToken]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route
          path="about"
          element={
            <SyncMusic
              results={results}
              accessToken={accessToken}
              setartist={setArtist}
            />
          }
        />
        <Route
          path="/about/:artId"
          element={<Detail accessToken={accessToken} />}
        />

        <Route
          path="/about/:artId/:albumId"
          element={<Tracks accessToken={accessToken} />}
        />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
