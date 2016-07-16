"use strict";

/** --------------------------------------------------------------------------------------------------------------------
 * Библиотека вспомогательных функций
 * @type {Object}
 */
window['Drago'].prototype.lib = Object.create(null);

/** --------------------------------------------------------------------------------------------------------------------
 *
 * @param {Object} dragObject
 * @returns {Object}
 */
window['Drago'].prototype.lib.createAvatar = function (dragObject) {
    var avatar = dragObject.elem,

        old = {
            position: avatar.position || '',
            left: avatar.left || '',
            top: avatar.top || '',
            zIndex: avatar.zIndex || ''
        };

    avatar.rollback = function() {
        avatar.style.position = old.position;
        avatar.style.left = old.left;
        avatar.style.top = old.top;
        avatar.style.zIndex = old.zIndex
    };

    return avatar;
};

/** --------------------------------------------------------------------------------------------------------------------
 * 
 * @param {Object} opts - from context new Drago
 * @returns {*}
 */
window['Drago'].prototype.lib.startDrag = function (opts) {
    return opts['onDragBegin']();
};

/** --------------------------------------------------------------------------------------------------------------------
 *
 * @param {Object} opts - from context new Drago
 * @returns {*}
 */
window['Drago'].prototype.lib.finishDrag = function (opts) {
    return opts['onDragEnd']();
};

/** --------------------------------------------------------------------------------------------------------------------
 *
 * @param opts
 * @returns {*}
 */
window['Drago'].prototype.lib.onGrab = function (opts) {
    return opts['onGrab']();
};

/** --------------------------------------------------------------------------------------------------------------------
 *
 * @param opts
 * @returns {*}
 */
window['Drago'].prototype.lib.onGrabEnd = function (opts) {
    return opts['onGrabEnd']();
};

/** --------------------------------------------------------------------------------------------------------------------
 *
 * @param {Object} draggable
 * @param {Object} grabable
 * @returns {boolean}
 */
window['Drago'].prototype.lib.isParent = function (draggable, grabable) {
    if (grabable === draggable) return true;

    var parent = grabable.parentElement;

    while (parent && parent !== draggable) {
        parent = parent.parentElement;
    }

    return !!parent;
};
