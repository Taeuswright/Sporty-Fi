var json = {
  items: [
    {
      name: "Work",
      owner: "TaeJ W.",
      primary-color: null,
      public: true,
      collaborative: false
    },
    {
      name: "Bailey Songs",
      owner: "TaeJ W.",
      primary-color: null,
      public: true,
      collaborative: false
    },
    {
      name: "Video Games ",
      owner: "TaeJ W.",
      primary-color: null,
      public: true,
      collaborative: false
    },
    {
      name: "Study",
      owner: "TaeJ W.",
      primary-color: null,
      public: true,
      collaborative: false
    },
    {
      name: "Food for the heart",
      owner: "TaeJ W.",
      primary-color: null,
      public: true,
      collaborative: false
    },
    {
      name: "Hip hop",
      owner: "TaeJ W.",
      primary-color: null,
      public: true,

      collaborative: false
    },
    {
      name: "Emotions",
      owner: "TaeJ W.",
      primary-color: null,
      public: true,
      collaborative: false
    },
    {
      name: "Montage",
      owner: "TaeJ W.",
      primary-color: null,
      public: true,

      collaborative: true
    },
    {
      name: "xi.xix.xix",
      owner: "kMarti481",
      primary-color: null,
      public: false
    }
  ]
};

function createTable() {
  var html = "<table class='mui-table mui-table--bordered'> <tr>";
  Object.keys(json.items[0]).forEach(function(property) {
    html += "<th>" + property + "</th>";
  });
  html += "</tr>";

  json.items.forEach(function(item) {
    html += "<tr>";
    Object.keys(item).forEach(function(property) {
      html += "<td>" + item[property] + "</td>";
    });
    html += "</tr>";
  });

  html += "</table>";

  console.log(html);

  document.getElementById("table-container").innerHTML = html;
}
