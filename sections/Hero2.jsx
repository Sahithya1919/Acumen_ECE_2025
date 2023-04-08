/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { Presentations } from '../constants';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import { Typography } from '@mui/material';

const Hero2 = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative py-8 z-10">
        <motion.h6 variants={textVariant(1.1)} className={styles.heroHeading}>
          Paper
        </motion.h6>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h2 className={styles.heroHeading}>Presentations</h2>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[150px] z-[0] -top-[0px]" />

        <img
          src="/planet-01.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp0.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
            {/* <Modal
          open={true}
          // onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
>
          <ModalDialog
            layout="center"
            size="md"
            variant="soft"
          >
            <ModalClose onClick={() => Open(false)} />
            <div className='overflow-x-hidden overflow-y-auto ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto'>
            <ModalClose onClick={() => Open(false)} />
            <Typography className='imagecss font-extrabold text-[16px] leading-[20.16px] text-black uppercase'>
            Paper Presentation
            </Typography>
            <Typography>
              <img
            src='/poster_paper.png'
            alt="headset"
            className='imagecss' 
          /></Typography>
          </div>
          </ModalDialog>
        </Modal> */}
          </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero2;
