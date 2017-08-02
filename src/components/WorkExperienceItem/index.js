import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

const WorkExperienceItem = props =>
	<div className="skills">
		<h3>
			{props.job.company}
		</h3>
		<strong>
			{props.job.position}
		</strong>
		<p>
			{format(props.job.startDate, 'YYYY')} -{' '}
			{props.job.endDate ? format(props.job.endDate, 'YYYY') : 'Present'}
		</p>
		<p>
			{props.job.summary}
		</p>
		<hr />
	</div>

WorkExperienceItem.propTypes = {
	job: PropTypes.object.isRequired
}

export default WorkExperienceItem
