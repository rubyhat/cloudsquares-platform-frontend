import { TFunction } from "i18next";

/**
 * Генерирует локализуемый стартовый документ (инструкцию) для редактора.
 * Без упоминаний библиотек и без изображений — только демонстрация возможностей.
 */
export function buildIntroContent(t: TFunction<"translation", undefined>) {
  return {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { textAlign: null, level: 1 },
        content: [
          {
            type: "text",
            text: t("tipTapEditor.intro.title", {
              defaultValue: "Редактор описания",
            }),
          },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: null },
        content: [
          {
            type: "text",
            text:
              t("tipTapEditor.intro.welcome1", {
                defaultValue: "Это поле поддерживает",
              }) + " ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: t("tipTapEditor.intro.boldWord", { defaultValue: "жирный" }),
          },
          { type: "text", text: ", " },
          {
            type: "text",
            marks: [{ type: "italic" }],
            text: t("tipTapEditor.intro.italicWord", {
              defaultValue: "курсив",
            }),
          },
          { type: "text", text: ", " },
          {
            type: "text",
            marks: [{ type: "underline" }],
            text: t("tipTapEditor.intro.underlineWord", {
              defaultValue: "подчёркивание",
            }),
          },
          {
            type: "text",
            text:
              " " +
              t("tipTapEditor.intro.welcome2", {
                defaultValue: "и другие форматы.",
              }),
          },
        ],
      },
      {
        type: "blockquote",
        content: [
          {
            type: "paragraph",
            attrs: { textAlign: null },
            content: [
              {
                type: "text",
                marks: [{ type: "italic" }],
                text: t("tipTapEditor.intro.quote", {
                  defaultValue:
                    "Выделите текст и используйте панель инструментов или горячие клавиши.",
                }),
              },
              { type: "text", text: " " },
              { type: "text", marks: [{ type: "code" }], text: "Ctrl/⌘+B" },
              {
                type: "text",
                text:
                  " — " +
                  t("tipTapEditor.intro.shortcutBold", {
                    defaultValue: "жирный",
                  }) +
                  ", ",
              },
              { type: "text", marks: [{ type: "code" }], text: "Ctrl/⌘+I" },
              {
                type: "text",
                text:
                  " — " +
                  t("tipTapEditor.intro.shortcutItalic", {
                    defaultValue: "курсив",
                  }) +
                  ", ",
              },
              { type: "text", marks: [{ type: "code" }], text: "Ctrl/⌘+U" },
              {
                type: "text",
                text:
                  " — " +
                  t("tipTapEditor.intro.shortcutUnderline", {
                    defaultValue: "подчёркивание",
                  }) +
                  ".",
              },
            ],
          },
        ],
      },
      {
        type: "heading",
        attrs: { textAlign: null, level: 2 },
        content: [
          {
            type: "text",
            text: t("tipTapEditor.intro.featuresTitle", {
              defaultValue: "Что умеет редактор",
            }),
          },
        ],
      },
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: "left" },
                content: [
                  {
                    type: "text",
                    text: t("tipTapEditor.intro.featureHeadings", {
                      defaultValue: "Заголовки H2/H3 для структуры",
                    }),
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: "left" },
                content: [
                  {
                    type: "text",
                    text: t("tipTapEditor.intro.featureLists", {
                      defaultValue: "Маркированные и нумерованные списки",
                    }),
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: "left" },
                content: [
                  {
                    type: "text",
                    text: t("tipTapEditor.intro.featureQuote", {
                      defaultValue: "Цитаты для акцентов",
                    }),
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: "left" },
                content: [
                  {
                    type: "text",
                    marks: [
                      {
                        type: "highlight",
                        attrs: { color: "var(--tt-color-highlight-yellow)" },
                      },
                    ],
                    text: t("tipTapEditor.intro.featureHighlight", {
                      defaultValue: "Подсветка текста",
                    }),
                  },
                  {
                    type: "text",
                    text:
                      " " +
                      t("tipTapEditor.intro.featureHighlightTail", {
                        defaultValue: "для важной информации",
                      }),
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: "left" },
                content: [
                  {
                    type: "text",
                    text:
                      t("tipTapEditor.intro.featureLink1", {
                        defaultValue: "Ссылки",
                      }) + " ",
                  },
                  {
                    type: "text",
                    marks: [
                      {
                        type: "link",
                        attrs: {
                          href: "https://example.com",
                          target: "_blank",
                          rel: "noopener noreferrer nofollow",
                          class: null,
                        },
                      },
                    ],
                    text: t("tipTapEditor.intro.featureLink2", {
                      defaultValue: "на внешние ресурсы",
                    }),
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: "left" },
                content: [
                  {
                    type: "text",
                    text: t("tipTapEditor.intro.featureAlign", {
                      defaultValue:
                        "Выравнивание текста: влево/центр/вправо/по ширине",
                    }),
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: "left" },
                content: [
                  {
                    type: "text",
                    text: t("tipTapEditor.intro.featureLine", {
                      defaultValue:
                        "Горизонтальная линия для разделения блоков",
                    }),
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                attrs: { textAlign: "left" },
                content: [
                  {
                    type: "text",
                    text: t("tipTapEditor.intro.featureSuperSub", {
                      defaultValue: "Надстрочный и подстрочный индексы",
                    }),
                  },
                  { type: "text", text: " (x" },
                  { type: "text", marks: [{ type: "superscript" }], text: "2" },
                  { type: "text", text: ", H" },
                  { type: "text", marks: [{ type: "subscript" }], text: "2" },
                  { type: "text", text: "O)" },
                ],
              },
            ],
          },
        ],
      },
      { type: "horizontalRule" },
      {
        type: "heading",
        attrs: { textAlign: "left", level: 2 },
        content: [
          {
            type: "text",
            text: t("tipTapEditor.intro.howToTitle", {
              defaultValue: "Как пользоваться",
            }),
          },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: "left" },
        content: [
          {
            type: "text",
            text:
              t("tipTapEditor.intro.howTo1", {
                defaultValue: "Выделите текст и примените формат из панели.",
              }) + " ",
          },
          {
            type: "text",
            text:
              t("tipTapEditor.intro.howTo2", {
                defaultValue: "Используйте горячие клавиши",
              }) + ": ",
          },
          { type: "text", marks: [{ type: "code" }], text: "Ctrl/⌘+B" },
          { type: "text", text: ", " },
          { type: "text", marks: [{ type: "code" }], text: "Ctrl/⌘+I" },
          { type: "text", text: ", " },
          { type: "text", marks: [{ type: "code" }], text: "Ctrl/⌘+U" },
          { type: "text", text: "." },
        ],
      },
      {
        type: "paragraph",
        attrs: { textAlign: "left" },
      },
    ],
  };
}
