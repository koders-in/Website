import {
  aloktomar,
  blog1img,
  blog2img,
  blog3img,
  blog4img,
  blog5img,
  bolt,
  camelJuno,
  discordWhiteLogo,
  germanGov,
  githubWhite,
  googleLogo,
  indianFlag,
  kodersProfile,
  linkedinWhite,
  tealAwards,
  tealBenefits,
  tealImpact,
  tealIssue,
  tealWorkers,
  tealWorkspace,
  twitterWhite,
} from "../assets";

export interface TestmonialData {
  description: string;
  logo: string;
  title: string;
  animationStyle?: string;
}
export const testmonialLogo: Array<TestmonialData> = [
  {
    logo: indianFlag,
    description:
      "“We choose Koders because of their ability to adapt with feedback, ultimatley leading to the best experience for our members and team.”",
    title: "Indian Army",
  },
  {
    logo: germanGov,
    description:
      "“Very good team. Not only from a technical perspective but also from the human perspective. Helped us a lot even in difficult situations!”",
    title: "Lars Behrendt",
  },
  {
    logo: aloktomar,
    description:
      "“Impressed by Koders, a stellar software development company from Dehradun, reaching 18+ countries. Their dedication to high-quality applications and enthusiastic work ethic is commendable. I highly recommend Koders for reliable and skilled software development. Keep up the excellent work!”",
    title: "Alok Tomar",
  },
  {
    logo: camelJuno,
    description:
      "“My second project with Koders and again, a smooth and professional experience. I always appreciate their patience with my requirements and how understanding they are. Thanks guys and here's to more future work together 🍻”",
    title: "Camel Juno",
  },
  {
    logo: bolt,
    description:
      "“Amazing quality product delivered. The team is very professional. Even though it was a one of the most complicated projects, the results was great. Would definitely want to continue working with this team.”",
    title: "Bolt",
  },
];

export const footerButtons = [
  {
    title: "Resources",
    buttons: [
      { title: "About", route: "/about", target: false },
      { title: "Jobs", route: "https://odoo.koders.in/jobs", target: true, chip: "We are hiring" },
      { title: "Collaborate", route: "/collaborate", target: false },
    ],
  },
  {
    title: "Quick Links",
    buttons: [
      { title: "Blogs", route: "/blogs", target: false },
      {
        title: "Portfolio",
        route: "https://portfolio.koders.in/",
        target: true,
      },
      { title: "Pricing", route: "", target: false },
      { title: "Payments", route: "https://payments.koders.in/", target: true },
    ],
  },
  {
    title: "Legal",
    buttons: [
      { title: "Cancellation", route: "/cancellation", target: false },
      { title: "Refund", route: "/cancellation", target: false },
      { title: "Privacy Policy", route: "/privacy-policy", target: false },
      { title: "Terms of Services", route: "/terms-of-service", target: false },
    ],
  },
  {
    title: "Support",
    buttons: [
      {
        title: "Discord Server",
        route: "https://discord.gg/jjTgNpWFvM",
        target: true,
      },
      { title: "Contact Us", route: "/contact", target: false },
      { title: "Customer Support", route: "/customer-support", target: false },
    ],
  },
];

export const reviews = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 16, 17, 18, 19, 20,
].map((item) => {
  return {
    title: "Google",
    message:
      '"Just want to give a quick thanks to Connor. Has always remained helpful and patient through all our companies needs. Goes above and beyond to ensure we receive service regardless of the excessive amount of work on his plate."',
    logo: googleLogo,
  };
});

export const typeOfProjects = [
  "Web Development",
  "Mobile Development",
  "Website Design",
  "Desktop App",
  "Toolbots",
  "Integration",
  "UI/UX",
  "Backend Development",
  "Web Scraper",
  "Discord Bots",
  "Other",
];

