/**
 * @param {MouseEvent} event
 */
Drag.prototype.mouseMove = function(event)
{
    var moveX = event.clientX - this.grabX,
        moveY = event.clientY - this.grabY;

    var onDragBegin = this.opts['onDragBegin'](event);

    if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3 ||
        !(this.movingStarted && (onDragBegin === undefined || onDragBegin))
    ) {
        return;
    }

    this.container.style.left = this.startLeft + moveX + 'px';
    this.container.style.top  = this.startTop  + moveY + 'px';

    this.opts['onDragEnd'](event);
}; // -END- public function mouseMove()
