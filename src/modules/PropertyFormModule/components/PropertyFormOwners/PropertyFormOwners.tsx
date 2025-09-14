import { Box, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { PropertyFormMode } from "@/shared/interfaces/PropertyForm";
import { useGetAllPropertyOwnersByPropertyID } from "@/shared/hooks/propertyOwners";
import { AxiosErrorAlertMessage } from "@/shared/components/AxiosErrorAlertMessage";
import { PropertyOwnerCard } from "@/shared/components/PropertyOwnerCard";
import { PropertyOwnersForm } from "../PropertyOwnersForm";

interface PropertyFormOwnersProps {
  mode: PropertyFormMode;
}

export const PropertyFormOwners = ({ mode }: PropertyFormOwnersProps) => {
  const { id } = useParams<{ id: string }>();
  const propertyId = id ?? "";

  const { data, isLoading, error } =
    useGetAllPropertyOwnersByPropertyID(propertyId);
  const owners = data?.data ?? [];

  return (
    <Box display="grid" gap={2}>
      <Box>
        <Typography component="h3" variant="h6" mb={1.5}>
          Владельцы {owners.length ? `(${owners.length})` : ""}
        </Typography>

        {isLoading && (
          <Box
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            }}
          >
            <Skeleton variant="rounded" height={150} />
            <Skeleton variant="rounded" height={150} />
          </Box>
        )}

        {error && <AxiosErrorAlertMessage error={error} />}

        {mode === PropertyFormMode.edit &&
          !isLoading &&
          !error &&
          owners.length === 0 && (
            <Typography variant="body2" color="text.secondary">
              Владельцев пока нет.
            </Typography>
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
      <PropertyOwnersForm mode={mode} />
    </Box>
  );
};
