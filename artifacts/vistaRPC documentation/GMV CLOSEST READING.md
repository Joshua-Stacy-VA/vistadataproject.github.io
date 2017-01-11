---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV CLOSEST READING 

 property | value 
--- | --- 
 label | GMV CLOSEST READING
 tag | CLOSEST
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call returns the observation date/time and reading of the record closest to the date/time specified for the patient and vitaltype.


### Method description

 property | value 
--- | --- 
 Method comment | GMV CLOSEST READING [RPC entry point]
 Leading comment lines | Get nearest reading to date(/time) provided,Input:  GMVDFN - DFN (required),GMVDT - FileMan date/time (optional),Default is NOW,GMVT - Vital Type abbreviation, FILE 120.51, Field 1 (required),GMVFLAG - Where to look (optional),0 = either before or after GMVDT  (default),1 = before GMVDT,2 = after GMVDT,Output: RESULT - piece1^piece2,where piece1 = date/time of reading (FileMan internal format),piece2 = reading,If no records found piece 1 = -2,and piece 2 = message text                     ,If an error was encountered piece1 = -1,and piece2 = error message

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVDFN | LITERAL | 12 | true | A pointer to the Patient (#2) file (i.e., DFN). | 
| GMVDT | LITERAL | 14 | true | The date/time to search from. The default is NOW. | 
| GMVT | LITERAL | 5 | true | The vital type abbreviation as it appears in FILE 120.51, Field 1 (e.g., WT). | 
| GMVFLAG | LITERAL | 1 | true | A flag to indicate if the search should look before or after the date/timespecified in the GMVDT value where 1 indicates before, 2 indicates afterand 0 indicates either direction. | 




 ###### Generated on January 11th 2017, 6:39:43 am