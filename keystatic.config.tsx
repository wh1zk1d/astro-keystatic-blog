import { config, collection, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    homepage: singleton({
      label: "Homepage",
      directory: "src/content/_homepage",
      schema: {
        headline: fields.text({ label: "Headline" }),
        subline: fields.text({ label: "Subline" }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
  },
});
