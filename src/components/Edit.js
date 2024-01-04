import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Edit = ({contacts, handleEdit,editEmail,editName,setEditEmail,setEditName}) => {
    const {id} = useParams()
    const contact = contacts.find(contact => (contact.id).toString()=== id);

    useEffect(()=>{
        if(contact){
          setEditName(contact.name);
          setEditEmail(contact.email);
        }
      },[contact, setEditName,setEditEmail])
    

  return (
    <div className='ui celled list'>
        <form className='ui form' onSubmit={(e)=>{e.preventDefault()}}>
            <h2 style={{ marginTop: '2em' }}>Add Contact</h2>
            <div className='field'>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder='Name'
                    value={editName}
                    onChange={(e) => setEditName( e.target.value )}
                />
            </div>
            <div className='field'>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder='Email'
                    value={editEmail}
                    onChange={(e) => setEditEmail( e.target.value )}
                />
            </div>
            <button className="ui button blue" type="submit" onClick={()=>handleEdit(contact.id)}>Submit</button>
        </form>
    </div>
  )
}

export default Edit