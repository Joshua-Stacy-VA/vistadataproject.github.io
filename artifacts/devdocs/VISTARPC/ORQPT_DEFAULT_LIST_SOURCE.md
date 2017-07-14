---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT DEFAULT LIST SOURCE<br/>
# ORQPT DEFAULT LIST SOURCE

Function returns the source of the current user's default patient list.

## Properties

Property | Value
--- | ---
Label | DEFSRC
Routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEFSRC^ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
Method Comment | return current user&#x27;s default list source
Code | {::nomarkdown}<pre><code> Q:'$D(DUZ)<br/> N FROM,API,ORSRV<br/> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br/> S FROM=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT LIST SOURCE",1,"Q")<br/> Q:'$L($G(FROM))<br/> I FROM="T" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT TEAM",1,"B")_"^Team"<br/> I FROM="W" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT WARD",1,"B")_"^Ward"<br/> I FROM="P" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT PROVIDER",1,"B")_"^Primary Provider"<br/> I FROM="S" S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT SPECIALTY",1,"B")_"^Specialty"<br/> I FROM="C" D<br/> .S API="ORLP DEFAULT CLINIC "_$$UP^XLFSTR($$DOW^XLFDT(DT))<br/> .S Y=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),API,1,"B")_"^"_$$DOW^XLFDT(DT)_" Clinic"<br/> I FROM="M" S Y="^Combination"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}