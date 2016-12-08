const React = require("react");
const ReactDOM = require("react-dom");

class Money extends React.Component {
  constructor (){
    super();
    this.money;
  }
  render() {
    this.money = money;
    return (
      <div>
        {this.money}
        <label>$$$</label>
      </div>
    )
  }
}

window.renderMoney = ()=>{
  ReactDOM.render(<Money/>, document.getElementById('moneyDiv'));
}

class MainDropDown extends React.Component {
  constructor(){
    super();
    this.content = new Array(40);
    for (let i=0; i<fields.length; i++){
      this.content.push(<option key={fields[i].index} style={
        {
          backgroundColor: fields[i].color
        }
      } onClick={
          ()=>{}
      }>
        {fields[i].info}
      </option>);
    }
  }
  render(){
    return(
      <select>
        {this.content}
      </select>
    )
  }
}

window.renderMainDropDown = ()=>{
  ReactDOM.render(<MainDropDown/>, document.getElementById('mainDropDown'));
}
