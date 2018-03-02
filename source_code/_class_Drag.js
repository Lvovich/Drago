/**
 * @param {Object} opts
 *
 * @constructor
 */
function Drag(opts)
{
    this.opts = opts;
    this.container = opts['draggable'];

    var _this = this;

    // for store context of different event handlers and possibility them to been removed (in this.mouseUp).
    this.mouseMoveListener = function(event){_this.mouseMove(event)};
    this.mouseUpListener   = function(event){_this.mouseUp(event)};

    opts['grabable'].addEventListener('mousedown', function(event){_this.mouseDown(event)});
} // -END- constructor Drag

//####################################################################################################################//
//                                                  Private helpers
//####################################################################################################################//

/**
 * @returns {boolean}
 *
 * @this {Drag}
 */
function beginDrag()
{
    this.container.style.left     = this.startLeft + 'px';
    this.container.style.top      = this.startTop  + 'px';
    this.container.style.position = 'fixed';
    this.container.style.zIndex   += 100000;

    document.addEventListener('mousemove', this.mouseMoveListener);
    document.addEventListener('mouseup',   this.mouseUpListener);

    return true;
} // -END- private function beginDrag()

/** --------------------------------------------------------------------------------------------------------------------
 * @returns {boolean}
 *
 * @this {Drag}
 */
function fix()
{
    this.container.style.zIndex = this.initial.zIndex;

    document.removeEventListener('mousemove', this.mouseMoveListener);
    document.removeEventListener('mouseup',   this.mouseUpListener);

    return false;
} // -END- private function fix()
