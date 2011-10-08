function HellaSimpleFramework() {
}

HellaSimpleFramework.prototype.log = function(str){
    Ti.API.info('**********INFO********** ' + str);
    //Ti.API.log('', 'LOG' + str);
    //Ti.API.debug('DEBUG' + str);
    //Ti.API.warn('WARN' + str);
};

HellaSimpleFramework.prototype.isNullEmptyOrDefault = function(obj) {
    if (typeof(obj) === 'undefined') return true;
    
};

HellaSimpleFramework.prototype.merge = function(slave, master) {
    if (typeof(slave) === 'undefined') throw 'Can\'t merge of slave is undefined';
    if (typeof(master) === 'undefined') throw 'Can\'t merge of master is undefined';
    
    if (slave == null) slave = {};
    if (master == null) master = {};
    
    for(curMasterProperty in master) {
        slave[curMasterProperty] = master[curMasterProperty];
    }
    return slave;
}
var _ = new HellaSimpleFramework();