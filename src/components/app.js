import React, { Component } from "react";
import axios from "axios";
import Card from "./card";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      dogImageUrl: "",
      userData: {
        cell: "",
        dob: "",
        email: "",
        gender: "",
        id: "",
        location: "",
        login: "",
        name: "",
        phone: "",
        picture: "",
      },
      users: [],
      amount: "",
    };

    this.getDog = this.getDog.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getDog() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log("dog response ", response);
        this.setState({
          ...this.state,
          dogImageUrl: response.data.message,
        });
      })
      .catch((error) => {
        console.log("dog get error ", error);
      });
  }

  getUser() {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        console.log("user response ", response);
        this.setState({
          ...this.state,
          userData: response.data.results[0],
        });
      })
      .catch((error) => {
        console.log("user get error ", error);
      });
    // console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      amount: event.target.value,
    });
  }

  getUsers(event) {
    // const amtString = amount + "";
    // console.log(amtString, typeof amtString);

    console.log(event);
    event.preventDefault();
    axios
      .get(`https://randomuser.me/api/?results=${this.state.amount}`)
      .then((response) => {
        console.log("user response ", response);
        this.setState({
          ...this.state,
          userListData: response.data.results,
        });
      })
      .catch((error) => {
        console.log("user get error ", error);
      });
  }

  render() {
    // cell: "(915)-073-9084"
    // dob: {date: '1958-09-01T00:15:46.504Z', age: 64}
    // email: "james.schriek@example.com"
    // gender: "male"
    // id: {name: 'BSN', value: '50536559'}
    // location: {street: {…}, city: 'Noordijk', state: 'Noord-Brabant', country: 'Netherlands', postcode: 61690, …}
    // login: {uuid: '6a8c3989-a44e-4e03-be15-14ac7dceedf9', username: 'bigfrog164', password: 'sylvia', salt: 'Nrp64dpD', md5: 'edfdd8c8b6843ea30a86b365712c7e4c', …}
    // name: {title: 'Mr', first: 'James', last: 'Schriek'}
    // nat: "NL"
    // phone: "(487)-888-9683"
    // picture: {large: 'https://randomuser.me/api/portraits/men/76.jpg', medium: 'https://randomuser.me/api/portraits/med/men/76.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/76.jpg'}
    // registered: {date: '2014-03-05T08:09:20.824Z', age: 8}

    // if (this.state.userList) {
    //   const userDisplayList = this.state.users.map((user) => {

    return (
      <div className="app">
        {/* <div>
          <h1>Today's Dog</h1>

          <img
            src={this.state.dogImageUrl}
            style={{ height: "300px", width: "100%" }}
          />
          <button
            onClick={this.getDog}
            style={{ padding: "10px", width: "100px" }}
          >
            Get Dog
          </button>
        </div>
        <div> */}
        <h1>Today's Users</h1>

        {/* <Card user={this.state.userData} /> */}
        <div className="cards">
          {this.state.userListData
            ? this.state.userListData.map((user) => {
                console.log(user);
                return <Card key={user.login.uuid} user={user} />;
              })
            : null}
        </div>
        <form
          onSubmit={this.getUsers}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            name="name"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <button
            // onClick={this.getUsers}
            style={{
              padding: "10px",
              width: "100px",
            }}
          >
            Get Users
          </button>
        </form>
      </div>
    );
  }
}
