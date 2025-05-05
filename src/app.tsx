import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import Auth from './ui/landing-page/component/auth';
import LandingPage from './ui/landing-page/landing-page';
import Dashboard from './ui/dashboard/dashboard';
import OverView from './ui/dashboard/overview';
import SignUp from './ui/sign-up/sign-up';
import RootError from './ui/error-pages/root-error';
import MainTransaction from './ui/dashboard/transaction/main-transaction';
import ManagerEmployeeProtectedRoute from "./ui/auth/manager-employee-protected-route";
import SignIn from "./ui/sign-in/sign-in";
import Products from "./ui/dashboard/products/products";
import ProductCategories from "./ui/dashboard/product-categories/product-categories";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>,
    },
    {
        path: '/sign-up',
        element: <SignUp/>,
    },
    {
        path: '/sign-in',
        element: <SignIn/>
    },
    {
        path: '/dashboard',
        element: (
            <ManagerEmployeeProtectedRoute>
                <Dashboard/>
            </ManagerEmployeeProtectedRoute>
        ),
        children: [
            {
                path: 'overview',
                index: true,
                element: <OverView/>
            },
            {
                path: 'transaction',
                element: <MainTransaction/>,
            },
            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'product-categories',
                element: <ProductCategories/>
            }
        ],
    },
    {
        path: '*',
        element: <RootError/>,
    },
]);

export default function App() {
    return (
        <RouterProvider router={router}/>
    );
}
