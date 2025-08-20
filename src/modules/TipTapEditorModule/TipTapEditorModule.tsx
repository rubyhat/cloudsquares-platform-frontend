import "./styles/_variables.scss";
import "./styles/_keyframe-animations.scss";
import { SimpleEditor } from "./components/tiptap-templates/simple/simple-editor";
import { Box } from "@mui/material";

export const TipTapEditorModule = () => {
  return (
    <Box
      className="tip-tap-editor-module"
      sx={{
        maxHeight: 1100,
        minHeight: 500,
        overflowY: "scroll",
        border: "1px solid",
        borderColor: "customColors.grey300",
        borderRadius: 1,
      }}
    >
      <SimpleEditor />
    </Box>
  );
};
