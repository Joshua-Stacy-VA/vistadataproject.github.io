---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VEJD TPA GET KIDS STATUS 

 property | value 
--- | --- 
 label | VEJD TPA GET KIDS STATUS
 tag | KID
 routine | [VEJDTP01](http://code.osehra.org/dox/Routine_VEJDTP01_source.html)
 return value type | ARRAY
 description | This does a Fileman lookup on the INSTALL file and returns the last entryfor the value passed.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VAL | LITERAL | 50 | true | Enter the name of the KIDS build for which you which to see itsinstallation state.  Pass the name of the KIDS build as it appears in theINSTALL file.  You may pass a partial name, but this call will only returnthe data on the last entry installed | 




 ###### Generated on January 11th 2017, 6:39:43 am