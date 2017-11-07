##Link auf die Startseite
lib.homelink = IMAGE
lib.homelink {
		file = {$resDir}/Public/images/header/JKRV_Logo.png
		file {
			width = 30
			height = 30
		}
		imageLinkWrap = 1
		imageLinkWrap {
			enable = 1
			typolink.parameter = 1
			typolink.ATagBeforeWrap = 1
			typolink.ATagParams = class = "navbar-brand"
			typolink.wrap = | Polpo Jena
		}
		params = class = "d-inline-block align-top"
}
