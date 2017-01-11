---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCRP FILE ENTRY GETSELECTION 

 property | value 
--- | --- 
 label | SCRP FILE ENTRY GETSELECTION
 tag | GETSEL
 routine | [SCRPBK11](http://code.osehra.org/dox/Routine_SCRPBK11_source.html)
 return value type | ARRAY
 description | This RPC returns information assoicated with an entryon the entity selection form of the Query Template Utility.The RPC gets invoked as a result of the user clicking theright mouse button and selecting 'Details'.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENTITY TYPE | LITERAL | 20 | true | This parameter indicates the entity type of the slecetion.The following types are possible:       DIVISION       TEAM       PRACTITIONER       ROLE       CLINIC       USER CLASS | 
| INTERNAL ENTRY NUMBER | LITERAL | 20 | true | This parameter contains the internal entry number forthe entity. | 




 ###### Generated on January 11th 2017, 6:39:42 am