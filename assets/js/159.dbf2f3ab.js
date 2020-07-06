(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{445:function(t,e,s){"use strict";s.r(e);var a=s(43),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/powershell/azure/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Overview of Azure PowerShell"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("📺 Watch the video : "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=laAwhwahb5I&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=38?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Add Logic to Your Testing in Production Sites with PowerShell"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),s("p",[t._v("We've recently created a "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("web app"),s("OutboundLink")],1),t._v(" and uploaded it to Azure App Service. We also took a look at "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("multiple ways"),s("OutboundLink")],1),t._v(" to examine those files through the Azure portal interface and how we'd add "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip21.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("extensions"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("deployment slots"),s("OutboundLink")],1),t._v(" for our web app. We also took a look at a feature called "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip23.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Testing in Production"),s("OutboundLink")],1),t._v(" which allows us to distribute traffic between our production and other slots. In this post, we'll look at adding additional logic by using PowerShell to automatically distribute the load between your Production and deployment slot sites with the Testing in Production feature.")]),t._v(" "),s("h4",{attrs:{id:"install-the-powershell-azure-cli-first"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-powershell-azure-cli-first","aria-hidden":"true"}},[t._v("#")]),t._v(" Install the PowerShell Azure CLI first")]),t._v(" "),s("p",[s("strong",[t._v("Hold up!")]),t._v(" You'll want to take a look at the "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("deployment slots"),s("OutboundLink")],1),t._v(" and the "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip23.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Testing in Production"),s("OutboundLink")],1),t._v(" post to have context on what we're going to do here.")]),t._v(" "),s("p",[t._v("Go to the "),s("a",{attrs:{href:"https://azure.github.io/projects/clis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure CLI Projects page"),s("OutboundLink")],1),t._v(" and select select the WebPI Installer  or use the PowerShell gallery to bring together the power of Windows PowerShell and Azure.")]),t._v(" "),s("p",[t._v("Once it has been setup, type "),s("code",[t._v("az")]),t._v(" from your PowerShell Window to see the shiny new way to interact with Azure.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/powershellcli1.png")}}),t._v(" "),s("h4",{attrs:{id:"powershell-azure-app-service-your-web-app-win"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershell-azure-app-service-your-web-app-win","aria-hidden":"true"}},[t._v("#")]),t._v(" PowerShell + Azure App Service + Your Web App = Win")]),t._v(" "),s("p",[t._v("Keep in mine that we "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip23.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("left off"),s("OutboundLink")],1),t._v(" with  two versions of our site. One that is "),s("code",[t._v("production")]),t._v(" and "),s("code",[t._v("staging")]),t._v(". They are identical except for the staging site has a large font that says "),s("code",[t._v("jsQuizEngine version 2")]),t._v(". We just "),s("strong",[t._v("distributed")]),t._v(" traffic manually between the two sites by going into the Azure Portal and changing this value from the Testing in Production blade.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/testinprodazure7.png")}}),t._v(" "),s("p",[t._v("But what if we would like to generate rules to do this automatically where someone doesn't have to be inside the Portal manually changing this number?")]),t._v(" "),s("p",[t._v("That is where PowerShell and the Azure CLI comes to the rescue. The CLI is great for automation of tasks such as this one. Begin by opening PowerShell and logging in with "),s("code",[t._v("Add-AzureAccount")]),t._v(". It will ask to authenticate you.  After authenticated, then set the proper subscription by using "),s("code",[t._v('Select-AzureSubscription -Default -SubscriptionName "whatsubscriptionnameyouwanttouse"')]),t._v(". Now run the following script editing only the "),s("code",[t._v("siteName")]),t._v(" parameter to match whatever you called your app.")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyQuizApplication"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rulesList")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("TypeName System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Collections"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Generic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Microsoft.WindowsAzure.Commands.Utilities.Websites.Services.WebEntities.RampUpRule]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("TypeName Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WindowsAzure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utilities"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Websites"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebEntities"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RampUpRule\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stage"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActionHostName = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v('-staging.azurewebsites.net"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReroutePercentage = 90\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rulesList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureWebsite "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RoutingRules "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rulesList")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Name "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Slot production\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("If you open the Azure Portal and navigate to your site page and then "),s("code",[t._v("Testing in Production")]),t._v(" then you'll see the percentage is automatically updated to 90% after the command runs.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/powershellcli2.gif")}}),t._v(" "),s("p",[s("strong",[t._v("What did the script do again?")]),t._v(" This script added a rule for our staging environment that set the "),s("code",[t._v("staging")]),t._v(" route to a hard coded value of "),s("code",[t._v("90%")]),t._v(".")]),t._v(" "),s("p",[t._v("If you wanted to scale this number up, for instance, start at 5% for 60 minutes and then increase the value by 5% until the traffic reaches 50% for that slot. You could do so with this script.")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyQuizApplication"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WindowsAzure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utilities"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Websites"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebEntities"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RampUpRule\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActionHostName = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v('-staging.azurewebsites.net"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReroutePercentage = 5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stage"')]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeIntervalInMinutes = 60"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeStep = 5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MinReroutePercentage = 5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MaxReroutePercentage = 50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeDecisionCallbackUrl = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$null")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AzureWebsite "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$siteName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Slot Production "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RoutingRules "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule1")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("Notice that we only changed 5 lines here to get that functionality.")])])},[],!1,null,null,null);e.default=r.exports}}]);