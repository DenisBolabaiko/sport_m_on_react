import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={600}
    viewBox="0 0 450 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="51" y="374" rx="0" ry="0" width="274" height="22" /> 
    <rect x="53" y="417" rx="0" ry="0" width="205" height="21" /> 
    <rect x="58" y="501" rx="0" ry="0" width="376" height="77" /> 
    <rect x="54" y="462" rx="0" ry="0" width="282" height="19" /> 
    <rect x="47" y="13" rx="0" ry="0" width="391" height="370" />
  </ContentLoader>
)

export default MyLoader;
