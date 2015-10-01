var filters = {
    ftype: 'filters',
    encode: true, 
    local: false
};
Ext.define('ExtJSGrid.view.book.List', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.booklist',
    store: 'BookStore',
    requires: ['ExtJSGrid.model.Book'],
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Add',
                    iconCls: 'icon-add'
                }]
        },
        {
            xtype: 'pagingtoolbar',
            pageSize: 10,
            store: 'BookStore',
            dock: 'bottom',
            displayInfo: true,
            beforePageText: 'Страница',
            afterPageText: 'из {0}',
            displayMsg: 'Книги {0} - {1} из {2}'
        }
    ],

    forceFit: true,
    columnLines: true,
    autoResizeColumns: true,
    selType: 'rowmodel',

    plugins: [
                Ext.create('Ext.grid.plugin.RowEditing', {
                    clicksToEdit: 2,
                    errorSummary: false,
                    listeners: 
                        {
                            validateedit: function(editor, context)
                            {
                                debugger;
                                var model = {
                                    Id: context.newValues["Id"],
                                    Author: context.newValues["Author"],
                                    Name: context.newValues["Name"]
                                };
                                //context.store.insert(context.record.internalId, model);
                                Ext.Ajax.request({
                                    url: 'Books/Update',
                                    params: model,
                                    method: 'PUT',
                                    callback: function (options, success, response) {
                                        if (success)
                                        {
                                            context.store.load();
                                        }
                                        debugger;
                                    },
                                    success: function (response, opts) {
                                        var obj = Ext.decode(response.responseText);
                                        console.dir(obj);
                                    },
                                    failure: function (response, options) {
                                        alert("Ошибка: " + response.statusText);
                                    }
                                })
                            }
                        }
                })],

    initComponent: function () {

        this.id = "list";

        this.columns = [
                {
                    header: 'Book Id',
                    dataIndex: 'Id',
                    sortable: false,
                    menuDisabled: true,
                    hidden: true
                },
                {
                    header: 'Название',
                    dataIndex: 'Name',
                    editable: true,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: true
                    },

                    sortable: false,
                    menuDisabled: true,

                    filter: {
                        type: 'string'
                    }

                },
                {
                    header: 'Автор',
                    dataIndex: 'Author',
                    editable: true,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: true
                    },

                    sortable: false,
                    menuDisabled: true,
                    filter: {
                        type: 'string'
                    }

                },
                {
                    xtype: 'actioncolumn',
                    width: 16,
                    align: 'center',
                    items: [
                        {
                            icon: '~/Content/icon-delete.png',
                            text: 'удалить',
                            tooltip: 'Delete',
                            handler: function (grid, rowIndex, colIndex) {
                                var model = grid.store.getAt(rowIndex);
                                debugger;
                                grid.store.removeAt(rowIndex);                                
                                Ext.Ajax.request({
                                    url: 'Books/Delete',
                                    params:  { id: model.data.Id},
                                    method: 'DELETE',
                                    success: function (response, opts) {
                                        var obj = Ext.decode(response.responseText);
                                        console.dir(obj);
                                    },
                                    failure: function (response, options) {
                                        alert("Ошибка: " + response.statusText);
                                    }
                                })
                            }
                        }]
                }

        ];

        this.callParent(arguments);
    },
    features: [
        //{
        //    ftype: 'filters',
        //    local: false,
        //    encode: true
        //}
    ],


});