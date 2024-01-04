module.exports = class SponsorObject {
  constructor(
    id,
    sponsorId,
    subitems,
    name,
    email,
    phone,
    active,
    paymentPlatform,
    reepayHandlePeriamma,
    foreningLetID,
    type,
    reepayHandleDonations,
    cprCvr,
    notes
  ) {
    this.id = id;
    this.sponsorId = sponsorId;
    this.subitems = subitems;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.active = active;
    this.paymentPlatform = paymentPlatform;
    this.reepayHandleDonations = reepayHandleDonations;
    this.reepayHandlePeriamma = reepayHandlePeriamma;
    this.foreningLetId = foreningLetID;
    this.type = type;
    this.cprCvr = cprCvr;
    this.notes = notes;
  }
};
