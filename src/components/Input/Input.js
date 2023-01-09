import React, { forwardRef } from 'react'

export const Input = forwardRef((props, ref) => {
  return (
    < input ref={ref} {...props} className="form-control mb-3" />
  )
})
