import React from 'react'
import { notFound } from 'next/navigation'

function BlogPage({searchParams}) {
  if (searchParams.test==="true") {
    notFound()
  }
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage