// VFXPedia Docusaurus Configuration
// Replace placeholders (e.g. URL, title) with your actual values.

const prism = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'VFXPedia',
  tagline: 'A central resource for visual effects artists',
  url: 'https://kartaverse.github.io',
  baseUrl: '/VFXPedia/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',

  organizationName: 'Kartaverse',
  projectName: 'vfxpedia',

  // Google Fonts: IBM Plex Sans for headings + body, IBM Plex Mono for code,
  // tables, counts and labels. Shared with the Swiftpedia and Vonk Ultra docs
  // sites so the projects read as one design family.
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap',
      type: 'text/css',
    },
  ],

  // Mermaid theme for rendering diagrams inside the docs.
  themes: [
    '@docusaurus/theme-mermaid',
    // Site-wide full-text search, self-contained (no external account).
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  // Markdown configuration
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownImages: () => {
        // Ignore broken markdown image errors
        return;
      },
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Follow the OS light/dark preference on first visit, matching Swiftpedia.
      colorMode: {
        respectPrefersColorScheme: true,
      },
      mermaid: {
        theme: {
          light: 'default',
          dark: 'dark',
        },
        options: {
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'linear',
            padding: 8,
            nodeSpacing: 40,
            rankSpacing: 50,
          },
        },
      },
      navbar: {
        title: 'VFXPedia',
        logo: {
          alt: 'VFXPedia Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Kartaverse/VFXPedia',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              { label: 'Privacy Policy', to: '/docs/privacy-policy' },
              { label: 'About VFXPedia', to: '/docs/about' },
              { label: 'Disclaimers', to: '/docs/disclaimers' },
            ],
          },
        ],
        copyright: `Copyright © 2008-${new Date().getFullYear()} VFXPedia. Built with Docusaurus.`,
      },
      prism: {
        theme: prism.themes.github,
        darkTheme: prism.themes.dracula,
        // VFXPedia documents Fusion's Lua scripting language.
        additionalLanguages: ['lua'],
      },
    }),

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Kartaverse/VFXPedia/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
