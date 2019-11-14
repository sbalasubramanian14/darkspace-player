import React, { useState, useEffect } from "react";
import Video from "../Video";
import Playlist from "../containers/Playlist";
import { ThemeProvider } from "styled-components";
import StyledDarkPlayer from "../styles/StyledDarkPlayer";

interface DarkPlayerProps {
  match: any;
  history: any;
  location: any;
}

const DarkPlayer = (props: any) => {
  const videos = {
    playlistId: "wbn_rdx",
    playlist: [
      {
        num: 1,
        title: "We dont Talk Anymore",
        id: "3AtDnEC4zak",
        duration: "5:51",
        video: "https://www.youtube.com/embed/3AtDnEC4zak"
      },
      {
        num: 2,
        title: "Tokyo Ghoul",
        id: "uMeR2W19wT0",
        duration: "1:30",
        video: "https://www.youtube.com/embed/uMeR2W19wT0"
      },
      {
        num: 3,
        title: "Warriors: Imagine Dragon",
        id: "fmI_Ndrxy14",
        duration: "5:35",
        video: "https://www.youtube.com/embed/fmI_Ndrxy14"
      },
      {
        num: 4,
        title: "True Survivoe",
        id: "ZTidn2dBYbY",
        duration: "4:34",
        video: "https://www.youtube.com/embed/ZTidn2dBYbY"
      }
    ]
  };

  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false
  });

  useEffect(() => {
    const videoId = props.match.params.activeVideo;
    console.log("videoid", videoId);
    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        video => video.id === videoId
      );
      setState(prev => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: props.location.autoplay
      }));
    } else {
      props.history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false
      });
    }
  }, [
    props.history,
    props.location.autoplay,
    props.match.params.activeVideo,
    state.activeVideo.id,
    state.videos
  ]);

  const nightModeCallback = () => {};

  const endCallback = () => {};

  const progressCallback = () => {};

  console.log([state, props]);
  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos !== null ? (
        <StyledDarkPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          />
        </StyledDarkPlayer>
      ) : null}
    </ThemeProvider>
  );
};

// Themes
const theme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "#fff"
};

const themeLight = {
  bgcolor: "#fff",
  bgcolorItem: "#fff",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "#353535"
};

export default DarkPlayer;
