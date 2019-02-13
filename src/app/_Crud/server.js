var http = require("http");
var settings = require("../_Dbconnection/connectionString");
var httpMsgs = require("../_Crud/httpMsgs");
var cross = require("../_Cors/cors");
var login = require("../_Controller/Login");
var PO = require("../_Controller/PO");
var Parts = require("../_Controller/Parts");
var Fixtures = require("../_Controller/Fixtures");

http.createServer(function (req, res) {
    cross(res);

    switch (req.method) {
        case "GET":
            if (req.url === "/getpodetails") {
                PO.GetPurchaseOrderDetails(req, res);
            } else if (req.url === "/getpartsdetails") {
                Parts.GetPartsDetails(req, res);
            } else if (req.url === "/getfixturesdetails") {
                Fixtures.GetFixturesDetails(req, res);
            } else if (req.url === "/getitemsidwithpixturedetails") {
                PO.GetPOItemIdAndFixtureDetails(req, res, reqBody);
            } else if (req.url === "/getpopartidwithparts") {
                PO.GetPartsWithPOPartId(req, res, reqBody);
            }
            break;
        case "OPTIONS":

            break;
        case "PUT":

            break;
        case "POST":
            if (req.url === "/insertpodetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        PO.InsertPurchaseOrderDetails(req, res, reqBody);
                    }
                });
            } else if (req.url === "/countinsertpodetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        PO.GetInsertPurchaseOrderCount(req, res, reqBody);
                    }
                });
            } else if (req.url === "/countupdatepodetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        PO.GetUpdatetPurchaseOrderCount(req, res, reqBody);
                    }
                });
            } else if (req.url === "/deletepodetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        PO.DeletePurchaseOrderDetails(req, res, reqBody);
                    }
                });
            } else if (req.url === "/updatepodetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        PO.UpdatePurchaseOrderDetails(req, res, reqBody);
                    }
                });
            } else if (req.url === "/insertpartsdetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        Parts.InsertPartsDetails(req, res, reqBody);
                    }
                });
            } else if (req.url === "/insertcountpartsdetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        Parts.GetInsertPartsCount(req, res, reqBody);
                    }
                });
            } else if (req.url === "/updatecountpartsdetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        Parts.GetUpdatetPartsCount(req, res, reqBody);
                    }
                });
            } else if (req.url === "/deletepartsdetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        Parts.DeletePartsDetails(req, res, reqBody);
                    }
                });
            } else if (req.url === "/updatepartsdetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        Parts.UpdatePartsDetails(req, res, reqBody);
                    }
                });
            } else if (req.url === "/insertfixturesdetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        Fixtures.InsertFixturesDetails(req, res, reqBody);
                    }
                });
            } else if (req.url === "/insertcountfixturesdetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        Fixtures.GetInsertFixturesCount(req, res, reqBody);
                    }
                });
            } else if (req.url === "/updatecountfixturesdetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        Fixtures.GetUpdatetFixturesCount(req, res, reqBody);
                    }
                });
            } else if (req.url === "/deletefixturesdetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        Fixtures.DeleteFixturesDetails(req, res, reqBody);
                    }
                });
            } else if (req.url === "/updatefixturesdetails") {
                var reqBody = '';

                req.on("data", function (data) {
                    reqBody += data;

                    if (reqBody.length > 1e7) {
                        httpMsgs.show413(req, res);
                        return false;
                    } else {
                        Fixtures.UpdateFixturesDetails(req, res, reqBody);
                    }
                });
            }
            break;
        default:
            httpMsgs.show405(req, res);
            break;
    }
}).listen(settings.webPort, function () {
    console.log("started listing at: " + settings.webPort);
})