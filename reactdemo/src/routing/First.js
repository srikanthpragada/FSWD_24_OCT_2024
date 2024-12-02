import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function First() {
  let navigate = useNavigate();

  function gotoSecond() {
    navigate('/second')
  }

  function gotoError() {
    navigate('/error')
  }

  return (
    <>
      <h1>First Component</h1>
      <button onClick={gotoSecond}>Second</button>
      &nbsp;
      <button onClick={gotoError}>Error</button>
    </>
  )
}
