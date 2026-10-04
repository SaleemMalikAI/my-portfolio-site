import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't auto-create AGENTS.md / CLAUDE.md when running `next dev`
  agentRules: false,
};

export default nextConfig;
