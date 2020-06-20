import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addReminder,
  deleteReminder,
  clearReminder,
} from "./redux/actionsCreator";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "../src/reminders.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };

  renderReminders = () => {
    return this.props.reminders.map((reminder) => (
      <ul className="list-group-item" key={reminder.id}>
        <li className="list-group">{reminder.text}</li>
        <li className="list-group">
          {moment(new Date(reminder.date)).fromNow()}
        </li>
        <li
          className=" closeIcon list-group "
          onClick={() => this.props.deleteReminder(reminder.id)}
        >
          X
        </li>
      </ul>
    ));
  };

  addReminderRender = () => {
    if (this.state.text && this.state.date) {
      this.props.addReminder(this.state.text, this.state.date);
      this.setState({ text: "", date: "" });
      localStorage.setItem("reminders", JSON.stringify(this.state));
    }

    return null;
  };

  render() {
    console.log(this.props);
    return (
      <div className="App " style={{ width: "75%" }}>
        <img src={logo} alt="reminder" />
        <div className="reminderTitle">
          <h2>Reminder Redux</h2>
        </div>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Your Langage"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />

        <DatePicker
          className="form-control"
          placeholderText="Enter Date"
          value={this.state.date}
          selected={this.state.date}
          onChange={(date) => this.setState({ date })}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d , yyyy h:mm aa"
          timeCaption="time"
        />
        <button
          className="btn btn-primary btn-block"
          onClick={this.addReminderRender}
        >
          Add Reminder
        </button>
        {this.renderReminders()}
        <button
          className=" btn btn-danger btn-block "
          onClick={() => {
            this.props.clearReminder();
          }}
        >
          Clear Reminder
        </button>
      </div>
    );
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     addReminder: () => dispatch(addReminder()),
//   };
// }
// export default connect(null, mapDispatchToProps)(App);

// function mapStateToProps(state){
//   return { reminders: state };
// }
// export default connect(mapStateToProps, { addReminder })(App);
export default connect(
  (state) => {
    return { reminders: state };
  },
  { addReminder, deleteReminder, clearReminder }
)(App);
