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

class Card extends React.Component {
  constructor (){
    super();
    this.text;
    this.style = {
      color: "#CA2020",
      textAlign: "center",
      fontSize: "50px",
      fontWeight: "bold",
      backgroundColor: "#C3C348",
      zIndex: "1",
      width: "100%"
    }
  }
  render() {
    this.text = cardText;
    return (
      <div style={this.style}>
        {this.text}
      </div>
    )
  }
}

window.showCard = ()=>{
  document.getElementById("blackContainer").appendChild(blackDiv);
  ReactDOM.render(<Card/>, document.getElementById('cardDiv'));
}

class Box extends React.Component{
  constructor(){
    super();
    this.style={
      position: "absolute",
      backgroundColor: '#f4d610',
      top: "30vh",
      left: '35vw',
      zIndex: "2",
      width: "30vw",
      height: "50vh",
      border: 'solid',
      borderRadius: '1em',
      borderColor: '#594321',
      opacity: "0.9"
    },
    this.t;
    this.style.p1={
      textAlign: "center",
      fontSize: "24px"
    }
    this.src;
  }
  time(){
    this.t = setTimeout(()=>{
      this.no();
    },7500)
  }
  yes(){
    clearTimeout(Box.t);
    socket.emit("buyMe?yes");
    document.getElementById('blackContainer').removeChild(document.getElementById('blackContainer').childNodes[0]);
    document.getElementById('buyMe?box').removeChild(document.getElementById('buyMe?box').childNodes[0]);
  }
  no(){
    clearTimeout(Box.t);
    socket.emit("buyMe?no");
    document.getElementById('blackContainer').removeChild(document.getElementById('blackContainer').childNodes[0]);
    document.getElementById('buyMe?box').removeChild(document.getElementById('buyMe?box').childNodes[0]);
  }
  render(){
    this.time();
    const fieldImg = new Image();
    return(
      <div style = {this.style}>
        <p style = {this.style.p1}>Do you want to buy this street?</p>
        <img width={"50%"} height={"75%"} src={this.src} style = {{position:"absolute", right: "25%"}} />
        <img onClick={this.no}  src={"../imgs/no.png"} width={"75px"} height={"75px"} style={{position: 'absolute', left: '15px', bottom: '15px'}}/>
        <img onClick={this.yes} src={"../imgs/yes.png"} width={"75px"} height={"75px"} style={{position: 'absolute', right: '15px', bottom: '15px'}}/>
      </div>
    )
  }
}
window.askPlayer = ()=>{
  document.getElementById("blackContainer").appendChild(blackDiv);
  ReactDOM.render(<Box />, document.getElementById("buyMe?box"));
}
