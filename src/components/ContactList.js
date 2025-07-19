import React from 'react'

export default function ContactList({contact}) {
    const ContactList = contact.map((val) => {
        return (
            <div className='contacts'>
               <div style={{marginLeft: "2px"}}>{val.name}</div>
               <div className='email'>{val.email}</div>
               
            </div>
        ) 
    })
return (

    <>
        <div className='ContactHeader'>ContactList</div>
        <div>{ContactList}</div>
    </>
  )
}