import React from "react";

//component dạng class
class Hello extends React.Component {
  state = {
    name: "Van Dao",
    age: 20,
    address: "Nam Dinh",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    let name = "ehhehehehehehe";
    return (
      <React.Fragment>
        <div>
          <label>
            Nhập tên đi cu
            <br></br>
            <input
              value={this.state.name}
              type="text"
              onChange={(event) => {
                this.handleOnChangeName(event);
              }}
            />
          </label>

          <h1>EHEHEHE i am {name}</h1>
          <h2>AHAHAHA my name isss {this.state.name}</h2>
        </div>
        <div>
          <img src="https://i.pinimg.com/564x/ad/73/9b/ad739bd4d256684c46ca24f13e71347c.jpg" />
        </div>
      </React.Fragment>
    );
  }
}

export default Hello;
