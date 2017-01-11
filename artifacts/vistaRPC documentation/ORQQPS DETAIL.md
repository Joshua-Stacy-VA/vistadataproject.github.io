---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPS DETAIL 

 property | value 
--- | --- 
 label | ORQQPS DETAIL
 tag | DETAIL
 routine | [ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html)
 return value type | ARRAY
 description | Returns the details of a medication order.


### Method description

 property | value 
--- | --- 
 Method comment | return detailed information for a drug

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient identifier from Patient file [#2]. | 
| MEDICATION ID | LITERAL | 20 | true | Medication identifier as drawn from the medication consdensed list (ORQQPSLIST).  The first piece of the condensed list.  E.g. 31945R;O, 231156U;I,944382P;O | 




 ###### Generated on January 11th 2017, 6:39:42 am