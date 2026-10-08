import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const sections = [
  {
    title: 'Fusion Resources',
    links: [
    ]
  },
  {
    title: 'Manuals and Learning',
    links: [
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Fusion under Linux', href: '/docs/linux/fusion-under-linux' },
      { label: 'Fusion Manual', href: 'http://manual.vfxpedia.com/' },
      { label: 'Tips and Techniques', href: '/docs/tips-and-techniques' },
      { label: 'FAQ', href: '/docs/faq' },
      { label: 'System Administrators Guide to Fusion', href: '/docs/system-administrators-guide' },
      { label: 'Video Tutorials', href: '/docs/video-tutorials' },
    ],
  },
  {
    title: 'Tools and Examples',
    links: [
      { label: 'Comps', href: '/docs/comps' },
      { label: 'Settings and Macros', href: '/docs/settings-and-macros' },
      { label: 'Useful Scripts', href: '/docs/useful-scripts' },
      { label: 'Simple Expressions', href: '/docs/simple-expressions' },
      { label: 'Third Party Fuses', href: '/docs/third-party-fuses' },
      { label: 'Plugins', href: '/docs/plugins' },
    ],
  },
  {
    title: 'Developer\'s Corner',
    links: [
      { label: 'Scripting Manual', href: '/docs/script' },
      { label: 'Fusion Classes', href: '/docs/script/reference/applications/fusion/classes' },
      { label: 'Fuses & Script Plugins', href: '/docs/script/reference/applications/fuse' },
    ],
  },
  {
    title: 'Feedback',
    links: [
      { label: 'Wishlist', href: '/docs/wishlist' },
      { label: 'Bug Reports', href: '/docs/bug-reports' },
    ],
  },
  {
    title: 'External Resources',
    links: [
      { label: 'Community Portal', href: '/docs/community-portal' },
      { label: 'Eyeon Interviews', href: '/docs/eyeon-interviews' },
      { label: 'Articles & Case Studies', href: '/docs/articles-and-case-studies' },
    ],
  },
];

export default function Home() {
  return (
    <Layout
      title="VFXPedia"
      description="A central resource for visual effects artists">
      <main className="vfx-main-page">
        <header className="vfx-hero">
          <span className="vfx-badge">Blackmagic Fusion · Visual Effects</span>
          <Heading as="h1" className="vfx-hero-title">
            <span className="brand-gold">VFX</span>
            <span className="brand-plain">pedia</span>
          </Heading>
          <p className="vfx-hero-sub">
            A central resource for visual effects artists
          </p>
          <div className="vfx-btn-row">
            <Link className="button button--primary button--lg" to="/docs/getting-started">
              Browse the Wiki
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/about">
              About VFXPedia
            </Link>
          </div>
        </header>
        <div className="vfx-sections-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="vfx-section-card">
              <h3 className="vfx-section-title">{section.title}</h3>
              <ul className="vfx-section-links">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    ) : (
                      <Link to={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
