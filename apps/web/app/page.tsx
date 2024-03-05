import styles from './page.module.css'
import { add, subtract, divide } from '@turboapp/math/index'

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>Web</h1>
      <h2>Add {add(4, 2)}</h2>
      <h2>Subtract {subtract(4, 2)}</h2>
      <h2>Divide {divide(4, 2)}</h2>
    </main>
  )
}
