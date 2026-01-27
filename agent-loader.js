try {
    const onenodeloader = require("/home/labuser/agent/test/node/build/product/agent/bin/any/onenodeloader.js");
    const options = {
        server: "https://abl8406h.sprint.dynatracelabs.com:443",
        tenantToken: "hztkewFIuoBsXrjA",
        tenant: "abl8406h",
        periodictaskintervalms: "250",
        httpconnecttimeoutms: "6000",
        httpchecktimeoutms: "5000",
        httpshorttimeoutms: "12000",
        agentName: "LiveDebuggerDemo",
        loglevelcon: "info",
        debugEnableStopAggregationBySerializationNative: false,
        useMultiversionLibrary: true,
        debugNodelivedebuggingSensorNodeJS: true,
    };

    onenodeloader(options);
} catch (err) {
    console.log(err);
}