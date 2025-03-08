"use client";

import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="5px"
      color="#CBC8FF"
      options={{ showSpinner: true }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default Providers;
