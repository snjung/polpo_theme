## Hauptnavigation
## Die gesamte Navigation ist ein Content Objext Array
lib.mainnavLeft =  HMENU
lib.mainnavLeft {
  special = directory
	special.value = 1
  1 = TMENU
  1 {
    expAll = 1
    wrap = <ul class="navbar-nav">|</ul>
    NO = 1
    NO {
      wrapItemAndSub = <li class="nav-item">|</li>
      ATagParams = class="nav-link"
    }
    #Falls es Untermenü-Einträge gibt:
    IFSUB < .NO
    IFSUB = 1
    IFSUB {
      wrapItemAndSub = <li class="nav-item dropdown">|</li>
      ATagParams = class="nav-link dropdown-toggle" data-toggle="dropdown"
    }
 
    ACT < .NO
    ACT = 1
    ACT {
      wrapItemAndSub = <li class="nav-item active">|</li>
      stdWrap.append = TEXT
      stdWrap.append.value = <span class="sr-only">(current)</span>
    }
 
    ACTIFSUB < .NO
    ACTIFSUB = 1
    ACTIFSUB {
      wrapItemAndSub = <li class="nav-item dropdown active">|</li>
      ATagParams = class="nav-link dropdown-toggle" data-toggle="dropdown"
    }
  }
 
  2 = TMENU
  2 {
    wrap = <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">|</div>
    NO = 1
    NO {
      ATagParams = class="dropdown-item"
      stdWrap.htmlSpecialChars = 1
    }
 
    ACT = .NO
    ACT {
      ATagParams = class="dropdown-item active"
    }
  }
}