export interface CardObject {
  isMobile?: boolean;
  translateX?: number;
  className?: string;
  title: string;
  description: string;
  price: string;
  services: Array<string>;
  aos?: string;
  setAppContext?: (data: string) => void;
  pricing?: string;
  index?: number;
  exactPrice: string;
}
export const pricingCardData: Array<CardObject> = [
  {
    title: "Basic",
    description: "The best plan to start your journey at Koders.",
    price: "$12",
    exactPrice: "Basic plan ($12/hour)",
    services: [
      "Bug fixes and minor updates",
      "Basic technical support",
      "Simple feature development",
      "Maintenance & support for existing software",
    ],
  },
  {
    title: "Basic Plus",
    description: "The best plan to start your journey at Koders.",
    price: "$15",
    exactPrice: "Basic plus plan ($15/hour)",
    services: [
      "Custom software development",
      "Complex feature development",
      "Integration with third-party platforms",
      "Advanced technical support",
    ],
  },
  {
    title: "Premium",
    description: "The best plan to start your journey at Koders.",
    price: "$20",
    exactPrice: "Premium plan ($20/hour)",
    services: [
      "Advanced custom software development",
      "End-to-end software development lifecycle management",
      "Advanced integration with third-party platforms",
      "Enterprise-level technical support",
    ],
  },
  {
    title: "Enterprise",
    description: "The best plan to start your journey at Koders.",
    price: "$30",
    exactPrice: "Enterprise plan ($30/hour)",
    services: [
      "Large-scale custom software development projects",
      "Consulting and strategy services",
      "Comprehensive project management and support",
      "Customized solutions and services",
    ],
  },
];

export const whyWe = [
  {
    class: "text-center  border-main-teal border-r-4",
    title: "Company",
    state: "01",
    html: '<p class="px-2 mt-2 leading-none lg:leading-[1.3rem] md:px-3 lg:px-6">Rest assured. Unlike freelancers,<span class="text-main-lightTeal">  we are sticking till completion</span>.</p>',
  },
  {
    class: "text-center  border-main-teal border-r-4",
    title: "One Stop Solution",
    state: "02",
    html: ' <p class="px-2 mt-2 leading-none lg:leading-[1.3rem] md:px-3 lg:px-6">Design+Frontend+Backend +Testing+QnA+Docs?<span class="text-main-lightTeal"> We do it all.</span></p>',
  },
  {
    class: "text-center  border-main-teal border-r-4",
    title: "Quality + Satisfaction",
    state: "03",
    html: '<p class="px-2 mt-2 leading-none lg:leading-[1.3rem] md:px-3 lg:px-6"><span class="text-main-lightTeal">Quality </span>delivery with 100%<span class="text-main-lightTeal"> Satisfaction </span>or 100% refund.</p>',
  },
  {
    class: "text-center",
    title: "Your Code, Not Ours",
    state: "04",
    html: ' <p class="px-2 mt-2 leading-none lg:leading-[1.3rem] md:px-3 lg:px-6">We’re giving <span class="text-main-lightTeal">IPR rights</span>, not just the source code.</p>',
  },
];

export const faq = [
  {
    question: "What types of software services do you offer?",
    answer:
      "We offer a wide range of software services, including UI/UX, custom software development, mobile app development, web development, automated toolbots and a lot more.",
  },
  {
    question: "How do I get a quote for a software development project?",
    answer:
      "To get a quote for a software development project, please visit https://koders.in/start-project with details about your project. One of our sales representatives will get back to you with a quote within 7 business days after your request is submitted at our portal. ",
  },
  {
    question:
      "Do you offer a free trial of your software development services?",
    answer:
      "No, we do not offer a free trial of our software development services. However, we are happy to provide a detailed proposal and quote for your project upon request.",
  },
  {
    question: "How do you approach software development projects?",
    answer:
      "We follow a proven software development process that includes discovery, design, development, testing, and deployment phases. Our goal is to deliver high-quality, reliable software that meets the needs of our clients.",
  },
  {
    question: "How long will it take for my application to be developed?",
    answer:
      "The estimated time to develop your application will depend on a number of factors, including the complexity of the project, the resources and team available, and any external dependencies. Our team will get back to you with an estimation after you’ve submitted your project requirements in detail. ",
  },
  {
    question: "Do you offer ongoing support and maintenance for your software?",
    answer:
      "Yes, we offer ongoing support and maintenance for our software to ensure that it is always up-to-date and running smoothly.",
  },
  {
    question: "How will the progress of my project be handled?",
    answer:
      "We use a project management tool to ensure that your project is managed effectively and efficiently. Our project manager will create a detailed workflow, breaking down all deliverables into tasks and assigning them to team members with deadlines. We hold weekly review meetings to make sure that everyone is on track with edits and changes, and all files, comments, and feedback are shared centrally to keep everyone in the loop. This approach helps us stay organized and ensure that your project is completed on time and to your satisfaction.",
  },
];

