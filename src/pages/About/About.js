import React from 'react'
import Counter from '../../Counter'
import { useRouteProtector } from '../../use-route-protector'

export default function About() {

  useRouteProtector();

  return (
    <div>
      <Counter />
    </div>
  )
}
