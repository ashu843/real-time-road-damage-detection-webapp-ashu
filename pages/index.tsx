import Head from "next/head";
import Yolo from "../components/models/Yolo";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import MapButton from "../components/MapButton";

export default function Home() {
  return (
    <>
      <main className="font-mono flex flex-col justify-center items-center  w-screen">
        <h1 className="m-5 text-xl font-bold">Real-Time Road Damage Detection</h1>
        <Yolo />
        <p className="m-5">
          Created by{" "}
          <a
            className="underline underline-offset-1 hover:translate-y-1"
            href=""
          >
            @ASHUTOSH TRIVEDI
          </a>
        </p>
        <MapButton /> {}
      </main>
    </>
  );
}