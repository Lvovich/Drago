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
 * @param {Object} CONTEXT
 */
window['Drago'].prototype.lib.startDrag = function (CONTEXT) {
    return CONTEXT.opts['onDragBegin']();
};

/** --------------------------------------------------------------------------------------------------------------------
 *
 * @param {Object} CONTEXT
 */
window['Drago'].prototype.lib.finishDrag = function (CONTEXT) {
    return CONTEXT.opts['onDragEnd']();
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
