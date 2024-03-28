import React from 'react'

export default function Register() {

    let handleRegister = async (event) => {
        event.preventDefault();
        let user = {
            username : username,
            password : password
        }
        let response = await axios.post(`http://localhost:5000/register`, user);
        console.log(response.data)
    }

  return (
    <div>Register</div>
  )
}
