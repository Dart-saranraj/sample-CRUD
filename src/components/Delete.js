import React from 'react'
import { useParams } from 'react-router-dom'

const Delete = (props) => {
    const {id}=useParams();
  return (
    <div style={{ marginTop: '10em' }} className='main'>
        <div className='content'><h2>Do you want delete this contact ?</h2></div>
        <div><button className='ui button red' onClick={()=>props.removeContact(id)}>Yes</button>
        <button style={{ marginTop: '1em' }} className='ui button blue' onClick={()=> props.handleNavigation() }>No</button></div>
    </div>
  )
}

export default Delete