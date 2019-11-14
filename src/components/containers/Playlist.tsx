import * as React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import NightMode from "../NightMode";
import styled from "styled-components";

const Playlist = (props: any) => (
  <StyledPlaylist>
    <NightMode />
    <PlaylistHeader />
    <PlaylistItems />
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
