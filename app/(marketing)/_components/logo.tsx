import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
});

export const Logo = () => {
  return (
    <div className="hidden w-full items-center gap-x-2 md:flex">
      <Image src="/noshan_logo.png" height="40" width="40" alt="Logo" className="dark:hidden" />
      <Image
        src="/noshan_logo_dark.png"
        height="40"
        width="40"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("text-lg font-semibold", font.className)}>
        ノシャン <sup className="text-[0.45rem]">(Noshan)</sup>
      </p>
    </div>
  );
};
