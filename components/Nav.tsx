import React, { useState, useContext } from 'react'
import Link from 'next/link'
import styles from '../styling/components/nav.module.scss'

interface Props {}

export const NavBar: React.FC<Props> = () => {
  const [condition, setCondition] = useState(true)
  return (
    <div className={styles.nav}>
      <div className={styles.toplinkcontainer}>
        <Link href='/'>
          <a className={styles.toplink}>Link 1</a>
        </Link>
        <Link href='/'>
          <a className={styles.toplink}>Link 2</a>
        </Link>
        <Link href='/'>
          <a className={styles.toplink}>Link 3</a>
        </Link>
      </div>

      <div
        onClick={() => setCondition(!condition)}
        className={condition ? styles.burgerclosed : styles.burgeropen}
      >
        <div className={styles.bar1} />
        <div className={styles.bar2} />
        <div className={styles.bar3} />
      </div>

      <div className={condition ? styles.menuclosed : styles.menuopen}>
        <ul className={styles.popoutlinkcontainer}>
          <li className={styles.popoutlinkcontainer}></li>
          <li className={styles.popoutlink}>
            <Link href='/'>
              <a className={styles.popoutlink}> Home</a>
            </Link>
          </li>
          <li className={styles.popoutlink}>
            <Link href='/'>
              <a className={styles.popoutlink}>Link 4</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
