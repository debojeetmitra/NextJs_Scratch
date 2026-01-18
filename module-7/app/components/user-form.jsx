import { createdUser } from '@/actions'
import React from 'react'

const UserForm = () => {

//    async function createUser(formData){
//     "use server"  //

//     const name = formData.get("name")

//     console.log("Creating user", name);
    
//    }



  return (
  <form action={createdUser}>
    <input name="name" placeholder="Jhon Doe" />
    <button type='submit'>Create</button>
  </form>
  )
}

export default UserForm