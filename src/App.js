import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

function App() {

  const obj1={
    "name":"isuruvdila",
    "age":28,
    "occupation":"Software Engineer"
  }
  
  return (
    <div className="container">
      <Navbar/>
      <h1>welcome new Reat App</h1>
      <Main>
        <p>testing props</p>
      </Main>
      <Main>
        <h1>testing props two</h1>
      </Main>
      <Main name={obj1.name} age="29"/>
      
      <div><h2>React with Isuru Dilshan</h2></div>
     
    </div>
  );
}

export default App;
