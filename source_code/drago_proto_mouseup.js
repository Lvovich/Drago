"use strict";

/**
 * 
 * @param {Object} event
 */
window['Drago'].prototype.dragoOnMouseUp = function (event) {
    if (this.dragObject.avatar) {
        this.lib.finishDrag(event);
    }

    this.dragObject = {};
};
