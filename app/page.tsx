"use client";

import { aboutUs, faq, socials } from "@/constants";
import { Accordion, AccordionItem, Button, Image } from "@nextui-org/react";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Page() {
  const sampleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <main>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute h-full w-full bg-neutral-300 -z-10"></div>
      </div>

      <div className="container mx-auto px-5 mt-10 mb-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold text-4xl text-center text-balance">
            Design. Develop. Deliver.
          </h1>
          <p className="text-center mt-6 max-w-xl">{sampleText}</p>
          <Button
            size="md"
            radius="sm"
            className="mt-7 bg-neutral-900 text-neutral-100 px-12 py-6 hover:scale-105"
          >
            Get Started
          </Button>
        </div>
        <div className="flex shrink items-center justify-center mt-14 w-full">
          <Image
            src="https://dsckiit.in/landing.svg"
            radius="sm"
            className="w-[100%] max-w-[700px]"
            isBlurred
          ></Image>
        </div>

        <div className="flex w-full flex-col md:flex-row items-center mt-24 gap-12 justify-between">
          <div className="w-full md:w-[50%] flex flex-col gap-8">
            <h1 className="font-semibold text-3xl text-balance">About Us</h1>
            <p className="md:max-w-md">{aboutUs}</p>
          </div>
          <div className="w-full md:w-[50%] flex">
            <Image
              src="https://dsckiit.in/get_involved.svg"
              radius="sm"
              className="w-full"
              isBlurred
            ></Image>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center md:justify-between w-full mt-16 items-center gap-7">
          <div className="flex md:justify-start justify-center">
            <h1 className="font-semibold text-2xl text-balance text-center md:text-left">
              Follow us for more updates!
            </h1>
          </div>
          <div className="flex md:justify-end justify-center flex-row gap-2 md:gap-3 flex-wrap">
            {socials.map((item, index) => (
              <a href={item.link} target="_blank">
                <Button
                  key={index}
                  isIconOnly
                  size="lg"
                  radius="lg"
                  aria-label={item.name}
                  className="flex text-2xl bg-transparent border-2 border-neutral-800 hover:bg-neutral-800 hover:text-neutral-200 hover:scale-105 hover:shadow-neutral-800"
                >
                  {item.logo}
                </Button>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-24">
          <h1 className="font-semibold text-3xl text-center">FAQ</h1>
          <Accordion
            className="mt-6 w-full md:w-[90%] bg-neutral-400 rounded-md px-3 pb-4"
            showDivider={false}
          >
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label={item.question}
                title={
                  <div className="flex justify-start items-center">
                    <h1 className="font-medium text-neutral-800 text-xl max-w-[90%]">
                      {item.question}
                    </h1>
                  </div>
                }
                indicator={<MdArrowBackIosNew className="text-neutral-500" />}
                className="py-3 border-b-2 border-neutral-800"
              >
                <div className="flex w-full items-center justify-center">
                  <p className="">{item.answer}</p>
                </div>
              </AccordionItem>
            ))}
          </Accordion>{" "}
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-evenly w-full mt-24 items-center gap-7">
          <div className="flex md:justify-start justify-center flex-col gap-2.5">
            <h1 className="font-semibold text-2xl text-balance md:text-left text-center">
              Got any further questions?
            </h1>
            <p className="max-w-md md:text-left text-center">
              Contact us to get your doubts cleared
            </p>
          </div>
          <div className="flex md:justify-end justify-center items-center">
            <Button
              size="md"
              radius="sm"
              className="bg-neutral-900 text-neutral-100 px-12 py-6 hover:scale-105"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
