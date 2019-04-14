$(document).ready(function () {
    $(function listBlobs() {
        // ID of the Google Spreadsheet
        var spreadsheetID = "1Uy2hc-1w8XtEBRwxDGv4pdlEgeaLhNhE8jQaDX2KBiM";       
        // Make sure it is public or set to Anyone with link can view 
        var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
        $.getJSON(url,
            function (data) {
                $('div#blog-list').append("<div id = 'blogitems'> </div>");
                $.each(data.feed.entry, function (i, entry) {
                                    var item = 
                                    "<img src='"
                                    + entry.gsx$image.$t
                                    + "' alt=''> <div class='post-date'> <a href='#'>"
                                    + entry.gsx$date.$t + '<span>' + entry.gsx$month.$t
                                    + "</span></a></div></div><br></div><div class='col-12 col-md-6'><div class='single-blog-content'><div class='line'></div><a href='#' class='post-tag'>" 
                                    + entry.gsx$category.$t
                                    + "</a><h4><a href='#' class='post-headline'>" 
                                    + entry.gsx$title.$t
                                    + "</a></h4><p>"
                                    + entry.gsx$content.$t
                                    + " </p>";

                    if (entry.gsx$details.$t != "") {
                        item = item + "<a class='wow fadeInUp animated btn btn-warning' data-wow-delay='1s' target = '_blank' href='"
                        + entry.gsx$details.$t
                        + "'>Read More</a>";
                    }

                    $('#blogitems').append(
                        "<div class='single-blog-area blog-style-2 mb-50 wow fadeInUp' data-wow-delay='0.2s' data-wow-duration='1000ms'> <div class='row align-items-center'>  <div class='col-12 col-md-6'><div class='single-blog-thumbnail'>"
                        + item 
                        + "</div></div></div></div>");                                   
                                });
            });
    });
});

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

function handle(e) {
    if (e.keyCode === 13) {
        SearchExistingSystematicReviews();
    }

    return false;
}