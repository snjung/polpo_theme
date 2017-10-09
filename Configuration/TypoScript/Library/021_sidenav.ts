lib.sidenav = COA
lib.sidenav {
# ERZEUGT DEN TITEL DER EBENE 1
10 = HMENU
10 {
  special = rootline
  special.range = 1|1
  1 = TMENU
  1 {
    NO = 1
    NO.doNotLinkIt = 1
    NO.allWrap = <h3>|</h3>
    }
}
20 = HMENU
20 {
wrap = <ul class="list-unstyled side-nav">|</ul>
# special = directory
# special.value = 3
entryLevel = 1
1=TMENU
1 {
  NO = 1
  NO.allWrap = <li>|</li>
  }
2.NO<.1.NO
}
}



<ul class="list-unstyled side-nav">
                        <li><a href="#" class="active"><i class="fa fa-cloud"></i> Side Nav</a></li>
                        <li><a href="#"><i class="fa fa-user"></i> About Us</a></li>
                        <li><a href="#"><i class="fa fa-dollar"></i> Our Pricing</a></li>
                        <li><a href="#"><i class="fa fa-bars"></i> Our Services</a></li>
                        <li><a href="#"><i class="fa fa-users"></i> Our Team</a></li>
                        <li><a href="#"><i class="fa fa-users"></i> Our Team</a></li>
                        <li><a href="#"><i class="fa fa-search"></i> 404 Page</a></li>
 </ul>