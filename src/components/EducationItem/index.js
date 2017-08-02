import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

const EducationListItem = props =>
	<div className="skills">
		<h3>
			{props.degree.institution}
		</h3>
		<h4>
			{props.degree.area}, {props.degree.studyType}
		</h4>
		<p>
			{format(props.degree.startDate, 'YYYY')} -{' '}
			{format(props.degree.endDate, 'YYYY')}
		</p>
		<hr />
	</div>

EducationListItem.propTypes = {
	degree: PropTypes.object.isRequired
}

export default EducationListItem
