// Get Small Molecules Section
var smallMoleculesPanel = document.getElementById("smallMoleculespanel");

// What small molecules are there?
var table = smallMoleculesPanel.getElementsByTagName("table").item(0);
var rows = table.getElementsByTagName("tr");
var smallMolecules = [];
for (var r = 2; r < rows.length; r++) {
    smallMolecules.push(rows[r].getAttribute("id").slice(11));
}

// Is there ZINC here?
if (smallMolecules.includes("ZN")) {
    // Add link to zincbind
    var code = window.location.href.slice(window.location.href.length - 4).toUpperCase()
    var summary = document.getElementById("summary");
    var list = summary.getElementsByClassName("list-unstyled").item(0);
    var items = list.getElementsByTagName("li");
    var lastItem = items.item(items.length - 1);
    var newItem = lastItem.cloneNode(true);
    newItem.getElementsByTagName("strong").item(0).innerText = "ZincBind: "
    newItem.innerHTML = `<strong>ZincBind:</strong> <a href="https://zincbind.bioinf.org.uk/pdbs/${code}/">${code}</a>`
    list.appendChild(newItem);
}