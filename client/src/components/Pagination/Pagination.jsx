import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@mui/lab';

import { useDispatch, useSelector } from 'react-redux'

import useStyles from './styles';

const Paginate = ({ page }) => {
	const classes = useStyles();

	useEffect(() => {
		
	}, [])
	

	return (
		<Pagination
			className={classes.pagination}
			classes={{ ul: classes.ul }}
			count={5}
			page={1}
			variant='outlined'
			color='primary'
			renderItem={(item) => (
				<PaginationItem
					{...item}
					component={Link}
					to={`/posts?page=${1}`}
					size='small'
				/>
			)}
		/>
	);
};

export default Paginate;
