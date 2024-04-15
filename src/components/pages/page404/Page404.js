import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const [data1, setData1] = useState('')
  const checkType = JSON.parse(localStorage.getItem('checkType'))
  const navigate = useNavigate()

  useEffect(() => {
    if (checkType) {
      
      setData1(JSON.parse(checkType))
    }
  }, [checkType])


  useEffect(() => {
    
  }, [data1])

  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center svg-img">
        <div>
          <h1>404 Page</h1>
        </div>
      </div>
    </>
  )
}

export default Page404
