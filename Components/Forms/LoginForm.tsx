'use client';


import { Form } from '@/Components/Forms';
import { useLogin } from '../Hooks/Auth';

export default function LoginForm() {
	const { username, password, isLoading, onChange, onSubmit, errors } = useLogin();
	const config = [
		{
			labelText: 'Username',
			labelId: 'username',
			type: 'username',
			value: username,
			required: true,
			placeholder:'username'
		},
		{
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: password,
			placeholder:'password',
			link: {
				linkText: 'Forgot password?',
				linkUrl: '/password-reset',
			},
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Login'
			onChange={onChange}
			onSubmit={onSubmit}
			errors={errors}
		/>
	);
}