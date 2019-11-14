// Get small molecules
var smallMolecules = document.getElementsByClassName("ligands-environ-residue");

// Are any of them zinc?
var containsZinc = false;
for (var sm of smallMolecules) {
    var a = sm.getElementsByTagName("a").item(0);
    if (a.getAttribute("href").split("/").slice(-1)[0] === "ZN") {
        containsZinc = true;
        break;
    }
}

// Update if found
if (containsZinc) {
    var infoBox = document.getElementsByClassName("pdbe-intro-relevant").item(0);
    var element = document.createElement("div");
    element.classList.add("grid_24");
    element.classList.add("pdbe-fact");
    var code = window.location.href.slice(window.location.href.length - 4).toUpperCase()
    fetch(`https://api.zincbind.net/?query=%7Bpdb(id%3A%20%22${code}%22)%20%7Bzincsites%20%7B%20count%20%7D%7D%7D`).then((resp) => resp.json()).then(function(data) {
        var siteCount = data.data.pdb.zincsites.count;
        element.innerHTML = `<strong>ZincBind:</strong> <a href="https://zincbind.bioinf.org.uk/pdbs/${code}/">${siteCount} zinc binding site${siteCount == 1 ? '' : 's'}</a>`;
        infoBox.appendChild(element);
    });
}