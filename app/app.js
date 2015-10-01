Ext.Loader.setConfig({ enabled: true });
//var BookStore = Ext.create('Ext.data.Store', {
//    model: 'Book',
//    data: Ext.JSON.decode(userList)
//});
Ext.application({
    name: 'ExtJSGrid',
    path: 'app',
    autoCreateViewport: true,
    controllers: ['BooksController'],
    launch: function () {
        //Ext.create('Ext.grid.Panel', {
        //    renderTo: Ext.getBody(),
        //    store: ExtJSGrid.BookStore,
        //    width: 400,
        //    height: 200,
        //    title: 'Grid demo',
        //    columns: [
        //        {
        //            text: 'First Name',
        //            width: 100,
        //            dataIndex: 'Id'
        //        },
        //        {
        //            text: 'Last Name',
        //            width: 100,
        //            dataIndex: 'Author'
        //        },
        //        //{
        //        //    text: 'Email Address',
        //        //    width: 150,
        //        //    dataIndex: 'EmailAddress'
        //        //}
        //    ]
        //});
        //Ext.Create('Ext.container.Viewport', {
        //    layout: 'border',
        //    items:
        //        [
        //            {
        //                region: 'center',
        //                flex: 1,
        //                title: 'Library',
        //                xtype: 'booklist',
        //                flex: 1,
        //                minHeight: 100
        //            }
        //        ]
        //});
        //Manage Application

    }
});