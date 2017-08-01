import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import './App.css'

class App extends Component {
	render() {
		const { resume } = this.props
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<div className="row">
							<div className="col-md-6 col-sm-12">
								<h1>
									{resume.basics.name}
								</h1>
								<h2>
									{resume.basics.location.city}
								</h2>
							</div>
							<div className="col-md-6 col-sm-12">
								<img
									className="media-object img-circle pull-right"
									src={resume.basics.picture}
									alt="64x64"
									style={{ width: 100, height: 100, marginTop: 20 }}
								/>
							</div>
						</div>

						<hr />

						<section className="row">
							<header className="col-md-3">
								<h3>About</h3>
							</header>
							<div className="col-md-9">
								<p>{resume.basics.summary}</p>
								<strong>Phone:</strong> {resume.basics.phone} <br />
								<strong>Email:</strong> {resume.basics.email}
								<br />
								<strong>Twitter:</strong>
								<a href={`http://twitter.com/${resume.profiles.twitter}`}>
									{' '}{resume.profiles.twitter}
								</a>
								<br />
								<strong>Github:</strong>
								<a href={`http://github.com/${resume.profiles.github}`}>
									{' '}{resume.profiles.twitter}
								</a>
								<br />
							</div>
						</section>

						<section className="row">
							<header className="col-md-3">
								<h3>Work Experience</h3>
							</header>
							<div className="col-md-9">
								{resume.work.map((job, i) =>
									<div key={i} className="skills">
										<h3>
											{job.company}
										</h3>
										<strong>
											{job.position}
										</strong>
										<p>
											{format(job.startDate, 'YYYY')} -{' '}
											{job.endDate ? format(job.endDate, 'YYYY') : 'Present'}
										</p>
										<p>
											{job.summary}
										</p>
										<hr />
									</div>
								)}
							</div>
						</section>

						<section className="row">
							<header className="col-md-3">
								<h3>Education</h3>
							</header>
							<div className="col-md-9">
								{resume.education.map((degree, i) =>
									<div key={i} className="skills">
										<h3>
											{degree.institution}
										</h3>
										<h4>
											{degree.area}, {degree.studyType}
										</h4>
										<p>
											{format(degree.startDate, 'YYYY')} -{' '}
											{format(degree.endDate, 'YYYY')}
										</p>
										<hr />
									</div>
								)}
							</div>
						</section>

						<section className="row">
							<header className="col-md-3">
								<h3>Skills</h3>
							</header>
							<div className="col-md-9">
								<div className="row-fluid skills">
									{resume.skills.map((area, i) =>
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

						<section className="row">
							<header className="col-md-3">
								<h3>References</h3>
							</header>
							<div className="col-md-9">
								<div className="row-fluid skills">
									{resume.references.map((reference, i) =>
										<p key={i}>
											{reference.reference} - <strong>{reference.name}</strong>
										</p>
									)}
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		)
	}
}

App.propTypes = {
	resume: PropTypes.object.isRequired
}

export default App
