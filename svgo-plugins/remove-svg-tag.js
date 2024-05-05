module.exports = {
  name: "removeFirstSVGTag",
  description:
    "Removes first SVG tag, and keep only it's children. Useful when you want more control over main SVG.",
  fn: () => {
    return {
      root: {
        enter: (node, parentNode) => {
          const svgElement = node.children.find((node) => node.name === "svg");

          const svgChildren = svgElement.children;

          node.children = node.children.filter((cNode) => cNode.name !== "svg");

          for (const child of svgChildren) {
            node.children.push(child);
          }
        },
      },
    };
  },
};
