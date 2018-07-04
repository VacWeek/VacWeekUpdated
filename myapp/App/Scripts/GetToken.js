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