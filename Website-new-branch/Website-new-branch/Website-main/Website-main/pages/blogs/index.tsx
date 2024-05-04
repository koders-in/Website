import Head from "next/head";
import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import {
  Card,
  Divider,
  Footer,
  GradientText,
  MainCard,
  Navbar,
} from "../../components";
import { blogs } from "../../helper/constant";

const body = `INSTRUCTIONS FOR SUBMISSION:\n
1. Attach your blog as a Word document.\n
2. Attach a supporting Cover Image for your blog.\n
3. Provide a blog summary and some suitable tags for your blog (e.g. Machine Learning, UI/UX, etc.).\n
4. You may use the template given below to draft a submission mail.\n
5. Delete any unnecessary text in this email (like these instrcution) \n\n
Dear Team Koders,
\n\n
I am excited to submit my blog post for your consideration. Attached to this email, you will find my blog post titled "[Your Blog Title]" in a Word document along with a suitable cover image.
\n\n
[Your Blog Summary]
\n\n
I believe that your readers would find this information useful and would appreciate the opportunity to share it with them. Please let me know if you are interested in publishing my blog post on your website. I am available to make any necessary edits or revisions to ensure that the post meets your editorial standards.
\n\n
Thank you for considering my request.
\n\n
Best regards,\n
[Your Name]`;
const MAIL_TO = `mailto:info@koders.in?subject=Request to Publish My Blog Post&body=${encodeURIComponent(
  body
)}`;

const Blog = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  React.useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);
  return (
    <div className="bg-main-primary overflow-hidden">
      <Head>
        <title>Blogs</title>
      </Head>
      <Navbar />
      <div className="pb-10 pt-28 w-[90%] mx-auto relative">
        <Divider className="mt-9" />
        <GradientText
          aos="fade-up"
          className="w-fit mx-auto text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Blogs"
        />
        {/* <MainCard /> */}
        <div className="flex flex-wrap md:flex-nowrap  gap-5 sm:gap-9 mt-10">
          {[...blogs.slice(0, 2)].map((item) => (
            <Card
              customStyle="w-full md:w-[49%] lg:w-[49%] xl:w-[49%]"
              key={item.id}
              data={item}
            />
          ))}
        </div>
        <div className="flex justify-between items-stretch flex-wrap  gap-5 sm:gap-9 mt-10">
          {[...blogs.slice(2, blogs.length)].map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <Divider className="h-20 py-10" />
        <GradientText
          aos="slide-left"
          className="w-fit mx-auto text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold xxl:pt-10"
          text="Wish your blog was here too?"
        />
        <p
          data-aos="slide-right"
          className="text-[0.8rem] sm:text-[1.3rem] text-main-light_white text-center font-miligramLight xxl:pb-10"
        >
          Submit your blog. Write to us at&nbsp;
          <span
            onClick={() => {
              window.open(MAIL_TO);
            }}
            className="text-main-teal cursor-pointer hover:border-main-teal hover:border-b-2"
          >
            info@koders.in
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
