"use strict";
!function(e){
function a(){this.$realData=[]}

    a.prototype.createBarChart=function(e,a,r,t,o,i){
        Morris.Bar({
            element:e,data:a,xkey:r,ykeys:t,labels:o,hideHover:"auto",resize:!0,gridLineColor:"rgba(173, 181, 189, 0.1)",barSizeRatio:.2,dataLabels:!1,barColors:i
        })
    },

    a.prototype.createLineChart=function(e,a,r,t,o,i,n,s,l){
    Morris.Line({
        element:e,data:a,xkey:r,ykeys:t,labels:o,fillOpacity:i,pointFillColors:n,pointStrokeColors:s,behaveLikeLine:!0,gridLineColor:"rgba(173, 181, 189, 0.1)",hideHover:"auto",resize:!0,pointSize:0,dataLabels:!1,lineColors:l
    })},

    a.prototype.createDonutChart=function(e,a,r){
        Morris.Donut({
            element:e,data:a,resize:!0,colors:r,backgroundColor:"transparent"
        })},
        
        a.prototype.init=function()
        {
        e("#morris-bar-example").empty(),
       // e("#morris-line-example").empty(),
        e("#morris-donut-example").empty();

        this.createBarChart(
            "morris-bar-example",
            [
                {day:"MON",a:75},
                {day:"TUE",a:42},
                {day:"WED",a:75},
                {day:"THU",a:38},
                {day:"FRI",a:19},
                {day:"SAT",a:93},
                {day:"SUN",a:93}
            ],
                "day",
                ["a"],
                ["Statistics"],
                ["#188ae2"]
                );

        // this.createLineChart("morris-line-example",[{y:"2008",a:50,b:0},{y:"2009",a:75,b:50},{y:"2010",a:30,b:80},{y:"2011",a:50,b:50},{y:"2012",a:75,b:10},{y:"2013",a:50,b:40},{y:"2014",a:75,b:50},{y:"2015",a:100,b:70}],"y",["a","b"],["Series A","Series B"],["0.9"],["#ffffff"],["#999999"],["#10c469","#188ae2"]);

        this.createDonutChart(
            "morris-donut-example",
            [
                {label: "HADOOP", value: 35},
                {label: "MOBILE", value: 25},
                {label: "GRID", value: 20},
                {label: "DB", value: 15},
                {label: "ETC", value: 5}
            ],
            ["#ff8acc","#5b69bc","#35b8e0","#3c876b","#c8cccd"]
            )
        },
e.Dashboard1=new a,e.Dashboard1.Constructor=a
}(window.jQuery),
function(a){a.Dashboard1.init(),
    window.addEventListener("adminto.setBoxed",function(e){a.Dashboard1.init()}),
    window.addEventListener("adminto.setFluid",function(e){a.Dashboard1.init()})}(window.jQuery);
