import { useState } from 'react';
import Login from './login';


function Register() {
	

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
                role,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			// history.push('/login')
            window.location.href = '/login'
		}
	}

	return (
		<div>
			<h1>Register</h1>
			<form   onSubmit={registerUser}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
                    style={{margin: '10px', width: '50%'}}

				/>
				<br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
                    style={{margin: '10px', width: '50%'}}
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
                    style={{margin: '10px', width: '50%'}}
				/>
				<br />
                <input
					value={role}
					onChange={(e) => setRole(e.target.value)}
					type="text"
					placeholder="client/admin"
                    style={{margin: '10px', width: '50%'}}
				/>
				<br />
				<button  class="btn btn-secondary" style={{margin: '10px'}}> Register </button>
			</form>
		</div>
	)
}

export default Register;