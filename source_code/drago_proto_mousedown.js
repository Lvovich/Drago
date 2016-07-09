"use strict";

/**
 * 
 * @param {Object} event
 */
window['Drago'].prototype.dragoOnMouseDown = function (event) {
    if (event.which != 1) {
        return;
    }

    this.dragObject.elem = this.draggable;

    this.dragObject.grabX = event.clientX;
    this.dragObject.grabY = event.clientY;
};
