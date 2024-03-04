import styles from './page.module.css'
import { add } from '@turboapp/math/index'

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>Web {add(4, 2)}</h1>
    </main>
  )
}
