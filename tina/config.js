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

      {
        name: "masaratHeroSection",
        label: "Hero Section",
        path: "content/heroSection",

        fields: [
          {
            name: 'homeheroSection',
            label: 'Home Page Hero Section',
            list: true,
            type: 'object',
            fields: [
              {
                type: "string",
                name: "titleKeyword",
                label: "Title Keyword (short)",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "titleKeyword_ar",
                label: "Title Keyword  In Arabic(short)",
              },
              // {
              //   type: "image",
              //   name: "keyLogo",
              //   label: "Icon/Logo",
              //   required: true,
              // },

              {
                type: "string",
                name: "title",
                label: "Title",
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

                ui: {
                  component: "textarea"
                }
              },
            ],
          }

        ],
      },

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
            type: "image",
            name: "icon",
            label: "Service Logo",
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
            // isBody: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "serviceDetails_ar",
            label: "Service Details In Arabic",
            // isBody: true,
            required: true,
          },

        ],
        ui: {
          router: ({ document }) => `/service/${document._sys.filename}`,
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

          },
          {
            type: "image",
            name: "photo",
            label: "Image/Icon",
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
           

            ui: {
              component: "textarea"
            }
          },
        ],
       
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

          {
            type: 'image',
            label: 'Photo',
            name: 'photo',
            required: true,
          },

          {
            type: "string",
            name: "designation",
            label: "Designation",
            required: true,
          },

          {
            type: "number",
            name: "rating",
            label: "Rating",
            required: true,
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
          {
            type: "string",
            name: "opinion_ar",
            label: "Opinion In Arabic",
            required: true,

            ui: {
              component: "textarea"
            }
          },



        ],
       
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

            ui: {
              component: "textarea"
            }
          },
        ],
        
      },

      {
        name: "aboutUsInfo",
        label: "About Us",
        path: "content/aboutUs",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
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
                  label: "Cover Photo",
                  name: 'coverPhoto',
                  type: 'image',
                  required: true
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
                  required: true
                },
                {
                  label: "Designation",
                  name: "designation",
                  type: "string",
                  required: true
                },
                {
                  label: "Photo",
                  name: 'photo',
                  type: 'image',
                  required: true
                },

                {
                  label: "Quote",
                  name: "quote",
                  type: "object",
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
                      type: "string",

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
                  required: true
                },
                {
                  label: "Project Completed",
                  name: "projectCompleted",
                  type: "string",
                  required: true
                },
                {
                  label: "Cooperation Company",
                  name: "cooperationCompany",
                  type: "string",
                  required: true
                }
              ]
            }
          ]
        }],
       
      },

      {
        name: "contactUsInfo",
        label: "Contact Us",
        path: "content/contactUs",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            name: 'masaratcontactInfo',
            label: 'Masarat Contact Information',
            type: 'object',
            list: true,

            templates: [
              {
                label: 'Contact Information',
                name: 'contactInfo',
                fields: [
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

                  }

                ]
              },
              {
                label: 'Contact Us Banner',
                name: 'contactBanner',
                fields: [
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Title',
                    required: true,
                  },
                  {
                    type: 'string',
                    name: 'title_ar',
                    label: 'Title In Arabic',

                  },
                  {
                    label: "Short Description",
                    name: "shortDescription",
                    type: "string",
                    required: true,

                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    label: "Short Description In Arabic",
                    name: "shortDescription_ar",
                    type: "string",

                    ui: {
                      component: "textarea"
                    }
                  }

                ],
                
              }

            ],

          }

        ],
      },

      {
        name: "policyAndconditions",
        label: "Policy & Conditions",
        path: "content/policyAndconditions",
        // ui: {
        //   allowedActions: {
        //     create: false,
        //     delete: false,
        //   },
        // },
        fields: [
          {
            name: 'masaratPolicyConditions',
            label: 'Masarat Policy & Condition Section',
            type: 'object',
            list: true,

            templates: [
              {
                label: 'Masarat Privary Policy',
                name: 'masaratPrivaryPolicy',
                fields: [
                  {
                    type: "rich-text",
                    name: "privacyPolicy",
                    label: "Privacy Policy",
                    isBody: true,
                    required: true,
                  },
                  {
                    type: "rich-text",
                    name: "privacyPolicy_ar",
                    label: "Privacy Policy In Arabic",
                    isBody: true,
                    required: true,
                  },
                ]
              },
              {
                label: 'Masarat Terms & Conditions',
                name: 'masaratTermsConditions',
                fields: [
                  {
                    type: "rich-text",
                    name: "termsConditions",
                    label: "Terms & Conditions",
                    isBody: true,
                    required: true,
                  },
                  {
                    type: "rich-text",
                    name: "termsConditions_ar",
                    label: "Terms & Conditions In Arabic",
                    isBody: true,
                    required: true,
                  },
                ]
              },

            ],



          }

        ],
      
      },

      {
        name: "footerSection",
        label: "Footer",
        path: "content/footerSection",
        // ui: {
        //   allowedActions: {
        //     create: false,
        //     delete: false,
        //   },
        // },
        fields: [
          {
            name: 'masaratFooter',
            label: 'Masarat Footer Section',
            type: 'object',
            list: true,

            templates: [
              {
                label: 'Footer Information',
                name: 'footerInformation',
                fields: [
                  {
                    type: "string",
                    name: "description",
                    label: "Footer Description",
                    required: true,
                    ui: {
                      component: 'textarea'
                    }
                  },
                  {
                    type: "string",
                    name: "description_ar",
                    label: "Footer Description In Arabic",

                    ui: {
                      component: 'textarea'
                    }

                  }
                ]
              },
              {
                label: 'Social Media Account',
                name: 'socialMedia',
                fields: [
                  {
                    type: 'string',
                    name: 'discord',
                    label: 'Discord',
                    required: true,
                  },
                  {
                    type: 'string',
                    name: 'tweeter',
                    label: 'Tweeter',
                    required: true,

                  },
                  {
                    type: 'string',
                    name: 'telegram',
                    label: 'Telegram',
                    required: true,
                  },
                  {
                    type: 'string',
                    name: 'youtube',
                    label: 'Youtube',
                    required: true,

                  },

                ],
                disabled: true,
              }

            ],



          }

        ],
      
      },




    ],
  },
});
