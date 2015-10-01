Ext.define('ExtJSGrid.store.BookStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    pageSize: 10,
    root: 'data',
    autoSync: true,
    totalProperty: 'total',
    model: 'ExtJSGrid.model.Book',
    //data: Ext.JSON.decode(userList)
    //proxy: {
    //    type: 'rest',
    //    //url:'Books/Index',
    //    api: {
    //        read: '/Books/Load',
    //        create: '/Books/Create',
    //        update: '/Books/Update',
    //        destroy: '/Books/Delete'
    //    },
        //reader: {
        //    type: 'json',
        //    id: 'Id',
        //    root: 'data',
        //    successProperty: 'success'
        //},
        //writer: {
        //    encode: false,
        //    listful: true,
        //    writeAllFields: true
        //},
        //headers: 
        //    {
        //        'Content-Type': 'application/json; charset=UTF-8' 
        //    }
    //},
    //listeners: {
        //update: function (t, rec) {
        //    debugger;
        //    var model = Ext.create('ExtJSGrid.model.Book', {
        //        Id: rec.data.Id,
        //        Author: rec.data.Author,
        //        Name: rec.data.Name
        //    });
        //    var coll = Ext.create('Ext.util.MixedCollection', { 
        //            Key :'ff',
        //            Value: 3
        //    });
        //    var data = Ext.JSON.encode(model);
        //    Ext.Ajax.abortAll();
        //    Ext.Ajax.request({
        //        url: 'Books/Update',
        //        params: coll,
        //        method: 'POST',
        //        success: function (response, opts) {
        //            var obj = Ext.decode(response.responseText);
        //            console.dir(obj);
        //        },
        //        failure: function (response, options) {
        //            alert("Ошибка: " + response.statusText);
        //        }
        //    })
        //}
    //}
    //afterRequest: function (request, success) 
    //{
    //    debugger;
    //    if (request.action == 'read') {
    //        this.readCallback(request);
    //    }
            
    //    else if (request.action == 'create') {
    //        this.createCallback(request);
    //    }
            
    //    else if (request.action == 'update') {
    //        this.updateCallback(request);
    //    }
            
    //    else if (request.action == 'destroy') {
    //        this.deleteCallback(request);
    //    }
    //},
});