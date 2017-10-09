tt_content {
	jkrv_slider < lib.fluidContent
	jkrv_slider {
		templateName = FluidStyledSlider
		dataProcessing {
			10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
			10 {
				references.fieldName = assets
			}
			20 = DanielGoerz\FluidStyledSlider\DataProcessing\FluidStyledSliderProcessor
		}
	}
}

page.includeJSFooter {
	slick = {$resDir}/Public/Vendor/slick-carousel/slick/slick.min.js
	slick.disableCompression = 1
	fluidStyledSlider = {$resDir}/Public/js/FluidStyledSlider.js
}

page.includeCSS {
	slick = {$resDir}/Public/Vendor/slick-carousel/slick/slick.css
	slick-theme = {$resDir}/Public/Vendor/slick-carousel/slick/slick-theme.css
}