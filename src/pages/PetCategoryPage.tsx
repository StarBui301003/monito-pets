// import { BreadcrumbComponent } from "@/components/Breadcrumb/Breadcrumb";
import { CategorySubHero } from "@/components/Heros/Subheros/CategroySubHero";
import { FilterComponent } from "@/components/PetCategoryPage/FilterComponent";
import { HeaderCategory } from "@/components/PetCategoryPage/HeaderCategory";
import { PaginationComponent } from "@/components/PetCategoryPage/PaginationComponent";
import { PetListPetCategoryPage } from "@/components/PetCategoryPage/PetListPetCategoryPage";
// import { useParams } from "react-router-dom";

export const PetCategoryPage = () => {
  // const breadcrumbs = [
  //   { label: "Home", href: "/" },
  //   { label: "Dog", href: "/pets" },
  //   { label: "Small Dog", href: "/pets" },
  // ];
  return (
    <>
      <div className="sm:mt-[107px] wrapper sm:mb-16 overflow-y-hidden min-h-screen">
        <div className="mb-2">
          {/* <BreadcrumbComponent items={breadcrumbs} /> */}
        </div>
        <CategorySubHero />
        <div className="flex space-x-5">
          <FilterComponent />
          <div>
            <HeaderCategory />
            <PetListPetCategoryPage />
            <PaginationComponent />
          </div>
        </div>
      </div>
    </>
  );
};
