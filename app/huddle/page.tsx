"use client";

import type { Metadata, NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

import Navbar from "../../src/common/Navbar";
import Footer from "../../src/common/Footer";

import ContactUs from "../../src/components/ContactUs";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <br />
      <Script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></Script>
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrj3RJG3ytCQfDzr?backgroundColor=red"
        width="100%"
        height="2171"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>

      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
