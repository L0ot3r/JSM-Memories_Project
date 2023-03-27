import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'upperCase',
})(({ upperCase, theme }) => ({
	...(upperCase && {
		textTransform: 'uppercase',
	}),
}));

export default CustomButton;
