import { Component } from "react"
import moment from "moment";
import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetadata from "../../components/headMetadata.js"
import getAllBlogPosts from "../../api/getAllBlogPosts.js";
export async function getStaticProps() {
  const data =  await getAllBlogPosts();
  return {
    props: {
      posts: data.posts
    }
  }
}
export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
        title="Blog Posts | Coding Blog"
        metaDescription="List of all blog posts published on the Himanshu Yadav coding blog."
      />
        <Header />
        <div className="blog-posts-container">
          <h1>Blog posts</h1>
          <div className="blog-posts-list">
            {this.props.posts.map((post, index) => {
              return (
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
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}