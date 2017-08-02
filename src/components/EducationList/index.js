import React from 'react'
import PropTypes from 'prop-types'
import EducationItem from '../EducationItem'

const EducationList = props =>
	<section className="row">
		<header className="col-md-3">
			<h3>Education</h3>
		</header>
		<div className="col-md-9">
			{props.education.map((degree, i) =>
				<EducationItem key={i} degree={degree} />
			)}
		</div>
	</section>

EducationList.propTypes = {
	education: PropTypes.array.isRequired
}

export default EducationList
