import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetaData from "../components/headMetadata"

export async function getStaticProps({req, res, err}) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return {
    props: {
      statusCode: statusCode
    }
  }
}
export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetaData
          title="Error | Coding Blog"
        />
        <Header />
        <div className="error-container">
          {
            this.props.statusCode === 404 ?
            <>
              <h1>404 Page Not Found</h1>
              <p>We can't seem to find the page you're looking for.</p>
            </> :
            <>
              <h1>An Error Occurred</h1>
              <p>An error occurred when trying to fulfill your request. Please try reloading the page or going back to the homepage.</p>
            </>
          }
        </div>
        <Footer />
      </div>
    )
  }
}