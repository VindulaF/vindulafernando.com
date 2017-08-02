import React from 'react'
import PropTypes from 'prop-types'

const References = props =>
	<section className="row">
		<header className="col-md-3">
			<h3>References</h3>
		</header>
		<div className="col-md-9">
			<div className="row-fluid skills">
				{props.references.map((reference, i) =>
					<p key={i}>
						{reference.reference} - <strong>{reference.name}</strong>
					</p>
				)}
			</div>
		</div>
	</section>

References.propTypes = {
	references: PropTypes.array.isRequired
}

export default References
