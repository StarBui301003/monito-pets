import { MainHero } from "@/components/Heros/MainHero";
import { MainSubHero1 } from "@/components/Heros/Subheros/MainSubHero1";
import { MainContentHomePage } from "@/components/HomePage/MainContentHomePage";
import { PetListHomePage } from "@/components/HomePage/PetListHomePage";
import { ViewMoreButtonOnMobile } from "@/components/Buttons/ViewMoreButtonOnMobile";
import { AdoptionBanner } from "@/components/Heros/Subheros/AdoptionBanner";
import { Partners } from "@/components/HomePage/Partners";
import { ProductsListHomePage } from "@/components/HomePage/ProductsListHomePage";
import { Blogs } from "@/components/HomePage/Blogs";

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
          className="mb-5"
        />
        <PetListHomePage />
        <ViewMoreButtonOnMobile buttonLink="/" />
        <MainSubHero1 />
        <MainContentHomePage
          className="hidden sm:block"
          title="Hard to choose right products for your pets?"
          subtitle="Our Products"
          buttonText="View more"
          buttonLink="/#"
        />
        <ProductsListHomePage />
        <MainContentHomePage
          title="Proud to be part of"
          subtitle="Pet Sellers"
          buttonText="View all our sellers"
          buttonLink="/#"
          className="items-center gap-2 "
          wrapperClassName="hidden sm:flex"
        />
        <Partners />
        <AdoptionBanner />
        <MainContentHomePage
          title="You already know?"
          subtitle="Useful pet knowledge"
          buttonText="View more"
          buttonLink="/#"
          className="sm:block items-center gap-2 mb-5"
        />
        <Blogs />
        <ViewMoreButtonOnMobile buttonLink="/" />
      </div>
    </>
  );
};
