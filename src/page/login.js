import { useState } from 'react'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
            localStorage.setItem('token', data.user)
			alert('Login successful')
            console.log(data.role)
            if(data.role === 'client')
			window.location.href = '/dashboard'
            else
            window.location.href = '/admin'
            
        }else {
            alert('Please check your username and password')
           
		}
		
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
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
				<button  class="btn btn-secondary" style={{margin: '10px'}}> Login </button>
			</form>
		</div>
	)
}

export default Login;