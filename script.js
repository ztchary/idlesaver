const $ = q => document.querySelector(q)
const decode = d => { 
  try {
    return atob(d)
  } catch {
    return ""
  }
}
window.onload=()=>{
  $("#i").onclick = _ => {
    let raw = prompt("Paste Import Data Here")
    let data = decode(raw).split(",")
    if (data.length != 114) {
      alert("Malformed Import Data")
      return
    }
    for (let i=0;i<113;i++) {
      let v = data[i]
      let b = $("#v"+i)
      if (b.type == "text") {b.value=v}
      else {b.checked=v=="1"}
    }
  }
  $("#e").onclick = _ => {
    let values = []
    for (let i=0;i<113;i++) {
      let b = $("#v"+i)
      if (b.type == "text") {values.push(b.value)}
      else {values.push(b.checked?"1":"0")}
    }
    let data = btoa(values.join(",")+",")
    prompt("Copy this", data)
  }
}