import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'
import TaglineSection from '../components/tagline-section'
import theme from '../theme'
import styled from 'styled-components'
import { rhythm, scale } from 'src/typography'
import Header from 'src/components/header'

const WhoIAmSection = styled.section`
  background: ${props => props.theme.color.contrast.main};
  padding-top: ${rhythm(2)};
  padding-bottom: ${rhythm(2)};
`

const CompanyContainer = styled.div`
  width: 50%;
  margin: auto auto ${rhythm(2)};
  ${props => props.theme.media.phone`
    width: 100%;
    padding-left: ${rhythm(2)};
    padding-right: ${rhythm(2)};
  `}
  h3,
  h4 {
    color: ${props => props.theme.color.secondary.main};
  }
  h3 {
    ${scale(1)};
  }
  h4 {
    ${scale(3 / 4)};
    margin-bottom: ${rhythm(2 / 4)};
  }
`

const CompanySummaryDl = styled.table`
  ${scale(1 / 2)};
  border: none;
  td,
  th {
    border: none;
    padding: 0 0 ${rhythm(1 / 4)};
    vertical-align: top;
  }
  th {
    padding-right: ${rhythm(1)};
  }
  td {
    font-weight: 300;
  }
`

const CompanySummary = ({ what, when, who, where }) => {
  return (
    <CompanySummaryDl>
      <tbody>
        <tr>
          <th>What.</th>
          <td>{what}</td>
        </tr>
        <tr>
          <th>When.</th>
          <td>{when}</td>
        </tr>
        <tr>
          <th>Who.</th>
          <td>{who}</td>
        </tr>
        <tr>
          <th>Where.</th>
          <td>{where}</td>
        </tr>
      </tbody>
    </CompanySummaryDl>
  )
}

const CompanyAchievementItem = styled.div`
  h5 {
    margin-bottom: ${rhythm(1/4)};;
    ${scale(2 / 4)};
  }
  p {
    margin-bottom: ${rhythm(1 / 2)};
    ${scale(2 / 4)};
    font-weight: 200;
  }
  & + h4 {
    margin-top: ${rhythm(1)};
  }
`

const CompanyAchievementItems = ({ items }) => {
  return items.map((item, index) => (
    <CompanyAchievementItem key={index}>
      <h5>{item.title}</h5>
      <p>{item.description}</p>
    </CompanyAchievementItem>
  ))
}

const WhoIAmPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <WhoIAmSection>
      <TaglineSection
        colors={{
          backgroundColor: theme.color.contrast.main,
          textColor: theme.color.primary.main,
        }}
        crazyTextRange={2}
        align='left'
        title={<>Who I am.</>}
        subtitle={`I am a full-stack software engineer based in London.`}
      />
      <CompanyContainer>
        <h3>ShawAcademy.</h3>
        <CompanySummary
          what={`The largest live-online education platform on the planet.`}
          when={<>2015&mdash;2017.</>}
          who={`Chief Technical Officer.`}
          where={`London. Dublin. Bangalore.`}
        />
        <h4>Responsibilities.</h4>
        <CompanyAchievementItems
          items={[
            {
              title: 'Engineering, Design and Email Marketing.',
              description:
                'Responsible for entire engineering, design functions of 30+ members across Bangalore, Dublin and London across three entities of shawacademy.com, academyft.com and pipindex.com.',
            },
            {
              title: 'System Design, Development and Delivery.',
              description:
                'Responsible for the delivery of all engineering and graphic design projects.',
            },
            {
              title: 'Responsibility.',
              description: 'Reported directly to the CEO.',
            },
          ]}
        />
        <h4>Achievements.</h4>
        <CompanyAchievementItems
          items={[
            {
              title: 'Leadership.',
              description:
                'Promoted directly to CTO after just 3 months at the company.',
            },
            {
              title: 'Management.',
              description:
                'Oversaw the relocation of software engineering, business intelligence design and content marketing operations from London and Dublin to Bangalore, where I was stationed for a year, hiring more than 30 people and conducting 200 interviews, successfully navigating a total switch in culture and pretty much absolutely everything else imaginable.',
            },
            {
              title: 'Increased Conversions & Revenue.',
              description:
                'Migrated the company from using legacy PayPal payment methods to a custom payment gateway system processing > $1M/year, increasing customer conversion and enabling accounting and sales integrations, as well as reduced processing costs.',
            },
            {
              title: 'EBook Platform Delivery.',
              description:
                'Worked with an agency to design, build and integrate an eBook store featuring more than 100k books.',
            },
            {
              title: 'Migrating to the Cloud.',
              description:
                'Migrated the entire platform from using a single legacy bare-metal server with FTP deployment to an auto-scaling AWS Cloud  with 80+ nodes to handle huge spikes in traffic during marketing pushes and live lesson times.',
            },
            {
              title: 'Changing Live Online Education.',
              description:
                'Designed and built a custom webinar platform with live streaming and chat functions which is now in full use by the company, bringing the entire in-house and tailor-made, and replacing the limited Citrix webinar platform.',
            },
            {
              title: 'Mastering SalesForce and the Sales Process.',
              description:
                'Customised the company’s SalesForce instances to handle the highly-specific sales flow of the company.',
            },

            {
              title: 'Showed the Company how to use Technology.',
              description:
                'Shifted the company from an educational company to a technology company with Agile processes to handle the organic, exponential growth that was crippling old technology and processes.',
            },
          ]}
        />
      </CompanyContainer>
      <CompanyContainer>
        <h3>Shield Diagnostics.</h3>
        <CompanySummary
          what={`A Silicon Valley based, Y-Combinator and A16Z backed genomic testing startup.`}
          when={<>2017&mdash;2018.</>}
          who={`Chief Information Officer.`}
          where={`Silicon Valley. London.`}
        />
        <h4>Responsibilities.</h4>
        <CompanyAchievementItems
          items={[
            {
              title: 'Management.',
              description:
                'Hired and managed a distributed team of two. A software engineer and a bioinformatician.',
            },
            {
              title: 'System Design, Development and Delivery.',
              description:
                'Responsible for the end-to-end design and delivery of all software products, excluding embedded systems.',
            },
            {
              title: 'Responsibility.',
              description: 'Reported directly to the CEO.',
            },
          ]}
        />
        <h4>Achievements.</h4>
        <CompanyAchievementItems
          items={[
            {
              title: 'Dairy Cattle Breeding Software.',
              description: `Designed and built a web app for dairy farmers that synchronises data from their local
                  herd management software to the cloud, aggregates genomic testing data and then provides guidance on
                  how to breed each cow to optimise the genetic strength for the next generation of cattle, based on the
                  breeding goals of the farmer.`,
            },
            {
              title: 'Real-time Measurement Tracking.',
              description: `Implemented a system using InfluxDB to allow engineers to record and see real-time
                  sensor data in the cloud for device R&D, as well as recording historic data for reference.`,
            },
            {
              title: 'Improved Code Quality.',
              description: `Responsible for all code quality within the company, as well as adherence to software best-practices.
                    Held weekly lessons and  Q&As with embedded engineers to implement company-wide use of version-control,
                    and general code quality as well as developing systems for embedded code deployment.`,
            },
            {
              title: 'Bubble Detection.',
              description: `Oversaw a computer-vision project to detect the presence and motion of bubbles within
                  an aperture.`,
            },
          ]}
        />
      </CompanyContainer>
    </WhoIAmSection>
  </Layout>
)

export default WhoIAmPage
