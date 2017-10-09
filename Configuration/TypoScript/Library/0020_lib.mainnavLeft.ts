## Hauptnavigation
## Die gesamte Navigation ist ein Content Objext Array
lib.mainnavLeft =  COA
lib.mainnavLeft {
    #HMENU: Hirarchisches Menü
    10 = HMENU
    10 {       
        1 = TMENU
        1 < lib.MenuLevelOne     
        2 = TMENU
        2 < lib.MenuLevelTwo    
        3 = TMENU
        3 < lib.MenuLevelThree    

    }
}