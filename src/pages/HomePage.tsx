import { MainHero } from "@/components/Heros/MainHero";
import MainSubHero1 from "@/components/Heros/Subheros/MainSubHero1";
import { MainContentHomePage } from "@/components/HomePage/MainContentHomePage";
import { PetCard } from "@/components/HomePage/PetCard";
import { ViewMoreButtonOnMobile } from "@/components/HomePage/ViewMoreButtonOnMobile";
import AdoptionBanner from "@/components/Heros/Subheros/AdoptionBanner";
import { Partners } from "@/components/HomePage/Partners";
export const HomePage = () => {
  return (
    <>
      <MainHero />
      {/* Content */}
      <div className="xs:wrapper sm:mt-[60px] mt-[30px] lg:px-0 max-sm:px-4">
        <MainContentHomePage
          title="What's news?"
          subtitle="Take A Look At Some Of Our Pets"
          buttonText="View more"
          buttonLink="/#"
        />
        <PetCard />
        <ViewMoreButtonOnMobile />
        <MainSubHero1 />
        <MainContentHomePage
          title="Hard to choose right products for your pets?"
          subtitle="Our Products"
          buttonText="View more"
          buttonLink="/#"
        />

        <MainContentHomePage
          title="Proud to be part of"
          subtitle="Pet Sellers"
          buttonText="View all our sellers"
          buttonLink="/#"
          className="flex items-center gap-2"
        />
        <Partners />
        <AdoptionBanner />
        {/* <CategorySubHero /> */}
      </div>
    </>
  );
};
