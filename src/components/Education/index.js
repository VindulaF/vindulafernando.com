import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

const Education = props =>
	<section className="row">
		<header className="col-md-3">
			<h3>Education</h3>
		</header>
		<div className="col-md-9">
			{props.education.map((degree, i) =>
				<div key={i} className="skills">
					<h3>
						{degree.institution}
					</h3>
					<h4>
						{degree.area}, {degree.studyType}
					</h4>
					<p>
						{format(degree.startDate, 'YYYY')} -{' '}
						{format(degree.endDate, 'YYYY')}
					</p>
					<hr />
				</div>
			)}
		</div>
	</section>

Education.propTypes = {
	education: PropTypes.array.isRequired
}

export default Education
