---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN PUT PROSTHETIC DEVICES<br/>
# SPN PUT PROSTHETIC DEVICES

 This RPC is for the Prosthetic Device Codes subscreen on the Pressure  Ulcer Treatment report.  Calling the line tag COL will generate all Prosthetic Device Codes on file from the cut off date forward.  The results are first placed into ^UTILITY($J), and then sorted into reverse date order and placed into ^TMP($J)  To call this RPC, simply DO COL(,DFN,CUTDATE) , where  DFN = Internal Entry Number of patient in the PATIENT file (#2)  CUTDATE = Cut off date. Results are inclusive from cut off date to present  Sample ^TMP Global data string, using first item:  Piece  1 is HCPCS CODE --> L3001  (this is the prosthetic device code)  2 is Item Description --> LINER-SPENCO  3 is Date Delivered --> JUN 19, 2003  4 is file and note where information was obtained from (troubleshooting only)  Global ^TMP($J -- NOTE: translation in effect^TMP(545631591,1)=L3001^LINER-SPENCO^JUN 19, 2003^RMPR(664.1(9548               2)=L3221^SHOE-EXTRA DEPTH *PR^AUG 30, 1999^RMPR(664.1(5039               3)=L3002^INSERT,SHOE^AUG 30, 1999^RMPR(664.1(5039               4)=L2999^SOCKS,DIABETIC,LOOSE-FIT *PR^AUG 30, 1999^RMPR(664.1(5039               5)=L3002^INSOLE-MOLDABLE *PR^JAN 11, 1999^RMPR(664.1(1379               6)=L3002^INSERT,SHOE^JAN 11, 1999^RMPR(664.1(1415

## Properties

Property | Value
--- | ---
Label | COL
Routine | [SPNRPCG](http://code.osehra.org/dox/Routine_SPNRPCG_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL |  |  | 
CUTDATE | LITERAL |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}