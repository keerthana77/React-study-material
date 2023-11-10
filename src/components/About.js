import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

export default class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor")
  }

  componentDidMount() {
    console.log("parent mount")
  }

  render() {
    console.log("parent render")
    return (
      <div>
        <h1>About</h1>
        <h2> This is About page.</h2>
        {/* <User name={'Keerthana Kalidass(function)'}  /> */}
        <UserClass name={'Keerthana Kalidass(class)'} location={'Singapore'} />
      </div>
    )
  }
}
