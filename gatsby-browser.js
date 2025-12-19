/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react";
import { Analytics } from "@vercel/analytics/react";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <Analytics />
  </>
);
