import React, {useState} from 'react';
import Forms from './Forms.js';
import './App.css';
import styled from 'styled-components';

const FormsSty = styled.div `
width: 90%;
margin: 0 auto;
display: flex;
justify-content: center;
background: #A52A2A;
color: white;
border: 30px solid #bd7f37ff;
border-radius: 10%;
`
function App() {
  const [members, setMembers] = useState([{
    name: '',
    email:'',
    role: ''
  }]);
  const addNewMember = teamMember =>{
    setMembers([...members, teamMember]);
  };


  return (
    <FormsSty>
    <div className="App">
      <h2>Be apart of the fight, fight for something you believe in!</h2>
      <Forms addNewMember={addNewMember}/>
    </div>
    </FormsSty>
  );
}

export default App;