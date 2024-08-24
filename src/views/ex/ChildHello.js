import React from "react";
// import Demo from "./Demo.css";
import Demo from "./Demo.scss";

//component dạng class
class ChildHello extends React.Component {
  state = {
    showJobs: false,
  };
  OnchangeBtnShow = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  HandleOnClickDel = (item) => {
    this.props.delJob(item);
  };
  render() {
    //code html trong day
    //ca js cx dc
    console.log(this.props);
    let { name, age, address, job } = this.props;
    let { showJobs } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1>
            ChildHello html form {name} - {age} - {address}
          </h1>
        </div>
        {!showJobs ? (
          <div>
            <button className="btn" onClick={() => this.OnchangeBtnShow()}>
              Show
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => this.OnchangeBtnShow()}>Hide</button>
          </div>
        )}

        <div className="job-list">
          {
            //
            job.map((item, index) => {
              if (this.state.showJobs)
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                    <button onClick={() => this.HandleOnClickDel(item.id)}>
                      X
                    </button>
                  </div>
                );
            })
          }
        </div>
      </React.Fragment>
    );
  }
}

export default ChildHello;
