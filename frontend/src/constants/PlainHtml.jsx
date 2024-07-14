import React from 'react'

const PlainHtml = ({contentBody}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: contentBody }} />
  )
}

export default PlainHtml