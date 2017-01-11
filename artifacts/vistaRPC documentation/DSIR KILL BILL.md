---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR KILL BILL 

 property | value 
--- | --- 
 label | DSIR KILL BILL
 tag | KILLBILL
 routine | [DSIRBIL0](http://code.osehra.org/dox/Routine_DSIRBIL0_source.html)
 return value type | SINGLE VALUE
 description | This RPC will delete a bill and all related entries in the DSIR BILL HISTORY and DSIR BILL TRACKING files.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BILL IEN | LITERAL | 9999 | true | Internal Number to file 19620.2 DISR BILLS. | 
| ADMIN OVERRIDE | LITERAL | 1 | true | This is a set of codes 0 = No, 1 = Yes to override the checking for any payments and delete the bill and all payments. | 




 ###### Generated on January 11th 2017, 6:39:43 am