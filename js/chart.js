$(document).ready(function () {


   let valE = 0;
   let valS = 0;
   let result;
   let resultS = [];
   let input = 0;
   let hoursM = [];

   let inputs = $('.myInput')
   for (let i = 0; i < inputs.length; i++) {
      input = inputs[i];
   }

   anychart.onDocumentReady(function () {
      function getData() {
         // generate data
         var data = [
            []
         ];
         var dataWeek = ['Пн', 'Вр', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
         var dataHours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
         if (resultS.length > 1) dataHours = resultS;
         for (var x = 0; x < dataHours.length; x++) {
            hours = dataHours[x]
            hoursM.push(+hours.split(':')[0])
            //$myFunc(hours)
            for (var y = 0; y < dataWeek.length; y++) {
               let week = dataWeek[y];

               var obj = {};
               obj.x = hours;
               obj.y = week;

               data.push(obj);
            }
         }
         return data;
      }
      // create a chart and set the data
      var chart = anychart.heatMap(getData());

      chart.yScroller().enabled(false);
      chart.xScroller().enabled(false);


      // disable labels
      chart.labels(true);

      // set the chart title
      chart.title("");

      // set the container id
      chart.container("container");

      // initiate drawing the chart
      chart.draw();
      // enable and configure scrollers
      chart.xZoom().setToPointsCount(8);

      $(input).on('input', event => {
         valS = +$(inputs[0]).val().split(':')[0]
         valE = +$(inputs[1]).val().split(':')[0]
         chart.xZoom().setToPointsCount(myFunc(valS, valE));
         $myFunc(valS, valE)

      })



      function myFunc(a, b) {
         if (a > b) {

            return (a - b) + 1
         }

         else if (a < b) {

            return (b - a) + 1
         }
         else
            return 1;
      }

   });



   function $myFunc(a, b) {

      if (a < b)
         result = hoursM.filter(key => key >= a && key <= b);
      else if (a > b)
         result = hoursM.filter(key => key <= a && key >= b).reverse();
      let k;
      for (k of result) {
         k = String(k);
         if (k.length < 2) {
            k = `0${k}`
         }
      }

      resultS = result.map(item => {
         return item
      })
      console.log(result);
      return result;
   }

})













