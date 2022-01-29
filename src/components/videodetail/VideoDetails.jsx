import { Paper, Typography } from "@material-ui/core";
import React from "react";

const VideoDetails = ({
  video: {
    id: { videoId },
    snippet: { title, channelTittle, description },
  },
}) => {
  if (!videoId) return <div>Loading....</div>;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={0} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {title} - {channelTittle}
        </Typography>
        <Typography variant="subtitle1">{channelTittle}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Paper>
    </React.Fragment>
  );
};
export default VideoDetails;
