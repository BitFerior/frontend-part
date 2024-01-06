import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

export const Login = () => {
  const { state, dispatch } = useContext(UserContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginUser = async e => {
    e.preventDefault()
    const res = await fetch('/signin', {
      method: 'POST',
      credentials: 'include',

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await res.json
    if (res.status === 400 || !data) {
      window.alert('Invalid Credentials')
      console.log('Invalid Credentials')
    } else {
      dispatch({ type: 'USER', payload: true })
      window.alert('Login Successful')
      console.log('Login Successful')
      navigate('/')
    }
  }

  return (
    <>
      <div style={{ textAlign: 'center', padding: '100px' }}>
        <h1>Login</h1>

        <form method='POST'>
          <div>
            <label htmlFor='email'>
              <h3>Email</h3>
            </label>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Email'
              name='email'
              id='email'
              autoComplete='off'
            />
          </div>

          <div>
            <label htmlFor='password'>
              <h3> Password</h3>
            </label>
            <input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
              name='password'
              id='password'
              autoComplete='off'
            />
          </div>

          <div>
            <input type='submit' value='Login' onClick={loginUser} />
          </div>
        </form>

        <div>
          <Link to='/signup'>Create An Accout</Link>
        </div>
      </div>
    </>
  )
}
