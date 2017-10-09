## zweite Ebene des Text-Menüs
lib.MenuLevelTwo = TMENU
lib.MenuLevelTwo   {
    expAll = 1
    ACT = 1
    ACT.wrapItemAndSub = <li class="active">|</li>
    ACT.ATagTitle.field = abstract // description // title
 
    ACTIFSUB = 1
    ACTIFSUB.wrapItemAndSub = <li class="dropdown-submenu">|</li>
    ACTIFSUB.doNotLinkIt = 1
    ACTIFSUB.ATagTitle.field = abstract // description // title
    ACTIFSUB.stdWrap.wrap= <a href="#" tabindex="-1">|</a>   
 
    NO.allWrap = <li>|</li>
    NO.ATagTitle.field = abstract // description // title
 
    IFSUB = 1
    IFSUB.wrapItemAndSub = <li class="dropdown-submenu">|</li>
    IFSUB.doNotLinkIt = 1
    IFSUB.ATagTitle.field = abstract // description // title
    IFSUB.stdWrap.wrap= <a href="#" tabindex="-1">|</a>   
 
    SPC = 1
    SPC.allWrap = <li class="divider"></li><li class="nav-header">|</li>
 
    wrap = <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">|</ul>
}