---
layout: default
title: VAM Year 1 - 'Meta Scope 2' - station number 442
---

# Scope of 'Meta RPC' Work

__143__ RPCs, __101__ Primary Files, __175__ Secondary Files, __82__ Parameters.

__Storage Size__ 675.30078125 MiB - __Objects__ 6,543,200 - __Collections__ 279





## RPCs of Meta

__143__ RPCs (includes 5 VISTA Only).



__Build 1.1 (End January PDE)__: 36

__Note__: may have more RPCs when/if [a] _XUS DIVISION GET_ is analyzed - it may lead CPRS to send more location retrieval RPCs and we'll have to support those and [b] a newer CPRS may introduce new RPCs                                                        . But for now, the list below is definitive.

\# | Name | Type | File(s) | Parameter(s) | Comment
--- | --- | --- | --- | --- | ---
1 | [GMV MANAGER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_MANAGER) | UTILITY | 120.51, 120.52, 120.53, 4.2, 4, 44, 200 | GMV TEMPLATE DEFAULT, GMV TEMPLATE, GMV ALLOW USER TEMPLATES | [DIFFICULT] [VITAL] [XUSEC] have partial impl. Difficulty is _Test Code Coverage_ and ensuring all CPRS invoked variations are fully covered. Largely falls back on Parameter service but does have Vital specific notions and so belongs in the Vital Service. __Make a table with all options seen in CPRS captures and give each an id__
2 | [GMV PARAMETER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_PARAMETER) | CHANGE | 8989.5, 8989.3, 8989.51, 8989.518 | GMV DLL VERSION, GMV GUI VERSION, GMV WEBLINK, GMV ALLOW USER TEMPLATES, GMV DEFAULT VALUES, GMV TEMPLATE, GMV TEMPLATE DEFAULT, GMV USER DEFAULTS | [EASY] [PARAMETER] [SET] execute this generic parameter method over the parameter service branching to call parameterService.get etc depending on the option passed into this RPC. It effectively does all the parameter service options including DEL and though it is in the GMV name space, it should work with any parameter ... see Jira VAM-274. Actually easy itself. BUT parameter service must be fleshed out first
3 | [GMV USER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_USER) | CHANGE | &nbsp; | GMV USER DEFAULTS | [DIFFICULT] [VITAL] [PARAMETER] [XUSEC] returns info about a user including particular parameters of vital. This is an RPC of RPCs with options - and should be treated this way. One branch sets, one gets parameters (easy and do in Parameter Service?). The last _SIGNON_ is a _getVitalUserInfo_ method.
4 | [GMV VITALS/CAT/QUAL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_VITALS_CAT_QUAL) | &nbsp; | 120.51, 120.52, 120.53, 120.57 | &nbsp; | [EASY] [VITAL] [LOOKUP] serialize qualifier information
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5 | [ORQQPL INIT USER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_INIT_USER) | READ | 125.99, 49, 200 | ORCH CONTEXT PROBLEMS, ORQQPL SUPPRESS CODES | [MEDIUM] [PROBLEM] [USERPREF] medium due to size. User preferences for Problem -- note: name the method the same way Document names its User Preferences call. ie/ _ProblemMetaService.getUserPreferences_ (do by whoever is doing document and other preferences?). Note ala other RPCs that take 'DUZ', service should not take DUZ and RPC needs to enforce that argument passed in == ID of Session's User
6 | [ORQQPL USER PROB CATS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL_USER_PROB_CATS) | &nbsp; | 125.1 | &nbsp; | [DIFFICULT] [PROBLEM] [NVTEST] _GETUSLST_ goes to 200/problem selection list pointer and gets appropriate list from file 125_1. If none then checks of list of clinic. Issue that this index seems to be outside FileMan. Note that the DUZ passed in is ignored (and per our coding standards must == userId of logged in User AND will not be passed explicitly to the Service). __Test Dataset needs enough data__ AND __need good isolation nodeVISTA test__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
7 | [ORQQPL4 LEX](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPL4_LEX) | &nbsp; | &nbsp; | &nbsp; | [DIFFICULT] [LEXICON] [LOOKUP] Key Lexicon lookup - by problems. Lexicon Service must support. Will require many tests and comparison to native performance. Note want all _LOOKUPS_ to follow a similar pattern.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
8 | [ORWCH SAVEALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_SAVEALL) | CHANGE | &nbsp; | ORWCH BOUNDS, ORWCH WIDTH, ORWCH COLUMNS | [DIFFICULT] [PARAMETER] [SAVE] Easy EXCEPT some TMP's are cleared - those TMPs need to be examined (involve Conor/Mike) to see what RPCs called before this one set them up. In effect this is a 'SAVE and CLEANUP'. The CLEANUP is NOT relevant for VICS but we would have to emulate the RPCs that setup these TMPs or else we need to move this to the Clinical Set for post 1.1
9 | [ORWCH SAVESIZ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_SAVESIZ) | CHANGE | &nbsp; | ORWCH BOUNDS | [EASY] [PARAMETER] [SAVE] one parameter save
10 | [ORWCH SAVFONT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_SAVFONT) | CHANGE | &nbsp; | ORWCH FONT SIZE | [EASY] [PARAMETER] [SAVE] easy one parameter save
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11 | [ORWDAL32 ALLERGY MATCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_ALLERGY_MATCH) | &nbsp; | 120.82, 50.6, 50.67, 50.416, 50.605, 50.68 | &nbsp; | [DIFFICULT] [ALLERGY] [LOOKUP] big and needs analysis of its Mongo efficiency so difficult.
12 | [ORWDAL32 SYMPTOMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SYMPTOMS) | &nbsp; | 120.83 | &nbsp; | [MEDIUM] [ALLERGY] [LOOKUP] [INACTIVE] easier than MATCH -  Partial pre 1.1 implementation was missing a filter for 'active'. Must have test for skipping inactive entries.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
13 | [ORWDBA3 HINTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA3_HINTS) | &nbsp; | 9.2 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] format hints from file 9.2. Do along with Allergy RPCs
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14 | [ORWDXM FORMID](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_FORMID) | &nbsp; | 101.41, 100.98, 9.4 | &nbsp; | [MEDIUM] [ORDER] Medium as branching logic that will have to be fully tested. Really just a getFormId for a dialog
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
15 | [ORWGRPC ALLVIEWS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_ALLVIEWS) | READ | 68, 69.2, 60 | ORWG GRAPH VIEW | [DIFFICULT] [GRAPHING] [LEAVEEND] difficult as three branches - -1, -2, -3 called by CPRS. Parameters looked up. Effectively three RPCs in one and should be tested appropriately. See if leads to PARAMETER calls directly or three different service methods or ... __LEAVE TO END AS MAY BE OUT OF SCOPE__
16 | [ORWGRPC GETPREF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_GETPREF) | READ | &nbsp; | ORWG GRAPH SETTING | [DIFFICULT] [GRAPHING] [USERPREF] [LEAVEEND] involves parameters but also XTMP checks. Need to see how those XTMPs are set. (SETPREF?) We either support this fully or not at all. __LEAVE TO END AS MAY BE OUT OF SCOPE__
17 | [ORWGRPC TESTSPEC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWGRPC_TESTSPEC) | &nbsp; | 60 | &nbsp; | [MEDIUM] [LAB] describe a test - serialize JSON of 'getLabTest()' into appropriate form. Difficulty is making sure formatter is right and testing that.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
18 | [ORWLEX GETFREQ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWLEX_GETFREQ) | &nbsp; | &nbsp; | &nbsp; | [MEDIUM] [LEXICON] easy lookup of frequency of a work - difficulty is making sure Lexicon lookup records the word frequency properly so this RPC returns the right value. Must test by looking up and getting the expected increase in frequency back.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
19 | [ORWORB SETSORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_SETSORT) | CHANGE | &nbsp; | ORB SORT METHOD, ORB SORT DIRECTION | [EASY] [PARAMETER] [SAVE]
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
20 | [ORWPCE ACTIVE CODE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ACTIVE_CODE) | &nbsp; | &nbsp; | &nbsp; | [EASY] [LEXICON] is a code active - uses same Lexicon method twice. Need to replicate that method and data in Mongo.
21 | [ORWPCE ACTIVE PROV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ACTIVE_PROV) | &nbsp; | 200, 8932.1 | &nbsp; | [EASY] [USER] see if Active. Just look at today's date and termination date. Do with other User items - __Want in B1_1 as generic concept__
22 | [ORWPCE GETSVC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GETSVC) | &nbsp; | 40.7, 44, 150.1 | &nbsp; | [MEDIUM] [LOCATION] medium as must calculate service category based on location and whether a patient is an in or outpatient. ... _lookupServiceCategory(...)
23 | [ORWPCE I10IMPDT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_I10IMPDT) | &nbsp; | &nbsp; | &nbsp; | [MEDIUM] [LEXICON]
24 | [ORWPCE MHCLINIC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_MHCLINIC) | &nbsp; | 40.7, 44 | &nbsp; | [EASY] [LOCATION] [ISA] is it a mental health clinic. __In B1_1 as generic concept__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25 | [ORWRP GET DEFAULT PRINTER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWRP_GET_DEFAULT_PRINTER) | READ | &nbsp; | ORWDP WINPRINT DEFAULT, ORWDP DEFAULT PRINTER | [EASY] [PARAMETER] Two parameter GET (was missed before which is why not in B1).
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
26 | [ORWU EXTNAME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_EXTNAME) | &nbsp; | &nbsp; | &nbsp; | [EASY] get label of an entry id'ed with {fileId}/{ien} ex/ 200/1. We need to see how used as this is generic and we don't copy all vista data. Hence we can't dereference all combos. __No Service Called__ -- just do data access layer call. Only used in PCE
27 | [ORWU HASKEY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_HASKEY) | &nbsp; | &nbsp; | &nbsp; | [MEDIUM] [USER] [XUSEC] hasKey? Pure XUSEC - same as ORWU HASKEY
28 | [ORWU NEWPERS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_NEWPERS) | &nbsp; | 3.1, 20, 49, 389.9, 200, 8932.1 | &nbsp; | [DIFFICULT] [USER] [METAWITHPATIENT] list users using AUSER/active user cross reference, a list we'd have to emulate behind the User Service. Part of this work is scoping from captures. See [issue](https://github.com/vistadataproject/DataExtractNSync/issues/44) that goes into AUSER, ACTIVE and the concept of CPRS active users and their effect. __May push to B2 and pair with patient RPC ORWPT ENCTITL__ (hence tag, METAWITHPATIENT)
29 | [ORWU NPHASKEY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_NPHASKEY) | &nbsp; | &nbsp; | &nbsp; | [MEDIUM] [USER] [XUSEC] Pure XUSEC
30 | [ORWU OVERDL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_OVERDL) | READ | &nbsp; | ORPARAM OVER DATELINE | [EASY] [PARAMETER] Parameter Service only. Simplest of simple GETs. See ORWU.m. Note missing RPC docs as wasn't in older VISTA/CPRS. __Can be a stand alone as not related to anything__
31 | [ORWU PATCH](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_PATCH) | &nbsp; | 9.4 | &nbsp; | [MEDIUM] [VISTA] Points to having a _VISTA Service_ for things about VISTA. See issue with FileMan 'service' which is going away.
32 | [ORWU USERINFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_USERINFO) | CHANGE | 4.2, 101.13, 389.9, 8989.3 | ORCH INITIAL TAB, ORCH USE LAST TAB, ORWOR AUTO CLOSE PT MSG, ORWOR AUTOSAVE NOTE, ORWOR BROADCAST MESSAGES, ORWOR DISABLE HOLD ORDERS, ORWOR DISABLE ORDERING, ORWOR DISABLE WEB ACCESS, ORWOR ENABLE VERIFY, ORWOR TIMEOUT CHART, ORWOR TIMEOUT COUNTDOWN, PXRM GEC STATUS CHECK | [MEDIUM] [USER] [XUSEC] Difficult because of size. Another user details call but pulls in many parameter values and uses __XUSEC__ (the index of a user's keys) as well. Tackle once approach to XUSEC is finalized. Unlike other USERINFO RPCs, this one isn't concerned with user's current division. Note in reply, could list parameter values in a name-value list where name is the parameter name
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
33 | [TIU IS USER A PROVIDER?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IS_USER_A_PROVIDER?) | &nbsp; | 200, 8930, 8930.3, 8932.1 | &nbsp; | [EASY] [USER] though TIU, this is a User Service call checking if a User is a provider. __In B1_1 as generic concept__
34 | [TIU TEMPLATE GETROOTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETROOTS) | &nbsp; | 8927 | &nbsp; | [MEDIUM] [DOCUMENT] Template meta data - referenced from vitals and problems.
35 | [TIU TEMPLATE SET DEFAULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_SET_DEFAULTS) | CHANGE | &nbsp; | TIU DEFAULT TEMPLATES | [EASY] [PARAMETER] [SAVE] Simple Parameter Set - __As a simple parameter SET, could go in Simple Set Group__ instead of TIU group for work. Note has matching GET from 1.1.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36 | [XUS DIVISION GET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_DIVISION_GET) | &nbsp; | 200, 4 | &nbsp; | [DIFFICULT] [USER] [NVTEST] RPC itself is easy but its response is key to multi-institution support in a VISTA and probably effects login. Need user with many divisions and (as now) one with only the default and see the effect on CPRS.


__Build 3 (Post Build 2 Beyond PDE)__: 31

__Note__: these are Meta RPCs for Pharmacy and other ancillary domains that are beyond PDE scope.

\# | Name | Type | File(s) | Parameter(s) | Comment
--- | --- | --- | --- | --- | ---
1 | [ORIMO ISIVQO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORIMO_ISIVQO) | &nbsp; | 101.41, 100.98 | &nbsp; | [EASY] [ORDER] is something an IV quick order (_isIVQuickOrder_) - simple record check, preferably in one Mongo query. Returns 1 or 0
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
2 | [ORQQCN SVC W/SYNONYMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN_SVC_W_SYNONYMS) | &nbsp; | 123.5, 101.43 | &nbsp; | [MEDIUM] [ORDER]
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
3 | [ORQQPXRM REMINDER CATEGORIES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPXRM_REMINDER_CATEGORIES) | READ | 811.7, 811.9, 801.41 | PXRM CPRS LOOKUP CATEGORIES | [MEDIUM] [PARAMETER] Medium for volume - routine seems to just lookup parameters
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
4 | [ORWDPS1 FAILDEA](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS1_FAILDEA) | &nbsp; | 50, 50.68, 50.7, 50.606, 101.43, 200, 4, 4.05 | &nbsp; | [DIFFICULT] [USER] really returns DEA status of a User. Difficult due to nuances and so need enough test data and test code
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5 | [ORWDPS2 QOGRP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS2_QOGRP) | &nbsp; | 100.98, 101.41 | &nbsp; | [MEDIUM] [ORDER] [ISA] is quick order belong to a certain group. Checking values in 100.98. One or more Mongo filters? MEDIUM as need to have multiple test for different options - find appropriate entries in 100.98
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
6 | [ORWDPS5 LESGRP](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS5_LESGRP) | &nbsp; | 100.98 | &nbsp; | [MEDIUM] [ORDER] [LOOKUP] return 100.98 entries for Lab. Mongo filters again. MEDIUM as need to try with different data.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
7 | [ORWDX AGAIN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_AGAIN) | &nbsp; | 101.41 | &nbsp; | [EASY] [ORDER] [ISA] one liner isA for one 101.41 entry
8 | [ORWDX DLGDEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_DLGDEF) | &nbsp; | 101.41 | &nbsp; | [EASY] [ORDER] describe for one 101.41 entry ie/ format a OrderService.getOrderDialog(...) reply into RPC form.
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | [ORWDXA ISACTOI](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXA_ISACTOI) | &nbsp; | 101.43 | &nbsp; | [EASY] [ORDER] [INACTIVE] [ISA] inactive check for 101.43. Note - fit into way we handle inactives in general. See Allergy Symptoms
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
10 | [ORWDXM3 ISUDQO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM3_ISUDQO) | &nbsp; | 101.41, 100.98 | &nbsp; | [EASY] [ORDER] [ISA] isA on type of Order Dialog. Like ISACTOI etc or the GRP checks
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11 | [ORWDXR01 ISSPLY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXR01_ISSPLY) | &nbsp; | 101.43, 100.98 | &nbsp; | [EASY] [ORDER] [ISA]
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
12 | [ORWOR VWGET](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_VWGET) | READ | 100.98 | ORCH CONTEXT ORDERS | [MEDIUM] [ORDER] Parameter with mumps logic added - configures CPRS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
13 | [ORWORDG MAPSEQ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORDG_MAPSEQ) | READ | 100.98 | ORWOR CATEGORY SEQUENCE | [MEDIUM] [ORDER] Parameter wrapped in MUMPS on 100.98
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14 | [ORWPCE DIAG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_DIAG) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [DIFFICULT] [PCE] [LOOKUP] serializes information - difficult as large so needs more tests
15 | [ORWPCE GET DX TEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_DX_TEXT) | &nbsp; | 80, 80.1, 80.4, 9999999.27 | &nbsp; | [MEDIUM] [PCE] medium as involved to format text appropriately
16 | [ORWPCE HASCPT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_HASCPT) | &nbsp; | 811.1 | &nbsp; | [MEDIUM] [PCE] code mapping. May change shape of our data to make this more efficient. Want to avoid cross-collection queries.
17 | [ORWPCE HF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_HF) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of health factors by location - see other PCE lookups
18 | [ORWPCE IMM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_IMM) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of immunizations by location - see other PCE lookups
19 | [ORWPCE PED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_PED) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of education topics for a clinic.  - see other PCE lookups
20 | [ORWPCE PROC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_PROC) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of procedures for a clinic  - see other PCE lookups
21 | [ORWPCE SK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_SK) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of skin tests for a clinic - see other PCE lookups
22 | [ORWPCE VISIT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_VISIT) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of visit types for a clinic - see other PCE lookups
23 | [ORWPCE XAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_XAM) | &nbsp; | 409.95, 357.1, 357.2, 357.3, 357.4, 357.6, 80 | &nbsp; | [MEDIUM] [PCE] [LOOKUP] list of exams for a clinic - see other PCE lookups
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24 | [ORWTIU GET TIU CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTIU_GET_TIU_CONTEXT) | READ | 8926 | ORCH CONTEXT NOTES | [EASY] [DOCUMENT] beyond one parameter get as adds information from elsewhere
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25 | [ORWUL FVSUB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUL_FVSUB) | &nbsp; | 101.44 | &nbsp; | [DIFFICULT] [ORDER] [NVTEST] difficult because of testing scenarios/ need for data. Looks at multiple in 101.44. That file is used to provide Windows CPRS dialog with an ordered list of certain items. __Test Dataset needs enough data__ and need nodeVISTA in process tests.
26 | [ORWUL QV4DG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWUL_QV4DG) | READ | 100.98, 101.41, 101.44 | ORWDQ QUICK VIEW | [EASY] [ORDER] Parameter lookup - __Test Dataset needs enough data__ (9999 seems to have 'ORWDQ QUICK VIEW')
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
27 | [TIU GET PERSONAL PREFERENCES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_PERSONAL_PREFERENCES) | &nbsp; | 8926 | &nbsp; | [MEDIUM] [DOCUMENT] [USERPREF] get a user's Document Preferences. _DocumentMetaService.getUserPreferences_ - __Test Dataset needs enough data__
28 | [TIU IS THIS A CONSULT?](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_IS_THIS_A_CONSULT?) | &nbsp; | 8925.1 | &nbsp; | [EASY] [DOCUMENT]
29 | [TIU ISPRF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_ISPRF) | &nbsp; | 8925.1 | &nbsp; | [EASY] [DOCUMENT] check document title type - is Check for Document Service
30 | [TIU LONG LIST OF TITLES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_LONG_LIST_OF_TITLES) | &nbsp; | 8925.1, 8930.1 | &nbsp; | [MEDIUM] [DOCUMENT] List by criteria - listTitlesByClass in DocumentService.
31 | [TIU TEMPLATE GETLINK](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GETLINK) | &nbsp; | 801.41, 8925.1, 8927 | &nbsp; | [MEDIUM] [DOCUMENT] Serializes data from an entity pointed to by another. __Test Dataset needs enough data__


__VISTA Only__: 5

This list doesn't include _connect_ or _BYE_. Note that some of the following may be revisited AND be partially or wholly handled in either the Router or VICS Server going forward.

\# | Name | Why VISTA Only?
--- | --- | ---
1 | [XUS AV CODE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_AV_CODE) | Currently Partly Processed in Router (kicks off session creation to the VICS Server) but mainly for VISTA which does Access, Verify checks.
2 | [XUS INTRO MSG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_INTRO_MSG) | __This may come back to VICS__: text for this is kept in Kernel System Parameters. The RPC is sent in the CPRS connect step and before user login. VICS Server could perform is it allowed pre-login requests. Otherwise may be sourced directly in the Router
3 | [XWB CREATE CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XWB_CREATE_CONTEXT) | __This may come back to VICS__: this checks a broad option or context for a user but also sets up globals (XQY0, XQY). These MAY be used in later RPC interactions.
4 | [XWB DEFERRED CLEARALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XWB_DEFERRED_CLEARALL) | Part of 'Deferred RPC Handling' - in theory, VICS may need to do deferred handling (in the future) so this notion may come into play but for now, will just examine this as part of Coversheet RPC testing and Patient handling.
5 | [XWB IM HERE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XWB_IM_HERE) | CPRS connection 'keep alive' RPC. This isn't used between the Router and the emulating VICS Server. It will always be VISTA only


__Build 1 (Done)__: 71

\# | Name | Type | File(s) | Parameter(s)
--- | --- | --- | --- | ---
1 | [GMV CONVERT DATE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_CONVERT_DATE) | &nbsp; | &nbsp; | &nbsp;
2 | [GMV DLL VERSION](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_DLL_VERSION) | READ | &nbsp; | GMV DLL VERSION
3 | [GMV GET CURRENT TIME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_GET_CURRENT_TIME) | &nbsp; | &nbsp; | &nbsp;
4 | [GMV GET VITAL TYPE IEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/GMV_GET_VITAL_TYPE_IEN) | &nbsp; | 120.51 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5 | [ORB SORT METHOD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORB_SORT_METHOD) | READ | &nbsp; | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
6 | [ORDEA DEATEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORDEA_DEATEXT) | READ | &nbsp; | OR DEA TEXT
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
7 | [OREVNTX1 DLGIEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/OREVNTX1_DLGIEN) | &nbsp; | 101.41 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
8 | [ORIMO ISCLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORIMO_ISCLOC) | &nbsp; | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | [ORQ NULL LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQ_NULL_LIST) | &nbsp; | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
10 | [ORQORB SORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQORB_SORT) | READ | &nbsp; | ORB SORT METHOD
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
11 | [ORQPT DEFAULT LIST SOURCE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQPT_DEFAULT_LIST_SOURCE) | READ | &nbsp; | ORLP DEFAULT LIST SOURCE, ORLP DEFAULT TEAM, ORLP DEFAULT WARD, ORLP DEFAULT PROVIDER, ORLP DEFAULT SPECIALTY, ORLP DEFAULT CLINIC MONDAY, ORLP DEFAULT CLINIC TUESDAY, ORLP DEFAULT CLINIC WEDNESDAY, ORLP DEFAULT CLINIC THURSDAY, ORLP DEFAULT CLINIC FRIDAY, ORLP DEFAULT CLINIC SATURDAY, ORLP DEFAULT CLINIC SUNDAY
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
12 | [ORQQCN2 GET CONTEXT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQCN2_GET_CONTEXT) | READ | &nbsp; | ORCH CONTEXT CONSULTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
13 | [ORQQPX NEW REMINDERS ACTIVE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORQQPX_NEW_REMINDERS_ACTIVE) | READ | &nbsp; | PXRM GUI REMINDERS ACTIVE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14 | [ORWCH LDFONT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_LDFONT) | READ | &nbsp; | ORWCH FONT SIZE
15 | [ORWCH LOADALL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_LOADALL) | READ | &nbsp; | ORWCH BOUNDS, ORWCH WIDTH, ORWCH COLUMNS
16 | [ORWCH LOADSIZ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCH_LOADSIZ) | READ | &nbsp; | ORWCH BOUNDS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17 | [ORWCIRN AUTORDV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCIRN_AUTORDV) | READ | &nbsp; | ORWRP CIRN AUTOMATIC
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
18 | [ORWCOM ORDEROBJ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCOM_ORDEROBJ) | READ | &nbsp; | ORWCOM ORDER ACCEPTED
19 | [ORWCOM PTOBJ](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCOM_PTOBJ) | READ | &nbsp; | ORWCOM PATIENT SELECTED
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
20 | [ORWCV1 COVERSHEET LIST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWCV1_COVERSHEET_LIST) | READ | 101.24 | ORWCV1 COVERSHEET LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
21 | [ORWDAL32 CLINUSER](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_CLINUSER) | READ | 8930, 8930.3 | OR ALLERGY ENTERED IN ERROR
22 | [ORWDAL32 DEF](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_DEF) | &nbsp; | 120.83, 120.84 | &nbsp;
23 | [ORWDAL32 SITE PARAMS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDAL32_SITE_PARAMS) | &nbsp; | 120.84 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24 | [ORWDBA1 BASTATUS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDBA1_BASTATUS) | READ | 9.7 | OR BILLING AWARENESS STATUS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25 | [ORWDPS32 VALQTY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_VALQTY) | &nbsp; | &nbsp; | &nbsp;
26 | [ORWDPS32 VALROUTE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDPS32_VALROUTE) | &nbsp; | 51.2 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
27 | [ORWDRA32 LOCTYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDRA32_LOCTYPE) | &nbsp; | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
28 | [ORWDX DGNM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_DGNM) | &nbsp; | 100.98 | &nbsp;
29 | [ORWDX WRLST](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX_WRLST) | READ | 101.41, 200 | ORWOR WRITE ORDERS LIST, ORWDX WRITE ORDERS LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
30 | [ORWDX2 DCREASON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDX2_DCREASON) | READ | 9.4, 100.02, 100.03 | OR DC REASON LIST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
31 | [ORWDXC ON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXC_ON) | READ | &nbsp; | ORK SYSTEM ENABLE/DISABLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
32 | [ORWDXM MSTYLE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXM_MSTYLE) | READ | &nbsp; | ORWDXM ORDER MENU STYLE
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
33 | [ORWDXVB3 COLLTIM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB3_COLLTIM) | READ | &nbsp; | OR VBECS REMOVE COLL TIME
34 | [ORWDXVB3 SWPANEL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWDXVB3_SWPANEL) | READ | &nbsp; | OR VBECS DIAGNOSTIC PANEL 1ST
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
35 | [ORWOR PKISITE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWOR_PKISITE) | &nbsp; | 100.7 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36 | [ORWORB GETSORT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORB_GETSORT) | READ | &nbsp; | ORB SORT METHOD, ORB SORT DIRECTION
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
37 | [ORWORDG IEN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWORDG_IEN) | &nbsp; | 100.98 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
38 | [ORWPCE ALWAYS CHECKOUT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ALWAYS_CHECKOUT) | READ | &nbsp; | ORWPCE DISABLE AUTO CHECKOUT
39 | [ORWPCE ANYTIME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ANYTIME) | READ | &nbsp; | ORWPCE ANYTIME ENCOUNTERS
40 | [ORWPCE ASKPCE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_ASKPCE) | READ | &nbsp; | ORWPCE ASK ENCOUNTER UPDATE
41 | [ORWPCE AUTO VISIT TYPE SELECT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_AUTO_VISIT_TYPE_SELECT) | READ | &nbsp; | ORWPCE DISABLE AUTO VISIT TYPE
42 | [ORWPCE GET EDUCATION TOPICS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_EDUCATION_TOPICS) | &nbsp; | 9999999.09 | &nbsp;
43 | [ORWPCE GET EXAM TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_EXAM_TYPE) | &nbsp; | 9999999.15 | &nbsp;
44 | [ORWPCE GET EXCLUDED](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_EXCLUDED) | &nbsp; | &nbsp; | &nbsp;
45 | [ORWPCE GET HEALTH FACTORS TY](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_HEALTH_FACTORS_TY) | &nbsp; | 9999999.64 | &nbsp;
46 | [ORWPCE GET IMMUNIZATION TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_IMMUNIZATION_TYPE) | &nbsp; | 9999999.14 | &nbsp;
47 | [ORWPCE GET SET OF CODES](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_SET_OF_CODES) | &nbsp; | &nbsp; | &nbsp;
48 | [ORWPCE GET SKIN TEST TYPE](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE_GET_SKIN_TEST_TYPE) | &nbsp; | 9999999.28 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
49 | [ORWPCE1 NONCOUNT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPCE1_NONCOUNT) | &nbsp; | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
50 | [ORWPS REASON](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPS_REASON) | READ | &nbsp; | ORWD NONVA REASON
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
51 | [ORWPT CLINRNG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT_CLINRNG) | &nbsp; | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
52 | [ORWPT16 PSCNVT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWPT16_PSCNVT) | &nbsp; | &nbsp; | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
53 | [ORWSR SHOW SURG TAB](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWSR_SHOW_SURG_TAB) | READ | 9.4 | ORWOR SHOW SURGERY TAB
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
54 | [ORWTPD1 GETEAFL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_GETEAFL) | READ | &nbsp; | ORQQEAFL ENC APPT FUTURE LIMIT
55 | [ORWTPD1 GETEDATS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPD1_GETEDATS) | READ | &nbsp; | ORQQEAPT ENC APPT START, ORQQEAPT ENC APPT STOP
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
56 | [ORWTPO CSARNGD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPO_CSARNGD) | READ | &nbsp; | ORQQCSDR CS RANGE START, ORQQCSDR CS RANGE STOP
57 | [ORWTPO GETIMGD](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWTPO_GETIMGD) | READ | &nbsp; | ORCH CONTEXT REPORTS
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
58 | [ORWU CLINLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_CLINLOC) | &nbsp; | 44 | &nbsp;
59 | [ORWU DT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_DT) | &nbsp; | &nbsp; | &nbsp;
60 | [ORWU PARAM](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_PARAM) | &nbsp; | &nbsp; | &nbsp;
61 | [ORWU TOOLMENU](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_TOOLMENU) | READ | &nbsp; | ORWT TOOLS MENU
62 | [ORWU VALDT](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_VALDT) | &nbsp; | &nbsp; | &nbsp;
63 | [ORWU VALIDSIG](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_VALIDSIG) | &nbsp; | 200 | &nbsp;
64 | [ORWU VERSRV](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU_VERSRV) | &nbsp; | 19 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
65 | [ORWU1 NEWLOC](http://vistadataproject.info/artifacts/devdocs/VISTARPC/ORWU1_NEWLOC) | &nbsp; | 44 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
66 | [TIU GET PRINT NAME](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_GET_PRINT_NAME) | &nbsp; | 8925.1 | &nbsp;
67 | [TIU TEMPLATE ACCESS LEVEL](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_ACCESS_LEVEL) | READ | &nbsp; | TIU PERSONAL TEMPLATE ACCESS, TIU TEMPLATE ACCESS BY CLASS
68 | [TIU TEMPLATE GET DEFAULTS](http://vistadataproject.info/artifacts/devdocs/VISTARPC/TIU_TEMPLATE_GET_DEFAULTS) | READ | &nbsp; | TIU DEFAULT TEMPLATES
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
69 | [XUS GET USER INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_GET_USER_INFO) | &nbsp; | 200, 4, 20, 8989.3 | &nbsp;
70 | [XUS PKI GET UPN](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XUS_PKI_GET_UPN) | &nbsp; | 200 | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
71 | [XWB GET BROKER INFO](http://vistadataproject.info/artifacts/devdocs/VISTARPC/XWB_GET_BROKER_INFO) | &nbsp; | 8989.3 | &nbsp;


## Files of Meta (Directly Used)

__Total__ 101 - __National__ 40 - of 3256 total files

\# | Id | Name | National | Storage (KiB) | Avg Obj Size (B) | Count
--- | --- | --- | --- | --- | --- | ---
1 | 3_1 | [TITLE](http://vistadataproject.info/artifacts/devdocs/VDM/Title-3_1) | &nbsp; | 36 | 105 | 670
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
2 | 4 | [INSTITUTION](http://vistadataproject.info/artifacts/devdocs/VDM/Institution-4) | &nbsp; | 1,004 | 613 | 5,872
3 | 4_05 | [INSTITUTION ASSOCIATION TYPES](http://vistadataproject.info/artifacts/devdocs/VDM/Institution_Association_Types-4_05) | &nbsp; | 16 | 118 | 2
4 | 4_2 | [DOMAIN](http://vistadataproject.info/artifacts/devdocs/VDM/Domain-4_2) | &nbsp; | 56 | 283 | 452
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5 | 9_2 | [HELP FRAME](http://vistadataproject.info/artifacts/devdocs/VDM/Help_Frame-9_2) | &nbsp; | 620 | 1,071 | 1,156
6 | 9_4 | [PACKAGE](http://vistadataproject.info/artifacts/devdocs/VDM/Package-9_4) | &nbsp; | 3,724 | 33,014 | 295
7 | 9_7 | [INSTALL](http://vistadataproject.info/artifacts/devdocs/VDM/Install-9_7) | &nbsp; | 7,352 | 2,269 | 10,458
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
8 | 19 | [OPTION](http://vistadataproject.info/artifacts/devdocs/VDM/Option-19) | &nbsp; | 4,004 | 707 | 13,554
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | 40_7 | [CLINIC STOP](http://vistadataproject.info/artifacts/devdocs/VDM/Clinic_Stop-40_7) | &nbsp; | 48 | 220 | 552
10 | 44 | [HOSPITAL LOCATION](http://vistadataproject.info/artifacts/devdocs/VDM/Hospital_Location-44) | &nbsp; | 4,428 | 10,158 | 1,900
11 | 49 | [SERVICE\/SECTION](http://vistadataproject.info/artifacts/devdocs/VDM/Service_Section-49) | &nbsp; | 28 | 353 | 156
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
12 | 50 | [DRUG](http://vistadataproject.info/artifacts/devdocs/VDM/Drug-50) | &nbsp; | 4,820 | 2,471 | 5,535
13 | 50_416 | [DRUG INGREDIENTS](http://vistadataproject.info/artifacts/devdocs/VDM/Drug_Ingredients-50_416) | YES | 748 | 400 | 5,030
14 | 50_6 | [VA GENERIC](http://vistadataproject.info/artifacts/devdocs/VDM/Va_Generic-50_6) | YES | 336 | 220 | 5,093
15 | 50_605 | [VA DRUG CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Va_Drug_Class-50_605) | YES | 72 | 360 | 579
16 | 50_606 | [DOSAGE FORM](http://vistadataproject.info/artifacts/devdocs/VDM/Dosage_Form-50_606) | &nbsp; | 56 | 476 | 319
17 | 50_67 | [NDC\/UPN](http://vistadataproject.info/artifacts/devdocs/VDM/Ndc_Upn-50_67) | YES | 27,984 | 506 | 229,054
18 | 50_68 | [VA PRODUCT](http://vistadataproject.info/artifacts/devdocs/VDM/Va_Product-50_68) | YES | 8,728 | 1,176 | 26,997
19 | 50_7 | [PHARMACY ORDERABLE ITEM](http://vistadataproject.info/artifacts/devdocs/VDM/Pharmacy_Orderable_Item-50_7) | &nbsp; | 460 | 404 | 3,828
20 | 51_2 | [MEDICATION ROUTES](http://vistadataproject.info/artifacts/devdocs/VDM/Medication_Routes-51_2) | &nbsp; | 32 | 266 | 274
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
21 | 60 | [LABORATORY TEST](http://vistadataproject.info/artifacts/devdocs/VDM/Laboratory_Test-60) | &nbsp; | 760 | 1,256 | 1,990
22 | 68 | [ACCESSION](http://vistadataproject.info/artifacts/devdocs/VDM/Accession-68) | &nbsp; | 20 | 829 | 34
23 | 69_2 | [LAB SECTION PRINT](http://vistadataproject.info/artifacts/devdocs/VDM/Lab_Section_Print-69_2) | &nbsp; | 140 | 28,306 | 18
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24 | 80 | [ICD DIAGNOSIS](http://vistadataproject.info/artifacts/devdocs/VDM/Icd_Diagnosis-80) | YES | 27,592 | 1,467 | 85,382
25 | 80_1 | [ICD OPERATION\/PROCEDURE](http://vistadataproject.info/artifacts/devdocs/VDM/Icd_Operation_Procedure-80_1) | YES | 8,172 | 635 | 80,286
26 | 80_4 | [ICD CODING SYSTEMS](http://vistadataproject.info/artifacts/devdocs/VDM/Icd_Coding_Systems-80_4) | YES | 16 | 216 | 4
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
27 | 100_02 | [NATURE OF ORDER](http://vistadataproject.info/artifacts/devdocs/VDM/Nature_Of_Order-100_02) | YES | 16 | 391 | 12
28 | 100_03 | [ORDER REASON](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Reason-100_03) | &nbsp; | 16 | 312 | 28
29 | 100_7 | [OE\/RR EPCS PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Oe_Rr_Epcs_Parameters-100_7) | &nbsp; | 20 | 12,119 | 1
30 | 100_98 | [DISPLAY GROUP](http://vistadataproject.info/artifacts/devdocs/VDM/Display_Group-100_98) | &nbsp; | 20 | 292 | 60
31 | 101_13 | [OR CPRS TABS](http://vistadataproject.info/artifacts/devdocs/VDM/Or_Cprs_Tabs-101_13) | &nbsp; | 16 | 134 | 2
32 | 101_24 | [OE\/RR REPORT](http://vistadataproject.info/artifacts/devdocs/VDM/Oe_Rr_Report-101_24) | &nbsp; | 68 | 1,049 | 172
33 | 101_41 | [ORDER DIALOG](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Dialog-101_41) | &nbsp; | 2,104 | 1,460 | 4,988
34 | 101_43 | [ORDERABLE ITEMS](http://vistadataproject.info/artifacts/devdocs/VDM/Orderable_Items-101_43) | &nbsp; | 996 | 464 | 7,684
35 | 101_44 | [ORDER QUICK VIEW](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Quick_View-101_44) | &nbsp; | 44 | 1,582 | 50
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
36 | 120_51 | [GMRV VITAL TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vital_Type-120_51) | YES | 16 | 466 | 19
37 | 120_52 | [GMRV VITAL QUALIFIER](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vital_Qualifier-120_52) | YES | 24 | 489 | 118
38 | 120_53 | [GMRV VITAL CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vital_Category-120_53) | YES | 16 | 774 | 6
39 | 120_57 | [GMRV VITALS PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrv_Vitals_Parameters-120_57) | &nbsp; | 16 | 658 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
40 | 120_82 | [GMR ALLERGIES](http://vistadataproject.info/artifacts/devdocs/VDM/Gmr_Allergies-120_82) | YES | 124 | 509 | 749
41 | 120_83 | [SIGN\/SYMPTOMS](http://vistadataproject.info/artifacts/devdocs/VDM/Sign_Symptoms-120_83) | YES | 64 | 308 | 567
42 | 120_84 | [GMR ALLERGY SITE PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Gmr_Allergy_Site_Parameters-120_84) | &nbsp; | 16 | 1,845 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
43 | 123_5 | [REQUEST SERVICES](http://vistadataproject.info/artifacts/devdocs/VDM/Request_Services-123_5) | &nbsp; | 384 | 2,097 | 531
44 | 125_1 | [PROBLEM SELECTION LIST CONTENTS](http://vistadataproject.info/artifacts/devdocs/VDM/Problem_Selection_List_Contents-125_1) | &nbsp; | 16 | 326 | 20
45 | 125_99 | [PROBLEM LIST SITE PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Problem_List_Site_Parameters-125_99) | &nbsp; | 16 | 264 | 1
46 | 150_1 | [ANCILLARY DSS ID](http://vistadataproject.info/artifacts/devdocs/VDM/Ancillary_Dss_Id-150_1) | &nbsp; | 16 | 100 | 15
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
47 | 200 | [NEW PERSON](http://vistadataproject.info/artifacts/devdocs/VDM/New_Person-200) | &nbsp; | 29,168 | 877 | 110,769
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
48 | 357_1 | [ENCOUNTER FORM BLOCK](http://vistadataproject.info/artifacts/devdocs/VDM/Encounter_Form_Block-357_1) | &nbsp; | 2,764 | 11,421 | 1,279
49 | 357_2 | [SELECTION LIST](http://vistadataproject.info/artifacts/devdocs/VDM/Selection_List-357_2) | &nbsp; | 212 | 1,183 | 863
50 | 357_3 | [SELECTION](http://vistadataproject.info/artifacts/devdocs/VDM/Selection-357_3) | &nbsp; | 6,672 | 525 | 44,933
51 | 357_4 | [SELECTION GROUP](http://vistadataproject.info/artifacts/devdocs/VDM/Selection_Group-357_4) | &nbsp; | 228 | 210 | 3,574
52 | 357_6 | [PACKAGE INTERFACE](http://vistadataproject.info/artifacts/devdocs/VDM/Package_Interface-357_6) | &nbsp; | 56 | 906 | 128
53 | 389_9 | [STATION NUMBER (TIME SENSITIVE)](http://vistadataproject.info/artifacts/devdocs/VDM/Station_Number_(Time_Sensitive)-389_9) | &nbsp; | 16 | 261 | 6
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
54 | 409_95 | [PRINT MANAGER CLINIC SETUP](http://vistadataproject.info/artifacts/devdocs/VDM/Print_Manager_Clinic_Setup-409_95) | &nbsp; | 116 | 322 | 1,183
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
55 | 757 | [MAJOR CONCEPT MAP](http://vistadataproject.info/artifacts/devdocs/VDM/Major_Concept_Map-757) | YES | 42,516 | 224 | 724,942
56 | 757_001 | [CONCEPT USAGE](http://vistadataproject.info/artifacts/devdocs/VDM/Concept_Usage-757_001) | &nbsp; | 52,156 | 290 | 724,942
57 | 757_01 | [EXPRESSIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Expressions-757_01) | YES | 166,208 | 508 | 1,628,291
58 | 757_011 | [EXPRESSION TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Expression_Type-757_011) | YES | 16 | 141 | 8
59 | 757_014 | [EXPRESSION FORM](http://vistadataproject.info/artifacts/devdocs/VDM/Expression_Form-757_014) | YES | 16 | 104 | 15
60 | 757_018 | [SNOMED CT HIERARCHY](http://vistadataproject.info/artifacts/devdocs/VDM/Snomed_Ct_Hierarchy-757_018) | YES | 16 | 129 | 43
61 | 757_02 | [CODES](http://vistadataproject.info/artifacts/devdocs/VDM/Codes-757_02) | YES | 89,076 | 620 | 663,186
62 | 757_03 | [CODING SYSTEMS](http://vistadataproject.info/artifacts/devdocs/VDM/Coding_Systems-757_03) | YES | 20 | 330 | 36
63 | 757_033 | [CHARACTER POSITIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Character_Positions-757_033) | YES | 18,116 | 482 | 200,191
64 | 757_04 | [EXCLUDED WORDS](http://vistadataproject.info/artifacts/devdocs/VDM/Excluded_Words-757_04) | YES | 16 | 130 | 116
65 | 757_05 | [REPLACEMENT WORDS](http://vistadataproject.info/artifacts/devdocs/VDM/Replacement_Words-757_05) | YES | 96 | 903 | 201
66 | 757_1 | [SEMANTIC MAP](http://vistadataproject.info/artifacts/devdocs/VDM/Semantic_Map-757_1) | YES | 58,424 | 351 | 781,627
67 | 757_11 | [SEMANTIC CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Semantic_Class-757_11) | YES | 16 | 446 | 15
68 | 757_12 | [SEMANTIC TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Semantic_Type-757_12) | YES | 20 | 217 | 138
69 | 757_13 | [SOURCE CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Source_Category-757_13) | YES | 76 | 467 | 497
70 | 757_14 | [SOURCE](http://vistadataproject.info/artifacts/devdocs/VDM/Source-757_14) | YES | 16 | 124 | 4
71 | 757_2 | [SUBSET DEFINITIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Subset_Definitions-757_2) | YES | 68 | 3,313 | 74
72 | 757_21 | [SUBSETS](http://vistadataproject.info/artifacts/devdocs/VDM/Subsets-757_21) | YES | 52,700 | 268 | 693,855
73 | 757_3 | [LOOK-UP SCREENS](http://vistadataproject.info/artifacts/devdocs/VDM/Look-Up_Screens-757_3) | YES | 16 | 535 | 15
74 | 757_31 | [DISPLAYS](http://vistadataproject.info/artifacts/devdocs/VDM/Displays-757_31) | YES | 16 | 423 | 15
75 | 757_32 | [MAPPING DEFINITIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Mapping_Definitions-757_32) | YES | 16 | 387 | 3
76 | 757_33 | [MAPPINGS](http://vistadataproject.info/artifacts/devdocs/VDM/Mappings-757_33) | YES | 2,344 | 345 | 46,429
77 | 757_4 | [SHORTCUTS](http://vistadataproject.info/artifacts/devdocs/VDM/Shortcuts-757_4) | YES | 224 | 659 | 1,043
78 | 757_41 | [SHORTCUT CONTEXT](http://vistadataproject.info/artifacts/devdocs/VDM/Shortcut_Context-757_41) | YES | 16 | 337 | 3
79 | 757_5 | [UCUM CODES](http://vistadataproject.info/artifacts/devdocs/VDM/Ucum_Codes-757_5) | YES | 56 | 133 | 812
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
80 | 801_41 | [REMINDER DIALOG](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Dialog-801_41) | &nbsp; | 3,424 | 788 | 15,004
81 | 801_5 | [REMINDER DIALOG PATIENT ASSOCIATION](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Dialog_Patient_Association-801_5) | &nbsp; | 60 | 275 | 485
82 | 811_1 | [PCE CODE MAPPING](http://vistadataproject.info/artifacts/devdocs/VDM/Pce_Code_Mapping-811_1) | &nbsp; | 36 | 317 | 147
83 | 811_7 | [REMINDER CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Category-811_7) | &nbsp; | 20 | 1,445 | 18
84 | 811_9 | [REMINDER DEFINITION](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Definition-811_9) | &nbsp; | 792 | 5,047 | 380
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
85 | 8925_1 | [TIU DOCUMENT DEFINITION](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Document_Definition-8925_1) | &nbsp; | 916 | 1,191 | 1,842
86 | 8926 | [TIU PERSONAL PREFERENCES](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Personal_Preferences-8926) | &nbsp; | 48 | 277 | 296
87 | 8927 | [TIU TEMPLATE](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Template-8927) | &nbsp; | 6,224 | 692 | 24,491
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
88 | 8930 | [USR CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Class-8930) | &nbsp; | 24 | 240 | 133
89 | 8930_1 | [USR AUTHORIZATION\/SUBSCRIPTION](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Authorization_Subscription-8930_1) | &nbsp; | 60 | 460 | 350
90 | 8930_3 | [USR CLASS MEMBERSHIP](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Class_Membership-8930_3) | &nbsp; | 324 | 304 | 3,437
91 | 8932_1 | [PERSON CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Person_Class-8932_1) | YES | 216 | 437 | 1,217
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
92 | 8989_3 | [KERNEL SYSTEM PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Kernel_System_Parameters-8989_3) | &nbsp; | 24 | 33,540 | 1
93 | 8989_5 | [PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Parameters-8989_5) | &nbsp; | 7,368 | 313 | 98,399
94 | 8989_51 | [PARAMETER DEFINITION](http://vistadataproject.info/artifacts/devdocs/VDM/Parameter_Definition-8989_51) | &nbsp; | 56 | 874 | 82
95 | 8989_518 | [PARAMETER ENTITY](http://vistadataproject.info/artifacts/devdocs/VDM/Parameter_Entity-8989_518) | &nbsp; | 16 | 153 | 11
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
96 | 9999999_09 | [EDUCATION TOPICS](http://vistadataproject.info/artifacts/devdocs/VDM/Education_Topics-9999999_09) | &nbsp; | 60 | 749 | 111
97 | 9999999_14 | [IMMUNIZATION](http://vistadataproject.info/artifacts/devdocs/VDM/Immunization-9999999_14) | &nbsp; | 48 | 481 | 141
98 | 9999999_15 | [EXAM](http://vistadataproject.info/artifacts/devdocs/VDM/Exam-9999999_15) | &nbsp; | 16 | 107 | 30
99 | 9999999_27 | [PROVIDER NARRATIVE](http://vistadataproject.info/artifacts/devdocs/VDM/Provider_Narrative-9999999_27) | &nbsp; | 3,444 | 174 | 61,678
100 | 9999999_28 | [SKIN TEST](http://vistadataproject.info/artifacts/devdocs/VDM/Skin_Test-9999999_28) | YES | 16 | 160 | 9
101 | 9999999_64 | [HEALTH FACTORS](http://vistadataproject.info/artifacts/devdocs/VDM/Health_Factors-9999999_64) | &nbsp; | 316 | 261 | 5,559



## Files of Meta (Directly Used)

__Total__ 175 - __National__ 22 - of 3256 total files

\# | Id | Name | National | Storage (KiB) | Avg Obj Size (B) | Count
--- | --- | --- | --- | --- | --- | ---
1 | _402 | [INPUT TEMPLATE](http://vistadataproject.info/artifacts/devdocs/VDM/Input_Template-_402) | &nbsp; | 188 | 245 | 2,108
2 | _85 | [LANGUAGE](http://vistadataproject.info/artifacts/devdocs/VDM/Language-_85) | &nbsp; | 56 | 192 | 534
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
3 | 1 | [FILE](http://vistadataproject.info/artifacts/devdocs/VDM/File-1) | &nbsp; | 652 | 414 | 3,309
4 | 1_2 | [ALTERNATE EDITOR](http://vistadataproject.info/artifacts/devdocs/VDM/Alternate_Editor-1_2) | &nbsp; | 16 | 269 | 5
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
5 | 3_2 | [TERMINAL TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Terminal_Type-3_2) | &nbsp; | 72 | 554 | 263
6 | 3_5 | [DEVICE](http://vistadataproject.info/artifacts/devdocs/VDM/Device-3_5) | &nbsp; | 88 | 522 | 417
7 | 3_6 | [BULLETIN](http://vistadataproject.info/artifacts/devdocs/VDM/Bulletin-3_6) | &nbsp; | 116 | 852 | 229
8 | 3_8 | [MAIL GROUP](http://vistadataproject.info/artifacts/devdocs/VDM/Mail_Group-3_8) | &nbsp; | 256 | 777 | 748
9 | 3_816 | [DISTRIBUTION LIST](http://vistadataproject.info/artifacts/devdocs/VDM/Distribution_List-3_816) | &nbsp; | 16 | 155 | 4
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
10 | 4_1 | [FACILITY TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Facility_Type-4_1) | &nbsp; | 20 | 152 | 123
11 | 4_11 | [AGENCY](http://vistadataproject.info/artifacts/devdocs/VDM/Agency-4_11) | YES | 16 | 90 | 8
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
12 | 5 | [STATE](http://vistadataproject.info/artifacts/devdocs/VDM/State-5) | YES | 140 | 3,629 | 85
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
13 | 7 | [PROVIDER CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Provider_Class-7) | &nbsp; | 16 | 120 | 31
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
14 | 8 | [ELIGIBILITY CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Eligibility_Code-8) | &nbsp; | 16 | 404 | 23
15 | 8_1 | [MAS ELIGIBILITY CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Mas_Eligibility_Code-8_1) | &nbsp; | 16 | 244 | 22
16 | 8_2 | [IDENTIFICATION FORMAT](http://vistadataproject.info/artifacts/devdocs/VDM/Identification_Format-8_2) | &nbsp; | 16 | 552 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17 | 14_7 | [TASKMAN SITE PARAMETERS](http://vistadataproject.info/artifacts/devdocs/VDM/Taskman_Site_Parameters-14_7) | &nbsp; | 16 | 302 | 1
18 | 19_1 | [SECURITY KEY](http://vistadataproject.info/artifacts/devdocs/VDM/Security_Key-19_1) | &nbsp; | 120 | 252 | 851
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
19 | 40_8 | [MEDICAL CENTER DIVISION](http://vistadataproject.info/artifacts/devdocs/VDM/Medical_Center_Division-40_8) | &nbsp; | 28 | 21,400 | 6
20 | 40_9 | [LOCATION TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Location_Type-40_9) | &nbsp; | 16 | 123 | 13
21 | 42 | [WARD LOCATION](http://vistadataproject.info/artifacts/devdocs/VDM/Ward_Location-42) | &nbsp; | 20 | 1,735 | 15
22 | 42_4 | [SPECIALTY](http://vistadataproject.info/artifacts/devdocs/VDM/Specialty-42_4) | &nbsp; | 32 | 287 | 112
23 | 45_7 | [FACILITY TREATING SPECIALTY](http://vistadataproject.info/artifacts/devdocs/VDM/Facility_Treating_Specialty-45_7) | &nbsp; | 20 | 331 | 80
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24 | 50_3 | [PRIMARY DRUG](http://vistadataproject.info/artifacts/devdocs/VDM/Primary_Drug-50_3) | &nbsp; | 108 | 251 | 1,162
25 | 50_607 | [DRUG UNITS](http://vistadataproject.info/artifacts/devdocs/VDM/Drug_Units-50_607) | &nbsp; | 36 | 109 | 369
26 | 50_608 | [PACKAGE TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Package_Type-50_608) | &nbsp; | 44 | 121 | 529
27 | 50_609 | [PACKAGE SIZE](http://vistadataproject.info/artifacts/devdocs/VDM/Package_Size-50_609) | &nbsp; | 188 | 106 | 5,259
28 | 50_64 | [VA DISPENSE UNIT](http://vistadataproject.info/artifacts/devdocs/VDM/Va_Dispense_Unit-50_64) | &nbsp; | 16 | 104 | 64
29 | 51_23 | [STANDARD MEDICATION ROUTES](http://vistadataproject.info/artifacts/devdocs/VDM/Standard_Medication_Routes-51_23) | YES | 16 | 258 | 47
30 | 51_24 | [DOSE UNITS](http://vistadataproject.info/artifacts/devdocs/VDM/Dose_Units-51_24) | YES | 16 | 199 | 53
31 | 51_5 | [ORDER UNIT](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Unit-51_5) | &nbsp; | 16 | 115 | 33
32 | 51_7 | [DRUG TEXT](http://vistadataproject.info/artifacts/devdocs/VDM/Drug_Text-51_7) | &nbsp; | 160 | 463 | 507
33 | 55_95 | [DRUG MANUFACTURER](http://vistadataproject.info/artifacts/devdocs/VDM/Drug_Manufacturer-55_95) | &nbsp; | 208 | 130 | 4,782
34 | 57_5 | [WARD GROUP](http://vistadataproject.info/artifacts/devdocs/VDM/Ward_Group-57_5) | &nbsp; | 16 | 588 | 5
35 | 59 | [OUTPATIENT SITE](http://vistadataproject.info/artifacts/devdocs/VDM/Outpatient_Site-59) | &nbsp; | 16 | 2,871 | 5
36 | 59_3 | [GROUP DISPLAY](http://vistadataproject.info/artifacts/devdocs/VDM/Group_Display-59_3) | &nbsp; | 16 | 153 | 3
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
37 | 61 | [TOPOGRAPHY FIELD](http://vistadataproject.info/artifacts/devdocs/VDM/Topography_Field-61) | &nbsp; | 396 | 148 | 8,593
38 | 61_1 | [MORPHOLOGY FIELD](http://vistadataproject.info/artifacts/devdocs/VDM/Morphology_Field-61_1) | &nbsp; | 212 | 151 | 3,854
39 | 61_2 | [ETIOLOGY FIELD](http://vistadataproject.info/artifacts/devdocs/VDM/Etiology_Field-61_2) | &nbsp; | 316 | 283 | 4,814
40 | 61_5 | [PROCEDURE FIELD](http://vistadataproject.info/artifacts/devdocs/VDM/Procedure_Field-61_5) | &nbsp; | 152 | 157 | 2,815
41 | 62 | [COLLECTION SAMPLE](http://vistadataproject.info/artifacts/devdocs/VDM/Collection_Sample-62) | &nbsp; | 36 | 262 | 128
42 | 62_05 | [URGENCY](http://vistadataproject.info/artifacts/devdocs/VDM/Urgency-62_05) | &nbsp; | 16 | 159 | 21
43 | 62_06 | [ANTIMICROBIAL SUSCEPTIBILITY](http://vistadataproject.info/artifacts/devdocs/VDM/Antimicrobial_Susceptibility-62_06) | &nbsp; | 44 | 792 | 96
44 | 62_07 | [EXECUTE CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Execute_Code-62_07) | &nbsp; | 24 | 323 | 73
45 | 62_1 | [DELTA CHECKS](http://vistadataproject.info/artifacts/devdocs/VDM/Delta_Checks-62_1) | &nbsp; | 20 | 455 | 31
46 | 62_2 | [LAB SECTION](http://vistadataproject.info/artifacts/devdocs/VDM/Lab_Section-62_2) | &nbsp; | 16 | 233 | 20
47 | 64 | [WKLD CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Wkld_Code-64) | &nbsp; | 1,724 | 471 | 15,758
48 | 64_061 | [LAB ELECTRONIC CODES](http://vistadataproject.info/artifacts/devdocs/VDM/Lab_Electronic_Codes-64_061) | &nbsp; | 328 | 206 | 5,103
49 | 64_062 | [LAB ELECTRONIC SUBTYPES](http://vistadataproject.info/artifacts/devdocs/VDM/Lab_Electronic_Subtypes-64_062) | &nbsp; | 16 | 121 | 16
50 | 64_2 | [WKLD SUFFIX CODES](http://vistadataproject.info/artifacts/devdocs/VDM/Wkld_Suffix_Codes-64_2) | &nbsp; | 304 | 390 | 3,210
51 | 64_21 | [WKLD CODE LAB SECT](http://vistadataproject.info/artifacts/devdocs/VDM/Wkld_Code_Lab_Sect-64_21) | &nbsp; | 16 | 158 | 19
52 | 64_22 | [WKLD ITEM FOR COUNT](http://vistadataproject.info/artifacts/devdocs/VDM/Wkld_Item_For_Count-64_22) | &nbsp; | 16 | 126 | 53
53 | 64_3 | [WKLD INSTRUMENT MANUFACTURER](http://vistadataproject.info/artifacts/devdocs/VDM/Wkld_Instrument_Manufacturer-64_3) | &nbsp; | 36 | 121 | 284
54 | 66 | [BLOOD PRODUCT](http://vistadataproject.info/artifacts/devdocs/VDM/Blood_Product-66) | &nbsp; | 56 | 1,211 | 84
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
55 | 71 | [RAD\/NUC MED PROCEDURES](http://vistadataproject.info/artifacts/devdocs/VDM/Rad_Nuc_Med_Procedures-71) | &nbsp; | 144 | 520 | 921
56 | 71_1 | [MAJOR RAD\/NUC MED AMIS CODES](http://vistadataproject.info/artifacts/devdocs/VDM/Major_Rad_Nuc_Med_Amis_Codes-71_1) | &nbsp; | 16 | 139 | 27
57 | 71_4 | [RAD\/NUC MED PROCEDURE MESSAGE](http://vistadataproject.info/artifacts/devdocs/VDM/Rad_Nuc_Med_Procedure_Message-71_4) | &nbsp; | 16 | 213 | 5
58 | 71_6 | [ROUTE OF ADMINISTRATION](http://vistadataproject.info/artifacts/devdocs/VDM/Route_Of_Administration-71_6) | &nbsp; | 16 | 303 | 17
59 | 71_7 | [SITE OF ADMINISTRATION](http://vistadataproject.info/artifacts/devdocs/VDM/Site_Of_Administration-71_7) | &nbsp; | 16 | 171 | 47
60 | 73_1 | [RAD MODALITY DEFINED TERMS](http://vistadataproject.info/artifacts/devdocs/VDM/Rad_Modality_Defined_Terms-73_1) | &nbsp; | 16 | 158 | 36
61 | 78_2 | [LBL\/HDR\/FTR FORMATS](http://vistadataproject.info/artifacts/devdocs/VDM/Lbl_Hdr_Ftr_Formats-78_2) | &nbsp; | 16 | 901 | 4
62 | 78_4 | [FILM SIZES](http://vistadataproject.info/artifacts/devdocs/VDM/Film_Sizes-78_4) | &nbsp; | 16 | 165 | 17
63 | 78_6 | [CAMERA\/EQUIP\/RM](http://vistadataproject.info/artifacts/devdocs/VDM/Camera_Equip_Rm-78_6) | &nbsp; | 16 | 129 | 7
64 | 78_7 | [LABEL PRINT FIELDS](http://vistadataproject.info/artifacts/devdocs/VDM/Label_Print_Fields-78_7) | &nbsp; | 20 | 342 | 55
65 | 79 | [RAD\/NUC MED DIVISION](http://vistadataproject.info/artifacts/devdocs/VDM/Rad_Nuc_Med_Division-79) | &nbsp; | 16 | 805 | 4
66 | 79_1 | [IMAGING LOCATIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Imaging_Locations-79_1) | &nbsp; | 16 | 972 | 14
67 | 79_2 | [IMAGING TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Imaging_Type-79_2) | &nbsp; | 20 | 1,750 | 9
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
68 | 80_2 | [DRG](http://vistadataproject.info/artifacts/devdocs/VDM/Drg-80_2) | &nbsp; | 1,200 | 5,773 | 871
69 | 80_3 | [MAJOR DIAGNOSTIC CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Major_Diagnostic_Category-80_3) | &nbsp; | 48 | 2,249 | 27
70 | 81 | [CPT](http://vistadataproject.info/artifacts/devdocs/VDM/Cpt-81) | YES | 6,052 | 871 | 24,247
71 | 81_1 | [CPT CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Cpt_Category-81_1) | YES | 44 | 261 | 268
72 | 81_3 | [CPT MODIFIER](http://vistadataproject.info/artifacts/devdocs/VDM/Cpt_Modifier-81_3) | YES | 1,396 | 7,859 | 691
73 | 82 | [DRG DIAGNOSIS IDENTIFIER CODES](http://vistadataproject.info/artifacts/devdocs/VDM/Drg_Diagnosis_Identifier_Codes-82) | &nbsp; | 16 | 131 | 1
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
74 | 95 | [LAB JOURNAL](http://vistadataproject.info/artifacts/devdocs/VDM/Lab_Journal-95) | &nbsp; | 20 | 108 | 180
75 | 95_3 | [LAB LOINC](http://vistadataproject.info/artifacts/devdocs/VDM/Lab_Loinc-95_3) | YES | 8,300 | 895 | 38,306
76 | 95_31 | [LAB LOINC COMPONENT](http://vistadataproject.info/artifacts/devdocs/VDM/Lab_Loinc_Component-95_31) | &nbsp; | 872 | 170 | 16,630
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77 | 100_01 | [ORDER STATUS](http://vistadataproject.info/artifacts/devdocs/VDM/Order_Status-100_01) | YES | 16 | 397 | 16
78 | 101 | [PROTOCOL](http://vistadataproject.info/artifacts/devdocs/VDM/Protocol-101) | &nbsp; | 1,260 | 635 | 6,197
79 | 101_15 | [OE\/RR COM OBJECTS](http://vistadataproject.info/artifacts/devdocs/VDM/Oe_Rr_Com_Objects-101_15) | &nbsp; | 16 | 174 | 4
80 | 123_1 | [REQUEST ACTION TYPES](http://vistadataproject.info/artifacts/devdocs/VDM/Request_Action_Types-123_1) | &nbsp; | 16 | 239 | 24
81 | 123_3 | [GMRC PROCEDURE](http://vistadataproject.info/artifacts/devdocs/VDM/Gmrc_Procedure-123_3) | &nbsp; | 16 | 246 | 31
82 | 125 | [PROBLEM SELECTION LIST](http://vistadataproject.info/artifacts/devdocs/VDM/Problem_Selection_List-125) | &nbsp; | 16 | 142 | 9
83 | 125_11 | [PROBLEM SELECTION CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Problem_Selection_Category-125_11) | &nbsp; | 16 | 146 | 20
84 | 142 | [HEALTH SUMMARY TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Health_Summary_Type-142) | &nbsp; | 188 | 1,410 | 329
85 | 142_1 | [HEALTH SUMMARY COMPONENT](http://vistadataproject.info/artifacts/devdocs/VDM/Health_Summary_Component-142_1) | &nbsp; | 60 | 605 | 138
86 | 194_5 | [LABEL PRINT FIELD](http://vistadataproject.info/artifacts/devdocs/VDM/Label_Print_Field-194_5) | &nbsp; | 16 | 370 | 33
87 | 195_1 | [RECORD TRACKING APPLICATION](http://vistadataproject.info/artifacts/devdocs/VDM/Record_Tracking_Application-195_1) | &nbsp; | 16 | 4,154 | 2
88 | 195_2 | [RECORD TYPES](http://vistadataproject.info/artifacts/devdocs/VDM/Record_Types-195_2) | &nbsp; | 16 | 1,001 | 26
89 | 195_9 | [BORROWERS\/FILE AREAS](http://vistadataproject.info/artifacts/devdocs/VDM/Borrowers_File_Areas-195_9) | &nbsp; | 728 | 344 | 7,247
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
90 | 201 | [USER CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/User_Class-201) | &nbsp; | 16 | 101 | 6
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
91 | 350_1 | [IB ACTION TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Ib_Action_Type-350_1) | YES | 36 | 600 | 116
92 | 357 | [ENCOUNTER FORM](http://vistadataproject.info/artifacts/devdocs/VDM/Encounter_Form-357) | &nbsp; | 48 | 635 | 171
93 | 357_91 | [MARKING AREA TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Marking_Area_Type-357_91) | &nbsp; | 16 | 149 | 17
94 | 357_92 | [PRINT CONDITIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Print_Conditions-357_92) | &nbsp; | 16 | 125 | 3
95 | 357_98 | [AICS DATA QUALIFIERS](http://vistadataproject.info/artifacts/devdocs/VDM/Aics_Data_Qualifiers-357_98) | &nbsp; | 16 | 155 | 29
96 | 359_1 | [AICS DATA ELEMENTS](http://vistadataproject.info/artifacts/devdocs/VDM/Aics_Data_Elements-359_1) | &nbsp; | 16 | 398 | 24
97 | 399_1 | [MCCR UTILITY](http://vistadataproject.info/artifacts/devdocs/VDM/Mccr_Utility-399_1) | YES | 56 | 165 | 664
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
98 | 403_46 | [STANDARD POSITION](http://vistadataproject.info/artifacts/devdocs/VDM/Standard_Position-403_46) | &nbsp; | 64 | 2,313 | 73
99 | 403_47 | [TEAM PURPOSE](http://vistadataproject.info/artifacts/devdocs/VDM/Team_Purpose-403_47) | &nbsp; | 16 | 359 | 13
100 | 404_51 | [TEAM](http://vistadataproject.info/artifacts/devdocs/VDM/Team-404_51) | &nbsp; | 16 | 502 | 28
101 | 404_57 | [TEAM POSITION](http://vistadataproject.info/artifacts/devdocs/VDM/Team_Position-404_57) | &nbsp; | 60 | 538 | 260
102 | 405_4 | [ROOM-BED](http://vistadataproject.info/artifacts/devdocs/VDM/Room-Bed-405_4) | &nbsp; | 36 | 384 | 209
103 | 405_5 | [MAS OUT-OF-SERVICE](http://vistadataproject.info/artifacts/devdocs/VDM/Mas_Out-Of-Service-405_5) | &nbsp; | 16 | 129 | 9
104 | 405_6 | [ROOM-BED DESCRIPTION](http://vistadataproject.info/artifacts/devdocs/VDM/Room-Bed_Description-405_6) | &nbsp; | 16 | 109 | 8
105 | 407_5 | [LETTER](http://vistadataproject.info/artifacts/devdocs/VDM/Letter-407_5) | &nbsp; | 52 | 575 | 120
106 | 409_1 | [APPOINTMENT TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Appointment_Type-409_1) | &nbsp; | 16 | 344 | 11
107 | 409_67 | [CLINIC GROUP](http://vistadataproject.info/artifacts/devdocs/VDM/Clinic_Group-409_67) | &nbsp; | 16 | 155 | 9
108 | 420_1 | [COST CENTER](http://vistadataproject.info/artifacts/devdocs/VDM/Cost_Center-420_1) | &nbsp; | 580 | 2,251 | 710
109 | 420_2 | [BUDGET OBJECT CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Budget_Object_Code-420_2) | &nbsp; | 56 | 215 | 347
110 | 420_3 | [PRCD FUND\/APPROPRIATION CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Prcd_Fund_Appropriation_Code-420_3) | &nbsp; | 40 | 201 | 301
111 | 420_5 | [UNIT OF ISSUE](http://vistadataproject.info/artifacts/devdocs/VDM/Unit_Of_Issue-420_5) | &nbsp; | 16 | 144 | 95
112 | 420_6 | [CODE INDEX](http://vistadataproject.info/artifacts/devdocs/VDM/Code_Index-420_6) | &nbsp; | 16 | 185 | 91
113 | 420_8 | [SOURCE CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Source_Code-420_8) | &nbsp; | 16 | 188 | 10
114 | 423_9 | [CALM\/LOG BATCH TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Calm_Log_Batch_Type-423_9) | &nbsp; | 16 | 392 | 14
115 | 430_2 | [ACCOUNTS RECEIVABLE CATEGORY](http://vistadataproject.info/artifacts/devdocs/VDM/Accounts_Receivable_Category-430_2) | YES | 16 | 367 | 44
116 | 440 | [VENDOR](http://vistadataproject.info/artifacts/devdocs/VDM/Vendor-440) | &nbsp; | 3,252 | 1,039 | 9,568
117 | 441_2 | [FEDERAL SUPPLY CLASSIFICATION](http://vistadataproject.info/artifacts/devdocs/VDM/Federal_Supply_Classification-441_2) | &nbsp; | 320 | 389 | 3,030
118 | 441_3 | [FSC GROUP TITLES](http://vistadataproject.info/artifacts/devdocs/VDM/Fsc_Group_Titles-441_3) | &nbsp; | 20 | 146 | 102
119 | 444_2 | [SIC CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Sic_Code-444_2) | &nbsp; | 72 | 123 | 1,182
120 | 444_21 | [SIC CODE GROUPS](http://vistadataproject.info/artifacts/devdocs/VDM/Sic_Code_Groups-444_21) | &nbsp; | 16 | 162 | 16
121 | 445_5 | [AUTOMATED SUPPLY STATIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Automated_Supply_Stations-445_5) | &nbsp; | 16 | 181 | 2
122 | 450 | [PAID EMPLOYEE](http://vistadataproject.info/artifacts/devdocs/VDM/Paid_Employee-450) | &nbsp; | 4,596 | 5,330 | 2,251
123 | 452_1 | [PRSE PROGRAM\/CLASS](http://vistadataproject.info/artifacts/devdocs/VDM/Prse_Program_Class-452_1) | &nbsp; | 288 | 366 | 1,988
124 | 452_3 | [PRSE MANDATORY TRAINING (MI) CLASS GROUP](http://vistadataproject.info/artifacts/devdocs/VDM/Prse_Mandatory_Training_(Mi)_Class_Group-452_3) | &nbsp; | 16 | 490 | 15
125 | 454_1 | [PAID COST CENTER\/ORGANIZATION](http://vistadataproject.info/artifacts/devdocs/VDM/Paid_Cost_Center_Organization-454_1) | &nbsp; | 20 | 472 | 57
126 | 455_5 | [T&L UNIT](http://vistadataproject.info/artifacts/devdocs/VDM/T&L_Unit-455_5) | &nbsp; | 60 | 1,394 | 86
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
127 | 601_71 | [MH TESTS AND SURVEYS](http://vistadataproject.info/artifacts/devdocs/VDM/Mh_Tests_And_Surveys-601_71) | &nbsp; | 72 | 712 | 219
128 | 697_2 | [PROCEDURE\/SUBSPECIALTY](http://vistadataproject.info/artifacts/devdocs/VDM/Procedure_Subspecialty-697_2) | &nbsp; | 32 | 508 | 79
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
129 | 702_01 | [CP DEFINITION](http://vistadataproject.info/artifacts/devdocs/VDM/Cp_Definition-702_01) | &nbsp; | 48 | 194 | 258
130 | 702_09 | [CP INSTRUMENT](http://vistadataproject.info/artifacts/devdocs/VDM/Cp_Instrument-702_09) | &nbsp; | 16 | 499 | 26
131 | 723 | [MEDICAL SPECIALTY](http://vistadataproject.info/artifacts/devdocs/VDM/Medical_Specialty-723) | &nbsp; | 16 | 113 | 86
132 | 724 | [DSS UNIT](http://vistadataproject.info/artifacts/devdocs/VDM/Dss_Unit-724) | &nbsp; | 32 | 496 | 71
133 | 728_441 | [NATIONAL CLINIC](http://vistadataproject.info/artifacts/devdocs/VDM/National_Clinic-728_441) | &nbsp; | 120 | 163 | 2,913
134 | 730 | [NATIONAL SERVICE](http://vistadataproject.info/artifacts/devdocs/VDM/National_Service-730) | &nbsp; | 16 | 236 | 50
135 | 736 | [QUIC SORT DATA](http://vistadataproject.info/artifacts/devdocs/VDM/Quic_Sort_Data-736) | &nbsp; | 36 | 242 | 168
136 | 771 | [HL7 APPLICATION PARAMETER](http://vistadataproject.info/artifacts/devdocs/VDM/Hl7_Application_Parameter-771) | &nbsp; | 48 | 339 | 253
137 | 771_2 | [HL7 MESSAGE TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Hl7_Message_Type-771_2) | &nbsp; | 32 | 340 | 135
138 | 771_3 | [HL7 SEGMENT TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Hl7_Segment_Type-771_3) | &nbsp; | 36 | 489 | 168
139 | 771_5 | [HL7 VERSION](http://vistadataproject.info/artifacts/devdocs/VDM/Hl7_Version-771_5) | &nbsp; | 16 | 171 | 8
140 | 771_7 | [HL7 ERROR MESSAGE](http://vistadataproject.info/artifacts/devdocs/VDM/Hl7_Error_Message-771_7) | &nbsp; | 16 | 237 | 33
141 | 771_8 | [HL7 STANDARD](http://vistadataproject.info/artifacts/devdocs/VDM/Hl7_Standard-771_8) | &nbsp; | 16 | 240 | 1
142 | 771_9 | [HL7 DEGREE](http://vistadataproject.info/artifacts/devdocs/VDM/Hl7_Degree-771_9) | &nbsp; | 16 | 260 | 67
143 | 779_001 | [HL7 EVENT TYPE CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Hl7_Event_Type_Code-779_001) | &nbsp; | 48 | 360 | 310
144 | 779_003 | [HL7 ACCEPT\/APPLICATION ACK CONDITION](http://vistadataproject.info/artifacts/devdocs/VDM/Hl7_Accept_Application_Ack_Condition-779_003) | &nbsp; | 16 | 207 | 4
145 | 779_004 | [COUNTRY CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Country_Code-779_004) | YES | 44 | 296 | 228
146 | 779_005 | [HL7 MESSAGE STRUCTURE CODE](http://vistadataproject.info/artifacts/devdocs/VDM/Hl7_Message_Structure_Code-779_005) | &nbsp; | 36 | 284 | 218
147 | 790_404 | [WV NOTIFICATION PURPOSE](http://vistadataproject.info/artifacts/devdocs/VDM/Wv_Notification_Purpose-790_404) | &nbsp; | 48 | 1,313 | 61
148 | 790_5 | [WV CERVICAL TX NEED](http://vistadataproject.info/artifacts/devdocs/VDM/Wv_Cervical_Tx_Need-790_5) | &nbsp; | 16 | 112 | 13
149 | 790_51 | [WV BREAST TX NEED](http://vistadataproject.info/artifacts/devdocs/VDM/Wv_Breast_Tx_Need-790_51) | &nbsp; | 16 | 113 | 15
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
150 | 801_42 | [REMINDER GUI PROCESS](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Gui_Process-801_42) | &nbsp; | 16 | 186 | 30
151 | 801_45 | [REMINDER FINDING TYPE PARAMETER](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Finding_Type_Parameter-801_45) | &nbsp; | 16 | 1,132 | 11
152 | 801_9 | [REMINDER RESOLUTION STATUS](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Resolution_Status-801_9) | &nbsp; | 16 | 354 | 6
153 | 802_4 | [REMINDER FUNCTION FINDING FUNCTIONS](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Function_Finding_Functions-802_4) | &nbsp; | 16 | 769 | 12
154 | 810_9 | [REMINDER LOCATION LIST](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Location_List-810_9) | &nbsp; | 48 | 5,335 | 19
155 | 811_2 | [REMINDER TAXONOMY](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Taxonomy-811_2) | &nbsp; | 360 | 4,244 | 250
156 | 811_4 | [REMINDER COMPUTED FINDINGS](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Computed_Findings-811_4) | &nbsp; | 56 | 1,011 | 69
157 | 811_5 | [REMINDER TERM](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Term-811_5) | &nbsp; | 240 | 843 | 826
158 | 811_6 | [REMINDER SPONSOR](http://vistadataproject.info/artifacts/devdocs/VDM/Reminder_Sponsor-811_6) | &nbsp; | 16 | 304 | 45
159 | 869_1 | [HL LOWER LEVEL PROTOCOL TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Hl_Lower_Level_Protocol_Type-869_1) | &nbsp; | 16 | 169 | 4
160 | 870 | [HL LOGICAL LINK](http://vistadataproject.info/artifacts/devdocs/VDM/Hl_Logical_Link-870) | &nbsp; | 52 | 479 | 275
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
161 | 920 | [VACCINE INFORMATION STATEMENT](http://vistadataproject.info/artifacts/devdocs/VDM/Vaccine_Information_Statement-920) | YES | 16 | 310 | 38
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
162 | 8925_6 | [TIU STATUS](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Status-8925_6) | YES | 16 | 496 | 14
163 | 8926_1 | [TIU VHA ENTERPRISE STANDARD TITLE](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Vha_Enterprise_Standard_Title-8926_1) | YES | 408 | 483 | 3,347
164 | 8926_2 | [TIU LOINC SUBJECT MATTER DOMAIN](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Loinc_Subject_Matter_Domain-8926_2) | YES | 40 | 290 | 178
165 | 8926_3 | [TIU LOINC ROLE](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Loinc_Role-8926_3) | YES | 16 | 251 | 27
166 | 8926_4 | [TIU LOINC SETTING](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Loinc_Setting-8926_4) | YES | 16 | 249 | 24
167 | 8926_5 | [TIU LOINC SERVICE](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Loinc_Service-8926_5) | YES | 36 | 305 | 131
168 | 8926_6 | [TIU LOINC DOCUMENT TYPE](http://vistadataproject.info/artifacts/devdocs/VDM/Tiu_Loinc_Document_Type-8926_6) | YES | 16 | 264 | 48
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
169 | 8930_2 | [USR ROLE](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Role-8930_2) | &nbsp; | 16 | 183 | 9
170 | 8930_6 | [USR RECORD STATUS](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Record_Status-8930_6) | &nbsp; | 16 | 346 | 15
171 | 8930_8 | [USR ACTION](http://vistadataproject.info/artifacts/devdocs/VDM/Usr_Action-8930_8) | &nbsp; | 20 | 425 | 24
172 | 8932_2 | [PROGRAM OF STUDY](http://vistadataproject.info/artifacts/devdocs/VDM/Program_Of_Study-8932_2) | &nbsp; | 16 | 121 | 23
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
173 | 8994 | [REMOTE PROCEDURE](http://vistadataproject.info/artifacts/devdocs/VDM/Remote_Procedure-8994) | &nbsp; | 1,376 | 882 | 3,651
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
174 | 9999999_04 | [IMM MANUFACTURER](http://vistadataproject.info/artifacts/devdocs/VDM/Imm_Manufacturer-9999999_04) | YES | 20 | 179 | 68
175 | 9999999_06 | [LOCATION](http://vistadataproject.info/artifacts/devdocs/VDM/Location-9999999_06) | &nbsp; | 344 | 188 | 5,876



## Parameters of Meta

__82__ parameter types. _Uses_ means number of assertions of a parameter in the clone's meta data.

\# | Name | RPC(s) | Description | Uses
--- | --- | --- | --- | ---
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
1 | [GMV ALLOW USER TEMPLATES](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_ALLOW_USER_TEMPLATES) | GMV MANAGER, GMV PARAMETER | &nbsp; | __1__
2 | [GMV DEFAULT VALUES](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_DEFAULT_VALUES) | GMV PARAMETER | &nbsp; | &nbsp;
3 | [GMV DLL VERSION](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_DLL_VERSION) | GMV DLL VERSION, GMV PARAMETER | This parameter is used to store the DLL versions that are compatible with the current server version of the Vitals/Measurements application. The Instance format is DLL:VERSION.   Example:  GMV_VITALSVIEWENTER.DLL:v. 07/21/05 10:34 | __8__
4 | [GMV GUI VERSION](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_GUI_VERSION) | GMV PARAMETER | This parameter is used to store the application:versions that are compatible with the current server version of Vitals Measurements.  Instance format is APPLICATION:VERSION  (example: VITALS.EXE:0.0.0.0). | __14__
5 | [GMV TEMPLATE](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_TEMPLATE) | GMV MANAGER, GMV PARAMETER | &nbsp; | __10__
6 | [GMV TEMPLATE DEFAULT](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_TEMPLATE_DEFAULT) | GMV MANAGER, GMV PARAMETER | &nbsp; | __1__
7 | [GMV USER DEFAULTS](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_USER_DEFAULTS) | GMV USER, GMV PARAMETER | This parameter is used to store a users default parameter settings.  Each  setting is defined on the client as follows:     TGMV_UserSetting = (     usCanvasAbnormal,     usCanvasNormal);     GMVUSERSETTING: array[TGMV_UserSetting] of string = (                   'CanvasAbnormal',                    'CanvasNormal'); | __33214__
8 | [GMV WEBLINK](http://vistadataproject.info/artifacts/devdocs/Parameters/GMV_WEBLINK) | GMV PARAMETER | This parameter contains the web address for the Vitals Measurments home page.  This can be modified to a local address in the event that the pages are downloaded to be displayed from a local server location or a site  wishes to direct user to a local page instead of the national site. | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
9 | [OR ALLERGY ENTERED IN ERROR](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_ALLERGY_ENTERED_IN_ERROR) | ORWDAL32 CLINUSER | This parameter will control whether or not a user has access to the entered in error functionality available on the cover sheet in CPRS GUI. | __1__
10 | [OR BILLING AWARENESS STATUS](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_BILLING_AWARENESS_STATUS) | ORWDBA1 BASTATUS | Status of Billing Awareness Utilization | __1__
11 | [OR DC REASON LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_DC_REASON_LIST) | ORWDX2 DCREASON | This parameter determines the sequence sites want the order DC reasons  to  appear. Sites do not need to set a sequence for every DC Reasons. For example if a site wants to set the "Requesting Physician Cancelled"  DC Reasons to the top of the list. Sites will set a value  of 1 for that entry and CPRS will display the rest of the DC Reasons after the "Requesting Physician Cancelled"  DC reason. | &nbsp;
12 | [OR DEA TEXT](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_DEA_TEXT) | ORDEA DEATEXT | This parameter allows sites to set what exactly they would like the  message to be that is shown on the signature dialog when a controlled  substance item is checked to be included in signing.  This text is  mandated by the DEA. | __1__
13 | [OR VBECS DIAGNOSTIC PANEL 1ST](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_VBECS_DIAGNOSTIC_PANEL_1ST) | ORWDXVB3 SWPANEL | This paramter will switch the location of the Diagnostic and Component panels on the VBECS Order Dialog.  Set this parameter to YES to see the Diagnostic tests panel displayed on the left hand side of the display. | __1__
14 | [OR VBECS REMOVE COLL TIME](http://vistadataproject.info/artifacts/devdocs/Parameters/OR_VBECS_REMOVE_COLL_TIME) | ORWDXVB3 COLLTIM | This parameter can be used to remove any defaults for Collection Times in the VBECS Order Dialog.  An entry of YES will set the default to null when using the VBECS Blood ordering dialog. Quick orders with a default defined in the quick order definition will not be affected by this parameter. | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
15 | [ORB SORT DIRECTION](http://vistadataproject.info/artifacts/devdocs/Parameters/ORB_SORT_DIRECTION) | ORWORB SETSORT, ORWORB GETSORT | Direction for sorting notifications when displayed in the CPRS GUI.  Directions include: Forward and Reverse. | __1427__
16 | [ORB SORT METHOD](http://vistadataproject.info/artifacts/devdocs/Parameters/ORB_SORT_METHOD) | ORWORB GETSORT, ORQORB SORT, ORWORB SETSORT, ORB SORT METHOD | Method for sorting notifications when displayed in the CPRS GUI. Methods include: by Patient, Message (text), Urgency, Info, Location, Date/Time, and Forwarded By/When. | __1502__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
17 | [ORCH CONTEXT CONSULTS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_CONSULTS) | ORQQCN2 GET CONTEXT | &nbsp; | __8__
18 | [ORCH CONTEXT NOTES](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_NOTES) | ORWTIU GET TIU CONTEXT | &nbsp; | __135__
19 | [ORCH CONTEXT ORDERS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_ORDERS) | ORWOR VWGET | &nbsp; | __55__
20 | [ORCH CONTEXT PROBLEMS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_PROBLEMS) | ORQQPL INIT USER | &nbsp; | __5__
21 | [ORCH CONTEXT REPORTS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_CONTEXT_REPORTS) | ORWTPO GETIMGD | &nbsp; | __13__
22 | [ORCH INITIAL TAB](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_INITIAL_TAB) | ORWU USERINFO | This parameter identifies the tab that should be initially displayed when CPRS first starts.  If ORCH USE LAST TAB is 'no', this tab is also used whenever a new patient is selected. | __45__
23 | [ORCH USE LAST TAB](http://vistadataproject.info/artifacts/devdocs/Parameters/ORCH_USE_LAST_TAB) | ORWU USERINFO | When this parameter is set to yes, CPRS will open to the last selected tab whenever changing patients.  When set to no, CPRS will open to the tab identified by ORCH INITIAL TAB. | __17__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
24 | [ORK SYSTEM ENABLE/DISABLE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORK_SYSTEM_ENABLE/DISABLE) | ORWDXC ON | Parameter determines if any order checking will occur.  'E' or 'Enable' indicates order checking is enabled and running. 'D' or 'Disabled' indicates order checking is disabled and not running.  Can be set at the  Institution, System, or Package level. | __2__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
25 | [ORLP DEFAULT CLINIC FRIDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_FRIDAY) | ORQPT DEFAULT LIST SOURCE | Clinic to be default source of Friday's patient list. | __340__
26 | [ORLP DEFAULT CLINIC MONDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_MONDAY) | ORQPT DEFAULT LIST SOURCE | Clinic identified as a default source for patients on Monday. | __338__
27 | [ORLP DEFAULT CLINIC SATURDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_SATURDAY) | ORQPT DEFAULT LIST SOURCE | Clinic to be default source of Saturday's patient list. | __316__
28 | [ORLP DEFAULT CLINIC SUNDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_SUNDAY) | ORQPT DEFAULT LIST SOURCE | Clinic to be default source of Sunday's patient list. | __316__
29 | [ORLP DEFAULT CLINIC THURSDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_THURSDAY) | ORQPT DEFAULT LIST SOURCE | Clinic to be default source of Thursday's patient list. | __338__
30 | [ORLP DEFAULT CLINIC TUESDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_TUESDAY) | ORQPT DEFAULT LIST SOURCE | Clinic to be default for determining patient list on Tuesdays. | __342__
31 | [ORLP DEFAULT CLINIC WEDNESDAY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_CLINIC_WEDNESDAY) | ORQPT DEFAULT LIST SOURCE | Clinic to be default source of Wednesday's patient list. | __341__
32 | [ORLP DEFAULT LIST SOURCE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_LIST_SOURCE) | ORQPT DEFAULT LIST SOURCE | Default preference for patient list source.  Valid values include:   T:Team/Personal List W:Ward List C:Clinic List P:Provider List S:Specialty List M:Combination List | __657__
33 | [ORLP DEFAULT PROVIDER](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_PROVIDER) | ORQPT DEFAULT LIST SOURCE | Provider who is basis for building the Provider List of patients. | __57__
34 | [ORLP DEFAULT SPECIALTY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_SPECIALTY) | ORQPT DEFAULT LIST SOURCE | Treating Specialty used as a source for patients on the Specialty List. | __7__
35 | [ORLP DEFAULT TEAM](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_TEAM) | ORQPT DEFAULT LIST SOURCE | Team/Personal list to be default source of patients. | __108__
36 | [ORLP DEFAULT WARD](http://vistadataproject.info/artifacts/devdocs/Parameters/ORLP_DEFAULT_WARD) | ORQPT DEFAULT LIST SOURCE | Ward for default list of patients. | __322__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
37 | [ORQQCSDR CS RANGE START](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQCSDR_CS_RANGE_START) | ORWTPO CSARNGD | Returns the relative date to start listing visits for a patient on the  Cover Sheet.  For example, 'T-90' will list visits beginning 90 days  before today. | __119__
38 | [ORQQCSDR CS RANGE STOP](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQCSDR_CS_RANGE_STOP) | ORWTPO CSARNGD | Returns the relative date to stop listing visits for a patient on the  Cover Sheet.  For example, 'T+2' will list visits ending two days from  today. | __119__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
39 | [ORQQEAFL ENC APPT FUTURE LIMIT](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQEAFL_ENC_APPT_FUTURE_LIMIT) | ORWTPD1 GETEAFL | Number of days from Today when warning is given to user upon selection of a future appointment for Encounters. | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
40 | [ORQQEAPT ENC APPT START](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQEAPT_ENC_APPT_START) | ORWTPD1 GETEDATS | Returns the relative number of days before Today to begin listing  appointments (0=Today, 1=Today-1 Day, etc.). | __102__
41 | [ORQQEAPT ENC APPT STOP](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQEAPT_ENC_APPT_STOP) | ORWTPD1 GETEDATS | Returns the relative number of days from Today to stop listing  appointments (0=Today, 1=Today+1 Day, etc.). | __101__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
42 | [ORQQPL SUPPRESS CODES](http://vistadataproject.info/artifacts/devdocs/Parameters/ORQQPL_SUPPRESS_CODES) | ORQQPL INIT USER | This parameter determines whether the user will be shown SNOMED CT and  ICD codes when searching for patient problems. | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
43 | [ORWCH BOUNDS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_BOUNDS) | ORWCH LOADSIZ, ORWCH SAVESIZ, ORWCH LOADALL, ORWCH SAVEALL | This parameter records bounds (position & size) information for the forms and controls in CPRSChart (Patient Chart GUI).  The individual properties are comma delimited (left,top,width,height). | __31556__
44 | [ORWCH COLUMNS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_COLUMNS) | ORWCH LOADALL, ORWCH SAVEALL | This records the widths of each column in a grid type control.  The column withs are entered from left to right and delimited by commas.  For example, "50,260,25,78,129". | __7967__
45 | [ORWCH FONT SIZE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_FONT_SIZE) | ORWCH SAVFONT, ORWCH LDFONT | This saves the preferred font size for CPRS Chart. | __1502__
46 | [ORWCH WIDTH](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCH_WIDTH) | ORWCH LOADALL, ORWCH SAVEALL | This records the width property for a control in CPRSChart (Patient Chart GUI).  In particular, it is used for recording the positions of splitter bars. | __14924__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
47 | [ORWCOM ORDER ACCEPTED](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCOM_ORDER_ACCEPTED) | ORWCOM ORDEROBJ | COM Objects to activate on order acceptance | &nbsp;
48 | [ORWCOM PATIENT SELECTED](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCOM_PATIENT_SELECTED) | ORWCOM PTOBJ | COM Object to Activate on CPRS GUI Patient Selection | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
49 | [ORWCV1 COVERSHEET LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWCV1_COVERSHEET_LIST) | ORWCV1 COVERSHEET LIST | This parameter allows a custom view of the Cover sheet in the CPRS Gui. | __16__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
50 | [ORWD NONVA REASON](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWD_NONVA_REASON) | ORWPS REASON | This parameter lists the reasons and statements for ordering/documenting  a non-VA medication.  Non-VA meds include herbals, OTCs (over-the-counter  medications) and prescriptions not obtained at VA pharmacies or from VA mail delivery services. | __4__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
51 | [ORWDQ QUICK VIEW](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDQ_QUICK_VIEW) | ORWUL QV4DG | This parameter contains the name of a personal quick order list for a specific display group. | __115__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
52 | [ORWDX WRITE ORDERS LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDX_WRITE_ORDERS_LIST) | ORWDX WRLST | This parameter is used to identify a menu in the ORDER DIALOG file that will be used as the list of items that may be selected in the Write Orders listbox of the CPRS GUI. | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
53 | [ORWDXM ORDER MENU STYLE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWDXM_ORDER_MENU_STYLE) | ORWDXM MSTYLE | Determines whether GUI order menus include mnemonics. | __1__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
54 | [ORWG GRAPH SETTING](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWG_GRAPH_SETTING) | ORWGRPC GETPREF | Used as preference of graph default styles and sources. Deletion of this value at the Package level will disable graphing. User settings and public default should use the Graph Settings dialog to change these values. The structure of this parameter is a  \|  delimited  string where the pieces are: 1 - file listing delimited by  ;  2 - options where the corresponding letter activates that feature 3 - sort column number (used internally) 4 - max graphs 5 - min graph height 6 - (not used) 7 - max selection 8 - max selection limit (may be set to at system level to limit      number of items that users may select for graphing   default is 1000)   Files: Admissions - 405, Allergies - 120.8, Anatomic  Pathology - 63AP, Blood Bank - 63BB, Exams - 9000010.13, Health Factors - 9000010.23, Immunizations - 9000010.11, Lab Tests - 63, Medication, BCMA - 53.79, Medication, Inpatient - 55, Medication, Non-VA - 55NVA,  Medication, Outpatient - 52, Medicine - 690, Mental Health - 601.2, Microbiology - 63MI, Notes - 8925, Orders - 100, Patient Education - 9000010.16, Problems - 9000011, Procedures - 9000010.18, Purpose of Visit - 9000010.07, Radiology Exams - 70, Registration, DX - 45DX, Registration, OP/Proc - 45OP, Skin Tests - 9000010.12, Surgery - 130, Treatments - 9000010.15, Visits - 9000010, Vitals - 120.5 Also (for grouping): Drug Class - 50.605, Reminder Taxonomy - 811.2   Options:  A - 3D, B - Clear Background, C - Dates, D - Gradient, E - Hints,  F - Legend, G - Lines, H - Sort by Type, I - Stay on Top, J - Values, K - Zoom, Horizontal, L - Zoom, Vertical , M - Fixed Date Range | __30__
55 | [ORWG GRAPH VIEW](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWG_GRAPH_VIEW) | ORWGRPC ALLVIEWS | This parameter is used internally to store graph views. Graph views are edited using the Define Views dialog. | __43__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
56 | [ORWOR AUTO CLOSE PT MSG](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_AUTO_CLOSE_PT_MSG) | ORWU USERINFO | This parameter controls how long the patient messages window displays before automatically closing.  The default is 5.  If the number of seconds is set to 0, the window will remain open until the user clicks it closed. | __1__
57 | [ORWOR AUTOSAVE NOTE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_AUTOSAVE_NOTE) | ORWU USERINFO | This parameter determines how many seconds should elapse between each auto-save of a note that is being edited in the GUI. | __27__
58 | [ORWOR BROADCAST MESSAGES](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_BROADCAST_MESSAGES) | ORWU USERINFO | This parameter may be used to disable the use of windows messaging to notify other applications of CPRS events.  Normally, this parameter should be set to 'Yes'.  If other applications do not respond appropriately to broadcast messages, this parameter may be set to 'No' to debug these applications. | __2__
59 | [ORWOR CATEGORY SEQUENCE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_CATEGORY_SEQUENCE) | ORWORDG MAPSEQ | Multiple instances of this parameter combine to form a list of the display groups shown in the order review screen.  Orders are displayed by the sequence identified in this list. | __38__
60 | [ORWOR DISABLE HOLD ORDERS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_DISABLE_HOLD_ORDERS) | ORWU USERINFO | This parameter will prevent orders from being placed on hold. | &nbsp;
61 | [ORWOR DISABLE ORDERING](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_DISABLE_ORDERING) | ORWU USERINFO | This parameter disables writing orders and taking actions on orders in the GUI. | __2__
62 | [ORWOR DISABLE WEB ACCESS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_DISABLE_WEB_ACCESS) | ORWU USERINFO | When this parameter is set to yes, web links in the CPRS GUI will be disabled or hidden. | &nbsp;
63 | [ORWOR ENABLE VERIFY](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_ENABLE_VERIFY) | ORWU USERINFO | This parameter controls whether nurses are allowed to verify orders in the GUI.  The default value is 0, which allows nurses to verify orders only when ordering is enabled.  To allow nurses to verify orders when ordering is disabled, set the value to 1.  To never allow the verify actions, set the value to 2.   This parameter applies to the "Verify" and "Chart Review" on the Actions menu on the Order tab. | __1__
64 | [ORWOR SHOW SURGERY TAB](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_SHOW_SURGERY_TAB) | ORWSR SHOW SURG TAB | Should the Surgery tab be shown in the GUI? ((0=No, 1=Yes) | __2__
65 | [ORWOR TIMEOUT CHART](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_TIMEOUT_CHART) | ORWU USERINFO | This value overrides the user's DTIME only in the case of the CPRS chart, Windows version (CPRSChart.exe). | __2__
66 | [ORWOR TIMEOUT COUNTDOWN](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_TIMEOUT_COUNTDOWN) | ORWU USERINFO | This value is the number of seconds used for the countdown when the timeout notification window appears. | __2__
67 | [ORWOR WRITE ORDERS LIST](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWOR_WRITE_ORDERS_LIST) | ORWDX WRLST | ***This parameter has been superseded by ORWDX WRITE ORDERS LIST.*** Currently, the GUI references only for backward compatibility reasons.   This parameter is used do list the order dialog names that should appear in the Write Orders list box of the CPRS GUI.  This is the list of dialogs that should be used in the inpatient setting. | __30__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
68 | [ORWPCE ANYTIME ENCOUNTERS](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_ANYTIME_ENCOUNTERS) | ORWPCE ANYTIME | Allows encounter data to be entered at any time, even when a note is not being edited. | __16__
69 | [ORWPCE ASK ENCOUNTER UPDATE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_ASK_ENCOUNTER_UPDATE) | ORWPCE ASKPCE | When signing a note in the CPRS GUI, this parameter is used to determine under what conditions to request the user enter encounter information. Note that encounter data is never required for inpatients.  0 = User is the Primary Encounter Provider, and Encounter Data is Needed 1 = User is the Primary Encounter Provider, and Patient is an Outpatient 2 = User is the Primary Encounter Provider 3 = Encounter Data is Needed 4 = Patient is an Outpatient 5 = Always 6 = Never 7 = Disable - Same as Never but disables the Encounter button | __42__
70 | [ORWPCE DISABLE AUTO CHECKOUT](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_DISABLE_AUTO_CHECKOUT) | ORWPCE ALWAYS CHECKOUT | Disables the automatic checkout of encounters that do not have a diagnosis, procedure or provider information. | &nbsp;
71 | [ORWPCE DISABLE AUTO VISIT TYPE](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWPCE_DISABLE_AUTO_VISIT_TYPE) | ORWPCE AUTO VISIT TYPE SELECT | When set to Yes, this parameter prevents the automatic selection of a Type of Visit on the Visit Tab of the encounter form. | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
72 | [ORWRP CIRN AUTOMATIC](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWRP_CIRN_AUTOMATIC) | ORWCIRN AUTORDV | This parameter determines if Remote patient queries are done automatically for all sites.  The values for this parameter can be controlled down to the USER entity. | &nbsp;
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
73 | [ORWT TOOLS MENU](http://vistadataproject.info/artifacts/devdocs/Parameters/ORWT_TOOLS_MENU) | ORWU TOOLMENU | This parameter may be used to identify which items should appear on the tools menu which is displayed by the CPRS GUI.  Each item should contain a name that should be displayed on the menu, followed by an equal sign, followed by the command string used to invoke the executable.  This string may also include parameters that are passed to the executable. Some example entries are:        Hospital Policy=C:\WINNT\SYSTEM32\VIEWERS\QUIKVIEW.EXE LOCPLCY.DOC      VISTA Terminal=C:\PROGRA~1\KEA\KEAVT.EXE VISTA.KTC   An ampersand may be used in the name portion to identify a letter that should be underlined on the menu for quick keyboard access.  For example, to underscore the letter H in Hospital Policy, enter &Hospital Policy as the name part.   To use submenus on the tools menu, you must place special text in the caption and action values.  Submenus must have action text SUBMENU ID, where ID is a unique identifier for the submenu.  Menu items belonging to the submenu must specify which submenu they belong to by appending [ID] after the caption.  Thus the following entries create a Utilities submenu with 2 child items:        Utilities=SUBMENU 1      Calculator[1]=calc.exe      Notepad[1]=notepad.exe   To create a nested submenu, you create a submenu that belongs to another submenu s ID.  For example, to create a nested submenu belonging the above Utilities submenu, you would do the following:        Utility Web Sites[1]=SUBMENU UtilWeb      MicroSoft Tools[UtilWeb]=http:\\www.msdn   While submenu IDs at the end of a caption are not displayed on the Tools menu, this is only true if a corresponding menu ID is found.  If no Menu ID is found, the square brackets and included text will appear as part of the caption on the Tools menu.  This allows for existing bracketed text to remain displayed.   If two submenus share the same menu ID, the second submenu will be treated as belonging to the first menu.   One point worth noting.  If you have a caption of a single dash (or a single dash followed by a submenu id), it will create a separator line in the menu or submenu.  This is not new functionality, but may not have been previously documented.   Finally, if more than 30 menu items are assigned to the top level menu (i.e. they are not part of a submenu), a "More..." submenu will automatically be created at the top of the Tools menu, with additional menu items spilling into the newly created "More..." submenu.  If more than 30 menu items spill into the "More..." submenu, another "More..." submenu will be created inside the first "More..." submenu, with additional menu items spilling into it, and so on, as needed.  Note, however, that there is a limit of 99 total menu items, since you can only enter an integer sequence number from 1-99 when defining the ORWT TOOLS MENU parameter. | __35__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
74 | [PXRM CPRS LOOKUP CATEGORIES](http://vistadataproject.info/artifacts/devdocs/Parameters/PXRM_CPRS_LOOKUP_CATEGORIES) | ORQQPXRM REMINDER CATEGORIES | Returns an array of reminder categories which can then be used within GUI reminder processing. | __9__
75 | [PXRM GEC STATUS CHECK](http://vistadataproject.info/artifacts/devdocs/Parameters/PXRM_GEC_STATUS_CHECK) | ORWU USERINFO | &nbsp; | __5__
76 | [PXRM GUI REMINDERS ACTIVE](http://vistadataproject.info/artifacts/devdocs/Parameters/PXRM_GUI_REMINDERS_ACTIVE) | ORQQPX NEW REMINDERS ACTIVE | Indicate if Interactive Reminders are Active.  Enter 0 (No) or 1 (Yes). | __5__
&nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
77 | [TIU DEFAULT TEMPLATES](http://vistadataproject.info/artifacts/devdocs/Parameters/TIU_DEFAULT_TEMPLATES) | TIU TEMPLATE SET DEFAULTS, TIU TEMPLATE GET DEFAULTS | Default Template for Notes;Consults;DC Summ tabs | __1599__
78 | [TIU PERSONAL TEMPLATE ACCESS](http://vistadataproject.info/artifacts/devdocs/Parameters/TIU_PERSONAL_TEMPLATE_ACCESS) | TIU TEMPLATE ACCESS LEVEL | This parameter is used to specify access to personal templates.  A setting  of READ ONLY allows the use of personal templates, but does not allow the  creation of new personal templates.  To restrict template use by USER CLASS, use the TIU TEMPLATE ACCESS BY CLASS parameter.  These two parameters work  together, in the following precedence order:   Precedence  Parameter ----------  ---------------------------- USER        TIU PERSONAL TEMPLATE ACCESS USER CLASS  TIU TEMPLATE ACCESS BY CLASS LOCATION    TIU PERSONAL TEMPLATE ACCESS SERVICE     TIU PERSONAL TEMPLATE ACCESS DIVISION    TIU PERSONAL TEMPLATE ACCESS SYSTEM      TIU PERSONAL TEMPLATE ACCESS | &nbsp;
79 | [TIU TEMPLATE ACCESS BY CLASS](http://vistadataproject.info/artifacts/devdocs/Parameters/TIU_TEMPLATE_ACCESS_BY_CLASS) | TIU TEMPLATE ACCESS LEVEL | This parameter is used to specify access to personal templates for a  specific user class.  A setting of READ ONLY allows the use of personal  templates, but does not allow the creation of new personal templates.   To restrict template use by USER, DIVISION or SYSTEM, use the TIU PERSONAL TEMPLATE ACCESS parameter.  These two parameters work  together, in the following precedence order:   Precedence  Parameter ----------  ---------------------------- USER        TIU PERSONAL TEMPLATE ACCESS USER CLASS  TIU TEMPLATE ACCESS BY CLASS LOCATION    TIU PERSONAL TEMPLATE ACCESS SERVICE     TIU PERSONAL TEMPLATE ACCESS DIVISION    TIU PERSONAL TEMPLATE ACCESS SYSTEM      TIU PERSONAL TEMPLATE ACCESS | &nbsp;
