import React from "react"

import Logo from './logo.png'

export default function Navbar() {
    return (
      <div className="bg-secondary">
            <div className="max-w-screen-lg mx-auto p-2">
                <div className="flex justify-between items-center">
                    <img src={Logo}  alt="logo" className="h-10"/>
                </div>
            </div>
      </div>
    )
}