var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
    if (!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebar = true;
    }
}

function closeSideBar(){
    if (sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

// BAR CHART
var barChartOptions = {
    chart: {
      type: 'bar',
      height:350,
      toolbar:{
        show:false
      },
    },
    colors:[
        "#246dec",
        "#cc3c43",
        "#367952",
        "#f5b741",
        "#4f35a1"
    ],
    plotOptions: {
      bar: {
        distributed:true,
        borderRadius:4,
        horizontal:false,
        columnWidth:'40%',
      }
    },
    series: [{
      data: [3,2,4,5,6]
    }],
    dataLabels:{
        enabled:false
    },
    legend:{
        show:false
    },
    xaxis:{
        categories:['Monitor','Laptop','HeadPhones','Earphones','Airpods']
    },
    yaxis:{
        title:{
            text:'Count'
        }
    }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"),barChartOptions);
  barChart.render();