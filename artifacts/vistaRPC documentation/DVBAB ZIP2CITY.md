---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB ZIP2CITY 

 property | value 
--- | --- 
 label | DVBAB ZIP2CITY
 tag | ZIP2CITY
 routine | [DVBABADR](http://code.osehra.org/dox/Routine_DVBABADR_source.html)
 return value type | ARRAY
 description | The remote procedure returns a list containing city, county, and state fora given ZIP code.Results format:  Result(0)=ResultCount_\^\_ErrorMsg                 Result(1..n)=City_\^\_County_\^\_State

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DVBZIP | LITERAL | 12 | true | ZIP code value in ZIP+4 format. | 




 ###### Generated on January 11th 2017, 6:39:43 am