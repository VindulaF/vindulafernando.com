import React from 'react'
import PropTypes from 'prop-types'
import AreaItem from '../AreaItem'

const AreaList = props =>
	<ul>
		{props.keywords.map((keyword, i) => <AreaItem key={i} keyword={keyword} />)}
	</ul>

AreaList.propTypes = {
	keywords: PropTypes.array.isRequired
}

export default AreaList
