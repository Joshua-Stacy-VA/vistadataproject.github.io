---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA4 GETTFCI 

 property | value 
--- | --- 
 label | ORWDBA4 GETTFCI
 tag | GETTFCI
 routine | [ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
 return value type | ARRAY
 description | 


### Method description

 property | value 
--- | --- 
 Method comment | Get Treatment Factors Clinical Indicators
 Leading comment lines | Input Variable:,ORIEN    Order Internal Entry Number (array variable),Ouput Variable:,Y        Y(AI)=Order_IEN^Treatment_Factors^ICD9^ICD9_Description,There can be up to 4 ICD9 codes and thier descriptions,ICD901^DESC01^ICD902^DESC02^ICD903^DESC03^ICD904^DESC04,Local Variables:,AI       Array Index,CI       Clinical Index,TF       Treatment Factors,TFCI     Treatment Factors Clinical Indicators

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORIEN | LIST |  | true |  | 




 ###### Generated on January 11th 2017, 6:39:43 am