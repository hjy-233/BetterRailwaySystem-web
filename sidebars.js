// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro',
        'introduction/design-goals',
        'introduction/feature-overview',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/client-and-server',
        'installation/dependencies-and-compatibility',
        'installation/first-launch-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/first-line',
        'tutorials/first-balise',
        'tutorials/first-spawner-route',
        'tutorials/server-asset-sync',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/minecart-behavior',
        'advanced/operations-blocks',
        'advanced/world-map-and-recording',
        'advanced/multiplayer-and-assets',
      ],
    },
    {
      type: 'category',
      label: 'Developer',
      items: [
        'developer/project-structure',
        'developer/build-and-run',
        'developer/networking-and-data',
        'developer/roadmap',
      ],
    },
  ],
};

export default sidebars;
