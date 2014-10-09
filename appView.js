define(function(require) {
    'use strict';

    var Class       = require('common/Class'),
        Control     = require('common/ui/Control'),
        ModuleView  = require('common/platform/ModuleView');

    /*
     This is the application "view" module.
     */

    return Class.create(
        ModuleView,
        {

            displayOilLife: function(level) {
                              if(level <= 20) {
                    levelOfChargeDisplay.style.color = "red";
                } else if(level <= 50) {
                    levelOfChargeDisplay.style.color = "yellow";
                } else {
                    levelOfChargeDisplay.style.color = "white";
                }
                var control = Control.getById("oilLifeDisplay");
                control.model.set('text', level);
            },
            displayChargeLevel: function(charge) {
                if(charge <= 20) {
                    levelOfChargeDisplay.style.color = "red";
                } else if(charge <= 50) {
                    levelOfChargeDisplay.style.color = "yellow";
                } else {
                    levelOfChargeDisplay.style.color = "white";
                }
                var control = Control.getById("levelOfChargeDisplay");
                control.model.set('text', charge);
            },
 
           displayLat: function (lat) {
                var control = Control.getById("x");
                control.model.set('text', lat);
           },
 
           displayLong: function (lon) {
                var control = Control.getById("long");
                control.model.set('text', lon);
           },
 
           displayFrontLeftTread: function (val) {
                            if(val <= 20) {
                    y.style.color = "red";
                } else if(val <= 50) {
                    y.style.color = "yellow";
                } else {
                    y.style.color = "white";
                }
                var control = Control.getById("y");
                control.model.set('text', val);
           },
 
           displayFrontRightTread: function (val) {
                                        if(val <= 20) {
                    a.style.color = "red";
                } else if(val <= 50) {
                    a.style.color = "yellow";
                } else {
                    a.style.color = "white";
                }
                var control = Control.getById("a");
                control.model.set('text', val);
           },
 
           displayRearLeftTread: function (val) {
                                                    if(val <= 20) {
                    b.style.color = "red";
                } else if(val <= 50) {
                    b.style.color = "yellow";
                } else {
                    b.style.color = "white";
                }
                var control = Control.getById("b");
                control.model.set('text', val);
           },
 
           displayRearRightTread: function (val) {
                                                    if(val <= 20) {
                    c.style.color = "red";
                } else if(val <= 50) {
                    c.style.color = "yellow";
                } else {
                    c.style.color = "white";
                }
                var control = Control.getById("c");
                control.model.set('text', val);
           },

           displayOdometer: function(km) {
                var control = Control.getById("odo");
                control.model.set('text',km);
            },

            displayClutchWear: function(val) {

                var control = Control.getById("clutch");
                control.model.set('text',val);
            },

            displayBrakes: function(fL) {
                                                        if(fL <= 20) {
                    leftbrake1.style.color = "red";
                } else if(fL <= 50) {
                    leftbrake1.style.color = "yellow";
                } else {
                    leftbrake1.style.color = "white";
                }
                var control = Control.getById("leftbrake1");
                control.model.set('text', fL);
            },

            displayB:function(val) {
                                                                        if(val <= 20) {
                    leftbrake2.style.color = "red";
                } else if(val <= 50) {
                    leftbrake2.style.color = "yellow";
                } else {
                    leftbrake2.style.color = "white";
                }
                var control = Control.getById("leftbrake2");
                control.model.set('text',val);
            },

            xx:function(val) {
                                                                        if(val <= 20) {
                    yy.style.color = "red";
                } else if(val <= 50) {
                    yy.style.color = "yellow";
                } else {
                    yy.style.color = "white";
                }
                var control = Control.getById("yy");
                control.model.set('text',val);
            },
            
            yy:function(val) {
                                                                                        if(val <= 20) {
                    zz.style.color = "red";
                } else if(val <= 50) {
                    zz.style.color = "yellow";
                } else {
                    zz.style.color = "white";
                }
                var control = Control.getById("zz");
                control.model.set('text',val);
            }
        }
    );
});
