import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { signout, isAuth } from '../actions/auth';
import Image from 'next/image';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import '.././node_modules/nprogress/nprogress.css';
import Search from './blog/Search';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
    <Navbar color="light" light expand="md">
      <Link href="/">
        <NavLink>
        <Image
        src="/logo-white-bg.png"
        alt="Lavender 23_P COVID-19 Vaccine Logo"
        width={150}
        height={150}
      /></NavLink>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>

        <Nav className="ml-auto" navbar>
          <React.Fragment>
            <NavItem>
              <Link href="/blogs">
                <NavLink>Blogs</NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/contact">
                <NavLink>Contact</NavLink>
              </Link>
            </NavItem>
          </React.Fragment>

          <NavItem>
            <a href="/user/crud/blog" className="btn btn-primary text-light">
              Write a blog
            </a>
          </NavItem>

          {!isAuth() && (
            <React.Fragment>
              <NavItem>
                <Link href="/signin">
                  <NavLink>Signin</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/signup">
                  <NavLink>Signup</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
          )}

    

          <UncontrolledDropdown nav inNavbar>
            
              {isAuth() && isAuth().role === 0 && (
                <DropdownToggle nav caret>
                ???? ???{`${isAuth().username}`}
                </DropdownToggle>
              )}

              { isAuth() && isAuth().role === 1 && (
                <DropdownToggle nav caret>
                ???? {`${isAuth().username}`}
                </DropdownToggle>
              )}

              <DropdownMenu right>
                <DropdownItem>

                {isAuth() && isAuth().role === 0 && (
                  <NavItem>
                    <Link href="/user">
                      <NavLink>Dashboard</NavLink>
                    </Link>
                  </NavItem>
                )}

                {isAuth() && isAuth().role === 1 && (
                  <NavItem>
                    <Link href="/admin">
                      <NavLink>Dashboard</NavLink>
                    </Link>
                  </NavItem>
                )}                
              </DropdownItem>

              <DropdownItem>

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user/update">
                  <NavLink>Profile</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/user/update">
                  <NavLink>Profile</NavLink>
                </Link>
              </NavItem>
            )}                
          </DropdownItem>
            
                <DropdownItem divider />
                <DropdownItem>
                {isAuth() && (
                  <NavItem>
                    <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                      Signout
                    </NavLink>
                  </NavItem>
                )}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
     

  
        </Nav>
      </Collapse>
    </Navbar>
    <Search />
  </React.Fragment>
  );
};

export default Header;