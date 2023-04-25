import { BrowserRouter, BrowserRouterProps, Route, Routes } from "react-router-dom";
import Login from "../../pages/login"
import Prontuario from "../../pages/prontuario";
import AvaliacaoPsicologica from "../../pages/avaliacaopsicologica";
import Layout from "../../pages/layout";

function Router() {
    return(
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/" element={<Layout />}>
            <Route path="/avaliacao_psicologica" element={<AvaliacaoPsicologica/>}/>
            <Route path="/prontuario" element={<Prontuario/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      )
  }
  
  export default Router