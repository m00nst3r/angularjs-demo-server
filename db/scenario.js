var scenario = {
    "RiskScenario":{
        id: 1,
        name: "Scenario 1",
        factors:[
            {
                id: 1,
                level: "Large",
                riskName: "rName",
                scope: {
                    COUNTRY: ['AB', 'CD']
                }
            },
            {
                id: 2,
                level: "Large+",
                riskName: "CoolName",
                scope: {
                    COUNTRY: ['AB', 'CD'],
                    CITY: ['EF']
                }
            },
            {
                id: 3,
                level: "Large+",
                riskName: "Empty",
                scope: {}
            }
        ]
    }
};

module.exports = scenario;