---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA1 SCLST 

 property | value 
--- | --- 
 label | ORWDBA1 SCLST
 tag | SCLST
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | ARRAY
 description | Array of Order ID's and SC.


### Method description

 property | value 
--- | --- 
 Method comment | RPC for compiling appropriate TxF's
 Leading comment lines | RPC titled ORWDBA1 SCLST,Y       =    Returned value,DFN     =    Patient IEN,ORLST   =    List of orders,call for BA/TF

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 50 | true | Patient IEN. | 
| ORLST | LIST | 255 | true | List of Orders. | 




 ###### Generated on January 11th 2017, 6:39:43 am