import { Link } from 'react-router-dom'
import './Login.css'
import { Helmet } from 'react-helmet-async';

const Login = () => {
    return (
    <div>
      <Helmet>
                <title>Login</title>
                <meta name='description' content='Login to your account '/>
                <link rel='canonical' href='/Login' />
            </Helmet>
       <nav className='nav'>
        <ul className='navbar'>
          <li className='nav-items'>
            <Link to='/' className='nav-links'>Home</Link>
          </li>
         <h2>Username:</h2>
          <form className='card'>
            <div class="form-control">
              <input type="name" placeholder='Username' required />
            </div>

           <div class="form-control">
            <input type="password" placeholder='Password'  required />
           </div>

        <button class="btn">Login</button>

        </form>

        </ul>
      </nav>
    </div>
  )
}

export default Login
