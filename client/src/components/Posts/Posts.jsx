import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

import { Grid, CircularProgress } from '@mui/material';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.postsReducer);
	const classes = useStyles();
	

	return !posts.length ? (
		<CircularProgress color='secondary' />
	) : (
		<Grid
			className={classes.container}
			container
			alignItems='stretch'
			spacing={2}
		>
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={12} lg={6}>
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
