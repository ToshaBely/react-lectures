export function restoreDataOnClient() {
  let element = document.getElementById('data');

  if (element && element.textContent) {
    let data = JSON.parse(
      element.textContent.replace(/&lt;/g, '<')
    );

    return data;
  } else {
    return {};
  }
}
