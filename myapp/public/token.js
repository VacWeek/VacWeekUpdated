    import { Msal } from "./msal";
    window.alert("hey it runs")
    var applicationConfig = {
            clientID: 'af4bf8cf-c789-4e0d-8d22-c0028c419bf1',
            graphScopes: ["user.read", "mail.send"]
        };
		
        var logger = new Msal.Logger(loggerCallback, { level: Msal.LogLevel.Verbose, correlationId:'12345' }); // level and correlationId are optional parameters.
		//Logger has other optional parameters like piiLoggingEnabled which can be assigned as shown aabove. Please refer to the docs to see the full list and their default values.
		
        function loggerCallback(logLevel, message, piiLoggingEnabled) {
            console.log(message);
        }

        var userAgentApplication = new Msal.UserAgentApplication(applicationConfig.clientID, null, authCallback, { logger: logger, cacheLocation: 'localStorage'}); //logger and cacheLocation are optional parameters.
		//userAgentApplication has other optional parameters like redirectUri which can be assigned as shown above.Please refer to the docs to see the full list and their default values.
        function authCallback(errorDesc, token, error, tokenType) {
            if (token) {
            }
            else {
                log(error + ":" + errorDesc);
            }
        }
    
    //Then, once the user is logged-in, get an access token
    
    userAgentApplication.loginPopup(applicationConfig.graphScopes).then(function (idToken) {
                //Login Success
                userAgentApplication.acquireTokenSilent(applicationConfig.graphScopes).then(function (accessToken) {
                    //AcquireToken Success
                }, function (error) {
                    //AcquireToken Failure, send an interactive request.
                    userAgentApplication.acquireTokenPopup(applicationConfig.graphScopes).then(function (accessToken) {
                        updateUI();
                    }, function (error) {
                        console.log(error);
                    });
                })
            }, function (error) {
                console.log(error);
            });
