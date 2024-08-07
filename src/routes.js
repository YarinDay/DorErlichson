import { About } from "./pages/about";
import TDEECalculator from "./pages/calculator";
import { HomePage } from "./pages/home-page";
import { Prices } from "./pages/prices";
import { Projects } from "./pages/projects";

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
    path: "/calculator",
    component: <TDEECalculator />,
  },
];

export default routes;
