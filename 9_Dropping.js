//xi+1
d3.select("#xi_1").on("mouseover",function(){

    d3.select(this)
        .style("color","#0353E9");
    
    d3.select("#svg_xi_1")
    .attr("stroke","#0353E9")})
    .attr("stroke-width",0.2)
    
d3.select("#xi_1").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_xi_1")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//xi_1
d3.select("#xi__1").on("mouseover",function(){

    d3.select(this)
    .style("color","#0353E9");

    d3.select("#svg_xi")
    .attr("stroke","#0353E9")})
    .attr("stroke-width",0.2)
    
d3.select("#xi__1").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_xi")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//dx
d3.select("#dx_1").on("mouseover",function(){

    d3.select(this)
    .style("color","#0353E9");

    d3.select("#svg_dx_1")
    .attr("stroke","#0353E9")})
    .attr("stroke-width",0.2)
    
d3.select("#dx_1").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_dx_1")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//xi-1
d3.select("#xi_minus1").on("mouseover",function(){

    d3.select(this)
    .style("color","#0353E9");

    d3.select("#svg_xi_minus1")
    .attr("stroke","#0353E9")})
    .attr("stroke-width",0.2)
    
d3.select("#xi_minus1").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_xi_minus1")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//xi_2
d3.select("#xi_2").on("mouseover",function(){

    d3.select(this)
    .style("color","#0353E9");

    d3.select("#svg_xi")
    .attr("stroke","#0353E9")})
    .attr("stroke-width",0.2)
    
d3.select("#xi_2").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_xi")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//dx
d3.select("#dx_2").on("mouseover",function(){

    d3.select(this)
    .style("color","#0353E9");

    d3.select("#svg_dx_2")
    .attr("stroke","#0353E9")})
    .attr("stroke-width",0.2)
    
d3.select("#dx_2").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_dx_2")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

 /*Progress bar*/
 d3.selectAll("#Image_8").on("click",function(){
    window.open("0.7_Reality.html","_self" ); ;
  })
  
  d3.select("#Group_8593").on("click",function(){
    window.open("1_Idealization.html","_self" ); ;
  })
  d3.select("#Group_8586").on("click",function(){
    window.open("1_Idealization.html","_self" ); ;
  })
  

d3.select("#Group_8587").on("click",function(){
  window.open("3_Discretization.html","_self" ); ;
})

  d3.select("#Group_8588").on("click",function(){
      window.open("5_Zoom-m.html","_self" );})

d3.select("#Group_8589").on("click",function(){
        window.open("10.1_PureMath.html","_self" );})
