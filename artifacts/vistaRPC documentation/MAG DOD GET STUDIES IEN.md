---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DOD GET STUDIES IEN 

 property | value 
--- | --- 
 label | MAG DOD GET STUDIES IEN
 tag | STUDY2
 routine | [MAGDQR21](http://code.osehra.org/dox/Routine_MAGDQR21_source.html)
 return value type | ARRAY
 description | This Remote Procedure returns information about studies,based upon the IEN (File #2005 or #2005.1) of the image group, Patient Number,Study-Level Only Flag, and Include Deleted Images Flag that are provided as parameters.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GROUPS | LIST | 1000 | true | This parameter can either be provided as a single value or as an array.Each value found (either GROUPS or GROUPS(i)) will be evaluated by the Remote Procedure.Each value found must be the IEN in file #2005 or #2005.1 of a group of images.For each group specified, the Remote Procedure will find the study to whichthat group belongs, and then returna hierarchical list of all series and images in that study. | 
| REQDFN | LITERAL | 50 | true | This parameter is Patient Number who owns the images. | 
| IMGLESS | LITERAL | 1 | true | This parameter is an indicator whether to get only Study-Level or include all images.Pass \1\ to get only Study-Level data.Pass null or empty string to include all images. | 
| FLAGS | LITERAL | 1 | true | This parameter is an indicator whether to include or exclude \Deleted\ Images.Pass \D\ to include Deleted Images.Pass null or empty string to exclude Deleted Images | 




 ###### Generated on January 11th 2017, 6:39:43 am