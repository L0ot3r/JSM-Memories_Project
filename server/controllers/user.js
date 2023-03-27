import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/userModel.js';

export const signin = async (req, res) => {
	const { email, password } = req.body;

	try {
		const existUser = await User.findOne({ email });

		if (!existUser)
			return res.status(404).json({ message: `Cet utilisateur n'existe pas` });

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existUser.password
		);
		if (!isPasswordCorrect)
			return res
				.status(400)
				.json({ message: `Le mot de passe est incorrecte` });

		const token = jwt.sign(
			{ email: existUser.email, id: existUser._id },
			process.env.JWT_SECRET,
			{ expiresIn: '1h' }
		);
		res.status(200).json({ result: existUser, token });
	} catch (error) {
		res.status(500).json({ message: `Quelque chose c'est mal passé.` });
	}
};

export const signup = async (req, res) => {
	const { email, firstName, lastName, password, confirmPassword } = req.body;

	try {
		const existUser = await User.findOne({ email });

		if (existUser)
			return res.status(400).json({ message: `Email est déjà enregistré` });

		if (password !== confirmPassword)
			return res
				.status(400)
				.json({ message: `Les mots de passe ne correspondent pas` });

		const hashedPassword = await bcrypt.hash(password, 12);
		const result = await User.create({
			email,
			password: hashedPassword,
			name: `${firstName} ${lastName}`,
		});

		const token = jwt.sign(
			{ email: result.email, id: result._id },
			process.env.JWT_SECRET,
			{ expiresIn: '1h' }
		);
		res.status(200).json({ result: result, token });
	} catch (error) {
		res.status(500).json({ message: `Quelque chose c'est mal passé.` });
	}
};
