import styles from 'styles/App.module.scss'

function App() {
  const flexStyle = { height: '100%', flexDirection: 'column' }
  return (
    <div className="container">
      Hi
      <div className="flex flexCenter" style={flexStyle}>
        <div className="bg-light text-dark">light blue bg, with dark text</div>
        <div className="bg-white text-dark">white background, text dark</div>
        <div className="bg-light text-white">light blue bg, text white</div>
        <div className="srOnly">Hello screen reader</div>
      </div>
    </div>
  )
}

export default App
