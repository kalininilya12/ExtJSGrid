Ext.define('ExtJSGrid.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    items:
        [
            {
                region: 'center',
                flex: 1,
                title: 'Library',
                xtype: 'booklist',
                flex: 1,
                minHeight: 100
            }
        ]
});