import React, { Component } from "react";
import UserCard from "../UserCard/UserCard";

const List = (props) => {
  console.log(props);
  return props.users.map((user) => <UserCard user={user} />);
};

export default List;
