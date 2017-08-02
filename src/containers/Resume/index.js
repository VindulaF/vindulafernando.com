import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import About from '../../components/About'
import WorkExperienceList from '../../components/WorkExperienceList'
import EducationList from '../../components/EducationList'
import SkillList from '../../components/SkillList'
import ReferenceList from '../../components/ReferenceList'

const Resume = props =>
	<div className="container">
		<div className="row">
			<div className="col-md-8 col-md-offset-2">
				<Header basics={props.resume.basics} />
				<hr />
				<About basics={props.resume.basics} profiles={props.resume.profiles} />
				<WorkExperienceList work={props.resume.work} />
				<EducationList education={props.resume.education} />
				<SkillList skills={props.resume.skills} />
				<ReferenceList references={props.resume.references} />
			</div>
		</div>
	</div>

Resume.propTypes = {
	resume: PropTypes.object.isRequired
}

export default Resume
