import Head from "next/head"
import React, { ReactNode } from "react"
import { Header } from "./Header/Header"

const meta = {
  title: "Sam...",
  description: "Front-end Developer",
}

export const GeneralLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <div className="background min-h-screen">
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta name="robots" content="follow, index" />
    </Head>
    <Header />
    <div>{children}</div>
  </div>
)
