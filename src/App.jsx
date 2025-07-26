import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/products/Product";
import GlobalStyles from "./styles/GlobalStyles";
import Poke from "./pages/poke_api/Poke";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 0
    }
  }
})
function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={
            <AppLayout/>
          }>
            <Route index element={<Navigate to="index" />} />
            {/* index page for products*/}
            <Route path="index" element={<Product/>}/>
            {/* Poke api page */}
            <Route path="poke-api" element={<Poke/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
