import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts';

import { AppBar, Chip, Stack, TextField } from '@mui/material';
import { CustomButton } from '../UI';

import useStyles from './styles';

const SearchPost = () => {
	const [search, setSearch] = useState('');
	const [tags, setTags] = useState([]);
	const [addTag, setAddTag] = useState('');
	const location = useLocation();
	const navigate = useNavigate();
	const query = useQuery();
	const dispatch = useDispatch();

	function useQuery() {
		return new URLSearchParams(location.search);
	}

	const classes = useStyles();

	const handleKeyPress = (e) => {
		if (e.keyCode === 13) {
			searchPost();
		}
	};

	const handleTag = (e) => {
		e.preventDefault();
		setTags([...tags, addTag]);
		setAddTag('');
	};

	const searchPost = () => {
		if (search.trim() || tags) {
			dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
			navigate(
				`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`
			);
		} else {
			navigate('/');
		}
		setSearch('');
		setTags([]);
	};

	useEffect(() => {
		dispatch(getPostsBySearch());
	}, [dispatch]);

	return (
		<AppBar className={classes.appBarSearch} position='static' color='inherit'>
			<Stack direction={'column'} spacing={1}>
				<TextField
					name='search'
					variant='outlined'
					label='Search Memories'
					onKeyPress={handleKeyPress}
					fullWidth
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<form onSubmit={handleTag}>
					<TextField
						name='tags'
						variant='outlined'
						label='Search tags'
						onChange={(e) => setAddTag(e.target.value)}
						value={addTag}
						fullWidth
					/>
				</form>
				<Stack direction='row' spacing={1}>
					<div>
						{tags?.map((tag, i) => (
							<Chip
								sx={{ marginTop: 1, marginRight: 1 }}
								key={i + tag}
								label={tag}
								onDelete={() =>
									setTags(tags.filter((tagToDelete) => tag !== tagToDelete))
								}
								size='small'
							/>
						))}
					</div>
				</Stack>
				<CustomButton
					onClick={searchPost}
					color='primary'
					variant='contained'
					upperCase
				>
					Search
				</CustomButton>
			</Stack>
		</AppBar>
	);
};

export default SearchPost;
