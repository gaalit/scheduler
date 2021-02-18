
//function that filters api/appointments and returns an array of appointments for that specific day
export default function getAppointmentsForDay(state, day) {
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

