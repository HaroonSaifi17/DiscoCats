import CatEar from '@/components/svg/CatEar';
import VaultHeader from './VaultHeader';
import { cardData } from './../lib/data.ts';
import VaultCard from './VaultCard.tsx';

export default function VaultGrid() {
  return (
    <section className="px-[3vw] py-10 pt-20 max-[550px]:pt-10">
      <div className="bg-cream border-saffron relative mx-auto max-w-[1100px] rounded-2xl border-4 p-6 max-md:px-4 max-sm:rounded-none">
        <img
          width="100px"
          className="absolute -top-7 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform"
          src="/images/welcomeCat.webp"
          alt="Welcome Cat"
        />
        <div className="absolute -top-10 left-[10%] -z-10 scale-x-[-1] transform">
          <CatEar />
        </div>
        <div className="transform-z-10 absolute -top-10 right-[10%] -z-10">
          <CatEar />
        </div>
        <VaultHeader />
        <div className="flex flex-wrap justify-center gap-8 max-lg:gap-4">
          {cardData.map((card, index) => (
            <VaultCard {...card} key={index} />
          ))}
          {cardData.map((card, index) => (
            <VaultCard {...card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
