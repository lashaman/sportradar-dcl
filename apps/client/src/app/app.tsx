import {Route, Routes, Link} from 'react-router-dom';
import {AllDiscrepancies, PlayersDiscrepancies, TeamDiscrepancies} from "./config/lazy-loaded-routes";
import {Suspense} from "react";
import {appRoutes} from "./config/app.routes";
import MainMenu from "./components/main-menu";
import 'normalize.css';
import Container from '@mui/material/Container';

export function App() {
  return (
    <>
      <div role="navigation">
        <MainMenu/>
      </div>

      <Container maxWidth="xl">
        <Routes>
          <Route path={appRoutes.main} element={
            <Suspense fallback={<div>Loading...</div>}>
              <AllDiscrepancies/>
            </Suspense>
          }/>
          <Route path={appRoutes.teamDiscrepancies} element={
            <Suspense fallback={<div>Loading...</div>}>
              <TeamDiscrepancies/>
            </Suspense>
          }/>
          <Route path={appRoutes.playersDiscrepancies} element={
            <Suspense fallback={<div>Loading...</div>}>
              <PlayersDiscrepancies/>
            </Suspense>
          }/>
          <Route path={appRoutes.allDiscrepancies} element={
            <Suspense fallback={<div>Loading...</div>}>
              <AllDiscrepancies/>
            </Suspense>
          }/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
