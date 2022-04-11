export const folderstructure = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Folderstructure.js",
              isFolder: false
            }
          ]
        }
      ]
    },
    {
      name: "package.json",
      isFolder: false
    }
  ]
};
