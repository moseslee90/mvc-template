var React = require("react");

class Home extends React.Component {
  render() {
    let data = this.props.data[0];
    let name = data.name;
    return (
      <html>
        <head />
        <body>
          <h3>Hello {name}</h3>
        </body>
      </html>
    );
  }
}

module.exports = Home;
