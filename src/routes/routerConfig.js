import Homepage from "../pages/home/home";
import CartPage from "../pages/cart/cart";
import NotFoundPage from "../pages/notFound/notFound";
const routeObj = [
  {
    path: "/cart",
    component: CartPage
  },
  {
    path: "/",
    component: Homepage,
    exact: true
  },
  {
    component: NotFoundPage
  }
];

export default routeObj;
