/**
 * 
 * @param {Object} object 
 * @param {String} property 
 * @param {String} newProperty 
 */
export default function renameProps(object, property, newProperty) {
    let newObject = object;
    newObject[newProperty] = newObject[property];
    delete newObject[property];

    return newObject;
}