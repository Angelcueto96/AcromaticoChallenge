import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.title} />
        <article 
        >
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
                color: "#007acc"
              }}
            >
              {post.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginTop: "2%",
                marginBottom: rhythm(1),
                textAlign: "justify"
                
              }}
            >
              {post.content.content}
            </p>

            <small>
              <strong>Escrito en: </strong> {post.date.split("T")[0]}{" "}
            </small>
          </header>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {console.log(previous)}
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      content {
        content
      }
      date
    }
  }
`
