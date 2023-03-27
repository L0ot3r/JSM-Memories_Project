import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar, Home, Auth, PostDetails } from './components';
import { theme } from './globalStyles'

import { Container, CssBaseline, ThemeProvider } from '@mui/material';

const App = () => {

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth='lg' >
				<Navbar />
				<Routes>
					<Route path='/' element={<Navigate to='/posts' replace />} />
					<Route path='/posts' element={<Home />} />
					<Route path='/posts/search' element={<Home />} />
					<Route path='/posts/:id' element={<PostDetails />} />
					<Route path='/auth' element={<Auth />} />
				</Routes>
			</Container>
		</ThemeProvider>
	);
};

export default App;
