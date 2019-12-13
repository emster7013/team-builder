import React, {useState} from 'react';

const MemberForms = props =>{
    //use one useState and nest in several items
     const [names, setNames] =useState({
          name:'',
          role:'', 
          email:''
        });
     const changeHandler = event =>{
         setNames({...names, [event.target.name]: event.target.value})
    }

     const handleSubmit= event=>{
        
         event.preventDefault();
         const newMember ={
             ...names, 
             memberID: Date.now()        
         }
      props.addNewMember(newMember);
     }
     console.log(props);
    return(
        //must add label htmlFor to be a jsx property
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Ye Fighters Name: </label>
            <input
             type='text' 
             name='name' 
             onChange={changeHandler} 
             value={names.name}/><br></br>

            <label htmlFor='email' onChange={changeHandler} value={names.email}>Ye old Email: </label>
            <input 
            type='email'
            name='email'
            onChange={changeHandler}
            value={names.email}/><br></br>


        <label htmlFor='role'>
            Select a warrior class: 
        </label>
        <select type='text' name='role'  onChange={changeHandler} value={names.role}>
        <option value='Warrior'>
            Become a Warrior and fight to become legendary!
        </option>
        <option value='Mage'>
            Become a mage and build thy magic to defeat thy foes!
        </option>
        <option value='Archer'>
            Become an Archer and become the best marksmen of all!
        </option>
        <option value='Knight'>
            Become a knight and be one of the most gentle fighters  'i  the kingdom!
        </option>
        <option value='Agent'>
            Become an agent, thou shall be dog at pretending thou art something thy  not
        </option>
        </select>
        
        <button type='submit'> Join Ye Kingdom!</button>
        </form>
    )
 }
export default MemberForms;