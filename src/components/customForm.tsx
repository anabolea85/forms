import React from 'react';
import {
	Box,
	Button,
	Container,
	Paper,
	TextField,
	Typography,
} from '@mui/material';
import { Link } from 'react-router';
import { ZodTypeAny } from 'zod/v3';
import z, { ZodType } from 'zod';
import axios from 'axios';

export const CustomForm = () => {
	return <></>;
};

const container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Box
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Container sx={{ height: 'auto' }}>
				<Box>
					<Paper elevation={6}>{children}</Paper>
				</Box>
			</Container>
		</Box>
	);
};

type SubmitFormConfig<T extends ZodTypeAny> = {
	url: string;
	method: 'POST' | 'DELETE' | 'GET' | 'PUT' | 'PATCH';
	schema: T;
};

type ActionProps<T extends ZodTypeAny> = {
	submitForm: SubmitFormConfig<T>;
	children: React.ReactNode;
	onSubmit: (data: any) => void;
};

function body<T extends ZodTypeAny>({
	children,
	onSubmit,
	submitForm,
}: ActionProps<T>) {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const values = Object.fromEntries(formData.entries());

		const result = await axios.post(submitForm.url, values);

		const valid = submitForm.schema.safeParse(result.data);

		if (valid.success) onSubmit(valid.data);
		else console.log(valid.error);
	};

	return (
		<Box component='form' onSubmit={(e) => handleSubmit(e)}>
			{children}
		</Box>
	);
}

const title: React.FC<{ title: string }> = ({ title }) => {
	return (
		<Box>
			<Typography
				sx={{ fontSize: '2rem', textAlign: 'center', padding: '30px' }}
			>
				{title}
			</Typography>
		</Box>
	);
};

const centeredBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '20px',
				paddingBottom: '35px',
			}}
		>
			{children}
		</Box>
	);
};

const rightBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'end',
				alignItems: 'right',
				gap: '20px',
				margin: '15px',
				paddingBottom: '35px',
			}}
		>
			{children}
		</Box>
	);
};

const textField: React.FC<{ label: string; type: string; name: string }> = ({
	label,
	type,
	name,
}) => {
	return <TextField label={label} type={type} name={name} />;
};

const button: React.FC<{
	type: 'button' | 'submit' | 'reset';
	text: string;
}> = ({ type, text }) => {
	return <Button type={type}>{text}</Button>;
};

const link: React.FC<{
	to: string;
	text: string;
}> = ({ to, text }) => {
	return <Link to={to}>{text}</Link>;
};

CustomForm.container = container;
CustomForm.body = body;
CustomForm.title = title;
CustomForm.centeredBox = centeredBox;
CustomForm.rightBox = rightBox;
CustomForm.textField = textField;
CustomForm.button = button;
CustomForm.link = link;
