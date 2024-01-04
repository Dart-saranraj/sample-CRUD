import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

const ContactList = (props) => {
    const clickHandler = (id)=>{
        props.removeContact(id);
    }
    const rederContactList = props.contacts.map(contact =>{
        return(  
            <ContactCard contact={contact} clickHandler={clickHandler} key = {contact.id} />
        )
    })
  return (
    <main>
    <h2 style={{ marginTop: '2em' }}>Contact List</h2>
    <Link to="/add"><button className='ui button blue right'>Add contact</button></Link>
    
    <div className='ui celled list'>{rederContactList}</div>
    </main>
  )
}

export default ContactList;