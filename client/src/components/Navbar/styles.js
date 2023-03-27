import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';
import { padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 50px',
		[theme.breakpoints.down('sm')]: {
			padding: '10px',
		},
		[theme.breakpoints.down('md')]: {
			padding: '10px 20px',
		},
		'& a': {
			textDecoration: 'none'
		} 
	},
	heading: {
		color: '#777',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
		fontSize: '2.5rem',
		[theme.breakpoints.down('md')]: {
			fontSize: '2rem',
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		},
	},
	image: {
		marginRight: '15px',
		[theme.breakpoints.down('md')]: {
			width: 45,
			height: 45,
		},
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-end',
		[theme.breakpoints.down('md')]: {
			padding: '0',
		}
	},
	profile: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		'& button': {
			fontSize: '1.5rem',
		},
		[theme.breakpoints.down('md')]: {
			'& button': {
				fontSize: '1.3rem',
			},
		},
	},
	profileMenu: {
		'& .css-6hp17o-MuiList-root-MuiMenu-list': {
			padding: '1.2rem'
		},
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		}
	},
	avatar: {
		marginLeft: '1rem',
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
}));

export default useStyles;
