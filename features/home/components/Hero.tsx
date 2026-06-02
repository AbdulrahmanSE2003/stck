import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <div
      className={`flex flex-col gap-5 sm:gap-3 items-center justify-center text-center my-10 h-[50vh]`}
    >
      <h1 className={`tracking-wide text-4xl font-semibold`}>
        Inventory management for modern businesses
      </h1>
      <p
        className={`text-zinc-400 tracking-wider text-lg max-w-md sm:max-w-lg`}
      >
        Real-time visibility. Data-driven decisions. Built for teams that move
        fast.
      </p>

      <div className={`flex items-center gap-6`}>
        <Button
          asChild
          size={"lg"}
          className={`bg-main-teal/85 text-md px-4 py-5 text-black hover:bg-sec-teal  group`}
        >
          <Link href={"/dashboard"} className={`flex items-center gap-2`}>
            <span>Get started</span>
            <ArrowUpRightIcon
              className={`group-hover:rotate-45 transition-transform duration-500 size-5`}
            />
          </Link>
        </Button>
        <Button
          size={"lg"}
          variant={"ghost"}
          className={` text-md px-8 py-5 bg-zinc-400 text-black hover:bg-zinc-500 `}
        >
          <span>See More</span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
