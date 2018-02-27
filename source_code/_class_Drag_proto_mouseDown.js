/**
 * @param {MouseEvent} event
 */
Drag.prototype.mouseDown = function(event)
{
    var onGrabBegin = this.opts['onGrabBegin'](event),
        coords = this.container.getBoundingClientRect(),
        self = this;

    if (!(event.button === 0 && (onGrabBegin === undefined || onGrabBegin))) {
        return;
    }

    this.grabX = event.clientX;
    this.grabY = event.clientY;

    /** @const */
    this.initial = {
        zIndex : this.container.style.zIndex || ''
    };

    this.startLeft = coords.left;
    this.startTop  = coords.top;

    this.container.style.left     = coords.left + 'px';
    this.container.style.top      = coords.top  + 'px';
    this.container.style.position = 'fixed';
    this.container.style.zIndex   += 100000;

    this.movingStarted = true;

    // for store context and possibility to been removed (in this.mouseUp) of different event handlers.
    this.mouseMoveListener = function(event){self.mouseMove(event)};
    this.mouseUpListener   = function(event){self.mouseUp(event)};

    document.addEventListener('mousemove', this.mouseMoveListener);
    document.addEventListener('mouseup',   this.mouseUpListener);
}; // -END- public function mouseDown()
