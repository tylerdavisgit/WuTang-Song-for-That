import React, { useState, useEffect } from "react";
import "./App.scss";
import Form from "./Components/Form";
import About from "./Components/About";
import Members from "./Components/Members";
import Burger from "./Components/Burger";
import BurgerMenu from "./Components/BurgerMenu";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  // Toggle Mobile Nav
  const [open, setOpen] = useState(false);
  const handleOpen = (open) => {
    setOpen(open);
  };

  // API Data Fetching: Get Track ID, Song Title, use MAP to create array with the addition of Lyric URL's. Then map over new array to generate lyrics strings.

  const [trackInfo, setTrackInfo] = useState([]);

  useEffect(() => {
    const corsPrefixUrl = `https://cors-anywhere.herokuapp.com/`;
    const apiKey = `c911372fc85e0cabc02b42439e19ecfb`;
    const albumUrl = `${corsPrefixUrl}https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=20422443&page=1&apikey=${apiKey}`;

    const gatherTrackInfo = async () => {
      const res = await fetch(albumUrl);
      const json = await res.json();
      const trackListArray = json.message.body.track_list;
      const titleAndLyricUrl = trackListArray.map(function (data) {
        return {
          track_name: data.track.track_name,
          song_lyricURL: `${corsPrefixUrl}https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${data.track.track_id}&apikey=${apiKey}`,
        };
      });
      const titlesLyrics = titleAndLyricUrl.map(function (data) {
        const titlesAndLyrics = async () => {
          const res = await fetch(data.song_lyricURL);
          const json = await res.json();
          setTrackInfo({
            lyrics: json.message.body.lyrics.lyrics_body,
            title: data.track_name,
          });
        };
        return titlesAndLyrics();
      });
    };
    gatherTrackInfo();
  }, []);

  return (
    <div className="App">
      <nav id="deskNav">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593205950/PROJECT%202/wulogo_gyxc70.png"
            alt="Wu-Tang Song for That..."
          />
        </Link>
        <Burger open={open} setOpen={handleOpen} />
        <BurgerMenu open={open} setOpen={handleOpen} />
        <ul id="desk-ul">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Home</h3>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <h3>About</h3>
          </Link>
          <Link to="/Members" style={{ textDecoration: "none" }}>
            <h3>Wu-Tang Members</h3>
          </Link>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/About" component={About} />
        <Route path="/Members" component={Members} />
      </Switch>
    </div>
  );
}

export default App;
