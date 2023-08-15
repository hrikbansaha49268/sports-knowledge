import { Open_Sans } from "next/font/google";
import BgVideo from "@/components/home/BgVideo";
import HeroTxt from "@/components/home/HeroTxt";

const open_sans = Open_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable"
});

export default function Home() {
  return (
    <main className={open_sans.className}>
      <BgVideo />
      <HeroTxt />
    </main>
  );
};
