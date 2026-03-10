
import Login from "./auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import HereSection from "./components/HereSection";
import MainLayout from "./layout/MainLayout";
import Profile from "./components/Profile";
import SearchPage from "./components/SearchPage";
import Cart from "./components/Cart";
import Restaurant from "./admin/Restaurant";
import AddMenu from "./admin/AddMenu";
import Orders from "./admin/Orders";
import Success from "./components/Success";
import { useUserStore } from "./store/useUserStore";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./components/Loading";
import { useThemeStore } from "./store/useThemeStore";
import RestaurantDetail from "./components/RestaurantDetail";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

const AuthenticatedUser = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if(isAuthenticated && user?.isVerified){
    return <Navigate to="/" replace/>
  }
  return children;
};

const AdminRoute = ({children}:{children:React.ReactNode}) => {
  const {user, isAuthenticated} = useUserStore();
  if(!isAuthenticated){
    return <Navigate to="/login" replace/>
  }
  if(!user?.admin){
    return <Navigate to="/" replace/>
  }

  return children;
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <MainLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/",
        element: <HereSection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search/:text",
        element: <SearchPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/status",
        element: <Success />,
      },
      // admin services start from here
      {
        path: "/admin/restaurant",
        element:<AdminRoute><Restaurant /></AdminRoute>,
      },
      {
        path: "/admin/menu",
        element:<AdminRoute><AddMenu /></AdminRoute>,
      },
      {
        path: "/admin/orders",
        element:<AdminRoute><Orders /></AdminRoute>,
      },
    ],
  },
  {
    path: "/login",
    element:<AuthenticatedUser><Login /></AuthenticatedUser>,
  },
  {
    path: "/signup",
    element:<AuthenticatedUser><Signup /></AuthenticatedUser> ,
  },
  {
    path: "/forgot-password",
    element: <AuthenticatedUser><ForgotPassword /></AuthenticatedUser>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
]);

function App() {
  const initializeTheme = useThemeStore((state:any) => state.initializeTheme);
  const {checkAuthentication, isCheckingAuth} = useUserStore();
  // checking auth every time when page is loaded
  useEffect(()=>{
    checkAuthentication();
    initializeTheme();
  },[checkAuthentication])

  if(isCheckingAuth) return <Loading/>
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;

// import './App.css'
// import Login from './auth/Login'
// import {createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
// import Signup from './auth/Signup'
// import ForgotPassword from './auth/ForgotPassword'
// import ResetPassword from './auth/ResetPassword'
// import VerifyEmail from './auth/VerifyEmail'
// import HeroSection from './components/ui/HeroSection'
// import MainLayout from './layout/MainLayout'

// import Profile2 from './components/ui/Profile2'
// import SearchPage from './components/ui/SearchPage'
// import RestaurantDetail from './components/RestaurantDetails'
// import Cart from './components/Cart'
// import Restaurant from './admin/Restaurant'
// import AddMenu from './admin/AddMenu'
// import Orders from './admin/Orders'
// import Success from './components/Success'
// import { useUserStore } from './store/useUserStore'
// import { useEffect } from 'react'
// import Loading from './components/Loading'

// //creating protection for routes
// const ProtectedRoutes = ({children} :{children:React.ReactNode}) =>{
//   const {isAuthenticated , user} = useUserStore() ;

//   if(!isAuthenticated){
//     return <Navigate to="/login" replace/>
//   }

//   if(!user?.isVerified){
//     return <Navigate to="/verify-email" replace/>
//   }

//   return children ;
// }

// const AuthenticatedUser  = ({children} :{children:React.ReactNode}) =>{
//   const {user , isAuthenticated} = useUserStore() ;

//   if(isAuthenticated && user?.isVerified){
//     return <Navigate to = "/" replace/>
//   }
//   return children ;
// }

// const AdminRoute = ({children}:{children:React.ReactNode}) =>{

//   const {user , isAuthenticated} = useUserStore() ;

//   if(!isAuthenticated){
//     return <Navigate to= "/login" replace/>
//   }

//   if(!user?.admin){
//     return <Navigate to= "/" replace/>
//   }
//   return children ;
// }



// const appRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<ProtectedRoutes><MainLayout/></ProtectedRoutes>,
//     children:[
//       {
//         path:"/",
//         element:<HeroSection/>
//       },
//       {
//         path:"/profile",
//         element:<Profile2/>
//       },
//       {
//         path:"/search-page",
//         element:<SearchPage/>
//       },
//       {
//         path: "/restaurant-Details",
//         element: <RestaurantDetail />
//       }
//       ,
//       {
//         path: "/cart",
//         element: <Cart />
//       },
      
//       {
//         path:"/order/status",
//         element:<Success/>
//       },
//       //admin part start here
//     {
//         path: "/admin/restaurant",
//         element:<AdminRoute><Restaurant /></AdminRoute>,
//       },
//       {
//         path: "/admin/menu",
//         element:<AdminRoute><AddMenu /></AdminRoute>,
//       },
//       {
//         path: "/admin/orders",
//         element:<AdminRoute><Orders /></AdminRoute>,
//       },
//     ]  
//   },
//   {
//     path: "/login",
//     element:<AuthenticatedUser><Login /></AuthenticatedUser>,
//   },
//   {
//     path: "/signup",
//     element:<AuthenticatedUser><Signup /></AuthenticatedUser> ,
//   },
//   {
//     path: "/forgot-password",
//     element: <AuthenticatedUser><ForgotPassword /></AuthenticatedUser>,
//   },
//   {
//     path:"/reset-password",
//     element:<ResetPassword/>
//   },
//   {
//     path:"/verify-email",
//     element:<VerifyEmail/>
//   }
// ])
// function App() {

//   const {checkAuthentication , isCheckingAuth} = useUserStore() ;
  
//   //check auth everytime when page is loaded
//     useEffect(() =>{
//       checkAuthentication() ;
//     },[checkAuthentication]) 

//     if(isCheckingAuth) return <Loading/> ;
//     return (
//       <main>
//         <RouterProvider router={appRouter}> 
        
//         </RouterProvider>
//       </main>
//     )
  
// }

// export default App
