---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LINK TO FLAG 

 property | value 
--- | --- 
 label | TIU LINK TO FLAG
 tag | LINK
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | SINGLE VALUE
 description | This RPC is used to link a Progress Note to a Patient Record Flag


### Method description

 property | value 
--- | --- 
 Method comment | RPC Link TIU Doc TIUIEN to
 Leading comment lines | the PRF action

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUIEN | LITERAL |  | true | TIU DOCUMENT IEN (8925) | 
| PRFIEN | LITERAL |  | true | Flag IEN (26.11 or 26.15) | 
| ACTIENT | LITERAL |  | true | PRF Assignment History IEN (26.14) | 
| DFN | LITERAL |  | true | Patient IEN (File 2) | 




 ###### Generated on January 11th 2017, 6:39:43 am