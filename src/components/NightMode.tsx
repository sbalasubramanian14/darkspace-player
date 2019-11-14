import * as React from "react";
import StyledNightmode from "./styles/StyledNightmode";

interface NightModeProps {
  nightMode: boolean;
  nightModeCallback: any;
}

const NightMode = (props: NightModeProps) => (
  <StyledNightmode>
    <span>NightMode: </span>
    <label className="switch">
      <input
        type="checkbox"
        checked={props.nightMode}
        onChange={props.nightModeCallback}
      />
      <span className="slider round "></span>
    </label>
  </StyledNightmode>
);

export default NightMode;
