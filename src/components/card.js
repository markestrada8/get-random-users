import React from "react";

export default function Card(props) {
  const {
    cell,
    dob,
    email,
    gender,
    id,
    location,
    login,
    name,
    phone,
    picture,
  } = props.user;
  return (
    <div className="card">
      <div className="right-side">
        <img
          src={picture.large}
          style={{ height: "100px", marginLeft: "0px" }}
        />
      </div>
      <div className="left-side">
        <h3>
          Name: {name.title}. {name.first} {name.last}
        </h3>
        <h4>Age: {dob.age}</h4>
        <h4>Email: {email}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Gender: {gender}</h4>
      </div>
    </div>
  );
}
