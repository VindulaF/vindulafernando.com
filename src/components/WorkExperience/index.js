import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

const WorkExperience = props =>
	<section className="row">
		<header className="col-md-3">
			<h3>Work Experience</h3>
		</header>
		<div className="col-md-9">
			{props.work.map((job, i) =>
				<div key={i} className="skills">
					<h3>
						{job.company}
					</h3>
					<strong>
						{job.position}
					</strong>
					<p>
						{format(job.startDate, 'YYYY')} -{' '}
						{job.endDate ? format(job.endDate, 'YYYY') : 'Present'}
					</p>
					<p>
						{job.summary}
					</p>
					<hr />
				</div>
			)}
		</div>
	</section>

WorkExperience.propTypes = {
	work: PropTypes.array.isRequired
}

export default WorkExperience
