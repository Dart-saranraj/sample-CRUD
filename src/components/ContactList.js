import React, { useRef } from 'react'
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

    const input = useRef("")
    const getSearchTerm=()=>{
      props.searchHandler(input.current.value)
    }
  return (
    <main>
    <h2 style={{ marginTop: '2em' }}>Contact List
    <Link to="/add"><button style={{ marginLeft: '2em' }} className='ui button blue right'>Add contact</button></Link>
    </h2>
    <div className='ui search'>
      <div className='ui icon input'>
        <input ref={input} type="text" placeholder='Search Contact' className='prompt' value={props.search} onChange={getSearchTerm} />
        <i className='search icon'></i>
      </div>
    </div>
    <div className='ui celled list'>{rederContactList}</div>
    </main>
  )
}

export default ContactList;