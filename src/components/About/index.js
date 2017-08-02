import React from 'react'
import PropTypes from 'prop-types'

const About = props =>
	<section className="row">
		<header className="col-md-3">
			<h3>About</h3>
		</header>
		<div className="col-md-9">
			<p>{props.basics.summary}</p>
			<strong>Phone:</strong> {props.basics.phone} <br />
			<strong>Email:</strong> {props.basics.email}
			<br />
			<strong>Twitter:</strong>
			<a href={`http://twitter.com/${props.profiles.twitter}`}>
				{' '}{props.profiles.twitter}
			</a>
			<br />
			<strong>Github:</strong>
			<a href={`http://github.com/${props.profiles.github}`}>
				{' '}{props.profiles.twitter}
			</a>
			<br />
		</div>
	</section>

About.propTypes = {
	basics: PropTypes.object.isRequired,
	profiles: PropTypes.object.isRequired
}

export default About