export const pricingList = ["100-500$", "500-1000$", "1000-5000$", ">5000$"];
export const timeLineList = ["<1 week", "<1 month", "<6 months", ">6 months"];

export const socialMediaHandles = [
  {
    src: linkedinWhite,
    url: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHkkfNKVtVB3QAAAYR0x2dA3c0i5YfwfSFl2SuYAa1O1u3Qo-Dauem_n-eeuKG0gRp9COXnLYet0RNUvrEAzdsDukF7eZB3SRKXii0KQI2nAu_xwR1gAz33Uh6Sw2J26qwLlxQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fkoders-in",
  },
  {
    src: githubWhite,
    url: "https://github.com/koders-in",
  },
  {
    src: twitterWhite,
    url: "https://twitter.com/KodersKorp",
  },
  {
    src: discordWhiteLogo,
    url: "https://discord.com/invite/u3P2a8FpWD",
  },
];

export const jobTypes = [
  "All",
  "Tech & Development",
  "Design",
  "Content Creation",
  "Marketing",
  "Other",
];

interface TypeOfPiont {
  text: string;
  position: string;
  type: "top" | "bottom";
}

export const timelinePoints: Array<TypeOfPiont> = [
  {
    text: "Resume Submission",
    position: "left-[-70px] top-[-31px]",
    type: "bottom",
  },
  {
    text: "Screening Round",
    position: "top-[-31px]",
    type: "top",
  },
  {
    text: "Technical Interview",
    position: "left-[-100px] top-[-31px]",
    type: "bottom",
  },
  {
    text: "HR Interview",
    position: "left-[-100px] top-[-31px]",
    type: "top",
  },
  {
    text: "Onboarding",
    position: "left-[-100px] top-[-31px]",
    type: "top",
  },
];

export const offersData = [
  [
    { icon: tealIssue, text: "0 boss issues" },
    { icon: tealImpact, text: "Real Impact" },
    { icon: tealBenefits, text: "Benefits" },
  ],
  [
    { icon: tealWorkers, text: "Great <br/> Co-Workers" },
    { icon: tealAwards, text: "Performance <br/> Awards" },
    { icon: tealWorkspace, text: "Dynamic <br/> Workspaces" },
  ],
];

export interface ObjectOfJob {
  title: string;
  location: string;
  type: string;
  experience: string;
  id?: number;
  duration?: string;
}

// description: item.snippet,
// logo: item.user.thumbnail,
// title: item.user.name,
// rating: item.rating,
// link: item.user.link,

