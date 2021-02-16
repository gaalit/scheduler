import React from "react";
import "components/InterviewerListItem.scss";
import classnames from "classnames"

export default function InterviewerListItem(props) {

  const InterviewerClass = classnames( "interviewers__item", {
    "interviewers__item--selected" : props.selected,
  })

  const InterviewerImageClass = classnames( "interviewers__item-image", {
    "interviewers__item-image--selected" : props.selected,
  })

  return (<li className={InterviewerClass} onClick={props.setInterviewer}>
  <img
    className={InterviewerImageClass}
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && props.name}
</li>)
}