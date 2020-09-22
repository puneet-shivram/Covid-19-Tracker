
import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import coronaImage from '../../assets/Images/corona.png'
import './style.css';

function HomePage(props) {

	return (
		<div className="homepageWrapper">
			<div className="split-screen introWrapper"> 
				<div className="introBlock">
					<img src={coronaImage} alt="corona image" className="introWrapper-image" />
					<h3 className="introWrapper-headingText">Covid-19 Tracker App</h3>
				</div>
			</div>
            <div className="split-screen formWrapper">
				<div className="form">
					<Button
						type="submit"
						fullWidth
						variant="contained"
						component={Link}
						to="/register"
						className="mb10">
						Register
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						component={Link}
						to="/login"
						className="mb10">
						Login
					</Button>
				</div>
				
			</div>
		</div>
	)
}

export default HomePage;