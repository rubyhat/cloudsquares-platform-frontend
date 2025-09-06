import React from "react";
import { BasicPageHeader } from "@/shared/components/Mobile/BasicPageHeader";
import { PropertyCategoriesContent } from "./components/PropertyCategoriesContent";

export const PropertyCategoriesModule = () => {
  return (
    <React.Fragment>
      <BasicPageHeader title="Категории недвижимости" shownBackArrowButton />
      <PropertyCategoriesContent />
    </React.Fragment>
  );
};
