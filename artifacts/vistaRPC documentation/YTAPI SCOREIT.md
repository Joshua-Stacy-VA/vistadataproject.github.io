---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI SCOREIT 

 property | value 
--- | --- 
 label | YTAPI SCOREIT
 tag | SCOREIT
 routine | [YTAPI2](http://code.osehra.org/dox/Routine_YTAPI2_source.html)
 return value type | ARRAY
 description | This API returns all scoring information for a specified patient given a specified administration date for a specified test or instrument.  User must have adequate privileges to receive this information (i.e. often the YSP KEY) Input:                 DFN : patient internal identifier                CODE: Test code from file 601 or \ASI\ e.g. \CAGE\, \BDI\ADATE: inclusive administration date in %DT acceptable format (11/11/2011) Output:Array(2)= Patient Name^Test Code^Test Title^Internal Admin date^External Admin Date ^Ordered byArray(3)=R1^Responses 1-200 undelimitedArray(4)=R2^ Responses 201-400 undelimited (even if less than 200)Array(5)=R3^ Responses 401-600 undelimitedArray(6)=S1^Scale Name^Raw Score^Transformed ScoreArray(7)=S2^ Scale Name^Raw Score^Transformed Score   And onward as needed




 ###### Generated on January 11th 2017, 6:39:42 am