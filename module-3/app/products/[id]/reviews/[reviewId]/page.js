import React from 'react'

const page = ({params}) => {
    const {id, reviewId} = params
  return (
    <div>page {id} {reviewId}</div>
  )
}

export default page