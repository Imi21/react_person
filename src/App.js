
import './App.css';
import Person from './componentes/Person';

const persona1 = {
    name: "Pedro",
    surname: "Amigo",
    age: 35
  };
  const persona2 = {
    name: "Antonio",
    surname: "Amigo",
    age: 35
  };
  const persona3 = {
    name: "Jesus",
    surname: "Amigo",
    age: 35
  }
 
function App(){
  return (
    <div>
      <Person objeto={persona1}/>
      <br/>
      <Person objeto={persona2}/>
      <br/>
      <Person objeto={persona3}/>
    </div>
  );
}

export default App;
