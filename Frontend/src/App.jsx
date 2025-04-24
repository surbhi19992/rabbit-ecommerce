
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import UserLayout from './components/Layout/UserLayout';
// // import Home from './pages/Home';
// // import Login from './pages/Login';
// // import Register from './pages/Register';
// // import Profile from './pages/Profile';
// // import CollectionPage from './pages/CollectionPage';
// // import ProductDetails from './components/Products/ProductDetails';
// // import Checkout from './components/Cart/Checkout';
// // import { PayPalScriptProvider } from '@paypal/react-paypal-js';
// // import OrderConfirmationPage from './pages/OrderConfirmationPage';
// // import OrderDetailsPage from './pages/OrderDetailsPage';
// // import MyOrdersPage from './pages/MyOrdersPage';

// // function App() {
// //   return (
// //     <PayPalScriptProvider options={{ "client-id": "AWs03_hs_7fMKez2VliVjv7koNkwlYd-7jNYbuOM-QZx9LUMmgk1lzmy4EbgD1Pzk9CkxEi5BJtKgfFp" }}>
// //       <Router>
// //         <Routes>
// //           {/* All User Pages wrapped inside layout */}
// //           <Route path="/" element={<UserLayout />}>
// //             <Route index element={<Home />} />
// //             <Route path="login" element={<Login />} />
// //             <Route path="register" element={<Register />} />
// //             <Route path="profile" element={<Profile />} />
// //             <Route path="collections/:collection" element={<CollectionPage />} />
// //             <Route path="product/:id" element={<ProductDetails />} />
// //             <Route path="checkout" element={<Checkout />} />
// //             <Route path="order-confirmation" element={<OrderConfirmationPage />} />
// //             <Route path="order/:id" element={<OrderDetailsPage />} />

// //             {/* 👇 Extra routes for direct testing */}
// //             <Route path="orderDetailsPage" element={<OrderDetailsPage />} />
// //             <Route path="orderConfirmationPage" element={<OrderConfirmationPage />} />
// //             <Route path ="my-orders" element ={<MyOrdersPage />} />
// //           </Route>
// //         </Routes>
// //       </Router>
// //     </PayPalScriptProvider>
// //   );
// // }

// // export default App;




// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserLayout from './components/Layout/UserLayout';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import CollectionPage from './pages/CollectionPage';
// import ProductDetails from './components/Products/ProductDetails';
// import Checkout from './components/Cart/Checkout';
// import { PayPalScriptProvider } from '@paypal/react-paypal-js';
// import OrderConfirmationPage from './pages/OrderConfirmationPage';
// import OrderDetailsPage from './pages/OrderDetailsPage';
// import MyOrdersPage from './pages/MyOrdersPage';

// function App() {
//   return (
//     <PayPalScriptProvider options={{ "client-id": "AWs03_hs_7fMKez2VliVjv7koNkwlYd-7jNYbuOM-QZx9LUMmgk1lzmy4EbgD1Pzk9CkxEi5BJtKgfFp" }}>
//       <Router>
//         <Routes>
//           {/* All User Pages wrapped inside layout */}
//           <Route path="/" element={<UserLayout />}>
//             <Route index element={<Home />} />
//             <Route path="login" element={<Login />} />
//             <Route path="register" element={<Register />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="collections/:collection" element={<CollectionPage />} />
//             <Route path="product/:id" element={<ProductDetails />} />
//             <Route path="checkout" element={<Checkout />} />
//             <Route path="order-confirmation" element={<OrderConfirmationPage />} />
//             <Route path="order/:id" element={<OrderDetailsPage />} />
//             <Route path="orderDetailsPage" element={<OrderDetailsPage />} />
//             <Route path="orderConfirmationPage" element={<OrderConfirmationPage />} />
//             <Route path="my-orders" element={<MyOrdersPage />} />
//             <Route path="thank-you" element={<OrderConfirmationPage />} /> {/* ✅ Added this route */}
//           </Route>
//         </Routes>
//       </Router>
//     </PayPalScriptProvider>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/Products/ProductDetails';
import Checkout from './components/Cart/Checkout';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminLayout from './components/Admin/AdminLayout';
import AdminHomePage from './pages/AdminHomePage';
import UserManagement from './components/Admin/UserManagement';
import ProductManagement from './components/Admin/ProductManagement';
import EditProductPage from './components/Admin/EditProductPage';        
import OrderManagement from './components/Admin/OrderManagement';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';  // Make sure to import CartProvider

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "AWs03_hs_7fMKez2VliVjv7koNkwlYd-7jNYbuOM-QZx9LUMmgk1lzmy4EbgD1Pzk9CkxEi5BJtKgfFp" }}>
      <CartProvider> {/* Wrap the app in CartProvider to give access to cart data */}
        <Router>
          <Toaster position="top-right" richColors />

          <Routes>
            <Route path="/" element={<UserLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
              <Route path="collections/:collection" element={<CollectionPage />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="order-confirmation" element={<OrderConfirmationPage />} />
              <Route path="order/:id" element={<OrderDetailsPage />} />
              <Route path="my-orders" element={<MyOrdersPage />} />
              <Route path="thank-you" element={<OrderConfirmationPage />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminHomePage />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="Products" element={<ProductManagement />} />
              <Route path="Products/:id/edit" element={<EditProductPage />} />
              <Route path="orders" element={<OrderManagement />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider> {/* Close CartProvider */}
    </PayPalScriptProvider>
  );
}

export default App;
