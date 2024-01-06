import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate()
  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
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
      navigate('/login')
    }
  }
  useEffect(() => {
    callAboutPage()
  }, [])
  return (
    <>
      <p>WELCOME</p>
      <h1>We Are The About Developer</h1>
    </>
  )
}
