---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DOD GET STUDIES UID 

 property | value 
--- | --- 
 label | MAG DOD GET STUDIES UID
 tag | STUDY1
 routine | [MAGDQR21](http://code.osehra.org/dox/Routine_MAGDQR21_source.html)
 return value type | ARRAY
 description | This Remote Procedure returns information about studies,based upon the Study UID that is provided as a parameter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| STUDIES | LIST | 1000 | true | This parameter can either be provided as a single value or as an array.Each value found (either STUDIES or STUDIES(i)) will be evaluated by the Remote Procedure.Each value found must be the UID of a study.For each study specified, the Remote Procedure will returna hierarchical list of all series and images in that study. | 




 ###### Generated on January 11th 2017, 6:39:43 am