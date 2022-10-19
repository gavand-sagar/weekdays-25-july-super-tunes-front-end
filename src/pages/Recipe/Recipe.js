import React from 'react'
import ToggleButton from '../../shared-components/ToggleButton'
import { useRouteProtector } from '../../use-route-protector'

export default function Recipe() {
  useRouteProtector();
  return (
    <div>
      <ToggleButton></ToggleButton>
    </div>
  )
}
