import {
  carrental1, carrental2, betting1, betting2, wallet1, wallet2, wallet3, wallet4, tg1, tg2, tg3, tg4, game1, game2, game3, game4, hrms1, hrms2, hrms3, hrms4, responsive, react, fullstack,
} from '../assets';

const technologies = [
  {
    stack: ['Blockchain', 'all'],
    name: 'Solidity',
    icon: 'https://www.svgrepo.com/show/374088/solidity.svg',
  },
  {
    stack: ['Blockchain', 'all'],
    name: 'Rust',
    icon: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/rust-1.png',
  },
  {
    stack: ['Blockchain', 'all'],
    name: 'Vyper',
    icon: 'https://docs.vyperlang.org/en/stable/_images/logo.svg',
  },
  {
    stack: ['Blockchain', 'all'],
    name: 'Hardhat',
    icon: 'https://icon.icepanel.io/Technology/svg/Hardhat.svg',
  },
  {
    stack: ['Blockchain', 'all'],
    name: 'OpenZeppelin',
    icon: 'https://cdn.prod.website-files.com/63610769a12ca8b167ecebcf/67a02f5a05c6a925ba451690_dVtAB0PYwwYQkr-OjWDDZ7LaEskW4lqCpMRydc1Z16s.png',
  },
  {
    stack: ['Blockchain', 'all'],
    name: 'Ethereum',
    icon: 'https://img.icons8.com/?size=48&id=50284&format=png',
  },
  {
    stack: ['Blockchain', 'all'],
    name: 'Polygon',
    icon: 'https://cdn-icons-png.freepik.com/512/12114/12114233.png',
  },
  {
    stack: ['Blockchain', 'all'],
    name: 'Solana',
    icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/solana-sol-icon-svg-png-download-5645452.png',
  },
  {
    stack: ['Blockchain', 'all'],
    name: 'web3.js',
    icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/5/web3js-fkc6l6evntwzqrc1ac18.png/web3js-bqu5uc0cbrwxmkzlzt2ods.png?_a=DATAg1XyZAA0',
  },
  {
    stack: ['AI', 'all'],
    name: 'Python',
    icon: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
  },
  {
    stack: ['AI', 'all'],
    name: 'JavaScript',
    icon: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  },
  {
    stack: ['AI', 'all'],
    name: 'TypeScript',
    icon: 'https://images.icon-icons.com/2415/PNG/512/typescript_plain_logo_icon_146316.png',
  },
  {
    stack: ['AI', 'all'],
    name: 'TensorFlow',
    icon: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
  },
  {
    stack: ['AI', 'all'],
    name: 'PyTorch',
    icon: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg',
  },
  {
    stack: ['AI', 'all'],
    name: 'LangChain',
    icon: 'https://agile-systems.de/wp-content/uploads/2024/03/LangChain-Logo.png',
  },
  {
    stack: ['AI', 'all'],
    name: 'SQL',
    icon: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
  },
  {
    stack: ['AI', 'all'],
    name: 'FastAPI',
    icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/fastapi-icon-72blnc5ihz9c30ltfruvm.png/fastapi-icon-sv7hsd0o3donlq26es2lr.png?_a=DATAg1AAZAA0',
  },
  {
    stack: ['AI', 'all'],
    name: 'Node.js',
    icon: 'https://icon.icepanel.io/Technology/svg/Node.js.svg',
  },
  {
    stack: ['Web', 'all'],
    name: 'React',
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png',
  },
  {
    stack: ['Web', 'all'],
    name: 'Next.js',
    icon: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
  },
  {
    stack: ['Web', 'all'],
    name: 'Vue.js',
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vue-js-icon.png',
  },
  {
    stack: ['Web', 'all'],
    name: 'GraphQL',
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/graphql-icon.png',
  },
  {
    stack: ['Web', 'all'],
    name: 'Node.js',
    icon: 'https://icon.icepanel.io/Technology/svg/Node.js.svg',
  },
  {
    stack: ['Web', 'all'],
    name: 'PostgreSQL',
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png',
  },
  {
    stack: ['Web', 'all'],
    name: 'MongoDB',
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png',
  },
  {
    stack: ['Web', 'all'],
    name: 'Redis',
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redis-icon.png',
  },
  {
    stack: ['Web', 'all'],
    name: 'Docker',
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png',
  },
  {
    stack: ['Web', 'all'],
    name: 'Kubernetes',
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/kubernetes-icon.png',
  },
  {
    stack: ['Web', 'all'],
    name: 'AWS/GCP/Azure',
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png',
  },
  {
    stack: ['Cybersecurity', 'all'],
    name: 'Figma',
    icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  },
];

