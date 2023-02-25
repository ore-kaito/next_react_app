import styled from 'styled-components'
import styles from '../styles/Home.module.css'

export function SearchBox() {
    return (
        <div className={styles.search_box}>
            <input className={styles.input} type="text" />
            <button className={styles.para}>検索</button>
        </div>
    )
}

export default SearchBox