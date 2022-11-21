import { Component } from "react"
import moment from "moment";
import Header from "../../../components/header.js"
import Footer from "../../../components/footer.js"
import HeadMetadata from "../../../components/headMetadata.js";
import getBlogPostsByTag from "../../../api/getBlogPostsByTag.js";

export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        tag: 'javascript'
      }
    },{
      params: {
        tag: 'css'
      }
    }],
    fallback: false
  }
}
export const getStaticProps = async function({ params }) {
  const data = await getBlogPostsByTag(params.tag);
  return {
    props: {
        tag: params.tag,
        posts: data.posts
    }
  }
}
export default class extends Component {

  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title={`Blog posts tagged as "${this.props.tag}" | Coding Blog`}
          metaDescription={`All blog posts tagged as "${this.props.tag}".`}
        />
        <Header />
        <div className="blog-posts-container">
          <h1 onClick={() => console.log("Himanshu")}>Blog posts tagged as <u>{this.props.tag}</u></h1>
          <div className="blog-posts-list">
            {this.props.posts.length ? this.props.posts.map((post) => (
              <a href={`/blog/${post.urlTitle}`} key={post.title}>
                <div className="blog-posts-list-item">
                  <div className="blog-posts-thumbnail">
                    <img src={post.thumbnailImageUrl} />
                  </div>
                  <div className="blog-posts-list-item-title-and-date">
                    <h2>{post.title}</h2>
                    <div className="blog-posts-list-item-date">
                      <span>{moment.unix(post.dateTimestamp).format("MMMM Do, YYYY")}</span>
                    </div>
                  </div>
                </div>
              </a>
            )):
                <h4>Sorry, No Blog with this tag</h4>
            }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}