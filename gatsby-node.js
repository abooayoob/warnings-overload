const path = require("path")
const data = require("./data").data

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "/bam",
    component: path.resolve(`./src/pages/index.js`),
    context: {
      data,
    },
  })
}
