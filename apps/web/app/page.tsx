import styles from './page.module.css'
import { add, subtract } from '@turboapp/math/index'

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h2>Web {add(4, 2)}</h2>
      <h2>Web {subtract(4, 2)}</h2>
    </main>
  )
}
