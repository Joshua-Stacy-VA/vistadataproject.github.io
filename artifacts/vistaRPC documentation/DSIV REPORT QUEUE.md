---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV REPORT QUEUE 

 property | value 
--- | --- 
 label | DSIV REPORT QUEUE
 tag | PRPT
 routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
 return value type | SINGLE VALUE
 description | Queues up the report data from file 19625 for billing reports.  

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIVHNDL | LITERAL | 50 | true | Contains the handle to \find\ the report in the ^XTMP global after it has been queued and run by Taskman. | 
| DSIVRPT | LITERAL | 30 | true | Contains the ICB report the user has requested. | 
| DATA | LIST | 250 | true | Contains the parameters to search for data:   DATA(\SDT\)=fileman start dt   DATA(\EDT\)=fileman end dt   DATA(\INDEX\)=index to use   \C\ or \D\ or \E\ or \F\ or \H\   DATA(\FIELDS\)=fields to return  \.01;.02;.03;.03I\ Note that \NUMS\ and \MORE\ are not used.  \NUMS\ will be used when polling and retrieving results. FIELDS are DD fields separated by semi-colons only (no colon \ranged\  fields), FIELDS may be suffixed with \I\ for internal data vs default of  external data format.  Data is returned in FIELDS order. | 




 ###### Generated on January 11th 2017, 6:39:43 am