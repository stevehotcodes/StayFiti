import React from 'react'
import '../Login/Login.scss'

const Login = () => {
  return (
    
 <div class="signup-layout-container">
    <div class="signup-container">

        <div class="welcome-note-div">
            <div class="headline-icon-wrapper">
                <img src="../../../assets/Talky-12-6-2023.png" alt="" class=""/>
                <p class="headline">Already a Memeber of the Stay Fiti</p>
                
            </div>
        </div>
    

        <div class="form-wrapper">
            <img src="../../../assets/Talky-12-6-2023.png" alt="" class="w-[30%]"/>
             <h3 class="css-3d-text mt-10">Stay Fiti </h3>
            <h3>Log in</h3>
            <form action="">
                <div class="label-input-group">
                    <label>Email</label><br/>
                    <input type="text" name="" id="" placeholder="Email" />                  
                </div>
    
                <div class="label-input-group">
                    <label>Password</label><br/>
                    <input type="password" name="" id="" placeholder="Password" />
                 
                </div>
    
                <div class="label-input-group">
                    <input type="submit" class="sign-up-btn" value="Login" data-cy="login" />
                </div>
    
                <div class="form-footer">
                    <a href="/signup" Link="/signup">New at StayFiti? Sign up</a>
                    <a href="/reset">Forgot Password?</a>
                </div>
            </form>
        </div>
    </div>
</div>
        
    
    
    

  )
}

export default Login