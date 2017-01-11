---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBD GET INPUT OBJECT BY FORM 

 property | value 
--- | --- 
 label | IBD GET INPUT OBJECT BY FORM
 tag | FRMLSTI
 routine | [IBDFRPC](http://code.osehra.org/dox/Routine_IBDFRPC_source.html)
 return value type | ARRAY
 description | Returns a list of input objects on one encounter forms .There are 3 types of input objects,lists, hand print fields, and multiple choice fields.  Each has itsown set of unique characterists for input.  

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FRM | LITERAL | 40 | true | Input the pointer to the encounter form file or the unique name of theencounter form | 




 ###### Generated on January 11th 2017, 6:39:42 am