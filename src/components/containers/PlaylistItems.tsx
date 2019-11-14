import * as React from "react";
import PlaylistItem from "../PlaylistItem";
import styled from "styled-components";

const PlaylistItems = (props: any) => (
  <StyledPlaylistitems>
    <PlaylistItem />
  </StyledPlaylistitems>
);

// Styles
const StyledPlaylistitems = styled.div`
  padding: 0 20px 0 20px;
  overflow-y: auto;
  height: 28vw;
  max-height: 500px;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default PlaylistItems;
