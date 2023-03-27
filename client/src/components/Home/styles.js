import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    padding: '16px'
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    },
  },
}))