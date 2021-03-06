// hamburger

$(".header_hamburger").on("click", function () {
  $(".header").toggleClass("open");
  $("body").toggleClass("noScroll");
});
$(".header_nav a").on("click", function () {
  $(".header").removeClass("open");
  $("body").removeClass("noScroll");
});

// scroll

$('a[href^="#"]').on("click", function () {
  let time = 500;
  let href = $(this).attr("href");
  let target = $(href == "#" ? "html" : href);
  let distance = target.offset().top;
  $("html, body").animate({ scrollTop: distance }, time, "swing");
  return false;
});

// mail

document.addEventListener("DOMContentLoaded", () => {
  const validationForm = document.querySelector(".contact_form");

  if (validationForm) {
    const errorClassName = "contact_error";
    const requiredElems = document.querySelectorAll(".required");
    const telElems = document.querySelectorAll(".tel");
    const mailElems = document.querySelectorAll(".mail");

    const createError = (elem, errorMessage) => {
      const errorSpan = document.createElement("span");
      errorSpan.classList.add(errorClassName);
      errorSpan.setAttribute("aria-live", "polite");
      errorSpan.textContent = errorMessage;
      elem.parentNode.appendChild(errorSpan);
    };

    validationForm.addEventListener("submit", (e) => {
      const errorElems = validationForm.querySelectorAll("." + errorClassName);
      errorElems.forEach((elem) => {
        elem.remove();
      });

      requiredElems.forEach((elem) => {
        const elemValue = elem.value.trim();
        if (elemValue.length === 0) {
          createError(elem, "未入力です。");
          e.preventDefault();
        }
      });

      telElems.forEach((elem) => {
        const pattern = /^\(?\d{2,5}\)?[-(\.\s]{0,2}\d{1,4}[-)\.\s]{0,2}\d{3,4}$/;
        if (elem.value !== "") {
          if (!pattern.test(elem.value)) {
            createError(elem, "電話番号の形式ではありません。");
            e.preventDefault();
          }
        }
      });

      mailElems.forEach((elem) => {
        const pattern = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/iu;
        if (elem.value !== "") {
          if (!pattern.test(elem.value)) {
            createError(elem, "メールアドレスの形式ではありません。");
            e.preventDefault();
          }
        }
      });

      const errorElem = validationForm.querySelector("." + errorClassName);
      if (errorElem) {
        const errorElemOffsetTop = errorElem.offsetTop;
        window.scrollTo({
          top: errorElemOffsetTop - 210,
          behavior: "smooth",
        });
      }
    });
  }
});


// accordion

$(function () {
  $(".faq_item_q").click(function () {
    $(this).parent().toggleClass("faq_item_open");
    $(this).next().slideToggle("slow");
  });
});


// popup

$(function () {
  $(".js_popup_open").click(function () {
    $(".popup_overlay, .popup_window").fadeIn();
    $("body").addClass("noScroll");
  });
  $(".js_popup_close, .popup_overlay").click(function () {
    $(".popup_overlay, .popup_window").fadeOut();
    $("body").removeClass("noScroll");
  });
});
