import React, { Component } from "react";

export default class Recherche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [
        "pomme",
        "peche",
        "poire",
        "abricot",
        "ananas",
        "raisin",
        "papaye",
        "orange",
        "avocat",
      ],
      entre: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ entre: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <h1 className="center">.Rechercher votre fruits preferé.</h1>
        <div className="container">
          <div className="row center">
            <div className="col l3 s6">
              <label htmlFor="">Saisisser le nom: </label>
              <input
                type="text"
                className=""
                value={this.state.entre}
                onChange={this.handleChange}
              />
              {this.state.entre == "" ? (
                <div>
                  {this.state.tab.map((elem) => (
                    <h5 key={elem}> {elem} </h5>
                  ))}
                </div>
              ) : (
                <div>
                  <p>{this.state.entre}</p>
                  {this.state.tab
                    .filter((e) => e.includes(this.state.entre))
                    .map((e) => (
                      <h5 key={e}> {e} </h5>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
