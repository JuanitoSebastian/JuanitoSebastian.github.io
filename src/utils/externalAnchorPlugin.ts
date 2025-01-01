import { visit } from 'unist-util-visit';
import type { Link } from 'mdast';
import type { Plugin } from 'unified';
import type { Node } from 'unist';

const siteUrl = 'https://juan.fi';

const externalAnchorPlugin: Plugin = () => {
  return function (tree: Node) {
    visit(tree, 'link', (node: Link) => {
      if (
        /^(https?):\/\/[^\s/$.?#].[^\s]*$/i.test(node.url) &&
        !node.url.includes(siteUrl)
      ) {
        node.data = {
          hProperties: {
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        };
      }
    });
  };
};

export default externalAnchorPlugin;
