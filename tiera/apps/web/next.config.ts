import type { NextConfig } from "next";

const config: NextConfig = {
  transpilePackages: ["@tiera/engine", "@tiera/ui-tokens", "@tiera/i18n"],
  poweredByHeader: false,
};

export default config;
