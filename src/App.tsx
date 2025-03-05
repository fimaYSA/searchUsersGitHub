import './App.css'
import {FC} from "react";
import {GitHub} from "./components/GitHub/GitHub.tsx";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

export const App: FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={'app_container'}>
        <GitHub/>
      </div>
    </StyledEngineProvider>
  )
}



