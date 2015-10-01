var me = "";
Ext.define('ExtJSGrid.controller.BooksController', {

    extend: 'Ext.app.Controller',
    stores: ['BookStore'],
    models: ['Book'],
    views: ['book.List'],
    init: function () {
        me = this;
        debugger;
        this.control(
                {

                    'button[text=Add]':
                    {

                        //could have handled in # handler # of toolbar button
                        // but to keep view isolated from thick event handlers moved here

                        click: this.addRow
                    }

                });

    },

    addRow: function (e) {
        var store = this.getBookStoreStore();
        //store.load(function (records, operation, success) {
        //    console.log('loaded records');
        //});
        var isBlank = false;

        //Restrict empty album count to one. Should this validation be moved to Model.?

        store.each(function (record) {
            if (null == record.data['Author'] && null == record.data['Name']) {
                debugger;
                Ext.Msg.show(
                                {
                                    title: 'Warning',
                                    msg: 'Please update the blank album first.',
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.Msg.WARNING
                                });
                if (null == record.index)
                    record.index = 0;
                isBlank = true
                //there could be a clean approach to achieve this..?
                var grid = Ext.ComponentQuery.query('booklist')[0];
                grid.plugins[0].startEdit(record.index, 1);
                return false; //break the loop
            }

        });
        if (!isBlank) {
            debugger;
            var model = Ext.create('ExtJSGrid.model.Book',{         
                Id: 0,
                Author: null,
                Name: null
            });

            
            //[....could have restricted to create empty record in database with this.getAlbumsStore().autoSync=false]
            //Create empty album in database. Populate it's id when created.
           e.ownerCt.ownerCt.store.insert(0, model);

        }
    },

});