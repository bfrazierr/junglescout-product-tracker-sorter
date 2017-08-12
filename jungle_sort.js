function sortProductTracker(){
    var table = $('.tracker-table');
    var listings = table.children();
    // remove first 2 listings, they are the table header
    var tableHeader = listings[0];
    listings.splice(0, 1);

    listings.sort(function(a, b){
        var aRaw = a.childNodes[0].childNodes[0].childNodes[6].childNodes[0].childNodes[0].innerHTML;
        var aPrice = aRaw.replace("$", "").replace(",", "");
        var bRaw = b.childNodes[0].childNodes[0].childNodes[6].childNodes[0].childNodes[0].innerHTML;
        var bPrice = bRaw.replace("$", "").replace(",", "");
        if(aPrice == null || bPrice == null){
            return 0;
        }else{
            return bPrice-aPrice;
        }
        
    });
    // add table header back to the array
    listings.splice(0, 0, tableHeader);
    $('.tracker-table').html(listings);
}
sortProductTracker();