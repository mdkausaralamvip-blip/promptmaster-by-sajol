let prompts = [];
let files = [];

const dropZone = document.getElementById("dropZone");

dropZone.addEventListener("dragover", e => {
  e.preventDefault();
});

dropZone.addEventListener("drop", e => {
  e.preventDefault();
  files = Array.from(e.dataTransfer.files);
  alert(files.length + " images added");
});

function generate() {
  const type = document.getElementById("fileType").value;
  const style = document.getElementById("style").value;
  const provider = document.getElementById("provider").value;

  prompts = files.map(file =>
    `${style} ${type} design of ${file.name} generated using ${provider}`
  );

  document.getElementById("output").value = prompts.join("\n");
}

function exportTxt() {
  const blob = new Blob([prompts.join("\n")], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "prompts.txt";
  a.click();
}

function exportCsv() {
  const blob = new Blob([prompts.join(",\n")], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "prompts.csv";
  a.click();
}
