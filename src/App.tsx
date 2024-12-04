import AppRoutes from "./routes";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
