import React from 'react';
import { Button, Typography } from '@material-ui/core'
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'
import './styles.css'
function Header(props){
    async function logout() {
		await firebase.logout()
		props.history.push('/')
    }
    if(!firebase.getCurrentUsername()) {
        alert('Please login first')
        props.history.replace('/login')
        return null
    }
    return(
        <header className="headerWrapper">
            <div className="headerWrapperBlock"><Typography className="headerBlockText" component="h1" variant="h5">
					Hello { firebase.getCurrentUsername() }
				</Typography></div>
            <div className="headerWrapperBlock">
            <Typography  className="headerBlockTextHeading" component="h1" variant="h5">
					Covid-19 India
				</Typography>
            </div>
            <div className="headerWrapperBlock">
            <Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					onClick={logout}
					className="">
					Logout
          		</Button>
            </div>
        </header>
    )

}
export default withRouter(Header);