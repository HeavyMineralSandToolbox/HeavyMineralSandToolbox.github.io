document.addEventListener('DOMContentLoaded', function () {
    const section1Bullets = [
        {bullet: 'bullet1', infoContent: 'info-content1'},
        {bullet: 'bullet2', infoContent: 'info-content2'},
		{bullet: 'bullet3', infoContent: 'info-content3'},
		{bullet: 'bullet13', infoContent: 'info-content13'},
    ];

    const section2Bullets = [
        {bullet: 'bullet4', infoContent: 'info-content4'},
        {bullet: 'bullet5', infoContent: 'info-content5'},
        {bullet: 'bullet6', infoContent: 'info-content6'},
    ];

    const section3Bullets = [
        {bullet: 'bullet7', infoContent: 'info-content7'},
        {bullet: 'bullet8', infoContent: 'info-content8'},
		{bullet: 'bullet9', infoContent: 'info-content9'},
    ];

    const allBullets = [...section1Bullets, ...section2Bullets, ...section3Bullets];

    // Initially hide all info-contents
    allBullets.forEach(({infoContent}) => {
        document.getElementById(infoContent).style.display = 'none';
    });

    function showInfoContent(infoContent, activeBullet, sectionBullets) {
        sectionBullets.forEach(({bullet, infoContent}) => {
            document.getElementById(infoContent).style.display = 'none';
            document.getElementById(bullet).classList.remove('inactive');
        });

        document.getElementById(infoContent).style.display = 'flex';
        sectionBullets
            .filter(({bullet}) => bullet !== activeBullet)
            .forEach(({bullet}) => document.getElementById(bullet).classList.add('inactive'));
    }

    function setupEventListener(sectionBullets) {
        sectionBullets.forEach(({bullet, infoContent}) => {
            document.getElementById(bullet).addEventListener('click', function () {
                showInfoContent(infoContent, bullet, sectionBullets);
            });
        });
    }

    setupEventListener(section1Bullets);
    setupEventListener(section2Bullets);
    setupEventListener(section3Bullets);
});



