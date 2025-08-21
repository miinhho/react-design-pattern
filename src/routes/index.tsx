import { createBrowserRouter, RouterProvider } from 'react-router'
import App from '../App'
import ToggleButton from '../components/compound/ToggleButton'
import ContainerPresentation from '../components/container_presentation/TodoListContainer'
import CompositionHook from '../components/custom_hooks/TodoListContainer'
import Header from '../components/data_provider/Header'
import JohnDoe from '../components/hoc/JohnDoe'
import DefaultCounter from '../components/render_props/DefaultCounter'
import LoginForm from '../components/state_reducer/LoginForm'
import HomeWrapper from '../HomeWrapper'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/container-presentation',
    Component: HomeWrapper(<ContainerPresentation />),
  },
  {
    path: '/custom-hooks',
    Component: HomeWrapper(<CompositionHook />),
  },
  {
    path: '/state-reducer',
    Component: HomeWrapper(<LoginForm />),
  },
  {
    path: '/data-provider',
    Component: HomeWrapper(<Header />),
  },
  {
    path: '/hoc',
    Component: HomeWrapper(<JohnDoe />),
  },
  {
    path: '/compound',
    Component: HomeWrapper(<ToggleButton />),
  },
  {
    path: '/render-props',
    Component: HomeWrapper(<DefaultCounter />),
  },
])

const ProjectRouterProvider = () => {
  return <RouterProvider router={router} />
}

export default ProjectRouterProvider
