/** @const {Object} - inner "global" object for storing plugin data. */
var $GL = Object.create(null);

/** Safe setting of inner constants */
wrapper(function()
{
    /** @const {string} - roperty appended to opts['draggable'] element, to mark its already draggable. */
    $GL.PLUGIN_MARK = 'drago_' + Math.random().toString(36).replace('.', '_');

    /** @const {function():boolean} - Function stub. */
    $GL.funcStub = function(){return true};
});

/** --------------------------------------------------------------------------------------------------------------------
 * Common wrapper for all plugin functions. Provides possibility of catching them errors.
 *
 * @param {function()} callback
 */
function wrapper(callback)
{
    try {
        return callback.call(this);
    }
    catch (e) {
        return errorHandler(e);
    }
} // -END- function wrapper()

/** --------------------------------------------------------------------------------------------------------------------
 * Common error handler.
 *
 * @param {Error} ex
 */
function errorHandler(ex)
{
    console.dir(ex);
} // -END- function wrapper()

/** --------------------------------------------------------------------------------------------------------------------
 * Check initial parameters.
 *
 * @param {?} opts - @see drago description.
 *
 * @returns {?} - validated & complemented parameters (full list) or null on errors.
 */
function validateOpts(opts)
{
    if (!opts['draggable'].parentElement) {
        console.warn('Drago: parameter "draggable" is invalid.');
        return null;
    }

    if (!opts['grabable'].parentElement) {
        opts['grabable'] = opts['draggable'];
    }

    opts['onlyHor']  = !!opts['onlyHor'];
    opts['onlyVert'] = !!opts['onlyVert'];

    opts['onGrabBegin'] = opts['onGrabBegin'] || $GL.funcStub;
    opts['onGrabEnd']   = opts['onGrabEnd']   || $GL.funcStub;
    opts['onDragBegin'] = opts['onDragBegin'] || $GL.funcStub;
    opts['onDragEnd']   = opts['onDragEnd']   || $GL.funcStub;

    return opts;
} // -END- function validateOpts()
