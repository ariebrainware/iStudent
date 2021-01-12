import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import ReadMore from '../components/linkedbutton'

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Layout>
        <Header headerText='Building iStudent' />
        <p>
          iStudent is a part of Final Semester campus project. This web service will do student data collection. 

          <ReadMore link='/' text='read more' />
      </p>

        <Header headerText='Is it worth to learn C on 2021?' />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </Layout>
    </div>
  )
}