import React, { useState } from 'react'
import { Typography, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'


function SignIn(props) {

    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	async function login(){
        try{
            await firebase.login(email, password)
            props.history.replace('/dashboard')
        }
        catch(error){
            alert(error.message);
        }
    }
	return (
		<main className="formWrapper">
				<form className="form" onSubmit={e => e.preventDefault() && false}>
					<Typography className="formHeading" component="h1" variant="h5">
						Sign in
					</Typography>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email Address</InputLabel>
						<Input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
					</FormControl>
					<FormControl className="mb10" margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={ e => setPassword(e.target.value)} />
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={login}
						className="mb10">
						Sign in
          			</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						component={Link}
						to="/register"
						className="">
						Register
          			</Button>
				</form>
		</main>
	)
   
}

export default withRouter(SignIn)