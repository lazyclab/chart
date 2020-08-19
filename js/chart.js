$(document).ready(function() {
    //  let $click1 = $('.chart__button-1')
    //  let $click2 = $('.chart__button-2')
    //  console.log(k);
    let k = document.querySelector('.chart__button-1')
    let valE = 0;
    let valS = 0;
    let input = 0;
    let hoursM = [];

    let inputs = $('.section__myinput')
    for (let i = 0; i < inputs.length; i++) {
        input = inputs[i];
    }

    anychart.onDocumentReady(function() {
        function getData(color) {
            // generate data
            var data = [
                []
            ];
            var dataWeek = ['Пн', 'Вр', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
            var dataHours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
            // $('button').on('mouseup', e => {

            //     if ($('button').data('x').includes('a'))
            //         obj.fill = "#0066FF";
            //     else obj.fill = "#DFE4EF";
            // })
            for (var x = 0; x < dataHours.length; x++) {
                hours = dataHours[x]
                hoursM.push(+hours.split(':')[0])
                    //$myFunc(hours)
                for (var y = 0; y < dataWeek.length; y++) {
                    let week = dataWeek[y];
                    var obj = {};
                    obj.x = hours;
                    obj.y = week;
                    if (color !== '') {
                        obj.fill = "#4c4c4c";
                        // k.addEventListener('click', e => {
                        //         obj.fill = "#0066FF";
                        //         //   console.log(k);
                        //     })
                        //     //   obj.fill = "#0066FF";
                    }
                    data.push(obj);

                }

            }
            return data;

        }

        // create a chart and set the data

        var chart = anychart.heatMap(getData(''));
        console.log(chart);
        $('.chart__button-1').on('click', function() {
            var chart = anychart.heatMap(getData('#c4c4c4'));

        });

        chart.xScroller().enabled(true);


        // disable labels
        chart.labels(true);

        // set the chart title
        chart.title("");

        // set the container id
        chart.container("container");

        // initiate drawing the chart
        chart.draw();
        // enable and configure scrollers
        console.log();
        chart.xZoom().setToValues(valS, valE);

        $(input).on('input', event => {
            valS = $(inputs[0]).val()
            valE = $(inputs[1]).val()
                // console.log(+$(this).val().split(':')[1]);
                // // if (+$(this).val().split(':')[1] > 0)
                // //     $(this).val().split(':')[1] = "00";
            console.log(valS);
            console.log(valE);
            chart.xZoom().setToValues(valS, valE);


        })



        //   function myFunc(a, b) {
        //       if (a > b) {

        //           return (a - b) + 1
        //       } else if (a < b) {

        //           return (b - a) + 1
        //       } else
        //           return 1;
        //   }

    });




})