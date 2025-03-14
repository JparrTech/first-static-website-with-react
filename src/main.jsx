
import { createRoot } from 'react-dom/client'
import './index.css'

function Content() {
  return (
    <div>
      <img src="src/assets/react.svg" width={70}/>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by John Walke</li>
        <li>Has over 100k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps</li>
      </ul>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <Content />

)
