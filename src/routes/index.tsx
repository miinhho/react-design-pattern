import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import ContainerPresentation from "../components/container_presentation/TodoListContainer";
import CompositionHook from "../components/custom_hooks/TodoListContainer";
import Header from "../components/data_provider/Header";
import LoginForm from "../components/state_reducer/LoginForm";
import HomeWrapper from "../HomeWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/container-presentation",
    Component: HomeWrapper(<ContainerPresentation />),
  },
  {
    path: "/custom-hooks",
    Component: HomeWrapper(<CompositionHook />),
  },
  {
    path: "/state-reducer",
    Component: HomeWrapper(<LoginForm />),
  },
  {
    path: "/data-provider",
    Component: HomeWrapper(<Header />),
  }
]);

const ProjectRouterProvider = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default ProjectRouterProvider;