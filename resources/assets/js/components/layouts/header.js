import React from 'react';
import SideBar from './side-bar';
import Logo from './logo';

const headerStyle = {
    height: 'auto',
    minHeight: '100%'
}

const Header = () =>
    <div style={{height: 'auto', minHeight: '100%'}}>
        <Logo />
        <SideBar />
    </div>;

export default Header;
