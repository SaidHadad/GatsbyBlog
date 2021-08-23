import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const contactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>Link to my GitHub <a href="https://github.com/danicota" target="_blank" rel="noreferrer">GitHub</a></p>
    </Layout>
  )
}

export default contactPage