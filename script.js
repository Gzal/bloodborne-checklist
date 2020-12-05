var i, checkboxes = document.querySelectorAll("input[type=checkbox]");

function Save() {
    for (i = 0; i < checkboxes.length; i += 1) {
        localStorage.setItem(i, checkboxes[i].checked);
    }
}

function Load() {
    for (i = 0; i < checkboxes.length; i += 1) {
        checkboxes[i].checked = "true" === localStorage.getItem(i) ? true : false;
        if (checkboxes[i].classList.contains("Visibility-Button")) {
            var checkboxID = checkboxes[i].getAttribute("id");
            var sectionID  = checkboxes[i].parentElement.getAttribute("id");
            CollapseOrExpand(checkboxID,sectionID);
        }
    }
}

function CollapseOrExpand(buttonId, sectionId) {
    var visibilityButton = document.getElementById(buttonId);
    var sectionElements = document.getElementById(sectionId).getElementsByTagName("div");
    var i = 0;
    if (visibilityButton.checked == true)
        for (i; i < sectionElements.length; i++)
            sectionElements[0].style.display = 'block';
    else if (visibilityButton.checked == false)
        for (i; i < sectionElements.length; i++)
            sectionElements[0].style.display = 'none';
}