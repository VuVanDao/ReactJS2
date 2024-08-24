import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Addtodo extends React.Component {
  state = {
    id: "",
    todo: "",
  };
  HandleChange = (event) => {
    this.setState({
      id: Math.floor(Math.random() * 101),
      todo: event.target.value,
    });
  };
  HandleAddNewToDo = () => {
    if (this.state.todo.length <= 1) {
      toast.error("Nhap cmm vao di");
      return;
    } else {
      this.props.addNewToDo(this.state);
      this.setState({
        todo: "",
      });
    }
  };
  render() {
    return (
      <div className="add-todo">
        <input
          value={this.state.todo}
          type="text"
          onChange={(event) => this.HandleChange(event)}
        ></input>
        <button type="button" onClick={() => this.HandleAddNewToDo()}>
          add
        </button>
      </div>
    );
  }
}
export default Addtodo;
