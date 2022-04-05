
export const containerVariants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: { delay: 0.5, duration: 1.5}
    },

    exit: {

        opacity: 0,
        transition: { ease: 'easeInOut'}
    }
}

export const textWrapperVariants = {
    open: {
      transition: {  staggerChildren: 0.07, delayChildren: 0.8 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  export const textItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        duration: 1
      }
    },
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };