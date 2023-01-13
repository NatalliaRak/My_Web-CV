import React from "react";

export default function JamText(){


    return(
        <div>
        <h3>OBJECTIVE</h3>
            <p>
                The web-app Jamming searches the tracks on Spotify, adds the searched tracks to the Playlist and saves it on the Spotify user’s library.
             </p>
            <h4>BACKGROUND</h4>
            

            <ul> The Jamming search results provide the features of the each track on desktop screens:
                <li>the track title, </li>
                <li>the artist name,</li>
                <li>the album title,</li>
                <li>the track preview,</li>
                <li>the album cover.</li>
            </ul>
            
            <p> There is a possibility to save the searched tracks to the Playlist as to remove the added track from the Playlist. The user can give the personalized Playlist title. On the mobile screens the image covers and the track previews are not available. The Search button provides the Authorization of the user on Spotify, after the second click – the search of the tracks by the artist’s name, song title or any other key word on Spotify, If the user is already indicated on Spotify, the search starts after the second click. The Save on Spotify button saves the created Playlist on the Spotify library.
            </p> 
            <h3>TECHNICAL DESIGN</h3>

            <ul>The Jamming web application is created on React.js. It has six components:

                <li>the App;</li>
                <li>the SearchBar,</li>
                <li>the SearchResults,</li>
                <li>the Track,</li>
                <li>the Tracklist</li>
                <li>the Playlist.</li>
          </ul>
            <p> The SearchBar, the SearchResults, the Track, the Tracklist and the Playlist React Components contain the functional elements of the web-app and imported into the App React component. So the App React Component includes constructor and such methods as <i>.addTrack</i>, <i>.removeTrack</i>, <i>.savePlaylist</i>, <i>.search</i> and <i>.updatePlaylistName</i> methods and the binding that methods provide the triggering of the other React Components and its elements. The Spotify.js is also imported to the App React Component. That file provides the authorization, the search and Playlist saving on Spotify. The js-file uses <i>.getAccessToken</i>, <i>.search</i> and <i>.savePlaylist</i> methods. The <i>.getAccessToken</i> method gets a user’s access token for requesting to the Spotify API and authorization on Spotify and redirects the user to the web app page after. The .search method with the value term provides the search on Spotify: it uses the Spotify GET request and to the following Spotify endpoint. The .savePlaylist method accepts a playlist name and an array of track URIs. It requists the userId, the playlistId and new playlist’sId.
            </p>
        </div>
    )
}