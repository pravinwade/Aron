var db = require('../_Dbconnection/db');
var httpMsgs = require("../_Crud/httpMsgs");
var util = require('util');

exports.InsertPurchaseOrderDetails = function (req, res, reqBody) {
    var value;

    if (!reqBody) {
        throw new Error("Input not valid");
    } else {
        var data = reqBody;

        if (data) {
            mysql = util.format(data);
            value = JSON.parse(mysql.replace('undefined', ''));

            db.execmysql("call spInsertPurchaseOrderDetails('" + value.POItemsId + "', '" + value.POPartsId + "', '" + value.PONumber + "', '" + value.PORecDate + "', '" + value.POEstShipDate + "', '" + value.POCost + "', '" + value.POPrice + "', '" + value.POCompleted + "')",
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

exports.UpdatePurchaseOrderDetails = function (req, res, reqBody) {
    var value;

    if (!reqBody) {
        throw new Error("Input not valid");
    } else {
        var data = reqBody;

        if (data) {
            mysql = util.format(data);
            value = JSON.parse(mysql.replace('undefined', ''));

            db.execmysql("call spUpdatePurchaseOrderDetails('" + value.PONumber + "', '" + value.PORecDate + "', '" + value.POEstShipDate + "', '" + value.POCost + "', '" + value.POPrice + "', '" + value.PurchaseOrderId + "')",
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

exports.DeletePurchaseOrderDetails = function (req, res, reqBody) {
    var value;

    if (!reqBody) {
        throw new Error("Input not valid");
    } else {
        var data = reqBody;

        if (data) {
            mysql = util.format(data);
            value = JSON.parse(mysql.replace('undefined', ''));

            db.execmysql("call spDeletePurchaseOrderDetails('" + value.PurchaseOrderId + "')",
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

exports.GetInsertPurchaseOrderCount = function (req, res, reqBody) {
    var value;

    if (!reqBody) {
        throw new Error("Input not valid");
    } else {
        var data = reqBody;

        if (data) {
            mysql = util.format(data);
            value = JSON.parse(mysql.replace('undefined', ''));

            db.execmysql("call spGetPurchaseOrderInsertCount('" + value.POItemsId + "', '" + value.POPartsId + "', '" + value.PONumber + "')",
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

exports.GetUpdatetPurchaseOrderCount = function (req, res, reqBody) {
    var value;

    if (!reqBody) {
        throw new Error("Input not valid");
    } else {
        var data = reqBody;

        if (data) {
            mysql = util.format(data);
            value = JSON.parse(mysql.replace('undefined', ''));

            db.execmysql("call spGetPurchaseOrderUpdateCount('" + value.PurchaseOrderId + "', '" + value.PONumber + "')",
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

exports.GetPOItemIdAndFixtureDetails = function (req, res) {
    db.execmysql("call spGetPOItemAndFixtureDetails()",
        function (data, err) {
            if (err) {
                httpMsgs.show500(req, res, err);
            } else {
                httpMsgs.sendJson(req, res, data);
            }
            res.end();
        })
}

exports.GetPartsWithPOPartId = function (req, res) {
    db.execmysql("call spGetPartsWithPOPartId()",
        function (data, err) {
            if (err) {
                httpMsgs.show500(req, res, err);
            } else {
                httpMsgs.sendJson(req, res, data);
            }
            res.end();
        })
}

exports.GetPurchaseOrderDetails = function (req, res) {
    db.execmysql("call spGetPurchaseOrderDetails()",
        function (data, err) {
            if (err) {
                httpMsgs.show500(req, res, err);
            } else {
                httpMsgs.sendJson(req, res, data);
            }
            res.end();
        })
}
