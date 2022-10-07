import React from 'react'
import Container from '../Container'

export default function Signin() {
  return (
    <div className='fixed inset-0 bg-slate-200 -z-10 flex justify-center items-center'>
        <Container>
            <form className='bg-slate-500 rounded p-6 w-72'>
                <div class="mb-3 text-center">LOGIN
                </div>
                <div class="mb-3 xl:w-96">
                    <label for="" class="form-label inline-block mb-2 text-start">Email</label>
                    <input
                    type="email"
                    id=""
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                        bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                        ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Input Email"
                    />
                    <label for="" class="form-label inline-block mb-2 text-start">Password</label>
                    <input
                    type="password"
                    id=""
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                        bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                        ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Input Password"
                    />
                </div>
            </form>
        </Container>
    </div>
  )
}
