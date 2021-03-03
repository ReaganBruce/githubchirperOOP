import React from "react";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      message: "",
      chirps: [],
    };
  }

  componentDidMount() {
    this.setState({
      chirps: [
        ...this.state.chirps,
        { id: uuidv4(), user: "RealDonaldTrump", message: "i am not the president" },
        { id: uuidv4(), user: "Joe Biden", message: "come on, jack" },
        { id: uuidv4(), user: "Bernie Sanders", message: "i wish i was president" },
      ],
    });
  }

  handleButton(e) {
    e.preventDefault();
    if (this.state.user === "" || this.state.message === "") return; //returning nothing can break out of the function/stop the function.
    console.log(this.state.user);
    console.log(this.state.message);
    this.setState({
      user: "",
      message: "",
      chirps: [...this.state.chirps, { id: uuidv4(), user: this.state.user, message: this.state.message }],
    });
  }

  render() {
    return (
      <main className="container">
        <section className="row justify-content-around mt-5">
          <div className="col-md-6">
            <form className="form-group">
              <input
                value={this.state.user}
                onChange={(e) => this.setState({ user: e.target.value })}
              ></input>
              <input
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              ></input>
              <button onClick={(e) => this.handleButton(e)} className="btn btn-primary col-5 m-5">
                CHIRP...classy style
              </button>
            </form>
          </div>
        </section>
        <section className="row justify-content-center mt-5">
          <div className="col-md-6">
            <ul className="list-group">
              {this.state.chirps.map((chirp) => (
                <li key={`users-chirps-${chirp.id}`}>
                  @{chirp.user}: {chirp.message}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
