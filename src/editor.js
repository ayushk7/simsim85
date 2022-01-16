export const editor = CodeMirror(document.getElementById("editor-container"), {
    value: "//write your assembly here\n",
    mode: "assembly8085",
    lineNumbers: true,
    gutter: ["CodeMirror-linenumbers", "breakpoints"]
});
// editor.on("gutterClick", function (cm, n) {
//     var info = cm.lineInfo(n);
//     console.log(info);
//     cm.clearGutter("breakpoints");
// });
console.log(editor);
export function setNextMarker(lineNumber){
    editor.doc.clearGutter("breakpoints");
    editor.doc.setGutterMarker(lineNumber, "breakpoints", makeMarker());
}
export function clearAllMarker(){
    editor.doc.clearGutter("breakpoints");
    console.log('cleared');
}

function makeMarker() {
    var marker = document.createElement("div");
    marker.style.color = "red";
    marker.innerHTML = "●";
    return marker;
}
editor.setSize("100%", 800)
