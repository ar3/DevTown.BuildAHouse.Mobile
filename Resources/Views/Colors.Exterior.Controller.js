// Ti.include('../Framework/SimpleFramework.js');
// Ti.include('../Biz/Blueprint.js');
// Ti.include('DTH.UI.js');
Ti.include('Colors.UI.js'); (function() {
    // var windowToAddThisStuffTo = Titanium.UI.currentWindow;
    var windowToAddThisStuffTo = DTH.UI.Windows.colorWindow;

    //If we use a differnt context we will need to send this guy back to the primary context...TODO: I think I'll make this be a single context, but that is still to be determined...
    var tmp = new Blueprint();

    //These are the colors to use...TODO: I've just picked random colors, in a random orde...would probably be better to put the most popular ones at the top, and then put shades of colors next to each other the rest of the way down, not to mention to get with the contractors and see what colors they have available...
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#550000', '#005500', '#000055', '#aa0000', '#00aa00', '#0000aa', '#C0C0C0', '#FFFFFF', '#000000', '#FFFF00', '#00FFFF', '#FF00FF', '#66CCCC', '#99CC99', '#CCFF66', '#FFFF33', '#6600FF', '#330000'];

    //---------
    // getColorSelectorArrayWithSameOnClickCallback simply accepts an array of colors, and a single callback, and puts this in a form that the color selector wants...
    //---------
    function getColorSelectorArrayWithSameOnClickCallback(colorStringArray, onClickCallback) {
        var newColors = [];

        for( i = 0; i < colorStringArray.length; i++) {
            newColors.push({
                color : colorStringArray[i],
                onClickCallback : onClickCallback
            });
        }
        return newColors;
    }

    //TODO: There is some good usability opportunity here if we made this house look a little closer to the real house..including a door, a window, maybe a roof...really good visual feedback opportunity here...
    //***************************************
    //
    // ExteriorHouseColors encapsulates the visible house on the screen and ties together the biz object properties
    //
    //***************************************
    function ExteriorHouseColors(_blueprintBizColorObj) {
        _.log('ExteriorHouseColors class constructor')
        // call base class constructor
        HouseColors.call(this, _blueprintBizColorObj);
    }

    //---------
    // changePrimaryColorOfInnerViews is basically an abstract method intended to be implemented by the child...so they can color in the stuff inside of the main block view
    //      -- such as the window and door of the outside, and the window/trimming of the interior
    //---------
    ExteriorHouseColors.prototype.changePrimaryColorOfInnerViews = function() {
        _.log('Put inner view Primary color change logic here...')
    };
    //---------
    // changePrimaryColorOfInnerViews is basically an abstract method intended to be implemented by the child...so they can color in the stuff inside of the main block view
    //      -- such as the window and door of the outside, and the window/trimming of the interior
    //---------
    ExteriorHouseColors.prototype.changePrimaryColorOfInnerViews = function() {
        _.log('Put inner view Trim color change logic here...')
    };
    // ExteriorHouseColors inherits from HouseColors
    ExteriorHouseColors.prototype = new HouseColors;
    ExteriorHouseColors.prototype.constructor = ExteriorHouseColors;

    var houseColorManager = new ExteriorHouseColors(tmp.getColors().interior);

    //---------
    // changePrimary is the callback function that is used to change the primary color of the house
    //  **Aware of the houseColorManager on this ssf context
    //---------
    function changePrimary(e) {
        houseColorManager.changePrimaryColor(e.backgroundColor);
    };

    //---------
    // changePrimary is the callback function that is used to change the primary color of the house
    //  **Aware of the houseColorManager on this ssf context
    //---------
    function changeTrim(e) {
        houseColorManager.changeTrimColor(e.backgroundColor);
    };

    //Add the House to the UI
    windowToAddThisStuffTo.add(houseColorManager.getUnderlyingView());

    //Add the primary color selector to the UI
    var primaryColorSelectorShell = Ti.UI.createScrollView(DTH.UI.ColorCreate.getPrimaryColorViewOptions(colors.length));

    DTH.UI.ColorCreate.addColorSelectors(primaryColorSelectorShell, getColorSelectorArrayWithSameOnClickCallback(colors, changePrimary));

    windowToAddThisStuffTo.add(primaryColorSelectorShell);

    //Add the trim color selector to the UI
    var trimColorSelectorShell = Ti.UI.createScrollView(DTH.UI.ColorCreate.getTrimColorViewOptions(colors.length));

    DTH.UI.ColorCreate.addColorSelectors(trimColorSelectorShell, getColorSelectorArrayWithSameOnClickCallback(colors, changeTrim));

    windowToAddThisStuffTo.add(trimColorSelectorShell);

    windowToAddThisStuffTo.add(DTH.UI.Create.label(L('colors_win_title')));
})();
