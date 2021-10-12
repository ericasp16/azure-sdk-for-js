/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/kustoPoolAttachedDatabaseConfigurationsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a KustoPoolAttachedDatabaseConfigurations. */
export class KustoPoolAttachedDatabaseConfigurations {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a KustoPoolAttachedDatabaseConfigurations.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns the list of attached database configurations of the given Kusto Pool.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.KustoPoolAttachedDatabaseConfigurationsListByKustoPoolResponse>
   */
  listByKustoPool(workspaceName: string, kustoPoolName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.KustoPoolAttachedDatabaseConfigurationsListByKustoPoolResponse>;
  /**
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByKustoPool(workspaceName: string, kustoPoolName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.AttachedDatabaseConfigurationListResult>): void;
  /**
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByKustoPool(workspaceName: string, kustoPoolName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttachedDatabaseConfigurationListResult>): void;
  listByKustoPool(workspaceName: string, kustoPoolName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttachedDatabaseConfigurationListResult>, callback?: msRest.ServiceCallback<Models.AttachedDatabaseConfigurationListResult>): Promise<Models.KustoPoolAttachedDatabaseConfigurationsListByKustoPoolResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        kustoPoolName,
        resourceGroupName,
        options
      },
      listByKustoPoolOperationSpec,
      callback) as Promise<Models.KustoPoolAttachedDatabaseConfigurationsListByKustoPoolResponse>;
  }

  /**
   * Returns an attached database configuration.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.KustoPoolAttachedDatabaseConfigurationsGetResponse>
   */
  get(workspaceName: string, kustoPoolName: string, attachedDatabaseConfigurationName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.KustoPoolAttachedDatabaseConfigurationsGetResponse>;
  /**
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  get(workspaceName: string, kustoPoolName: string, attachedDatabaseConfigurationName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.AttachedDatabaseConfiguration>): void;
  /**
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(workspaceName: string, kustoPoolName: string, attachedDatabaseConfigurationName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AttachedDatabaseConfiguration>): void;
  get(workspaceName: string, kustoPoolName: string, attachedDatabaseConfigurationName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AttachedDatabaseConfiguration>, callback?: msRest.ServiceCallback<Models.AttachedDatabaseConfiguration>): Promise<Models.KustoPoolAttachedDatabaseConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        kustoPoolName,
        attachedDatabaseConfigurationName,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.KustoPoolAttachedDatabaseConfigurationsGetResponse>;
  }

  /**
   * Creates or updates an attached database configuration.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The database parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.KustoPoolAttachedDatabaseConfigurationsCreateOrUpdateResponse>
   */
  createOrUpdate(workspaceName: string, kustoPoolName: string, attachedDatabaseConfigurationName: string, resourceGroupName: string, parameters: Models.AttachedDatabaseConfiguration, options?: msRest.RequestOptionsBase): Promise<Models.KustoPoolAttachedDatabaseConfigurationsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(workspaceName,kustoPoolName,attachedDatabaseConfigurationName,resourceGroupName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.KustoPoolAttachedDatabaseConfigurationsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the attached database configuration with the given name.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(workspaceName: string, kustoPoolName: string, attachedDatabaseConfigurationName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(workspaceName,kustoPoolName,attachedDatabaseConfigurationName,resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates an attached database configuration.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The database parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(workspaceName: string, kustoPoolName: string, attachedDatabaseConfigurationName: string, resourceGroupName: string, parameters: Models.AttachedDatabaseConfiguration, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        workspaceName,
        kustoPoolName,
        attachedDatabaseConfigurationName,
        resourceGroupName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the attached database configuration with the given name.
   * @param workspaceName The name of the workspace
   * @param kustoPoolName The name of the Kusto pool.
   * @param attachedDatabaseConfigurationName The name of the attached database configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(workspaceName: string, kustoPoolName: string, attachedDatabaseConfigurationName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        workspaceName,
        kustoPoolName,
        attachedDatabaseConfigurationName,
        resourceGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByKustoPoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/attachedDatabaseConfigurations",
  urlParameters: [
    Parameters.workspaceName,
    Parameters.kustoPoolName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AttachedDatabaseConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}",
  urlParameters: [
    Parameters.workspaceName,
    Parameters.kustoPoolName,
    Parameters.attachedDatabaseConfigurationName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AttachedDatabaseConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}",
  urlParameters: [
    Parameters.workspaceName,
    Parameters.kustoPoolName,
    Parameters.attachedDatabaseConfigurationName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AttachedDatabaseConfiguration,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AttachedDatabaseConfiguration
    },
    201: {
      bodyMapper: Mappers.AttachedDatabaseConfiguration
    },
    202: {
      bodyMapper: Mappers.AttachedDatabaseConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}",
  urlParameters: [
    Parameters.workspaceName,
    Parameters.kustoPoolName,
    Parameters.attachedDatabaseConfigurationName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
