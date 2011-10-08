//***************************************
//
// CreateColorsUIElements encapsulates the creation of some of the basic UI elements needed for a Colors page...
//
//***************************************
function CreateColorsUIElements() {
    this.Constants = {
        SIZE_OF_BLOCK: 50,
        TOP_PADDING: 5,
        LEFT_PADDING: 5
    };
    
    this.colorBlockDefaultOptions = {
      width: this.Constants.SIZE_OF_BLOCK,
      height: this.Constants.SIZE_OF_BLOCK,
      borderWidth:2,
      borderRadius:2,
      borderColor: '#eee'  
    };
}


//---------
// addColorSelectors adds the given array of colors to the given parent
//   -- Handles the spacing
//---------
CreateColorsUIElements.prototype.addColorSelectors = function(parentView, arrayOfColors){
    var positionOfBlock = {
        topUnits: 0,
        leftUnits: 0
    }
    
    for(iOfColor = 0; iOfColor < arrayOfColors.length; iOfColor++) {
        //Calc absolute position of 50X50 unit blocks in rows of three
        positionOfBlock.topUnits = this.Constants.TOP_PADDING + (Math.floor((iOfColor / 3)) * this.Constants.SIZE_OF_BLOCK);
        positionOfBlock.leftUnits = ((iOfColor + 1) % 3) === 1 
            ? this.Constants.LEFT_PADDING 
            : ((iOfColor + 1) % 3) === 2 
                ? (this.Constants.LEFT_PADDING + this.Constants.SIZE_OF_BLOCK)
                : (this.Constants.LEFT_PADDING + (this.Constants.SIZE_OF_BLOCK * 2));
    
        parentView.add(
            this.createColorBlockView(
                {
                    top: positionOfBlock.topUnits,
                    left: positionOfBlock.leftUnits,
                    backgroundColor: arrayOfColors[iOfColor].color
                }, 
                arrayOfColors[iOfColor].onClickCallback));
    }
}




//---------
// createColorBlockView...should be self-describing
//---------
CreateColorsUIElements.prototype.createColorBlockView = function(configs, callback){
    var colorBlock = Ti.UI.createView(
        _.merge(this.colorBlockDefaultOptions, configs)
    );
    
    colorBlock.addEventListener('click', function(e) { e = _.merge(e, configs); callback.apply(this, [e]); });
    
    return colorBlock;
};

//---------
// getHouseViewOptions...should be self-describing
//---------
CreateColorsUIElements.prototype.getHouseViewOptions = function(colorBizObj){
    return {
       borderColor: colorBizObj.trim,
       borderWidth: 5,
       backgroundColor: colorBizObj.primary,
       top: 50,
       height: 150,
       width:150,
       left: 80
    }
};

CreateColorsUIElements.prototype.getPrimaryColorViewOptions = function(numberOfTotalColors){
    return {
       borderColor: '#ccc',
       borderRadius: 5,
       top: 250,
       width: 160,
       contentWidth: 160,
       left: 1,
       contentHeight: ((numberOfTotalColors / 3) * 60)
    };
};

CreateColorsUIElements.prototype.getTrimColorViewOptions = function(numberOfTotalColors){
    return {
       borderColor: '#ccc',
       borderRadius: 5,
       top: 250,
       width: 160,
       contentWidth: 160,
       left: 165,
       contentHeight: ((numberOfTotalColors / 3) * 60)
    };
};

DTH.UI.ColorCreate = new CreateColorsUIElements();










//***************************************
//
// DisplayHouse encapsulates the visible house on the screen and ties together the biz object properties
//      -- This closure is ment to be implemented by the exterior and interior
//
//***************************************
function HouseColors(_blueprintBizColorObj) {
    _.log('HouseColors base abstract class constructor')
    this.underlyingView = null;
    this.blueprintColor = _blueprintBizColorObj;
};

//---------
// changePrimaryColorOfInnerViews is basically an abstract method intended to be implemented by the child...so they can color in the stuff inside of the main block view
//      -- such as the window and door of the outside, and the window/trimming of the interior
//---------
HouseColors.prototype.changePrimaryColorOfInnerViews = function() {};

//---------
// changePrimaryColor calls all of the appropriate methods needed to change the primary color of this color set...
//      -- interacts with the biz object
//---------
HouseColors.prototype.changePrimaryColor = function(str) {
    this.underlyingView.backgroundColor = str;
    this.blueprintColor.primary = str;
    this.changePrimaryColorOfInnerViews();
};


//---------
// changeTrimColorOfInnerViews is basically an abstract method intended to be implemented by the child...so they can color in the stuff inside of the main block view
//      -- such as the window and door of the outside, and the window/trimming of the interior
//---------
HouseColors.prototype.changeTrimColorOfInnerViews = function() {
    
}

//---------
// changeTrimColor calls all of the appropriate methods needed to change the trim color of this color set...
//      -- interacts with the biz object
//---------
HouseColors.prototype.changeTrimColor = function(str) {
    this.underlyingView.borderColor = str;
    this.blueprintColor.trim = str;
};


//---------
// getUnderlyingView...lazy-loaded accessor of the underlying UI view property
//---------
HouseColors.prototype.getUnderlyingView = function() {
    if (this.underlyingView == null) {
        this.underlyingView = Ti.UI.createView(
            DTH.UI.ColorCreate.getHouseViewOptions(this.blueprintColor)); 
    }
    
    return this.underlyingView;
};
