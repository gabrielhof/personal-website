import React from 'react';

export default class SkillsSubsection extends React.PureComponent {

  render(){
    return (
      <div className="skills-subsection">
        <h4 className="subheading">Technical Skills</h4>

        <div className="skills-container">
          <div className="skills-level advanced">
            <h4 className="title">Advanced</h4>

            <ul className="skills-list">
              <li>Java</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>AngularJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git</li>
              <li>Jenkins</li>
              <li>Agile</li>
              <li>Scrum</li>
              <li>TDD</li>
              <li>Pair-programming</li>
            </ul>
          </div>

          <div className="skills-level intermediate">
            <h4 className="title">Intermediate</h4>

            <ul className="skills-list">
              <li>React</li>
              <li>Redux</li>
              <li>Gatsby</li>
              <li>Angular 7</li>
              <li>Grunt</li>
              <li>Gulp</li>
              <li>Webpack</li>
              <li>Spring</li>
              <li>JPA</li>
              <li>Hibernate</li>
              <li>EclipseLink</li>
              <li>JSF</li>
              <li>AWS</li>
              <li>EC2</li>
              <li>S3</li>
              <li>CloudFront</li>
              <li>SQL</li>
              <li>PHP</li>
            </ul>
          </div>

          <div className="skills-level beginner">
            <h4 className="title">Beginner</h4>

            <ul className="skills-list">
              <li>Serveless</li>
              <li>Lambda</li>
              <li>API Gateway</li>
              <li>SQS</li>
              <li>Elasticsearch</li>
              <li>Redis</li>
              <li>RabbitMQ</li>
              <li>Docker</li>
              <li>Sass</li>
              <li>LESS</li>
              <li>CSS-in-JS</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}
