"use client";

import * as React from "react";
import { useHotkeys } from "react-hotkeys-hook";
import type { Editor } from "@tiptap/react";
import { useTranslation } from "react-i18next";

// --- Hooks ---
import { useTiptapEditor } from "@/modules/TipTapEditorModule/hooks/use-tiptap-editor";
import { useIsMobile } from "@/modules/TipTapEditorModule/hooks/use-mobile";

// --- Lib ---
import {
  isMarkInSchema,
  isNodeTypeSelected,
} from "@/modules/TipTapEditorModule/lib/tiptap-utils";

// --- Icons ---
import { BoldIcon } from "@/modules/TipTapEditorModule/components/tiptap-icons/bold-icon";
import { Code2Icon } from "@/modules/TipTapEditorModule/components/tiptap-icons/code2-icon";
import { ItalicIcon } from "@/modules/TipTapEditorModule/components/tiptap-icons/italic-icon";
import { StrikeIcon } from "@/modules/TipTapEditorModule/components/tiptap-icons/strike-icon";
import { SubscriptIcon } from "@/modules/TipTapEditorModule/components/tiptap-icons/subscript-icon";
import { SuperscriptIcon } from "@/modules/TipTapEditorModule/components/tiptap-icons/superscript-icon";
import { UnderlineIcon } from "@/modules/TipTapEditorModule/components/tiptap-icons/underline-icon";
import { TFunction } from "i18next";

/**
 * Допустимые типы форматирования (marks) в редакторе.
 * Это compile-time тип для тайпсейфти. Фактические лейблы берём из i18n.
 */
export type Mark =
  | "bold"
  | "italic"
  | "strike"
  | "code"
  | "underline"
  | "superscript"
  | "subscript";

/**
 * Конфигурация для mark-функциональности.
 */
export interface UseMarkConfig {
  /**
   * Экземпляр редактора Tiptap. Если не передан, берём из контекста.
   */
  editor?: Editor | null;
  /**
   * Тип mark, которым хотим управлять.
   */
  type: Mark;
  /**
   * Прятать ли кнопку, если mark недоступен в текущем состоянии.
   * @default false
   */
  hideWhenUnavailable?: boolean;
  /**
   * Коллбек после успешного переключения mark.
   */
  onToggled?: () => void;
}

/** Иконки для каждого mark. */
export const markIcons = {
  bold: BoldIcon,
  italic: ItalicIcon,
  underline: UnderlineIcon,
  strike: StrikeIcon,
  code: Code2Icon,
  superscript: SuperscriptIcon,
  subscript: SubscriptIcon,
};

/** Горячие клавиши для каждого mark. */
export const MARK_SHORTCUT_KEYS: Record<Mark, string> = {
  bold: "mod+b",
  italic: "mod+i",
  underline: "mod+u",
  strike: "mod+shift+s",
  code: "mod+e",
  superscript: "mod+.",
  subscript: "mod+,",
};

/**
 * Ключи переводов для лейблов mark-кнопок.
 * Используем пространство имён translation.json:
 * tipTapEditor.toolbar.bold / italic / underline / strike / code / ...
 */
const MARK_I18N_KEYS: Record<Mark, string> = {
  bold: "tipTapEditor.toolbar.bold",
  italic: "tipTapEditor.toolbar.italic",
  underline: "tipTapEditor.toolbar.underline",
  strike: "tipTapEditor.toolbar.strike",
  code: "tipTapEditor.toolbar.code",
  superscript: "tipTapEditor.toolbar.superscript",
  subscript: "tipTapEditor.toolbar.subscript",
};

/**
 * Проверяет, можно ли переключить указанный mark в текущем состоянии.
 */
export function canToggleMark(editor: Editor | null, type: Mark): boolean {
  if (!editor?.isEditable) return false;
  if (!isMarkInSchema(type, editor) || isNodeTypeSelected(editor, ["image"]))
    return false;

  return editor.can().toggleMark(type);
}

/**
 * Проверяет, активен ли указанный mark.
 */
export function isMarkActive(editor: Editor | null, type: Mark): boolean {
  if (!editor?.isEditable) return false;
  return editor.isActive(type);
}

/**
 * Переключает указанный mark.
 */
export function toggleMark(editor: Editor | null, type: Mark): boolean {
  if (!editor?.isEditable) return false;
  if (!canToggleMark(editor, type)) return false;

  return editor.chain().focus().toggleMark(type).run();
}

/**
 * Определяет, следует ли показывать кнопку для указанного mark.
 */
export function shouldShowButton(props: {
  editor: Editor | null;
  type: Mark;
  hideWhenUnavailable: boolean;
}): boolean {
  const { editor, type, hideWhenUnavailable } = props;

  if (!editor?.isEditable) return false;
  if (!isMarkInSchema(type, editor)) return false;

  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canToggleMark(editor, type);
  }

  return true;
}

/**
 * Возвращает человеко-читаемое имя mark (fallback, если нет перевода).
 */
function getReadableName(type: Mark): string {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

/**
 * Возвращает локализованный лейбл для указанного mark.
 * Если ключа в i18n нет, вернётся fallback (getReadableName).
 */
export function getMarkLabel(
  type: Mark,
  t: TFunction<"translation", undefined>,
) {
  const key = MARK_I18N_KEYS[type];
  return t(key, { defaultValue: getReadableName(type) });
}

/**
 * Хук, предоставляющий функциональность для работы с mark в Tiptap.
 *
 * Возвращает видимость, активность, обработчики и **локализованный label**.
 */
export function useMark(config: UseMarkConfig) {
  const {
    editor: providedEditor,
    type,
    hideWhenUnavailable = false,
    onToggled,
  } = config;

  const { editor } = useTiptapEditor(providedEditor);
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = React.useState<boolean>(true);
  const canToggle = canToggleMark(editor, type);
  const isActive = isMarkActive(editor, type);

  React.useEffect(() => {
    if (!editor) return;

    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton({ editor, type, hideWhenUnavailable }));
    };

    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);

    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, type, hideWhenUnavailable]);

  const handleMark = React.useCallback(() => {
    if (!editor) return false;
    const success = toggleMark(editor, type);
    if (success) onToggled?.();
    return success;
  }, [editor, type, onToggled]);

  useHotkeys(
    MARK_SHORTCUT_KEYS[type],
    (event) => {
      event.preventDefault();
      handleMark();
    },
    {
      enabled: isVisible && canToggle,
      enableOnContentEditable: !isMobile,
      enableOnFormTags: true,
    },
  );

  return {
    isVisible,
    isActive,
    handleMark,
    canToggle,
    /** Локализованный лейбл для aria-label/tooltip */
    label: getMarkLabel(type, t),
    shortcutKeys: MARK_SHORTCUT_KEYS[type],
    Icon: markIcons[type],
  };
}
