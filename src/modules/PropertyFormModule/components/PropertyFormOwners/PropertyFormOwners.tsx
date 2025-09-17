import { useParams } from "react-router-dom";
import { Alert, Box, Skeleton, Typography } from "@mui/material";

import { PropertyFormMode } from "@/shared/interfaces/PropertyForm";
import { useGetAllPropertyOwnersByPropertyIDQuery } from "@/shared/hooks/propertyOwners";
import { AxiosErrorAlertMessage } from "@/shared/components/AxiosErrorAlertMessage";
import { PropertyOwnerCard } from "@/shared/components/PropertyOwnerCard";
import { Property } from "@/shared/interfaces/Property";

import { PropertyOwnersForm } from "../PropertyOwnersForm";
import { skeletonWrapperStyles } from "./styles";

interface PropertyFormOwnersProps {
  mode: PropertyFormMode;
  editableProperty?: Property;
}

export const PropertyFormOwners = ({ mode }: PropertyFormOwnersProps) => {
  const { id } = useParams<{ id: string }>();
  const propertyId = id ?? "";

  const { data, isLoading, error } =
    useGetAllPropertyOwnersByPropertyIDQuery(propertyId);
  const owners = data?.data ?? [];
  const isEditMode = mode === PropertyFormMode.edit;

  return (
    <Box display="grid" gap={2}>
      <Box>
        {isEditMode && (
          <Typography component="h4" variant="h4" mb={1.5}>
            Собственники {owners.length ? `(${owners.length})` : ""}
          </Typography>
        )}

        {isLoading && (
          <Box sx={skeletonWrapperStyles}>
            <Skeleton variant="rounded" height={150} />
            <Skeleton variant="rounded" height={150} />
            <Skeleton variant="rounded" height={150} />
          </Box>
        )}

        {error && <AxiosErrorAlertMessage error={error} />}

        {isEditMode && !isLoading && !error && owners.length === 0 && (
          <Alert severity="info">
            Собственников пока нет, Вы можете добавить их при помощи формы ниже
          </Alert>
        )}

        {owners.length > 0 && (
          <Box
            display="grid"
            gap={1.5}
            sx={{
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            }}
          >
            {owners.map((owner) => (
              <PropertyOwnerCard
                key={owner.id}
                owner={owner}
                onDelete={() => {}}
                onEdit={() => {}}
              />
            ))}
          </Box>
        )}
      </Box>
      {!id && isEditMode ? (
        <Alert severity="error">ID недвижимости не определен!</Alert>
      ) : (
        <PropertyOwnersForm mode={mode} property_id={id} onSuccess={() => {}} />
      )}
    </Box>
  );
};
