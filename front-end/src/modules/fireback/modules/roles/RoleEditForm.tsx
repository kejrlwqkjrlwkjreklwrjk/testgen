import { FormSelectMultiple } from "../../components/forms/form-select/FormSelect";
import { FormText } from "../../components/forms/form-text/FormText";
import { EntityFormProps } from "../../definitions/definitions";
import { useT } from "../../hooks/useT";
import { RoleEntity } from "../../sdk/modules/workspaces/RoleEntity";
import { useGetCapabilities } from "../../sdk/modules/workspaces/useGetCapabilities";
import { RolePermissionTree } from "./RolePermissionTree";

/**
 * Server does not return capabilities list id, because it's used only on post/patch
 * this function casts it regardless to array<string> so form would work.
 */
const normalize = (caps: any, capList: any) => {
  if (caps?.length && !capList?.length) {
    return caps.map((t: any) => t.uniqueId);
  }

  return capList || [];
};

export const RoleEditForm = ({
  form,
  isEditing,
}: EntityFormProps<Partial<RoleEntity>>) => {
  const { values, setFieldValue, errors } = form;
  const t = useT();
  return (
    <>
      <FormText
        value={values.name}
        onChange={(value) =>
          setFieldValue(RoleEntity.Fields.name, value, false)
        }
        errorMessage={errors.name}
        label={t.wokspaces.invite.role}
        autoFocus={!isEditing}
        hint={t.wokspaces.invite.roleHint}
      />

      <RolePermissionTree
        onChange={(value) =>
          setFieldValue(RoleEntity.Fields.capabilitiesListId, value, false)
        }
        value={normalize(values.capabilities, values.capabilitiesListId)}
      />
    </>
  );
};
