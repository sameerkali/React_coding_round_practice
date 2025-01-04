import React from 'react'

const FormValidation = () => {

  const handleForm = () => {
    alert("sameer")
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-4 '>
        <input type='text' placeholder='name' className='border-2 pl-2' />
        <input  type='email' placeholder='abc@xyz.com' className='border-2 pl-2'/>
        <input  type='password' className='border-2 pl-2' />
        <button onClick={handleForm}>Submit</button>
      </div>
    </div>
  )
}

export default FormValidation