$(function () {

    var object2 = [];

    $.getJSON('data.json', function (data) {
        console.log("DATA", data);
        var last_level = 0;
        var last_container = [];
        last_container[last_level] = ".container";
        $.each(data, function (i, f) {
            var container = last_container[f.level];

            if (container == undefined) {
                var i = f.level;
                while (i > 0) {
                    if (container != undefined)
                        break;
                    i--;
                    container = last_container[f.level - 1];
                }
            }
            $(container).append("<div style='margin-left:10px'>" + f.name + "/" + f.balance + "<span id='collapse" + i + "'></span></div>")
            last_level = f.level;
            last_container[f.level + 1] = "#collapse" + i;
        });
    });

});