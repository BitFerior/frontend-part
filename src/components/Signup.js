import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Signup = () => {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: ''
  })

  const changeHandler = e => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }

  const PostData = async e => {
    e.preventDefault()
    const { name, email, phone, work, password, cpassword } = userData
    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword
      })
    })

    const data = await res.json
    console.log(data);

    if (res.status === 422 || !data) {
      window.alert('Invalid Registration')
      console.log('Invalid Registration')
    } else {
      window.alert('Registration Successful')
      console.log('Registration Successful')
      navigate('/login')
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1>Signup</h1>
      <form method='POST'>
        <div>
          <label htmlFor='name'>
            <h3> Name</h3>
          </label>
          <input
            type='text'
            value={userData.name}
            onChange={changeHandler}
            placeholder='Name'
            name='name'
            id='name'
            autoComplete='off'
          />
        </div>
        <div>
          <label htmlFor='email'>
            <h3>Email</h3>
          </label>
          <input
            type='email'
            value={userData.email}
            onChange={changeHandler}
            placeholder='Email'
            name='email'
            id='email'
            autoComplete='off'
          />
        </div>
        <div>
          <label htmlFor='phone'>
            <h3>Phone</h3>
          </label>
          <input
            type='number'
            value={userData.phone}
            onChange={changeHandler}
            placeholder='Phone'
            name='phone'
            id='phone'
            autoComplete='off'
          />
        </div>
        <div>
          <label htmlFor='work'>
            <h3> Work</h3>
          </label>
          <input
            type='text'
            value={userData.work}
            onChange={changeHandler}
            placeholder='Work'
            name='work'
            id='work'
            autoComplete='off'
          />
        </div>
        <div>
          <label htmlFor='password'>
            <h3> Password</h3>
          </label>
          <input
            type='password'
            value={userData.password}
            onChange={changeHandler}
            placeholder='Password'
            name='password'
            id='password'
            autoComplete='off'
          />
        </div>

        <div>
          <label htmlFor='cpassword'>
            <h3>Confirm Password</h3>
          </label>
          <input
            type='password'
            value={userData.cpassword}
            onChange={changeHandler}
            placeholder=' Confirm Password'
            name='cpassword'
            id='cpassword'
            autoComplete='off'
          />
        </div>

        <div>
          <input type='submit' value='Register' onClick={PostData} />
        </div>
      </form>

      <div>
        <Link to='/login'>I am already registered</Link>
      </div>
    </div>
  )
}
