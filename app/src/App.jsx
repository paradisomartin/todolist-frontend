// src/App.jsx
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/authContext";
import Home from "./components/Home";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;