DOM Selectors
----------------------
getElementsByTagName
getElementsByClassName
getElementsById

querySelector //recommended for all query needs
querySelectorAll // recommended for all query needs

getAttribute
setAttribute

## Changing Styles
style.{property} //ok
[because this is a Separation of Concerns issue.  We are injecting a style param into the html vs the CSS file where it should live]

className //best
classList //best

classList.add
classList.remove
classList.toggle

## Bonus
innerHTML //DANGEROUS!!!

parentElement
children  
[document.querySelector("li").parentElement.parentElement.children] ==>
[li --> ul --> body --> [h1, p, p, ul]]
[cool way to navigate through doc]

## It is important to CACHE selectors in variables
