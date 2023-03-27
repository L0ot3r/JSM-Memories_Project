import { ThumbUpAltIcon, ThumbUpAltOulined } from '../../icons';

const Likes = ({ post }) => {
	const user = JSON.parse(localStorage.getItem('profile'));


	if (post.likes.length > 0) {
		return post.likes.find(
			(like) => like === (user?.result?.googleId || user?.result?._id)
		) ? (
			<>
				<ThumbUpAltIcon fontSize='small' style={{ marginBottom: 3 }} />
				&nbsp;
				{post.likes.length > 1
					? `Vous et ${post.likes.length - 1} ${
							post.likes.length - 1 === 1 ? `autre` : 'autres'
					  } aimez`
					: `${post.likes.length === 1 ? 'vous aimez' : ''}`}
			</>
		) : (
			<>
				<ThumbUpAltOulined fontSize='small' style={{ marginBottom: 3 }} />
				&nbsp;{post.likes.length} {post.likes.length === 1 ? 'like' : 'likes'}
			</>
		);
	}

	return (
		<>
			<ThumbUpAltOulined fontSize='small' style={{ marginBottom: 3 }} />
			&nbsp;Like
		</>
	);
};

export default Likes;
