"use strict";

window['Drago'].prototype.dragoOnMouseMove = function (event) {
    if (!this.dragObject.elem) {
        return;
    }

    if (!this.dragObject.avatar) {
        var moveX = event.clientX - this.dragObject.grabX,
            moveY = event.clientY - this.dragObject.grabY;

        if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
            return;
        }

        this.dragObject.avatar = this.lib.createAvatar(this.dragObject);

        if (!this.dragObject.avatar) {
            this.dragObject = {};
            return;
        }
        
        var coords = this.dragObject.avatar.getBoundingClientRect();

        this.dragObject.shiftX = this.dragObject.grabX - coords.left;
        this.dragObject.shiftY = this.dragObject.grabY - coords.top;

        this.lib.startDrag(this);
    }

    // отобразить перенос объекта при каждом движении мыши
    this.dragObject.avatar.style.left = event.clientX - this.dragObject.shiftX + 'px';
    this.dragObject.avatar.style.top = event.clientY - this.dragObject.shiftY + 'px';

    return false;
};
