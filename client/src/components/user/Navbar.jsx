import React from 'react';
import Logo from '../img/logo.png';
import { BsFillSunFill } from 'react-icons/bs';
import Container from '../Container';


export default function Navbar() {
    return (
      <div className="bg-secondary drop-shadow-sm shadow-gray-50">
            <Container className="max-w-screen-lg mx-auto p-2">
                <div className="flex justify-between items-center">
                    <img src={Logo}  alt="logo" className="h-10"/>
                    <ul>
                        <li>
                            <button className="bg-dark-subtle p-1 rounded">
                                <BsFillSunFill className="text-secondary" size={24} />
                            </button>
                        </li>
                    </ul>
                </div>
            </Container>
      </div>
    );
}