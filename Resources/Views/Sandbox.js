(function() {
    // this sets the background color of the master UIView (when there are no windows/tab groups on it)
    Titanium.UI.setBackgrsoundColor('#fff');
    
    // create tab group
    var tabGroup = Titanium.UI.createTabGroup();
    
    
    //
    // create base UI tab and root window
    //
    var win1 = Titanium.UI.createWindow({  
        title:'Tab 1',
        backgroundColor:'#fff'
    });
    var tab1 = Titanium.UI.createTab({  
        icon:'KS_nav_views.png',
        title:'Tab 1',
        window:win1
    });
    
    
    var startBuildingButton = Titanium.UI.createButton({
        color:'#fff',
        //backgroundImage:'images/BUTT_grn_off.png',
        //backgroundSelectedImage:'images/BUTT_grn_on.png',
        //backgroundDisabledImage: 'images/BUTT_drk_off.png',
        top:110,
        width:301,
        height:57,
        font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
        title:'Start Building...'
    
    });
    
    var simpleCounter = 0;
    startBuildingButton.addEventListener('click', function() {
        _.log('Clicked: ' + (simpleCounter++).toString());
        try {
            _.log(JSON.stringify({hello:'world'}))
        } catch(ex){
            _.log(ex);
        }
    });
    
        
    
    var buttonLabel = Titanium.UI.createLabel({
        color : '#f00',
        highlightedColor : '#0f0',
        backgroundColor : 'transparent',
        width : '100',
        height : 'auto',
        right : 5,
        text : 'Custom Label'
    });
    
    startBuildingButton.add(buttonLabel);
    
    
    win1.add(startBuildingButton);
    
    
    
    
    
    
    
    
    
    
    
    
    
    var data = [
        {title:'Colors', hasChild:false, test:'Views/Colors.js'},
        {title:'Desk', hasChild:false, test:'Views/Desk.js'},
        {title:'Lighting', hasChild:false, test:'Views/Lighting.js'}
    ];
    
    // create table view
    var tableview = Titanium.UI.createTableView({
        data:data, 
        bottom:0
    });
    
    // create table view event listener
    tableview.addEventListener('click', function(e)
    {
        _.log('Table Clicked: ' + JSON.stringify(e));
        
        
        //if (e.rowData.test)
        //{
        //    var win = Titanium.UI.createWindow({
        //        url:e.rowData.test,
        //        title:e.rowData.title
        //    });
        //    Titanium.UI.currentTab.open(win,{animated:true});
        //}
    });
    
    
    // add table view to the window
    win1.add(tableview);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var bb1 = Titanium.UI.createButtonBar({
        labels:['One', 'Two', 'Three'],
        backgroundColor:'#336699',
        top:50,
        style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
        height:25,
        width:200
    });
    //win1.add(bb1);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var label1 = Titanium.UI.createLabel({
        color:'#999',
        text:'I am Window 1',
        font:{fontSize:20,fontFamily:'Helvetica Neue'},
        textAlign:'center',
        width:'auto'
    });
    
    win1.add(label1);
    
    //
    // create controls tab and root window
    //
    var win2 = Titanium.UI.createWindow({  
        title:'Tab 2',
        backgroundColor:'#fff'
    });
    var tab2 = Titanium.UI.createTab({  
        icon:'KS_nav_ui.png',
        title:'Tab 2',
        window:win2
    });
    
    var label2 = Titanium.UI.createLabel({
        color:'#999',
        text:'I am Window 2',
        font:{fontSize:20,fontFamily:'Helvetica Neue'},
        textAlign:'center',
        width:'auto'
    });
    
    win2.add(label2);
    
    
    
    //
    //  add tabs
    //
    tabGroup.addTab(tab1);  
    tabGroup.addTab(tab2);  
    
    
    // open tab group
    tabGroup.open();
});