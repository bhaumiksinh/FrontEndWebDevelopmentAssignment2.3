var GetSet = (function () {
    function GetSet() {
    }
    Object.defineProperty(GetSet.prototype, "user", {
        get: function () {
            return this.username;
        },
        set: function (uname) {
            this.username = uname;
        },
        enumerable: true,
        configurable: true
    });
    GetSet.prototype.checkUserName = function () {
        if (this.username != "Bhaumik") {
            return "Invalid Username";
        }
        else {
            return "Valid Username";
        }
    };
    return GetSet;
}());
var obj;
obj = new GetSet;
