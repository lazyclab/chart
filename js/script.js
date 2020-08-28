$(document).ready(function() {
    let items = $('.itmes');
    let mas = [];
    let atr;
    for (item of items) {
        atr = $(item).attr("data-id")
        mas.push(+atr)
    }
    mas.sort(function(a, b) { return b - a });
    console.log(mas);
    let contentA
    let contentB
    for (item of items) {
        let result = $('.itmes').sort(function(a, b) {

            contentA = parseInt($(a).data('id'));
            contentB = parseInt($(b).data('id'));

            return (contentA > contentB) ? -1 : (contentA > contentB) ? 1 : 0;

        });

        $('#mylist').html(result);

    }


});