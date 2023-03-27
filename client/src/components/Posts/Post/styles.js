import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderRadius: '15px',
		height: '100%',
		position: 'relative',
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		backgroundBlendMode: 'darken',
	},
	overlay: {
		position: 'absolute',
		top: '20px',
		left: '20px',
		color: 'white',
	},
	border: {
		border: 'solid',
	},
	fullHeightCard: {
		height: '100%',
	},

	overlay2: {
		position: 'absolute',
		top: '20px',
		right: '20px',
		color: 'white',
	},
	grid: {
		display: 'flex',
	},
	details: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '20px',
	},
	title: {
		padding: '0 16px',
	},
	cardActions: {
		padding: '0 16px 8px 16px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& span': {
			margin: 3,
		},
		'& button': {
			[theme.breakpoints.down('lg')]:{
				fontSize: '0.7rem',
			},
			[theme.breakpoints.down('md')]:{
				fontSize: '0.8rem',
			},
		},
	},
}));

export default useStyles;
