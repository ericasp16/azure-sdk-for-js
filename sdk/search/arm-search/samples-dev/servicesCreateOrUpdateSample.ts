/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SearchService, SearchManagementClient } from "@azure/arm-search";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 *
 * @summary Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2023-11-01/examples/SearchCreateOrUpdateService.json
 */
async function searchCreateOrUpdateService() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const service: SearchService = {
    hostingMode: "default",
    location: "westus",
    partitionCount: 1,
    replicaCount: 3,
    sku: { name: "standard" },
    tags: { appName: "My e-commerce app" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    searchServiceName,
    service
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 *
 * @summary Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2023-11-01/examples/SearchCreateOrUpdateServiceAuthOptions.json
 */
async function searchCreateOrUpdateServiceAuthOptions() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const service: SearchService = {
    authOptions: {
      aadOrApiKey: { aadAuthFailureMode: "http401WithBearerChallenge" }
    },
    hostingMode: "default",
    location: "westus",
    partitionCount: 1,
    replicaCount: 3,
    sku: { name: "standard" },
    tags: { appName: "My e-commerce app" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    searchServiceName,
    service
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 *
 * @summary Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2023-11-01/examples/SearchCreateOrUpdateServiceDisableLocalAuth.json
 */
async function searchCreateOrUpdateServiceDisableLocalAuth() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const service: SearchService = {
    disableLocalAuth: true,
    hostingMode: "default",
    location: "westus",
    partitionCount: 1,
    replicaCount: 3,
    sku: { name: "standard" },
    tags: { appName: "My e-commerce app" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    searchServiceName,
    service
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 *
 * @summary Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2023-11-01/examples/SearchCreateOrUpdateServiceToAllowAccessFromPrivateEndpoints.json
 */
async function searchCreateOrUpdateServiceToAllowAccessFromPrivateEndpoints() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const service: SearchService = {
    hostingMode: "default",
    location: "westus",
    partitionCount: 1,
    publicNetworkAccess: "disabled",
    replicaCount: 3,
    sku: { name: "standard" },
    tags: { appName: "My e-commerce app" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    searchServiceName,
    service
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 *
 * @summary Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2023-11-01/examples/SearchCreateOrUpdateServiceToAllowAccessFromPublicCustomIPs.json
 */
async function searchCreateOrUpdateServiceToAllowAccessFromPublicCustomIPs() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const service: SearchService = {
    hostingMode: "default",
    location: "westus",
    networkRuleSet: {
      ipRules: [{ value: "123.4.5.6" }, { value: "123.4.6.0/18" }]
    },
    partitionCount: 1,
    replicaCount: 1,
    sku: { name: "standard" },
    tags: { appName: "My e-commerce app" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    searchServiceName,
    service
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 *
 * @summary Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2023-11-01/examples/SearchCreateOrUpdateServiceWithCmkEnforcement.json
 */
async function searchCreateOrUpdateServiceWithCmkEnforcement() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const service: SearchService = {
    encryptionWithCmk: { enforcement: "Enabled" },
    hostingMode: "default",
    location: "westus",
    partitionCount: 1,
    replicaCount: 3,
    sku: { name: "standard" },
    tags: { appName: "My e-commerce app" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    searchServiceName,
    service
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 *
 * @summary Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2023-11-01/examples/SearchCreateOrUpdateServiceWithIdentity.json
 */
async function searchCreateOrUpdateServiceWithIdentity() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const service: SearchService = {
    hostingMode: "default",
    identity: { type: "SystemAssigned" },
    location: "westus",
    partitionCount: 1,
    replicaCount: 3,
    sku: { name: "standard" },
    tags: { appName: "My e-commerce app" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    searchServiceName,
    service
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 *
 * @summary Creates or updates a search service in the given resource group. If the search service already exists, all properties will be updated with the given values.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2023-11-01/examples/SearchCreateOrUpdateWithSemanticSearch.json
 */
async function searchCreateOrUpdateWithSemanticSearch() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const service: SearchService = {
    hostingMode: "default",
    location: "westus",
    partitionCount: 1,
    replicaCount: 3,
    semanticSearch: "free",
    sku: { name: "standard" },
    tags: { appName: "My e-commerce app" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.services.beginCreateOrUpdateAndWait(
    resourceGroupName,
    searchServiceName,
    service
  );
  console.log(result);
}

async function main() {
  searchCreateOrUpdateService();
  searchCreateOrUpdateServiceAuthOptions();
  searchCreateOrUpdateServiceDisableLocalAuth();
  searchCreateOrUpdateServiceToAllowAccessFromPrivateEndpoints();
  searchCreateOrUpdateServiceToAllowAccessFromPublicCustomIPs();
  searchCreateOrUpdateServiceWithCmkEnforcement();
  searchCreateOrUpdateServiceWithIdentity();
  searchCreateOrUpdateWithSemanticSearch();
}

main().catch(console.error);
