const React = require("react");
const ReactDOM = require("react-dom");

class Money  extends React.Component {
  constructor (){
    super();
    this.money;
  }
  render() {
    this.money = money;
    return (

      <div>
        {this.money}
        <label> $$$ </label>
      </div>)


  }
}

window.renderMoney = ()=>{
  ReactDOM.render(<Money/>, document.getElementById('moneyDiv'));
}
