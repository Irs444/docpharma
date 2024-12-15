import React from 'react'
import styles from "./header.module.css"

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className={`${styles.mainNav} row`}>
                <div className='col-md-2 col-lg-3'>

                </div>
                <div className='col-md-8 col-lg-6'>
                    <div className={styles.searchBar}>
                        <i className="bi bi-search"></i>
                        <input className={styles.input} placeholder='Search for'/>
                        {/* <p className={styles.arrow}>&gt;</p> */}
                        <button className={`${styles.button}`}>Search</button>
                    </div>
                </div>
                <div className='col-md-2 col-lg-3'>user info</div>
            </div>

        </div>
    )
}

export default Header