document.addEventListener("DOMContentLoaded", function () {
  const mineralElements = document.querySelectorAll(".image-container .mineral");
  const mineralLibraryItems = document.querySelectorAll(".mineral-library-container h4");
  const libraryInfoBoxes = document.querySelectorAll(".library-info-box");
  const closeButtonElements = document.querySelectorAll(".close-button");
  const section3 = document.getElementById("section3");
	

  const zirconLibList = document.getElementById("zircon-liblist");
  const baddeleyiteLibList = document.getElementById("baddeleyite-liblist");
  const rutileLibList = document.getElementById("rutile-liblist");
  const titaniteLibList = document.getElementById("titanite-liblist");
  const monaziteLibList = document.getElementById("monazite-liblist");
  const xenotimeLibList = document.getElementById("xenotime-liblist");
  const garnetLibList = document.getElementById("garnet-liblist");
  const apatiteLibList = document.getElementById("apatite-liblist");
  const cassiteriteLibList = document.getElementById("cassiterite-liblist");
  const feldsparLibList = document.getElementById("feldspar-liblist");
  const zirconWord = document.getElementById("zircon-word");
  const titaniteWord = document.getElementById("titanite-word");
  const rutileWord = document.getElementById("rutile-word");
  const monaziteWord1 = document.getElementById("monazite-word1");
  const rutileWord1 = document.getElementById("rutile-word1");
  const rutileWord2 = document.getElementById("rutile-word2");
  const rutileWord3 = document.getElementById("rutile-word3");
  const monaziteWord = document.getElementById("monazite-word");
  const garnetWord = document.getElementById("garnet-word");
  const apatiteWord = document.getElementById("apatite-word");
  const xenotimeWord = document.getElementById("xenotime-word");
  const xenotimeWord1 = document.getElementById("xenotime-word1");
  const zirconWord1 = document.getElementById("zircon-word1");
  const zirconWord2 = document.getElementById("zircon-word2");
  const zirconWord4 = document.getElementById("zircon-word4");
  const zirconWord5 = document.getElementById("zircon-word5");
  const zirconWord6 = document.getElementById("zircon-word6");
  const zirconWord8 = document.getElementById("zircon-word8");
  const zirconWord9 = document.getElementById("zircon-word9");
  const zirconWord10 = document.getElementById("zircon-word10");
  const section3Header = section3.querySelector('.section-header');

zirconWord.addEventListener("click", function () {
  openMineralInfo("library-info-box1", "library-mineral1");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
	zirconWord1.addEventListener("click", function () {
  openMineralInfo("library-info-box1", "library-mineral1");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});

		zirconWord2.addEventListener("click", function () {
  openMineralInfo("library-info-box1", "library-mineral1");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
			zirconWord6.addEventListener("click", function () {
  openMineralInfo("library-info-box1", "library-mineral1");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
			zirconWord4.addEventListener("click", function () {
  openMineralInfo("library-info-box1", "library-mineral1");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
			zirconWord5.addEventListener("click", function () {
  openMineralInfo("library-info-box1", "library-mineral1");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
				zirconWord8.addEventListener("click", function () {
  openMineralInfo("library-info-box1", "library-mineral1");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
					zirconWord9.addEventListener("click", function () {
  openMineralInfo("library-info-box1", "library-mineral1");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
					zirconWord10.addEventListener("click", function () {
  openMineralInfo("library-info-box1", "library-mineral1");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
	
						titaniteWord.addEventListener("click", function () {
  openMineralInfo("library-info-box4", "library-mineral4");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
							rutileWord.addEventListener("click", function () {
  openMineralInfo("library-info-box3", "library-mineral3");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
							monaziteWord.addEventListener("click", function () {
  openMineralInfo("library-info-box5", "library-mineral5");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
								garnetWord.addEventListener("click", function () {
  openMineralInfo("library-info-box7", "library-mineral7");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
								apatiteWord.addEventListener("click", function () {
  openMineralInfo("library-info-box8", "library-mineral8");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
									xenotimeWord1.addEventListener("click", function () {
  openMineralInfo("library-info-box6", "library-mineral6");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
									xenotimeWord.addEventListener("click", function () {
  openMineralInfo("library-info-box6", "library-mineral6");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
										monaziteWord1.addEventListener("click", function () {
  openMineralInfo("library-info-box5", "library-mineral5");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
										rutileWord1.addEventListener("click", function () {
  openMineralInfo("library-info-box3", "library-mineral3");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
	
											rutileWord2.addEventListener("click", function () {
  openMineralInfo("library-info-box3", "library-mineral3");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
												rutileWord3.addEventListener("click", function () {
  openMineralInfo("library-info-box3", "library-mineral3");
  if (section3Header.classList.contains("collapsed")) {
    section3Header.click();
  }
  // Do nothing when section 3 is already open
});
	
  function openMineralInfo(targetInfoBoxId, targetMineralNameId) {
  const targetInfoBox = document.getElementById(targetInfoBoxId);
  const targetMineralName = document.getElementById(targetMineralNameId);

  if (targetInfoBox) {
    libraryInfoBoxes.forEach((infoBox) => {
      if (infoBox !== targetInfoBox) {
        infoBox.classList.add("hidden");
      }
    });

    if (targetInfoBox.classList.contains("hidden")) {
      targetInfoBox.classList.remove("hidden");

      // Show section 3
      section3.classList.add("visible");
    }
  }

  if (targetMineralName) {
    mineralLibraryItems.forEach((mineralName) => {
      if (mineralName !== targetMineralName) {
        mineralName.classList.add("hidden");
      } else {
        mineralName.classList.remove("hidden");
      }
    });
  }

  // Scroll to section 3 every time a mineral is clicked
  setTimeout(() => {
    section3.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}
  // Add event listeners for the mineral list items
  zirconLibList.addEventListener("click", function () {
  openMineralInfo("library-info-box1", "library-mineral1");
});

baddeleyiteLibList.addEventListener("click", function () {
  openMineralInfo("library-info-box2", "library-mineral2");
});

rutileLibList.addEventListener("click", function () {
  openMineralInfo("library-info-box3", "library-mineral3");
});

titaniteLibList.addEventListener("click", function () {
  openMineralInfo("library-info-box4", "library-mineral4");
});

monaziteLibList.addEventListener("click", function () {
  openMineralInfo("library-info-box5", "library-mineral5");
});

xenotimeLibList.addEventListener("click", function () {
  openMineralInfo("library-info-box6", "library-mineral6");
});

garnetLibList.addEventListener("click", function () {
  openMineralInfo("library-info-box7", "library-mineral7");
});

apatiteLibList.addEventListener("click", function () {
  openMineralInfo("library-info-box8", "library-mineral8");
});

cassiteriteLibList.addEventListener("click", function () {
  openMineralInfo("library-info-box9", "library-mineral9");
});
	
	feldsparLibList.addEventListener("click", function () {
  openMineralInfo("library-info-box10", "library-mineral10");
});



mineralElements.forEach((element, index) => {
  element.addEventListener("click", function () {
    openMineralInfo(`library-info-box${index + 1}`, `library-mineral${index + 1}`);

    const section3Header = section3.querySelector('.section-header');
    if (section3Header.classList.contains("collapsed")) {
      section3Header.click();
    }
  });
});


  // Close buttons functionality
  closeButtonElements.forEach((button) => {
    button.addEventListener("click", () => {
      libraryInfoBoxes.forEach((infoBox) => {
        infoBox.classList.add("hidden");
      });

      // Hide section 3
      section3.classList.remove("visible");
    });
  });
});

const rect1 = document.getElementById("rect1");
const rect2 = document.getElementById("rect2");
const rect3 = document.getElementById("rect3");

const section2Option1 = document.getElementById("section2-option1");
const section2Option2 = document.getElementById("section2-option2");
const section2Option3 = document.getElementById("section2-option3");

rect1.addEventListener('click', function () {
    section2Option1.scrollIntoView({ behavior: "smooth", block: "start" });
    if (section2Option1.querySelector('.section-header').classList.contains("collapsed")) {
        section2Option1.querySelector('.section-header').click();
    }
});

rect2.addEventListener('click', function () {
    section2Option2.scrollIntoView({ behavior: "smooth", block: "start" });
    if (section2Option2.querySelector('.section-header').classList.contains("collapsed")) {
        section2Option2.querySelector('.section-header').click();
    }
});

rect3.addEventListener('click', function () {
    section2Option3.scrollIntoView({ behavior: "smooth", block: "start" });
    if (section2Option3.querySelector('.section-header').classList.contains("collapsed")) {
        section2Option3.querySelector('.section-header').click();
    }
});


function csvToTable(csvData) {
    const lines = csvData.trim().split("\n");
    const headers = lines[0].split(",");
    const tableHeader = document.getElementById("header-row");

    headers.forEach(header => {
        const th = document.createElement("th");
        th.innerText = header.trim();
        tableHeader.appendChild(th);
    });

    const tableBody = document.getElementById("table-body");

    for (let i = 1; i < lines.length; i++) {
        const row = document.createElement("tr");
        const cells = lines[i].split(",");

        cells.forEach(cell => {
            const td = document.createElement("td");
            td.innerText = cell.trim();
            row.appendChild(td);
        });

        tableBody.appendChild(row);
    }
}

async function loadCSV() {
    try {
        const response = await fetch("costs.csv");
        if (!response.ok) {
            throw new Error(`Error loading CSV: ${response.statusText}`);
        }
        const csvData = await response.text();
        csvToTable(csvData);
    } catch (error) {
        console.error("Error:", error);
    }
}

loadCSV();


document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".section-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const contentWrapper = this.nextElementSibling;
      const isCollapsed = this.classList.contains("collapsed");
      const arrow = this.querySelector(".arrow");

      if (isCollapsed) {
        contentWrapper.style.display = "block";
        this.classList.remove("collapsed");
        arrow.innerHTML = "▲";
      } else {
        contentWrapper.style.display = "none";
        this.classList.add("collapsed");
        arrow.innerHTML = "▼";
      }
    });
  });
});

function showExampleButton(buttonId, event) {
    const targetButton = document.getElementById(buttonId);

    if (targetButton) {
        const closestContentWrapper = event.target.closest(".content-wrapper");
        const allButtons = closestContentWrapper.getElementsByClassName('view-example');

        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.add('hidden');
        }
        targetButton.classList.remove('hidden');
    }
}
function updateImageForSection(imageId, event) {
    const targetImage = document.getElementById(imageId);

    if (targetImage) {
        let closestContentWrapper;
        let allInteractiveBullets;
        let targetImageParent;
        const isInsideSection7 = document.getElementById("section7").contains(targetImage);

        if (isInsideSection7) {
            closestContentWrapper = event.target.closest(".content-wrapper");
            allInteractiveBullets = closestContentWrapper.querySelectorAll(".interactive");
            targetImageParent = closestContentWrapper.querySelector(".image-bigger-picture");
        } else {
            const closestLibraryInfoBox = event.target.closest(".library-info-box");
            closestContentWrapper = closestLibraryInfoBox;
            allInteractiveBullets = closestLibraryInfoBox.querySelectorAll(".interactive");
            targetImageParent = closestLibraryInfoBox;
        }

        const existingDisplayedImage = closestContentWrapper.querySelector(".displayed-image");

        if (existingDisplayedImage) {
            existingDisplayedImage.remove();
        }

        const newDisplayedImage = document.createElement("img");
        newDisplayedImage.className = isInsideSection7 ? "bigger-picture-example-image displayed-image" : "library-example-image displayed-image";
        newDisplayedImage.src = targetImage.src;
        newDisplayedImage.alt = targetImage.alt;

        targetImageParent.insertBefore(newDisplayedImage, targetImageParent.firstChild);

        allInteractiveBullets.forEach((bullet) => {
            bullet.classList.add("inactive");
        });

        event.target.classList.remove("inactive");
    }
}

