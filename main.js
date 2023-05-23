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
        enabled:true
    },
    legend:{
        show:false
    },
    xaxis:{
        categories:['Monitor','Laptop','HeadPhones','Earphones','Airpods']
    },
    yaxis:{
        title:{
            text:'Count',
            
        }
    }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"),barChartOptions);
  barChart.render();


  //area chart options
  var areaChartOptions = {
    series: [{
    name: 'Purchase Orders',
    data: [31,40,28,51,42,109,100]
  }, {
    name: 'Sales Orders',
    data: [11,32,45,32,34,52,45]
  }],
    chart: {
    height: 350,
    type: 'area',
    toolbar:{
        show:false
      },
  },
  colors:[
    "#f5b741",
    "#4f35a1"
],
  stroke: {
    curve: 'smooth'
  },
  dataLabels:{
    enabled:false
    },
  labels: ['Jan', 'Feb','Mar','April','May','June','July'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })