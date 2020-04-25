import React from 'react';
import Job from 'src/home/experience/Job';

//TODO: change the side of the timeline for each job

const jobs = [
  {
    title: 'Full-Stack Engineer',
    company: {
      name: 'Z3 Works',
      website: 'https://www.z3works.com/'
    },
    period: 'Sep 2018 - Now',
    experience: [
      'Responsible for working on 5 different products and 13+ applications built with different technologies such as JavaScript, Node.js, Express, React, Redux, AngularJS, Gulp, and Webpack.',
      'Collaborated on applications that handled telematics data from 40,000+ vehicles using Elasticsearch, RabbitMQ, and SQS.',
      'Engaged in a team of 10+ people, managed using Scrum practices and Git/GitHub for version control.',
      'Begin to move applications to run inside Docker containers.'
    ]
  },
  {
    title: 'Co-Founder',
    company: {
      name: 'CodeSociety',
      website: 'http://www.codesociety.com.br/'
    },
    period: 'Jan 2015 - Now',
    experience: [
      'Responsible for managing a technical team of 4 developers and handling our clients\' software architecture.',
      'Improved 5+ Java, PHP and JavaScript applications of 3 clients from completely different areas.',
      'Cooperated to teach our clients how software is built, cultivating the Agile culture within those companies.',
      'Provided technical consulting services for other companies.'
    ]
  },
  {
    title: 'Full-Stack Engineer & Technical Leader',
    company: {
      name: 'Igen',
      website: 'http://redcap.afip.com.br/conteudo_igen.asp'
    },
    period: 'Oct 2015 - Now',
    experience: [
      'Worked on a legacy Java/JSF/JPA/EclipseLink application for managing an SQL Server database with 20GB+ of organ transplant data.',
      'Improved the technology by moving to a Java/Spring REST API and an Angular 7 web application.',
      'Guided and worked as Scrum Master on a team of 4 people and adopted TDD, integration tests, pair-programming, code review, and other practices to ensure code quality.',
      'Introduced DevOps practices by implementing continuous integration using Jenkins.'
    ]
  },
  {
    title: 'Full-Stack Software Engineer',
    company: {
      name: 'Quefo.me',
      website: 'https://www.linkedin.com/company/quefome/'
    },
    period: 'Jan 2015 - Oct 2015',
    experience: [
      'Responsible for fully designing and building the REST API and webapp using different technologies such as Java, Spring, Hibernate, PostgreSQL, JavaScript, Node.js, AngularJS, Grunt and Redis.',
      'Delivered the MVP implementation in less then 3 months.',
      'Set up a self scalable production environment on Amazon Web Services using EC2, ELB, and CloudFront.',
      'Actively contributed to the MVP, backlog and product roadmap.',
      'Went out to sell the product for fast-food delivery establishments (not a technical achievement, but I\'m really proud of myself for doing it).'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: {
      name: 'I360 Technology',
      website: 'http://i360tecnologia.com.br/'
    },
    period: 'Mar 2012 - January 2015',
    experience: [
      'Helped to build the REST API and the web application for handling 10,000+ SMS messages a day using Java, JAX-RS, Hibernate, RabbitMQ, PostgresSQL, NodeJS, AngularJS, and Grunt.',
      'Led the development of a PHP/CakePHP/MySQL billing application MVP, delivered in less than 3 weeks.',
      'Automatized almost the billing process and the remote activation of 100+ clients\' equipment, distributed across 5+ different cities.',
      'Introduced version control to all projects and team members using Git.',
      'Adopted iterations, backlogs, planning and review sessions, TDD, pair-programming and other Agile and code quality practices.'
    ]
  },
  {
    title: 'Software Developer',
    company: {
      name: 'SystemHaus',
      website: 'https://www.systemhaus.com.br/en/'
    },
    period: 'Oct 2010 - March 2012',
    experience: [
      'Responsible for collaborating on a Java, Swing/AWT and Hibernate desktop application used by 30+ companies from 10+ different countries.',
      'Single-handed implemented the data migration of a client\'s legacy software using TDD and OOP concepts.',
      'Worked with Oracle, SQL Server, and Postgres SQL databases.',
      'Contributed to a team of 7+ developers.'
    ]
  }
];

export default class ExperienceSection extends React.PureComponent {

  render() {
    return (
      <section className="experience-section">
        <h3 className="heading">Work Experience</h3>

        <div className="timeline">
          <div className="jobs">
            {jobs.map(job => (
              <Job
                key={job.title + job.company.name + job.period}
                title={job.title}
                companyName={job.company.name}
                companyWebsite={job.company.website || '/'}
                period={job.period}
                experience={job.experience}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

}