export const discordReviews = [
  {
    user: {
      name: "Camel Juno",
      thumbnail:
        "https://cdn.discordapp.com/avatars/340813726103896064/624497f973f4629bc2c8467614803f81.webp?size=240",
    },
    snippet:
      "It's a pleasure and a relief to have Koders as a team of skilled individuals whom I can rely on when it comes to web dev. Fully recommend them and the service is totally worth its cost. Looking forward to more projects in the future!",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Neo",
      thumbnail:
        "https://imgs.search.brave.com/gSLuDg1iooBKPci14D1Te6W3OTUSUGHUWIzTYoGYsBQ/rs:fit:1000:1080:1/g:ce/aHR0cHM6Ly9jZG4x/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC8wNC8zNS9u/LWxldHRlci1sb2dv/LXRlbXBsYXRlLXZl/Y3Rvci0xMTE4MDQz/NS5qcGc",
    },
    snippet: "Great Experience friendly staff",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "SupremeCook",
      thumbnail:
        "https://cdn.discordapp.com/avatars/442921402279133196/2f0ba5e4d6c9f39dbacc02e49bb143cd.webp?size=240",
    },
    snippet: "Awesome Experience",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "GeorgePitlock",
      thumbnail:
        "https://cdn.discordapp.com/avatars/437902214413942786/3e60b26ddc05727d700b1bc592b9a3d8.webp?size=160",
    },
    snippet:
      "Nice idea, good work on niche projects, very happy with work I received however communication was a little slow at time",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Neo",
      thumbnail:
        "https://imgs.search.brave.com/gSLuDg1iooBKPci14D1Te6W3OTUSUGHUWIzTYoGYsBQ/rs:fit:1000:1080:1/g:ce/aHR0cHM6Ly9jZG4x/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC8wNC8zNS9u/LWxldHRlci1sb2dv/LXRlbXBsYXRlLXZl/Y3Rvci0xMTE4MDQz/NS5qcGc",
    },
    snippet:
      "Great Experience with good communication and staff! Very friendly and cooperative as well",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Troy",
      thumbnail:
        "https://imgs.search.brave.com/gSLuDg1iooBKPci14D1Te6W3OTUSUGHUWIzTYoGYsBQ/rs:fit:1000:1080:1/g:ce/aHR0cHM6Ly9jZG4x/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC8wNC8zNS9u/LWxldHRlci1sb2dv/LXRlbXBsYXRlLXZl/Y3Rvci0xMTE4MDQz/NS5qcGc",
    },
    snippet: "I didn't do a single thing",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Enz",
      thumbnail:
        "https://cdn.discordapp.com/avatars/475085749440479232/6bd037d86b34fc19603d0954c80cbc50.webp?size=240",
    },
    snippet: " Speed and price and cleaness of code exceeded expectations",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Tarun",
      thumbnail:
        "https://cdn.discordapp.com/avatars/475085749440479232/6bd037d86b34fc19603d0954c80cbc50.webp?size=240",
    },
    snippet: "Experience was grt",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Bolt",
      thumbnail:
        "https://cdn.discordapp.com/avatars/459764269043548162/b37c2b19eed5bc2daece6aeae82c71f3.webp?size=160",
    },
    snippet:
      "Amazing quality product delivered. The team is very professional. Even though it was a one of the most complicated projects, the results was great. Would definitely want to continue working with this team.",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "DiegoTod ",
      thumbnail:
        "https://cdn.discordapp.com/avatars/475085749440479232/6bd037d86b34fc19603d0954c80cbc50.webp?size=240",
    },
    snippet: "Best experience",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Camel Juno",
      thumbnail:
        "https://cdn.discordapp.com/avatars/340813726103896064/624497f973f4629bc2c8467614803f81.webp?size=240",
    },
    snippet:
      " My second project with Koders and again, a smooth and professional experience. I always appreciate their patience with my requirements and how understanding they are. Thanks guys and here's to more future work together 🍻",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Ak456",
      thumbnail:
        "https://cdn.discordapp.com/avatars/654921782720987168/7f87f6d34270b4aac6f7713706bae069.webp?size=160",
    },
    snippet:
      "Amzing work in super fast timings , very understanding and helps a lot thank you koders",
    rating: 5,
    link: "",
  },
  {
    user: {
      name: "Bilrd",
      thumbnail:
        "https://cdn.discordapp.com/avatars/687968347727593493/a_054de1f07ed3f87e7325ef2a1e76e8b8.webp?size=160",
    },
    snippet:
      "Very professional team to work with. Delivered a high quality solution that does exactly what I was looking for.",
    rating: 5,
    link: "",
  },
];

export const dataOfMapAnimation = [
  {
    line: "line-1",
    location: "location-1",
    base: "base-1",
  },
  {
    line: "line-2",
    location: "location-2",
    base: "base-2",
  },
  {
    line: "line-3",
    location: "location-3",
    base: "base-3",
  },
  {
    line: "line-4",
    location: "location-4",
    base: "base-4",
  },
  {
    line: "line-5",
    location: "location-5",
    base: "base-5",
  },
  {
    line: "line-6",
    location: "location-6",
    base: "base-6",
  },
  {
    line: "line-7",
    location: "location-7",
    base: "base-7",
  },
  {
    line: "line-8",
    location: "location-8",
    base: "base-8",
  },
  {
    line: "line-9",
    location: "location-9",
    base: "base-9",
  },
  {
    line: "line-10",
    location: "location-10",
    base: "base-10",
  },
  {
    line: "line-11",
    location: "location-11",
    base: "base-11",
  },
  {
    line: "line-12",
    location: "location-12",
    base: "base-12",
  },
  {
    line: "line-13",
    location: "location-13",
    base: "base-13",
  },
  {
    line: "line-14",
    location: "location-14",
    base: "base-14",
  },
  {
    line: "line-15",
    location: "location-15",
    base: "base-15",
  },
];

