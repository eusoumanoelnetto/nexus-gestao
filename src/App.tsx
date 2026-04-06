/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load components for better performance
const Navbar = lazy(() => import("./components/Navbar").then(m => ({ default: m.Navbar })));
const Hero = lazy(() => import("./components/Hero").then(m => ({ default: m.Hero })));
const ProblemSolution = lazy(() => import("./components/ProblemSolution").then(m => ({ default: m.ProblemSolution })));
const Features = lazy(() => import("./components/Features").then(m => ({ default: m.Features })));
const ProofBenefits = lazy(() => import("./components/ProofBenefits").then(m => ({ default: m.ProofBenefits })));
const VisualDemo = lazy(() => import("./components/VisualDemo").then(m => ({ default: m.VisualDemo })));
const Testimonials = lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const Pricing = lazy(() => import("./components/Pricing").then(m => ({ default: m.Pricing })));
const FAQ = lazy(() => import("./components/FAQ").then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import("./components/FinalCTA").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const ScrollToTop = lazy(() => import("./components/ScrollToTop").then(m => ({ default: m.ScrollToTop })));

// Pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy").then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import("./pages/TermsOfService").then(m => ({ default: m.TermsOfService })));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-gray-900 border-t-transparent rounded-full animate-spin" />
  </div>
);

const Home = () => (
  <main>
    <Hero />
    <ProblemSolution />
    <Features />
    <ProofBenefits />
    <VisualDemo />
    <Testimonials />
    <Pricing />
    <FAQ />
    <FinalCTA />
  </main>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Suspense fallback={<LoadingFallback />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termo-servico" element={<TermsOfService />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}


