/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `@olavea/gatsby-theme-picture-book`,
      options: {
        basePath: `/`,
        imagePath: `book/images`,

        infoLink: {
          title:
            "Build a book with a child and this gatsby-theme-picture-book. Or give us a pull request at github.",
          url: `https://github.com/olavea/gatsby-theme-picture-book`,
        },
      },
    },
  ],
}
