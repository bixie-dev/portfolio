import React from 'react';
import { motion } from 'framer-motion';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { fadeIn } from '../utils/motion';
import style from './styles/footer.module.css';

const Footer = () => (
  <motion.section
    id={style.footer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <motion.div variants={fadeIn('', '', 1, 1)} className={style.up_icon_container}>
      <abbr title="back to home page">
        <button
          type="button"
          className={`${style.overlay} ${style.up_overlay}`}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <BsChevronDoubleUp className={`${style.icon_hover} ${style.up_icon_hover}`} />
          <BsChevronDoubleUp className={`${style.icon} ${style.up_icon}`} />
        </button>
      </abbr>
    </motion.div>
    <abbr title="Source Code" className={style.p}>
      <a href="#" target="_blank" className={style.a} rel="noreferrer">
          If you need my help. Feel free to contact me. I am always opened for you ( Butterfly800530@gmail.com )
      </a>
    </abbr>
  </motion.section>
);

export default Footer;
