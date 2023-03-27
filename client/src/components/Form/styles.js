import { makeStyles } from "@mui/styles";

 const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  formPost: {
    position: 'absolute',
    width: 450,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  textFieldContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& button': {
      marginBottom: 10,
    }
  },
  publish: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .css-1p99tve-MuiInputBase-root-MuiOutlinedInput-root': {
      borderRadius: '999px'
    },
    '& button': {
      borderRadius: '999px',
    }
  },
  avatar: {
    margin: '0 10px'
  }
}));

export default useStyles;