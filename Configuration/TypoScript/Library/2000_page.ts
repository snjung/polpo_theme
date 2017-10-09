page = PAGE
page {
	##favicon setzen
	shortcutIcon = {$resDir}/Public/icons/favicon.ico
	## CSS Dateien laden
	includeCSS {
		# Angepasstes bootstrap
		bootstrap = {$resDir}/Public/css/main.css
	}
	##JavaScript Dateien laden
	includeJSLibs {
	}

	includeJSFooterlibs {
		jquery = {$resDir}/Public/js/jquery.min.js
		bootstrap = {$resDir}/Public/js/bootstrap.min.js
		popper = {$resDir}/Public/js/popper.min.js
	}
	includeJSFooter {
	}

	10 = FLUIDTEMPLATE
	10 {
		partialRootPaths {
			10 = {$resDir}/Private/Partials
		}
		layoutRootPaths {
			10 = {$resDir}/Private/Layouts
		}
		templateRootPaths {
			10 = {$resDir}/Private/Templates
		}
		variables {
			contentMain = CONTENT
			contentMain {
				table = tt_content
				select {
							 orderBy = sorting
							 where = colPos=0
							 languageField = sys_language_uid
				}
			}
			contentAside = CONTENT
			contentAside {
				table = tt_content
				select {
					orderBy = sorting
					where = colPos=1
					languageField = sys_language_uid
				}
			}
			contentJumbotron = CONTENT 
			contentJumbotron {
				table = tt_content
				select {
					orderBy = sorting
					where = colPos=2
					languageField = sys_language_uid
				}
			}	
		} #variables Ende
		#Zuweiseung des passenden Layouts entsprechend gewähltem BE-Layout
		templateName = TEXT 
		templateName.stdWrap { 
			cObject = CASE 
			cObject { 
				key.field = backend_layout 
				key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide 
				default = TEXT 
				default.value = DefaultTemplate 
				pagets__5 = TEXT 
				pagets__5.value = DefaultTemplate
				pagets__6 = TEXT 
				pagets__6.value = JumbotronTemplate
				pagets__4 = TEXT 
				pagets__4.value = 2ColBoxed 
			} 
		}
	} #fluidtemplate Ende
} #page ende


