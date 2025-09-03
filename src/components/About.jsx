import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/kaungmyatkyaw/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Sentrax,
        </a>
        {' '}
        Innovative and detail-oriented Full-Stack Developer & Blockchain Engineer with expertise across decentralized technologies, artificial intelligence, secure web applications, and cybersecurity best practices. Skilled in designing and deploying smart contracts (Solidity, Rust), building scalable DeFi/NFT/DApp platforms, and integrating AI-driven solutions for predictive analytics, automation, and intelligent decision-making.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        Proficient in modern web frameworks (React, Next.js, Node.js, NestJS) with a strong foundation in cloud-native deployment (AWS, Docker, Kubernetes) and secure API design. Experienced in implementing zero-trust security models, penetration testing, and encryption standards to safeguard systems against evolving cyber threats.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        Passionate about bridging the gap between Web2 and Web3 by delivering user-friendly, enterprise-grade applications that merge blockchain transparency, AI intelligence, web scalability, and cybersecurity resilience. Adept at working in agile environments, leading cross-functional teams, and delivering innovative solutions that drive measurable business value.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
