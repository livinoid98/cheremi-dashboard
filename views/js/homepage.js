var w = 200;
var h = 350;

let cheremimakaHome = document.querySelector('.cheremimakaHome').innerText;
let evecondomHome = document.querySelector('.evecondomHome').innerText;
let evecupHome = document.querySelector('.evecupHome').innerText;
let evejelHome = document.querySelector('.evejelHome').innerText;

var dataset = [cheremimakaHome, evecondomHome, evecupHome, evejelHome];

var xScale = d3.scaleBand()
                .domain(d3.range(dataset.length))
                .rangeRound([0, w])
                .paddingInner(0.05);

var yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset)])
                .range([0, h]);


var svg = d3.select(".seo-home")
            .append("svg")
            .attr("width", w)
            .attr("height", h);


svg.selectAll("rect") // 모든 rect를 선택한다. (아직 존재하지 않음)
    .data(dataset)    // 선택물에 데이터를 엮는다. 데이터가 갱신된 선택물 반환
    .enter()          // 부족한 선택물을 추출, 즉 20개의 plackholder 문서요소이다.
    .append("rect")   // 각 플레이스 홀더에 rect 생성한다.
    .attr("x", function (d, i) {
        return xScale(i);
    })
    .attr("y", function (d) {
        return h - yScale(d);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function (d) {
        return yScale(d);
    })
    /*.attr("fill", function (d) {
        return "rgb(0, 0, " + Math.round(d * 10) + ")";
    });*/
    .attr("fill", function (d) {
        return "#4280D7";
    });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function (d, i) {
        return xScale(i) + xScale.bandwidth() / 2;
    })
    .attr("y", function (d) {
        return h - yScale(d) + 10;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "#FFF");
