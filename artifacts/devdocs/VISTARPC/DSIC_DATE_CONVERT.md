---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DATE CONVERT<br/>
# DSIC DATE CONVERT

This will take a date in any format and convert it to any other format.

## Properties

Property | Value
--- | ---
Label | CNVT
Routine | [DSICDT](http://code.osehra.org/dox/Routine_DSICDT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INVAL | LITERAL | 25 | true | This is the input date.time value to be converted.  If this parameters contains any alpha characters, this RPC will always assume that this input value is in external form (i.e., human readable format).  When sending external (human readable) date.time, then following applies: 1. If a two-digit year is entered, a year less than 20 years in the   future and no more than 80 years in the past is assumed. For   example, in the year 2000, two-digit years are assumed to be   between 1920 through 2019.  2. For Internationalization, this assumes that in the input, the day   number precedes the month number. For example, input of 05/11/2000   is assumed to be November 5, 2000 (instead of May 11, 2000). Also,   with this flag, the month must be input as a number. For example,   November must be input as 11, not NOV. 3. To simplify entering dates, you can use shortcuts such as T for   today, T-1 for yesterday, or T+1 for tomorrow. Or you can combine   T with D for day, W for week, M for month, or Y for year; T-2D   means two days ago, T+1W means today plus one week, T+4M means four    months from today, and T-3Y means three years ago from today. 4. For time input, to be totally unambiguous, time can be as military   time (four or six digits, no colon), hour AM/PM, hour:minute AM/PM,   or hour:minute:second AM/PM. If you do omit an AM/PM notation, the   following assumptions are made:   a. If you enter a single digit for the hour, a time between 6AM      and 6PM is used. Thus, T@330 (or T@3:30) means today at 3:30 PM      and T@945 (or T@9:45) means today at 9:45 AM.   b. If you enter two digits for the hour, the actual hour entered is      used (as if military time were being used). Thus, T@0330 (or      T@03:30) means today at 3:30 AM.   c. As with dates, there are supported abbreviations you can use      when entering times in DATE/TIME fields.      1) To enter the present moment, you can enter the word NOW      2) To enter an hour from the present moment, enter NOW+1H      3) To enter an hour ago from the present moment, enter NOW-1H      4) You can also combine NOW with D for day, M for month, and         &#x27; (apostrophe) for minute (NOW+3&#x27; for present time plus 3         minutes.      5) And you can enter MID for 12 a.m. and NOON for 12 p.m.
INTYPE | LITERAL | 2 | true | optional - only if INVAL contains an alpha character.  Else, this is required. Usually it is a single character.  If two characters, then it must be one of the first 6 listed below plus &quot;I&quot;.  If INVAL&#x3D;&quot;I&quot; then assume INVAL in external format.  &quot;D&quot; - INVAL is in Delphi internal format &quot;F&quot; - INVAL is in internal Fileman format &quot;E&quot; - INVAL is in external format (human readable) &quot;M&quot; - INVAL is in internal M format ($H) &quot;H&quot; - INVAL is in HL7 format &quot;G&quot; - INVAL is in UCT format &quot;I&quot; - INVAL is in Internationalized format, i.e.,       the day number precedes the month number
OUTYPE | LITERAL | 6 | true | optional - default value is internal Fileman format &quot;F&quot;.  This is a string of characters designating output format(s) If OUTYPE contains &quot;F&quot; - return internal Fileman format                   &quot;D&quot; - return internal Delphi format                   &quot;E&quot; - return external format                   &quot;M&quot; - return internal M format ($H)                   &quot;A&quot; - return all formats                   &quot;H&quot; - return HL7 format                   &quot;G&quot; - return UCT format
OUTFMT | LITERAL | 10 | true | optional - this param controls the format of the returned value for external date value only.  OUTFMT can contain only a single digit plus optional alpha characters. If OUTFMT &#x3D; &quot;&quot; - then return mmm dd, yyyy@hh:mm:ss - default          contains 1 -       mmm dd, yyyy@hh:mm:ss - default                   2 -       mm/dd/yy@hh:mm:ss [no leading zeros]                   3 -       dd/mm/yy@hh:mm:ss [no leading zeros]                   4 -       yy/mm/dd@hh:mm:ss [no leading zeros]                   5 -       mm/dd/yyyy@hh:mm:ss [no leading zeros]                   6 -       dd/mm/yyyy@hh:mm:ss [no leading zeros]                   7 -       yyyy/mm/dd@hh:mm:ss [no leading zeros]                   D -       return date only                   F -       output with leading blanks                   S -       force seconds in outputs                   Z -       pad months and days with leading zeros                   P -  output time in &#x27; hh:mm:ss am/pm&#x27;
TIMEFMT | LITERAL | 1 | true | Optional - controls what portion of the time part of the date will be returned.  Default value is M If TIMEFMT &#x3D; H, then return only hours           &#x3D; M, then return only hour:minute           &#x3D; S, then return seconds



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}