import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AIMarketing from "./pages/AIMarketing";
import Pricing from "./pages/Pricing";
import Industries from "./pages/Industries";
import HowItWorks from "./pages/HowItWorks";
import Results from "./pages/Results";
import Affiliate from "./pages/Affiliate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

function Router() {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-1 ${isHome ? "pt-0" : "pt-20"}`}>
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/services"} component={Services} />
          <Route path={"/ai-marketing"} component={AIMarketing} />
          <Route path={"/pricing"} component={Pricing} />
          <Route path={"/industries"} component={Industries} />
          <Route path={"/how-it-works"} component={HowItWorks} />
          <Route path={"/results"} component={Results} />
          <Route path={"/affiliate"} component={Affiliate} />
          <Route path={"/about"} component={About} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/faq"} component={FAQ} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      {!isHome && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
