import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
  return <div></div>;
};

export default Error;
