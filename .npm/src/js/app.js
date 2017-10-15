import React from "react";
import ReactDOM from "react-dom";

// Layout component - prints out our hello world message.
class Layout extends React.Component {
  render() {
    return (
      <h2>Hello World</h2>
    );
  }
}

// Render our Layout component to our app div (index.html).
const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
