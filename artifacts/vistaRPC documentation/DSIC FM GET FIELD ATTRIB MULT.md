---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC FM GET FIELD ATTRIB MULT 

 property | value 
--- | --- 
 label | DSIC FM GET FIELD ATTRIB MULT
 tag | MULT
 routine | [DSICFM06](http://code.osehra.org/dox/Routine_DSICFM06_source.html)
 return value type | ARRAY
 description | This will return field attributes from a selected file for one or more fields.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIN | LIST | 50 | true | DSIN(i) := label ^ value   for i = 0,1,2,3,4,... Label can be one of five values:  FILE - req - file (or subfile) number or file name   FLAG - opt - N or <null>   - default value is <null>               if FLAG[\N\ - do not return attributes which are <null>    ATT - req - list of field attributes to return               this can be a ';'-delimited string of field attribute names               or individual field attribute names               Examples: DSIN(i)=\ATT^LABEL;TYPE;GLOBAL LOCATION;\                         DSIN(i)=\ATT^SPECIFIER\                         DSIN(i)=\ATT^*\ - the '*' means get all field attrib   FIELD - req - field number or field name                Examples: DSIN(i)=\FIELD^.01\                          DSIN(i)=\FIELD^.01;.02;.03;.09\                          DSIN(i)=\FIELD^.01:.09\                          DSIN(i)=\FIELD^.01;.02;.03;1:9;99\                Field numbers (or names) can be separated by ';'                An inclusive range of field numbers is separated by ':' | 




 ###### Generated on January 11th 2017, 6:39:43 am