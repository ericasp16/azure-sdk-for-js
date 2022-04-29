/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to List Remote Rendering Accounts by Subscription
 *
 * @summary List Remote Rendering Accounts by Subscription
 * x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/remote-rendering/GetBySubscription.json
 */
import { MixedRealityClient } from "@azure/arm-mixedreality";
import { DefaultAzureCredential } from "@azure/identity";

async function listRemoteRenderingAccountsBySubscription() {
  const subscriptionId = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  const credential = new DefaultAzureCredential();
  const client = new MixedRealityClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.remoteRenderingAccounts.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listRemoteRenderingAccountsBySubscription().catch(console.error);