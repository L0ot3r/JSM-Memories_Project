import React from 'react';
import { useDispatch } from 'react-redux';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Stack,
	Chip,
	Avatar,
} from '@mui/material';
import { DeleteIcon, MoreHorizIcon, TagIcon } from '../../icons';
import { Likes } from '../../../components';
import moment from 'moment';
import useStyles from './styles';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({
	post,
	setCurrentId
}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));

	return (
		<Card className={classes.card} raised elevation={6}>
			<CardMedia
				className={classes.media}
				image={post.selectedFile}
				title={post.title}
			/>
			<div className={classes.overlay}>
				<Stack direction='row' alignItems='center' spacing={1}>
					{user?.result?.googleId === post?.creator ||
					user?.result?._id === post.creator ? (
						<Avatar
							className={classes.avatar}
							alt={user.result.name}
							src={user.result.imageUrl}
						>
							{user.result.name.charAt(0)}
						</Avatar>
					) : (
						<Avatar className={classes.avatar} alt={post.name}>
							{post.name.charAt(0)}
						</Avatar>
					)}
					<Stack direction='column'>
						<Typography variant='h6'>{post.name}</Typography>
						<Typography variant='body2'>
							{moment(post.createdAt).fromNow()}
						</Typography>
					</Stack>
				</Stack>
			</div>
			{(user?.result?.googleId === post?.creator ||
				user?.result?._id === post.creator) && (
				<>
					<div className={classes.overlay2}>
						<Button
							style={{ color: 'white' }}
							size='small'
							onClick={(e) => {
								e.stopPropagation();
								setCurrentId(post._id);
							}}
						>
							<MoreHorizIcon fontSize='medium' />
						</Button>
					</div>
				</>
			)}
			<div className={classes.details}>
				<Stack direction='row' spacing={1}>
					{post.tags.map((tag, index) => (
						<Chip
							key={index + tag}
							icon={<TagIcon />}
							label={tag}
							size='small'
						/>
					))}
				</Stack>
			</div>
			<Typography className={classes.title} variant='h5' gutterBottom>
				{post.title}
			</Typography>
			<CardContent sx={{ minHeight: 80, maxHeight: 80, overflow: 'hidden' }}>
				<Typography variant='body2' component='p' color='textSecondary'>
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button
					size='small'
					color='primary'
					onClick={() => dispatch(likePost(post._id))}
					disabled={!user?.result}
				>
					<Likes post={post} />
				</Button>
				{(user?.result?.googleId === post?.creator ||
					user?.result?._id === post.creator) && (
					<Button
						size='small'
						color='primary'
						onClick={() => dispatch(deletePost(post._id))}
						endIcon={
							<DeleteIcon fontSize='small' style={{ marginBottom: 4 }} />
						}
					>
						<span>Delete</span>
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default Post;
