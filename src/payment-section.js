async function buildPaymentList() {
  const paymentData = await getData("payments");
  const paymentsArray = paymentData.map((payment) =>
    constructPaymentObject(payment)
  );
  return paymentsArray;
}

module.exports = {
  buildPaymentList,

};
