import React from 'react';
import Job from 'src/home/experience/Job';

//TODO: change the side of the timeline for each job

export default class ExperienceSection extends React.PureComponent {

  render() {
    return (
      <section className="experience-section">
        <h3 className="heading">Work Experience</h3>

        <div className="timeline">
          <div className="jobs">
            <Job
              title="Full-Stack Engineer"
              companyName="Z3 Works"
              companyWebsite="http://www.z3works.com/"
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
              companyName="Igen"
              companyWebsite="http://redcap.afip.com.br/conteudo_igen.asp"
              period="Sep 2015 - Now"
              experience={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                'Purus gravida quis blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.',
                'Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.',
                'Sit amet risus nullam eget felis eget nunc lobortis. Tellus orci ac auctor augue mauris.'
              ]}
            />

            <Job
              title="Full-Stack Developer"
              companyName="I360 Technology"
              companyWebsite="http://i360tecnologia.com.br"
              period="Sep 2015 - Now"
              experience={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                'Purus gravida quis blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.',
                'Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.',
                'Sit amet risus nullam eget felis eget nunc lobortis. Tellus orci ac auctor augue mauris.'
              ]}
            />
          </div>
        </div>
      </section>
    );
  }

}
