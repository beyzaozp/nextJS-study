import React from 'react'

import FeaturedMovie from '@/components/featured-movie'

function MovieContainer( { movie }) {
  return (
    <FeaturedMovie isCompact={false} movie={movie}/>
  )
}

export default MovieContainer