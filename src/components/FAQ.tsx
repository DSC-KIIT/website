import React from "react";

import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Link,
} from "@chakra-ui/react";

const FAQ = () => {
  return (
    <Box px={{ base: "8", lg: "96" }} pt={{ base: "10", lg: "10" }}>
      <Text
        fontSize={{ base: "2xl", lg: "4xl" }}
        fontWeight={700}
        textAlign={{ base: "left", lg: "center" }}
      >
        Frequently Asked Questions
      </Text>

      <Accordion
        allowToggle
        px={{ base: "0", lg: "40" }}
        py={{ base: "6", lg: "10" }}
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontSize={{ base: "lg", lg: "xl" }}
              >
                What is GDG KIIT ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Google Developer Groups (GDGs) are community groups for college and university
            students interested in Google developer technologies. <br></br>
            <br></br>
            Students from all undergraduate or graduate programs with an
            interest in growing as a developer are welcome. By joining a GDG,
            students grow their knowledge in a peer-to-peer learning environment
            and build solutions for local businesses and their community.{" "}
            <br></br>
            <br></br>
            GDG KIIT is the official Google Developer Group chapter of
            Kalinga Institute of Industrial Technology.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontSize={{ base: "lg", lg: "xl" }}
              >
                How can GDG KIIT help me ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            GDG KIIT organizes various in-person and offline events for the
            students at KIIT for them get an opportunity to learn from peers.
            These events also help with networking and meeting like-minded peers
            on a similar journey in tech.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontSize={{ base: "lg", lg: "xl" }}
              >
                How can I become a member ?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We conduct our annual recruitments around August, you can apply in
            that to become a member. You can read more about our recruitment
            process{" "}
            <Link
              color="blue"
              href="https://forum.dsckiit.in/d/5-GDG-kiit-recruitment-faq"
            >
              {" "}
              here
            </Link>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontSize={{ base: "lg", lg: "xl" }}
              >
                How can I hear about the events that you will do in the future?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            You can head over to our{" "}
            <Link
              href="https://gdg.community.dev/gdg-on-campus-kalinga-institute-of-industrial-technology-bhubaneswar-india/"
              color="blue"
            >
              {" "}
              gdg.community.dev
            </Link>{" "}
            page and join our chapter with your email, after that, you will
            receive an email whenever we announce an event. If that is too much
            hassle for you then just follow us on our social media handles, we
            announce and promote our events there as well.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQ;
