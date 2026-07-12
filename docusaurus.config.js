// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const deployUrl = process.env.DOCUSAURUS_URL ?? 'https://hjy-233.github.io';
const deployBaseUrl = process.env.DOCUSAURUS_BASE_URL ?? '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BetterRailwaySystem',
  tagline: 'Enhance vanilla minecarts without replacing vanilla rails.',
  favicon: 'img/icon.png',
  future: {
    v4: true,
  },
  url: isGitHubActions ? deployUrl : 'http://localhost',
  baseUrl: isGitHubActions ? deployBaseUrl : '/',
  organizationName: 'hjy-233',
  projectName: 'BetterRailwaySystem',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-Hans': {
        label: '简体中文',
        htmlLang: 'zh-Hans',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/hjy-233/BetterRailwaySystem/tree/main/BetterRailwaySystem-web/BetterRailwaySystem/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  themeConfig: {
    image: 'img/icon.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BetterRailwaySystem',
      logo: {
        alt: 'BetterRailwaySystem Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/download',
          label: 'Download',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/hjy-233/BetterRailwaySystem',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Installation',
              to: '/docs/installation/client-and-server',
            },
          ],
        },
        {
          title: 'Download',
          items: [
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/mod/betterrailwaysystem',
            },
            {
              label: 'GitHub Releases',
              href: 'https://github.com/hjy-233/BetterRailwaySystem/releases',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Repository',
              href: 'https://github.com/hjy-233/BetterRailwaySystem',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BetterRailwaySystem.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
