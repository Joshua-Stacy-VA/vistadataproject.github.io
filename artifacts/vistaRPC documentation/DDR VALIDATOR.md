---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DDR VALIDATOR 

 property | value 
--- | --- 
 label | DDR VALIDATOR
 tag | VALC
 routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
 return value type | ARRAY
 description | This function allows the application to validate user input toa field before filing data. The call uses the database server VAL^DIEcall.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAMETERS | LIST | 512 | true | This array contains the following parameters necessary to call VAL^DIE:    - \FILE\  - file number    - \IENS\  - internal entry numbers    - \VALUE\ - user input value    - \VALUE\ - user input value | 




 ###### Generated on January 11th 2017, 6:39:42 am