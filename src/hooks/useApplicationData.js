import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  //Sets the current day
  const setDay = (day) => setState({ ...state, day });

  //Increases (if canceled appointment) or decreases (if booked appointment) number of spots available
  const spotCounter = (action) => {
    const copyOfDaysArray = [...state.days];
    const modifier = action === "book" ? -1 : 1;

    for (let day in copyOfDaysArray) {
      if (copyOfDaysArray[day].name === state.day) {
        copyOfDaysArray[day].spots += modifier;
      }
    }
    return copyOfDaysArray;
  };

  //Creates a new interview and performs put request to api
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = spotCounter("book");

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      setState({ ...state, appointments, days });
    });
  };

  //Deletes interview and deletes from api
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = spotCounter("cancel");

    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({ ...state, appointments, days });
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  return { state, setDay, bookInterview, cancelInterview };
}