export const arrayOfLineID = [
  "line-1",
  "line-2",
  "line-3",
  "line-4",
  "line-5",
  "line-6",
  "line-7",
  "line-8",
  "line-9",
  "line-10",
];

export const arrayOfLocationID = [
  "location-7",
  "location-4",
  "location-1",
  "location-2",
  "location-9",
  "location-6",
  "location-8",
  "location-3",
  "location-10",
  "location-5",
];

export const arrayOfBaseID = [
  "base-7",
  "base-4",
  "base-1",
  "base-2",
  "base-9",
  "base-6",
  "base-8",
  "base-3",
  "base-10",
  "base-5",
];

export const listOfPrefferedUserReviewList: Array<string> = [
  "Bolt",
  "asudev Tyagi",
  "Rahul Chamoli",
  "Nikhil Yadav",
];

interface departmentJob {
  department: string;
  job: string;
}

export const socialMediaTealIcons = [
  linkedinWhite,
  githubWhite,
  twitterWhite,
  discordWhiteLogo,
];

export const listOfBestReviewsUsers = [
  "Camel Juno",
  "Enz",
  "Camel Juno",
  "GeorgePitlock",
  "Tarun",
  "David Jung",
  "Nikhil Yadav",
  "Bolt",
  "Neo",
  "Neo",
  "Troy",
  "Kelly Morena",
  "ow ow",
  "MONISHA YADAV",
  "Bilrd",
  "Ak456",
  "SupremeCook",
  "DiegoTod",
  "Rohit bisht",
  "Akash Das",
  "Isha Ahuja",
  "Bolt",
];

// --------------------------Blogs content--------------------------------

