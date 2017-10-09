## unterste Ebene des Text-Menüs
lib.MenuLevelOne = TMENU
lib.MenuLevelOne   {
    expAll = 1
 		#normale Elemente (ohne Dropdown-Menü)
    NO.allWrap = <li>|</li>
    NO.ATagTitle.field = abstract // description // title
 		#normale aktives Element (ohne Dropdown-Menü)
    ACT = 1
    ACT.wrapItemAndSub = <li class="active">|</li>
    ACT.ATagTitle.field = abstract // description // title
 
    IFSUB = 1
    IFSUB.before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
    IFSUB.after =  <i class="fa fa-angle-down"></i></a>
    IFSUB.doNotLinkIt = 1
    IFSUB.wrapItemAndSub = <li class="dropdown">|</li>
    IFSUB.ATagTitle.field = abstract // description // title
 
    ACTIFSUB = 1
    ACTIFSUB.before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
    ACTIFSUB.after =  <i class="fa fa-angle-down"></i></a>
    ACTIFSUB.doNotLinkIt = 1
    ACTIFSUB.wrapItemAndSub = <li class="dropdown active">|</li>
    ACTIFSUB.ATagTitle.field = abstract // description // title
}