//pollution of the global namespace I know...this is temporary...
var masterWindow = DTH.UI.Create.homeWindowWithoutTabs();
var colorWindow = colorWindow = DTH.UI.Create.colorWindow();

(function() {
    
    // var masterTG = DTH.UI.Create.homeWindowWithTabs();

    var manNavTblView = DTH.UI.Create.buttonList([
        {
            title : 'Color', //theBlueprint.getColorStatusText()
            callback : function() {
                // if(colorWindow == null) {
                    // _.log('creting colorWindow');
                    // // colorWindow = DTH.UI.Create.colorWindow();
                    // //home.add(colorWindow);
                // }
                _.log(colorWindow);
                colorWindow.open();
            }
        }, {
            title : 'Desk',
            callback : function() { alert('Buton 2 clicked!');
            }
        }, {
            title : 'Lighting',
            callback : function() { alert('Buton 3 clicked!');
            }
        }
    ]);
    
    _.log(JSON.stringify(manNavTblView));
    //masterWindow.add(manNavTblView); Not showing up??
    masterWindow.add(DTH.UI.Create.button('Go To Exterior Color', function(){ colorWindow.open(); }));
    
    masterWindow.open();
    
    Ti.include('Colors.Exterior.js');
})();
