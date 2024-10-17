import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from "react-router-dom";
import LoginProfessor from "../pages/login-professor";
import LoginInspetor from "../pages/login-inspetor";
import LoginAluno from "../pages/login-aluno";
import Root from "../pages/root";

const routes = [
  {
    path: "/",
    element: <Root />
  },
  {
    path: "login/:login-professorId",
    element: <LoginProfessor />
  },
  {
    path: "login/:login-inspetorId",
    element: <LoginInspetor />
  },
  {
    path: "login/:login-alunoId",
    element: <LoginAluno />
  }
]

const router = createBrowserRouter(
    createRoutesFromElements(
        (routes.map((route, index) => {
            return <Route path={route.path} element={route.element}/>
        }))
    )
);

export default router;