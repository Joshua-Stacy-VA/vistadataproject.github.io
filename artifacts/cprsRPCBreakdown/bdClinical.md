---
layout: default
title: VDP Year 2 - CPRS RPC Interface, Clinical Slice Breakdown
---


# [All](bdStart) &#8594; Clinical (417)

Category | Number
--- | ---
CHANGE | 81 (19.4%)
READ | 286 (68.6%)
UTILITY | 50 (12%)



\# | Name | Category | Method | Args | Lines | Tags | Files | Parameters
--- | --- | --- | --- | --- | --- | --- | --- | ---
1. | DG CHK BS5 XREF ARRAY | READ |  [GUIBS5A^DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html) | DFN | 27 | XREF |  | 
2. | DG CHK BS5 XREF Y/N | READ |  [GUIBS5^DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html) | DFN | 12 | IS-A, UNSTRUCTURED READ, XREF |  | 
3. | DG CHK PAT/DIV MEANS TEST | READ |  [GUIMTD^DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html) | DFN, DUZ2 | 13 | - |  | 
4. | DG SENSITIVE RECORD BULLETIN | CHANGE |  [NOTICE^DGSEC4](http://code.osehra.org/dox/Routine_DGSEC4_source.html) | DFN, DGOPT, ACTION | 7 | BULLETIN | 38.1 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5. | GMRC LIST CONSULT REQUESTS | READ |  [RPCLIST^GMRCTIU](http://code.osehra.org/dox/Routine_GMRCTIU_source.html) | DFN | 4 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
6. | __GMV ADD VM__ | CHANGE |  [EN1^GMVDCSAV](http://code.osehra.org/dox/Routine_GMVDCSAV_source.html) | GMVDATA | 3 | RPCLOCKER |  | 
7. | GMV ALLERGY | READ |  [ALLERGY^GMVUTL3](http://code.osehra.org/dox/Routine_GMVUTL3_source.html) | DFN | 8 | - |  | 
8. | GMV CLOSEST READING | READ |  [CLOSEST^GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html) | GMVDFN, GMVDT, GMVT, GMVFLAG | 41 | - |  | 
9. | GMV EXTRACT REC | READ |  [GETVM^GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html) | GMRVDATA | 11 | - | 120.5 | 
10. | GMV LATEST VM | READ |  [GETLAT^GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html) | GMRDFN | 2 | - |  | 
11. | __GMV MARK ERROR__ | CHANGE |  [ERROR^GMVUTL1](http://code.osehra.org/dox/Routine_GMVUTL1_source.html) | GMVDATA | 8 | RPCLOCKER |  | 
12. | GMV V/M ALLDATA | READ |  [VMDATA^GMVGGR1](http://code.osehra.org/dox/Routine_GMVGGR1_source.html) | GMVDATA | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
13. | __OR GET COMBAT VET__ | READ |  [CV^ORMARKER](http://code.osehra.org/dox/Routine_ORMARKER_source.html) | DFN | 19 | RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14. | ORALWORD ALLWORD | READ |  [ALLWORD^ORALWORD](http://code.osehra.org/dox/Routine_ORALWORD_source.html) | DFN, ORX, ORTYPE, PROV | 56 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
15. | ORB DELETE ALERT | CHANGE |  [DEL^ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html) | XQAID, ORKILL | 8 | ALERT | 8992.1 | 
16. | ORB FOLLOW-UP ARRAY | READ |  [GUI^ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html) | ORXQAID | 2 | DFN TO K/META | 8992, 8992.1 | 
17. | ORB FOLLOW-UP STRING | READ |  [GUI^ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html) | ORXQAID | 2 | DFN TO K/META | 8992, 8992.1 | 
18. | ORB FOLLOW-UP TYPE | READ |  [TYPE^ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html) | ORXQAID | 5 | DFN TO K/META | 100.9 | 
19. | ORB FORWARD ALERT | CHANGE |  [FWD^ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html) | ORBLST, ORBRECIP, ORBTYPE, ORBCOMNT | 4 | ALERT |  | 
20. | ORB RENEW ALERT | CHANGE |  [RENEW^ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html) | XQAID | 4 | ALERT |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
21. | ORCDLR2 CHECK ALL LC TO WC | READ |  [GUI^ORCDLR2](http://code.osehra.org/dox/Routine_ORCDLR2_source.html) | ORL, ORDERS | 16 | - |  | 
22. | ORCDLR2 CHECK ONE LC TO WC | READ |  [KIDS^ORCDLR2](http://code.osehra.org/dox/Routine_ORCDLR2_source.html) | ORL, ORIFN, DATE, TYPE, SCH, DUR | 17 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
23. | ORCHECK DELMONO | UTILITY |  [DELMONO^ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html) | &nbsp; | 1 | REENTRANCY |  | 
24. | ORCHECK GETMONO | READ |  [GETMONO^ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html) | ORMONO | 5 | REENTRANCY |  | 
25. | ORCHECK GETMONOL | READ |  [GETMONOL^ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html) | &nbsp; | 4 | REENTRANCY |  | 
26. | ORCHECK GETXTRA | READ |  [GETXTRA^ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html) | ORGL, ORRULE | 3 | REENTRANCY |  | 
27. | ORCHECK ISMONO | READ |  [ISMONO^ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html) | &nbsp; | 3 | IS-A, REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
28. | ORCNOTE GET TOTAL | READ |  [GETTOT^ORCNOTE](http://code.osehra.org/dox/Routine_ORCNOTE_source.html) | DFN | 6 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
29. | ORDEA HASHINFO | READ |  [HASHINFO^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | ORDFN, ORPROV | 18 | - |  | 
30. | ORDEA ORDHINFO | READ |  [ORDHINFO^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | ORIFN, HASH, OHINFO | 2 | - |  | 
31. | ORDEA PINLKCHK | UTILITY |  [PINLKCHK^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | &nbsp; | 5 | LOCK |  | 
32. | ORDEA PINLKSET | UTILITY |  [PINLKSET^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | &nbsp; | 3 | LOCK |  | 
33. | ORDEA PNDHLD | READ |  [PNDHLD^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | ORID | 3 | IS-A |  | 
34. | ORDEA SIGINFO | READ |  [SIGINFO^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html) | ORDFN, ORPROV | 18 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
35. | ORECS01 VSITID | READ |  [VSITID^ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html) | VSTSTR | 5 | IEN-LOOKUP |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36. | OREVNTX LIST | READ |  [LIST^OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html) | DFN | 12 | - | 100.2 | 
37. | OREVNTX PAT | READ |  [PAT^OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html) | DFN | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
38. | OREVNTX1 CHGEVT | CHANGE |  [CHGEVT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | NEWEVT, ORIDS | 4 | - |  | 
39. | OREVNTX1 COMP | READ |  [COMP^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVT | 2 | - | 100.2 | 
40. | OREVNTX1 CURSPE | READ |  [CURSPE^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTIFN | 3 | - |  | 
41. | OREVNTX1 DELPTEVT | CHANGE |  [DELPTEVT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVT | 2 | - | 100.2 | 
42. | OREVNTX1 DIV | READ |  [DIV^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVT | 2 | LOCATION | 100.2 | 
43. | OREVNTX1 DONE | CHANGE |  [DONE^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVT | 3 | - | 100.2 | 
44. | OREVNTX1 EMPTY | READ |  [EMPTY^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVT | 2 | IS-A | 100.2 | 
45. | OREVNTX1 EVT | READ |  [EVT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVT | 2 | - | 100.2, 100.5 | 
46. | OREVNTX1 EXISTS | READ |  [EXISTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DFN, EVT | 4 | - | 100.2 | 
47. | OREVNTX1 GETSTS | READ |  [GETSTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | ORDID | 3 | - |  | 
48. | OREVNTX1 GTEVT | READ |  [GTEVT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVT | 14 | - | 100.2, 100.5 | 
49. | OREVNTX1 HAVEPRT | READ |  [HAVEPRT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVT | 3 | - | 100.2 | 
50. | OREVNTX1 ISDCOD | READ |  [ISDCOD^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | ORIFN | 13 | IS-A, PARAMETER |  | OREVNT EXCLUDE DGRP
51. | OREVNTX1 ISHDORD | READ |  [ISHDORD^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | ORID | 11 | IS-A | 100, 100.98, 100.01 | 
52. | OREVNTX1 ISPASS | READ |  [ISPASS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVTID, EVTTYPE | 4 | IS-A |  | 
53. | OREVNTX1 LOC | READ |  [LOC^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVT | 3 | LOCATION | 100.2 | 
54. | OREVNTX1 MATCH | READ |  [MATCH^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DFN, EVT | 7 | - |  | 
55. | OREVNTX1 NAME | READ |  [NAME^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | PTEVT | 2 | - | 100.5, 100.2 | 
56. | OREVNTX1 ODPTEVID | READ |  [ODPTEVID^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | ORID | 2 | - | 100, 100.2 | 
57. | OREVNTX1 PUTEVNT | CHANGE |  [PUTEVNT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html) | DFN, EVT, ORIFN | 1 | - | 100.2 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58. | ORIMO IMOLOC | READ |  [IMOLOC^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html) | ORLOC, ORDFN | 14 | - |  | 
59. | ORIMO IMOOD | READ |  [IMOOD^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html) | ORDERID | 8 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
60. | ORK TRIGGER | READ |  [EN^ORKCHK](http://code.osehra.org/dox/Routine_ORKCHK_source.html) | ORKDFN, ORKA, ORKMODE, OROIL, ORDODSG | 96 | LOGIC, PARAMETER |  | ORK DEBUG ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
61. | ORPRF GETFLG | READ |  [GETFLG^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html) | PTDFN, FLAGID | 5 | REENTRANCY |  | 
62. | ORPRF HASFLG | READ |  [HASFLG^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html) | PTDFN | 11 | REENTRANCY |  | 
63. | ORPRF TRIGGER POPUP | READ |  [TRIGRPOP^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html) | PTDFN | 2 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
64. | ORQOR DETAIL | READ |  [DETAIL^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | ORID, DFN | 6 | JLV, UNSTRUCTURED READ |  | 
65. | ORQOR LIST | READ |  [LIST^ORQOR1](http://code.osehra.org/dox/Routine_ORQOR1_source.html) | PATIENT, GROUP, FLAG, ORSDT, OREDT, ORXREF, GETKID | 15 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
66. | ORQPT ATTENDING/PRIMARY | READ |  [ATTPRIM^ORQPTQ3](http://code.osehra.org/dox/Routine_ORQPTQ3_source.html) | DFN | 5 | - |  | 
67. | ORQPT CLINIC PATIENTS | READ |  [CLINPTS^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | CLIN, ORBDATE, OREDATE, MAXAPPTS, APPTBGN, APPTEND | 42 | PARAMETER, QUERY |  | 
68. | ORQPT DEFAULT PATIENT LIST | READ |  [DEFLIST^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | &nbsp; | 30 | PARAMETER |  | 
69. | ORQPT MAKE RPL | UTILITY |  [RPLMAKE^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | ORTL | 12 | REENTRANCY | 100.21 | 
70. | ORQPT PATIENT TEAM PROVIDERS | READ |  [TPTPR^ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html) | PT | 8 | QUERY, XREF | 100.21 | 
71. | ORQPT PROVIDER PATIENTS | READ |  [PROVPTS^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | PROV | 5 | QUERY, XREF |  | 
72. | ORQPT READ RPL | READ |  [RPLREAD^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html) | ORJ, ORFROM, ORDIR | 17 | REENTRANCY |  | 
73. | ORQPT SPECIALTY PATIENTS | READ |  [SPECPTS^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | SPEC | 5 | QUERY | 2 | 
74. | ORQPT TEAM PATIENTS | READ |  [TEAMPTS^ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html) | TEAM, TMPFLAG | 17 | REENTRANCY | 100.21 | 
75. | ORQPT WARD PATIENTS | READ |  [WARDPTS^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html) | WARD | 16 | LOCATION | 42, 2 | 
76. | ORQPT WARDRMBED | READ |  [WRB^ORQPTQ3](http://code.osehra.org/dox/Routine_ORQPTQ3_source.html) | DFN | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77. | __ORQQAL DETAIL__ | READ |  [DETAIL^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html) | DFN, ALLR, ID | 14 | JLV, RPCLOCKER, UNSTRUCTURED READ |  | 
78. | __ORQQAL LIST__ | READ |  [LIST^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html) | ORPT | 7 | RPCLOCKER |  | 
79. | ORQQAL LIST REPORT | READ |  [LRPT^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html) | ORPT | 17 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
80. | ORQQCN ADDCMT | CHANGE |  [CMT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORIEN, ORCOM, ORALRT, ORALTO, ORDATE | 7 | ALERT | 123 | 
81. | ORQQCN ADMIN COMPLETE | CHANGE |  [ADMCOMPL^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORIEN, ORFL, ORCOM, ORRESP, ORALRT, ORALTO, ORDATE | 1 | - |  | 
82. | ORQQCN ASSIGNABLE MED RESULTS | READ |  [GETMED^ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html) | GMRCO | 2 | - | 123, 697.2 | 
83. | ORQQCN ATTACH MED RESULTS | CHANGE |  [MEDCOMP^ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html) | GMRCO, GMRCRSLT, GMRCAD, GMRCORNP, ORALTO | 5 | - | 123 | 
84. | ORQQCN CANEDIT | READ |  [CANEDIT^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | GMRCO | 1 | - | 123 | 
85. | ORQQCN DETAIL | READ |  [DETAIL^ORQQCN](http://code.osehra.org/dox/Routine_ORQQCN_source.html) | CONSULT | 5 | JLV, UNSTRUCTURED READ | 123 | 
86. | ORQQCN DISCONTINUE | CHANGE |  [DC^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | GMRCO, GMRCORNP, GMRCAD, GMRCACTM, ORCOM | 1 | - | 123 | 
87. | ORQQCN FIND CONSULT | READ |  [FINDCSLT^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | GMRCIEN | 9 | - | 123 | 
88. | ORQQCN FORWARD | CHANGE |  [FR^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | GMRCO, GMRCSS, GMRCORNP, GMRCATTN, GMRCURGI, ORDATE, ORCOM | 2 | - | 123, 123.5 | 
89. | ORQQCN GET CONSULT | READ |  [GETCSLT^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | ORIEN, SHOWADD | 26 | - | 123 | 
90. | ORQQCN GET MED RESULT DETAILS | READ |  [DISPMED^ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html) | GMRCRES | 3 | UNSTRUCTURED READ | 691.5 | 
91. | ORQQCN GET ORDER NUMBER | READ |  [GETORDER^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | GMRCO | 2 | - | 123, 100 | 
92. | ORQQCN LIST | READ |  [LIST^ORQQCN](http://code.osehra.org/dox/Routine_ORQQCN_source.html) | ORPT, ORSDT, OREDT, ORSERV, ORSTATUS | 13 | QUERY | 123 | 
93. | ORQQCN LOAD FOR EDIT | READ |  [EDITLOAD^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | GMRCO | 6 | - | 123 | 
94. | ORQQCN MED RESULTS | READ |  [MEDRSLT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | GMRCO | 2 | - | 123 | 
95. | ORQQCN RECEIVE | CHANGE |  [RC^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | GMRCO, GMRCORNP, GMRCAD, ORCOM | 1 | - | 123 | 
96. | ORQQCN REMOVABLE MED RESULTS | READ |  [GETRES^ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html) | GMRCO | 2 | - | 123, 697.2 | 
97. | ORQQCN REMOVE MED RESULTS | CHANGE |  [REMOVE^ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html) | GMRCO, GMRCRSLT, GMRCAD, GMRCORNP | 2 | - | 123 | 
98. | ORQQCN RESUBMIT | CHANGE |  [RESUBMIT^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | GMRCO, OREDITED | 5 | - | 123 | 
99. | ORQQCN SET ACT MENUS | READ |  [SETACTM^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | GMRCO | 6 | CPRS CONFIG | 123 | 
100. | ORQQCN SHOW SF513 | CHANGE |  [SHOW513^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | GMRCO | 1 | - | 123 | 
101. | ORQQCN SIGFIND | READ |  [SIGFIND^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORIEN, ORFL, ORCOM, ORALRT, ORALTO, ORDATE | 1 | - | 123 | 
102. | ORQQCN UNRESOLVED | READ |  [UNRSLVD^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORDFN | 2 | IS-A, PARAMETER |  | ORWOR SHOW CONSULTS
103. | ORQQCN URGENCIES | READ |  [URG^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html) | GMRCO | 13 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
104. | ORQQCN2 GET PREREQUISITE | READ |  [PREREQ^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORSVC, ORDFN | 4 | - |  | 
105. | ORQQCN2 SCHEDULE CONSULT | CHANGE |  [SCH^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html) | ORIEN, ORNP, ORDATE, ORALRT, ORALTO, ORCOM | 7 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
106. | ORQQLR DETAIL | READ |  [DETAIL^ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html) | DFN, ORDER | 16 | UNSTRUCTURED READ |  | 
107. | ORQQLR SEARCH RANGE INPT | READ |  [SRIN^ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html) | ORPT | 10 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
108. | __ORQQPL ADD SAVE__ | CHANGE |  [ADDSAVE^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | GMPDFN, GMPROV, GMPVAMC, ADDARRAY, GMPSRCH | 12 | RPCLOCKER |  | 
109. | ORQQPL AUDIT HIST | READ |  [HIST^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | GMPIFN | 21 | - |  | 
110. | ORQQPL CHECK DUP | READ |  [DUP^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | DFN, TERM, TEXT | 3 | - |  | 
111. | __ORQQPL DELETE__ | CHANGE |  [DELETE^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | GMPIFN, GMPROV, GMPVAMC, REASON | 11 | RPCLOCKER |  | 
112. | __ORQQPL DETAIL__ | READ |  [DETAIL^ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html) | DFN, PROBIEN, ID | 53 | JLV, RPCLOCKER, UNSTRUCTURED READ |  | 
113. | ORQQPL EDIT LOAD | READ |  [EDLOAD^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | DA | 6 | - |  | 
114. | __ORQQPL EDIT SAVE__ | CHANGE |  [EDSAVE^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | GMPIFN, GMPROV, GMPVAMC, UT, EDARRAY, GMPSRCH | 14 | RPCLOCKER |  | 
115. | ORQQPL INACTIVATE | CHANGE |  [INACT^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | GMPIFN | 16 | - |  | 
116. | ORQQPL INIT PT | READ |  [INITPT^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | DFN | 15 | - |  | 
117. | ORQQPL LIST | READ |  [LIST^ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html) | DFN, STATUS | 21 | - |  | 
118. | ORQQPL PROB COMMENTS | READ |  [GETCOMM^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | PIFN | 8 | JLV |  | 
119. | __ORQQPL PROBLEM LIST__ | READ |  [PROBL^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html) | DFN, CONTEXT, ORIDT | 13 | RPCLOCKER |  | 
120. | __ORQQPL REPLACE__ | CHANGE |  [REPLACE^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | DA | 10 | RPCLOCKER |  | 
121. | __ORQQPL UPDATE__ | CHANGE |  [UPDATE^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html) | UPDARRAY | 8 | RPCLOCKER |  | 
122. | ORQQPL VERIFY | CHANGE |  [VERIFY^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html) | GMPIFN | 16 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
123. | ORQQPP LIST | READ |  [LIST^ORQQPP](http://code.osehra.org/dox/Routine_ORQQPP_source.html) | ORPT | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
124. | ORQQPS DETAIL | READ |  [DETAIL^ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html) | ORPT, ORMED | 53 | - |  | 
125. | ORQQPS LIST | READ |  [LIST^ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html) | ORPT, ORSTRTDT, ORSTOPDT | 48 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
126. | ORQQPX IMMUN LIST | READ |  [IMMLIST^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | ORPT | 14 | - | 9000010.11 | 
127. | ORQQPX REMINDER DETAIL | UTILITY |  [REMDET^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | ORPT, ORIEN | 7 | JLV, eHMP | 811.9 | 
128. | ORQQPX REMINDERS LIST | UTILITY |  [REMIND^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html) | ORPT | 25 | PARAMETER, eHMP | 811.9 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
129. | ORQQPXRM GEC DIALOG | UTILITY |  [GEC^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | IEN, DFN, VISIT, NOTEIEN | 1 | COMPUTATION | 801.41, 811.9, 801.5 | 
130. | ORQQPXRM GEC FINISHED? | UTILITY |  [GECF^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | DFN, FIN | 1 | - | 801.5 | 
131. | ORQQPXRM GEC STATUS PROMPT | UTILITY |  [GECP^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | DFN | 1 | - | 801.5 | 
132. | ORQQPXRM MENTAL HEALTH RESULTS | READ |  [MHR^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | RESULT, ORES | 1 | - | 801.41 | 
133. | ORQQPXRM MENTAL HEALTH SAVE | CHANGE |  [MHS^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORES | &nbsp; | - |  | 
134. | ORQQPXRM MHDLL | READ |  [MHDLL^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | DFN, INPUTS | 8 | - |  | 
135. | ORQQPXRM MHV | READ |  [MHV^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | DFN, NAME, ANS | 12 | - |  | 
136. | ORQQPXRM REMINDER DETAIL | UTILITY |  [REMDET^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORPT, ORIEN | &nbsp; | UNSTRUCTURED READ | 811.9 | 
137. | ORQQPXRM REMINDER DIALOG | READ |  [DIALOG^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORREM, DFN | 5 | - | 811.9, 801.41 | 
138. | ORQQPXRM REMINDER EVALUATION | UTILITY |  [ALIST^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORPT, ORLIST | &nbsp; | - |  | 
139. | ORQQPXRM REMINDERS APPLICABLE | UTILITY |  [APPL^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORPT, ORLOC | &nbsp; | - |  | 
140. | ORQQPXRM REMINDERS UNEVALUATED | UTILITY |  [LIST^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORPT, ORLOC | &nbsp; | - |  | 
141. | ORQQPXRM WOMEN HEALTH SAVE | CHANGE |  [WH^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORRESULT | 1 | - | 790.1 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
142. | ORQQVI NOTEVIT | READ |  [NOTEVIT^ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html) | DFN, NOTEIEN | 4 | - |  | 
143. | __ORQQVI VITALS__ | READ |  [FASTVIT^ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html) | DFN, F1, F2 | 18 | RPCLOCKER |  | 
144. | ORQQVI VITALS FOR DATE RANGE | READ |  [VITALS^ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html) | DFN, ORSDT, OREDT | 13 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
145. | ORQQVI1 DETAIL | READ |  [DETAIL^ORQQVI1](http://code.osehra.org/dox/Routine_ORQQVI1_source.html) | DFN, DATE1, DATE2, RTIMES, TESTS | 9 | - |  | 
146. | ORQQVI1 GRID | READ |  [GRID^ORQQVI1](http://code.osehra.org/dox/Routine_ORQQVI1_source.html) | DFN, DATE1, DATE2, RTIMES, TESTS | 9 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
147. | ORQQVI2 VITALS VAL & STORE | CHANGE |  &nbsp; | &nbsp; | &nbsp; | EXTERNAL I/F | 120.5 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
148. | ORQQVS DETAIL NOTES | READ |  [DETNOTE^ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html) | ORPT, ORVIEN | 19 | QUERY |  | 
149. | ORQQVS DETAIL SUMMARY | READ |  [DETSUM^ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html) | ORPT, ORVIEN | 19 | - |  | 
150. | ORQQVS VISITS/APPTS | READ |  [VSITAPPT^ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html) | PT, SDT, EDT, DUMMY | 19 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
151. | ORQQXQA PATIENT | READ |  [PATIENT^ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html) | ORPT | 27 | - | 100.9, 8992 | 
152. | ORQQXQA USER | READ |  [USER^ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html) | &nbsp; | 33 | - | 100.9, 8992 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
153. | ORRHCQ QRYITR | UTILITY |  [QRYITR^ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html) | ORRITR | 3 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
154. | ORVAA VAA | READ |  [VAA^ORVAA](http://code.osehra.org/dox/Routine_ORVAA_source.html) | DFN | 14 | BUSINESS |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
155. | ORWCS LIST OF CONSULT REPORTS | READ |  [LIST^ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html) | DFN, SERV, BEGDT, ENDDT, STATUS | 16 | - |  | 
156. | ORWCS REPORT TEXT | READ |  [RPT^ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html) | DFN, ORID | 2 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
157. | ORWCV DTLVST | READ |  [DTLVST^ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html) | DFN, IEN, APPTINFO | 13 | - |  | 
158. | ORWCV LAB | READ |  [LAB^ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html) | DFN | 3 | - |  | 
159. | ORWCV POLL | UTILITY |  [POLL^ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html) | DFN, IP, HWND | 11 | REENTRANCY |  | 
160. | ORWCV START | UTILITY |  [START^ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html) | DFN, IP, HWND, LOC, NODO, NEWREM | 23 | PARAMETER, REENTRANCY |  | ORWCV1 COVERSHEET LIST, ORWOR COVER RETRIEVAL, ORWOR COVER RETRIEVAL NEW
161. | ORWCV STOP | UTILITY |  [STOP^ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html) | DFN, IP, HWND | 5 | REENTRANCY |  | 
162. | ORWCV VST | READ |  [VST1^ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html) | DFN, BEG, END, SKIP | 5 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
163. | ORWD FORMID | READ |  [FORMID^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | ORIFN | 4 | DFN TO K/META | 100, 101.41, 8989.52 | 
164. | ORWD GET4EDIT | READ |  [GET4EDIT^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | ORIFN | 14 | DFN TO K/META |  | 
165. | ORWD SIGN | CHANGE |  [SIGN^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | DFN, ORNP, LOC, ORWSIGN | 14 | XUSEC |  | 
166. | ORWD VALIDACT | READ |  [VALIDACT^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html) | ORIFN, ACTION | 2 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
167. | ORWD1 COMLOC | UTILITY |  [COMLOC^ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html) | ORDERS | 8 | LOCATION |  | 
168. | ORWD1 SIG4ANY | UTILITY |  [SIG4ANY^ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html) | ORDERS | 4 | IS-A |  | 
169. | ORWD1 SIG4ONE | READ |  [SIG4ONE^ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html) | ANORDER | 2 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
170. | ORWD2 DEVINFO | READ |  [DEVINFO^ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html) | LOC, NATR, ORDERS | 39 | PARAMETER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
171. | ORWDAL32 LOAD FOR EDIT | READ |  [EDITLOAD^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | ORALIEN | 5 | - |  | 
172. | __ORWDAL32 SAVE ALLERGY__ | CHANGE |  [EDITSAVE^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | ORALIEN, ORDFN, OREDITED | 7 | BULLETIN, PROTOCOL, RPCLOCKER |  | 
173. | ORWDAL32 SEND BULLETIN | UTILITY |  [SENDBULL^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html) | ORDUZ, ORDFN, ORTEXT, ORCMTS | 4 | BULLETIN |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
174. | ORWDBA1 GETORDX | READ |  [GETORDX^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html) | ORIEN | 16 | - |  | 
175. | ORWDBA1 ORPKGTYP | UTILITY |  [ORPKGTYP^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html) | ORLST | 5 | FMUTILITY, HARD CODED |  | 
176. | ORWDBA1 RCVORCI | CHANGE |  [RCVORCI^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html) | DIAG | 21 | - |  | 
177. | ORWDBA1 SCLST | CHANGE |  [SCLST^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html) | DFN, ORLST | 2 | PARAMETER | 100, 9.4 | OR BILLING AWARENESS BY USER
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
178. | ORWDBA2 GETDUDC | UTILITY |  [GETDUDC^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html) | ORCIEN, ORPTIEN | 21 | FMUTILITY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
179. | ORWDBA4 GETTFCI | READ |  [GETTFCI^ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html) | ORIEN | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
180. | ORWDCN32 DEF | READ |  [DEF^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html) | WHY | 11 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
181. | ORWDFH ADDLATE | CHANGE |  [ADDLATE^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | ORVP, ORNP, ORL, MEAL, TIME, BAG | 15 | - |  | 
182. | ORWDFH CURISO | READ |  [CURISO^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | ORVP | 2 | - |  | 
183. | ORWDFH CURRENT MEALS | READ |  [CURMEALS^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | ORDFN, ORMEAL | 7 | - |  | 
184. | ORWDFH ISOLIST | READ |  [ISOLIST^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | &nbsp; | 3 | - | 119.4 | 
185. | ORWDFH PARAM | READ |  [PARAM^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | ORVP, ORLOC | 23 | - |  | 
186. | ORWDFH TXT | READ |  [TXT^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html) | DFN | 7 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
187. | ORWDPS1 DOWSCH | READ |  [DOWSCH^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | DFN, LOCIEN | 14 | - |  | 
188. | ORWDPS1 SCHALL | READ |  [SCHALL^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html) | DFN, LOCIEN | 6 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
189. | ORWDPS2 ADMIN | READ |  [ADMIN^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | DFN, SCH, OI, LOC, ADMIN | 3 | LOCATION |  | 
190. | ORWDPS2 CHKGRP | READ |  [CHKGRP^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | ORIFN | 17 | COMPUTED |  | 
191. | ORWDPS2 CHKPI | READ |  [CHKPI^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | ODIFN | 7 | - |  | 
192. | ORWDPS2 MAXREF | READ |  [MAXREF^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | PAT, DRG, SUP, OI, OUT | 8 | - |  | 
193. | ORWDPS2 QTY2DAY | READ |  [QTY2DAY^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | QTY, UPD, SCH, DUR, PAT, DRG | 13 | COMPUTED |  | 
194. | ORWDPS2 REQST | READ |  [REQST^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html) | DFN, SCH, OI, LOC, TXT | 5 | LOCATION |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
195. | ORWDPS32 SCSTS | READ |  [SCSTS^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | ORVP, ORDRUG | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
196. | ORWDPS33 COMPLOC | READ |  [COMPLOC^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | ORID, LOC | 2 | IS-A, LOCATION |  | 
197. | ORWDPS33 IVDOSFRM | READ |  [IVDOSFRM^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html) | ORDERIDS, ALLIV | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
198. | ORWDPS4 CPINFO | CHANGE |  [CPINFO^ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html) | ORINFO | 9 | - |  | 
199. | ORWDPS4 CPLST | READ |  [CPLST^ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html) | PTIFN, ORIFNS | 12 | - |  | 
200. | ORWDPS4 IPOD4OP | READ |  [IPOD4OP^ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html) | ORID | 12 | IS-A |  | 
201. | ORWDPS4 ISUDIV | READ |  [ISUDIV^ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html) | ORIFN | 5 | IS-A |  | 
202. | ORWDPS4 UPDTDG | CHANGE |  [UPDTDG^ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html) | ORID | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
203. | ORWDPS5 ISVTP | READ |  [ISVTP^ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html) | ODIEN | 11 | COMPUTED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
204. | ORWDRA32 ISOLATN | READ |  [ISOLATN^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html) | DFN | 3 | COMPUTED, IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
205. | ORWDX CHANGE | CHANGE |  [CHANGE^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html) | ORCLST, DFN, ISIMO | 45 | - |  | 
206. | ORWDX DLGID | READ |  [DLGID^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | ORIFN | 2 | - |  | 
207. | ORWDX DLGQUIK | READ |  [DLGQUIK^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | QO | 1 | DFN TO K/META |  | 
208. | ORWDX FORMID | READ |  [FORMID^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | ORIFN | 4 | DFN TO K/META |  | 
209. | ORWDX LOCK | UTILITY |  [LOCK^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DFN | 1 | LOCK |  | 
210. | ORWDX LOCK ORDER | UTILITY |  [LOCKORD^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | ORIFN | 1 | LOCK |  | 
211. | ORWDX SAVE | CHANGE |  [SAVE^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | ORVP, ORNP, ORL, DLG, ORDG, ORIT, ORIFN, ORDIALOG, ORDEA, ORAPPT, ORSRC, OREVTDF | 56 | - |  | 
212. | ORWDX SEND | CHANGE |  [SEND^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DFN, ORNP, ORL, ES, ORWREC | &nbsp; | - |  | 
213. | ORWDX SENDED | CHANGE |  [SENDED^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | ORIENS, TS, LOC | 26 | - |  | 
214. | ORWDX UNLKOTH | UTILITY |  [UNLKOTH^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | ORIFN | 2 | LOCK |  | 
215. | ORWDX UNLOCK | UTILITY |  [UNLOCK^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | DFN | 1 | LOCK |  | 
216. | ORWDX UNLOCK ORDER | UTILITY |  [UNLKORD^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html) | ORIFN | 1 | LOCK |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
217. | ORWDX1 DCORIG | CHANGE |  [DCORIG^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html) | ORIEN | 1 | - |  | 
218. | ORWDX1 DCREN | CHANGE |  [DCREN^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html) | ORYARR | 18 | - |  | 
219. | ORWDX1 ORDMATCH | UTILITY |  [ORDMATCH^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html) | DFN, ORYARR | 12 | IS-A |  | 
220. | ORWDX1 PATWARD | READ |  [PATWARD^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html) | DFN | 5 | - |  | 
221. | ORWDX1 STCHANGE | UTILITY |  [STCHANGE^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html) | DFN, ORYARR | 7 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
222. | ORWDXA ALERT | CHANGE |  [ALERT^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID, ORDUZ | 3 | - |  | 
223. | ORWDXA COMPLETE | CHANGE |  [COMPLETE^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID, ESCODE | 3 | - |  | 
224. | ORWDXA DC | CHANGE |  [DC^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID, ORNP, ORL, REASON, DCORIG, ISNEWORD | 59 | - |  | 
225. | ORWDXA DCREQIEN | READ |  [DCREQIEN^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | &nbsp; | 1 | - |  | 
226. | ORWDXA FLAG | CHANGE |  [FLAG^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORIFN, OREASON, ORNP | 9 | - |  | 
227. | ORWDXA FLAGTXT | READ |  [FLAGTXT^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID | 4 | - |  | 
228. | ORWDXA HOLD | CHANGE |  [HOLD^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID, ORNP | 3 | - |  | 
229. | ORWDXA OFCPLX | READ |  [OFCPLX^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID, PRTORDER | 20 | IS-A |  | 
230. | ORWDXA UNFLAG | CHANGE |  [UNFLAG^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORIFN, OREASON | 7 | - |  | 
231. | ORWDXA UNHOLD | CHANGE |  [UNHOLD^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID, ORNP | 3 | - |  | 
232. | ORWDXA VALID | UTILITY |  [VALID^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID, ACTION, ORNP, ORWNAT | 38 | IS-A |  | 
233. | ORWDXA VERIFY | CHANGE |  [VERIFY^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID, ESCODE, ORVER | 7 | - |  | 
234. | ORWDXA WCGET | READ |  [WCGET^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID | 2 | - |  | 
235. | ORWDXA WCPUT | CHANGE |  [WCPUT^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html) | ORID, WCLST | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
236. | ORWDXC ACCEPT | UTILITY |  [ACCEPT^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | DFN, FID, STRT, ORL, OIL, ORIFN, ORREN | 26 | PARAMETER, REENTRANCY |  | 
237. | ORWDXC DELAY | UTILITY |  [DELAY^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | DFN, FID, STRT, ORL, OIL | 13 | PARAMETER, REENTRANCY |  | 
238. | ORWDXC DELORD | CHANGE |  [DELORD^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | ORIFN | 11 | REENTRANCY |  | 
239. | ORWDXC DISPLAY | UTILITY |  [DISPLAY^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | DFN, FID | 4 | PARAMETER, REENTRANCY |  | 
240. | ORWDXC SAVECHK | UTILITY |  [SAVECHK^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | ORVP, RSN, LST | 4 | REENTRANCY |  | 
241. | ORWDXC SESSION | UTILITY |  [SESSION^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html) | ORVP, ORLST | 12 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
242. | ORWDXM AUTOACK | CHANGE |  [AUTOACK^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html) | ORVP, ORNP, ORL, ORIT | 11 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
243. | ORWDXM1 BLDQRSP | UTILITY |  [BLDQRSP^ORWDXM1](http://code.osehra.org/dox/Routine_ORWDXM1_source.html) | ORIT, FLDS, ISIMO, ENCLOC | 151 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
244. | ORWDXM2 CLRRCL | UTILITY |  [CLRRCL^ORWDXM2](http://code.osehra.org/dox/Routine_ORWDXM2_source.html) | &nbsp; | 2 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
245. | ORWDXR CANRN | READ |  [CANRN^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html) | ORID | 20 | COMPUTED, IS-A |  | 
246. | ORWDXR GETPKG | READ |  [GETPKG^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html) | IFN | 5 | - |  | 
247. | ORWDXR GTORITM | READ |  [GTORITM^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html) | ORIFN | 2 | - |  | 
248. | ORWDXR ISCPLX | READ |  [ISCPLX^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html) | ORID | 14 | COMPUTED, IS-A |  | 
249. | ORWDXR ISNOW | READ |  [ISNOW^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html) | ORID | 7 | COMPUTED, IS-A |  | 
250. | ORWDXR ISREL | READ |  [ISREL^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html) | ORIFN | 2 | IS-A |  | 
251. | ORWDXR ORCPLX | READ |  [ORCPLX^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html) | ORID, ORACT | 18 | - |  | 
252. | ORWDXR RENEW | CHANGE |  [RENEW^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html) | ORIFN, ORVP, ORNP, ORL, FLDS, CPLX, ORAPPT | 56 | - |  | 
253. | ORWDXR RNWFLDS | READ |  [RNWFLDS^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html) | ORIFN | 32 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
254. | ORWDXR01 CANCHG | READ |  [CANCHG^ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html) | ORIFN, TXTOD | 16 | COMPUTED, IS-A |  | 
255. | ORWDXR01 OXDATA | READ |  [OXDATA^ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html) | ORIEN | 32 | - |  | 
256. | ORWDXR01 SAVCHG | CHANGE |  [SAVCHG^ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html) | ORID, PARM1, PARM2, TXTOD | 16 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
257. | ORWDXVB GETALL | READ |  [GETALL^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | DFN, LOC | 35 | PARAMETER |  | OR VBECS MODIFIERS, OR VBECS REASON FOR REQUEST, OR VBECS REASON SORT ALPHA
258. | ORWDXVB RAW | READ |  [RAW^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | DFN, ORX | 13 | - |  | 
259. | ORWDXVB RESULTS | READ |  [RESULTS^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html) | DFN, ORX | 24 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
260. | ORWGRPC ALLITEMS | READ |  [ALLITEMS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | DFN | 2 | - |  | 
261. | ORWGRPC DATEITEM | READ |  [DATEITEM^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | OLDEST, NEWEST, FNUM, DFN | 2 | - |  | 
262. | ORWGRPC DETAIL | READ |  [DETAIL^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | DFN, DATE1, DATE2, VAL, COMP | 2 | - |  | 
263. | ORWGRPC DETAILS | READ |  [DETAILS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | DFN, DATE1, DATE2, TYPE, COMP | 2 | UNSTRUCTURED READ |  | 
264. | ORWGRPC FASTDATA | READ |  [FASTDATA^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | DFN | 1 | - |  | 
265. | ORWGRPC FASTITEM | READ |  [FASTITEM^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | DFN | 1 | - |  | 
266. | ORWGRPC FASTLABS | READ |  [FASTLABS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | DFN | 1 | - |  | 
267. | ORWGRPC FASTTASK | UTILITY |  [FASTTASK^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | DFN, OLDDFN | 1 | REENTRANCY, TASK |  | 
268. | ORWGRPC ITEMDATA | READ |  [ITEMDATA^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | ITEM, START, DFN | 2 | - |  | 
269. | ORWGRPC ITEMS | READ |  [ITEMS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | DFN, TYPE | 2 | - |  | 
270. | ORWGRPC LOOKUP | READ |  [LOOKUP^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | INFO, FROM, DIR | 1 | - |  | 
271. | ORWGRPC TYPES | READ |  [TYPES^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html) | DFN, SUB | 3 | PXRMINDX, QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
272. | ORWLR CUMULATIVE REPORT | UTILITY |  [CUM^ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html) | DFN, DAYS, ALPHA, OMEGA | 17 | - |  | 
273. | ORWLR CUMULATIVE SECTION | READ |  [RPT^ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html) | DFN, RPTID, DTRANGE, SECTION | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
274. | ORWLRR CHART | READ |  [CHART^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | DFN, DATE1, DATE2, SPEC, TEST | 1 | - |  | 
275. | ORWLRR GRID | READ |  [GRID^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | DFN, DATE1, DATE2, SPEC, TESTS | 1 | - |  | 
276. | ORWLRR INTERIM | READ |  [INTERIM^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | DFN, DATE1, DATE2 | 4 | ORWLRR INTERIM |  | 
277. | ORWLRR INTERIMG | READ |  [INTERIMG^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | DFN, DATE1, DIR, FORMAT | 1 | - |  | 
278. | ORWLRR INTERIMS | READ |  [INTERIMS^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | DFN, DATE1, DATE2, ORTESTS | 1 | - |  | 
279. | ORWLRR MICRO | READ |  [MICRO^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | DFN, DATE1, DATE2 | 4 | - |  | 
280. | ORWLRR NEWOLD | READ |  [NEWOLD^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html) | DFN | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
281. | ORWMC PATIENT PROCEDURES | READ |  [PROD^ORWMC](http://code.osehra.org/dox/Routine_ORWMC_source.html) | DFN | 1 | - |  | 
282. | ORWMC PATIENT PROCEDURES1 | READ |  [PROD1^ORWMC](http://code.osehra.org/dox/Routine_ORWMC_source.html) | DFN | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
283. | ORWNSS VALSCH | READ |  [VALSCH^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html) | ORID | 16 | IS-A |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
284. | ORWOR ACTION TEXT | READ |  [ACTXT^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | ORIFN | 6 | - |  | 
285. | ORWOR RESULT | READ |  [RESULT^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | DFN, ORID, ID | 5 | - |  | 
286. | ORWOR RESULT HISTORY | READ |  [RESHIST^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | DFN, ORID, ID | 6 | - |  | 
287. | ORWOR SHEETS | READ |  [SHEETS^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | ORVP | 14 | - |  | 
288. | ORWOR UNSIGN | READ |  [UNSIGN^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html) | ORVP, HAVE | 36 | PARAMETER |  | OR UNSIGNED ORDERS ON EXIT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
289. | ORWOR1 CHKDIG | READ |  [CHKDIG^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html) | ORDER | 3 | - |  | 
290. | ORWOR1 GETDSCH | READ |  [GETDSCH^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html) | ORDER | 3 | - |  | 
291. | ORWOR1 GETDSIG | READ |  [GETDSIG^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html) | ORDER | 3 | - |  | 
292. | ORWOR1 GETDTEXT | READ |  [GETDTEXT^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html) | ORDER | 3 | - |  | 
293. | ORWOR1 SETDTEXT | CHANGE |  [SETDTEXT^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html) | ORDER, ORDEA, ORSIGNER | 10 | - |  | 
294. | ORWOR1 SIG | CHANGE |  [SIG^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html) | ID, X1, X2, X3, X4, ORX5, X6, X7 | 28 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
295. | ORWORB AUTOUNFLAG ORDERS | CHANGE |  [UNFLORD^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | DFN, XQAID | &nbsp; | PARAMETER |  | ORPF AUTO UNFLAG
296. | ORWORB FASTUSER | READ |  [FASTUSER^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | &nbsp; | 59 | - |  | 
297. | ORWORB GET TIU ALERT INFO | READ |  [GETALRT^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html) | XQAID | 16 | - |  | 
298. | ORWORB GETDATA | READ |  [GETDATA^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | XQAID | 9 | - | 8992 | 
299. | ORWORB KILL EXPIR MED ALERT | CHANGE |  [KILEXMED^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | ORDFN | 10 | - |  | 
300. | ORWORB KILL EXPIR OI ALERT | CHANGE |  [KILEXOI^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | ORDFN, ORNIFN | 8 | - |  | 
301. | ORWORB KILL UNSIG ORDERS ALERT | CHANGE |  [KILUNSNO^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | ORVP | 2 | - |  | 
302. | ORWORB KILL UNVER MEDS ALERT | CHANGE |  [KILUNVMD^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | ORDFN | 14 | - |  | 
303. | ORWORB KILL UNVER ORDERS ALERT | CHANGE |  [KILUNVOR^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | ORDFN | 14 | - |  | 
304. | ORWORB TEXT FOLLOWUP | READ |  [TXTFUP^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | DFN, NOTIF, XQADATA | 1 | - |  | 
305. | ORWORB UNSIG ORDERS FOLLOWUP | CHANGE |  [ESORD^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html) | XQAID | 17 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
306. | ORWORR AGET | READ |  [AGET^ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html) | DFN, FILTER, GROUPS, DTFROM, DTTHRU, EVENT, ORRECIP | 17 | QUERY |  | 
307. | ORWORR GET | READ |  [GET^ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html) | DFN, FILTER, GROUPS | 10 | QUERY |  | 
308. | ORWORR GET4LST | UTILITY |  [GET4V11^ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html) | TXTVW, ORYD, IFNLST | 1 | FMUTILITY |  | 
309. | ORWORR GETBYIFN | READ |  [GETBYIFN^ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html) | IFN | 6 | - |  | 
310. | ORWORR GETTXT | READ |  [GETTXT^ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html) | IFN | 2 | - |  | 
311. | ORWORR RGET | READ |  [RGET^ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html) | DFN, FILTER, GROUPS, DTFROM, DTTHRU, EVENT | 3 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
312. | ORWPCE ACTPROB | READ |  [ACTPROB^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | DFN, ORDATE | 19 | - |  | 
313. | ORWPCE CPTREQD | READ |  [CPTREQD^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | IEN | 1 | IS-A |  | 
314. | ORWPCE CXNOSHOW | READ |  [CXNOSHOW^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | ORDOCIEN | 4 | IS-A |  | 
315. | ORWPCE DELETE | CHANGE |  [DELETE^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | VSTR, DFN | 12 | - |  | 
316. | ORWPCE GET VISIT | READ |  [GETVISIT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html) | IEN, DFN, VSITSTR | 3 | IEN-LOOKUP |  | 
317. | ORWPCE HASVISIT | READ |  [HASVISIT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | IEN, DFN, ORLOC, ORDTE | 5 | IS-A |  | 
318. | ORWPCE NOTEVSTR | READ |  [NOTEVSTR^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | IEN | 4 | - |  | 
319. | ORWPCE PCE4NOTE | READ |  [PCE4NOTE^ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html) | IEN, DFN, VSITSTR | 172 | - |  | 
320. | ORWPCE SAVE | CHANGE |  [SAVE^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | PCELIST, NOTEIEN, ORLOC | 11 | - |  | 
321. | ORWPCE SCDIS | READ |  [SCDIS^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | DFN | 9 | - |  | 
322. | ORWPCE SCSEL | READ |  [SCSEL^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html) | DFN, ATM, LOC, VST | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
323. | ORWPS ACTIVE | READ |  [ACTIVE^ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html) | DFN, USER, VIEW, UPDATE | 54 | PARAMETER |  | ORCH CONTEXT MEDS
324. | ORWPS COVER | READ |  [COVER^ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html) | DFN, FILTER | 12 | QUERY |  | 
325. | ORWPS DETAIL | READ |  [DETAIL^ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html) | DFN, ID | 5 | JLV |  | 
326. | ORWPS MEDHIST | READ |  [MEDHIST^ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html) | DFN, ORIFN | 21 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
327. | ORWPS1 REFILL | CHANGE |  [REFILL^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html) | ORDERID, REFLOC, ORVP, ORNP, ORL | 4 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
328. | ORWPT ADMITLST | READ |  [ADMITLST^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN | 10 | JLV |  | 
329. | ORWPT APPTLST | READ |  [APPTLST^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN | 9 | LOCATION |  | 
330. | ORWPT BYWARD | READ |  [BYWARD^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | WARD | 7 | LOCATION |  | 
331. | ORWPT CWAD | READ |  [CWAD^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN | 1 | - |  | 
332. | __ORWPT DIEDON__ | READ |  [DIEDON^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN | 1 | RPCLOCKER |  | 
333. | ORWPT DISCHARGE | READ |  [DISCHRG^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN, ADMITDT | 5 | - |  | 
334. | ORWPT ENCTITL | READ |  [ENCTITL^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN, LOC, PROV | 3 | - |  | 
335. | ORWPT FULLSSN | READ |  [FULLSSN^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | ID | 4 | QUERY |  | 
336. | ORWPT FULLSSN RPL | READ |  [FSSNRPL^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | ID | 13 | QUERY |  | 
337. | __ORWPT ID INFO__ | READ |  [IDINFO^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN | 3 | RPCLOCKER |  | 
338. | __ORWPT INPLOC__ | READ |  [INPLOC^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN | 7 | RPCLOCKER |  | 
339. | ORWPT LAST5 | READ |  [LAST5^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | ID | 4 | QUERY |  | 
340. | ORWPT LAST5 RPL | READ |  [LAST5RPL^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | ID | 10 | QUERY |  | 
341. | __ORWPT LIST ALL__ | READ |  [LISTALL^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | FROM, DIR | 8 | RPCLOCKER |  | 
342. | __ORWPT PTINQ__ | READ |  [PTINQ^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN | 3 | JLV, RPCLOCKER, UNSTRUCTURED READ |  | 
343. | ORWPT SELCHK | CHANGE |  [SELCHK^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN | 1 | - |  | 
344. | ORWPT SELECT | CHANGE |  [SELECT^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | DFN | 22 | BULLETIN, JLV, REENTRANCY |  | 
345. | ORWPT SHARE | UTILITY |  [SHARE^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | IP, HWND, DFN | 3 | REENTRANCY |  | 
346. | ORWPT TOP | READ |  [TOP^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html) | &nbsp; | 3 | REENTRANCY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
347. | ORWPT1 PCDETAIL | READ |  [PCDETAIL^ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html) | PATIENT | 50 | - |  | 
348. | __ORWPT1 PRCARE__ | READ |  [PRCARE^ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html) | PATIENT | 13 | JLV, RPCLOCKER |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
349. | ORWPT16 ADMITLST | READ |  [ADMITLST^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html) | DFN | 9 | - |  | 
350. | ORWPT16 APPTLST | READ |  [APPTLST^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html) | DFN | 6 | - |  | 
351. | ORWPT16 DEMOG | READ |  [DEMOG^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html) | DFN | 4 | - |  | 
352. | ORWPT16 GETVSIT | READ |  [GETVSIT^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html) | DFN, LOC, ADATE | 6 | - |  | 
353. | ORWPT16 ID INFO | READ |  [IDINFO^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html) | DFN | 9 | - |  | 
354. | ORWPT16 LIST ALL | READ |  [LISTALL^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html) | DIR, FROM | 16 | - |  | 
355. | ORWPT16 LOOKUP | READ |  [LOOKUP^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html) | FROM | 8 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
356. | ORWRA IMAGING EXAMS | READ |  [EXAMS^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html) | DFN | 1 | - |  | 
357. | ORWRA IMAGING EXAMS1 | READ |  [EXAMS1^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html) | DFN | 1 | - |  | 
358. | ORWRA REPORT TEXT | READ |  [RPT^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html) | DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE | 8 | - |  | 
359. | ORWRA REPORT TEXT1 | READ |  [RPT1^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html) | DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE | 1 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
360. | ORWRP REPORT TEXT | READ |  [RPT^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html) | DFN, RPTID, HSTYPE, DTRANGE, EXAMID, ALPHA, OMEGA | 35 | JLV, UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
361. | ORWRP1 LISTNUTR | READ |  [LISTNUTR^ORWRP1](http://code.osehra.org/dox/Routine_ORWRP1_source.html) | DFN | 6 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
362. | ORWRP2 HS REPORT TEXT | READ |  [REPORT^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html) | ORCOMPS, ORDFN | 7 | UNSTRUCTURED READ |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
363. | ORWRP4 HDR MODIFY | UTILITY |  [HDR^ORWRP4](http://code.osehra.org/dox/Routine_ORWRP4_source.html) | HANDLE, ID | 13 | - | 101.24 | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
364. | ORWSR CASELIST | READ |  [CASELIST^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORDFN | 8 | - |  | 
365. | ORWSR IS NON-OR PROCEDURE | READ |  [ISNONOR^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORCASE | 2 | IS-A |  | 
366. | ORWSR LIST | READ |  [LIST^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORDFN, ORBDT, OREDT, ORCTXT, ORMAX, ORFHIE | 21 | - |  | 
367. | ORWSR ONECASE | READ |  [ONECASE^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORTIUDA | 5 | - |  | 
368. | ORWSR RPTLIST | READ |  [RPTLIST^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html) | ORDFN | 25 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
369. | ORWTIU CHKTXT | READ |  [CHKTXT^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORTIUDA | 2 | - |  | 
370. | ORWTIU GET LISTBOX ITEM | READ |  [GTLSTITM^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORTIUDA | 2 | - |  | 
371. | ORWTIU GET SAVED CP FIELDS | READ |  [GETCP^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html) | ORTIUDA | 12 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
372. | ORWTPT ATEAMS | READ |  [ATEAMS^ORWTPT](http://code.osehra.org/dox/Routine_ORWTPT_source.html) | &nbsp; | 7 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
373. | ORWU2 COSIGNER | READ |  [COSIGNER^ORWU2](http://code.osehra.org/dox/Routine_ORWU2_source.html) | ORFROM, ORDIR, ORDATE, ORTIUTYP, ORTIUDA | 10 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
374. | PXRM REMINDER DIALOG (TIU) | UTILITY |  [TDIALOG^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html) | ORDLG, DFN | 3 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
375. | TIU CREATE ADDENDUM RECORD | CHANGE |  [MAKEADD^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html) | TIUDA, TIUX, SUPPRESS | 1 | - |  | 
376. | TIU CREATE RECORD | CHANGE |  [MAKE^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html) | DFN, TITLE, VDT, VLOC, VSIT, TIUX, VSTR, SUPPRESS, NOASF | 38 | - |  | 
377. | TIU DELETE RECORD | CHANGE |  [DELETE^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html) | TIUDA, TIURSN, OVRRIDE | 10 | - |  | 
378. | TIU DETAILED DISPLAY | READ |  [RPC^TIUSRV](http://code.osehra.org/dox/Routine_TIUSRV_source.html) | TIUDA, REASSIGN | 4 | - |  | 
379. | TIU DOCUMENTS BY CONTEXT | READ |  [CONTEXT^TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html) | CLASS, CONTEXT, DFN, EARLY, LATE, PERSON, OCCLIM, SEQUENCE, SHOWADD, INCUND | 30 | QUERY |  | 
380. | TIU FIELD LOCK | UTILITY |  [LOCK^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | TIUDA | 2 | LOCK |  | 
381. | TIU FIELD UNLOCK | UTILITY |  [UNLOCK^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html) | TIUDA | 2 | LOCK |  | 
382. | TIU GET ADDITIONAL SIGNERS | READ |  [GETSIGNR^TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html) | TIUDA | 14 | - |  | 
383. | TIU GET ALERT INFO | READ |  [GETALRT^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html) | XQAID | 16 | - |  | 
384. | TIU GET DOCUMENT PARAMETERS | READ |  [DOCPARM^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | TIUDA, TIUTYP | 4 | - |  | 
385. | TIU GET DOCUMENT STATUS | READ |  [GETSTAT^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html) | TIUIEN | 5 | - |  | 
386. | TIU GET DOCUMENT TITLE | READ |  [GETTITLE^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 1 | - |  | 
387. | TIU GET DOCUMENTS FOR REQUEST | READ |  [GETDOCS^TIUSRVLR](http://code.osehra.org/dox/Routine_TIUSRVLR_source.html) | OVP, SEQUENCE | 18 | - |  | 
388. | TIU GET LINKED PRF NOTES | READ |  [GETNOTES^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html) | PTDFN, TIUTTL, REVERSE | 27 | - |  | 
389. | TIU GET PRF ACTIONS | READ |  [GETACTS^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html) | TIUTTL, DFN | 15 | - |  | 
390. | TIU GET RECORD TEXT | READ |  [TGET^TIUSRVR1](http://code.osehra.org/dox/Routine_TIUSRVR1_source.html) | TIUDA, ACTION | 21 | - |  | 
391. | TIU GET REQUEST | READ |  [GET1405^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html) | TIUDA | 10 | - |  | 
392. | TIU HAS AUTHOR SIGNED? | READ |  [AUTHSIGN^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA, TIUUSR | 5 | IS-A |  | 
393. | TIU ID ATTACH ENTRY | CHANGE |  [IDATTCH^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | TIUDA, TIUDAD | 5 | - |  | 
394. | TIU ID CAN RECEIVE | READ |  [CANRCV^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 1 | IS-A |  | 
395. | TIU ID DETACH ENTRY | CHANGE |  [IDDTCH^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | TIUDA | 8 | - |  | 
396. | TIU JUSTIFY DELETE? | READ |  [NEEDJUST^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 2 | - |  | 
397. | TIU LINK TO FLAG | CHANGE |  [LINK^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html) | TIUIEN, ASSGNDA, ACTIEN, DFN | 5 | - |  | 
398. | TIU LOAD RECORD FOR EDIT | READ |  [GET4EDIT^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html) | TIUDA, DR | 16 | - |  | 
399. | TIU LOCK RECORD | UTILITY |  [LOCK^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html) | TIUDA | 2 | LOCK |  | 
400. | TIU NOTES | READ |  [NOTES^TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html) | DFN, EARLY, LATE, PERSON, SEQUENCE | 4 | QUERY |  | 
401. | TIU NOTES 16 BIT | READ |  [NOTES^TIUSRVLC](http://code.osehra.org/dox/Routine_TIUSRVLC_source.html) | DFN, EARLY, LATE, ROOTFLAG | 2 | QUERY |  | 
402. | TIU NOTES BY VISIT | READ |  [NOTES^TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html) | VISIT, STATUS | 2 | QUERY |  | 
403. | TIU ONE VISIT NOTE? | READ |  [TIUVISIT^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | DOCTYP, DFN, VISIT | 20 | IS-A |  | 
404. | TIU SET ADMINISTRATIVE CLOSURE | CHANGE |  [ADMNCLOS^TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html) | TIUDA, MODE, PERSON | 36 | - |  | 
405. | TIU SET DOCUMENT TEXT | UTILITY |  [SETTEXT^TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html) | TIUDA, TIUX, SUPPRESS | 28 | REENTRANCY |  | 
406. | TIU SIGN RECORD | CHANGE |  [SIGN^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html) | TIUDA, TIUX | 1 | - |  | 
407. | TIU SUMMARIES | READ |  [SUMMARY^TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html) | DFN, EARLY, LATE | 4 | QUERY |  | 
408. | TIU SUMMARIES BY VISIT | READ |  [SUMMARY^TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html) | VISIT, STATUS | 2 | QUERY |  | 
409. | TIU TEMPLATE LOCK | UTILITY |  [LOCK^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | TIUDA | 2 | LOCK |  | 
410. | TIU TEMPLATE UNLOCK | UTILITY |  [UNLOCK^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html) | TIUDA | 2 | LOCK |  | 
411. | TIU UNLOCK RECORD | UTILITY |  [UNLOCK^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html) | TIUDA | 2 | LOCK |  | 
412. | TIU UPDATE ADDITIONAL SIGNERS | CHANGE |  [IDSIGNRS^TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html) | TIUDA, TIULIST | 18 | - |  | 
413. | TIU UPDATE RECORD | CHANGE |  [UPDATE^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html) | TIUDA, TIUX, SUPPRESS | 43 | - |  | 
414. | TIU WAS THIS SAVED? | CHANGE |  [SAVED^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html) | TIUDA | 11 | - |  | 
415. | TIU WHICH SIGNATURE ACTION | READ |  [WHATACT^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html) | TIUDA | 7 | - |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
416. | VAFCTFU CONVERT ICN TO DFN | READ |  [GETDFN^VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html) | ICN | 1 | QUERY |  | 
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
417. | YS GAF API | READ |  [GAFHX^YSGAFAPI](http://code.osehra.org/dox/Routine_YSGAFAPI_source.html) | YS | 7 | - |  | 



