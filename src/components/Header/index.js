import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    className='header-section'
    style={{
      background: 'none',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        textAlign: 'right',
        boxSizing: 'border-box',
      }}
    >
      <Link className='not-btn' to="/work/">Work</Link>
      <a className='not-btn'href='https://github.com/nickzuber'>GitHub</a>
      <Link className='btn'to="/">Blog</Link>
    </div>
  </div>
)

export default Header
