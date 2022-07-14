import { NextPage } from "next"
import { AppProps } from "next/app"
import React, { ReactNode } from "react"

export type TPageWithLayout = NextPage & {
  Layout?: React.FC<{ children: ReactNode }>
}

export type TAppPropsWithLayout = AppProps & {
  Component: TPageWithLayout
}
