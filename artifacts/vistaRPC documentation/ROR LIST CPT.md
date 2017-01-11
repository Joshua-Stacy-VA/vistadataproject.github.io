---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST CPT 

 property | value 
--- | --- 
 label | ROR LIST CPT
 tag | CPTLIST
 routine | [RORRP042](http://code.osehra.org/dox/Routine_RORRP042_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST CPT remote procedure returns a list of CPT codes (defined inthe CPT file), which conform the criteria.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PART | LITERAL | 30 |  | The partial match restriction. | 
| FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   A  Exclude active codes   B  Backwards. Traverses the index in the opposite     direction of normal traversal   D  Full search by short name   I  Exclude inactive codes   K  Search in description keywords | 
| NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries. | 
| FROM | LITERAL |  |  | The index entry(s) from which to begin the list   ^01: FromName   ^02: FromIEN  For example, a FROM value of \18\ would list entries following 18. You canuse the 2-nd and 3-rd \^\- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.  NOTE: The FROM value itself is not included in the      resulting list.  See description of the LIST^DIC for more details about the PART, NUMBER and FROM parameters. | 
| DATE | LITERAL |  |  | Date for the code set versioning. | 




 ###### Generated on January 11th 2017, 6:39:43 am