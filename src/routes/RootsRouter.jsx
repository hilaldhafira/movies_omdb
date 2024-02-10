import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import { ROUTES } from "../constant/routesConstant";
import DetailMovie from "../pages/DetailMovie/DetailMovie";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ROUTES.DETAIL_MOVIE,
    element: <DetailMovie />,
  },
]);

export default RootRouter;
