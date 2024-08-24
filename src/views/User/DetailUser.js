import React from "react";
import withRouter from "../ex/WithRoutes";
import axios from "axios";
import withNavigate from "./useNavigate";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.params) {
      let id = this.props.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  HandleBack = () => {
    this.props.navigate(`/user/`);
  };
  render() {
    let { user } = this.state;
    let isEmpty = Object.keys(user).length == 0;

    console.log("check props:", this.props);
    return (
      <>
        <div>open detail page with id: {this.props.params.id}</div>
        <div>
          {!isEmpty && (
            <>
              <span>
                User's Name: {user.first_name} {user.last_name}
              </span>
              <br></br>
              <span>User's Email: {user.email}</span>
              <br></br>
              <span>
                <img src={user.avatar}></img>
              </span>
            </>
          )}
        </div>
        <div>
          {/* <a href="/user">Back to user page</a> */}
          <button type="button" onClick={() => this.HandleBack()}>
            Back to user page
          </button>
        </div>
      </>
    );
  }
}
export default withNavigate(withRouter(DetailUser));
