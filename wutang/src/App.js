import React, { useState, useEffect } from "react";
import "./App.scss";
import Form from "./Components/Form";
import About from "./Components/About";
import Members from "./Components/Members";
import Burger from "./Components/Burger";
import BurgerMenu from "./Components/BurgerMenu";
import Results from "./Components/Results";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  // Toggle Mobile Nav
  const [open, setOpen] = useState(false);

  const handleOpen = (open) => {
    setOpen(open);
  };

  // Functionality States

  const [search, setSearch] = useState("");
  const [songArr, setSongArr] = useState([]);
  const [resultsArr, setResultsArr] = useState([]);
  const [resultsString, setResultsString] = useState("");

  const handleSubmit = () => {
    console.log("HANDLE SUBMIT");
    const warning = "There's no Wu-Tang Song for That";
    const searchQuery = search.toLowerCase();
    console.log(searchQuery);
    const results = songArr.filter((object) =>
      object.lyrics.toLowerCase().includes(searchQuery)
    );
    setResultsArr(results);
    if (results.length === 0) {
      setResultsString(warning);
    } else {
      setResultsString(search);
    }
    console.log(results);
    console.log(resultsString);
  };

  const handleChange = (e) => {
    const search = e.target.value;
    setSearch(search);
  };
  // API Data Fetching: Get Track ID, Song Title, use MAP to create array with the addition of Lyric URL's.
  // Use .forEach to loop through lyric urls to get lyric string and push objects with the song title and lyric string to songArr state.
  //  API KEYS = 444874118958b4e7d6ec1f96f34281b1   &          c911372fc85e0cabc02b42439e19ecfb

  useEffect(() => {
    const corsPrefixUrl = `https://cors-anywhere.herokuapp.com/`;
    const apiKey = `444874118958b4e7d6ec1f96f34281b1`;
    // const apiKey = `444874118958b4e7d6ec1f96f34281b1`;

    const albumUrl = `${corsPrefixUrl}https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=20422443&page=1&apikey=${apiKey}`;

    gatherTrackInfo(corsPrefixUrl, apiKey, albumUrl);
  }, []);

  const gatherTrackInfo = async (corsPrefixUrl, apiKey, albumUrl) => {
    const res = await fetch(albumUrl);
    const json = await res.json();
    const trackListArray = json.message.body.track_list;
    const titleAndLyricUrl = trackListArray.map(function (data) {
      return {
        track_name: data.track.track_name,
        song_lyricURL: `${corsPrefixUrl}https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${data.track.track_id}&apikey=${apiKey}`,
      };
    });
    titleAndLyricUrl.forEach(function (data) {
      getSongData(data.song_lyricURL, data.track_name);
    });
  };

  const getSongData = (url, name) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let trackObject = {
          trackname: name,
          lyrics: data.message.body.lyrics.lyrics_body,
        };
        songArr.push(trackObject);
        let temp = songArr;
        setSongArr(temp);
      });
  };

  console.log(songArr);

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
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <Form
              {...routerProps}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          )}
        />
        <Route exact path="/About" component={About} />
        <Route exact path="/Members" component={Members} />
        <Route
          exact
          path="/Results"
          render={(routerProps) => (
            <Results
              {...routerProps}
              resultsString={resultsString}
              resultsArr={resultsArr}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
