import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Counter from './Counter.jsx'
// import ToggleButton from './ToggleButton'
// import TextInput from './TextInput'
// import FetchPosts from './FetchPosts'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <ToggleButton /> */}
    {/* <TextInput /> */}
    {/* <FetchPosts /> */}
    <App />
  </StrictMode>,
)
