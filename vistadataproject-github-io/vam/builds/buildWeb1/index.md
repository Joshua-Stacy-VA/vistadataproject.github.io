---
layout: default
title: VICS Web1
---

## Build Web 1 (of 3) (February 15th, 2018)

The VICS Client will [i] establish an open source, industry-standard development framework for clinical and non clinical, web-based VICS clients, [ii] demonstrate that a new VICS-based clinical client can operate seemlessly along side CPRS and [iii] show that VICS _directly enables_ a cross VA as opposed to per-VISTA clinical care client.

This Web Client will __support all the relevant functionality of CPRS__ in a web-friendly form and deliver modern visual motifs and features missing from CPRS such as auto-complete in search dialogs and ease of personalization.

![ComboVICS -width70](images/ComboVICS.png)

VAM has three _PDE Clinical Web Client_ (_"VICS Client"_) releases:

Release | Name | Content | Due
--- | --- | --- | ---
W1 | Establish | [a] Basic GUI Component Framework,<br>[b] __Subset of CPRS__,<br>[c] Against lightweight VICS Test Server (leverages VDP nodeVISTA) | February 18
W2 | CPRS Coverage Complete | [a] __CPRS-compatible and equivalent__ Client for User, Division, Patient and three PDE domains,<br>[b] __VICS for Meta Data__ | May 18
W3 | Scalable National Client | [a] __VICS for all Data__,<br>[b] All CPRS interaction scenarios (locking, authentication),<br>[c] Cross VA, national client (VICS station #),<br>[d] AWS deployment,<br>[e] Proven scalability | August 18

__Demo__: 

Both the VICS Server and Client are being developed in parallel. The focus of the first two builds of VICS Server is RPC Emulation to provide CPRS support. It will not gain REST services until its third build. 

So VICS Client development depends on a lightweight _VICS Test Server_ which [1] proxies Patient service calls to a set of in-VISTA services developed during the VISTA Data Project and which has hard coded, simple versions of Meta Services. This lightweight _VICS Test Server_ allows development of the basic framework and functionality of the VICS Client independent of VICS Server development. 

The first Web Client build (W1) relies completely on this test server. In its second build (W2), the client will migrate to VICS Server proper for meta services. In its final build (W3), all interactions will be with the VICS Server.

![Web1Demo](images/Web1Demo.png)

See [demo](demo/)

__Development__: the client uses the popular React.js framework and, like the VICS Server, is being developed in open gits:
  * [React.js](https://reactjs.org/)
  * Development Gits: (note: due to move to own git in W2)
    * [VICS Client](https://github.com/vistadataproject/nodeVISTAClients/tree/master/vam-client)
    * [VICS Test Server](https://github.com/vistadataproject/nodeVISTAClients/tree/master/vam-server)

