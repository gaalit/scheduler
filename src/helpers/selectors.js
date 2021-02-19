
//function that filters api/days and returns an array of appointments for that specific day
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

//function that transforms data from api to return a new object that matched the format needed for component.
function getInterview(state, interview) {

  if(interview === null) {
    return null;
  }

  return {...interview, interviewer: state.interviewers[interview.interviewer]}

  }

  //function that filters api/days and returns an array of interviewers for that specific day

  function getInterviewersForDay(state, day) {
    let arrInterviewersForDay = [];
    let filteredInterviewers = [];
   
    for(let objSpecificDay of state.days) {
   
     if(objSpecificDay.name === day) {
      arrInterviewersForDay = objSpecificDay.interviewers;
      }
     }
     for(let interviewer of arrInterviewersForDay) {
      filteredInterviewers.push(state.interviewers[interviewer]);
     }
     return filteredInterviewers;
   };

export {getAppointmentsForDay, getInterview, getInterviewersForDay};