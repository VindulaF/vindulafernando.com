import React from 'react'
import PropTypes from 'prop-types'
import WorkExperienceItem from '../WorkExperienceItem'

const WorkExperienceList = props =>
	<section className="row">
		<header className="col-md-3">
			<h3>Work Experience</h3>
		</header>
		<div className="col-md-9">
			{props.work.map((job, i) => <WorkExperienceItem key={i} job={job} />)}
		</div>
	</section>

WorkExperienceList.propTypes = {
	work: PropTypes.array.isRequired
}

export default WorkExperienceList
