import React from "react";

class Welcome extends React.Component {
  componentDidMount() {
    var css = "h1 { color: red; } #styleClass{background: yellow;} ",
      head = document.getElementById("styleClass"),
      style = document.createElement("style");

    head.appendChild(style);
    style.id = "style";
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
  render() {
    return (
      <div id="styleClass">
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

export default Welcome;
