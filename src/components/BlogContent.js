import React from "react";

function BlogContent(props) {
  console.log(props)

  if (!props.isPublished) {
    return null;
  } else {
  return(
    <div>
      <h1 id="blog-content">{props.articleText}</h1>
      <p>{props.minutesToRead} minute(s) to read</p>
    </div>
  )
}
}

export default BlogContent;
