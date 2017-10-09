##Link auf die Startseite
lib.homelink = COA
lib.homelink {
	10 = IMAGE
	10 {
		file = {$resDir}/Public/Images/Header/JKRV_Logo.png
		file {
			width = 60
			height = 60
		}
		10.
		imageLinkWrap = 1
		imageLinkWrap {
			enable = typolink.parameter = 1
			typolink.parameter = 1
			typolink.title = Zur Startseite
		#typolink.ATagParams = class = "navbar-brand"
		}
		#typolink.parameter = 1
		#typolink.title = Zur Startseite
		#typolink.ATagParams = class = "navbar-brand"
	}
	20 = TEXT
	20 {
		value = JKRV
		typolink.parameter = 1
		typolink.title = Zur Startseite
		typolink.ATagParams = class = "navbar-brand"
	}
}