import React from "react";
import withRouter from "./WithRoutes";
import Color from "../HOC/Color.js";
import Logo from "../../assets/images/frieren.jpg";
import { connect } from "react-redux";
import { type } from "@testing-library/user-event/dist/type/index.js";
class Home extends React.Component {
  handleDeleteUser = (item) => {
    alert("hehehe");
    this.props.deleteUserRedux(item);
  };
  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    // console.log("check prop: ", this.props.dataRedux);
    let listUser = this.props.dataRedux;
    return (
      <>
        <div>Hello world with Home Page</div>
        <div>
          <img style={{ height: "300px", width: "500px" }} src={Logo}></img>
        </div>
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1}-{item.name}
                  <button
                    style={{ margin: "10px" }}
                    onClick={() => this.handleDeleteUser(item)}
                  >
                    x
                  </button>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}
// export default withRouter(Home);

const mapStatetoProps = (state) => {
  return { dataRedux: state.user };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDel) =>
      dispatch({
        type: "DELETE_USER",
        payload: userDel,
      }),
    addUserRedux: () =>
      dispatch({
        type: "CREATE_USER",
      }),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Color(Home));
