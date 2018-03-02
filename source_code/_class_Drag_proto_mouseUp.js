/**
 * @param {MouseEvent} event
 */
Drag.prototype.mouseUp = function(event)
{
    return wrapper.call(this, function()
    {
        this.inDragging = fix.call(this);
        this.opts['onGrabEnd'](event);
    });
};
