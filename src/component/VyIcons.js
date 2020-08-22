import React from "react";
import Icon from "@material-ui/core/Icon";
import vymenuicon from "../images/VyMenuIcon.svg";
import vybellicon from "../images/VyBellIcon.svg";
import vybellnoti from "../images/VyBellNoti.svg";
import vycalendaricon from "../images/VyCalendarIcon.svg";

export function VyMenuIcon(props) {
  return (
    <Icon {...props}>
      <img src={vymenuicon} />
    </Icon>
  );
}

export function VyBellIcon(props) {
  return (
    <Icon {...props}>
      <img src={vybellicon} />
    </Icon>
  );
}

export function VyBellNoti(props) {
  return (
    <Icon {...props}>
      <img src={vybellnoti} />
    </Icon>
  );
}

export function VyCalendarIcon(props) {
  return (
    <Icon {...props}>
      <img src={vycalendaricon} />
    </Icon>
  );
}
