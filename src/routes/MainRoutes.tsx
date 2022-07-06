import { useRoutes } from "react-router-dom"
import { Home } from "../pages/Home";
import { ShowData } from "../pages/ShowData";
import { SignUp } from "../pages/SignUp";
import { NotFound } from "../pages/NotFound";

export const MainRoutes = () => {

    return useRoutes([
        { path: '/', element: <Home />},
        { path: '/SignUp', element: <SignUp />},
        { path: '/ShowData', element: <ShowData />},
        { path: '*', element: <NotFound />}
    ]);
}
