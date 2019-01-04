const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

const postNodes = [];

function addSiblingNodes(createNodeField) {
  postNodes.sort(
    ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) => {
      const dateA = moment(date1, siteConfig.dateFromFormat);
      const dateB = moment(date2, siteConfig.dateFromFormat);

      if (dateA.isBefore(dateB)) return 1;

      if (dateB.isBefore(dateA)) return -1;

      return 0;
    }
  );
  for (let i = 0; i < postNodes.length; i += 1) {
    const nextID = i + 1 < postNodes.length ? i + 1 : 0;
    const prevID = i - 1 > 0 ? i - 1 : postNodes.length - 1;
    const currNode = postNodes[i];
    const nextNode = postNodes[nextID];
    const prevNode = postNodes[prevID];
    createNodeField({
      node: currNode,
      name: "nextTitle",
      value: nextNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: "nextSlug",
      value: nextNode.fields.slug
    });
    createNodeField({
      node: currNode,
      name: "prevTitle",
      value: prevNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: "prevSlug",
      value: prevNode.fields.slug
    });
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      if(node.frontmatter.templateKey) {
        slug = node.frontmatter.templateKey + `/${_.kebabCase(node.frontmatter.title)}`;
      }
      else slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      // if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
      //   slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString()
        });
      }
    }
    // console.log('---->:');
    // console.log(parsedFilePath);
    // console.log(slug);
    createNodeField({ node, name: "slug", value: slug });
    postNodes.push(node);
  }
};

// exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
//   const { name } = type;
//   const { createNodeField } = actions;
//   if (name === "MarkdownRemark") {
//     addSiblingNodes(createNodeField);
//   }
// };

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {

    const tagPage = path.resolve("src/templates/tag.jsx");
    const categoryPage = path.resolve("src/templates/category.jsx");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    templateKey
                    tags
                    category
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        const categorySet = new Set();
        
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add({category: edge.node.frontmatter.category, templateKey: edge.node.frontmatter.templateKey});
          }
          // console.log("----slug:");
          // console.log(edge.node.fields.slug);
          let component, pathName;
          if (edge.node.frontmatter.templateKey === "home-page") {
            pathName = "/";
            component = path.resolve(`src/pages/index.jsx`);
          } 
          else {
            pathName = edge.node.frontmatter.path || edge.node.fields.slug;
            component = path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`);
          }
          const id = edge.node.id;
          createPage({
            path: edge.node.fields.slug,
            component: component,
            context: {
              id,
              slug: edge.node.fields.slug
            }
          });
        });

        const tagList = Array.from(tagSet);
        // console.log ("-----> tagList:");
        // console.log (tagList);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag
            }
          });
        });
        
        const categoryList = Array.from(categorySet);
        // console.log ("-----> category:");
        // console.log (categoryList);
        categoryList.forEach(item => {
          let path = `/${item.templateKey}/${_.kebabCase(item.category)}/`;
          // if (item.templateKey == "post") {
          //   path = `/hainamer/${_.kebabCase(item.category)}/`;
          // }
          // else if (item.templateKey == "product") {
          //   path = `/product/${_.kebabCase(item.category)}/`;
          // }
          // else if (item.templateKey == "pricing") {
          //   path = `/pricing/${_.kebabCase(item.category)}/`;
          // }
          // else {
          //   path = `/categories/${_.kebabCase(item.category)}/`;
          // }
          console.log ("-----> path:");
          console.log (path);
          createPage({
            path,
            component: categoryPage,
            context: {
              category: item.category
            }
          });
        });
      })
    );
  });
};


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}