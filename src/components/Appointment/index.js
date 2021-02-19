import React, { Fragment } from 'react'
import "./styles.scss";
import useVisualMode from "../../hooks/useVisualMode";
import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
import Form from "./Form"
import Status from './Status';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";



export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
   transition(SAVING)
   Promise.resolve(props.bookInterview(props.id, interview)).then(() => transition(SHOW)).catch(error => console.log(error))
  }


 return(<article className="appointment">
  <Header time={props.time}/>
   {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
   {mode === SHOW && (
   <Show
    student={props.interview.student}
    interviewer={props.interview.interviewer}
  />)}
    {mode === CREATE && (
      <Form
      interviewers={props.interviewers}
      onCancel={() => back()}
      onSave= {save}
      />
    )}
    {mode === SAVING && (
      <Status message="Saving"/>
    )}
  </article>
  );
}