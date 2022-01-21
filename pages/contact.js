import React from "react";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 sm:px-10 mb-8">
      <Head>
        <title>Contact | My travel blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-0 lg:p-8 mt-32 mb-32 mx-auto max-w-screen-sm">
        <h1 className="text-center sm:text-left mb-8 text-3xl font-semibold">
          Contact
        </h1>
        <div className="bg-white rounded-xl shadow-xl p-4">
          <div className="p-2">
            <p className="text-sm uppercase text-justify md:text-base">
              Telefon:
            </p>
            <a
              className="block text-sm border-b font-semibold w-max border-black md:text-base"
              href="tel:+48222222222"
            >
              +48 222 222 222
            </a>
          </div>
          <div className="p-2">
            <p className="text-sm uppercase text-justify md:text-base">
              Hey! text me:
            </p>
            <a
              className="block text-sm border-b font-semibold w-max border-black md:text-base"
              href="mailto:kontakt@kangurmakescandles.pl"
            >
              contact@travelfolio.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
