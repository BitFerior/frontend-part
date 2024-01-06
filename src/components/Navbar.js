import 'bootstrap/dist/css/bootstrap.css'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../App'
import { useContext } from 'react'

const RenderNavMenu = () => {
  const { state, dispatch } = useContext(UserContext)
  if (state) {
    return (
      <>
        <li class='nav-item active'>
          <Link class='nav-link' to='/'>
            Home <span class='sr-only'>(current)</span>
          </Link>
        </li>
        <li class='nav-item'>
          <Link class='nav-link' to='/about'>
            About
          </Link>
        </li>
        <li class='nav-item'>
          <Link class='nav-link' to='/contact'>
            Contact
          </Link>
        </li>

        <li class='nav-item'>
          <Link class='nav-link' to='/logout'>
            LogOut
          </Link>
        </li>
      </>
    )
  } else {
    return (
      <>
        <li class='nav-item active'>
          <Link class='nav-link' to='/'>
            Home <span class='sr-only'>(current)</span>
          </Link>
        </li>
        <li class='nav-item'>
          <Link class='nav-link' to='/about'>
            About
          </Link>
        </li>
        <li class='nav-item'>
          <Link class='nav-link' to='/contact'>
            Contact
          </Link>
        </li>
        <li class='nav-item'>
          <Link class='nav-link' to='/login'>
            Login
          </Link>
        </li>
        <li class='nav-item'>
          <Link class='nav-link' to='/signup'>
            Registration
          </Link>
        </li>
      </>
    )
  }
}

export const Navbar = () => {
  //ye navbar hm ne bootstrap se uthaya he..

  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <Link class='navbar-brand' to='#'>
          Navbar
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav ml-auto'>
            <RenderNavMenu />
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
