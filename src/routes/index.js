/**
 * Created by GennadySX on @2020
 */
import ProfilePage from "../pages/Profile";
import HomePage from "../pages/Home";
import CartPage from "../pages/Cart";


export const Routes = [
    {
        path: "/profile",
        component: ProfilePage
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