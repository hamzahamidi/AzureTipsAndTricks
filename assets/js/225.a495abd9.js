(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{505:function(e,t,r){"use strict";r.r(t);var o=r(43),s=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure for Containers"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"docker-registry-vs-docker-repository"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry-vs-docker-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Registry vs. Docker Repository")]),e._v(" "),r("p",[e._v("We used "),r("router-link",{attrs:{to:"./tip55.html"}},[e._v("Docker Compose in Tip 55")]),e._v(" to create an image using our existing "),r("router-link",{attrs:{to:"./tip54.html"}},[e._v("ASP.NET WebAPI project")]),e._v(" and push it to Docker Cloud. I also covered deploying it to Azure using "),r("router-link",{attrs:{to:"./tip56.html"}},[e._v("Web App for Containers")]),e._v(". The bit of feedback that I feel that I didn't drive home was the difference between Docker Registry and Docker Repository. I wanted to cover that in this tip.")],1),e._v(" "),r("h4",{attrs:{id:"docker-registry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Registry")]),e._v(" "),r("p",[e._v("Docker Registry is a service that "),r("strong",[e._v("stores")]),e._v(" your docker images, but it could be hosted by a third party and even private if you need so. A couple of examples are:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://azure.microsoft.com/services/container-registry?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Container Registry"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://coreos.com/quay-enterprise/docs/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quay Enterprise"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("There are also other choices such as Google or AWS Container Registry.")]),e._v(" "),r("h4",{attrs:{id:"docker-repository"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Repository")]),e._v(" "),r("p",[e._v("A Docker Repository is a "),r("strong",[e._v("collection")]),e._v(" of related images with same name, that have different tags. Tags are an alphanumeric identifier attached to images within a repository (e.g., 1.1 or latest).")]),e._v(" "),r("p",[e._v("So the command docker "),r("code",[e._v("pull microsoft/aspnetcore:latest")]),e._v(" will download the image tagged "),r("code",[e._v("latest")]),e._v(" within the "),r("code",[e._v("microsoft/aspnetcore")]),e._v(" repository from the Docker Hub registry.")]),e._v(" "),r("p",[e._v("To wrap it up. Look at the image below. We have a Docker Repository named "),r("code",[e._v("microsoft/aspnetcore")]),e._v(" that is stored in a Docker Registry using Docker Hub.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/explaindocker1.png")}}),e._v(" "),r("p",[e._v("We could click on "),r("code",[e._v("tags")]),e._v(" and pull the latest version with "),r("code",[e._v("pull microsoft/aspnetcore:latest")]),e._v(" or version 1.1 with "),r("code",[e._v("pull microsoft/aspnetcore:1.1")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/explaindocker2.png")}})])},[],!1,null,null,null);t.default=s.exports}}]);