import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

export const Logout = () => {
  const { state, dispatch } = useContext(UserContext)

  const navigate = useNavigate()
  const callLogoutPage = async () => {
    try {
      const res = await fetch('/logout', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      const data = await res.json()
      console.log(data)
      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error
      }
    } catch (err) {
      console.log(err)
      dispatch({ type: 'USER', payload: false })

      navigate('/login')
    }
  }
  useEffect(() => {
    callLogoutPage()
  }, [])
  return (
    <>
      <h1>Logout ka page</h1>
    </>
  )
}
