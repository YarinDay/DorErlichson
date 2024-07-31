import { About } from "./pages/about";
import { HomePage } from "./pages/home-page";
import { Prices } from "./pages/prices";
import { Projects } from "./pages/projects";
import { Calculator } from "./pages/calculator";

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/projects",
    component: <Projects />,
  },
  {
    path: "/prices",
    component: <Prices />,
  },
  {
    path: "/calculate",
    component: <Calculator />,
  },
];

export default routes;
