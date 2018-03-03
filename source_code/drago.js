/**
 * @param {{
 *      draggable   :Element,
 *      grabable    :Element,
 *      onlyHor     :boolean,
 *      onlyVert    :boolean,
 *      onGrabBegin :function(Event):boolean,
 *      onGrabEnd   :function(Event):void,
 *      onDragBegin :function(Event):boolean,
 *      onDragEnd   :function(Event):void,
 *  }} opts
 */
var drago = function(opts)
{
    return wrapper(function()
    {
        if (!(opts = validateOpts(opts))) {
            console.error('Drago: was an errors while initialization. Plugin disabled.');
            return;
        }

        if (opts['draggable'][$GL.PLUGIN_MARK]) {
            return; // for prevent multiple creation Drag obgects on a same opts['draggable'] element.
        }

        opts['draggable'][$GL.PLUGIN_MARK] = !!new Drag(opts);
    });
}; // -END- function drago()

return drago;
