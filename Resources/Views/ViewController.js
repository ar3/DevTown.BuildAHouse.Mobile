//pollution of the global namespace I know...this is temporary...
DTH.UI.Windows = {};
DTH.UI.Windows.masterWindow = DTH.UI.Create.homeWindow();
DTH.UI.Windows.colorWindow = DTH.UI.Create.colorWindow();
DTH.UI.Navigation = {};
DTH.UI.Navigation.navBar = DTH.UI.Create.view({title: 'navBar', top: 0});
 

(function() {

DTH.UI.Navigation.navBar.add(DTH.UI.Create.button('back', {left:50, visible: true, zIndex: 900}, function(){ DTH.UI.Windows.masterWindow.open() }));
DTH.UI.Navigation.navBar.add(DTH.UI.Create.button('forward', {right:50, visible: true, zIndex: 900}, function(){ DTH.UI.Windows.colorWindow.open() }));

    // var masterTG = DTH.UI.Create.homeWindowWithTabs();

    var manNavTblView = DTH.UI.Create.buttonList([{
        title : 'Color', //theBlueprint.getColorStatusText()
        callback : function() {
            // if(colorWindow == null) {
            // _.log('creting colorWindow');
            // // colorWindow = DTH.UI.Create.colorWindow();
            // //home.add(colorWindow);
            // }
            _.log(colorWindow);
            //colorWindow.open();
        }
    }, {
        title : 'Desk',
        callback : function() { alert('Buton 2 clicked!');
        }
    }, {
        title : 'Lighting',
        callback : function() { alert('Buton 3 clicked!');
        }
    }]);

    _.log(JSON.stringify(manNavTblView));
    //DTH.UI.Windows.masterWindow.add(manNavTblView); // Not showing up??
    //DTH.UI.Windows.masterWindow.add(DTH.UI.Create.button('Go To Exterior Color', function(){ DTH.UI.Windows.colorWindow.open(); }));

    var data = [{
        title : 'Row 1',
        hasChild : true,
        color : 'red',
        selectedColor : '#fff'
    }, {
        title : 'Row 2',
        hasDetail : true,
        color : 'green',
        selectedColor : '#fff'
    }, {
        title : 'Row 3',
        hasCheck : true,
        color : 'blue',
        selectedColor : '#fff'
    }, {
        title : 'Row 4',
        color : 'orange',
        selectedColor : '#fff'
    }];

    // create table view
    var tableview = Titanium.UI.createTableView({
        data : data
    });

    DTH.UI.Windows.masterWindow.add(manNavTblView);
    DTH.UI.Windows.colorWindow.add(manNavTblView);
    DTH.UI.Windows.colorWindow.add(DTH.UI.Navigation.navBar);


    var closeMeLabel = DTH.UI.Create.label('Color Window');
    closeMeLabel.addEventListener('click', function() {
        _.log('colorLabel CLicked');
        DTH.UI.Windows.masterWindow.open();
    });
DTH.UI.Windows.colorWindow.add(closeMeLabel);

    var homeLabel = DTH.UI.Create.label('Color Window');
    homeLabel.addEventListener('click', function() {
        _.log('homeLabel CLicked');
        DTH.UI.Windows.masterWindow.close();
        
    });
DTH.UI.Windows.masterWindow.add(homeLabel);

    
    DTH.UI.Windows.colorWindow.open();
    Ti.include('Colors.Exterior.Controller.js');
})();
