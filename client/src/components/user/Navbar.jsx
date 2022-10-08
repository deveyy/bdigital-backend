import React from 'react';
import Logo from '../img/logo.png';
import { BsFillSunFill } from 'react-icons/bs';
import Container from '../Container';
import CustomLink from '../link/CustomLink';
import { useTheme } from '../../hooks/theme';


export default function Navbar() {

    const {toggleTheme} = useTheme();

    return (
      <div className="bg-secondary shadow-sm shadow-gray-500">
        <Container className="p-2">
            <div className="flex justify-between items-center">
                <CustomLink to="/">
                    <img src={Logo}  alt="logo" className="h-10"/>
                </CustomLink>
                    <ul className="flex items-center space-x-4">
                        <li>
                        <button
                            onClick={toggleTheme}
                            className="dark:bg-white bg-dark-subtle p-1 rounded">
                            <BsFillSunFill className="text-secondary" size={24} />
                        </button>
                        </li>
                    </ul>
                </div>
            </Container>
      </div>
    );
}