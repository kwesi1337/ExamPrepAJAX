$(window).load(function () {

var svg = $("#map-svg").get(0);
        var svgDoc = svg.contentDocument;
        var element = svgDoc.documentElement;
        var currentSelected;
        $("path", element).on('click', function () {
var id = $(this).attr("id");
        var url = '/JPARest/MapServlet?id=' + id;
        $(this).css("fill", "red");
        if (typeof currentSelected != 'undefined') {

currentSelected.css("fill", "#c0c0c0");
}

currentSelected = $(this);
        $.getJSON(url, function (res) {

        res.forEach(function (country) {

        try

        {

        $("data").html("<ul>") +
                "<li>" + country.name + "</li>" +
                "<li>" + country.capital + "</li>" +
                "<li>" + country.subregion + "</li>" +
                "<li>" + country.population + "</li>" +
                "<li>" + country.currencies + "</li>" +
                "</ul>");
        
        } catch (err)  
        {
            
            console.log(err);
            
        }
        });
        });

        });
        });