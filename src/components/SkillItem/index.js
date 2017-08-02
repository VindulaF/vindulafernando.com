import React from 'react'
import PropTypes from 'prop-types'
import AreaList from '../AreaList'

const SkillItem = props =>
	<ul className="col-md-6">
		<li>
			<h4>
				{props.area.name}
			</h4>
			<AreaList keywords={props.area.keywords} />
		</li>
	</ul>

SkillItem.propTypes = {
	area: PropTypes.object.isRequired
}

export default SkillItem
