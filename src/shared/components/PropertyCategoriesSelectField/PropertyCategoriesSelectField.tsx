import React from "react";
import { Skeleton } from "@mui/material";
import { useUserProfile } from "@/shared/permissions/hooks";
import { useGetAllPropertyCategoriesQuery } from "@/shared/hooks/propertyCategories";
import { BasicFormSelectField } from "../BasicFormSelectField";
import { AxiosErrorAlertMessage } from "../AxiosErrorAlertMessage";

// TODO: айди агентства брать не из профиля пользователя, а из ???
export const PropertyCategoriesSelectField = () => {
  const userProfile = useUserProfile();

  const {
    data: propertyCategoriesData,
    isLoading: propertyCategoriesIsLoading,
    isError: propertyCategoriesIsError,
    error: propertyCategoriesError,
  } = useGetAllPropertyCategoriesQuery(userProfile?.agency?.id);

  return (
    <React.Fragment>
      {propertyCategoriesIsError && propertyCategoriesError && (
        <AxiosErrorAlertMessage error={propertyCategoriesError} />
      )}
      {!propertyCategoriesData && propertyCategoriesIsLoading && (
        <Skeleton width="100%" height="43px" variant="rounded" />
      )}
      {propertyCategoriesData && (
        <BasicFormSelectField<{ category_id: string }>
          name="category_id"
          placeholder="Выберите категорию"
          buttonOptions={{
            buttonLabel: "+ Добавить категорию",
            onButtonClick: () => console.log("Add category"),
          }}
          data={propertyCategoriesData.map((category) => ({
            value: category.id,
            label: category.title,
          }))}
        />
      )}
    </React.Fragment>
  );
};
