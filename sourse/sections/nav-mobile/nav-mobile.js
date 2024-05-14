let navMobile = {
   classMobileMenu: document.getElementsByClassName("mobile-menu"),
   body: document.body,

   mobileMenuActive() {
      this.classMobileMenu[0].style.display = "flex";
      this.body.style.overflow = 'hidden';
   },
   mobileMenuClouse(){
      this.classMobileMenu[0].style.display = "none";
      this.body.style.overflow = 'visible';

   }
}

