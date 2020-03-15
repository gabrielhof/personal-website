import React from 'react';
import Job from 'src/home/experience/Job';
import ExternalLink from 'src/components/ExternalLink';

export default class ExperienceSection extends React.PureComponent {

  render() {
    return (
      <div className="experience-section">
        <h3 className="heading">Work Experience</h3>

        <div className="timeline">
          <div className="jobs">
            <Job
              title="Full-Stack Engineer"
              companyName="Z3 Works"
              companyWebsite="http://www.z3works.com.br"
              period="Sep 2018 - Now"
              experience={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                'Purus gravida quis blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.',
                'Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.',
                'Sit amet risus nullam eget felis eget nunc lobortis. Tellus orci ac auctor augue mauris.'
              ]}
            />

            <Job
              title="Full-Stack Engineer"
              companyName="Z3 Works"
              companyWebsite="http://www.z3works.com.br"
              period="Sep 2018 - Now"
              experience={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                'Purus gravida quis blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.',
                'Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.',
                'Sit amet risus nullam eget felis eget nunc lobortis. Tellus orci ac auctor augue mauris.'
              ]}
            />
          </div>
        </div>
      </div>
    );
  }

}
