import * as React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

interface VideoProps {
  active: any;
  autoplay: any;
  endCallback: any;
  progressCallback: any;
}

const Video = (props: VideoProps) => (
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0" }}
        playing={props.autoplay}
        controls={true}
        url={props.active.video}
        onEnded={props.endCallback}
        onProgress={props.progressCallback}
      />
    </StyledVideoWrapper>
  </StyledVideo>
);

// Styles
const StyledVideoWrapper = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`;

const StyledVideo = styled.div`
  position: relative;
  -webkit-box-flex: 2;
  -ms-flex: 2 0 900px;
  flex: 2 0 900px;

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`;

export default Video;
