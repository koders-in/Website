import AOS from "aos";
import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

import "aos/dist/aos.css";
import ErrorBoundary from "../components/ErrorBoundary";

const Footer = dynamic(() => import("../components/Footer"), {
  suspense: true,
});

const Navbar = dynamic(() => import("../components/Navbar"), {
  suspense: true,
});

const Hero = dynamic(() => import("../sections/Hero"), {
  suspense: true,
});

const Clients = dynamic(() => import("../sections/Clients"), {
  suspense: true,
});

const Newsletter = dynamic(() => import("../sections/Newsletter"), {
  suspense: true,
});

const Pricing = dynamic(() => import("../sections/Pricing"), {
  suspense: true,
});

const Technologies = dynamic(() => import("../sections/Technologies"), {
  suspense: true,
});
const Testmonials = dynamic(() => import("../sections/Testmonials"), {
  suspense: true,
});

const WhyKoders = dynamic(() => import("../sections/WhyKoders"), {
  suspense: true,
});

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 1500,
    });
  }, []);

  // Check if WEBHOOK_URL environment variable is set
  const webhookUrl = process.env.WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Webhook URL is missing. Please set the WEBHOOK_URL environment variable.");
  }

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Koders</title>
      </Head>
      <>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <Navbar />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <Hero />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <WhyKoders />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <Clients />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <Technologies />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <Testmonials />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <Pricing />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <Newsletter />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </>
    </div>
  );
}
