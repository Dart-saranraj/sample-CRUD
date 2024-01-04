import React from 'react'
import user from '../images/user.png'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
  const{id,name,email}=props.contact
  console.log(props.contact,"contactcard");
  return (
    <>
      <div className='item'>
            <div className='content'>
                <img className='ui avatar image' src={user} alt='user'></img>
                <Link to={{pathname:`/detail/${id}`}} state={{contact:props.contact}}> 
                <div className='header'>
                    {name}
                </div>
                </Link>
                <div>{email}</div>
             </div>
             <Link to={`/delete/${id}`}>
             <i className='trash alternate outline icon' style={{color:"red", marginTop:"10px"}} ></i>
             </Link>
             <Link to={`/edit/${id}`}>
             <i className='edit alternate outline icon' style={{color:"green", marginTop:"10px"}} ></i>
             </Link>
        
      </div>
    </>
  )
}

export default ContactCard