import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const content = {
  en: {
    title: 'Download',
    description: 'Download BetterRailwaySystem and install it on Fabric client or server.',
    subtitle:
      'Choose your preferred distribution source, then install the required dependencies before launching Minecraft or a dedicated server.',
    modrinthButton: 'Modrinth',
    githubButton: 'GitHub Releases',
    requirementsTitle: 'Requirements',
    requirements: [
      'Minecraft 1.21.1',
      'Fabric Loader',
      'Fabric API',
      'Cloth Config',
      'Java 21 or newer',
    ],
    installTitle: 'Installation Paths',
    clientTitle: 'Client Installation',
    clientSteps: [
      'Install Fabric Loader for Minecraft 1.21.1.',
      'Put BetterRailwaySystem, Fabric API, and Cloth Config into the client mods folder.',
      'Launch the game and confirm the blocks and config screen are available.',
    ],
    serverTitle: 'Server Installation',
    serverSteps: [
      'Set up a Fabric dedicated server for Minecraft 1.21.1.',
      'Put BetterRailwaySystem, Fabric API, and Cloth Config into the server mods folder.',
      'ModMenu is not required on the server.',
      'Accept the EULA and finish standard Fabric server setup before launching.',
    ],
    notesTitle: 'Important Notes',
    notes: [
      'For multiplayer gameplay, both the client and the server should have BetterRailwaySystem installed.',
      'Server-side media sync only works when the server also has the mod installed.',
      'If a server does not expose BetterRailwaySystem networking channels, related client features are disabled automatically.',
    ],
  },
  'zh-Hans': {
    title: '下载',
    description: '下载 BetterRailwaySystem，并将其安装到 Fabric 客户端或服务端。',
    subtitle:
      '选择你偏好的发布渠道，然后在启动 Minecraft 或专用服务器前安装所需依赖。',
    modrinthButton: 'Modrinth',
    githubButton: 'GitHub Releases',
    requirementsTitle: '运行要求',
    requirements: [
      'Minecraft 1.21.1',
      'Fabric Loader',
      'Fabric API',
      'Cloth Config',
      'Java 21 或更高版本',
    ],
    installTitle: '安装路径',
    clientTitle: '客户端安装',
    clientSteps: [
      '为 Minecraft 1.21.1 安装 Fabric Loader。',
      '将 BetterRailwaySystem、Fabric API 和 Cloth Config 放入客户端 mods 文件夹。',
      '启动游戏并确认方块和配置界面可以正常使用。',
    ],
    serverTitle: '服务端安装',
    serverSteps: [
      '搭建 Minecraft 1.21.1 的 Fabric 专用服务器。',
      '将 BetterRailwaySystem、Fabric API 和 Cloth Config 放入服务端 mods 文件夹。',
      '服务端不需要安装 ModMenu。',
      '接受 EULA 并完成 Fabric 服务端的标准初始化后再启动。',
    ],
    notesTitle: '重要说明',
    notes: [
      '多人联机时，客户端和服务端都建议安装 BetterRailwaySystem。',
      '服务端素材同步仅在服务器也安装了本模组时可用。',
      '如果服务器没有暴露 BetterRailwaySystem 的网络通道，相关客户端功能会自动禁用。',
    ],
  },
};

export default function DownloadPage() {
  const {i18n} = useDocusaurusContext();
  const page = content[i18n.currentLocale] ?? content.en;

  return (
    <Layout title={page.title} description={page.description}>
      <main>
        <div className="container margin-top--xl margin-bottom--xl">
          <header className="margin-bottom--lg">
            <Heading as="h1">{page.title}</Heading>
            <p>{page.subtitle}</p>
            <div className="margin-top--md">
              <Link
                className="button button--primary button--lg margin-right--sm margin-bottom--sm"
                href="https://modrinth.com/mod/betterrailwaysystem">
                {page.modrinthButton}
              </Link>
              <Link
                className="button button--secondary button--lg margin-bottom--sm"
                href="https://github.com/hjy-233/BetterRailwaySystem/releases">
                {page.githubButton}
              </Link>
            </div>
          </header>

          <Heading as="h2">{page.requirementsTitle}</Heading>
          <ul>
            {page.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Heading as="h2">{page.installTitle}</Heading>
          <Heading as="h3">{page.clientTitle}</Heading>
          <ol>
            {page.clientSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <Heading as="h3">{page.serverTitle}</Heading>
          <ol>
            {page.serverSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <Heading as="h2">{page.notesTitle}</Heading>
          <ul>
            {page.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
