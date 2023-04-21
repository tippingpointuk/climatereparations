import { defineConfig } from "tinacms";
import { block_layoutFields } from "./templates";
import { configFields } from "./templates";
import { pageFields } from "./templates";
import { resourceFields } from "./templates";
import { storiesFields } from "./templates";
import { templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "691a3973-339f-41a2-9b46-0153ffb1171d", // Get this from tina.io
  token: "59885ff1c31006a2c1ae2fe48ae97f21ab45af83", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "assets/images",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "assets/images",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home Page",
        name: "home_page",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
          {
            type: "object",
            name: "header",
            label: "Header",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "buttons",
                label: "Buttons",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                  {
                    type: "string",
                    name: "target",
                    label: "Target",
                  },
                ],
              },
              {
                type: "object",
                name: "border_bottom",
                label: "Border Bottom",
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                  },
                  {
                    type: "boolean",
                    name: "reflect",
                    label: "Reflect?",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "blocks",
            label: "Blocks",
            list: true,
            fields: [
              {
                type: "boolean",
                name: "map",
                label: "map",
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "custom_id",
                nameOverride: "id",
                label: "JumpLink",
              },
              {
                type: "object",
                name: "buttons",
                label: "Buttons",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "text",
                  },
                  {
                    type: "string",
                    name: "target",
                    label: "target",
                  },
                ],
              },
              {
                type: "string",
                name: "decoration",
                label: "Decoration",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "background_image",
                label: "Background Image",
              },
            ],
          },
          {
            type: "string",
            name: "invert",
            label: "Invert Color For Blocks which are...",
            options: ["odd", "even"],
          },
          {
            type: "string",
            name: "credits",
            label: "Credits",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
        ],
      },
      {
        format: "md",
        label: "Resources",
        name: "resources",
        path: "_resources",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...resourceFields(),
        ],
      },
      {
        format: "md",
        label: "Templates",
        name: "templates",
        path: "_templates",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...templateFields(),
        ],
      },
      {
        format: "yml",
        label: "Main Site Config",
        name: "main_site_config",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_config",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "email",
            label: "email",
          },
          {
            type: "string",
            name: "tagline",
            label: "tagline",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "string",
            name: "url",
            label: "url",
          },
          {
            type: "string",
            name: "permalink",
            label: "permalink",
          },
          {
            type: "string",
            name: "background_color",
            label: "background_color",
          },
          {
            type: "image",
            name: "logo",
            label: "logo",
          },
          {
            type: "image",
            name: "logo_light",
            label: "logo_light",
          },
          {
            type: "image",
            name: "logo_square",
            label: "logo_square",
          },
          {
            type: "boolean",
            name: "invert_brand_text",
            label: "invert_brand_text",
          },
          {
            type: "boolean",
            name: "invert_accent_text",
            label: "invert_accent_text",
          },
          {
            type: "string",
            name: "instagram",
            label: "instagram",
          },
          {
            type: "string",
            name: "twitter",
            label: "twitter",
          },
          {
            type: "string",
            name: "facebook",
            label: "facebook",
          },
          {
            type: "string",
            name: "counter",
            label: "Count down to...",
          },
          {
            type: "object",
            name: "nav_links",
            label: "Navigation Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "url",
                label: "url",
              },
              {
                type: "string",
                name: "title",
                label: "title",
              },
            ],
          },
          {
            type: "boolean",
            name: "future",
            label: "future",
          },
          {
            type: "string",
            name: "copyright_notice",
            label: "copyright_notice",
          },
          {
            type: "object",
            name: "collections",
            label: "collections",
            fields: [
              {
                type: "object",
                name: "posts",
                label: "posts",
                fields: [
                  {
                    type: "string",
                    name: "permalink",
                    label: "permalink",
                  },
                ],
              },
              {
                type: "object",
                name: "faqs",
                label: "faqs",
                fields: [
                  {
                    type: "boolean",
                    name: "output",
                    label: "output",
                  },
                  {
                    type: "string",
                    name: "permalink",
                    label: "permalink",
                  },
                ],
              },
              {
                type: "object",
                name: "trainings",
                label: "trainings",
                fields: [
                  {
                    type: "boolean",
                    name: "output",
                    label: "output",
                  },
                ],
              },
              {
                type: "object",
                name: "actions",
                label: "actions",
                fields: [
                  {
                    type: "boolean",
                    name: "output",
                    label: "output",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "defaults",
            label: "defaults",
            list: true,
            fields: [
              {
                type: "object",
                name: "scope",
                label: "scope",
                fields: [
                  {
                    type: "string",
                    name: "path",
                    label: "path",
                  },
                ],
              },
              {
                type: "object",
                name: "values",
                label: "values",
                fields: [
                  {
                    type: "boolean",
                    name: "sitemap",
                    label: "sitemap",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "airtable",
            label: "airtable",
            fields: [
              {
                type: "object",
                name: "faqs",
                label: "faqs",
                fields: [
                  {
                    type: "string",
                    name: "app",
                    label: "app",
                  },
                  {
                    type: "string",
                    name: "table",
                    label: "table",
                  },
                  {
                    type: "string",
                    name: "view",
                    label: "view",
                  },
                ],
              },
              {
                type: "object",
                name: "resources",
                label: "resources",
                fields: [
                  {
                    type: "string",
                    name: "app",
                    label: "app",
                  },
                  {
                    type: "string",
                    name: "table",
                    label: "table",
                  },
                  {
                    type: "string",
                    name: "view",
                    label: "view",
                  },
                ],
              },
              {
                type: "object",
                name: "partners",
                label: "partners",
                fields: [
                  {
                    type: "string",
                    name: "app",
                    label: "app",
                  },
                  {
                    type: "string",
                    name: "table",
                    label: "table",
                  },
                  {
                    type: "string",
                    name: "view",
                    label: "view",
                  },
                  {
                    type: "string",
                    name: "fields",
                    label: "fields",
                    list: true,
                  },
                ],
              },
              {
                type: "object",
                name: "trainings",
                label: "trainings",
                fields: [
                  {
                    type: "string",
                    name: "app",
                    label: "app",
                  },
                  {
                    type: "string",
                    name: "table",
                    label: "table",
                  },
                  {
                    type: "string",
                    name: "view",
                    label: "view",
                  },
                  {
                    type: "string",
                    name: "fields",
                    label: "fields",
                    list: true,
                  },
                  {
                    type: "object",
                    name: "collection",
                    label: "collection",
                    fields: [
                      {
                        type: "string",
                        name: "slug",
                        label: "slug",
                      },
                      {
                        type: "string",
                        name: "layout",
                        label: "layout",
                      },
                      {
                        type: "string",
                        name: "content",
                        label: "content",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "jekyll_get_json",
            label: "jekyll_get_json",
            list: true,
            fields: [
              {
                type: "string",
                name: "data",
                label: "data",
              },
              {
                type: "string",
                name: "json",
                label: "json",
              },
            ],
          },
          {
            type: "object",
            name: "map",
            label: "map",
            fields: [
              {
                type: "string",
                name: "lat",
                label: "lat",
              },
              {
                type: "string",
                name: "lng",
                label: "lng",
              },
            ],
          },
          {
            type: "string",
            name: "plugins",
            label: "plugins",
            list: true,
          },
        ],
      },
    ],
  },
});
