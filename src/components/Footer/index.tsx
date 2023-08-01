import React, { MouseEvent } from 'react'
import { Button } from '../Button/index'
import styles from './Footer.module.scss'
import { Hours } from './Hours/index'
import { Menu } from './Menu/index'

export const Footer = () => {
  const [active, setActive] = React.useState(false)
  function handleButton({currentTarget}: MouseEvent){
      setActive(!active)
      currentTarget.toggleAttribute('disabled')
    }
  return (
    <footer className={styles.footer}>
        <nav className={styles.nav}>
            <section className={styles.apps}>
              <div className={styles.start}>
                {active && <Menu/>}
                {/* {width ? active && <Menu/> : <Menu mobile />} */}
                <Button text='Start' icon='X' onClick={handleButton}/>
              </div>
              {/* {width && 
                <div className={styles.tabs} id='tabs'>
                  {tabs && <>{keys.map(element => element)}</>}
                </div>} */}
            </section>
            <section className={styles.hours}>
              <Hours />
            </section>
        </nav>
        {/* {modal && <Modal />} */}
        
    </footer>
  )
}
