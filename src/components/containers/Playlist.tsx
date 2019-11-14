import * as React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import NightMode from "../NightMode";
import styled from "styled-components";

interface PlaylistProps {
  videos: any;
  active: any;
  nightModeCallback: any;
  nightMode: any;
}

const Playlist = (props: PlaylistProps) => (
  <StyledPlaylist>
    <NightMode
      nightModeCallback={props.nightModeCallback}
      nightMode={props.nightMode}
    />
    <PlaylistHeader active={props.active} total={props.videos.length} />
    <PlaylistItems videos={props.videos} active={props.active} />
  </StyledPlaylist>
);

// Styles
const StyledPlaylist = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 450px;
  flex: 1 1 450px;
  overflow: hidden;
  color: white;

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`;

export default Playlist;
