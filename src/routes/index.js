/**
 * Created by GennadySX on @2020
 */
import AuthPage from "../pages/Auth";
import HomePage from "../pages/Home";
import CartPage from "../pages/Cart";


export const Routes = [
    {
        path: "/auth",
        component: AuthPage
    },
    {
        path: "/admin",
        component: CartPage
    },
    {
        path: "/",
        component: HomePage
    },
]