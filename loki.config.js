module.exports = {
  configurations: {
    iphone: {
      target: 'ios.simulator',
    },
  },
  fileNameFormatter: ({kind, story}) => {
    console.warn(kind, story);
    return `${kind}/${story}`;
  },
};
