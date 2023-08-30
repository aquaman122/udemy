const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];

const $b1 =  document.querySelector(".btn-why-react");
const $b2 =  document.querySelector(".btn-core-features");
const $b3 =  document.querySelector(".btn-resources");
const $mainContents = document.querySelector(".main__contents");

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  $mainContents.innerHTML = "";
  list.innerHTML = listContent;
  $mainContents.append(list);
}

function highlightButton(btn) {
  $b1.id = "";
  $b2.id = "";
  $b3.id = "";
  btn.id = "active";
}

function handleClick(event) {
  const btnId = event.target.className;
  highlightButton(event.target);
  if (btnId === "btn-why-react") {
    displayContent(content[0]);
  } else if (btnId === "btn-core-features") {
    displayContent(content[1]);
  } else {
    displayContent(content[2]);
  }
}


displayContent(content[0]);

$b1.addEventListener("click", handleClick);
$b2.addEventListener("click", handleClick);
$b3.addEventListener("click", handleClick);