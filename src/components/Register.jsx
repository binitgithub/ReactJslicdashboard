import React from 'react'

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
        <form action="">
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">Name</label>
            <input type="name" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <div className="mb-6">
            <label htmlFor="" className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-2" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register