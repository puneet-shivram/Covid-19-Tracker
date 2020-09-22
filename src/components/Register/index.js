import React, { useState } from 'react'
import { Typography, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom';
import firebase from '../firebase'
import './styles.css'


function Register(props) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	async function onRegister(){
        try{
            await firebase.register(name, email, password)
            props.history.replace('/dashboard');
        }
        catch(error){
            alert(error.message);
        }
    }
	return (
		<main className="formWrapper">
				
				<form className="form" onSubmit={e => e.preventDefault() && false }>
					<Typography className="formHeading" component="h1" variant="h5">
						Register Account
					</Typography>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="name">Name</InputLabel>
						<Input id="name" name="name" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email Address</InputLabel>
						<Input id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)}  />
					</FormControl>
					<FormControl className="mb10" margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}  />
					</FormControl>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={onRegister}
						className="mb10">
						Register
          			</Button>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						component={Link}
						to="/login"
						className="">
						Go back to Login
          			</Button>
				</form>
		</main>
	)

	
    
}

export default withRouter((Register))