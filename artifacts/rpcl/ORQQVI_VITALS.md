---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQVI VITALS 

 property | value 
--- | --- 
 name | ORQQVI VITALS
 domain | Vital
 description | {::nomarkdown}Array of patient most recent vitals within start and stop date/times.  If<br/>no start and stop dates are indicated, the most recent are returned.<br/> <br/>If no start date is passed then the start date is 1 (i.e. before any<br/>dates).<br/> <br/>If no stop date is passed then the start date is also the stop date and if<br/>there is not start date then 9999999 is used as the stop date.{:/}
 VISTA (8994) description | [nodeVISTA 8994](../vistaRPC documentation/ORQQVI VITALS)
 MUMPS implementation | [](http://code.osehra.org/dox/Routine__source.html)
 type | READ STRUCTURED
 complexity | MEDIUM
 uses | 
 return type | ARRAY
 return description | Array of patient most recent vitals within start and stop date/times.  \rIf no start and stop dates are indicated, the most recent are returned.\rVitals are returned in the format:\rvital ien^vital type^rate/value^date/time taken
 Method comment | return patient's most recent vital measurements
 Leading comment lines | in date range,ORY: return variable, results are returned in the format:,vital measurement ien^vital type^rate^date/time taken,DFN: patient identifier from Patient File [#2],F1: starting date/time range,F2: ending date/time range

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | true | {::nomarkdown}Patient id (DFN) from Patient File (#2).{:/} |  | 
| START_DATETIME | LITERAL |  | {::nomarkdown}Start date/time for vital retrieval in Fileman format.<br/>If none is passed then the start date is 1 (i.e. before any dates).{:/} |  | 
| STOP_DATETIME | LITERAL |  | {::nomarkdown}Stop date/time for vital retrieval in Fileman format.<br/>If none is passed then the Start date is also the stop date and if there<br/>is not start date then 9999999 is used as the stop date{:/} |  | 