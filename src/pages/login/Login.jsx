import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                
             <div className="loginBox">
             <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
            </div>
            <div className="loginRight">
                <h3 className="loginLogo">Nananetwork</h3>
                <span className="loginDesc">Connect with the friends and the world around you on Nananetwork</span>
        
            
        </div>
      </div>
    </div>
  );
}
