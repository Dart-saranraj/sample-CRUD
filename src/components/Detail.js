import React from 'react';
import user from '../images/user1.jpg';
import { useLocation} from 'react-router-dom';

const Detail = (props) => {
  const location = useLocation();
  const { contact } = location.state || {};
  console.log(contact,"ghfghf")

  if (!contact) {
    return <div style={{ marginTop: '10em' }}>Contact data not found</div>;
  }

  const { name, email } = contact;
  console.log(name,"name")

  return (
    <div className='main' style={{ marginTop: '10em' }}>
      <div className='ui card centered'>
        <div className='image'>
          <img src={user} alt='user' />
        </div>
        <div className='content'>
          <div className='header'>{name}</div>
          <div className='description'>{email}</div>
        </div>
          <div className='center-div'>
          {/*  <Link to='/'><button style={{marginLeft:'50px', marginBottom: '10px'}} className='ui button green'>Back to the contact list</button></Link> */}
          <button style={{marginLeft:'50px', marginBottom: '10px'}} className='ui button green' onClick={()=>props.handleNavigation()}>Back to the contact list</button> 
          </div>
      </div>
    </div>
  );
};

export default Detail;
