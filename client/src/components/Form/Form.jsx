import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

import {
	TextField,
	Button,
	Typography,
	Paper,
	Modal,
	Avatar,
} from '@mui/material';
import useStyles from './styles';
import { SendIcon } from '../icons';

import FileBase from 'react-file-base64';

const Form = ({ currentId, setCurrentId }) => {
	const post = useSelector((state) =>
		currentId ? state.postsReducer.find((p) => p._id === currentId) : null
	);
	const user = JSON.parse(localStorage.getItem('profile'));
	const [postData, setPostData] = useState({
		title: '',
		message: '',
		name: '',
		creator: '',
		tags: '',
		selectedFile: '',
		likes: '',
	});
	const classes = useStyles();
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate()

	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	useEffect(() => {
		post && setPostData(post);
		if(currentId){
			handleOpen();
		}
	}, [currentId, post]);

	const clear = () => {
		setCurrentId(null);
		setPostData({
			title: '',
			message: '',
			tags: '',
			selectedFile: '',
		});
		handleClose();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentId) {
			dispatch(
				updatePost(currentId, { ...postData, name: user?.result?.name })
			);
		} else {
			dispatch(createPost({ ...postData, name: user?.result?.name }));
		}
		clear();
		handleClose();
	};

	return !user?.result?.name ? (
		<Paper className={classes.paper}>
			<Typography variant='h6' align='center'>
				Veuillez vous connecter pour pouvoir créer une publication
			</Typography>
		</Paper>
	) : (
		<>
			<Paper className={classes.paper}>
				<div className={classes.publish}>
					<Avatar
						className={classes.avatar}
						alt={user.result.name}
						src={user.result.imageUrl}
					>
						{user.result.name.charAt(0)}
					</Avatar>
					<Button
						onClick={handleOpen}
						variant='outlined'
						color='primary'
						size='large'
						fullWidth
					>
						Créer une publication
					</Button>
				</div>
			</Paper>
			<Modal open={open} onClose={handleClose}>
				<Paper className={`${classes.paper} ${classes.formPost}`}>
					<form
						autoComplete='off'
						noValidate
						className={`${classes.root} ${classes.form}`}
						onSubmit={handleSubmit}
					>
						<Typography variant='h6'>
							{currentId ? 'Editer' : 'Créer'} un Souvenir
						</Typography>

						<div className={classes.textFieldContainer}>
							<TextField
								name='title'
								variant='outlined'
								label='Titre'
								fullWidth
								value={postData.title}
								onChange={(e) =>
									setPostData({ ...postData, title: e.target.value })
								}
							/>
							<TextField
								name='message'
								variant='outlined'
								label='Message'
								multiline
								rows={4}
								fullWidth
								value={postData.message}
								onChange={(e) =>
									setPostData({ ...postData, message: e.target.value })
								}
							/>
							<TextField
								name='tags'
								variant='outlined'
								label='Tags'
								fullWidth
								value={postData.tags}
								onChange={(e) =>
									setPostData({ ...postData, tags: e.target.value.split(',') })
								}
							/>
						</div>

						<div className={classes.fileInput}>
							<FileBase
								type='file'
								multiple={false}
								onDone={({ base64 }) =>
									setPostData({ ...postData, selectedFile: base64 })
								}
							/>
						</div>

						<div className={`${classes.btnContainer}`}>
							<Button
								className={`${classes.buttonSubmit} `}
								variant='contained'
								color='primary'
								size='large'
								type='submit'
								endIcon={<SendIcon />}
							>
								Envoyer
							</Button>
							<Button
								variant='contained'
								color='secondary'
								size='small'
								onClick={clear}
							>
								Clear
							</Button>
						</div>
					</form>
				</Paper>
			</Modal>
		</>
	);
};

export default Form;
