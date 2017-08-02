import React from 'react'
import PropTypes from 'prop-types'

const AreaItem = props =>
	<li>
		{props.keyword}
	</li>

AreaItem.propTypes = {
	keyword: PropTypes.string.isRequired
}

export default AreaItem
