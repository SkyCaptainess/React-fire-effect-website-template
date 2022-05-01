import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        let abortController = new AbortController();
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }

        //console.log(window)

        return () => {
            abortController.abort();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    // Function from react-scroll
    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        // Empty tags are simplified <React.Fragment>

        // NavLogo is a react router link, which means that
        // it needs to have its own version of href, which is 'to'

        // IconContext.Provider is useful to change color of all icons
        // within the context
        
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}> guga </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass='active'
                                exact='true'
                                > About </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="discover"
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass='active'
                                exact='true'> Discover </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass='active'
                                exact='true'> Services </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="signup"
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass='active'
                                exact='true'> Sign Up </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin"> Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;