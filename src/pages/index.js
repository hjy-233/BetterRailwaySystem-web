import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const content = {
  en: {
    title: 'BetterRailwaySystem',
    description:
      'Enhance vanilla minecarts without replacing vanilla rails.',
    primaryButton: 'Read Docs',
    secondaryButton: 'Download',
    tertiaryButton: 'GitHub',
  },
  'zh-Hans': {
    title: 'BetterRailwaySystem',
    description: '增强原版矿车系统，而不是替换原版铁路。',
    primaryButton: '阅读文档',
    secondaryButton: '前往下载',
    tertiaryButton: 'GitHub',
  },
};

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const page = content[i18n.currentLocale] ?? content.en;

  return (
    <Layout
      title={page.title}
      description={page.description}>
      <main>
        <header className={clsx('hero', styles.heroBanner)}>
          <div className="container">
            <p>{'Minecraft 1.21.1 · Fabric · Vanilla Rails'}</p>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{page.description}</p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg margin--sm" to="/docs/intro">
                {page.primaryButton}
              </Link>
              <Link className="button button--secondary button--lg margin--sm" to="/download">
                {page.secondaryButton}
              </Link>
              <Link
                className="button button--secondary button--lg margin--sm"
                href="https://github.com/hjy-233/BetterRailwaySystem">
                {page.tertiaryButton}
              </Link>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
