import React from "react";
import ChildHello from "./ChildHello";
import ChildHello2 from "./ChildHello2";
import Addcom from "./Addcom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//component dạng class
class Hello extends React.Component {
  state = {
    arrJobs: [
      {
        id: 1,
        title: "Developer",
        salary: "5000",
      },
      {
        id: 2,
        title: "Tester",
        salary: "1000",
      },
      {
        id: 3,
        title: "Project Manager",
        salary: "7000",
      },
    ],
  };
  handlerChangeFirstName = (event) => {
    this.setState({
      FirstName: event.target.value,
    });
  };
  handlerChangeLastName = (event) => {
    this.setState({
      LastName: event.target.value,
    });
  };
  HandleSubmit = (event) => {
    event.preventDefault();
    alert("hahahahaha");
    console.log("CHeck name: ", this.state);
  };

  AddNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
    toast.success("Add complete");
  };
  deleteJob = (index) => {
    let currJob = this.state.arrJobs;
    currJob = currJob.filter((item) => item.id !== index);
    this.setState({
      arrJobs: currJob,
    });
    toast.success("delete complete");
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "DidUpdate: ",
      "prev state: ",
      prevState,
      "curr state: ",
      this.state
    );
  }
  componentDidMount() {
    console.log("Runnnnnn");
  }
  render() {
    //code html trong day
    //ca js cx dc
    console.log("check: ", this.state);
    let { FirstName, LastName } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1>
            Hello html form {FirstName} {LastName}{" "}
          </h1>
        </div>
        <div>
          <form>
            <label>
              First name:
              <input
                type="text"
                value={this.state.FirstName}
                onChange={(event) => this.handlerChangeFirstName(event)}
              ></input>
            </label>
            <br></br>
            <label>
              Last name:
              <input
                type="text"
                value={this.state.LastName}
                onChange={(event) => this.handlerChangeLastName(event)}
              ></input>
            </label>
            <br></br>
            <button onClick={(event) => this.HandleSubmit(event)}>
              submit
            </button>
          </form>
        </div>
        <ChildHello
          name={this.state.FirstName}
          age={19}
          job={this.state.arrJobs}
          delJob={this.deleteJob}
        />
        <ChildHello
          name={this.state.LastName}
          address={"Nam Dinh"}
          job={this.state.arrJobs}
          delJob={this.deleteJob}
        />
        <ChildHello2 name={"siuuu"} />
        <Addcom addNewJob={this.AddNewJob} />
      </React.Fragment>
    );
  }
}

export default Hello;
