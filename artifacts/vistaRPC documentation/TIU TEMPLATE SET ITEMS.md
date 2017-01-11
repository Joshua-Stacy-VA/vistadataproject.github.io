---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU TEMPLATE SET ITEMS 

 property | value 
--- | --- 
 label | TIU TEMPLATE SET ITEMS
 tag | SETITEMS
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | ARRAY
 description | This RPC will create or update the items for a Group, Class, or Root.


### Method description

 property | value 
--- | --- 
 Method comment | Change ITEMs of a group, class, or root
 Leading comment lines | Receives:,TIUDA=IEN of TEMPLATE record,TIUX(SEQ)=IEN of item,Returns:,SUCCESS(SEQ)=IEN of item if successful, or,0^ Explanatory message if not

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the record number of the Group, Class or Root to which the itemsare to be added or modified. | 
| TIUX | LIST |  | true | This is the list of items to be filed for the entry. It should beformatted as follows: TIUX(SEQ)=IEN of the ITEM in the TEMPLATE file (#8927) e.g., TIUX(1)=172TIUX(2)=173TIUX(3)=174 where the values 172, 173, and 174 are valid pointers to Template fileentries. | 




 ###### Generated on January 11th 2017, 6:39:42 am