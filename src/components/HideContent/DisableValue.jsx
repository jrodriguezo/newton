import React from 'react'
import { NUMBER_PLACEHOLDER_USER_NO_LOGGED } from '../../constants/placeholders'
import Lock from '../../icons/Lock'

function DisableValue({children, isVisible, isLocked = false}) {

  if(isVisible) return children
  if(isLocked) return <Lock className="h-6 w-6 mb-2 mx-auto" />

  return (
    <div className='relative'>
        <div className='blur-[1px]'>
            {NUMBER_PLACEHOLDER_USER_NO_LOGGED}
        </div>
    </div>
  )
}

export default DisableValue