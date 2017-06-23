/**
 * https://elemefe.github.io/node-interview/#/sections/zh-cn/util?id=utilinherits
 * @param ctor
 * @param superCtor
 */
exports.inherits = function(ctor, superCtor) {

    if (ctor === undefined || ctor === null)
        throw new TypeError('The constructor to "inherits" must not be ' +
            'null or undefined');

    if (superCtor === undefined || superCtor === null)
        throw new TypeError('The super constructor to "inherits" must not ' +
            'be null or undefined');

    if (superCtor.prototype === undefined)
        throw new TypeError('The super constructor to "inherits" must ' +
            'have a prototype');

    ctor.super_ = superCtor;
    Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
};
