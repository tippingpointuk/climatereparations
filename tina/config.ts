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
  clientId: "192cadb9-d8c3-4572-a401-8da13722c3b4", // Get this from tina.io
  token: "2ceec44adbf19d7d68a254278a86d09111737410", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "assets/images",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home Page",
        name: "home_page",
        path: "",
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
            type: "object",
            name: "header",
            label: "Header",
            fields: [
              {
                type: "rich-text",
                name: "text",
                label: "Text",
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
            label: "Main Blocks",
            list: true,
            fields: [
              {
                type: "boolean",
                name: "map",
                label: "Show Map as Picture",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Text",
              },
              {
                type: "string",
                name: "custom_id",
                nameOverride: "id",
                label: "Jump Link - the #link to this section of the page",
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
                type: "rich-text",
                name: "decoration",
                label: "Decoration - Content Above the Image",
              },
              {
                type: "image",
                name: "background_image",
                label: "Background Image of Decoration",
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
            label: "Credits to add at the bottom of the page",
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
        label: "Templates",
        name: "templates",
        path: "_templates",
        match: {
          include: "**/*",
        },
        fields: [
          ...templateFields(),
        ],
      },
      {
        format: "yml",
        label: "Main Site Config",
        name: "main_site_config",
        path: "",
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
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "page",
        path: "",
        match: {
          exclude: "index"
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true
          },
          {
            name: "image",
            label: "Share Image",
            type: "image",
          },
          {
            name: "top_image",
            label: "Top Image",
            type: "image",
          },
          {
            name: "body",
            label: "Body",
            type: "rich-text",
            isBody: true
          }
        ]
      }
    ],
  },
});
