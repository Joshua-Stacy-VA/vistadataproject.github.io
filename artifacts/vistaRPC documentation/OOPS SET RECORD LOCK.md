---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SET RECORD LOCK 

 property | value 
--- | --- 
 label | OOPS SET RECORD LOCK
 tag | SETLCK
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | SINGLE VALUE
 description | This broker call attempt to lock the record and if not successful, returns a message indicating that the record is in use by another user.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | This is the ASISTS Internal Record Number that will be used to lock the record. | 




 ###### Generated on January 11th 2017, 6:39:43 am