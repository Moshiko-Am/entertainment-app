import { generateBEMClassName } from "bem-classnames-generator/dist";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchComponent from "./components/SearchComponent/SearchComponent.tsx";
import useAppStore from "./store/store.ts";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const { fetchItems } = useAppStore();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchItems();
    setIsLoading(false);
  }, [fetchItems]);

  useEffect(() => {
    if (location.pathname === "/") navigate("/home");
  }, [location.pathname, navigate]);

  return (
    <div className={generateBEMClassName({ block: "layout" })}>
      <Navbar />
      <SearchComponent />
      {isLoading ? (
        <div style={{ fontSize: 100 }}>Loading...</div>
      ) : (
        <main
          className={generateBEMClassName({
            block: "layout",
            element: "content",
          })}
        >
          <Outlet />
        </main>
      )}
    </div>
  );
}

export default App;
