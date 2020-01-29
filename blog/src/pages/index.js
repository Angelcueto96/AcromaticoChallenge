import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div>
          <h3
            style={{
              color: "rgba(0,122,204,0.7)",
              //color: "gray",
              textAlign: "justify"
            }}
          >
            {
              "Un pequeño blog en dónde se muestran mis publicaciones guardadas en Contenful."
            }
          </h3>
        </div>
        <Bio />

        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <article
              key={node.slug}
              style={{
                boxShadow: " 1px 2px 13px -3px rgba(0,0,0,0.68)",
                padding: "5%  2% 1% 2%",
                marginBottom: "5%",
                borderRadius: "2%",
              }}
            >
              <header>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                </h3>
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  {node.content.content}
                </p>
                <strong>Escrito en: </strong> {node.date.split("T")[0]}{" "}
              </header>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          slug
          title
          content {
            content
          }
          date
        }
      }
    }
  }
`
