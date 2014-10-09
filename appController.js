define(function(require) {
    'use strict';

    var Class               = require('common/Class'),
        ModuleController    = require('common/platform/ModuleController'),
        TelematicsAPI       = require('common/platform/TelematicsAPI');


    //
    // Module scope variables and functions
    //
    var telematics, view;

    var onOilLevel = function(level) {
        view.displayOilLife(level);
    };

    var onChargeLevel = function(charge) {
        view.displayChargeLevel(charge);
    };

    var onVehicleLatitude = function(val) {
        view.displayLat(val);
    };
     
    var onVehicleLongitude = function(val) {
        view.displayLong(val);
    };
     
    var onFrontLeftTread = function (percent) {
        view.displayFrontLeftTread(percent);
    };
     
    var onFrontRightTread = function (percent) {
        view.displayFrontRightTread(percent);
    };
     
    var onRearLeftTread = function (percent) {
        view.displayRearLeftTread(percent);
    };
     
    var onRearRightTread = function (percent) {
        view.displayRearRightTread(percent);
    };

    var onOdometer = function(km) {
        view.displayOdometer(km);
    };

    var onClutch = function(val) {
        view.displayClutchWear(val);
    };

    var frontLeft = function(val) {
       view.displayBrakes(val);
 
    };

    var frontRight = function(val) {
        view.displayB(val);
    };

    var backLeft = function(val) {
        view.xx(val);
    };

    var backRight = function(val) {
        view.yy(val);
    };

    /*
     This is the application "controller" module.
     */
    return Class.create(
        ModuleController,
        {
            /*
             Called prior the application being displayed, but after both the module controller's init()
             and module view's init() are complete.
             */
            beforeStart: function($super) {
                telematics = new TelematicsAPI();

                telematics.subscribe(TelematicsAPI.Event.ENGINE_OIL_LIFE_REMAINING, onOilLevel);
                telematics.subscribe(TelematicsAPI.Event.LEVELOF_CHARGE, onChargeLevel);
                telematics.subscribe(TelematicsAPI.Event.LATITUDE, onVehicleLatitude);
                telematics.subscribe(TelematicsAPI.Event.LONGITUDE, onVehicleLongitude);
                telematics.subscribe(TelematicsAPI.Event.TIRE_WEAR_FRONT_LEFT, onFrontLeftTread);
                telematics.subscribe(TelematicsAPI.Event.TIRE_WEAR_FRONT_RIGHT, onFrontRightTread);
                telematics.subscribe(TelematicsAPI.Event.TIRE_WEAR_REAR_LEFT, onRearLeftTread);
                telematics.subscribe(TelematicsAPI.Event.TIRE_WEAR_REAR_RIGHT, onRearRightTread);
                telematics.subscribe(TelematicsAPI.Event.ODOMETER, onOdometer);
                telematics.subscribe(TelematicsAPI.Event.CLUTCH_WEAR_LEVEL, onClutch);
               
                telematics.subscribe(TelematicsAPI.Event.BRAKE_PAD_WEAR_FRONT_LEFT,frontLeft);
                telematics.subscribe(TelematicsAPI.Event.BRAKE_PAD_WEAR_FRONT_RIGHT,frontRight);
                telematics.subscribe(TelematicsAPI.Event.BRAKE_PAD_WEAR_REAR_LEFT,backLeft);
                telematics.subscribe(TelematicsAPI.Event.BRAKE_PAD_WEAR_REAR_RIGHT,backRight);

                view = this.getView();

                telematics.getEngineOilLifeRemaining().done(function(level){
                    onOilLevel(level);
                });

                telematics.getLevelofCharge().done(function(charge){
                    onChargeLevel(charge);
                });

                telematics.getGpsLatitude().done(function(val) {
                    onVehicleLatitude(val);
                });
             
                telematics.getGpsLongitude().done(function(val) {
                    onVehicleLongitude(val);
                });
             
                telematics.getTireWearFrontLeft().done(function(percent) {
                    onFrontLeftTread(percent);
                });
             
                telematics.getTireWearFrontRight().done(function(percent) {
                    onFrontRightTread(percent);
                });
             
                telematics.getTireWearRearLeft().done(function(percent) {
                    onRearLeftTread(percent);
                });
             
                telematics.getTireWearRearRight().done(function(percent) {
                    onRearRightTread(percent);
                });

                telematics.getOdometer().done(function(km) {
                    onOdometer(km);
                });

                telematics.getClutchWearLevel().done(function(val) {
                    onClutch(val);
                });

                telematics.getBrakePadWearFrontLeft().done(function(val) {
                    frontLeft(val);
                });

                telematics.getBrakePadWearFrontRight().done(function(val) {
                    frontRight(val);
                });

                telematics.getBrakePadWearRearLeft().done(function(val) {
                    backLeft(val);
                });

                telematics.getBrakePadWearRearRight().done(function(val) {
                    backRight(val);
                });

                return $super();
            }
        }

    );

});