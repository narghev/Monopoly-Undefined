const React = require("react");
const ReactDOM = require("react-dom");
const mddcanvas = document.getElementById("mainDropDownCanvas").getContext('2d');

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
      }>
        {fields[i].info}
      </option>);
    }
  }

  onChange(){
    document.getElementById("blackContainer").appendChild(blackDiv);
    mddcanvas.clearRect(0, 0,mddcanvas.width, mddcanvas.height);
    const selectedField = document.getElementById("mainDropDown").childNodes[0].selectedIndex;
    const fieldImg = new Image();
    fieldImg.src = "../imgs/cards/"+selectedField+".PNG";
    fieldImg.onload = ()=>{
      mddcanvas.drawImage(fieldImg, 0,  0 ,
        document.getElementById("mainDropDownCanvas").width ,
        document.getElementById("mainDropDownCanvas").height );
      };

    }

  render(){
    return(
      <select onChange={this.onChange}>
        {this.content}
      </select>
    )
  }
}

window.renderMainDropDown = ()=>{
  ReactDOM.render(<MainDropDown/>, document.getElementById('mainDropDown'));
}
