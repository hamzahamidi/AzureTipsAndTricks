(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{569:function(e,t,n){"use strict";n.r(t);var r=n(43),i=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("🦄 Follow me on Twitter for daily software updates and a chance to get "),n("strong",[e._v("FREE Azure sticker")]),e._v(" set shipped anywhere!")]),e._v(" "),n("p",[e._v("🦄 Follow me on "),n("a",{attrs:{href:"https://twitter.com/intent/follow?screen_name=mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),n("OutboundLink")],1),e._v(" for daily software updates.")]),e._v(" "),n("p",[e._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/event-grid/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Event Grid overview"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("📺 Watch the video : "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=VTVqV0hZ1EQ&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=4&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use Azure SignalR Service and Event Grid walkthrough"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"serverless-signalr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#serverless-signalr","aria-hidden":"true"}},[e._v("#")]),e._v(" Serverless SignalR")]),e._v(" "),n("p",[e._v("You can use "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-signalr/signalr-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SignalR Service"),n("OutboundLink")],1),e._v(" to send messages to connected clients and create real-time applications. You can also use Azure SignalR Service in a "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-signalr/signalr-quickstart-azure-functions-javascript?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("serverless mode"),n("OutboundLink")],1),e._v(", which means that you don't have a SignalR server that always runs, but that you can directly send messages to clients through the "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-signalr/signalr-quickstart-rest-api?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API"),n("OutboundLink")],1),e._v(" or the "),n("a",{attrs:{href:"https://www.nuget.org/packages/Microsoft.Azure.SignalR.Management/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("SignalR Management SDK"),n("OutboundLink")],1),e._v(". Running SignalR in serverless mode is great, because you don't have to worry about maintaining the SignalR server and because it scales automatically. But when you run in serverless mode, you don't have access to client events, like the "),n("a",{attrs:{href:"https://docs.microsoft.com/previous-versions/aspnet/jj890472(v%3Dvs.118)?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("OnConnected() event"),n("OutboundLink")],1),e._v(", which tells you that a client has just connected to the SignalR Hub.")]),e._v(" "),n("p",[e._v("There is a way to get client events like "),n("strong",[e._v("OnConnected()")]),e._v(" when you run in serverless mode. SignalR Service can send client events to an "),n("a",{attrs:{href:"https://azure.microsoft.com/services/event-grid/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Event Grid"),n("OutboundLink")],1),e._v(", so that you can subscribe to those events and respond to them.")]),e._v(" "),n("p",[e._v("In this post, we'll use an Azure SignalR Service in serverless mode, together with an "),n("a",{attrs:{href:"https://azure.microsoft.com/services/functions/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Function"),n("OutboundLink")],1),e._v(", and subscribe to client events with an Azure Event Grid.")]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),n("ul",[n("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),n("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),n("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),n("li",[e._v("The latest version of the "),n("a",{attrs:{href:"https://dotnet.microsoft.com/download?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core runtime"),n("OutboundLink")],1),e._v(" installed on your local machine")])]),e._v(" "),n("h2",{attrs:{id:"use-azure-signalr-service-with-azure-event-grid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-azure-signalr-service-with-azure-event-grid","aria-hidden":"true"}},[e._v("#")]),e._v(" Use Azure SignalR Service with Azure Event Grid")]),e._v(" "),n("p",[e._v("Let's get started! First, we need to create an Azure SignalR Service that runs in serverless mode:")]),e._v(" "),n("ol",[n("li",[e._v("Go to the "),n("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Click the "),n("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),n("li",[e._v("Search for "),n("strong",[e._v("SignalR")]),e._v(" and click on the result to start creating one\na. This brings you to the create blade of Azure SignalR Service\nb. Select a "),n("strong",[e._v("Resource Group")]),e._v(" (or create a new one)\nc. Fill in a "),n("strong",[e._v("name")]),e._v(" for the service in the "),n("strong",[e._v("Resource Name")]),e._v(" field\nd. Select a "),n("strong",[e._v("Pricing tier")]),e._v(". The "),n("strong",[e._v("Free")]),e._v(" tier is fine for this example\ne. Make sure to select "),n("strong",[e._v("Serverless")]),e._v(" for the "),n("strong",[e._v("ServiceMode")]),e._v("\nf. Click "),n("strong",[e._v("Review + create")]),e._v(" and "),n("strong",[e._v("Create")]),e._v(" after that, to create the SignalR Service")])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/40createsignalr.png")}}),e._v(" "),n("p",[e._v("(Create Azure SignalR Service in the Azure portal)")]),e._v(" "),n("p",[e._v("Next, we need to create an Azure Function that will receive the OnConnected() and OnDisConnected() client events from Azure Event Grid. To do that, we first need to create an Azure Function App:")]),e._v(" "),n("ol",[n("li",[e._v("In the Azure portal, click the "),n("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),n("li",[e._v("Search for "),n("strong",[e._v("Function App")]),e._v(" and click on the result to start creating one\na. This brings you to the create blade of Azure Function\nb. Type in a "),n("strong",[e._v("name")]),e._v(" for the Function App\nc. Select a "),n("strong",[e._v("Resource Group")]),e._v(" (or create a new one)\nd. Leave the rest as it is and click "),n("strong",[e._v("Create")]),e._v(" to create the Function App")])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/40createfunctionapp.png")}}),e._v(" "),n("p",[e._v("(Create Azure Function in the Azure portal)")]),e._v(" "),n("p",[e._v("When the Function App is created, we need to create an Azure Function in it and configure it to be triggered by Azure Event Grid:")]),e._v(" "),n("ol",[n("li",[e._v("In the Azure portal, in the Function App, click the "),n("strong",[e._v("plus-sign")]),e._v(" next to "),n("strong",[e._v('"Functions"')]),e._v(" to start creating a new Azure Function")]),e._v(" "),n("li",[e._v("Select "),n("strong",[e._v("In-portal")]),e._v(" for the "),n("strong",[e._v("Development Environment")]),e._v(" and click "),n("strong",[e._v("Continue")]),e._v(". This will allow us to write the code for the Azure Function in the Azure portal")]),e._v(" "),n("li",[e._v("In the next screen, select "),n("strong",[e._v("More templates...")]),e._v(" and click "),n("strong",[e._v("Finish and view templates")])]),e._v(" "),n("li",[e._v("Now search for "),n("strong",[e._v('"Event Grid"')]),e._v(" and select the "),n("strong",[e._v("Azure Event Grid trigger")])])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/40eventtrigger.png")}}),e._v(" "),n("p",[e._v("(Event Grid trigger for the Azure Function)")]),e._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[e._v("It will ask to install the Event Grid extension into the Azure Function. Click "),n("strong",[e._v("Install")]),e._v(" to do this and click "),n("strong",[e._v("Continue")]),e._v(" when it is finished")]),e._v(" "),n("li",[e._v("Give your Function a "),n("strong",[e._v("name")]),e._v(" and click "),n("strong",[e._v("Create")])]),e._v(" "),n("li",[e._v("Now that the Azure Function is created, we need to configure the Event Grid subscription for it. Click "),n("strong",[e._v("Add Event Grid subscription")]),e._v(" to fill in the subscription details")])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/40addeventgridsubscription.png")}}),e._v(" "),n("p",[e._v("(Add Event Grid subscription to Azure Function)")]),e._v(" "),n("p",[e._v("a. Fill in a "),n("strong",[e._v("Name")]),e._v(" for the subscription\nb. For "),n("strong",[e._v("Topic Types")]),e._v(", select "),n("strong",[e._v("Azure SignalR Service")]),e._v("\nc. Select the "),n("strong",[e._v("Subscription")]),e._v(" that contains the Azure SignalR Service\nd. Select the "),n("strong",[e._v("Resource Group")]),e._v(" that contains the Azure SignalR Service\ne. And finally, select the "),n("strong",[e._v("SignalR Service")]),e._v("\nf. Click "),n("strong",[e._v("Create")]),e._v(" to create the subscription")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/40eventgridsubscription.png")}}),e._v(" "),n("p",[e._v("(Configure Event Grid subscription in the Azure portal)")]),e._v(" "),n("ol",{attrs:{start:"8"}},[n("li",[e._v("The Function will now be triggered whenever the client events OnConnected() or OnDisConnected() are sent by the Event Grid. To make sure that we can see which event triggered the Function, we'll add an additional line of code to the Function, to make the code of the Function look like this:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('#r "Microsoft.Azure.EventGrid"\nusing Microsoft.Azure.EventGrid.Models;\n\npublic static void Run(EventGridEvent eventGridEvent, ILogger log)\n{\n    log.LogInformation(eventGridEvent.EventType);\n    log.LogInformation(eventGridEvent.Data.ToString());\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("Let's test it! If we connect or disconnect a client to the hub of the Azure SignalR Service, the Azure Function will be triggered by the Event Grid. We can do that by using a sample application:")]),e._v(" "),n("ol",[n("li",[e._v("Go to "),n("a",{attrs:{href:"https://github.com/aspnet/AzureSignalR-samples?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/aspnet/AzureSignalR-samples"),n("OutboundLink")],1),e._v(" and clone or download it, so that you have the code on your computer")]),e._v(" "),n("li",[e._v("Open a command prompt in the "),n("strong",[e._v("AzureSignalR-samples-master")]),e._v(" directory")]),e._v(" "),n("li",[e._v("Start the sample negotiation server application with the code below. You can find the SignalR connection string in the "),n("strong",[e._v("Keys")]),e._v(" menu of the Azure SignalR Service in the Azure portal")])]),e._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd samples\\Management\\NegotiationServer\nset Azure__SignalR__ConnectionString=<your_signalr_connection_string>\ndotnet run\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Now open another command prompt in the "),n("strong",[e._v("AzureSignalR-samples-master")]),e._v(" directory and run the sample SignalR client with the following code. This will connect a client to the SignalR hub")])]),e._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cd samples\\Management\\SignalRClient\ndotnet run\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[e._v("Go to the Azure Function in the Azure portal and look at the logs. You'll see an event of the type "),n("strong",[e._v("Microsoft.SignalRService.ClientConnectionConnected")]),e._v(", which means that a client just connected to the hub")])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/40result.png")}}),e._v(" "),n("p",[e._v("(Result of the client connecting to the SignalR hub)")]),e._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[e._v("Close the command prompt where you are running the SignalR client in. This will disconnect the client from the hub")]),e._v(" "),n("li",[e._v("Check the logs of the Azure Function again. You'll see another event that tells you that the client disconnected")])]),e._v(" "),n("h2",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[e._v("Using "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-signalr/signalr-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SignalR Service"),n("OutboundLink")],1),e._v(" in a serverless mode provides a lot of advantages but cuts out some functionality. You can add this functionality back by using "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-signalr/signalr-howto-event-grid-integration?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Event Grid to publish SignalR client events"),n("OutboundLink")],1),e._v(". Go and check it out!")]),e._v(" "),n("h4",{attrs:{id:"if-you-want-to-stay-connected-with-me-for-daily-software-development-news-then-follow-me-on-a-social-platform-below-it-means-a-lot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if-you-want-to-stay-connected-with-me-for-daily-software-development-news-then-follow-me-on-a-social-platform-below-it-means-a-lot","aria-hidden":"true"}},[e._v("#")]),e._v(" If you want to stay connected with me for daily software development news, then follow me on a social platform below. It means a lot!")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://twitter.com/intent/follow?screen_name=mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitch.tv/mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitch"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://instagram.com/mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("Instagram"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),n("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=i.exports}}]);