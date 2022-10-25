import { useState } from 'react';
import MainContainer from './components/main-container/main-container.component';
import './App.css';
import Button from './components/button/button.component';


function App() {
  const [advice,setAdvice] = useState('Please click the new advice button');
  const [id,setId] = useState(0);

  const handleClick = (response)=>{
    const newAdvice = response.slip.advice;
    const newId = response.slip.id;
    setAdvice(newAdvice);
    setId(newId);
  }

  return (
    <div className="App">
      {/* main container with button to fetch the api inside*/}
      <MainContainer advice={advice} id={id}/>
      <Button handleClick={handleClick}/>
      
    </div>
  );
}

export default App;
