import React from 'react'
import Link from 'gatsby-link'
import TopProfile from '../components/TopProfile'
import WorkItem from '../components/WorkItem'

const curve1 = "M 80 40 Q 100 80 80 120 Q 60 160 80 200"
const curve2 = "M 80 40 Q 60 80 80 120 Q 100 160 80 200"
const curve3 = "M 80 40 Q 60 80 100 160 Q 100 160 80 200"
const curve4 = "M 80 40 Q 100 60 100 100 Q 60 140 80 200"

const DateSubtitle = ({ children }) =>
  <span style={{
    margin: '-7px 0 10px',
    fontSize: '90%',
    fontWeight: '500',
    display: 'block',
    color: 'rgba(165, 170, 173, 0.75)',
    width: '100%',
  }}>
    {children}
  </span>

const SvgDashedLine = ({ d }) =>
  <svg className="work-line" width="50" height="195" viewBox="62 5 50 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
      <path
        strokeWidth="2"
        stroke="rgba(165, 170, 173, 0.75)"
        strokeLinecap="round"
        strokeDasharray="15, 10, 5, 10, 15"
        d={d}
      />
    </g>
  </svg>

const Company = ({ color, title, place }) =>
  <h1 style={{ lineHeight: '1.1em' }}>
    <span className="work-title">{title}</span> <br /> <span style={{
      fontSize: '80%',
      fontWeight: '500'
    }}>at <span style={{ color: `${color}` }}>{place}</span></span>
  </h1>

const WorkPage = () => (
  <div style={{textAlign: 'center' }}>
    <TopProfile />

    <WorkItem d={curve1}>
      <Company
        title="Software Engineer"
        color="#EE3F46"
        place="Robin"
      />
      <DateSubtitle>May 2018 — current</DateSubtitle>
      <p>I'll be rejoining the Robin engineering team to make it easier to manage your meeting rooms. Working with React, React Native, and Redux for web, iOS, and Android mobile apps.</p>
    </WorkItem>

    <WorkItem d={curve2}>
      <Company
        title="Software Engineering Intern"
        color="#0482c4"
        place="Box"
      />
      <DateSubtitle>June 2017 — August 2017</DateSubtitle>
      <p>Spent the summer working on ClusterRunner, a tool that helps run test suites in the fastest and most efficient way possible. Worked with Python and SQLite to build APIs and developer tools.</p>
    </WorkItem>

    <WorkItem d={curve1}>
      <Company
        title="Software Engineering Intern"
        color="#EE3F46"
        place="Robin"
      />
      <DateSubtitle>May 2016 — August 2016</DateSubtitle>
      <p>Over the summer, I helped develop Robin's new user facing mobile app. Worked with React Native and Redux for both iOS and Android mobile apps.</p>
    </WorkItem>

    <WorkItem d={curve2}>
      <Company
        title="Software Developer"
        color="#2cb673"
        place="Veranda Outdoors"
      />
      <DateSubtitle>May 2015 — August 2015</DateSubtitle>
      <p>Led a small team of developers and created a wholesale ordering platform. Worked with PHP and MySQL to build out relational databases and user interfaces.</p>
    </WorkItem>

    <WorkItem d={curve1} isLast={true}>
      <Company
        title="Freelance Software Engineer"
        color="#0468b1"
        place="Umass Lowell"
      />
      <DateSubtitle>February 2015 — June 2015</DateSubtitle>
      <p>Teamed up with staff to build and design a web app to help automate the class scheduling process at my university. Worked with JavaScript and efficient algorithms to develop an optimized platform.</p>
    </WorkItem>
  </div>
)

export default WorkPage