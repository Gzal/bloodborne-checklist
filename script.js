var i, checkboxes = document.querySelectorAll("input[type=checkbox]");

function Save() {
    "use strict";
    for (i = 0; i < checkboxes.length; i += 1) {
        localStorage.setItem(i, checkboxes[i].checked);
    }
}

function CollapseOrExpand(button) {
    "use strict";
    var visibilityButton = button, section = visibilityButton.parentElement, sectionElements = section.childNodes, i = 0;

    if (visibilityButton.checked === true) {
        for (i; i < sectionElements.length; i += 1) {
            if (sectionElements[i].tagName === "DIV") {
                sectionElements[i].style.display = 'block';
            }
        }
    } else if (visibilityButton.checked === false) {
        for (i; i < sectionElements.length; i += 1) {
            if (sectionElements[i].tagName === "DIV") {
                sectionElements[i].style.display = 'none';
            }
        }
    }
}

function Load() {
    "use strict";
    for (i = 0; i < checkboxes.length; i += 1) {
        checkboxes[i].checked = "true" === localStorage.getItem(i) ? true : false;
        if (checkboxes[i].classList.contains("Visibility-Button")) {
            var checkboxID = checkboxes[i].getAttribute("id"), sectionID  = checkboxes[i].parentElement.getAttribute("id");
            CollapseOrExpand(checkboxID, sectionID);
        }
    }
}