export function ConstructSponsorObject(sponsordata) {
    const SponsorObject = {
        id: sponsordata.id,
        customerId: sponsordata.sponsorId,
        subitems: sponsordata.subitems,
        name: sponsordata.sponsorName,
        email: sponsordata.sponsorEmail,
        phone: sponsordata.sponsorPhone,
        active: sponsordata.active,
        paymentPlatform: sponsordata.paymentPlatform,
        reepayHandleDonations: sponsordata.reepayHandleDonations,
        reepayHandlePeriamma: sponsordata.reepayHandlePeriamma,
        foreningLetID: sponsordata.foreningLetId,
        type: sponsordata.privatErhverv,
        cprCvr: sponsordata.cprCvr,
        notes: sponsordata.notes
    }

    Object.defineProperty(SponsorObject, "id", {
        configurable: false,
        writable: false
      });

    return SponsorObject;
}

