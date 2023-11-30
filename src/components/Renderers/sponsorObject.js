export function constructSponsorObject(sponsordata) {
    const sponsorObject = {
        id: sponsordata.id,
        customerId: sponsordata.sponsorId,
        name: sponsordata.sponsorName,
        email: sponsordata.sponsorEmail,
        phone: sponsordata.sponsorPhone,
        active: sponsordata.aktive,
        paymentPlatform: sponsordata.paymentPlatform,
        reepayHandleDonations: sponsordata.reepayHandleDonations,
        reepayHandlePeriamma: sponsordata.reepayHandlePeriamma,
        foreningLetId: sponsordata.foreningLetId,
        type: sponsordata.privatErhverv,
        cprCvr: sponsordata.cprCvr,
        notes: sponsordata.notes
    }

    return sponsorObject;
}

