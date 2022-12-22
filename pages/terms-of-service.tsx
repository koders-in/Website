import Head from "next/head";
import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import { Divider, Footer, GradientText, Navbar } from "../components";

const TermsOfServic = () => {
  React.useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);
  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Terms of Services</title>
      </Head>
      <Navbar />
      <div className="py-28 w-[90%] mx-auto">
        <GradientText
          aos="fade-up"
          className="w-[100%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold mt-9"
          text="Terms Of Services"
        />
        <Divider className="mt-8" />
        <h3
          data-aos="fade-up"
          className="font-miligrambold text-[1.5rem] sm:text-[2rem] text-white"
        >
          Acceptance of Terms
        </h3>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify"
        >
          The Terms of Service set out below govern your use of and purchases
          made through the Koders website (including all web pages, sub-domains,
          and sub-parts contained within, the "website") and any services
          offered on or through the website or otherwise provided by Koders.{" "}
          <br />
          <br />
          Except as otherwise specified above, the services are owned and
          operated by Koders. The services are provided subject to your
          acceptance without change of all of the terms and conditions set forth
          herein, as well as all other operating rules, policies, and procedures
          announced by Koders from time to time on the website. By using or
          accessing any part of the services, you agree to all of the terms and
          conditions contained herein, as well as all other Koders operating
          rules, policies, and procedures published on the website from time to
          time. Do not use or access the services offered by Koders if you do
          not agree to any of these terms.
        </p>
        <Divider className="mt-10" />
        <h3
          data-aos="fade-up"
          className="font-miligrambold text-[1.5rem] sm:text-[2rem] text-white"
        >
          Conditions to use
        </h3>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify"
        >
          Koders has the right, in its sole discretion, to deny anybody access
          to the software or services it provides, at any time and for any
          reason, including but not limited to a violation of these terms of
          use, in which case you must discontinue usage of Koders.
        </p>
        <Divider className="mt-10" />
        <h3
          data-aos="fade-up"
          className="font-miligrambold text-[1.5rem] sm:text-[2rem] text-white"
        >
          License Grants
        </h3>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify"
        >
          Koders grants you a non-exclusive, non-transferable license for the
          term to use the services we provide for the specific purpose specified
          in this agreement. This is only in order to provide software services,
          and comply with applicable law, and Koders' reasonable data
          verification and retention policies.
        </p>

        <Divider className="mt-10" />
        <h3
          data-aos="fade-up"
          className="font-miligrambold text-[1.5rem] sm:text-[2rem] text-white"
        >
          Lawful and / or prohibited use of the website
        </h3>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify"
        >
          As a condition of your use of the website, you shall not use the
          website for any purpose(s) that is unlawful or prohibited by the TOS.
          You shall not use the website in any manner that could damage,
          disable, overburden, or impair any Koders server, or the network(s)
          connected to any Koders server, or interfere with any other party's
          use and enjoyment of any services associated with the website. You
          shall not attempt to gain unauthorized access to any section of the
          website, other accounts, computer systems or networks connected to any
          Koders’ server or to any of the services associated with the website,
          through hacking, password mining or any other means. You shall not
          obtain or attempt to obtain any materials or information through any
          means not intentionally made available through the website. If the
          consumer is located outside of India, the service must adhere to the
          rules of both national laws for Koders i.e Indian laws and the
          national laws of the country the client resides in or belongs to and
          must not break any laws.
        </p>

        <Divider className="mt-10" />
        <h3
          data-aos="fade-up"
          className="font-miligrambold text-[1.5rem] sm:text-[2rem] text-white"
        >
          Termination
        </h3>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify"
        >
          Koders may terminate your account and/or your right to use the
          services, as well as remove and discard any and all of your content
          within the services, at any time for any or no reason, including,
          without limitation, if Koders believes you have violated or acted
          inconsistently with the provisions of this TOS. You agree that any
          termination of your right to use the services may occur without prior
          notice, and you recognize and agree that Koders may immediately
          deactivate or delete your account, as well as all the related content
          and files, and/or block any further access to such files or the
          services. Furthermore, you agree that Koders will not be liable to you
          or any third person in the event that your right to use or otherwise
          access the services is terminated. All provisions of this TOS that, by
          definition, should survive the termination of your right to use the
          services will do so (including, without limitation, all limitations on
          liability, releases, indemnification obligations, disclaimers of
          warranties, and intellectual property protections and licenses)
        </p>

        <Divider className="mt-10" />
        <h3
          data-aos="fade-up"
          className="font-miligrambold text-[1.5rem] sm:text-[2rem] text-white"
        >
          Trademark Information
        </h3>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify"
        >
          Koders' trademarks, service marks, and logos used and displayed in
          connection with the services are Koders' registered and/or
          unregistered trademarks or service marks. The trademarks may not be
          used to denigrate Koders, any third party associated with Koders, or
          Koders' or the associated third party's products or services in any
          way (in Koders' sole discretion) that may harm the trademarks'
          goodwill. The use of any trademarks as part of a link to or from any
          website is prohibited unless Koders grants prior written approval for
          each such link. All goodwill derived from the use of any Koders’
          trademark shall benefit Koders.
        </p>
        <Divider className="mt-10" />
        <h3
          data-aos="fade-up"
          className="font-miligrambold text-[1.5rem] sm:text-[2rem] text-white"
        >
          Notices
        </h3>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify"
        >
          Notices will be sent to the email address registered by the user of
          the service to familiarize them with this TOS. You consent to
          receiving the notices by email. The services may also give notices of
          changes to this TOS or other matters to you by displaying notices or
          links to notices on the services generally. Any notice you give to us
          must be in writing and addressed to our mailing address at
          (ADDRESS)[1] [2] .
        </p>
        <Divider className="mt-10" />
        <h3
          data-aos="fade-up"
          className="font-miligrambold text-[1.5rem] sm:text-[2rem] text-white"
        >
          Legal disputes
        </h3>
        <p
          data-aos="fade-up"
          className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify"
        >
          Please read this section carefully. It affects your rights and will
          have a substantial impact on how claims or disputes between you and
          Koders have against each other are resolved. You and Koders agree that
          any claim or dispute at law or in equity that has arisen, or may
          arise, between you and Koders (including any claim or dispute between
          you and a third-party agent of Koders) relating to or arising out of
          this or previous versions of these TOS, your use of or access to the
          services, the actions of Koders or its agents, or any products or
          services sold or purchased through the services will be resolved in
          accordance with the provisions of this section.
        </p>

        <div data-aos="fade-up" className="ml-10">
          <Divider className="mt-6" />
          <h4 className="font-miligrambold text-[1.3rem]  sm:text-[1.6rem] text-white">
            Agreement to Arbitrate
          </h4>
          <p className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify">
            You and Koders each agree that any and all disputes or claims that
            have arisen, or may arise, between you and Koders (including any
            disputes or claims between you and a third-party agent of Koders)
            that relate in any way to or arise out of this agreement, your use
            of or access to the services, the actions of Koders or its agents,
            or any products or services sold, offered, or purchased through the
            services shall be resolved exclusively through final and binding
            arbitration, rather than in court. Alternatively, you may assert
            your claims in small claims court, if your claims qualify and so
            long as the matter remains in such court and advances only on an
            individual (non-class, non-representative) basis.
          </p>

          <Divider className="mt-6" />
          <h4 className="font-miligrambold text-[1.3rem]  sm:text-[1.6rem] text-white">
            Costs of Arbitration
          </h4>
          <p className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify">
            Payment of all filing, administration and arbitrator fees will be
            governed by the country’s rules, unless otherwise stated in this
            agreement.
          </p>
          <Divider className="mt-6" />
          <h4 className="font-miligrambold text-[1.3rem]  sm:text-[1.6rem] text-white">
            Judicial Forum for Legal Disputes
          </h4>
          <p className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify">
            Unless you and Koders agree otherwise, in the event that the Legal
            Disputes section above is found not to apply to you or to a
            particular claim or dispute, either as a result of your decision to
            opt out of the agreement or as a result of a decision by the
            arbitrator or a court order, you agree that any claim or dispute
            that has arisen or may arise between you and Koders must be resolved
            exclusively. You agree that regardless of any statute or law to the
            contrary, any claim or cause of action by you arising out of or
            related to use of the services or these TOS must be filed within one
            year after such claim or cause of action arose or be forever barred.
          </p>
        </div>

        <Divider className="mt-10" />
        <h3
          data-aos="fade-up"
          className="font-miligrambold text-[1.5rem] sm:text-[2rem] text-white"
        >
          Acceptance of Terms
        </h3>
        <div data-aos="fade-up" className="ml-10">
          <h4 className="font-miligrambold text-[1.3rem]  sm:text-[1.6rem] text-white mt-6">
            Entire Agreement
          </h4>
          <p className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify">
            This TOS constitutes the entire agreement between you and Koder and
            governs your use of the services, superseding any prior or
            contemporaneous agreements, proposals, discussions, or
            communications between you and Koders on the subject matter hereof.
            You also may be subject to additional terms and conditions that may
            apply when you use affiliate services, third-party content,
            third-party software, or the services in a manner other than as
            governed by this TOS.
          </p>
          <h4 className="font-miligrambold text-[1.3rem]  sm:text-[1.6rem] text-white">
            Waiver
          </h4>
          <p className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify">
            The failure or delay of Koders to exercise or enforce any right or
            provision of this TOS shall not constitute a waiver of such right or
            provision. No oral waiver, amendment, or modification shall be
            effective under any circumstance whatsoever.
          </p>
          <h4 className="font-miligrambold text-[1.3rem]  sm:text-[1.6rem] text-white">
            Severability
          </h4>
          <p className="font-miligramLight text-[1.05rem] text-main-white-700 text-justify">
            If any provision of this TOS is found by a court of competent
            jurisdiction to be invalid, the parties nevertheless agree that the
            arbitrator or court should endeavor to give effect to the parties
            intentions as reflected in the provision, and the other provisions
            of this TOS shall remain in full force and effect.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServic;
