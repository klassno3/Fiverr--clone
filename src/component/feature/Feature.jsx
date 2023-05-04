import React from 'react'
import "./Feature.scss"
const Feature = () => {
  return (
    <div className="feature">
      <div className="container">
        <div className="left">
          <h1>Find the perfect <i>freelance</i> services for you business</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="Picture of  Person" />
              <input type="text" placeholder='Try building mobile App' />
            </div>
            <button className='btn-primary'>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button className="btn-secondary">Web Design</button>
            <button className="btn-secondary">Wordpress</button>
            <button className="btn-secondary">Login Design</button>
            <button className="btn-secondary">AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default Feature
