// import styles from 'styles/App.module.scss'
import { createBox } from 'App.utils'

export default function App() {
  const boxColors = [
    {
      hex: '#0B0D17',
      rgb: '11, 13, 23',
      hsl: '230&#176;, 35%, 7%',
      bg: 'bg-dark',
      text: 'text-white',
    },
    {
      hex: '#D0D6F9',
      rgb: '208, 214, 249',
      hsl: '231&#176;, 77%, 90%',
      bg: 'bg-accent',
      text: 'text-dark',
    },
    {
      hex: '#FFFFFF',
      rgb: '255, 255, 255',
      hsl: '0&#176;, 0%, 100%',
      bg: 'bg-white',
      text: 'text-dark',
    },
  ]

  return (
    <div className="container">
      <h1>Design System</h1>
      <section id="colors">
        <h2>
          <span>01</span> colors
        </h2>

        <div className={`flex flexCenter`}>
          {boxColors.map((c) => createBox(c.hex, c.rgb, c.hsl, c.bg, c.text))}
        </div>
      </section>
    </div>
  )
}
