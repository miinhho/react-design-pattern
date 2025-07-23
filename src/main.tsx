import { createRoot } from 'react-dom/client'
import './index.css'
import ProjectRouterProvider from './routes'

createRoot(document.getElementById('root')!).render(
  <ProjectRouterProvider />
)
