import React from 'react'
import styles from "./header.module.css"

const Header = () => {
    return (
        <div className='container-fluid shadow'>
            <div className={`${styles.mainNav} row border-bottom border-light-subtle`}>
                <div className='col-sm-12 col-md-2 col-lg-3'>

                </div>
                <div className='col-sm-12 col-md-8 col-lg-6'>
                    <div className={styles.searchBar}>
                        <i className="bi bi-search"></i>
                        <input className={styles.input} placeholder='Search for' />
                        {/* <p className={styles.arrow}>&gt;</p> */}
                        <button className={`${styles.button}`}>Search</button>
                    </div>
                </div>
                <div className=' col-sm-12 col-md-2 col-lg-3 d-flex align-items-center justify-content-evenly '>
                <i className="bi bi-cart3 position-relative fs-4">
                        <span className={styles.badge}>10</span>
                    </i>
                    <button className={styles.loginBtn}>
                        <span>Login</span>
                        <i className="bi bi-person-circle"></i>
                    </button>
                  
                </div>
            </div>
           <div className={`${styles.navbar} row border-bottom border-light-subtle`}>
            <div className='col-md-12 col-sm-12 d-flex justify-content-center align-items-between '>
                <ul className={styles.menu}>
                    <li>Medicine</li>
                    <li>Healthcare</li>
                    <li>AboutUs</li>
                    <li>ContactUs</li>
                </ul>
            </div>
           </div>
        </div>
    )
}

export default Header