export const blogs = [
  {
    id: 1,
    author: "Koders",
    img: blog1img,
    chips: ["Software development", "Mobile Apps", "Web Apps", "Desktop Apps"],
    profile: kodersProfile,
    date: "AUG 6, 2022",
    title: "Top Considerations for Developing High-Quality Software",
    mainPara:
      "Developing quality software is a complex and multifaceted process that requires careful planning and attention to detail. Here are a few key considerations when working on software development projects:",
    all: {
      type: "list",
      content: [
        "Establish clear and achievable goals to guide the development process and ensure that the final product meets the needs of the end user.",
        "Thorough planning and design are crucial to the success of any software project. This includes creating detailed specifications, prototyping and testing designs, and identifying any potential challenges ahead of time.",
        "Agile development methodologies, such as Scrum, can help with iterative development and continuous delivery of working software.",
        "Testing is a vital part of the development process and helps ensure that the software is of high quality and free of bugs and other issues. This includes both manual and automated testing, as well as testing for different scenarios and edge cases.",
        "User experience (UX) is a key factor in the success of a software product. Consider the user's perspective and design the software in a way that is intuitive, easy to use, and visually appealing.",
        "Regularly updating and maintaining the software helps ensure that it remains relevant and useful to users over time.",
        "Collaboration with team members and stakeholders is essential to the success of any software development project. Work closely with these groups to ensure that everyone is on the same page and that the final product meets everyone's needs and expectations.",
      ],
    },
  },
  {
    id: 2,
    img: blog2img,
    chips: ["Software development", "IT"],
    author: "Koders",
    profile: kodersProfile,
    date: "SEP 2, 2022",
    title:
      "Our Company Culture: A Behind-the-Scenes Look at Our Values and Philosophy",
    mainPara:
      "At Koders, we understand that our company culture plays a significant role in our success. Our values and philosophy shape the way we approach software development and how we work together as a team. We pride ourselves on having a company culture that is friendly and welcoming. We believe that when our team members feel comfortable and at home, they are more productive and engaged.",
    all: {
      type: "para",
      content: [
        "At Koders, we understand that our company culture plays a significant role in our success. Our values and philosophy shape the way we approach software development and how we work together as a team. We pride ourselves on having a company culture that is friendly and welcoming. We believe that when our team members feel comfortable and at home, they are more productive and engaged.",
        ,
        "Collaboration, innovation, and excellence are at the core of our culture. We believe that by working together and sharing ideas, we can achieve better results and deliver top-quality software to our clients. We also place a strong emphasis on continuous learning and personal growth, encouraging our team members to continuously improve their skills and knowledge.",
        "One of the things that sets our culture apart is the lack of boss issues. We believe in open and transparent communication and encourage our team members to speak up and share their ideas. This creates an environment where everyone feels heard and valued, which helps to foster collaboration and creativity.",
        "We use agile development methodologies and prioritize transparency and open communication in our work. Regular check-ins, frequent feedback, and continuous iteration help us meet the needs of our clients and deliver the best possible results.",
        "Creating a positive and inclusive work environment that values diversity is also important to us. We believe that by fostering a positive culture, we can drive creativity and success.",
        "Overall, our friendly and welcoming company culture helps to create a positive work environment where team members feel comfortable and supported. We believe that this is a key part of what makes us successful and helps us deliver the best possible results for our clients.",
      ],
    },
  },
  {
    id: 3,
    img: blog3img,
    chips: ["Software development", "Mobile Apps", "Web Apps", "Desktop Apps"],
    author: "Koders",
    profile: kodersProfile,
    date: "OCT 8, 2022",
    title: "How to effectively plan and design high quality software projects",
    mainPara:
      "Planning and designing software projects can be a complex and time-consuming process, but it is essential for ensuring that the project is delivered on time, within budget, and meets the needs of the stakeholders. Here are some tips for effectively planning and designing software projects:",
    all: {
      type: "list with heading",
      headings: [
        "Define the scope of the project",
        "Create a project plan",
        "Choose the right development method",
        "Assemble the right team",
        "Design the user interface",
        "Test and iterate",
      ],
      content: [
        "The first step in planning a software project is to clearly define the scope of the project. This includes identifying the specific goals and objectives of the project, as well as the key features and functionality that will be included. Defining the scope of the project helps to ensure that everyone is on the same page and that the project stays focused.",
        "A project plan is a document that outlines the tasks, milestones, and resources needed to complete the project. It should include a timeline for each task, as well as any dependencies between tasks. A project plan helps to keep the project on track and ensures that everyone knows what needs to be done and when.",
        "There are several different software development methodologies to choose from, including agile, waterfall, and hybrid approaches. The right development method will depend on the specific needs of the project. For example, agile methodologies are often used for projects with rapidly changing requirements, while waterfall methodologies are better suited for projects with more predictable requirements.",
        " A software project is only as good as the team working on it. It is important to choose team members who have the necessary skills and expertise to complete the project successfully. In addition to technical skills, it is also important to consider communication skills and team dynamics when selecting team members.",
        "The user interface (UI) is the face of the software and is the primary way that users interact with the application. It is important to design a user-friendly and intuitive UI that is easy to use and understand. This includes considering the layout, navigation, and overall look and feel of the application.",
        "Testing and iteration are important throughout the development process to ensure that the software meets the needs of the users. This may include conducting user testing, gathering feedback from stakeholders, and making changes and improvements as needed.",
      ],
      conclusion: [
        "By following these steps, you can help ensure that your software development projects are of high quality and meet the needs of your target audience. In addition to these steps, it's also important to consider other factors that can impact the quality of your software projects, such as collaboration with team members and stakeholders, the use of agile development methodologies, and the importance of cybersecurity. By considering these factors and incorporating best practices into your planning and design process, you can help ensure that your software projects are successful and deliver value to your users.",
      ],
    },
  },
  {
    id: 4,
    img: blog4img,
    chips: ["Automation", "Business software", "E-commerce"],
    author: "Koders",
    profile: kodersProfile,
    date: "NOV 1, 2022",
    title: "The benefits of automating business processes with custom software",
    mainPara:
      "Custom software is an excellent tool for automating business processes and increasing efficiency within an organization. Some of the advantages of using custom software to automate business processes include:",
    all: {
      type: "list with heading",
      headings: [
        "Greater efficiency",
        "Reduced errors",
        "More accurate data",
        "Better decision-making",
        "Enhanced customer service",
      ],
      content: [
        "Automating business processes with custom software can help to streamline operations and eliminate repetitive tasks, freeing up time for more important tasks. This can result in increased productivity and efficiency within the organization.",
        " Manual processes are prone to errors, but custom software can help to reduce the number of errors that occur. This is because custom software is designed to handle tasks consistently and accurately, without the risk of human error.",
        "Custom software can validate data input, ensuring that the information entered into the system is correct.",
        "Custom software can also help to improve decision-making within an organization by providing real-time data and analytics. This can help managers to make informed decisions based on accurate and up-to-date information.",
        "Automating business processes with custom software can also help to improve customer service by providing faster and more accurate responses to customer inquiries. This can help to build trust and loyalty with customers.",
      ],
      conclusion: [
        "By automating business processes with custom software, organizations can improve efficiency, reduce errors, increase accuracy, improve decision-making, and enhance customer service. These benefits can lead to increased profitability and competitiveness.",
      ],
    },
  },
  {
    id: 5,
    img: blog5img,
    chips: ["Software development", "IT"],
    author: "Koders",
    profile: kodersProfile,
    date: "DEC 5, 2022",
    title:
      "Why Partnering with a Software Company is a Better Choice than Working with Freelancers?",
    mainPara:
      "There are several reasons why choosing a software company as a partner may be a better option than working with freelancers, including the company's access to resources and the stability of the final product. Some additional benefits of partnering with a software company include:",
    all: {
      type: "list with heading",
      headings: [
        "Expertise and resources",
        "Project management and communication",
        "Scalability",
        "Support and maintenance",
      ],
      content: [
        "Software companies typically have a team of experienced professionals with a wide range of skills and expertise. This can be particularly beneficial for projects that require specialized knowledge or require the integration of multiple technologies. In contrast, freelancers may have limited expertise and may not have the resources to handle complex projects.",
        "Software companies often have established project management processes and systems in place to ensure that projects are delivered on time and within budget. They also typically have dedicated project managers who can handle communication with clients and ensure that projects stay on track. Freelancers, on the other hand, may not have the same level of experience in project management and may not be as reliable when it comes to communication and meeting deadlines.",
        "Software companies are typically able to scale up or down as needed to meet the needs of a project. This can be particularly beneficial for projects that may require additional resources at certain points in the development process. Freelancers, on the other hand, may not have the same level of flexibility or the ability to scale up as needed.",
        "Software companies typically offer ongoing support and maintenance for the software they develop. This can be particularly beneficial for organizations that require ongoing support for their software systems. Freelancers may not offer the same level of support or may not be available for ongoing maintenance.",
      ],
      conclusion: [
        "Overall, partnering with a software company can offer a number of advantages over working with freelancers, including expertise and resources, project management and communication, scalability, and support and maintenance.",
      ],
    },
  },
];

