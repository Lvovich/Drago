window['Drago'] = function(opts)
{
    "use strict";
    
    if (this === window) {
        console.error('Drago: incorrect call without "new". Plugin Off!');
        return null;
    }

    (function prepareParams() {
        opts['draggable'] = ('' + opts['draggable']) || '.eff422e211a0627fh5widcc88e75b314146';
        opts['grabable']  = ('' + opts['grabable'])  || '.eff422e211a0627fh5widcc88e75b314146';
        
        if (typeof opts['onDragBegin'] !== 'function') {
            opts['onDragBegin'] = function() {};
        }
        
        if (typeof opts['onDragEnd'] !== 'function') {
            opts['onDragEnd'] = function() {};
        }
    })();

    this.draggable = document.querySelector(opts['draggable']);
    this.grabable  = document.querySelector(opts['grabable']) || this.draggable;

    if (!this.draggable || !this.lib.isParent(this.draggable, this.grabable)) {
        console.error('Drago: parameters is invalid or "draggable" is not a parent for "grabable". Plugin Off!');
        return null;
    }

    this.opts = opts;
    this.dragObject = {};
    
    var CONTEXT = this;

    /** ----------------------------------------------------------------------------------------------------------------
     *
     */
    this.grabable.addEventListener('mousedown', function (event) {
        return CONTEXT.dragoOnMouseDown(event);
    }); // -END- this.grabable.addEventListener('mousedown', function (event) {})

    /** ----------------------------------------------------------------------------------------------------------------
     *
     */
    document.addEventListener('mousemove', function (event) {
        return CONTEXT.dragoOnMouseMove(event);
    }); // -END- document.addEventListener('mousemove', function(event) {})

    /** ----------------------------------------------------------------------------------------------------------------
     *
     */
    document.addEventListener('mouseup', function (event) {
        return CONTEXT.dragoOnMouseUp(event);
    }); // -END- document.addEventListener('mousemove', function(event) {})
};