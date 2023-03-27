import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import {
	AppBar,
	Avatar,
	Button,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material';
import memoriesLogo from '../../images/memories-Logo.png';
import memoriesText from '../../images/memories-Text.png';
import useStyles from './styles';

const Navbar = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		navigate('/');
		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;

		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	const loginClickHandler = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const loginMenuCloseHandler = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar className={classes.appBar} position='sticky' color='inherit'>
			<Link to='/'>
				<div className={classes.brandContainer}>
					<img
						src={memoriesLogo}
						alt='memories'
						height='45'
						className={classes.image}
					/>
					<Typography
						className={classes.heading}
						variant='h2'
						align='center'
					>
						BlogBook
					</Typography>
				</div>
			</Link>
			<Toolbar className={classes.toolbar} variant='dense'>
				{user ? (
					<div className={classes.profile}>
						<Button
							aria-controls='simple-menu'
							aria-haspopup='true'
							onClick={loginClickHandler}
						>
							<Typography className={classes.userName} variant='p'>
								{user.result.name}
							</Typography>
							<Avatar
								className={classes.avatar}
								alt={user.result.name}
								src={user.result.imageUrl}
							>
								{user.result.name.charAt(0)}
							</Avatar>
						</Button>
						<Menu
							className={classes.profileMenu}
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							anchorOrigin={{
								horizontal: 'right',
								vertical: 'bottom',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorEl)}
							onClose={loginMenuCloseHandler}
						>
							<MenuItem onClick={loginMenuCloseHandler}>
								<Typography variant='h6'>Profil</Typography>
							</MenuItem>
							<MenuItem onClick={loginMenuCloseHandler}>
								<Typography variant='h6'>Message</Typography>
							</MenuItem>
							<MenuItem onClick={loginMenuCloseHandler}>
								<Button
									className={classes.logout}
									variant='contained'
									color='secondary'
									onClick={logout}
								>
									Logout
								</Button>
							</MenuItem>
						</Menu>
					</div>
				) : (
					<div>
						<Button
							component={Link}
							to='/auth'
							variant='contained'
							color='primary'
						>
							Login
						</Button>
					</div>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
