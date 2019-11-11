const autoPreprocess = require("svelte-preprocess");

const preprocessOptions = {
  postcss: {
    plugins: [
      require("tailwindcss")(),
      require("autoprefixer")(),
      require("cssnano")({
        preset: "default"
      })(),
      require("postcss-nested")()
      // require('postcss-import'),
      // require('postcss-preset-env')({
      // 		stage: 0,
      // 		browsers: 'last 2 versions',
      // 		autoprefixer: { grid: true }
      // }),
    ]
  }
};

module.exports = {
  preprocess: autoPreprocess(preprocessOptions)
  //   preprocess: {
  //     style: async ({ content, attributes }) => {
  //       if (attributes.type !== "text/postcss") return;
  //       return new Promise((resolve, reject) => {
  //         resolve({ code: "", map: "" });
  //       });
  //     }
  //   }
};

// const sass = require('node-sass');

// module.exports = {
//     preprocess: {
//         style: async ({ content, attributes }) => {
//             if (attributes.type !== 'text/scss') {
//                 return;
//             }

//             const result = await renderScss({
//                 data: content,
//                 sourceMap: 'style.css.map',
//                 omitSourceMapUrl: true,
//             });

//             return {
//                 code: result.css.toString('utf8'),
//                 map: result.map.toString('utf8'),
//             };
//         },
//     },
// };
