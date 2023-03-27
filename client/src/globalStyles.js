import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#10739E',
		},
		secondary: {
			main: '#ff595e',
			contrastText: '#f1f1f1',
		},
		neutral: {
			main: '#33658a',
			contrastText: '#fff',
		},
	},
	components: {
    MuiButton: {
      styleOverrides: {
				root: {
					textTransform: 'none'
				},
			}
    },
  },
});
