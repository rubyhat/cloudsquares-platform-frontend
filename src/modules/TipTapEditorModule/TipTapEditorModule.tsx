import { Box } from "@mui/material";
import { Controller, Path, useFormContext } from "react-hook-form";
import { SimpleEditor } from "./components/tiptap-templates/simple/simple-editor";
import "./styles/_variables.scss";
import "./styles/_keyframe-animations.scss";
import { editorWrapperStyles } from "./styles";
import React from "react";
import { buildIntroContent } from "./lib/buildIntroContent";
import { useTranslation } from "react-i18next";

interface TipTapEditorModuleProps<T extends Record<string, unknown>> {
  /** Имя поля в схеме формы, куда будет сохраняться HTML контент редактора */
  name: Path<T>;
  /** Неактивное состояние редактора (проксируется в TipTap editable = !disabled) */
  disabled?: boolean;
}

export const TipTapEditorModule = <T extends Record<string, unknown>>({
  name,
  disabled,
}: TipTapEditorModuleProps<T>) => {
  const { control } = useFormContext<T>();
  const { t } = useTranslation();
  const initialContent = React.useMemo(() => buildIntroContent(t), [t]);

  return (
    <Box className="tip-tap-editor-module" sx={editorWrapperStyles}>
      {/* Оборачиваем редактор в Controller, чтобы синхронизировать значение с формой */}
      <Controller
        name={name}
        control={control}
        // ⛔️ Важно: значение формы — это HTML (string). Можно хранить JSON, если нужно — тогда меняем сериализацию в SimpleEditor.
        render={({ field }) => {
          const fieldValue =
            field.value === "" ? initialContent : (field.value as string);
          return (
            <SimpleEditor
              value={fieldValue}
              onChange={(html) => field.onChange(html)}
              disabled={disabled}
            />
          );
        }}
      />
    </Box>
  );
};
