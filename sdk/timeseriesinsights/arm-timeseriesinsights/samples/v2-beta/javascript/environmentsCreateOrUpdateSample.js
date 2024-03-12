/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { TimeSeriesInsightsClient } = require("@azure/arm-timeseriesinsights");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update an environment in the specified subscription and resource group.
 *
 * @summary Create or update an environment in the specified subscription and resource group.
 * x-ms-original-file: specification/timeseriesinsights/resource-manager/Microsoft.TimeSeriesInsights/preview/2021-03-31-preview/examples/EnvironmentsCreate.json
 */
async function environmentsCreate() {
  const subscriptionId = process.env["TIMESERIESINSIGHTS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["TIMESERIESINSIGHTS_RESOURCE_GROUP"] || "rg1";
  const environmentName = "env1";
  const parameters = {
    dataRetentionTime: "P31D",
    kind: "Gen1",
    location: "West US",
    partitionKeyProperties: [{ name: "DeviceId1", type: "String" }],
    sku: { name: "S1", capacity: 1 },
  };
  const credential = new DefaultAzureCredential();
  const client = new TimeSeriesInsightsClient(credential, subscriptionId);
  const result = await client.environments.beginCreateOrUpdateAndWait(
    resourceGroupName,
    environmentName,
    parameters,
  );
  console.log(result);
}

async function main() {
  environmentsCreate();
}

main().catch(console.error);
