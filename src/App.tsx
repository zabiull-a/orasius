import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";

// Eagerly load the homepage for instant first paint
import Index from "./pages/Index";

// Lazy-load all other routes for smaller initial bundle
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Methodology = lazy(() => import("./pages/Methodology"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));
const Ethics = lazy(() => import("./pages/Ethics"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const DataSecurity = lazy(() => import("./pages/DataSecurity"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-primary" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:programId" element={<Programs />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/data-security" element={<DataSecurity />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
