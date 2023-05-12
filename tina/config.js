import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN_ID,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    
    collections: [
      // {
      //   name: 'page',
      //   label: 'A page of the website',
      //   format: 'mdx',
      //   templates: [
      //     {
      //       name: 'content',
      //       label: 'Content Page',
      //       path: 'content/pages',
      //       fields: [
      //         {
      //           type: "string",
      //           name: "name",
      //           label: "Name",
      //           isTitle: true,
      //           required: true,
      //         },
      //       ],
      //     },
      //     {
      //       name: 'marketing',
      //       label: 'Marketing Page',
      //       path: 'content/marketing',
      //       fields: [
      //         {
      //           type: "string",
      //           name: "name",
      //           label: "Name",
      //           isTitle: true,
      //           required: true,
      //         },
      //       ],
      //     },
      //   ],
      // },

      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
      
      {
        name: "partner",
        label: "Our Partner",
        path: "content/partners",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Brand Name",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "logo",
            label: "Brand Logo",
            required: true,
            
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/home/${document._sys.filename}`,
        },
      },
      
      {
        name: "clientReview",
        label: "Client Review",
        path: "content/clientReview",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },

          // {
          //   type: "datetime",
          //   name: "date",
          //   label: "Date",
          //   // ui: {
          //   //   timeFormat: "HH:mm"
          //   // },
          //   isDate:true,
          //   required:true,
          // },

          {
            type: 'image',
            label: 'Photo',
            name: 'photo',
            required: true,
          },
          // {
          //   type: 'image',
          //   label: 'Thumbnail Image',
          //   name: 'thumbnailImage',
          //   isThumbnail:true,
          //   required:true,
          // },

          {
            type: "string",
            name: "designation",
            label: "Designation",
            required: true,
          },

          {
            type: "number",
            name:"rating",
            label:"Rating",
            required:true,
          },

          {
            type: "string",
            name: "opinion",
            label: "Opinion",
            required: true,

            ui: {
              component: "textarea"
            }
          },


          // {
          //   type: "rich-text",
          //   name: "description",
          //   label: "Description",
          //   isDescription: true,
          //   required: true,
          // },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/home/${document._sys.filename}`,
        },
      },
      {
        name: "faq",
        label: "FAQ Section",
        path: "content/faq",
        fields: [
          {
            type: "string",
            name: "question",
            label: "Question",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "question_ar",
            label: "Question In Arabic",
            // required: true,
          },

          {
            type: "string",
            name: "answer",
            label: "Answer",
            required: true,

            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "answer_ar",
            label: "Answer In Arabic",
            // required: true,

            ui: {
              component: "textarea"
            }
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/productAndService/${document._sys.filename}`,
        },
      },
      {
        name: "contactInfo",
        label: "Contact Info",
        path: "content/contactInfo",
        
        fields: [
          {name:'contactInformation',label:'Contact Information', type:'object',fields:[
            {
              type: "string",
              name: "location",
              label: "Location",
              required: true,
            },
            {
              type: "string",
              name: "phone",
              label: "Phone Number",
              required: true,
            },
            {
              type: "string",
              name: "email",
              label: "Email Address",
              required: true,
              
            },

          ]}
          
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/contactUs/${document._sys.filename}`,
        },
      },
      
    ],
  },
});
