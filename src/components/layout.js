import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="the-header">
        <div className='the-header-content'>
          <Link to='/' className='link-without-underline'>
            <h1 className='logo'>Rishabh Chaudhary</h1>
          </Link>
        </div>
      </header>
      <main className='main-body-content'>{children}</main>
      <footer className='the-footer'>
        Copyright © {new Date().getFullYear()}, <h5>Rishabh Chaudhary</h5>
      </footer>
    </div>
  )
}

export default Layout
