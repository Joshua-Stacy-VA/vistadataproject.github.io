---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ USERQ 

 property | value 
--- | --- 
 label | YTQ USERQ
 tag | USERQ
 routine | [YTQAPI9](http://code.osehra.org/dox/Routine_YTQAPI9_source.html)
 return value type | ARRAY
 description | Returns name of current user and optionally checks a security Key              Input  DUZ as internal ien file 200 for user to check [optional               default is current user]              KEY as name of security key to check [optional]         Output YSDATA(2)= name of user^DUZ               YSDATA(3) if key sent 1^holds VS 0^lacks KEY              YSDATA(4)= Institution file pointer^Institution name^station                         number with suffix^new name of medical centers                         that have integrated




 ###### Generated on January 11th 2017, 6:39:43 am