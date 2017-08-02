import React from 'react'
import PropTypes from 'prop-types'
import SkillItem from '../SkillItem'

const SkillList = props =>
	<section className="row">
		<header className="col-md-3">
			<h3>Skills</h3>
		</header>
		<div className="col-md-9">
			<div className="row-fluid skills">
				{props.skills.map((area, i) => <SkillItem key={i} area={area} />)}
			</div>
		</div>
	</section>

SkillList.propTypes = {
	skills: PropTypes.array.isRequired
}

export default SkillList
