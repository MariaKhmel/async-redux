// import Home from "./Home.jsx";
import { useDispatch } from "react-redux";
import { getProductsThunk } from "./products/thunk";
import ProductsPage from "./products/ProductsPage";
import { fetchTasks1 } from "./redux/operations";
import { useEffect } from "react";

// import ToDosPage from "./ToDosPage";

function App() {
  const dispatch = useDispatch();
  // dispatch(getProductsThunk());

  useEffect(() => {
    dispatch(fetchTasks1());
  }, [dispatch]);

  return (
    <>
      {/* <Home /> */}
      {/* <ToDosPage /> */}
      {/* <ProductsPage /> */}
    </>
  );
}

export default App;
