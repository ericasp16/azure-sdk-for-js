/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  DatadogSingleSignOnResource,
  SingleSignOnConfigurationsListOptionalParams,
  SingleSignOnConfigurationsCreateOrUpdateOptionalParams,
  SingleSignOnConfigurationsCreateOrUpdateResponse,
  SingleSignOnConfigurationsGetOptionalParams,
  SingleSignOnConfigurationsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SingleSignOnConfigurations. */
export interface SingleSignOnConfigurations {
  /**
   * List the single sign-on configurations for a given monitor resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    monitorName: string,
    options?: SingleSignOnConfigurationsListOptionalParams
  ): PagedAsyncIterableIterator<DatadogSingleSignOnResource>;
  /**
   * Configures single-sign-on for this resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param configurationName Configuration name
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    options?: SingleSignOnConfigurationsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SingleSignOnConfigurationsCreateOrUpdateResponse>,
      SingleSignOnConfigurationsCreateOrUpdateResponse
    >
  >;
  /**
   * Configures single-sign-on for this resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param configurationName Configuration name
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    options?: SingleSignOnConfigurationsCreateOrUpdateOptionalParams
  ): Promise<SingleSignOnConfigurationsCreateOrUpdateResponse>;
  /**
   * Gets the datadog single sign-on resource for the given Monitor.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param configurationName Configuration name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    options?: SingleSignOnConfigurationsGetOptionalParams
  ): Promise<SingleSignOnConfigurationsGetResponse>;
}
