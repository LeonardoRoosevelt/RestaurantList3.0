//刪除前再次確認
function deleteCheckAgain() {
  return window.confirm('Do you really want to delete this restaurant ?')
}

function nofind() {
  var img = event.srcElement
  img.src =
    'https://images.template.net/wp-content/uploads/2016/04/22123121/Cool-Restaurant-Logo-Download.jpg' //替換的圖片
  img.onerror = null //控制不要一直觸發錯誤
}
