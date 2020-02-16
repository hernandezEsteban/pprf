import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { checkPropTypes } from "prop-types"

const IndexPage = ({ PlusTI }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ 
       
      }}>
      <Image />
    </div>

    <h1>Hi, I'm Esteban </h1>
    <p>I work for  
    <a   target="_blank"
         href="https://www.plus-ti.com/?lang=en"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        > {PlusTI} 
    </a> as a backend developer for the last { new Date().getFullYear() - 2015 } years.
    </p>
    
  </Layout>
)
IndexPage.prototype = {
  PlusTI: checkPropTypes.string
}
IndexPage.defaultProps = {
  PlusTI: `PlusTI`
}
export default IndexPage
