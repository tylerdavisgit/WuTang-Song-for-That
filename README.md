# Project Overview

<h2> There's a Wu-Tang Clan Song for That </h2>

## Project Links

- [Git Repo](https://github.com/tylerdavisgit/WuTang-Song-for-That)
- [Wutang for That (Netlify)](https://www.wutangforthat.com/)

## Project Description

This React app contains a form in which a user can input a phrase. That phrase is run through a collection of Wu-Tang Clan song lyrics from the album "Playlist: The Very Best of Wu-Tang Clan." If there is a song in the collection containing that word or phrase, the app returns the title and lyrics. It also has an about section for the group, as well as a section with illustrations and a brief rundown of each member.

The key difference between the mobile and tablet/desktop version is that the mobile navigation menu pops up full screen. The Tablet and Desktop versions will have individual links in the navigation instead of the hamburger icon.

I'm using the MusixMatch API to pull album data, mapping through it and returning new objects containing the song tite and track ID. Then, I'm using the track ID to make a second API call by inserting it into the url and pulling the lyrics for each song. Then, using a forEach function, I loop through the data and create an array of objects with the song title and lyrics string for each song.

## API Snippets

### Album List Data

```
{
"message": {
"header": {
"status_code": 200,
"execute_time": 0.012840032577515,
"available": 81
},
"body": {
"album_list": [
{
"album": {
"album_id": 20760274,
"album_mbid": "17196987-9f0f-404b-8d0a-a127fba2e0bd",
"album_name": "Protect Ya Neck",
"album_rating": 28,
"album_release_date": "2015-04-18",
"artist_id": 13882826,
"artist_name": "Wu-Tang Clan",
"primary_genres": {
"music_genre_list": []
},
"album_pline": "",
"album_copyright": "",
"album_label": "",
"restricted": 0,
"updated_time": "2015-04-19T17:44:39Z"
}
},
```

### Song Lyric Data

```
"message": {
"header": {
"status_code": 200,
"execute_time": 0.0088639259338379
},
"body": {
"lyrics": {
"lyrics_id": 8338363,
"explicit": 1,
"lyrics_body": "What y'all thought y'all wasn't gonna see me\nI'm the Osiris of this shit\nWu-Tang is here forever, motherfuckers\nThis ninety-seven\nAight my niggas and my niggarettes\nLet's do it like this\nI'ma rub your ass in the moonshine\nLet's take it back to seventy-nine\n\nI bomb atomically\nSocrates' philosophies and hypotheses\nCan't define how I be dropping these mockeries\nLyrically perform armed robbery\nFlee with the lottery, possibly they spotted me\nBattle-scarred Shogun, explosion when my pen hits\nTremendous, ultra-violet shine blind forensics\nI inspect you, through the future see millennium\nKiller Bees sold fifty gold, sixty platinum\nShackling the masses with drastic rap tactics\nGraphic displays melt the steel like blacksmiths\nBlack Wu jackets Queen B's ease the guns in\nRumble with patrolmen, tear gas laced the function\nHeads by the score take flight incite a war\nChicks hit the floor, die hard fans demand more\nBehold the bold soldier, control the globe slowly\nProceeds to blow, swinging swords like Shinobi\nStomp grounds and pound footprints in solid rock\nWu got it locked, performing live on your hottest block\n\nAs the world turns, I spread like germs\nBless the globe with the pestilence\nThe hard-headed never learn\nIt's my testament to those burned\nPlay my position in the game of life standing firm\nOn foreign land jump the gun out the frying pan into the fire\nTransform into the Ghost Rider\nA six-pack and a streetcar named desire\nWho got my back in the line of fire holding back what\nMy peoples if you with me where the fuck you at\nNiggas is strapped and they trying to twist my beer cap\nIs court adjourned for the bad seed from bad sperm\nHerb got my wig fried like a bad perm, what the blood\nClot, we smoke pot and blow spots\nYou want to think twice, I think not\nThe Iron Lung ain't got to tell you where it's coming from\nGuns of Navarone, tearing up your battle zone\nRip through your slums\n\n...\n\n******* This Lyrics is NOT for Commercial use *******\n(1409620234282)",
"script_tracking_url": "https://tracking.musixmatch.com/t1.0/m_js/e_1/sn_0/l_8338363/su_0/rs_0/tr_3vUCAGqIT7dq1IFgyMjcNovWfNKUHQEAkgmWql5xVWM0ghiSOrMTmZ0OEMhy1OWh2yjrYg9-XAdvm4rnJf7uFeYR4rX0V6DrNfqNPvPGX9Nq125oJJlrjcBpJ0wKNeZ0OqsFQAiS50vCuw7azVUGIpNSMECCi-Eioe1LrghmC30GDSQMT7I7oVHbBGKYwTTqfS-Z7XutYrHdY8XMB1r-ZfusHeT7feKxFv8BjC9vpP9sjT_j1HVFg-3mFpi2ilE4d7AadebhUantbG7jKILXHcyI-pOwttaENK071sxfLlwG5yBjIMTV3kVy6aoot8ihjz7X9Tt6IrE4q7aUUq8qRGsHCo069rGprCfrA-kayfL4ObhOM4qi6cXlDpdwfHNM2Nv9iSdTxF8CGtVNF5NJ4VPHJspA0n921bb6jqFgASMd-3UHNz90F6oHX8mXTEYAAPvHVLVxV3TT9NpMRVx_ow/",
"pixel_tracking_url": "https://tracking.musixmatch.com/t1.0/m_img/e_1/sn_0/l_8338363/su_0/rs_0/tr_3vUCAN7qHYU92q6C2KoPEb7a4rmm7OeLe7b3_56rNJm2vRppxE-1j6MOmYeTzaPyeLelr5IFLyJ_DFoklgwVybS5zoB1qqJeaHtaQXqtHduz_LM8tL1OCA-zyo67JNQeiIGysbwemvVYlvpAuL1lar1vTF0s4_huFySKJWSctE5bVO8D-d9MRR10bI9QUVs0Pv1DJOpKiiJCgYaLlOqUMVvcWBbz25Zg8MigkEGE7bVuaEYXujexo7j3eZgteGM3gcCLHeGVAgjabmSeLniFycmCJ0wSbyZ9kFv8tqlL8Qnx86Mzc_jf0jp5dT4Epuh0JKnhoSFg80Y4umCvb4MnkuE6FagkDK1ulppq74Op2aQ0uwM9WEmpMXPHXW5cJDjj1gvX4lDUQV7zsxC2ay4bfStNf1D05QkOx5SldlpUiJbfraaWSY3jhSDBuMhUXuAvvSO_czDt0GR5q3vDqm3nYQ/",
"lyrics_copyright": "Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned.",
"updated_time": "2013-07-31T11:19:40Z"
}
}
}
}
```

## Wireframes

- [Landing](https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593190688/PROJECT%202/WireFrames/1Project_2_Mobile_Wireframe_AppLanding_rxqpuy.jpg)
- [Mobile Nav](https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593193175/PROJECT%202/WireFrames/2Project_2_Mobile_Wireframe_MobileNav_copy_ern7x9.jpg)
- [Entry Results](https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593190688/PROJECT%202/WireFrames/3Project_2_Mobile_Wireframe_Entry_Result_ugken2.jpg)
- [About Page](https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593190688/PROJECT%202/WireFrames/4Project_2_Mobile_Wireframe_AboutPage_sbamsy.jpg)
- [Members Page](https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593190688/PROJECT%202/WireFrames/5Project_2_Mobile_Wireframe_MemberPage_vt5vi6.jpg)

### React Structure

[Component Chain](https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593194992/PROJECT%202/WireFrames/Project2ReactStructure_pkek79.jpg)

### MVP/PostMVP

#### MVP

- Must properly route data as to conduct search of lyrics: completed
- Must build all components to have basic structure: completed
- The user search must return the Lyrics, and Title of the song containing their search query: completed

#### PostMVP

- The members page should have links to their respective wikipedia pages: completed
- the styling should perfectly match the wireframes: completed, but changed the color scheme to black and yellow

## Components

| Component |                                                                                             Description                                                                                              |
| --------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| App       |                         Makes the initial data pull and includes React Router. This will be the landing page with the site title. Contains navigation and welcome component.                         |
| Welcome   |                                                                 Contains a welcome card with the site title, and a link to the form.                                                                 |
| Results   |                                                                        Contains a UL where the search results are displayed.                                                                         |
| Result    |                                                                         Contains the individual list items for the results.                                                                          |
| Form      |                                                                                Where the user inputs the word/phrase.                                                                                |
| About     |                                                                     Contain general info about the group. (cited from Wikipedia)                                                                     |
| Members   | Houses cards for each member of the group. The cards contain an illustration of each member, their name, and a descriptive sub title. Each card is a link to the respective member's Wikipedia page. |

## Time Priority Table

| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| Planning                |    H     |      6hrs      |     4hrs      |    4hrs     |
| App                     |    H     |      4hrs      |     10hrs     |    10hrs    |
| About                   |    H     |      3hrs      |     1hrs      |    1hrs     |
| Members                 |    H     |      5hrs      |     3hrs      |    3hrs     |
| Mobile Nav              |    H     |      3hrs      |     4hrs      |    4hrs     |
| Working with API        |    H     |      8hrs      |     10hrs     |    10hrs    |
| Data Manipulation       |    H     |     12hrs      |     14hrs     |    14hrs    |
| Styling                 |    M     |      4hrs      |     4hrs      |    4hrs     |
| Adding Links To Members |    L     |      1hrs      |     10min     |    10min    |
| Total                   |          |     48hrs      |  50hrs 10min  | 50hrs 10min |

## Additional Libraries/Tools

SCSS

## Code Snippet

There are other bits of could that I'm more proud of, but definitely took more than ten lines, but this snippet is pretty special too. This is how I was able to toggle between showing the form and the results upon the form submission, rather than having them both on the same page. I had spent a long time trying to figure this out, and it was really late at night when I finally landed on this simple solution. I'd been trying to link to another componenent, but it rerendered the array of data I needed to show when I used {Link}, so using state to toggle onClick worked perfectly.

```
{toggleResults === true ? (
    <Results resultsString={resultsString} resultsArr={resultsArr} />
    ) : ("")}

```
