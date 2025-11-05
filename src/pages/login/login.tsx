import React, { useEffect, useState } from 'react';
import { CustomForm } from '../../components/customForm.tsx';
import z from 'zod';

export const Login = () => {
	const ResponseSchema = z.object({
		id: z.string(),
		isAutheticated: z.boolean(),
		message: z.string(),
	});

	const API_BASE_URL = process.env.REACT_APP_BASE_URL;

	type responseType = z.infer<typeof ResponseSchema>;

	const handleSubmit = (data: responseType) => {
		console.log('data.id: ', data.id);
	};

	return (
		<CustomForm.container>
			<CustomForm.title title='Login' />
			<CustomForm.body
				submitForm={{
					url: API_BASE_URL + '/User/login',
					method: 'POST',
					schema: ResponseSchema,
				}}
				onSubmit={handleSubmit}
			>
				<CustomForm.centeredBox>
					<CustomForm.textField label='Email' type='text' name='email' />
					<CustomForm.textField
						label='Password'
						type='password'
						name='password'
					/>
				</CustomForm.centeredBox>
				<CustomForm.centeredBox>
					<CustomForm.button type='submit' text='Login' />
				</CustomForm.centeredBox>
			</CustomForm.body>
			<CustomForm.rightBox>
				<CustomForm.link text='Do not have an account?' to='/register' />
			</CustomForm.rightBox>
		</CustomForm.container>
	);
};
