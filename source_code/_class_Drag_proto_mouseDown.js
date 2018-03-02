/**
 * @param {MouseEvent} event
 */
Drag.prototype.mouseDown = function(event) {
    return wrapper.call(this, function()
    {
        var onGrabBeginResult = this.opts['onGrabBegin'](event),
            coords = this.container.getBoundingClientRect();

        if (event.button === 0 && (onGrabBeginResult || onGrabBeginResult === undefined)) {
            this.grabX = event.clientX;
            this.grabY = event.clientY;

            this.startLeft = coords.left;
            this.startTop  = coords.top;

            this.initial = {
                zIndex : this.container.style.zIndex || ''
            };

            this.inDragging = beginDrag.call(this);
        }
    });
}; // -END- public function mouseDown()
