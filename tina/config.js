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
      //   name: "post",
      //   label: "Posts",
      //   path: "content/posts",
      //   fields: [
      //     {
      //       type: "string",
      //       name: "title",
      //       label: "Title",
      //       isTitle: true,
      //       required: true,
      //     },
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body",
      //       isBody: true,
      //     },
      //   ],
      //   ui: {
      //     // This is an DEMO router. You can remove this to fit your site
      //     router: ({ document }) => `/demo/blog/${document._sys.filename}`,
      //   },
      // },
      
      {
        name: "partner",
        label: "Our Partners",
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
        name: "services",
        label: "Our Services",
        path: "content/services",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Service Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "name_ar",
            label: "Service Name In Arabic",
            required: true,
          },
          {
            type:"image",
            name:"icon",
            label:"Service Logo",
            required: true
          },
          {
            type: "string",
            name: "shortDescription",
            label: "Short Description",
            required: true,
            ui: {
              component: "textarea"
            }
          
          },
          {
            type: "string",
            name: "shortDescription_ar",
            label: "Short Description In Arabic",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "rich-text",
            name: "serviceDetails",
            label: "Service Details",
            isDescription: true,
            required:true,
          },
         
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/productAndService/${document._sys.filename}`,
        },
      },

      {
        name: "projects",
        label: "Our Projects",
        path: "content/projects",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Project Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Project Type",
            required: true,
          },
          {
            type: "image",
            name: "coverPhoto",
            label: "Project Logo/Cover Image",
            required: true,
            
          },
          
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/home/${document._sys.filename}`,
        },
      },

      {
        name: "teamMeambers",
        label: "Team Members",
        path: "content/teamMembers",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "designation",
            label: "Designation",
            required: true,
          },
          {
            type: "image",
            name: "photo",
            label: "Photo",
            required: true,
            
          },
         
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/home/${document._sys.filename}`,
        },
      },
      {
        name: "teamWorkingProcess",
        label: "Working Process",
        path: "content/workingProcess",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "title_ar",
            label: "Title In Arabic",
            required: true,
          },
         

          {
            type: "string",
            name: "shortDescription",
            label: "Short Description",
            required: true,

            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "shortDescription_ar",
            label: "Short Description In Arabic",
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
        name: "workingVideo",
        label: "Working Video",
        path: "content/videos",
        fields: [
          {
            type: "string",
            name: "videoType",
            label: "Type of Video/Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "workingVideoLink",
            label: "Video Link (Suggest Youtube)",
            required: true,
          },
          
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/aboutUs/${document._sys.filename}`,
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
        name: "aboutUsInfo",
        label: "About Us",
        path: "content/aboutUs",
        fields: [{
          label: "Masarat Information",
          name: "aboutMasarat",
          type: "object",
          list: true,
          templates: [
            {
              label: "About Masarat",
              name: "aboutMasarat",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  type: "string",
                  required: true
                },
                {
                  label: "Title In Arabic",
                  name: "title_ar",
                  type: "string"
                },
                {
                  label:"Cover Photo",
                  name:'coverPhoto',
                  type:'image',
                  required:true
                },
                {
                  label: "Description",
                  name: "description",
                  type: "string",
                  required: true,
                  ui: {
                    component: "textarea"
                  }
                },
                {
                  label: "Description In Arabic",
                  name: "description_ar",
                  type: "string",
                  ui: {
                    component: "textarea"
                  }
                }
              ]
            },
            {
              label: "Management Info",
              name: "managementInfo",
              fields: [
                {
                  label: "Name",
                  name: "name",
                  type: "string",
                  required:true
                },
                {
                  label: "Designation",
                  name: "designation",
                  type: "string",
                  required:true
                },
                {
                  label:"Photo",
                  name:'photo',
                  type:'image',
                  required:true
                },
                
                {
                  label: "Quote",
                  name: "quote",
                  type: "object",
                  fields:[
                    {
                      label: "Title",
                      name: "title",
                      type: "string",
                      required:true
                    },
                    {
                      label: "Title In Arabic",
                      name: "title_ar",
                      type: "string",
                     
                    },
                    {
                      label: "Description",
                      name: "description",
                      type: "string",
                      required:true,
                      ui: {
                        component: "textarea"
                      }
                    },
                    {
                      label: "Description In Arabic",
                      name: "description_ar",
                      type: "string",
                      
                      ui: {
                        component: "textarea"
                      }
                    }
                  ]
                  
                }
              ]
            },
            {
              label: "Project Summery",
              name: "projectSummery",
              fields: [
                {
                  label: "Happy Clients",
                  name: "happyClients",
                  type: "string",
                  required:true
                },
                {
                  label: "Project Completed",
                  name: "projectCompleted",
                  type: "string",
                  required:true
                },
                {
                  label: "Cooperation Company",
                  name: "cooperationCompany",
                  type: "string",
                  required:true
                }
              ]
            }
          ]
        }],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/aboutUs/${document._sys.filename}`,
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
