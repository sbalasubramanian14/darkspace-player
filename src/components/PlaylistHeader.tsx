import * as React from "react";
import styled from "styled-components";

interface PlaylistHeaderProps {
  active: any;
  total: any;
}

const PlaylistHeader = (props: PlaylistHeaderProps) => (
  <StyledPlaylistHeader>
    <p>{props.active.title}</p>
    <StyledJourney>
      {props.active.num} / {props.total}
    </StyledJourney>
  </StyledPlaylistHeader>
);

//styles
const StyledPlaylistHeader = styled.div`
  background: #696969;
  font-family: "Hind", sans-serif;
  font-weight: 800;
  font-size: 1.6em;
  color: #fff;
  padding: 0 20px;
  margin: 0 0 20px 0;
  min-height: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledJourney = styled.div`
  background: #565656;
  font-size: 0.8em;
  padding: 2px 5px;
  height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;

export default PlaylistHeader;
