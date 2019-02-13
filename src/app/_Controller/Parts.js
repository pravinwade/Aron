var db = require('../_Dbconnection/db');
var httpMsgs = require("../_Crud/httpMsgs");
var util = require('util');

exports.InsertPartsDetails = function (req, res, reqBody) {
    var value;

    if (!reqBody) {
        throw new Error("Input not valid");
    } else {
        var data = reqBody;

        if (data) {
            mysql = util.format(data);
            value = JSON.parse(mysql.replace('undefined', ''));

            db.execmysql("call spInsertPartsDetails('" + value.PartNumber + "', '" + value.PartName + "', '" + value.PartDescription + "', '" + value.PartVendor + "', '" + value.PartCost + "', '" + value.PartQuant + "')",
                function (data, err) {
                    if (err) {
                        httpMsgs.show500(req, res, err);
                    } else {
                        httpMsgs.sendJson(req, res, data);
                    }
                    res.end();
                })
        } else {
            httpMsgs.show404(req, res);
        }
    }
}

exports.UpdatePartsDetails = function (req, res, reqBody) {
    var value;

    if (!reqBody) {
        throw new Error("Input not valid");
    } else {
        var data = reqBody;

        if (data) {
            mysql = util.format(data);
            value = JSON.parse(mysql.replace('undefined', ''));

            db.execmysql("call spUpdatePartsDetails('" + value.PartId + "', '" + value.PartName + "', '" + value.PartDescription + "', '" + value.PartVendor + "', '" + value.PartCost + "', '" + value.PartQuant + "', '" + value.PartNumber + "')",
                function (data, err) {
                    if (err) {
                        httpMsgs.show500(req, res, err);
                    } else {
                        httpMsgs.sendJson(req, res, data);
                    }
                    res.end();
                })
        } else {
            httpMsgs.show404(req, res);
        }
    }
}

exports.DeletePartsDetails = function (req, res, reqBody) {
    var value;

    if (!reqBody) {
        throw new Error("Input not valid");
    } else {
        var data = reqBody;

        if (data) {
            mysql = util.format(data);
            value = JSON.parse(mysql.replace('undefined', ''));

            db.execmysql("call spDeletePartsDetails('" + value.PartId + "')",
                function (data, err) {
                    if (err) {
                        httpMsgs.show500(req, res, err);
                    } else {
                        httpMsgs.sendJson(req, res, data);
                    }
                    res.end();
                })
        } else {
            httpMsgs.show404(req, res);
        }
    }
}

exports.GetInsertPartsCount = function (req, res, reqBody) {
    var value;

    if (!reqBody) {
        throw new Error("Input not valid");
    } else {
        var data = reqBody;

        if (data) {
            mysql = util.format(data);
            value = JSON.parse(mysql.replace('undefined', ''));

            db.execmysql("call spGetPartsDetailsInsertCount('" + value.PartName + "')",
                function (data, err) {
                    if (err) {
                        httpMsgs.show500(req, res, err);
                    } else {
                        httpMsgs.sendJson(req, res, data);
                    }
                    res.end();
                })
        } else {
            httpMsgs.show404(req, res);
        }
    }
}

exports.GetUpdatetPartsCount = function (req, res, reqBody) {
    var value;

    if (!reqBody) {
        throw new Error("Input not valid");
    } else {
        var data = reqBody;

        if (data) {
            mysql = util.format(data);
            value = JSON.parse(mysql.replace('undefined', ''));

            db.execmysql("call spGetPartsDetailsUpdateCount('" + value.PartId + "', '" + value.PartName + "')",
                function (data, err) {
                    if (err) {
                        httpMsgs.show500(req, res, err);
                    } else {
                        httpMsgs.sendJson(req, res, data);
                    }
                    res.end();
                })
        } else {
            httpMsgs.show404(req, res);
        }
    }
}

exports.GetPartsDetails = function (req, res) {
    db.execmysql("call spGetPartsDetails()",
        function (data, err) {
            if (err) {
                httpMsgs.show500(req, res, err);
            } else {
                httpMsgs.sendJson(req, res, data);
            }
            res.end();
        })
}
