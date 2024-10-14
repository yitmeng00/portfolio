"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface RedirectProps {
  children?: ReactNode;
}

const Redirect = ({ children }: RedirectProps) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/portfolio");
  }, [router]);

  return <>{children}</>;
};

export default Redirect;
