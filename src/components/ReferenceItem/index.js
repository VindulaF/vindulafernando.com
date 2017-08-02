import React from 'react'
import PropTypes from 'prop-types'

const ReferenceItem = props =>
	<p>
		{props.reference.reference} - <strong>{props.reference.name}</strong>
	</p>

ReferenceItem.propTypes = {
	reference: PropTypes.object.isRequired
}

export default ReferenceItem
