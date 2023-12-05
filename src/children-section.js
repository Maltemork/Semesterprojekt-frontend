import { getData } from "./crud/getData.js";

async function buildChildrenList() {
    const childrenData = await getData("children");
    const childrensArray = childrenData.map(children => constructChildrenObject(children));
    return childrensArray;
}

module.exports = {
    buildChildrenList
};