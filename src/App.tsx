import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Programs from "./pages/Programs";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import CodeOfConduct from "./pages/CodeOfConduct";
import Ethics from "./pages/Ethics";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register"; // 👈 Added

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:programId" element={<Programs />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/ethics" element={<Ethics />} />

          {/* 👇 New Registration Route */}
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
