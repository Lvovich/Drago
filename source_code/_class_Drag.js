/**
 * @param {Object} opts
 *
 * @constructor
 */
function Drag(opts)
{
    this.opts = opts;
    this.container = opts['draggable'];

    var self = this;

    opts['grabable'].addEventListener('mousedown', function(event){self.mouseDown(event)});
} // -END- constructor Drag
