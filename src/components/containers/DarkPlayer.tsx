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

export interface IVideo {
  num: number;
  title: string;
  id: string;
  duration: string;
  video: string;
}

const DarkPlayer = (props: any) => {
  const videos = {
    playlistId: "My Songs",
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

  const storage = localStorage.getItem(`${videos.playlistId}`);
  const savedState = storage ? JSON.parse(storage) : null;
  const [state, setState] = useState({
    videos: savedState ? savedState.videos : videos.playlist,
    activeVideo: savedState ? savedState.activeVideo : videos.playlist[0],
    nightMode: savedState ? savedState.nightMode : true,
    playlistId: savedState ? savedState.playlistId : videos.playlistId,
    autoplay: false
  });

  useEffect(() => {
    const videoId = props.match.params.activeVideo;
    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        (video: IVideo) => video.id === videoId
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

  useEffect(() => {
    localStorage.setItem(`${state.playlistId}`, JSON.stringify({ ...state }));
  }, [state]);

  const nightModeCallback = () => {
    setState(prev => ({
      ...prev,
      nightMode: !prev.nightMode
    }));
  };

  const endCallback = () => {
    const videoId = props.match.params.activeVideo;
    const currentVideoIndex = state.videos.findIndex(
      (video: IVideo) => video.id === videoId
    );
    const nextVideo =
      currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

    props.history.push({
      pathname: `${state.videos[nextVideo].id}`,
      autoplay: true
    });
  };

  const progressCallback = (e: any) => {
    if (e.playedSeconds > 10 && e.playedSeconds < 11) {
      setState(prevState => ({
        ...prevState,
        videos: prevState.videos.map((video: IVideo) => {
          return video.id === prevState.activeVideo.id
            ? { ...video, played: true }
            : video;
        })
      }));
    }
  };

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
