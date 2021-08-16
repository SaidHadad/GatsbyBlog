import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      raw
    }
  }
}
`

const Blog = (props) => {

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title}/>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(props.data.contentfulBlogPost.body)}
    </Layout>
  )
}

export default Blog