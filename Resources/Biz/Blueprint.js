function Blueprint() {
    
    this.CONSTANTS = {
        Lighting: {
            Interior: {
                Style: {
                    TrackLighting: 'Track Lighting',
                    Hanging: 'Hanging',
                    Florescent: 'Florescent'
                }
            },
            Exterior: {
                Style: {
                    Contemporary: 'Contemporary/Modern',
                    Traditional: 'Traditional'
                }
            }
        }
    };
    
    var _name = '';
    
    var _colors = {
        interior: {
            primary: '#ffffff',
            trim: '#000000'
        },
        exterior: {
            primary: '#ffffff',
            trim: '#000000'
        }
    };
    
    var _lighting = {
        interior: {
            style: this.CONSTANTS.Lighting.Interior.Style.TrackLighting
        },
        exterior: {
            style: this.CONSTANTS.Lighting.Exterior.Style.Contemporary,
            isWindowByDoor: false
        }
    };
    
    var _sendInfo = {
        sendTo: 'ar3@ar3.me',
        sentAt: null,
        specialInstructions: ''
    };
    
    var _lastVisitedPage = '';
    
    
    
    
    this.getName = function() { return _name; };
    this.setName = function(val) { _name = val; };
    
    this.getColors = function() { return _colors; };
    this.setColors = function(val) { _colors = val; };
    
    this.getLighting = function() { return _lighting; };
    this.setLighting = function(val) { _lighting = val; };
    
    this.getSendInfo = function() { return _sendInfo; };
    this.setSendInfo = function(val) { _sendInfo = val; };
    
    this.getLastVisitedPage = function() { return _lastVisitedPage; };
    this.setLastVisitedPage = function(val) { _lastVisitedPage = val; };
}