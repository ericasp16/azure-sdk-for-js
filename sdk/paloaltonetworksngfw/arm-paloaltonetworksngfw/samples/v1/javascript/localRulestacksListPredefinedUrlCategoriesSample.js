/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PaloAltoNetworksCloudngfw } = require("@azure/arm-paloaltonetworksngfw");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List predefined URL categories for rulestack
 *
 * @summary List predefined URL categories for rulestack
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2022-08-29/examples/LocalRulestacks_listPredefinedUrlCategories_MaximumSet_Gen.json
 */
async function localRulestacksListPredefinedUrlCategoriesMaximumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName = process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "rgopenapi";
  const localRulestackName = "lrs1";
  const skip = "a6a321";
  const top = 20;
  const options = {
    skip,
    top,
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.localRulestacks.listPredefinedUrlCategories(
    resourceGroupName,
    localRulestackName,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to List predefined URL categories for rulestack
 *
 * @summary List predefined URL categories for rulestack
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2022-08-29/examples/LocalRulestacks_listPredefinedUrlCategories_MinimumSet_Gen.json
 */
async function localRulestacksListPredefinedUrlCategoriesMinimumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName = process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "rgopenapi";
  const localRulestackName = "lrs1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.localRulestacks.listPredefinedUrlCategories(
    resourceGroupName,
    localRulestackName
  );
  console.log(result);
}

async function main() {
  localRulestacksListPredefinedUrlCategoriesMaximumSetGen();
  localRulestacksListPredefinedUrlCategoriesMinimumSetGen();
}

main().catch(console.error);
