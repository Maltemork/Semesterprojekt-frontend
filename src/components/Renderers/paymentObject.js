export function ConstructPaymentObject(paymentdata) {
    const SponsorObject = {
        id: paymentdata.invoiceHandle,
        customer: paymentdata.customerHandle,
        subcription: paymentdata.subscriptionHandle,
        plan: paymentdata.planHandle,
        planVersion: paymentdata.planVersion,
        amount: paymentdata.invoiceAmount,
        authorized: paymentdata.invoiceAuthorized,
        authorizedAmount: paymentdata.invoiceAuthorizedAmount,
        cancelled: paymentdata.invoiceCancelled,
        created: paymentdata.invoiceCreated,
        creditedAmount: paymentdata.invoiceCreditedAmount,
        currency: paymentdata.invoiceCurrency,
        due: paymentdata.invoiceDue,
        dunningStart: paymentdata.invoiceDunningStart,
        dunningSuccess: paymentdata.invoiceDunningSuccess,
        dunningFailed: paymentdata.invoiceDunningFailed,
        invoice: paymentdata.invoice,
        invoiceNumber: paymentdata.invoiceNumber,
        orgAmount: paymentdata.invoiceOrgAmount,
        orgSubscription: paymentdata.invoiceOrgSubscription,
        periodFrom: paymentdata.invoicePeriodFrom,
        periodTo: paymentdata.invoicePeriodTo,
        refundedAmount: paymentdata.invoiceRefundedAmount,
        state: paymentdata.invoiceState,
        customerEmail: paymentdata.SponsorssponsorEmail
    }

    Object.defineProperty(SponsorObject, "id", {
        configurable: false,
        writable: false
      });

    return SponsorObject;
}

