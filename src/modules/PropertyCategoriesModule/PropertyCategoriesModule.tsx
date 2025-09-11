import React from "react";
import { BasicPageHeader } from "@/shared/components/Mobile/BasicPageHeader";
import { PropertyCategoriesContent } from "./components/PropertyCategoriesContent";

interface PropertyCategoriesModuleProps {
  showContentOnly?: boolean;
}

export const PropertyCategoriesModule = ({
  showContentOnly,
}: PropertyCategoriesModuleProps) => {
  if (showContentOnly) {
    return <PropertyCategoriesContent />;
  }

  return (
    <React.Fragment>
      <BasicPageHeader title="Категории недвижимости" shownBackArrowButton />
      <PropertyCategoriesContent />
    </React.Fragment>
  );
};
