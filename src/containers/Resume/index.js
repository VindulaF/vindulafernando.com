import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Header from '../../components/Header'
import About from '../../components/About'
import WorkExperienceList from '../../components/WorkExperienceList'
import EducationList from '../../components/EducationList'
import SkillList from '../../components/SkillList'
import ReferenceList from '../../components/ReferenceList'

class Resume extends Component {
	static propTypes = {
		resume: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		ReactGA.initialize('UA-104247285-1')
		ReactGA.set({ page: window.location.pathname })
		ReactGA.pageview(window.location.pathname)
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<Header basics={this.props.resume.basics} />
						<hr />
						<About
							basics={this.props.resume.basics}
							profiles={this.props.resume.profiles}
						/>
						<WorkExperienceList work={this.props.resume.work} />
						<EducationList education={this.props.resume.education} />
						<SkillList skills={this.props.resume.skills} />
						<ReferenceList references={this.props.resume.references} />
					</div>
				</div>
			</div>
		)
	}
}

export default Resume
