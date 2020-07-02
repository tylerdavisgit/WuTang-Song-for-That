import React, { useState, useEffect } from "react";
import "./App.scss";
import Form from "./Components/Form";
import About from "./Components/About";
import Members from "./Components/Members";
import Burger from "./Components/Burger";
import BurgerMenu from "./Components/BurgerMenu";
import Results from "./Components/Results";
import { Route, Link, Switch } from "react-router-dom";
import Welcome from "./Components/Welcome";

function App() {
  // Toggle Mobile Nav
  const [open, setOpen] = useState(false);

  const handleOpen = (open) => {
    setOpen(open);
  };

  // Functionality States
  const [submitFormHide, setSubmitFormHide] = useState(false);
  const [toggleResults, setToggleResults] = useState(false);
  const [search, setSearch] = useState("");
  const [songArr, setSongArr] = useState([]);
  const [resultsArr, setResultsArr] = useState([]);
  const [resultsString, setResultsString] = useState("");

  const handleSubmit = () => {
    console.log("HANDLE SUBMIT");
    const warning = `${search}      ...There's no Wu-Tang Song for That`;
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
    setToggleResults(true);
    console.log(results);
    console.log(resultsString);
    setSubmitFormHide(true);
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
        <Link to="/form">
          <img
            src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593205950/PROJECT%202/wulogo_gyxc70.png"
            alt="Wu-Tang Song for That..."
          />
        </Link>
        <Burger open={open} setOpen={handleOpen} />
        <BurgerMenu open={open} setOpen={handleOpen} />
        <ul id="desk-ul">
          <Link to="/form" style={{ textDecoration: "none" }}>
            <h3>Home</h3>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <h3>About</h3>
          </Link>
          <Link to="/members" style={{ textDecoration: "none" }}>
            <h3>Wu-Tang Members</h3>
          </Link>
        </ul>
      </nav>

      {toggleResults === true ? (
        <Results resultsString={resultsString} resultsArr={resultsArr} />
      ) : (
        ""
      )}

      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route
          exact
          path="/form"
          render={(routerProps) => (
            <Form
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              submitFormHide={submitFormHide}
            />
          )}
        />
        <Route exact path="/results" component={Results} />
        <Route exact path="/about" component={About} />
        <Route exact path="/members" component={Members} />
      </Switch>
    </div>
  );
}

export default App;
