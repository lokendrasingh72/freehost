import "./App.css";
import MainLayout from "./Routes/routes";
import { ThemeProvider } from "@emotion/react";
import classes from "./theme";
function App() {
  return (
    <>
      <ThemeProvider theme={classes}>
        <MainLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
