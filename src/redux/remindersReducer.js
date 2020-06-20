import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from "./actionsTypes";
const remindersReducer = (state = [], action) => {
  let reminders = [];
  if (action.type === ADD_REMINDER) {
    reminders = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];

    console.log("reducer", reminders);
    return reminders;
  }
  if (action.type === DELETE_REMINDER) {
    reminders = state.filter((reminder) => reminder.id !== action.id);
    return reminders;
  }

  if (action.type === CLEAR_REMINDER) {
    reminders = [];
    return reminders;
  }

  return state;
};

export default remindersReducer;
