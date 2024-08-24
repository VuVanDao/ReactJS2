import React from "react";
import "./Style.scss";
import Addtodo from "./Addtodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Listodo extends React.Component {
  state = {
    list: [
      {
        id: 1,
        todo: "Doing homework",
      },
      {
        id: 2,
        todo: "Doing housework",
      },
    ],
    edittodo: {},
  };

  AddNewToDO = (todo) => {
    this.setState({
      list: [...this.state.list, todo],
    });
    toast.success("siuuu");
  };

  HandleDeleteToDo = (todo) => {
    let currState = this.state.list;
    currState = currState.filter((item) => item.id !== todo.id);
    this.setState({
      list: currState,
    });
    toast.success("xoá thành công");
  };

  HandleEditToDo = (item) => {
    let isEmpty = Object.keys(item).length == 0;
    if (!isEmpty && item.id === this.state.edittodo.id) {
      let listToDoCopy = [...this.state.list];
      let objindex = listToDoCopy.findIndex((item1) => item1.id === item.id);
      listToDoCopy[objindex].todo = this.state.edittodo.todo;
      console.log(this.state.edittodo.todo);
      if (this.state.edittodo.todo === "") toast.warning("hehheheh");
      this.setState({
        list: listToDoCopy,
        edittodo: "",
      });
      toast.success("Complete");
      return;
    } else {
      this.setState({
        edittodo: item,
      });
    }
  };

  HandleOnChange = (event) => {
    let edittodocopy = { ...this.state.edittodo };
    edittodocopy.todo = event.target.value;
    this.setState({
      edittodo: edittodocopy,
    });
  };
  HandleCancel = () => {
    this.setState({
      edittodo: {},
    });
    toast.info("Cancel...");
  };
  render() {
    let { list, edittodo } = this.state;
    let isEmpty = Object.keys(edittodo).length == 0;
    return (
      <>
        <div className="list-todo-container">
          <Addtodo addNewToDo={this.AddNewToDO}></Addtodo>
          <div className="list-todo-content">
            {list &&
              list.length > 0 &&
              list.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmpty ? (
                      <span>
                        {index + 1}-{item.todo}
                      </span>
                    ) : (
                      <>
                        {edittodo.id === item.id ? (
                          <span>
                            {index + 1}-
                            {
                              <input
                                value={edittodo.todo}
                                onChange={(event) => this.HandleOnChange(event)}
                              />
                            }
                          </span>
                        ) : (
                          <span>
                            {index + 1}-{item.todo}
                          </span>
                        )}
                      </>
                    )}

                    <button onClick={() => this.HandleEditToDo(item)}>
                      {!isEmpty && edittodo.id === item.id ? "Save" : "Edit"}
                    </button>
                    {!isEmpty && edittodo.id === item.id && (
                      <button onClick={() => this.HandleCancel()}>
                        cancel
                      </button>
                    )}
                    <button onClick={() => this.HandleDeleteToDo(item)}>
                      Del
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default Listodo;
