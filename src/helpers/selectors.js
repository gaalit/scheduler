
//function that filters api/appointments and returns an array of appointments for that specific day
function getAppointmentsForDay(state, day) {
 let arrAppointmentsForDay = [];
 let filteredAppointment = [];

 for(let objSpecificDay of state.days) {

  if(objSpecificDay.name === day) {
   arrAppointmentsForDay = objSpecificDay.appointments;
   }
  }
  for(let appointment of arrAppointmentsForDay) {
   filteredAppointment.push(state.appointments[appointment]);
  }
  return filteredAppointment;
};

//The function should return a new object containing the interview data when we pass it an object that contains the interviewer.
                  //state.appointments["3"].interview)
function getInterview(state, interview) {

  if(interview === null) {
    return null;
  }

return {...interview, interviewer: state.interviewers[interview.interviewer]}

   
  }


// {  
//   "student": "Lydia Miller-Jones",
//   "interviewer": {  
//     "id": 1,
//     "name": "Sylvia Palmer",
//     "avatar": "https://i.imgur.com/LpaY82x.png"
//   }
// }

//interview: { student: "Chad Takahashi", interviewer: 2 }

//have to add the interviewers info into the interview key


export {getAppointmentsForDay, getInterview};