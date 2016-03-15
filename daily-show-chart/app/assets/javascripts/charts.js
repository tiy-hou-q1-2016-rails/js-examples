$(window).ready(function(){

  $("#group").on("change", function(){

    var newChoice = $("#group").val();
    $("#selected").html(newChoice);
    fetchData();
  })


  var fetchData = function(){

    var categoryChoice = $("#group").val();

    $.getJSON("/charts/data.json?group=" + categoryChoice).done( function(json){

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', 'Guests');

      data.addRows(json);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        backgroundColor: '#f1f8e9'
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    })
  }



  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(fetchData);

})
