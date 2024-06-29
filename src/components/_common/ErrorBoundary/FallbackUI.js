import React from 'react';

export default function FallbackUI() {
  return (
    <>
      <div className="container error-boundary">
        <div className="col-12">
          <h1 className="section-title text-center">Something went wrong</h1>
          <p className="error-boundary-text">
            An error occurred. Please reload page and try again
          </p>
          <div className="list-next d-flex justify-content-center">
            <button className="theme-btn" type="button" onClick={() => document.location.reload(true)}>Reload</button>
          </div>
        </div>
      </div>
    </>
  )
}
