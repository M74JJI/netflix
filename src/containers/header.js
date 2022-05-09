import React from 'react';
import { Header } from '../components';
import logo from '../logo.svg';
export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to="/" alt="netflix" src={logo} />
                <Header.ButtonLink to="/signin">Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}
