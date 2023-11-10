import { useState } from "react"

export default function User(props) {
    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Count2: {count2}</h2>
            <h2>Name : {props.name}</h2>
            <h3>Location: Singapore</h3>
            <h4>Contact: kkeerthana77</h4>
        </div>
    )
}