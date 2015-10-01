Ext.define('ExtJSGrid.model.Book', {

    extend: 'Ext.data.Model',

    fields: [
                {
                    name: 'Id',
                    dataType: 'int',
                    optional: true
                },
                {
                    name: 'Author',
                    dataType: 'string',
                    optional: true
                },
                {
                    name: 'Name',
                    dataType: 'string',
                    optional: true
                }
    ],
    idproperty: 'Id',
    proxy: {
        type: 'ajax',
        //pageParam: false, //to remove param "page"
        //startParam: false, //to remove param "start"
        //limitParam: false, //to remove param "limit"
        //noCache: false, //to remove param "_dc"
        api: {
            read: '/Books/Load',
            //create: '/Books/Create',
            //update: '/Books/Update',
            //destroy: '/Books/Delete'
        },
        reader:         {
            type:'json',
            root: 'data'
        },
        writer:        {
        type: 'json',
        writeAllFields: true
        },
}
});