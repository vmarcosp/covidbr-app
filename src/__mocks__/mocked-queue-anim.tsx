import React from 'react'

const MockedQueueAnim = ({ children, ...props }: { children: React.ReactNode}) => (
  <div {...props}>
    {children}
  </div>
)

export default MockedQueueAnim
