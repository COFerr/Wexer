import { BrowserRouter, BrowserRouterProps, Route, Routes } from "react-router-dom";
import Login from "../../pages/login"
import Prontuario from "../../pages/prontuario";
import AvaliacaoPsicologica from "../../pages/avaliacaopsicologica";
import Layout from "../../pages/layout";
import Register from "../../pages/register"

function Router() {
    return(
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user" element={<Layout />}>
            <Route path="/user/avaliacao_psicologica" element={<AvaliacaoPsicologica/>}/>
            <Route path="/user/prontuario" element={<Prontuario/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      )
  }
  
  export default Router