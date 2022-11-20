import { Component } from "react"

import Header from "../../../components/header.js"
import Footer from "../../../components/footer.js"
import HeadMetadata from "../../../components/headMetadata.js";

export default class extends Component {

  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title={`Blog posts tagged as "${this.props.tag}" | Coding Blog`}
          metaDescription={`All blog posts tagged as "${this.props.tag}".`}
        />
        <Header />
        <Footer />
      </div>
    )
  }
}