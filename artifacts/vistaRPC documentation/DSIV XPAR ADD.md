---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR ADD 

 property | value 
--- | --- 
 label | DSIV XPAR ADD
 tag | ADD
 routine | [DSIVXPR2](http://code.osehra.org/dox/Routine_DSIVXPR2_source.html)
 return value type | SINGLE VALUE
 description | This RPC will add a new parameter value for an entity.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | This string has different pieces for adding a new parameter for an entity DATA - required - p1~p2~p3~p4  p1 := optional - entity(s) - if not passed, set to \USR\ for                   current user  p2 := required - parameter name  p3 := optional - instance  p4 := required - value | 




 ###### Generated on January 11th 2017, 6:39:43 am