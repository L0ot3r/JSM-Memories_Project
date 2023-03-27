import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import useStyles from './styles';

import { getPosts } from '../../actions/posts';

import { Container, Grid, Grow, Paper, Stack } from '@mui/material';
import { Posts, SearchPost } from '../';
import Pagination from '../Pagination/Pagination';
import { Form } from '../../components';


const Home = () => {
	const classes = useStyles();
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();
	const query = useQuery()
	const page = query.get('page') || 1;
	const searchQuery = query.get('searchQuery');
	const location = useLocation()
	const navigate = useNavigate()

	function useQuery() {
		return new URLSearchParams(location.search);
	}



	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch, currentId]);

	return (
		<Grow in>
			<Container maxWidth='lg' className={classes.container}>
				<Grid
					className={classes.gridContainer}
					container
					alignItems='stretch'
					spacing={3}
				>
					<Grid item md={4} sm={12}>
						<Stack direction='column' spacing={1}>
							<Grid item>
								<SearchPost />
							</Grid>
							<Grid item>
								<Paper elevation={6} className={classes.pagination}>
									<Pagination page={page} />
								</Paper>
							</Grid>
						</Stack>
					</Grid>
					<Grid item md={8} sm={12}>
						<Stack direction='column' spacing={2}>
							<Grid item>
								<Form currentId={currentId} setCurrentId={setCurrentId} />
							</Grid>
							<Grid item>
								<Posts setCurrentId={setCurrentId} />
							</Grid>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Home;
