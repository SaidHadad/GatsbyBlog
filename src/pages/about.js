import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const aboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
    <h1>About me</h1>
      <p>Im a developer with a passion for design!! follow my blog for more information
      </p>
      <p>Personal <a href="https://danischwarz.com" target="_blank" rel="noreferrer">Portfolio</a></p>
    </Layout>
  )
}

export default aboutPage