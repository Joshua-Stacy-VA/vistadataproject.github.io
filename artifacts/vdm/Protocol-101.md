---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Protocol-101 

 property | value 
--- | --- 
 id | Protocol-101
 fmId | 101
 label | Protocol
 location | ^ORD(101,
 description | {::nomarkdown}This file contains the orderables and methods for accomplishing orders<br/>(protocols) within OE/RR.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}A unique name, which is preceded by the package namespace.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| item_text | 1 | Item Text | {::nomarkdown}The protocol's text as it appears to the user on the menu or subheader.{:/} | STRING |  | INDEXED |  | 
| synonym | 1.1 | Synonym | {::nomarkdown}This is another name for the protocol that may be used on lookup.{:/} | [STRING] |  |  |  | 
| print_name | 1.11 | Print Name | {::nomarkdown}This is a shortened version of the item text to be used on print-outs<br/>where the name must be abbreviated.{:/} | STRING |  |  |  | 
| disable | 2 | Disable | {::nomarkdown}This field disables use of the protocol when there is text in it.  The<br/>text should be a short message explaining why use of the protocol has<br/>been disabled, as it will be displayed if the protocol is selected.{:/} | STRING |  |  |  | 
| lock | 3 | Lock | {::nomarkdown}This field is used to deny access to users who have this option<br/>as part of their menu. If an option has a lock, then only users<br/>who hold the matching key can access it.{:/} | STRING |  |  |  | 
| description | 3.5 | Description | {::nomarkdown}This field contains a brief explanation of the protocol.{:/} | STRING |  |  |  | 
| prohibited_times | 3.9 | Prohibited Times | {::nomarkdown}This specifies a time range during which this option cannot be accessed.<br/>The time should be entered in military format. For example, to<br/>prohibit an option from running between 9 AM and 2 PM, enter 0900-1400.{:/} | STRING |  |  |  | 
| type-4 | 4 | Type | {::nomarkdown}This field defines the type of protocol to be executed.  Types Q, O, and<br/>L are strictly related to the 'Add orders' function.<br/>  Q = Protocol menu - used for displaying and selecting orderable items<br/>during the add sequence. When this type of protocol is encountered<br/>OE/RR will ask the 'Select PATIENT:,' 'LOCATION:,' 'Provider:'<br/>prompts and execute the transaction logic for the new orders<br/>screen.  This is also true for type O and L.<br/>O = Protocol - same as Q but the protocol is the item selected.<br/>Protocols are directly executed when encountered.<br/>L = Limited protocol - same as O but any existing sub-items are<br/>not executed.<br/>M = Menu - used for displaying and selecting items.<br/>X = Extended action - protocols of this type execute the entry action<br/>plus all sub-items.<br/>  A = Action - same as X but any existing sub-items are<br/>not executed.<br/>  X = Extended action - protocols of this type execute the entry action<br/>      plus all sub-items.<br/> <br/>  A = Action - same as X but any existing sub-items are<br/>      not executed.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>T</dt><dd>term</dd><dt>O</dt><dd>protocol</dd><dt>M</dt><dd>menu</dd><dt>Q</dt><dd>protocol menu</dd><dt>E</dt><dd>event driver</dd><dt>S</dt><dd>subscriber</dd><dt>X</dt><dd>extended action</dd><dt>D</dt><dd>dialog</dd><dt>A</dt><dd>action</dd><dt>L</dt><dd>limited protocol</dd></dl>{:/} | 
| creator | 5 | Creator | {::nomarkdown}This field identifies who created the protocol.{:/} | POINTER |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
| file_link | 6 | File Link | {::nomarkdown}This field is a variable pointer which may point to the entry in a file<br/>to which a protocol is linked.<br/>{:/} | POINTER |  | INDEXED | undefined | 
| cost | 8 | Cost | {::nomarkdown}This is the cost of filling the order associated with this protocol.{:/} | NUMERIC |  |  |  | 
| item | 10 | Item | {::nomarkdown}This is the item multiple for a protocol{:/} | [OBJECT] |  |  | [Item-101_01](#Item-101_01)  | 
| package | 12 | Package | {::nomarkdown}Pointer to Package File (#9.4).{:/} | POINTER |  |  | Package-9_4 | 
| exit_action | 15 | Exit Action | {::nomarkdown}This field contains MUMPS code which will be executed on leaving<br/>this option.  It is only applicable to Menu types.{:/} | STRING |  |  |  | 
| entry_action | 20 | Entry Action | {::nomarkdown}This field contains MUMPS code which will be executed on entering<br/>this option.  It is applicable to Menu and Action types.{:/} | STRING |  |  |  | 
| required_variables | 21 | Required Variables | {::nomarkdown}This lists the variables that must be defined for the proper execution of<br/>this protocol.  This aids in documenting the protocol.  Also, in the case<br/>of ';' jumping, the variables defined as required may be newed before<br/>jumping, thus preserving the context when returning from the jump.{:/} | [STRING] |  |  |  | 
| screen | 24 | Screen | {::nomarkdown}This field contains MUMPS code that screens out menu items or the<br/>execution of particular items in a protocol.  Before each item is<br/>displayed or executed, the screen is executed and the item is only<br/>processed if $T is true.{:/} | STRING |  |  |  | 
| header | 26 | Header | {::nomarkdown}In the case of menus (type M or Q), this contains MUMPS code that is <br/>executed to display a header for the menu.{:/} | STRING |  |  |  | 
| menu_help | 27 | Menu Help | {::nomarkdown}This contains MUMPS code that displays additional help to that already<br/>given with the menu.{:/} | STRING |  |  |  | 
| menu_prompt | 28 | Menu Prompt | {::nomarkdown}This contains text to replace the standard \Select Item: \ prompt normally<br/>given with a menu.{:/} | STRING |  |  |  | 
| menu_default | 29 | Menu Default | {::nomarkdown}This field contains a default response (i.e., default selection from the<br/>menu), if desired.{:/} | STRING |  |  |  | 
| dic_dic | 30 | Dic {dic} | {::nomarkdown}This field is used as the global reference passed to ^DIC for a file<br/>look-up.  The entry should be in the regular format for a call to ^DIC<br/>i.e. ^GL(41,{:/} | STRING |  |  |  | 
| column_width | 41 | Column Width | {::nomarkdown}This is the width, in characters, for each column on a menu.  For example,<br/>to have 3 columns on an 80 character device, enter a column width of 26.{:/} | NUMERIC |  |  |  | 
| mnemonic_width | 42 | Mnemonic Width | {::nomarkdown}This field allows the width allowed for mnemonics to be varied.  The<br/>default width is 5.{:/} | NUMERIC |  |  |  | 
| path_switch | 43 | Path Switch | {::nomarkdown}This allows the user, when traversing back UP the tree of protocols, to<br/>select a new path back down the tree.  In other words, the menu is<br/>redisplayed when returning to that menu's level in the tree, and processing<br/>back down the tree is possible from that point.  If nothing is selected<br/>from the menu, the path continues back up the tree.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| identifier | 44 | Identifier | {::nomarkdown}Entries into this file can be given identifiers to show context, function<br/>and/or relationships.  For example, Digoxin may exist in the file as three<br/>different entries with identifiers of SERUM, PLASMA and Drug.{:/} | STRING |  |  |  | 
| timestamp | 99 | Timestamp | {::nomarkdown}This contains the $H time that fields which are necessary to menu display<br/>were last changed.{:/} | STRING |  |  |  | 
| order_print_action | 100 | *order Print Action | {::nomarkdown}***NOTICE- THIS FIELD WILL BE REMOVED IN A FUTURE VERSION***<br/>Package action when a detailed listing of an order is requested.<br/>Included in this file for backward compatability with earlier versions<br/>of OE/RR.{:/} | STRING |  |  |  | 
| order_cancel_action | 100.1 | *order Cancel Action | {::nomarkdown}***NOTICE- THIS FIELD WILL BE REMOVED IN A FUTURE VERSION***<br/>Package action when an order is cancelled or discontinued.  Included in<br/>this file for backward compatability with earlier versions of OE/RR.{:/} | STRING |  |  |  | 
| order_purge_action | 100.2 | *order Purge Action | {::nomarkdown}***NOTICE- THIS FIELD WILL BE REMOVED IN A FUTURE VERSION***<br/>Package action when an order is to be purged from file 100.  Included in<br/>this file for backward compatability with earlier versions of OE/RR.{:/} | STRING |  |  |  | 
| access | 100.3 | Access | {::nomarkdown}This multiple contains the list of security keys which allow access to<br/>the protocol.  If there are no keys, all users have access.{:/} | [POINTER] |  |  | {id:Security_Key-19_1} | 
| requires_signature | 101.01 | Requires Signature | {::nomarkdown}This field is used to specify an orderable/protocol that does not<br/>require a physician signature in OE/RR.  Some of the things entered<br/>in OE/RR are considered instructions and don't require physician<br/>signature.  An example of this might be an entry for an Early/Late tray.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>NO SIGNATURE REQUIRED</dd><dt>0</dt><dd>PHYSICIAN SIGNATURE</dd></dl>{:/} | 
| domain_data_type | 101.041 | Domain (data Type) | {::nomarkdown}This is the data type of a term (i.e. protocol of type term) used in a<br/>dialog.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>F</dt><dd>free text</dd><dt>S</dt><dd>set of codes</dd><dt>L</dt><dd>list or range</dd><dt>M</dt><dd>menu</dd><dt>N</dt><dd>numeric</dd><dt>Y</dt><dd>yes/no</dd><dt>D</dt><dd>date/time</dd><dt>W</dt><dd>word processing</dd><dt>P</dt><dd>pointer</dd></dl>{:/} | 
| default_prompt | 101.042 | Default Prompt | {::nomarkdown}For this term, this is the prompt that is automatically used when the<br/>term is used as an item in a dialog.  The prompt may be modified at the<br/>item level.{:/} | STRING |  |  |  | 
| default_answer | 101.043 | Default Answer | {::nomarkdown}For a term protocol, this is the default answer that is automatically used<br/>when the term is used as an item in a dialog.  The default may be modified<br/>at the item level.{:/} | STRING |  |  |  | 
| default_word_processing_answer | 101.0431 | Default Word Processing Answer | {::nomarkdown}This is text used as a template for an item in a dialog that is a word<br/>processing type.{:/} | STRING |  |  |  | 
| default_help | 101.044 | Default Help | {::nomarkdown}For a term protocol, this is the help text that is automatically used when<br/>the term is used as an item in a dialog.  The help text may be replaced at<br/>the item level.{:/} | STRING |  |  |  | 
| domain_parameter | 101.045 | Domain Parameter | {::nomarkdown}This is a parameter that may be used to further specify the data type<br/>(i.e. input transform) for a term protocol.  The parameter is what would<br/>be placed in the second up-arrow piece of DIR(0) when calling the reader.{:/} | STRING |  |  |  | 
| method | 101.05 | Method | {::nomarkdown}This number identifies individual methods (actions) that may be invoked<br/>for this protocol.{:/} | [OBJECT] |  |  | [Method-101_05](#Method-101_05)  | 
| set_membership | 101.07 | Set Membership | {::nomarkdown}This is a namespaced name of a set.  If this is entered, a cross reference<br/>of the format \S.set membership\ is created.  This allows rapid lookups on<br/>subsets of the Protocol file.{:/} | [STRING] |  |  |  | 
| sending_application | 770.1 | Sending Application | {::nomarkdown}Enter the name of the application that initiates a transaction. It<br/>is required only when defining an EVENT POINT protocol.{:/} | POINTER |  |  | Hl7_Application_Parameter-771 | 
| response_message_type | 770.11 | Response Message Type | {::nomarkdown}Enter the message type of the expected RESPONSE. It should only be defined<br/>on a SUBSCRIBER PROTOCOL.<br/> <br/>NOTE:<br/>In a contract between the initiating system and the responding system, the<br/>Event Driver protocol defines the characteristics of the INITIATING<br/>SYSTEM. The Initiating System initiates either queries or unsolicited<br/>update messages. A Subscriber Protocol defines the characteristics of the<br/>RESPONDING SYSTEM. The responding system completes a transaction by<br/>returning either an acknowledgement and/or a response to the specific<br/>query message.{:/} | POINTER |  |  | Hl7_Message_Type-771_2 | 
| batch_file_message_commit_ack | 770.14 | Batch/file Message Commit Ack | {::nomarkdown}In a bi-directional interface, this field will be used <br/>to determine whether or not a Batch or File message should<br/>send or receive a Commit Acknowledgement.  A Batch or File<br/>message will always send/receive an Application Ack. This<br/>feature is non-standard according to HL7.  It is needed to<br/>insure the receipt of a message.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| receiving_application | 770.2 | Receiving Application | {::nomarkdown}This is the application that receives a message. It is otherwise known as<br/>the <br/>esponding\ application when a transaction takes place. This<br/>information is required for SUBSCRIBER protocols only.{:/} | POINTER |  | INDEXED | Hl7_Application_Parameter-771 | 
| transaction_message_type | 770.3 | Transaction Message Type | {::nomarkdown}Enter the name of the message type for the the message that is sent from<br/>the initiating system. When initiating a new transaction, this field is<br/>referenced when generating the header for the outbound message.<br/> <br/>NOTE:<br/>In a contract between the initiating system and the responding system, the<br/>Event Driver protocol defines the characteristics of the INITIATING<br/>SYSTEM. The Initiating System initiates either queries or unsolicited<br/>update messages. A Subscriber Protocol defines the characteristics of the<br/>RESPONDING SYSTEM. The responding system completes a transaction by<br/>returning either an acknowledgement and/or a response to the specific<br/>query message.{:/} | POINTER |  |  | Hl7_Message_Type-771_2 | 
| event_type | 770.4 | Event Type | {::nomarkdown}This is the HL7 Event Type code for the message represented by this<br/>protocol. In HL7, the message type and event type of an application<br/>response message may be different from the original message.<br/> <br/>If this is an event point protocol, enter the event type<br/>corresponding to the initial message generated by the SENDING APPLICATION.<br/> <br/> <br/>If this is a subscriber protocol, then enter the event type corresponding<br/>to the RECEIVING APPLICATION response. Note that an event type is not<br/>required when responding with a general acknowledgement (ACK) and the<br/>receiving application does not always need to generate a response.<br/> <br/>NOTE:<br/> <br/>1. In \original acknowledgement mode\ the receiving application always<br/>generates the response.<br/>2. In \enhanced acknowledgement mode\ the HL7 package may be configured to<br/>produce a \commit ack\ before the application receives the message. If the<br/>receiving application does not need to generate a response in addition to<br/>the ack, then the event type is the same as the original message (and the<br/>message type would be ACK)<br/>3. In \enhanced acknowledgement mode with two-phase commit\ the HL7<br/>package generates a commit ack, and passes the message to the application.<br/>The second phase of the transaction occurs when the application is ready<br/>to initiate a response. This is interpreted as the start of a new<br/>transaction and may require a commit ack itself.{:/} | POINTER |  |  | Hl7_Event_Type_Code-779_001 | 
| message_structure | 770.5 | Message Structure | {::nomarkdown}The message structure is associated with the message type and event type defined by HL7 v2.3.1 and beyond.{:/} | POINTER |  |  | Hl7_Message_Structure_Code-779_005 | 
| processing_id | 770.6 | Processing Id | {::nomarkdown}This field describes how a message should be processed once it is handed<br/>off to the receiving application. <br/> <br/>PROCESSING ID is a required field in the HL7 message header. However, the<br/>Event Driver protocol entry is only used whenset to DEBUG. Data for the<br/>header is normally derived from the HL COMMUNICATION SERVER FILE. If<br/>testing a transaction in Debug mode, make sure it is changed on both the<br/>sending and receiving system.<br/> <br/> <br/>The receiving application developer should consider checking this portion<br/>of the header before filing data on a production system. Training and<br/>Debug messages may not be suitable for filing.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>D</dt><dd>debug</dd></dl>{:/} | 
| logical_link | 770.7 | Logical Link | {::nomarkdown}This field is used with a SUBSCRIBER PROTOCOL to describe the network path<br/>to the subscriber. It is most often used with a fixed point-to-point<br/>interface between Vista and another system, e.g., a local COTS application<br/>or another Vista facility. See the documentation on use of the ROUTING<br/>LOGIC field and \dynamic addressing\ for more complex routing scenarios.{:/} | POINTER |  |  | Hl_Logical_Link-870 | 
| accept_ack_code | 770.8 | Accept Ack Code | {::nomarkdown}This field defines whether or not a COMMIT ACK will be generated by the<br/>HL7 package. This only applies to transactions using version 2.2 and<br/>higher of the HL7 Standard. See Chapter 2 of the HL7 Standard for details<br/>of Enhanced Mode Acknowledgements.{:/} | POINTER |  |  | Hl7_Accept_application_Ack_Condition-779_003 | 
| application_ack_type | 770.9 | Application Ack Type | {::nomarkdown}For transactions using versions 2.2 and higher of the HL7 standard, this<br/>field defines whether or not the receiving application is expected to<br/>return an acknowledgement. Enhanced Mode Application Acks are always<br/>initiated as a new transaction. The following is an example of a 2-phased<br/>acknowledgement over a tcp connection.<br/> <br/> <br/>(A)INITIATING SYSTEM         (B)RESPONDING SYSTEM<br/> <br/>PHASE I<br/>Open connection to B<br/>send ADT/A04----------------->receive ADT/A04<br/>                              validate header<br/>                              commit to safe storage<br/>receive CA<-------------------send CA to A<br/>Close connection<br/> <br/>PHASE II<br/>                              handoff to receiving Application<br/>                              parse and validate message content<br/>                              generate APPLICATION ACCEPT ACK<br/>                              Open connection to A<br/>receive AA<-------------------send AA<br/>validate header<br/>commit to safe storage<br/>send CA to B------------------>receive CA<br/>                               close connection{:/} | POINTER |  |  | Hl7_Accept_application_Ack_Condition-779_003 | 
| version_id | 770.95 | Version Id | {::nomarkdown}Enter the version of the HL7 standard used to implement this transaction.<br/> <br/>Note that a screen has been added to insure that the version selected<br/>corresponds to the appropriate version of the Message Type defined.{:/} | POINTER |  |  | Hl7_Version-771_5 | 
| processing_routine | 771 | Processing Routine | {::nomarkdown}This field is executed on the receiving system. It defines the routine<br/>used to process the original inbound message in a transaction and to<br/>GENERATE and APPLICATION response/ACK back to the sending system using the<br/>entry point, GENACK^HLMA1.{:/} | STRING |  |  |  | 
| response_processing_routine | 772 | Response Processing Routine | {::nomarkdown}This field is executed on the sending system when an Acknowledgement or<br/>Query response is received. The message ID of the original message is<br/>always contained within the response. This is used to identify the<br/>location of the original message and the corresponding event point<br/>protocol. Note that this pertains to Original and Enhanced Mode<br/>Application Acks only. The HL7 package generates and processes<br/>Enhanced mode Commit Accepts internally.{:/} | STRING |  |  |  | 
| sending_facility_required | 773.1 | Sending Facility Required? |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| receiving_facility_required | 773.2 | Receiving Facility Required? |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| security_required | 773.3 | Security Required? |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| date_time_of_message_required | 773.4 | Date/time Of Message Required? |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| ack_mode_set_in_subscriber | 773.5 | Ack Mode Set In Subscriber | {::nomarkdown}A 'YES' of this field will indicate that MSH-15 and MSH-16 will be taken<br/>from Subscriber protocol instead of the value(s) defined in Event driver <br/>protocol.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| routing_logic | 774 | Routing Logic | {::nomarkdown}M code in this field is executed only when a message is in an OUTBOUND<br/>state. Normally, Vista HL7 'broadcasts' a message to all subscribers<br/>whenever a message is generated. However, in some cases, a client may need<br/>to receive the message only if it matches a particular condition. This<br/>field allows you to set up screening logic to interpret the message and<br/>dynamically address the message to those interested in the data when it<br/>meets these conditions. The output of your routing logic routine should be<br/>the creation of a list of additional message recipients set into the<br/>HLL(\LINKS\) array.<br/> <br/>For details on dynamic addressing, see the documentation for HL*1.6*14.{:/} | STRING |  |  |  | 
| subscribers | 775 | Subscribers |  | [POINTER] |  |  | {id:Protocol-101} | 

## <a name="Item-101_01"></a>Item-101_01 

 property | value 
--- | --- 
 id | Item-101_01
 label | Item

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| item | .01 | Item | {::nomarkdown}This points to a protocol which is subordinate to this protocol.<br/>NOTE:  The parent protocol or one of its ancestors may not be entered<br/>as an item.{:/} | POINTER |  | REQUIRED, INDEXED | Protocol-101 | 
| mnemonic | 2 | Mnemonic | {::nomarkdown}This is a short abbreviation for the item.{:/} | STRING |  |  |  | 
| sequence | 3 | Sequence | {::nomarkdown}This is the order in which items in the list should be processed.  In the<br/>case of menus, the items are displayed in the order derived from this<br/>field.  In the case of protocols and extended actions, the items are<br/>executed in the order derived from this field.{:/} | NUMERIC |  |  |  | 
| modifying_action | 4 | Modifying Action | {::nomarkdown}This points to a protocol which is executed before the item for this same<br/>entry is executed.  This allows the possibility of creating protocols<br/>which set up special variables, etc., according to the context of the<br/>protocol.  It also allows screens at the item level if the variables<br/>ORQUIT or ORABORT are used to prevent execution of the item.{:/} | POINTER |  |  | Protocol-101 | 
| format_code | 5 | Format Code | {::nomarkdown}This allows items used on menus for formatting purposes to be made<br/>unselectable (sub-headers, blank lines, etc.).{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>O</dt><dd>output only</dd><dt>H</dt><dd>header</dd></dl>{:/} | 
| display_name | 6 | Display Name | {::nomarkdown}This allows the item text that normally appears on the menu to be<br/>displayed.  For example, this field may be used to set up menus so<br/>that items are displayed in mixed case, even though the item text may<br/>all be in upper case.{:/} | STRING |  |  |  | 
| prompt | 11 | Prompt | {::nomarkdown}This is the actual prompt displayed for this item in the dialog.{:/} | STRING |  |  |  | 
| default | 12 | Default | {::nomarkdown}This is the default response for this item in the dialog.{:/} | STRING |  |  |  | 
| help | 13 | Help | {::nomarkdown}This is the help text displayed for this item in the dialog.{:/} | STRING |  |  |  | 
| mode | 14 | Mode | {::nomarkdown}This tells how this item should be treated when processing the dialog.<br/>  S - suppresses inclusion of the prompt when creating the text generated<br/>      by the dialog.<br/>  E - allows the item to only be presented when editing an existing<br/>      response.<br/>  R - identifies the field as required.{:/} | STRING |  |  |  | 

## <a name="Method-101_05"></a>Method-101_05 

 property | value 
--- | --- 
 id | Method-101_05
 label | Method

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| method | .01 | Method | {::nomarkdown}This is reserved for future use.  The numeric values of this field<br/>currently correspond to OE/RR actions.{:/} | NUMERIC |  | REQUIRED |  | 
| method_action | .02 | Method Action | {::nomarkdown}This is the code necessary to implement the method.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:36 am</p>{:/}