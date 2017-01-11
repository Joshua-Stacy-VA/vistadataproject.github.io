---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAD CONTRACTED EXAM CRYPTO 

 property | value 
--- | --- 
 label | DVBAD CONTRACTED EXAM CRYPTO
 tag | EN
 routine | [DVBACEM1](http://code.osehra.org/dox/Routine_DVBACEM1_source.html)
 return value type | SINGLE VALUE
 description | Allows the demTRAN (GUI) application to Encrypt/Decrypt information for storage to or retrieval from the VistA environment.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DVBAETYP | LITERAL | 1 | true | The type of cryptography action to execute: 1: Encryption or 2: Decryption. | 
| DVBAIVAL | LITERAL | 999 | true | The single or '^' delimited string value(s) to perform the cryptography action on. | 




 ###### Generated on January 11th 2017, 6:39:43 am