import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap'


const TimeLine = () => {
  const style={
    padding: '5%'
  }
    return(
      <Container style={style}>
      <h2>Education and Work Expierence</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education hov"
          contentStyle={{ background: 'linear-gradient(to right top, #51096e, #472c84, #394496, #2958a5, #1c6baf, #0076b2, #0080b3, #0089b3, #008dac, #0090a3, #009398, #14958c)', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="May 2022 - November 2022"
          iconStyle={{ background: 'linear-gradient(to right top, #51096e, #472c84, #394496, #2958a5, #1c6baf, #0076b2, #0080b3, #0089b3, #008dac, #0090a3, #009398, #14958c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Studies in Front-End Development</h3>
          <h4 className="vertical-timeline-element-subtitle">Codecademy</h4>
          <p>
            Studing JavaScript, React.js, using React libraries, React Native
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hov"
          date="February 2022 - May 2022"
          iconStyle={{ background: 'linear-gradient(to right top, #9a073e, #a4014d, #ac005d, #b2056f, #b71282, #ad1889, #a21f8f, #962595, #7c248d, #632383, #4b2078, #321d6c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Event Manager</h3>
          <h4 className="vertical-timeline-element-subtitle">'Tutaka', Bialystok, Poland</h4>
          <p>
            Event and project management in cultural organisation of the Polish Belarusians 'Tutaka'
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hov"
          date="August 219 - October 2021"
          iconStyle={{ background: 'linear-gradient(to right top, #9a073e, #a4014d, #ac005d, #b2056f, #b71282, #ad1889, #a21f8f, #962595, #7c248d, #632383, #4b2078, #321d6c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Managing Director, co-Founder</h3>
          <h4 className="vertical-timeline-element-subtitle">The female publishing initiative 'Pflaumbaum', Minsk, Belarus</h4>
          <p>
            Managing Direction of the organisation, project management, publisher
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hov"
          date="May 2018 - May 2019"
          iconStyle={{ background: 'linear-gradient(to right top, #9a073e, #a4014d, #ac005d, #b2056f, #b71282, #ad1889, #a21f8f, #962595, #7c248d, #632383, #4b2078, #321d6c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Project Manager</h3>
          <h4 className="vertical-timeline-element-subtitle">Belarusian PEN-Center, Minsk, Belarus</h4>
          <p>
            Project and Event Manager in Belarusian cultural organisation
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education hov"
          date="September 2017 - January 2019"
          iconStyle={{ background: 'linear-gradient(to right top, #51096e, #472c84, #394496, #2958a5, #1c6baf, #0076b2, #0080b3, #0089b3, #008dac, #0090a3, #009398, #14958c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Master Course in Cultural Studies</h3>
          <h4 className="vertical-timeline-element-subtitle">Belarusian University of Culture and Arts</h4>
          <p>
            Master Degree in Cultura Studies
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hov"
          date="April 2017 -April 2018"
          iconStyle={{ background: 'linear-gradient(to right top, #9a073e, #a4014d, #ac005d, #b2056f, #b71282, #ad1889, #a21f8f, #962595, #7c248d, #632383, #4b2078, #321d6c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Web Administrator</h3>
          <h4 className="vertical-timeline-element-subtitle">Elitgranit, Minsk, Belarus</h4>
          <p>
            The Web Administrator of the Wordpress and Drupal websites
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education hov"
          date="September 2016 - December 2017"
          iconStyle={{ background: 'linear-gradient(to right top, #51096e, #472c84, #394496, #2958a5, #1c6baf, #0076b2, #0080b3, #0089b3, #008dac, #0090a3, #009398, #14958c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Studies in creation the websites on CMSs </h3>
          <h4 className="vertical-timeline-element-subtitle">Courses in Minsk, Belarus</h4>
          <p>
            Studing the Wordpress, Drupal, Joomla
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education hov"
          date="May 2016 - June 2016"
          iconStyle={{ background: 'linear-gradient(to right top, #51096e, #472c84, #394496, #2958a5, #1c6baf, #0076b2, #0080b3, #0089b3, #008dac, #0090a3, #009398, #14958c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Studies in HTML & CSS</h3>
          <h4 className="vertical-timeline-element-subtitle">Courses in Minsk, Belarus</h4>
          <p>
          Studing HTML and CSS, basics of JS and jquery, creation of the websites 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work hov"
          date="August 2015 - April 2016"
          iconStyle={{ background: 'linear-gradient(to right top, #51096e, #472c84, #394496, #2958a5, #1c6baf, #0076b2, #0080b3, #0089b3, #008dac, #0090a3, #009398, #14958c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Project Manager</h3>
          <h4 className="vertical-timeline-element-subtitle">Web-Studio, Minsk, Belarus</h4>
          <p>
          Project management, creation of mockups
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education hov"
          date="December 2014 - August 2015"
          iconStyle={{ background: 'linear-gradient(to right top, #9a073e, #a4014d, #ac005d, #b2056f, #b71282, #ad1889, #a21f8f, #962595, #7c248d, #632383, #4b2078, #321d6c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">EVS longterm volunteer </h3>
          <h4 className="vertical-timeline-element-subtitle">Support for Youth Development, Cluj-Napoca, Romania</h4>
          <p>
            The volunteer in the organisation, non-formal education in English, Romanian, cultural dialogue
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education hov"
          date="2007 - 2012"
          iconStyle={{ background: 'linear-gradient(to right top, #51096e, #472c84, #394496, #2958a5, #1c6baf, #0076b2, #0080b3, #0089b3, #008dac, #0090a3, #009398, #14958c)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Specialist in Fundemental Cultural Studies, American Studies</h3>
          <h4 className="vertical-timeline-element-subtitle">Belarusian State University, Minsk, Belarus</h4>
          <p>
            Studies in Cultural Anthropology, English, Latin, Hebrew, American Litrature, History of Arts, Theory of the culture, Economics, Bible Studies
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'linear-gradient(to right top, #196e09, #177113, #14741c, #117723, #0d7a2a, #0f8232, #108b39, #119341, #17a34c, #1db357, #22c462, #27d56e)', color: '#fff' }}

        />
      </VerticalTimeline>
      </Container>
    )
  };
  
  export default TimeLine;
  