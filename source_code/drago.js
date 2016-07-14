window['Drago'] = function(opts)
{
    "use strict";
    
    if (typeof this !== 'object' || this === window) {
        console.error('Drago: incorrect call without "new". Plugin Off!');
        return {};
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

    /**
     * to exclude dangerous use of the this object, wrap it
     */
    return (function (_this) {
        _this.draggable = document.querySelector(opts['draggable']);
        _this.grabable  = document.querySelector(opts['grabable']) || _this.draggable;

        if (!_this.draggable || !_this.lib.isParent(_this.draggable, _this.grabable)) {
            console.error('Drago: parameters is invalid or "draggable" is not a parent for "grabable". Plugin Off!');
            return {};
        }

        _this.opts = opts;
        _this.dragObject = {};

        _this.grabable.addEventListener('mousedown', function (event) {
            return _this.dragoOnMouseDown(event);
        });

        document.addEventListener('mousemove', function (event) {
            return _this.dragoOnMouseMove(event);
        });

        document.addEventListener('mouseup',  function (event) {
            return _this.dragoOnMouseUp(event);
        });
    })(this);
};