// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Use d3 to append one table row `tr` for each ufo report object
tableData.forEach((ufoData) => {
    console.log(ufoData);
    var row = tbody.append('tr');
    // Use `Object.entries` to console.log each ufo report value
    Object.entries(ufoData).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the filter button
var filter = d3.select("#filter-btn");

// When the filter button is clicked...
filter.on("click", function() {
    // Clear table
    d3.select("tbody").html("");
    // Stop refresh
    d3.event.preventDefault();
    // Console log datatime value
    var date = d3.select("#datetime").property("value");
    console.log(date);
    // Console log the fi;tered data
    var filteredData = tableData.filter(record => record.datetime === date);
    console.log(filteredData);
    // Use d3 to append one table row `tr` for each filtered ufo report object
    filteredData.forEach((ufoData) => {
        var row = tbody.append('tr');
        // Use `Object.entries` to console.log each filtered ufo report value
        Object.entries(ufoData).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
    });
});

});