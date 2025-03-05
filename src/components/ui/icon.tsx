"use client";

import { IconProps, Icon as Iconify } from "@iconify/react";
import { useEffect, useState } from "react";

type Props = IconProps;
export function Icon(props: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return <Iconify {...props} />;
}
