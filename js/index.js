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

  $('.suggestions-list-elem').on("click", function() {
    $(' .suggest-input').val($(this).find('.suggestions-list-elem--title').text().replace(/,/g, ''))
  })

  $('[data-quantitybtn="plus"]').on('click', function() {
    let current =  +parseFloat($(this).closest('[data-quantity]').find('[data-quantitytext]').text()) + 1
    console.log(current)
    $(this).closest('[data-quantity]').find('[data-quantitytext]').text(current)
    $(this).closest('[data-quantity]').find('[data-quantityvalue]').val(current)
  })
  $('[data-quantitybtn="minus"]').on('click', function() {
    let current =  +parseFloat($(this).closest('[data-quantity]').find('[data-quantitytext]').text()) - 1
    if (current > -1) {
      $(this).closest('[data-quantity]').find('[data-quantitytext]').text(current)
      $(this).closest('[data-quantity]').find('[data-quantityvalue]').val(current)
    }
   
  })

  jQuery("#sliderprice1").slider({
    min: +jQuery("input#limitMin1").val(),
    max: +jQuery("input#limitMax1").val(),
    values: [+jQuery("input#limitMin1").val(), +jQuery("input#limitMax1").val()],
    range: true,
    stop: function (event, ui) {
      jQuery("input#minCost1").val(jQuery("#sliderprice1").slider("values", 0));
      jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("values", 1));

      //var val1 = $test1.prop("value");
      //$test1.prop("value", prettify(val1));

      if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
        jQuery("input#minCost1").addClass('notchanged');
      } else {
        jQuery("input#minCost1").removeClass('notchanged');
      }

      if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
        jQuery("input#maxCost1").addClass('notchanged');
      } else {
        jQuery("input#maxCost1").removeClass('notchanged');
      }


    },
    slide: function (event, ui) {
      jQuery("input#minCost1").val(jQuery("#sliderprice1").slider("values", 0));
      jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("values", 1));

      if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
        jQuery("input#minCost1").addClass('notchanged');
      } else {
        jQuery("input#minCost1").removeClass('notchanged');
      }

      if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
        jQuery("input#maxCost1").addClass('notchanged');
      } else {
        jQuery("input#maxCost1").removeClass('notchanged');
      }


      //var val1 = $test1.prop("value");
      // $test1.prop("value", prettify(val1));
    }
  });


  jQuery("input#maxCost1").change(function () {

    var value1 = jQuery("input#minCost1").val();
    var value2 = jQuery("input#maxCost1").val();

    if (value2 > (+jQuery("input#limitMax1").val())) {
      value2 = +jQuery("input#limitMax1").val();
      jQuery("input#maxCost1").val(+jQuery("input#limitMax1").val())
    }


    jQuery("#sliderprice1").slider("values", 1, value2);
    $test1.prop("value", prettify(val1));
    var val1 = $test1.prop("value");

    $test1.prop("value", prettify(val1));

    if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
      jQuery("input#minCost1").addClass('notchanged');
    } else {
      jQuery("input#minCost1").removeClass('notchanged');
    }

    if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
      jQuery("input#maxCost1").addClass('notchanged');
    } else {
      jQuery("input#maxCost1").removeClass('notchanged');
    }

  });

  jQuery("input#minCost1").change(function () {

    var value1 = jQuery("input#minCost1").val();
    var value2 = jQuery("input#maxCost1").val();

    if (value2 < (+jQuery("input#limitMin1").val())) {
      value2 = +jQuery("input#limitMin1").val();
      jQuery("input#minCost1").val(+jQuery("input#limitMin1").val())
    }


    jQuery("#sliderprice1").slider("values", 0, value1);
    var val1 = $test1.prop("value");
    $test1.prop("value", prettify(val1));

    var val1 = $test1.prop("value");
    $test1.prop("value", prettify(val1));

    if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
      jQuery("input#minCost1").addClass('notchanged');
    } else {
      jQuery("input#minCost1").removeClass('notchanged');
    }

    if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
      jQuery("input#maxCost1").addClass('notchanged');
    } else {
      jQuery("input#maxCost1").removeClass('notchanged');
    }

  });

})
