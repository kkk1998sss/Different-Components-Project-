const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              name: "index.html",
              isFolder: false,
            },
          ],
        },
        // {
        //   name: "public_nested_file",
        //   isFolder: true,
        //   items: [
        //     {
        //       name: "main.html",
        //       isFolder: false,
        //     },
        //   ],
        // },
        {
          name: "src",
          isFolder: true,
          items: [
            {
              name: "components",
              isFolder: true,
              items: [
                {
                  name: "Login.js",
                  isFolder: false,
                },
                {
                  name: "SignUp.js",
                  isFolder: false,
                },
              ],
            },
            {
              name: "app.css",
              isFolder: false,
            },
            {
              name: "style.css",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};

export default explorer;
