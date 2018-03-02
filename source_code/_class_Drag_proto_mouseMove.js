/**
 * @param {MouseEvent} event
 */
Drag.prototype.mouseMove = function(event) {
    return wrapper.call(this, function()
    {
        var onDragBeginResult = this.opts['onDragBegin'](event);

        var xm = event.clientX - this.grabX,
            ym = event.clientY - this.grabY;

        if ((Math.abs(xm) > 2 || Math.abs(ym) > 2) &&
            this.inDragging &&
            (onDragBeginResult || onDragBeginResult === undefined)
        ) {
            this.container.style.left = this.startLeft + xm + 'px';
            this.container.style.top  = this.startTop  + ym + 'px';

            this.opts['onDragEnd'](event);
        }
    });
}; // -END- public function mouseMove()
