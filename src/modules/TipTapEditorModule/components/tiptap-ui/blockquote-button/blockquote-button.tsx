import React from "react";

// --- Tiptap UI ---
import type { UseBlockquoteConfig } from "@/modules/TipTapEditorModule/components/tiptap-ui/blockquote-button";
import {
  BLOCKQUOTE_SHORTCUT_KEY,
  useBlockquote,
} from "@/modules/TipTapEditorModule/components/tiptap-ui/blockquote-button";

// --- Hooks ---
import { useTiptapEditor } from "@/modules/TipTapEditorModule/hooks/use-tiptap-editor";

// --- Lib ---
import { parseShortcutKeys } from "@/modules/TipTapEditorModule/lib/tiptap-utils";

// --- UI Primitives ---
import type { ButtonProps } from "@/modules/TipTapEditorModule/components/tiptap-ui-primitive/button";
import { Button } from "@/modules/TipTapEditorModule/components/tiptap-ui-primitive/button";
import { Badge } from "@/modules/TipTapEditorModule/components/tiptap-ui-primitive/badge";
import { useTranslation } from "react-i18next";

export interface BlockquoteButtonProps
  extends Omit<ButtonProps, "type">,
    UseBlockquoteConfig {
  /**
   * Optional text to display alongside the icon.
   */
  text?: string;
  /**
   * Optional show shortcut keys in the button.
   * @default false
   */
  showShortcut?: boolean;
}

export function BlockquoteShortcutBadge({
  shortcutKeys = BLOCKQUOTE_SHORTCUT_KEY,
}: {
  shortcutKeys?: string;
}) {
  return <Badge>{parseShortcutKeys({ shortcutKeys })}</Badge>;
}

/**
 * Button component for toggling blockquote in a Tiptap editor.
 *
 * For custom button implementations, use the `useBlockquote` hook instead.
 */
export const BlockquoteButton = React.forwardRef<
  HTMLButtonElement,
  BlockquoteButtonProps
>(
  (
    {
      editor: providedEditor,
      text,
      hideWhenUnavailable = false,
      onToggled,
      showShortcut = false,
      onClick,
      children,
      ...buttonProps
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const { editor } = useTiptapEditor(providedEditor);
    const {
      isVisible,
      canToggle,
      isActive,
      handleToggle,
      label,
      shortcutKeys,
      Icon,
    } = useBlockquote({
      editor,
      hideWhenUnavailable,
      onToggled,
    });

    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleToggle();
      },
      [handleToggle, onClick],
    );

    if (!isVisible) {
      return null;
    }

    return (
      <Button
        type="button"
        data-style="ghost"
        data-active-state={isActive ? "on" : "off"}
        role="button"
        tabIndex={-1}
        disabled={!canToggle}
        data-disabled={!canToggle}
        aria-label={label}
        aria-pressed={isActive}
        tooltip={t("tipTapEditor.toolbar.blockquote")}
        onClick={handleClick}
        {...buttonProps}
        ref={ref}
      >
        {children ?? (
          <>
            <Icon className="tiptap-button-icon" />
            {text && <span className="tiptap-button-text">{text}</span>}
            {showShortcut && (
              <BlockquoteShortcutBadge shortcutKeys={shortcutKeys} />
            )}
          </>
        )}
      </Button>
    );
  },
);

BlockquoteButton.displayName = "BlockquoteButton";
