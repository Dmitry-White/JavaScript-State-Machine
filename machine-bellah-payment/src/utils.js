const fakePayment = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dice = Math.floor(Math.random() * Math.floor(2));

      if (dice === 0) return resolve("Payment succeeded.");

      return reject("Payment failed.");
    }, 1000);
  });
}

export {
  fakePayment
}