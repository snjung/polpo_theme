## dritte Ebene des Textmenüs
lib.MenuLevelThree = TMENU
lib.MenuLevelThree   {
    NO.allWrap = <li>|</li>
    NO.ATagTitle.field = abstract // description // title
 
    ACT = 1
    ACT.wrapItemAndSub = <li class="active">|</li>
    ACT.ATagTitle.field = abstract // description // title
    
        wrap = <ul class="dropdown-menu">|</ul>
}