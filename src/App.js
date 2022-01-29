import "./App.css";
import youtube from "./api/youtube";
import { Grid } from "@material-ui/core";
import SeachBar from "./components/searchBar/SearchBar";
import { useState } from "react";
import VideoDetails from "./components/videodetail/VideoDetails";
import VideoList from "./components/videolist/VideoList";
function App() {
  const [videos, setVideos] = useState([]);
  const [selectVideo , setSelectVideo] = useState({ id : {} , snippet : {}})

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SeachBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video={selectVideo}/>
          </Grid>
          <Grid item xs={4}>
            <VideoList videos ={videos} onVideoSelect={setSelectVideo}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem) {
    const {
      data: { items: videos },
    } = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDJdYqDqgFJbPB37DO6YiO9X7glMsCKIdI",
        q: searchItem,
      },
    });
   setVideos(videos)
   setSelectVideo(videos[0])
  }
}

export default App;
