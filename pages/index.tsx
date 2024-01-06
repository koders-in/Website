import AOS from "aos";
import Head from "next/head";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

import "aos/dist/aos.css";

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
const Mentor = dynamic(() => import("../sections/Mentor"), {
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
  // ------------

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Koders</title>
      </Head>
      <>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <WhyKoders />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Clients />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Technologies />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Testmonials />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Mentor />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Newsletter />
        </Suspense>
        <Suspense fallback={<div className="text-main-teal">Loading...</div>}>
          <Footer />
        </Suspense>
      </>
    </div>
  );
}
