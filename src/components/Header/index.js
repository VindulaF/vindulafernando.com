import React from 'react'
import PropTypes from 'prop-types'

const Header = props =>
	<div className="row">
		<div className="col-md-6 col-sm-12">
			<h1>
				{props.basics.name}
			</h1>
			<h2>
				{props.basics.location.city}
			</h2>
		</div>
		<div className="col-md-6 col-sm-12">
			<img
				className="media-object img-circle pull-right"
				src={props.basics.picture}
				alt="64x64"
				style={{ width: 100, height: 100, marginTop: 20 }}
			/>
		</div>
	</div>

Header.propTypes = {
	basics: PropTypes.object.isRequired
}

export default Header
