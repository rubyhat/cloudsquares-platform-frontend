import React from "react";
import { Skeleton } from "@mui/material";
import { useUserProfile } from "@/shared/permissions/hooks";
import { PropertyCategory } from "@/shared/interfaces/PropertyCategory";
import { useGetAllPropertyCategoriesQuery } from "@/shared/hooks/propertyCategories";
import { BasicFormSelectField } from "../BasicFormSelectField";
import { AxiosErrorAlertMessage } from "../AxiosErrorAlertMessage";
import { FieldValues, Path } from "react-hook-form";

interface PropertyCategoriesSelectFieldProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  isOptional?: boolean;
  placeholder?: string;
  buttonToAddNewCategory?: {
    buttonLabel: string;
    onButtonClick: () => void;
  };
}

// TODO: айди агентства брать не из профиля пользователя, а из ???
export const PropertyCategoriesSelectField = <
  TFieldValues extends FieldValues,
>({
  name,
  isOptional = false,
  buttonToAddNewCategory = undefined,
  placeholder = "Выберите категорию",
}: PropertyCategoriesSelectFieldProps<TFieldValues>) => {
  const userProfile = useUserProfile();

  const {
    data: propertyCategoriesData,
    isLoading: propertyCategoriesIsLoading,
    isError: propertyCategoriesIsError,
    error: propertyCategoriesError,
  } = useGetAllPropertyCategoriesQuery(userProfile?.agency?.id);

  const selectData = (categories: PropertyCategory[]) => {
    const options = [];
    const categoryOptions = categories.map((category) => ({
      value: category.id,
      label: category.title,
    }));

    if (isOptional) {
      options.push({ value: "", label: "Без категории" });
    }

    return [...options, ...categoryOptions];
  };

  return (
    <React.Fragment>
      {propertyCategoriesIsError && propertyCategoriesError && (
        <AxiosErrorAlertMessage error={propertyCategoriesError} />
      )}
      {!propertyCategoriesData && propertyCategoriesIsLoading && (
        <Skeleton width="100%" height="43px" variant="rounded" />
      )}
      {propertyCategoriesData && (
        <BasicFormSelectField<TFieldValues>
          name={name}
          placeholder={placeholder}
          buttonOptions={
            buttonToAddNewCategory
              ? {
                  buttonLabel: buttonToAddNewCategory.buttonLabel,
                  onButtonClick: buttonToAddNewCategory.onButtonClick,
                }
              : undefined
          }
          data={selectData(propertyCategoriesData)}
        />
      )}
    </React.Fragment>
  );
};
