---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC UNSIGNED BY ID 

 property | value 
--- | --- 
 label | ORRC UNSIGNED BY ID
 tag | DETAIL
 routine | [ORRCSIG](http://code.osehra.org/dox/Routine_ORRCSIG_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns the details of a list of orders and/or documents.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ITEMS | LIST |  | true | This is the list of ID's of each item to return details for, in the formXXX:### where XXX indicates the type of item and ### is the pointer tothe corresponding M file containing the data:    ORU = Orders file #100    DOC = TIU Documents file #8925 | 




 ###### Generated on January 11th 2017, 6:39:43 am