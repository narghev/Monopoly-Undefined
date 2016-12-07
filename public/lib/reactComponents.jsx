const React = require("react");
const ReactDOM = require("react-dom");

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

window.renderMoney = ()=>{
  ReactDOM.render(<Hello/>, document.getElementById('react'));
}
