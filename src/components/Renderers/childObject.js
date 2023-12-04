export function ConstructChildObject(childdata) {
    const ChildObject = {
        id: childdata.id,
        childNo: childdata.childNo,
        subitems: childdata.subitems,
        sponsor: childdata.sponsor,
        name: childdata.fullname,
        gender: childdata.gender,
        age: childdata.age,
        birthdate: new Date(childdata.birthdate).toLocaleDateString("en-DE"),
        type: childdata.type,
        school: childdata.school,
        schoolStart: new Date(childdata.schoolStart).toLocaleDateString("en-DE"),
        class: childdata.class,
        sponsoredBy: childdata.sponsoredBy,
        secondSponsor: childdata.secondSponsor,
        notes: childdata.notes
    }

    Object.defineProperty(ChildObject, "childNo", {
        configurable: false,
        writable: false
      });

    return ChildObject;
}

