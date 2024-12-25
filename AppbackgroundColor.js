import './App.css';

function AppColor(props) {
  function greetUser(e) {
    document.body.style.background = e.target.value;
    const userName = document.getElementById(props.color).value;
    alert("Welcome Mr. " + userName);
  }

  return (
    <div className="App" style={{ backgroundColor: 'powderblue', color: 'black' }}>
      <h1>{props.heading}</h1>
      <p style={{ color: 'blue', font: '30px Arial' }}>
        How to create a function component.
      </p>
      
      <label className="label" id="lbl">{props.lbl}</label>
      <input id={props.color} type="text" />
      
      {}
      <button value={props.color} onClick={greetUser}>
        Colour me {props.color}
      </button>
    </div>
  );
}

export default AppColor;
