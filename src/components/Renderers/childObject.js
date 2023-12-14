export function ConstructChildObject(childdata) {
  const ChildObject = {
    id: childdata.id,
    childNo: childdata.childNo,
    subitems: childdata.subitems,
    perviousSponsor: childdata.sponsoredBy,
    name: childdata.fullname,
    gender: childdata.gender,
    birthdate: childdata.birthdate,
    type: childdata.type,
    school: childdata.school,
    schoolStart: childdata.schoolStart,
    class: childdata.class,
    notes: childdata.notes,
    getAge() {
      let date = new Date(childdata.birthdate);
      let age = Math.floor(
        (Date.now() - date.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
      );
      return age;
    },
  };

  Object.defineProperty(ChildObject, "childNo", {
    configurable: false,
    writable: false,
  });

  return ChildObject;
}
