import React from "react";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
import SocialMediaBar from "../common/SocialMediaBar";

const Landing = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      px={{ base: "6", lg: "36" }}
      pt={{ base: "10", lg: "20" }}
      justifyContent="space-around"
    >
      <Box ml="3">
        <Text fontSize={{ base: "2xl", lg: "4xl" }} fontWeight={700}>
          Design. Develop. Deliver
        </Text>

        <Text
          fontSize={{ base: "xl", lg: "2xl" }}
          pr={{ base: "0", lg: "24" }}
          mt="10"
        >
          Google Developer Student Clubs KIIT is a technical club focused on
          building a community of student developers interested in solving
          real-world problems.
        </Text>

        <Text
          fontSize={{ base: "xl", lg: "2xl" }}
          pr={{ base: "0", lg: "24" }}
          mt="10"
        >
          We host various workshops and hackathons. We also host flagship events
          from Google such as Android Study Jams, 30 days of Google Cloud,
          ExploreML etc.
        </Text>

        <Text
          fontSize={{ base: "xl", lg: "2xl" }}
          pr={{ base: "0", lg: "24" }}
          mt="10"
        >
          Our goal is to build an inclusive community of students who want to
          learn about tech and grow together.
        </Text>

        <Box mt="10">
          <SocialMediaBar></SocialMediaBar>
        </Box>
      </Box>

      <Image
        width={{ base: "90%", lg: "45%" }}
        src="/landing.svg"
        objectFit="fill"
        alt="Landing Illustration"
        mt={{ base: "16", lg: "0" }}
      ></Image>
    </Flex>
  );
};

export default Landing;