// ---------------------------privacy policy page data-------------------------------------

export const privacyPolicyPoints = [
  "Data collection: We may collect personal details like names, email addresses, and payment information when you register for our services or communicate with us. The Contact Us form in the website collects your email which is used to keep you updated about our services which fulfill your needs and requirements by sending you regular emails and newsletters. We keep you assured that this information is protected and you may unsubscribe to the mails which are not required by you anymore.",
  "Data use: We use the information we collect to provide and improve our software development services, communicate with you, and process your payments. We may also use your data for research and analytics, to personalize your experience, or to send you marketing communications.",
  "Data sharing: Unless required by law or necessary to provide our services, we will not share your personal information with third parties. We may share anonymous or aggregated data with third parties for research and analytics purposes.",
  "Data retention: We will retain your personal information for as long as necessary to provide our services or as required by law.",
  "Data security: We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.",
];

export const termsOfServices = [
  {
    heading: "Introduction",
    description:
      'These terms of service (the "Terms") govern your access to and use of Koders’s software development services (the "Services"), including our website https://koders.in (including all web pages, sub-domains, and sub-parts contained within, the "website") and any services offered on or through the website or otherwise provided by Koders. Except as otherwise specified above, the services are owned and operated by Koders. The services are provided subject to your acceptance without change of all of the terms and conditions set forth herein, as well as all other operating rules, policies, and procedures announced by Koders from time to time on the website. By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.',
  },
  {
    heading: "Changes to the Terms",
    description:
      "Koders reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting the modified terms on our website. You are responsible for reviewing the modified terms regularly. Your continued use of the Services after any changes have been made will constitute your acceptance of the modified terms.",
  },
  {
    heading: "Trademark Information",
    description:
      "Koders' trademarks, service marks, and logos used and displayed in connection with the services are Koders' registered and/or unregistered trademarks or service marks. The trademarks may not be used to denigrate Koders, any third party associated with Koders, or Koders' or the associated third party's products or services in any way (in Koders' sole discretion) that may harm the trademarks' goodwill. The use of any trademarks as part of a link to or from any website is prohibited unless Koders grants prior written approval for each such link. All goodwill derived from the use of any Koders’ trademark shall benefit Koders.",
  },
  {
    heading: "Use of the Services",
    description:
      "You may use the Services only for lawful purposes and in accordance with these Terms. You may not use the Services in any way that violates any applicable federal, state, or international law or regulation.",
  },
  {
    heading: "Intellectual Property",
    description:
      "Koders retains all right, title, and interest in and to the Services, including all intellectual property rights. You may not use any of Koders’s intellectual property without our prior written consent.",
  },
  {
    heading: "Disclaimer of Warranties",
    description:
      'Koders provides the Services on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the Services or the information, content, materials, or products included on the Services.',
  },
  {
    heading: "Licence Grants",
    description:
      "Koders grants you a non-exclusive, non-transferable license for the term to use the services we provide for the specific purpose specified in this agreement. This is only in order to provide software services, and comply with applicable law, and Koders' reasonable data verification and retention policies.",
  },
  {
    heading: "Limitation of Liability",
    description:
      "Koders will not be liable for any damages of any kind arising from the use of the Services, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.",
  },
  {
    heading: "Indemnification",
    description:
      "You agree to indemnify and hold Koders and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Services, your violation of these Terms, or your violation of any rights of another.",
  },
  {
    heading: "Governing Law",
    description:
      "These Terms and your use of the Services will be governed by and construed in accordance with the laws of the State of Uttarakhand, without giving effect to any principles of conflicts of law.",
  },
  {
    heading: "Dispute Resolution",
    description:
      "Any dispute arising out of or relating to these Terms or the Services will be resolved through binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association. The arbitration will be conducted in the State of Uttarakhand.",
  },
  {
    heading: "Entire Agreement",
    description:
      "These Terms constitute the entire agreement between you and Koders with respect to the Services and supersede all prior or contemporaneous communications and proposals, whether oral or written. If any provision of these Terms is found to be invalid or unenforceable, that provision will be enforced to the maximum extent possible, and the remaining provisions will remain in full force and effect.",
  },
];

