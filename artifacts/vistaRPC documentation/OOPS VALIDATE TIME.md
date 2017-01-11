---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS VALIDATE TIME 

 property | value 
--- | --- 
 label | OOPS VALIDATE TIME
 tag | DTVALID
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | ARRAY
 description | This broker call will compare two dates (which are part of the input) based on the 3rd input paramater which is a flag indicating which type of compare should be done.  The RESULTS output indicates whether the dates pass (VALIDDATE) or fail (DATE ERROR) the compare.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IDT | LITERAL |  | true | This is the base date/time in external format. In the case of testingwhether one date is before another, this would be the \base\ date.  | 
| PDT | LITERAL |  | true | This is the post date or benchmark date in external format.  In the example of testing if one date is earlier/less than another, this would be the latter date.  | 
| FLAG | LITERAL |  | true | This input parm indicates the type of comparison to be done. -2 means PDT must be <  IDT (The DAY only)-1 means PDT must be <  IDT (The DAY&TIME)0 means PDT must be =  IDT (The DAY&TIME)1 means PDT must be >  IDT (The DAY&TIME)2 means PDT must be > IDT (The DAY only) | 




 ###### Generated on January 11th 2017, 6:39:43 am