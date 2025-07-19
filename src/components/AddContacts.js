import React, { useState } from 'react'

export default function AddContacts() {
    const [contactData, setContactData] = useState({name:"", email:""});

    const handleChange = (e) => {
        if(e.target.name === "name") {
            setContactData({...contactData, name: e.target.value})
        } 
        else{
            setContactData({...contactData, email: e.target.value})
        }
    }  
    const handleAdd = () => {
        if(contactData.name ==="" || contactData.email ==="") {
            alert("please fill all the fields")
            return
        } 
        AddContacts(contactData)
    }
  return (
    <div className='formHeader'>
        <div className='add-contacts'>Add Contacts</div>
        <form>
            <label>Name</label><br/>
            <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange}/><br/>            
            <label>Email</label><br/>
            <input type='email' placeholder='Enter Email' name='Email' value={contactData.email} onChange={handleChange}/>
        </form>
        <button className='btn'onClick={handleAdd}>Add Contacts</button>
    </div>
  )
}
