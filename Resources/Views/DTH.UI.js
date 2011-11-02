DTH = {
    UI : {
        Create : new CreateUIElements()
    }
};

function CreateUIElements() {
}

CreateUIElements.prototype.homeWindowWithTabs = function() {

    // create tab group
    var tabGroup = Titanium.UI.createTabGroup({
        id : 'tabGroup1'
    });

    //
    // create base UI tab and root window
    //
    var win1 = Titanium.UI.createWindow({
        className : 'win1',
        id: 'wind-1'
    });

    var tab1 = Titanium.UI.createTab({
        id : 'tab1',
        window : win1
    });

    //
    // create controls tab and root window
    //
    var win2 = Titanium.UI.createWindow({
        url : 'Views/Colors.Exterior.js',
        titleid : 'colors_win_title'
    });
    var tab2 = Titanium.UI.createTab({
        icon : 'images/tabs/KS_nav_ui.png',
        titleid : 'colors_win_title',
        window : win2
    });

    //
    // create phone tab and root window
    //
    var win3 = Titanium.UI.createWindow({
        url : 'Views/Desk.js',
        titleid : 'desk_win_title'
    });
    var tab3 = Titanium.UI.createTab({
        icon : 'images/tabs/KS_nav_phone.png',
        titleid : 'desk_win_title',
        window : win3
    });

    tabGroup.addTab(tab1);
    tabGroup.addTab(tab2);
    tabGroup.addTab(tab3);

    tabGroup.addEventListener('open', function() {
        // set background color back to white after tab group transition
        Titanium.UI.setBackgroundColor('#fff');
    });

    tabGroup.setActiveTab(1);
    // open tab group with a transition animation
    tabGroup.open({
        transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    });
    
    return tabGroup;

};


CreateUIElements.prototype.homeWindow = function() {
    _.log('createHomeWindow...');
    var home = Ti.UI.createWindow({
        exitOnClose : true, 
        backgroundImage: 'images/devtown_background_blueprint.jpg', 
        titleid: 'welcome_message'
    });
    
    return home;
};

CreateUIElements.prototype.colorWindow = function() {
    _.log('Create.colorWindow...');
    var colorWindow = Ti.UI.createWindow({
        backgroundImage: 'images/devtown_background_blueprint.jpg', 
        titleid : 'color_win_title'
    });

    return colorWindow;
};

CreateUIElements.prototype.view = function(overrideOptions) {
    _.log('createSampleView...');
    var options = _.merge({
        backgroundColor : '#ffffcc',
        height : 150
    }, overrideOptions || {});
    
    return Ti.UI.createView(options);
};

CreateUIElements.prototype.actionContainerWindow = function() {
    _.log('createActionContainerWindow...');
    return Ti.UI.createWindow({
        bottom : -1,
        left : 0,
        righ : 0,
        borderWidth : 1,
        borderColor : '#ccc',
        height : 200
    });
};

CreateUIElements.prototype.label = function(_labelText) {
    _.log('createSimpleLabel...');
    _labelText = _labelText || '';

    return Ti.UI.createLabel({
        backgroundColor : '#00cccc',
        text : _labelText
    });
};

CreateUIElements.prototype.button = function(_str, _options, _callback) {
    var options = _.merge({
        title: _str
    }, _options || {});
    var newBarButton = Ti.UI.createButton(options);

    newBarButton.addEventListener('click', _callback || function(){_.log('Callback was null, NoOp...');});
    return newBarButton;
};

CreateUIElements.prototype.barButton = function(_str, callback) {
    var newBarButton = Ti.UI.createButton({
        labels : [Ti.UI.createLabel({
            text : _str
        })]
    });

    newBarButton.addEventListener('click', callback);
    return newBarButton;
};

CreateUIElements.prototype.buttonList = function(_smplTblArray) {
    var tableView = Ti.UI.createTableView({ 
        allowsSelection: true 
    });
    
    var curTblRow = null;
    for( i = 0; i < _smplTblArray.length; i++) {
        curTblRow = Ti.UI.createTableViewRow({
            title : _smplTblArray[i].title
        });
        curTblRow.addEventListener('click', _smplTblArray[i].callback);
        _.log('About to add: ' + JSON.stringify(curTblRow) + ' to ' + JSON.stringify(tableView));
        tableView.appendRow(curTblRow);
    }
    return tableView;
}



