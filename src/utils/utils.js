//获取路径参数
export function getQueryVariable(variable) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
const url = "";

export function staticPathTo(path) {
  if (/\/$/.test(window.location.origin)) {
    return `${window.location.origin}${path}`;
  } else {
    return `${window.location.origin}/${path}`;
  }
}

export function imgPathTo(name) {
  // console.log("图片路径", staticPathTo("static/img/" + name));
  return staticPathTo("static/img/" + name);
}
