import {
  api,
  backend,
  contract,
  cryptoplace,
  css,
  demo,
  firebase,
  html,
  js,
  learn,
  netflix,
  node,
  react,
  web,
} from "./img";

export const skills = [
  {
    name: "HTML5",
    icon: <img src={html} alt="html" className="w-full ]" />,
  },
  {
    name: "CSS",
    icon: <img src={css} alt="css" className="w-full " />,
  },
  {
    name: "Javascript",
    icon: <img src={js} alt="javascript" className="w-full " />,
  },
  {
    name: "Reactjs",
    icon: <img src={react} alt="react" className="w-full " />,
  },
  {
    name: "Nodejs",
    icon: <img src={node} alt="node" className="w-full " />,
  },
  {
    name: "Firebase",
    icon: <img src={firebase} alt="firebase" className="w-full " />,
  },
];

export const mainSkill = [
  {
    image: <img src={web} />,
    title: "Wev Development",
    description:
      "I created beautiful interfaces with simple HTML, CSS & Javascript and also frameworks like ReactJs",
    color: "#a639d3",
  },
  {
    image: <img src={backend} />,
    title: "Full-Stack Development",
    description:
      "I develop complete applications by connecting frontend interfaces with backend logic and databases. I handle application flow, authentication, data management, and API integration to deliver end-to-end solutions.",
    color: "#f0f1f5",
  },
  {
    image: <img src={backend} />,
    title: "Backend Development",
    description:
      "I design and implement backend systems using Node.js, Firebase, and server-side logic to manage data, authentication, and application workflows. I ensure systems are secure, scalable, and reliable.",
    color: "#a639d3",
  },
  {
    image: <img src={contract} />,
    title: "Blockchain & Smart Contract Development (Cardano)",
    description:
      "I develop smart contracts and decentralized applications (dApps) on the Cardano blockchain using Plutus and Helios. I work with on-chain and off-chain code, wallet integration, and blockchain transactions.",
    color: "f0f1f5",
  },
  {
    image: <img src={learn} />,
    title: "Continuous Learning & Improvement",
    description:
      "I develop complete applications by connecting frontend interfaces with backend logic and databases. I handle application flow, authentication, data management, and API integration to deliver end-to-end solutions.",
    color: "#a639d3",
  },
  {
    image: <img src={api} />,
    title: "API Integration",
    description:
      "I integrate third-party APIs and services such as payment systems, blockchain APIs, and cloud services, enabling applications to interact with external platforms seamlessly.",
    color: "f0f1f5",
  },
];

export const projects = [
  {
    image: demo,
    title: "Cardano Auction",
    description:
      "I develop complete applications by connecting frontend interfaces with backend logic and databases. I handle application flow, authentication, data management, and API integration to deliver end-to-end solutions.",
    link: "https://cardano-auction-solutions.vercel.app/",
    repo: "https://github.com/ahunanyaIsrael/cardano-auction-solutions",
  },
  {
    image: cryptoplace,
    title: "Cryptoplace",
    description:
      "CryptoPlace is a small, modern React app built with Vite that displays cryptocurrency market data and charts. It demonstrates a clean component structure, context-based state, and integration with the CoinGecko public API and react-google-charts for visualization.",
    link: "https://cryptoplace-fawn.vercel.app/",
    repo: "https://github.com/ahunanyaIsrael/cryptoplace",
  },
  {
    image: netflix,
    title: "Netflix Clone",
    description:
      "A modern Netflix-inspired streaming application built with React and Vite, featuring user authentication, movie/TV show browsing, and video playback capabilities.",
    link: "https://netflix-clone-flame-nu.vercel.app/login",
    repo: "https://github.com/ahunanyaIsrael/netflix-clone",
  },
];
