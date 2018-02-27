/**
 * @param {MouseEvent} event
 */
Drag.prototype.mouseUp = function(event)
{
    if (this.movingStarted) {
        this.fix();
        this.movingStarted = false;

        this.opts['onGrabEnd'](event);
    }

    document.removeEventListener('mousemove', this.mouseMoveListener);
    document.removeEventListener('mouseup',   this.mouseUpListener);
}; // -END- public function mouseUp()
