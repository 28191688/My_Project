
import './App.css';
function App() {
  const age=19;
  const isgreen=true;
  const users=[
    {name: "Balew", age: 23},
    {name: "solomon", age: 26},
    {name: "biniam", age: 30},
  ]

  return (
    <div className="App">
    {age >=18 ? <h1>You are Over Age</h1>: <h1>You are Under Age</h1>}
    <h2 style={{color: isgreen ? "blue" : "red" }}> This has color </h2>
    {isgreen && <button> Button </button>}
  
    {
      users.map((users, key) => {
        return< users name={users.name} age={users.age} />
      })
    }
    
    </div>
   
  );
}
const users = (props) =>{
  return (
    <div>
    {props.name} {props.age}
    </div>
  );
};

export default App;