export const datddd = [
  {
    id: 23,
    job: {
      title: "UI/UX Design Intern",
      department: "Design",
      exp_level: { experience_yrs: "0-1 yr", level: "Intern" },
      listings: [{ updated_at: "2023-12-22T11:00:02.432905+00:00" }],
    },
    location: "Hybrid",
  },
  {
    id: 28,
    job: {
      title: "Marketing Intern",
      department: "Tech & Development",
      exp_level: { experience_yrs: "0-1 yr", level: "Intern" },
      listings: [{ updated_at: "2022-12-22T11:01:28.867484+00:00" }],
    },
    location: "Remote",
  },
  {
    id: 31,
    job: {
      title: "UI/UX Design Intern",
      department: "Content Creation",
      exp_level: { experience_yrs: "0-1 yr", level: "Intern" },
      listings: [{ updated_at: "2021-12-22T11:02:57.456455+00:00" }],
    },
    location: "Dehradun, Uttarakhand",
  },
  {
    id: 32,
    job: {
      title: "UI/UX Design Intern p",
      department: "Tech & Development",
      exp_level: { experience_yrs: "0-1 yr", level: "Intern" },
      listings: [{ updated_at: "2024-12-22T11:04:50.592353+00:00" }],
    },
    location: "Dehradun, Uttarakhand",
  },

  {
    id: 28,
    job: {
      title: "Business Development Intern",
      department: "Tech & Development",
      exp_level: { experience_yrs: "0-1 yr", level: "Intern" },
      listings: [{ updated_at: "2019-12-22T11:05:22.970543+00:00" }],
    },
    location: "Hybrid",
  },
];
