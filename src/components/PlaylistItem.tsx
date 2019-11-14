import * as React from "react";
import StyledPlaylistItem from "./styles/StyledPlaylistItem";

interface PlaylistItemProps {
  video: any;
  active: any;
  played: any;
}

const PlaylistItem = (props: PlaylistItemProps) => (
  <StyledPlaylistItem active={props.active} played={props.played}>
    <div className="dark-player__video-nr">{props.video.num}</div>
    <div className="dark-player__video-name">{props.video.title}</div>
    <div className="dark-player__video-time">{props.video.duration}</div>
  </StyledPlaylistItem>
);

export default PlaylistItem;
