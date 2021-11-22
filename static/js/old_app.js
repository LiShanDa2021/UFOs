// import data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear existing data
    tbody.html("");
    // loop through each object in the data
    // append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered. filter the data using that data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild the table using the filtered data
    // if no date entered, then filtered data will just be original data
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);