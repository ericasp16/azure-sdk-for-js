/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SearchManagementClient } from "@azure/arm-search";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a list of all supported private link resource types for the given service.
 *
 * @summary Gets a list of all supported private link resource types for the given service.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2023-11-01/examples/ListSupportedPrivateLinkResources.json
 */
async function listSupportedPrivateLinkResources() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateLinkResources.listSupported(
    resourceGroupName,
    searchServiceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listSupportedPrivateLinkResources();
}

main().catch(console.error);
