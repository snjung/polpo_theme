config {
	## Könnte zum änderen der Inhaltselemente herhalten
	##pageRendererTemplateFile = {$resDir}/Private/Templates/PageRenderer.html
	##Für RealURL
	absRefPrefix = /
	tx_realurl_enable = 1
	prefixLocalAnchors = 1
	##Kommentare im Quelltext entfernen
	disablePrefixComment = 1
	spamProtectEmailAddresses = 1
	spamProtectEmailAddresses_atSubst = (at)
	compressCss = 0
	concatenateCss = 0
	compressJs = 0
	concatenateJs = 0
	#TYPO3 generiert immer Border-Tags für die Bilder (Border = 0), benötige ich aber wegen Bootstrap nicht
	disableImgBorderAttr = 1
}