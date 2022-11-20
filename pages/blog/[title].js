import { Component } from "react"
import Prism from "prismjs"
import moment from "moment";
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetaData from "../../components/headMetadata"
import getBlogPostByTitle from "../../api/getBlogPostByTitle.js"
import post from "../../../rest-api/models/post.js";
export const getServerSideProps = async(r) => {
  const res = await getBlogPostByTitle(r.query.title);
  return {
    props: {
      post: res.post
    }
  }
}
export default class extends Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetaData
          title={this.props.post ? this.props.post.seoTitleTag : "Blog Post | Coding Blog"}
          metaDescription={this.props.post && this.props.post.seoMetaDescription}
        />
        <Header />
        {this.props.post && (
          <div className="blog-post-container">
            <div className="blog-post-top-section">
              <h1>{this.props.post.title}</h1>
              <div className="blog-post-top-meta">
                <span>{moment.unix(post.dateTimestamp).format("MMMM Do, YYYY")}</span>
                {this.props.post.tags.map((tag) => (
                  <a className="blog-post-top-tag-btn" href={`/blog/tags/${tag}`} key={tag}>
                    <span>{tag}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="blog-post-body-content" dangerouslySetInnerHTML={{__html: this.props.post.markdownContent}}>
            </div>
          </div>
        )}
        <Footer />
      </div>
    )
  }
}