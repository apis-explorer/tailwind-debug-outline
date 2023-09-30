const plugin = require("tailwindcss/plugin");

/**
 * The debugPlugin adds utility `debug*` classes to outline HTML nodes and childs.
 *
 */
module.exports = plugin(function ({ addComponents }) {
  addComponents({
    ".debug": {
      outline: `dashed thin red`,
    },
    ".debug-green": {
      outline: "dashed thin green",
    },
    ".debug-blue": {
      outline: "dashed thin blue",
    },
    ".debug-yellow": {
      outline: "dashed thin yellow",
    },
    ".debug-childs": {
      "& > *": {
        outline: "dashed thin red",
      },
    },
    ".debug-childs-green": {
      "& > *": {
        outline: "dashed thin green",
      },
    },
    ".debug-childs-blue": {
      "& > *": {
        outline: "dashed thin blue",
      },
    },
    ".debug-childs-yellow": {
      "& > *": {
        outline: "dashed thin yellow",
      },
    },
  });
});
