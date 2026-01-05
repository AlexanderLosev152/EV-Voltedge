import styles from './style.module.scss';

import { set, useForm } from 'react-hook-form';

//import { Btn } from '../Btn/Btn.jsx';

export const Form = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting }
	} = useForm();
	const onSubmit = async (data) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			throw new Error();
			console.log(data);
		} catch (error) {
			setError('root', {
				message: 'Форма отправленна !!!'
			});
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.namebox}>
				<div>
					<label>First Name</label>
					<input
						{...register('firstName', {
							required: 'Введите имя',
							maxLength: 20,
							pattern: /^[A-Za-z]+$/i
						})}
						type='text'
						placeholder={'John'}
					/>
					{errors.firstName && <div>{errors.firstName.message}</div>}
				</div>
				<div>
					<label>Last Name</label>
					<input
						{...register('lastName', {
							required: 'Введите Фамилию',
							maxLength: 20,
							pattern: /^[A-Za-z]+$/i
						})}
						type='text'
						placeholder={'Doe'}
					/>
					{errors.lastName && <div>{errors.lastName.message}</div>}
				</div>
			</div>

			<div>
				<label>Email ID</label>
				<input
					{...register('emailid', {
						required: 'Введите почту',
						maxLength: 20,
						validate: (value) => {
							if (!value.includes('@')) {
								return 'Отсутсвует символ @';
							}
							return true;
						}
					})}
					type='text'
					name={'emailid'}
					placeholder={'Field email goes here'}
				/>
				{errors.emailid && <div>{errors.emailid.message}</div>}
			</div>

			<div>
				<label>Message</label>
				<textarea
					{...register('textarea', {
						required: 'Введите сообщение',
						maxLength: 200,
						pattern: /^[A-Za-z]+$/i
					})}
					name='textarea'
					placeholder={'Message'}
					type='text'
				/>
				{errors.textarea && <div>{errors.textarea.message}</div>}
			</div>

			<button disabled={isSubmitting} type='submit'>
				{isSubmitting ? 'Loading...' : 'Submit'}
			</button>
			{errors.root && <div>{errors.root.message}</div>}
		</form>
	);
};
