import './login.scss'


const Login = () => {
    return (
        <div className="login">
            <div className="top">
            <div className="wrapper">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=""/>
            </div>
            </div>
            <div className="container">
             <form>
                 <h1>Login</h1>
                 <input type="email" placeholder="Your Email" />
                 <input type="password" placeholder="Your Passworf" />
                 <button className="LogBtn"> login</button>
                 <span>Sign up</span>
                 <small></small>
             </form>
            </div>
        </div>
    )
}

export default Login
