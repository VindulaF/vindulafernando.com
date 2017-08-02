import React from 'react'
import PropTypes from 'prop-types'

const Skills = props =>
	<section className="row">
		<header className="col-md-3">
			<h3>Skills</h3>
		</header>
		<div className="col-md-9">
			<div className="row-fluid skills">
				{props.skills.map((area, i) =>
					<ul key={i} className="col-md-6">
						<li>
							<h4>
								{area.name}
							</h4>
							<ul>
								{area.keywords.map((keyword, i) =>
									<li key={i}>
										{keyword}
									</li>
								)}
							</ul>
						</li>
					</ul>
				)}
			</div>
		</div>
	</section>

Skills.propTypes = {
	skills: PropTypes.array.isRequired
}

export default Skills
