import React from 'react';
import { CustomForm } from '../../components/customForm.tsx';
import z, { ZodTypeAny } from 'zod';

export const SignUp = () => {
	const ResponseSchema = z.object({
		id: z.string(),
		created: z.boolean(),
	});

	type responseType = z.infer<typeof ResponseSchema>;

	const handleSubmit = (data: responseType) => {
		console.log('data.id: ', data.id);
	};

	const API_BASE_URL = process.env.REACT_APP_BASE_URL;

	return (
		<CustomForm.container>
			<CustomForm.title title='Register an account' />
			<CustomForm.body
				submitForm={{
					url: API_BASE_URL + '/User/register',
					method: 'POST',
					schema: ResponseSchema,
				}}
				onSubmit={handleSubmit}
			>
				<CustomForm.centeredBox>
					<CustomForm.textField label='Full name' type='text' name='name' />
					<CustomForm.textField label='Email' type='text' name='email' />
					<CustomForm.textField label='Address' type='text' name='address' />
					<CustomForm.textField label='City' type='text' name='city' />
					<CustomForm.textField label='Username' type='text' name='username' />
					<CustomForm.textField
						label='Password'
						type='password'
						name='password'
					/>
				</CustomForm.centeredBox>

				<CustomForm.centeredBox>
					<CustomForm.button type='submit' text='Create account' />
				</CustomForm.centeredBox>
			</CustomForm.body>
			<CustomForm.rightBox>
				<CustomForm.link text='Already have an account?' to='/' />
			</CustomForm.rightBox>
		</CustomForm.container>
	);
};
