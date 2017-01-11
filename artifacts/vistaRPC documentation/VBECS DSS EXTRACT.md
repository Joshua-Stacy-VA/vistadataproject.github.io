---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VBECS DSS EXTRACT 

 property | value 
--- | --- 
 label | VBECS DSS EXTRACT
 tag | EN
 routine | [VBECDSS](http://code.osehra.org/dox/Routine_VBECDSS_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC inserts or updates post transfusion related data in the VBECS DSSEXTRACT file (#6002.03). The data is passed into the VBECDSS routine through the input parameters and a success indicator is returned to the Blood Bank medical device.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAMS | LITERAL | 999 | true | PARAMS(\TRANSACTION ID\) = Unique record identifierPARAMS(\DFN\) = Patient identifierPARAMS(\ORDERING LOCATION\) = Ordering Institution IdentifierPARAMS(\TRANSFUSION LOCATION\) = Tranfusing Institution identifierPARAMS(\PHYSICIAN\) = Provider requesting blood product for transfusionPARAMS(\ORDERING PROVIDER\) = Provider who ordered Type and CrossmatchPARAMS(\PRODUCT NAME\) = Short blood product namePARAMS(\COMPONENT ABBREVIATION\) = Abbreviation of blood componentPARAMS(\NUMBER OF UNITS\) = Number of pooled units transfusedPARAMS(\TRANSFUSION DATE\) = Date/time of transfusionPARAMS(\VOLUME\) = Total volume of units transfusedPARAMS(\REACTION TYPE\) = Type of reaction indicatedPARAMS(\UNIT MODIFICATION\) = String of codes representing modifications    done on units transfused. String cannot exceed 6 character.    D = Deglycerolize   F = Freeze   I = Irradiate   L = Leukoreduce   P = Pool   R = Rejuvenate   S = Split/Divide   T = Thaw   U = Thaw/Pool Cryo   V = Volume Reduce   W = WashPARAMS(\REACTION\) = Yes or No value if a reaction was indicated. | 




 ###### Generated on January 11th 2017, 6:39:43 am