import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2> This is About page.</h2>
        <div>
          Loggedin User
          <UserContext.Consumer>
            {({loggedInUser}) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User name={'Keerthana Kalidass(function)'}  /> */}
        <UserClass name={'Keerthana Kalidass(class)'} location={'Singapore'} />
      </div>
    )
  }
}
