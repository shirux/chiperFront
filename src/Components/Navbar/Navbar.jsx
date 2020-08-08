import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from '@material-ui/core';
import './Navbar.css';

class Navbar extends React.Component {

    render() {
        return(
            <div className="navBar">
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h6' className="navbarTitle">
                            <Link href='/' color='inherit' underline='none'>FoodTruck App</Link>
                        </Typography>
                        <div className="login">
                            <Link href='/search' color='inherit' underline='none'>
                                <IconButton color="inherit">
                                    <SearchIcon />
                                </IconButton>
                            </Link>
                            <Link href='/profile' color='inherit' underline='none'>
                                <IconButton color="inherit">
                                    <AccountCircle />
                                </IconButton>
                            </Link>
                            <Link href='/' color='inherit' underline='none'>
                                <IconButton color="inherit">
                                    <SvgIcon>
                                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                    </SvgIcon>
                                </IconButton> 
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;