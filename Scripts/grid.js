/// <reference path="http://cdn.sencha.com/ext/gpl/5.0.0/build/ext-all.js" />

//defining a Model 
Ext.define('UserList', {
    extend: 'Ext.data.Model',
    fields: ['firstName', 'lastName', 'emailAddress'] //you can comment these fields. It still works.
});

//Adding data for the defined model
var userStore = Ext.create('Ext.data.Store', {
    model: 'UserList',
    data: Ext.JSON.decode(userList)
});

//The ExtJS Application app
Ext.application({
    name: 'Grid demo',
    launch: function () {   

        //creating a panel to display the items
        Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            store: userStore,
            width: 400,
            height: 200,
            title: 'Grid demo',
            columns: [
                {
                    text: 'First Name',
                    width: 100,
                    dataIndex: 'FirstName'
                },  
                {
                    text: 'Last Name',
                    width: 100,
                    dataIndex: 'LastName'
                },
                {
                    text: 'Email Address',
                    width: 150,
                    dataIndex: 'EmailAddress'
                }
            ]
        });

    }
});