const projects = [
  {
    id: 1,
    name: 'Trading Bot',
    desc: 'The Funding Arbitrage Trading Bot is more than just software — it’s a profit-generating solution for traders worldwide. By combining automation, transparency, and ease of use, it transforms arbitrage into a scalable business opportunity. We invite strategic investors to join us in shaping the future of automated crypto arbitrage trading.',
    tech: ['Blockchain', 'React', 'Python', 'SDK'],
    img: carrental1,
    carousel: [carrental1, carrental2],
  },
  {
    id: 2,
    name: 'Betting Site',
    desc: 'A cutting-edge Web3 gaming ecosystem that combines hash games, futures trading games, and third-party integrations with seamless crypto deposit/withdrawal support, real-time financial charting, and a fully equipped admin panel. Designed for scalability, transparency, and player engagement, this platform is inspired by magic88.game and betfury.com, but enhanced with advanced features, multilingual support, and complete admin control.',
    tech: ['Next.js', 'Node.js', 'Ethers.js', 'Chart.js', 'Figma'],
    img: betting1,
    carousel: [betting1, betting2],
  },
  {
    id: 3,
    name: 'Extension wallet',
    desc: 'Metamask-style browser extension wallet designed to go beyond existing solutions by combining multi-chain support, advanced security, and a custom user experience. Unlike traditional wallets that limit users to a few chains, our solution will integrate all major EVM-compatible networks as well as Bitcoin, Solana, TRON, Litecoin, TON, and XRP — making it a truly universal Web3 gateway.',
    tech: ['Ether.js', 'Web3.js', 'Typescript', 'Figma'],
    img: wallet1,
    carousel: [wallet1, wallet2, wallet3, wallet4],
  },
  {
    id: 4,
    name: 'Telegram mini game',
    desc: 'PNFT Battle is a fast-paced, collectible card game where you gather powerful PNFT cards and clash in epic battles across a vibrant and chaotic unicorn universe. Inspired by Pokémon mechanics and packed with humor or hardcore action, it’s a strategic war with a magic twist.',
    tech: ['Next.js', 'Web3.js', 'PHP', 'Figma'],
    img: tg1,
    carousel: [tg1, tg2, tg3, tg4],
  },
  {
    id: 5,
    name: 'Telegram mini game',
    desc: 'The most impressive game using Next',
    tech: ['Next.js', 'Node.js', 'Express.js', 'Three.js', 'Figma'],
    img: game1,
    carousel: [game1, game2, game3, game4],
  },
  {
    id: 6,
    name: 'HRMS System',
    desc: 'I developed the using React for frontend and Javaspring boot for backend. You can manage your orgization using this platform',
    tech: ['React.js', 'Javaspringboot', 'Rest API', 'Socket.io'],
    img: hrms1,
    carousel: [hrms1, hrms2, hrms3, hrms4],
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Blockchain Development',
    text: 'Demonstrated expertise in Rust programming (3+ years) and the development of secure smart contracts on platforms including Solana, Polkadot, and Ethereum. Adept at architecting robust decentralized finance (DeFi) protocols, cross-chain bridges, and scalable dApps. Recognized for a hands-on leadership style, technical excellence, and commitment to building secure, performant blockchain infrastructure.',
  },
  {
    id: 2,
    icon: react,
    title: 'Web Development',
    text: 'Results-driven Web Developer of expertise in designing, developing, and deploying sophisticated. Adept at leveraging a broad range of front-end and back-end technologies, including React, Vue, Angular, Next.js, Node.js, Express, PHP, Laravel, Python and robust database management systems such as MongoDB, SQL, and NoSQL. Proven track record of delivering end-to-end solutions that meet business objectives, enhance user experiences, and drive organizational growth.',
  },
  {
    id: 3,
    icon: fullstack,
    title: 'AI Development',
    text: 'Innovative AI Developer with strong expertise in building intelligent systems that solve complex real-world problems. Skilled in designing, training, and deploying machine learning and deep learning models across domains such as natural language processing (NLP), computer vision, and generative AI. Proficient in frameworks including TensorFlow, PyTorch, and Hugging Face, with experience in optimizing models for scalability and performance in production environments',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, services, navLinks
};
