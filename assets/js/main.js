!(function ($) {
   "use strict";

   $(".toggle-button").on("click", function () {
      const tab1 = document.querySelector("#tipe-unit-1");
      const tab2 = document.querySelector("#tipe-unit-2");
      this.classList.toggle("active");
      tab1.classList.toggle("d-none");
      tab2.classList.toggle("d-none");
   });
})(jQuery);
