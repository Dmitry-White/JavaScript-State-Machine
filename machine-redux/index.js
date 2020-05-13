const machine = {
  idle: {
    click() {},
  },
  fetching: {
    success() {},
    failure() {},
  },
  error: {
    retry() {},
  },
};
