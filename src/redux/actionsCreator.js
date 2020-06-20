import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from "./actionsTypes";

export const addReminder = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    text,
    date,
  };
  console.log("action", action);
  return action;
};

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id,
  };
  console.log("delete", action);
  return action;
};

export const clearReminder = () => {
  const action = {
    type: CLEAR_REMINDER,
  };
  return action;
};
