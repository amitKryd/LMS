import React, { Suspense } from 'react'
// import { CContainer, CSpinner } from '@coreui/react'
import Routing from '../Routing'

const AppContent = () => {

  return (

    // <CContainer lg>
      <Suspense fallback={<h3 className='text-center'>...loading</h3>}>
        <Routing/>
      </Suspense>
    // </CContainer>
  )
}

export default React.memo(AppContent)
