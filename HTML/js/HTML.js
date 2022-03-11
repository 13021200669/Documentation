function SwitchFold(elem) {
	if (elem.parentNode.style.height == "auto") {
		switch (elem.className) {
			case "Section1Title":
				elem.parentNode.style.height = "50px";
				break;
			case "Section2Title":
				elem.parentNode.style.height = "45px";
				break;
			case "ArticleTitle":
				elem.parentNode.style.height = "40px";
				break;
		}

	} else {
		elem.parentNode.style.height = "auto";
	}
}
