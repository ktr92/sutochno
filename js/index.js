function closeByClickOutside(element, button, callback) {
  $(document).click(function (event) {
    if (!$(event.target).closest(`${element},${button}`).length) {
      $(button).removeClass("active")
      $(element).removeClass("active")
      // or
      //$(element).hide()
    }
  })

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      // escape key maps to keycode `27`
      $(button).removeClass("active")
      $(element).removeClass("active")
      // or
      //$(element).hide()
    }
  })

  if (callback instanceof Function) {
    callback()
  }
}

$(document).ready(function () {
  closeByClickOutside(
    "[data-toggleblock='suggestions-list']",
    "[data-togglefocus='suggestions-list']"
  )
  closeByClickOutside(
    "[data-toggleblock='select-guests__main']",
    "[data-toggleclick='select-guests__main']"
  )

  $("[data-togglefocus='suggestions-list']").on("focus", function () {
    $("[data-toggleblock='suggestions-list']").addClass("active")
  })

  $(".search-widget-select-city .val").on("click", function () {
    $("input#suggest").val($(this).text())
  })
  $("[data-toggleclick='select-guests__main']").on("click", function () {
    $('[data-toggleblock="select-guests__main"]').toggleClass("active")
  })
})
