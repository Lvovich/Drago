/** @const {function():boolean} - Function stub. */
var FUNC_STUB = function(){return true};

/** @const {string} - local attribute appended to opts['draggable'] element, for keeping its inner ID. */
var LA = 'a' + Math.random().toString(36).replace('.', '_') + '_drago';

/** --------------------------------------------------------------------------------------------------------------------
 * @param {Object} opts
 */
window['Drago'] = function dragos(opts)
{
    if (!(opts = validateOpts(opts))) {
        console.error('Drago: was an errors while initialization. Plugin disabled.');
        return;
    }

    // for prevent multiple creation Drago obgects on a same opts['draggable'] element.
    if ((dragos.list = dragos.list || {}) && dragos.list[opts['draggable'][LA]]) {
        return dragos.list[opts['draggable'][LA]];
    }

    var eid = Math.random().toString(36).replace('.', '');
    opts['draggable'][LA] = eid;

    dragos.list[eid] = new Drag(opts);

    opts['grabable'].addEventListener('mousedown', function(event){dragos.list[eid].mouseDown(event)});
}; // -END- constructor Drago

//####################################################################################################################//
//                                                      Helpers
//####################################################################################################################//

/**
 * Check initial parameters.
 *
 * @param {Object} opts
 *
 * @returns {Object} - validated & complemented parameters (full list) or null at errors.
 */
function validateOpts(opts)
{
    if (!(typeof opts['draggable'] === 'object' && opts['draggable'].parentNode)) {
        console.warn('Drago: parameter "draggable" is invalid.');
        return null;
    }

    if (!(typeof opts['grabable'] === 'object' && opts['grabable'].parentNode)) {
        opts['grabable'] = opts['draggable'];
    }

    opts['onGrabBegin'] = typeof opts['onGrabBegin'] === 'function' ? opts['onGrabBegin'] : FUNC_STUB;
    opts['onGrabEnd']   = typeof opts['onGrabEnd']   === 'function' ? opts['onGrabEnd']   : FUNC_STUB;
    opts['onDragBegin'] = typeof opts['onDragBegin'] === 'function' ? opts['onDragBegin'] : FUNC_STUB;
    opts['onDragEnd']   = typeof opts['onDragEnd']   === 'function' ? opts['onDragEnd']   : FUNC_STUB;

    return opts;
} // -END- function validateOpts()
