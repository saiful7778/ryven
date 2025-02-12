import Image from "next/image";
import Link from "next/link";
import siteLogo from "@/assets/images/site-logo.png";

const SiteLogo: React.FC = () => {
  return (
    <Link href="/" className="w-[225px] cursor-pointer">
      <Image
        src={siteLogo}
        width={225}
        height={48}
        className="w-full object-contain"
        alt="Ryven site logo"
      />
    </Link>
  );
};

export default SiteLogo;
