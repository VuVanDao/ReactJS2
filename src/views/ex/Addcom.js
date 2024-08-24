import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Addcom extends React.Component {
  state = {
    title: "",
    salary: "",
    id: "",
  };
  handlerChangetitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handlerChangesalary = (event) => {
    this.setState({
      salary: event.target.value,
      id: Math.floor(Math.random() * 101),
    });
  };
  HandleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Nhap lai di cu");
    } else {
      console.log("CHeck name: ", this.state);
      this.props.addNewJob(this.state);
    }
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <div>
        <form>
          <label>
            Job title:
            <input
              type="text"
              value={this.state.title}
              onChange={(event) => this.handlerChangetitle(event)}
            ></input>
          </label>
          <br></br>
          <label>
            salary:
            <input
              type="text"
              value={this.state.salary}
              onChange={(event) => this.handlerChangesalary(event)}
            ></input>
          </label>
          <br></br>
          <button onClick={(event) => this.HandleSubmit(event)}>submit</button>
        </form>
      </div>
    );
  }
}
export default Addcom;
