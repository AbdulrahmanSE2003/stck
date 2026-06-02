import { Button } from "@/components/ui/button";
import { PackageIcon } from "lucide-react";

import Link from "next/link";

const Header = () => {
  return (
    <header className={`w-full flex justify-between items-center px-6 p-4`}>
      <Link
        href={"/"}
        className={`flex items-center gap-3 text-xl font-semibold`}
      >
        <PackageIcon className={`text-main-teal`} />
        <span>STCK.</span>
      </Link>
      <Button className={`px-3`}>
        <Link href={"sign-in"}>Sign-in</Link>
      </Button>
    </header>
  );
};

export default Header;
