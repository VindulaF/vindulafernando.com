import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import About from '../../components/About'
import WorkExperience from '../../components/WorkExperience'
import Education from '../../components/Education'
import Skills from '../../components/Skills'
import References from '../../components/References'

const Resume = props =>
	<div className="container">
		<div className="row">
			<div className="col-md-8 col-md-offset-2">
				<Header basics={props.resume.basics} />
				<hr />
				<About basics={props.resume.basics} profiles={props.resume.profiles} />
				<WorkExperience work={props.resume.work} />
				<Education education={props.resume.education} />
				<Skills skills={props.resume.skills} />
				<References references={props.resume.references} />
			</div>
		</div>
	</div>

Resume.propTypes = {
	resume: PropTypes.object.isRequired
}

export default Resume
