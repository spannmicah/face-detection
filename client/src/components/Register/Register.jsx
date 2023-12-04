import { useState } from 'react';
import logo from '../Logo/face-icon.png';

const Register = ({ handleRegister, loadUser }) => {
	const [formInput, setFormInput] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		handleRegister('home');
	};

	return (
		<>
			<div className='flex flex-col w-5/12  px-6 py-12 lg:px-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border-2 rounded-md'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<img
						className='mx-auto h-20 w-auto'
						src={logo}
						alt='Your Company'
						width={100}
						height={100}
					/>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Register for an account
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form
						className='space-y-6'
						onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Username
							</label>
							<div className='mt-2'>
								<input
									id='name'
									name='name'
									type='text'
									autoComplete='name'
									required
									className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									onChange={({ target }) =>
										setFormInput({ ...formInput, name: target.value })
									}
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'>
								Email address
							</label>
							<div className='mt-2'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									required
									className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									onChange={({ target }) =>
										setFormInput({ ...formInput, email: target.value })
									}
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Password
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									onChange={({ target }) =>
										setFormInput({ ...formInput, password: target.value })
									}
								/>
							</div>
						</div>

						<div className='flex gap-4'>
							<button
								type='submit'
								className='transition flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-2'>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default Register;
