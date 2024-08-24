import React from "react";
import axios from "axios";
import "./Listuser.scss";
import withRouter from "../ex/WithRoutes";
import withNavigate from "./useNavigate";
class ListUser extends React.Component {
  state = {
    Listuser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    console.log("check res:", res.data.data);
    this.setState({
      Listuser: res && res.data && res.data.data ? res.data.data : [],
    });
    console.log(this.state);
  }
  HandleViewDetail = (user) => {
    this.props.navigate(`/user/${user.id}`);
  };
  render() {
    let { Listuser } = this.state;
    return (
      <div className="listuser-container">
        <span>Information User</span>
        <div className="title">
          {Listuser &&
            Listuser.length > 0 &&
            Listuser.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="title-child"
                  onClick={() => this.HandleViewDetail(item)}
                >
                  {index + 1}-{item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default withNavigate(withRouter(ListUser));
