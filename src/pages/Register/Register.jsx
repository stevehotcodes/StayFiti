import React from 'react'
import './Register.scss'

const Register = () => {
   return (
      <div>


         <form className='forms'>
            <h2>Register </h2>
            <div className="div">
               <label htmlFor="username">
                  <input type="text" placeholder='Username' />
               </label>
            </div>
            <div className="div">
               <label htmlFor="username">
                  <input type="text" placeholder='Email' />
               </label>
            </div>
            <div className="div">
               <label htmlFor="username">
                  <input type="text" placeholder='Password' />
               </label>
            </div>
            <div className="div">
               <label htmlFor="username">
                  <input type="text" placeholder='Confirm password' />
               </label>
            </div>
          <div className="checkbox">
          <input type="checkbox" />
          <div>  <p>Regegister here</p></div>
          </div>
          <div className="btn">
            <div>
               <button>Register</button>
            </div>
            <div>
               <button>Signin</button>
            </div>
          </div>
         </form>
      </div>
   )
}

export default Register