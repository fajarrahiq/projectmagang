var d = new Date();
document.getElementById("tanggal").innerHTML = d.toDateString();

var acc = document.getElementsByClassName("accordion");
var i;

 $(function () {
        $.getJSON('data.json', function (data) {
          $.each(data, function (i, f) {
            if (f.level == 0){
            $(".panel0").append("<div style='text-indent:" + (f.level) * 15 + "px'>" + f.name + "<div style='float:right'>" + f.balance + "<span id ='collapse" + i + "'></span></div>");
          };
          if (f.name == "Assets"){
            $(".panel1").append("<div style='text-indent:" + (f.level) * 15 + "px'>" + f.name + "<div style='float:right'>" + f.balance + "<span id ='collapse" + i + "'></span></div>");
          };
          if (f.name == "Liability" && f.level == 1){
            $(".panel11").append("<div style='text-indent:" + (f.level) * 15 + "px'>" + f.name + "<div style='float:right'>" + f.balance + "<span id ='collapse" + i + "'></span></div>");
          };
          if (f.level == 2 && f.name == "Liability" ){
            $(".panel2").append("<div style='text-indent:" + (f.level) * 25 + "px'>" + f.name + "<div style='float:right'>" + f.balance + "<span id ='collapse" + i + "'></span></div>");
          };
          if (f.name == "Profit (Loss) to report"){  
            $(".panel22").append("<div style='text-indent:" + (f.level) * 25 + "px'>" + f.name + "<div style='float:right'>" + f.balance + "<span id ='collapse" + i + "'></span></div>");
          };
          if (f.account_type == "payable"){
            $(".panel44").append("<div style='text-indent:" + (f.level) * 15 + "px'>" + f.name + "<div style='float:right'>" + f.balance + "<span id ='collapse" + i + "'></span></div>");
          };
          if (f.account_type == "receivable"){
            $(".panel4").append("<div style='text-indent:" + (f.level) * 15 + "px'>" + f.name + "<div style='float:right'>" + f.balance + "<span id ='collapse" + i + "'></span></div>");
          };
          if (f.level == 5){
            $(".panel").append("<div style='text-indent:" + (f.level) * 15 + "px'>" + f.name + "<div style='float:right'>" + f.balance + "<span id ='collapse" + i + "'></span></div>");
          };
          });
        });
      });