$(document).ready(function () {
   $("#owl-carousel1").owlCarousel({
      loop: true,
      margin: 32,
      center: true,
      checkVisible: true,
      // navContainer: "test",
      // autoWidth: true,
      // autoHeight: true,
      dots: false,
      smartSpeed: 1000,
      touchDrag: true,
      // nav: true,
      responsive: {
         0:{
            items: 1,
            stagePadding:54,
            margin: 10,


         },
         564:{
            items: 3,

         },
         768:{
            items:3,
         }

      },

   });


   $("#owl-carousel2").owlCarousel({
      loop: true,
      margin: 32,
      center: true,
      checkVisible: true,
      // navContainer: "test",
      // autoWidth: true,
      autoHeight: true,
      dots: false,
      smartSpeed: 1000,
      items: 1,
      touchDrag: true,
      // nav: true,
   })
});


let teamCaruselButtoms = {

   clickTeamButtonLeft() {
      let mainButtons = document.querySelectorAll('.owl-prev');
      mainButtons[0].click();
   },
   clickTeamButtonRight() {
      let mainButtons = document.querySelectorAll('.owl-next');
      mainButtons[0].click();
   },
   iventClickLeft() {
      this.clickTeamButtonLeft();
   },
   iventClickRight() {
      this.clickTeamButtonRight();
   },

}
let reviewsCaruselButtoms = {

   clickReviewsButtonLeft() {
      let mainButtons = document.querySelectorAll('#owl-carousel2 .owl-prev');
      mainButtons[0].click();
   },
   clickReviewsButtonRight() {
      let mainButtons = document.querySelectorAll('#owl-carousel2 .owl-next');
      mainButtons[0].click();
   },
   iventClickLeft() {
      this.clickReviewsButtonLeft();
      console.log("lll")

   },
   iventClickRight() {
      console.log("lll")
      this.clickReviewsButtonRight();

   },
}

