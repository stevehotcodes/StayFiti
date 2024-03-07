import React from 'react'
import '../Signup/Signup.scss'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>

<div class="signup-container-layout">
    
    <div class="signup-container">
       
        <div class="welcome-note-div">
            <div class="headline-icon-wrapper">
                <img src="../../../assets/Talky-12-6-2023.png" alt="" class=""/>
                <p class="headline"> New Member</p>
            </div>
        </div>
       
        <div  class="form-wrapper">
            <img src="../../../assets/Talky-12-6-2023.png" alt="" class="w-[30%]"/>
            <h3>Sign up</h3>
            <form action="" >
                <div class="label-input-group">
                    <label>Full Name</label><br/>
                    <input data-cy="fullName"  type="text" matInput name="" id="fullName" placeholder="fullname" formControlName="fullName"/>
                   
                </div>
                <div class="label-input-group">
                    <label>Username</label><br/>
                    <input data-cy="userName" type="text" name="" id="" placeholder="Username" formControlName="userName"/>
                  
                </div>
    
                <div class="label-input-group">
                    <label>Email</label><br/>
                    <input type="text" data-cy="email"   matInput name="" id="" placeholder="Email" formControlName="email"/>
                   
                    
                </div>
    
                <div class="label-input-group">
                    <label>Password</label><br/>
                    <input data-cy="password"  type="text"  matInput name="" id="" placeholder="Password" formControlName="password"/>
              
                </div>
    
                <div class="label-input-group">
                    <label>Confirm Password</label><br/>
                    <input type="text" data-cy="confirmPassword"  name="" id="" placeholder="Confirm Password" formControlName="confirmPassword"/>
                 
                    
                    
                </div>
                <div class="label-input-group">
                
                    <input  data-cy="create-user-btn"  type="submit"   class="sign-up-btn"  value="Sign up"/>
                </div >
    
                <div class="form-footer">
                    <Link to="/login">Already a Member? Login </Link>
                </div>
                
            </form>
           
    
        </div>
    </div>
    </div>
      
    
    
    
    
    </>
  )
}

export default Signup