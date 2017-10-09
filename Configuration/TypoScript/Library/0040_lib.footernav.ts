##Footer - Navigation
lib.footernav = HMENU
lib.footernav {
	special = directory
	special.value = 15
	1 = TMENU
	1 {
		NO = 1
		NO {
			stdWrap.htmlSpecialChars = 1
			ATagTitle.field = abstract // description // title
			ATagBeforeWrap = 1
			wrapItemAndSub = <li> | </li>
		}
		CUR = 1
		CUR {
			ATagParams = class = "active"
			stdWrap.htmlSpecialChars = 1
			ATagTitle.field = abstract / / description // title
			ATagBeforeWrap = 1
			wrapItemAndSub = <li> | </li>
		}	
	}
}