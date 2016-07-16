"use strict";

/**
 * 
 * @param {Object} event
 */
window['Drago'].prototype.dragoOnMouseUp = function (event) {
    if (this.dragObject.avatar) {
        this.lib.finishDrag(this.opts);
    }

    this.lib.onGrabEnd(this.opts);
    this.dragObject = {};
};
