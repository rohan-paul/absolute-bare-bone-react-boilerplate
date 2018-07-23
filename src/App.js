import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
	<HelloMessage name="Rohan, welcome to the developers world" />,
	document.getElementById("root")
	);
