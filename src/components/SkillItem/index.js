import React from 'react'
import PropTypes from 'prop-types'

const SkillItem = props =>
	<ul className="col-md-6">
		<li>
			<h4>
				{props.area.name}
			</h4>
			<ul>
				{props.area.keywords.map((keyword, i) =>
					<li key={i}>
						{keyword}
					</li>
				)}
			</ul>
		</li>
	</ul>

SkillItem.propTypes = {
	area: PropTypes.object.isRequired
}

export default SkillItem
