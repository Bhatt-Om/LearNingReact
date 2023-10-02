import React, { useState } from 'react'

function LearnUseSate() {
  const [signedin , setSignedIn] = useState(false);
  const [count , setCount] = useState(0);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignIn = () => {
    setSignedIn(true)
  }

  const handleSignOut = () => {
    setSignedIn(false)
  }

  const incrementCount = () => {
    setCount( count + 1 )
  }

  const handleUserDetails = (e) => {
    e.preventDefault();
    console.log('username='+ username ,'email='+ email)
  }
  return (
    <div className='learning'>
      <div>LearnUseSate</div>

      <hr/>

      <div className='signedinuser'>
        <h3>Check User SignIn Status</h3>
        {
          signedin ? (
            <div>
              <p>Welcome Back It's Good To See You'r Back At You Work</p>
              <button type='button' onClick={handleSignOut}> SignOut</button>
            </div>
          ) : (
            <div>
              <p>Please SignIn It's Hard To See You'r Not Working</p>
              <button type='button' onClick={handleSignIn}> SignIn</button>
            </div>
          )
        }
      </div>

      <hr/>

      <div className='increment count'>
        <h3>Check User SignIn Status</h3>
        <button type='button' onClick={incrementCount} >Click Me</button>
        <span> </span>
        <button type='button' onClick={()=>setCount(0)}>Reset Count</button>
        <p>You Click On The Button {count} times</p>
      </div>

      <hr/>

      <div className='using form'>
        <h3>Using Form Send UserData In To Console</h3>
        <form className='from user details' onSubmit={handleUserDetails}>
          <input type='text' value={username} placeholder='EnterYourName' onChange={(e)=> setUserName(e.target.value)}/>
          <input type='email' value={email} placeholder='EnterYourEmail' onChange={(e)=> setEmail(e.target.value)}/>
          <button type='submit' >Submit</button>
        </form>
      </div>

      <hr/>
      
    </div>
  )
}

export default LearnUseSate