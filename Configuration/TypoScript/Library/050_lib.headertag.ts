//Ability to set different Header-Images depending on the visited area of the website

lib.headertag= COA
lib.headertag{ 
10 = TEXT
10.value = <header class="polpoHead" style="background-image: url('typo3conf/ext/polpo_theme/Resources/Public/images/header/
30 = CASE
  30{
      key.data = leveluid : 1
  default = TEXT
  default.value = about-bg.jpg
  
  5 = TEXT
  5.value = bootshaus-bg.jpg
    
  4 = TEXT
  4.value = post-bg.jpg
}  
50 = TEXT
50.value = ')">
  }
