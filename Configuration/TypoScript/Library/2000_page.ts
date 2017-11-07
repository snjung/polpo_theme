page = PAGE
page {
	##favicon setzen
	shortcutIcon = {$resDir}/Public/icons/favicon.ico
	## CSS Dateien laden
	includeCSS {
		# Angepasstes bootstrap
		bootstrap = {$resDir}/Public/css/main.css
	}
	headerData.60 = TEXT
	headerData.60.value = <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' type='text/css'>
	headerData.70 = TEXT
	headerData.70.value = <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
	headerData.80 = TEXT
	headerData.80.value = <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

	
	##JavaScript Dateien laden
	includeJSLibs {
	}

	includeJSFooterlibs {
		jquery = {$resDir}/Public/js/jquery.min.js
		#popper has to be loaded before bootstrap for dropdown menu to be working
		popper = {$resDir}/Public/js/popper.min.js
		bootstrap = {$resDir}/Public/js/bootstrap.min.js
		polpo = {$resDir}/Public/js/polpo.min.js
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
				pagets__4.value = 1ColBoxed 
			} 
		}
	} #fluidtemplate Ende
} #page ende


