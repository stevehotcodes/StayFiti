import React from 'react'
import { useRouteError } from 'react-router-dom'
import '../Error/Error.scss'

const Error = () => {
    const error=useRouteError();
    console.error(error)
  return (
    <div id="error-page ">
        <h1>Oops</h1>
        <p>Sorry, an expected error has occured</p>
        <p>
            <i>{error.statusText || error.messsage}</i>
        </p>
    </div>
  )
}

export default Error