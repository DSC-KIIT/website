import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaMedium,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const aboutUs = (
  <>
    Google Developer Student Clubs KIIT is a technical club focused on building
    a community of student developers interested in solving real-world problems.
    We host various workshops and hackathons. <br />
    <br />
    We also host flagship events from Google such as Android Study Jams, 30 days
    of Google Cloud, ExploreML etc. <br />
    <br />
    Our goal is to build an inclusive community of students who want to learn
    about tech and grow together.
  </>
);

export const socials = [
  {
    name: "Discord",
    link: "https://discord.gg/4h4PnbsxFq",
    logo: <FaDiscord />,
  },
  {
    name: "Twitter",
    link: "https://x.com/gdsckiit",
    logo: <FaXTwitter />,
  },
  {
    name: "GitHub",
    link: "https://github.com/GDSC-KIIT",
    logo: <FaGithub />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/gdsckiit",
    logo: <FaInstagram />,
  },
  {
    name: "Medium",
    link: "https://medium.com/dsckiit",
    logo: <FaMedium />,
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@gdsckiit",
    logo: <FaYoutube />,
  },
];

export const faq = [
  {
    question: "What is GDSC KIIT?",
    answer: (
      <>
        (Straight up from the official Website) Google Developer Student Clubs
        (GDSC) are community groups for college and university students
        interested in Google developer technologies. <br />
        <br />
        Students from all undergraduate or graduate programs with an interest in
        growing as a developer are welcome. By joining a GDSC, students grow
        their knowledge in a peer-to-peer learning environment and build
        solutions for local businesses and their community. <br />
        <br />
        GDSC KIIT is the official Google Developer Students Club chapter of
        Kalinga Institute of Industrial Technology.
      </>
    ),
  },
  {
    question: "How can GDSC KIIT help me?",
    answer: (
      <>
        GDSC KIIT organizes various in-person and offline events for the
        students at KIIT for them get an opportunity to learn from peers. These
        events also help with networking and meeting like-minded peers on a
        similar journey in tech.
      </>
    ),
  },
  {
    question: "How can I become a member?",
    answer: (
      <>
        We conduct our annual recruitments around August, you can apply in that
        to become a member. You can read more about our recruitment process{" "}
        <a
          target="_blank"
          href="https://forum.dsckiit.in/d/5-gdsc-kiit-recruitment-faq"
          className="underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I hear about the events that you will do in the future?",
    answer: (
      <>
        You can head over to our{" "}
        <a
          target="_blank"
          href="https://gdsc.community.dev/kalinga-institute-of-industrial-technology-bhubaneswar-1/"
          className="underline"
        >
          gdsc.community.dev
        </a>{" "}
        page and join our chapter with your email, after that, you will receive
        an email whenever we announce an event. If that is too much hassle for
        you then just follow us on our social media handles, we announce and
        promote our events there as well.
      </>
    ),
  },
];
