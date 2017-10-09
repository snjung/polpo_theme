plugin.tx_news{
  settings{
    list.paginate {
        itemsPerPage = 10 #Anzahl der News-Artikel pro Seite
        insertAbove = 1 #Anzeige der Pagination oberhalb der News
        insertBelow = 1 #Anzeige der Pagination unterhalb der News
        #Darstellung der Pagination
        templatePath = EXT:theme_kanu/Resources/Private/ext/news_modified/Templates/ViewHelpers/Widget/Paginate/Index.html
        prevNextHeaderTags = 1 #Kennzeichnung der Vor/Zurück-Knöpfe (Erkennbarkeit durch Suchmaschienen)
        maximumNumberOfLinks = 5 #Angezeigte Links im Pagination       
     facebookLocale = de_DE #Lokalisierung der Facebook-Verlinkung?
     displayDummyIfNoMedia = 1 #Anzeigen eines Platzhalterbildes wenn keines in der News hinterlegt ist
     }
  }
}
plugin.tx_news {
        view {
                templateRootPaths >
                templateRootPaths {
                        0 = EXT:news/Resources/Private/Templates/
                        1 = EXT:polpo_theme/Resources/Private/ext/news_original/Templates/
                        2 = EXT:polpo_theme/Resources/Private/ext/news_modified/Templates/
                }
                partialRootPaths >
                partialRootPaths {
                        0 = EXT:news/Resources/Private/Partials/
                        1 = EXT:polpo_theme/Resources/Private/ext/news_original/Partials/
                        2 = EXT:polpo_theme/Resources/Private/ext/news_modified/Partials/  
                }
                #layoutRootPaths >
                #layoutRootPaths {
                #        0 = EXT:news/Resources/Private/Layouts/
                #        1 = EXT:theme_kanu/Resources/Private/ext/news/Layouts/
                #}
        }
}
