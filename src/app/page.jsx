import BgVideo from "@/components/home/BgVideo";
import HeroTxt from "@/components/home/HeroTxt";

export const metadata = {
  title: 'Sportsmanshipfull | Home',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Iste numquam ducimus vel accusamus sapiente laudantium aspernatur inventore omnis illo.Vitae.',
};

export default function Home() {
  return (
    <main>
      <BgVideo />
      <HeroTxt />
    </main>
  );
};
