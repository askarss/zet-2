import React  from 'react'
import './App.css';

function App() {
//  let count = 0 ;
  const [count,setCount] = React.useState(0);


 const onCLickPlus = () => {
 setCount(count + 1);
 }

 const onCLickMinus = () => {
  setCount(count - 1);
  
};


  
  return (
    <div className="App">
      <div>
        <h2>Счетчик</h2>
        <h1>{count}</h1>
        <button onClick={onCLickMinus} className="minus">-Минус</button>
        <button onClick={ onCLickPlus} className="Plus">плюс+</button>
      </div>
     
    </div>

  );
  }
  
  export default App;
 
  





