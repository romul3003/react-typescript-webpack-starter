import './styles.css'
import kitty from './kitty.jpg'
import reactLogo from './react-1.svg'

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <img src={kitty} alt="" width={300}/>
      <img src={reactLogo} alt="" width={300}/>
    </div>
  )
}

export default App
