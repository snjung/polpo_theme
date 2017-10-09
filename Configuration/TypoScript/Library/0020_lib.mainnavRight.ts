## Hauptnavigation
## Die gesamte Navigation ist ein Content Objext Array
lib.mainnavRight =  COA
lib.mainnavRight {
    #HMENU: Hirarchisches Menü
    10 = HMENU
    10 {      
         special = directory
	       special.value = 23
        1 = TMENU
        1 < lib.MenuLevelOne     
        2 = TMENU
        2 < lib.MenuLevelTwo    
        3 = TMENU
        3 < lib.MenuLevelThree    

    }
}