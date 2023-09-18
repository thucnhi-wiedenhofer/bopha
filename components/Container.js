import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Container({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Bopha vous propose des créations florales sur mesure pour toutes les occasions et évènements. Passionnée par l'art floral, bopha donne des cours et anime des ateliers également sur Paris."
        />
        <meta
          property="og:title"
          content="Bopha, Décoratrice Florale - Création florale sur mesure"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bopha.vercel.app/" />
        <meta
          property="og:image"
          content="https://backoffice.lepetitjournal.com/sites/default/files/bopha_serre_cambodge.jpg"
        />
        <meta
          property="og:description"
          content="Bopha vous propose des créations florales sur mesure pour toutes les occasions et évènements. Passionnée par l'art floral, bopha donne des cours et anime des ateliers sur Paris également."
        />
        <title>Bopha, Décoratrice Florale - Création florale sur mesure</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
