import React from "react";
import Fade from "react-reveal/Fade";
import { Link, HashRouter } from "react-router-dom";
import "./BlogTiles.scss";
import Image1 from "../../Images/Hacking_1.webp";
import Image2 from "../../Images/ecom_1.webp";
import Image3 from "../../Images/AI_1.webp";
import Image4 from "../../Images/UI_1.jpg";
import Image5 from "../../Images/seo_1.webp";
import Image6 from "../../Images/dark_web_1.webp";
import Image7 from "../../Images/QA_1.webp";

const BlogList = [
  {
    blogContext: "Cyber Security",
    blogTitle: "Hacking Humans is easier than Hacking Computers",
    blogDescription: `Being a hacker isn't as easy as it may sound. And you should
        beware of snake oil salesmen who guarantee you to make the next
        'Kevin Mitnick' for a few bucks. Raiding area 51 would be a better
        plan, just in case.`,
    blogMoreLink: "/Hacking-Humans-is-easier-than-Hacking-Computers",
    blogPoster: Image1,
    blogPosterDescription: 'Code snippet for calculating hash for signature used to sign a message',
  },
  {
    blogContext: "E-Commerce",
    blogTitle: `Website or Mobile App - What to know before taking your business
        online?`,
    blogDescription: `Hello Mighty Creator, I am sure you have a great idea about taking
        your business online. Maybe you don’t know where to start? But you
        need an online presence for your business to increase marketing
        and create a loyal customer base.`,
    blogMoreLink: "/Website-or-Mobile-App",
    blogPoster: Image2,
    blogPosterDescription: 'A hand holding debit/credit card which is going to be used on an e-commerce website',
  },
  {
    blogContext: "Artificial Intelligence",
    blogTitle: "Automation: the present and future",
    blogDescription: `Automation is the technique of creating a tool or an apparatus
        which automates tasks thus minimizing human involvement. Tasks
        that are put on automation benefit a lot of industries like
        manufacturing, transportation, defense.`,
    blogMoreLink: "/Automation-the-present-and-future",
    blogPoster: Image3,
    blogPosterDescription: 'Hand of a human and robot reaching out to touch each other',
  },
  {
    blogContext: "UI & UX",
    blogTitle: "UI vs UX: How do they impact your business?",
    blogDescription: `User experience (UX) design is the process design teams use to
        create products that provide meaningful and relevant experiences
        to users. This involves the design of the entire process of
        acquiring and integrating the product, including aspects of
        branding, design, usability and function.`,
    blogMoreLink: "/UI-vs-UX",
    blogPoster: Image4,
    blogPosterDescription: 'A tablet on a work space displaying mockup designs for a product',
  },
  {
    blogContext: "Digital Marketing",
    blogTitle: `What you need to know about SEO before starting a website?`,
    blogDescription: `SEO or Search Engine Optimization is the process of improving the
        quantity and quality of search traffic to your website or product
        through organic search engine results. Google has a crawler that
        gathers data about everything that can be found on the Internet.`,
    blogMoreLink: "/What you need to know about SEO before starting a website",
    blogPoster: Image5,
    blogPosterDescription: 'A hand going to select option SEO which is highlighted among options like settings, statistics, search, web, etc.',
  },
  {
    blogContext: "Dark Web",
    blogTitle: "The Dark Web is notorious",
    blogDescription: `The dark web is notorious. You can find fake credit cards, hitmen,
        dope sellers, and all sorts of other illicit substances. Hold up,
        hold up, hold up! The line written above by no means could be
        repudiated. But this is not the dark web. The dark web was never
        concomitant with felonious acts.`,
    blogMoreLink: "/The Dark Web is notorious",
    blogPoster: Image6,
    blogPosterDescription: 'A person with long hair sitting in front of large monitor having abstract illustration',
  },
  {
    blogContext: "Quality Assurance",
    blogTitle: "4 Reasons why Software Quality Assurance is Important?",
    blogDescription: `Quality assurance or QA is a government mandated step in
        manufacturing. This is used to ensure that the product meets the
        technical requirements and the set industry standards. This is a
        highly underestimated topic.`,
    blogMoreLink: "/4 Reasons why Software Quality Assurance is Important",
    blogPoster: Image7,
    blogPosterDescription: 'A hand drawing an exponential curve representing quality',
  },
];

function BlogTiles() {
  return (
    <div className="blogtiles">
      {BlogList.map(
        ({
          blogContext,
          blogDescription,
          blogPoster,
          blogTitle,
          blogMoreLink,
          blogPosterDescription,
        }) => {
          return (
            <Fade key={blogTitle} bottom>
              <BlogContainer>
                <BlogContent>
                  <h5>{blogContext}</h5>
                  <h3>{blogTitle}</h3>
                  <p>{blogDescription}</p>
                  <HashRouter>
                    <Link to={blogMoreLink} tag={Link} aria-label="read more">
                      Read More
                    </Link>
                  </HashRouter>
                </BlogContent>
                <BlogContent>
                  <img src={blogPoster} alt={blogPosterDescription} />
                </BlogContent>
              </BlogContainer>
            </Fade>
          );
        }
      )}
    </div>
  );
}

export default BlogTiles;

const BlogContainer = ({ children }) => (
  <div className="row blog-wrapper mb-5">{children}</div>
);

const BlogContent = ({ children }) => (
  <div className="left col-md-6 col-sm-12">{children}</div>
);
