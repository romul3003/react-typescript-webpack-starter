import { useState } from 'react'
import styles from './ClickCounter.scss'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <button
        type="button"
        className={styles.button}
        onClick={() => setCount(c => c + 1)}
      >
        Count -
        {count}
      </button>
    </div>
  )
}
