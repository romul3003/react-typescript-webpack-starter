import kitty from './assets/kitty.jpg'
import reactLogo from './assets/react-1.svg?url'
import ReactLogoComponent from './assets/react.svg'
import { ClickCounter } from './components/ClickCounter/ClickCounter'
import PostCssBlock from './components/PostCssBlock/PostCssBlock'
import './styles.css'

const App = () => {
  const language = 'typescript'

  return (
    <div>
      <h1>
        Hello world! -
        {process.env.NODE_ENV}
        {' '}
        {process.env.name}
        {' '}
        {language}
      </h1>
      <img
        src={kitty}
        alt=""
        width={300}
      />
      <img
        src={reactLogo}
        alt=""
        width={300}
      />
      <ReactLogoComponent
        width="100"
        height="100"
      />
      <ClickCounter />
      <PostCssBlock />
    </div>
  )
}

export default App
