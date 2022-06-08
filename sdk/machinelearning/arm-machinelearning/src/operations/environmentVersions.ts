/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EnvironmentVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspaces } from "../azureMachineLearningWorkspaces";
import {
  EnvironmentVersionData,
  EnvironmentVersionsListNextOptionalParams,
  EnvironmentVersionsListOptionalParams,
  EnvironmentVersionsListResponse,
  EnvironmentVersionsDeleteOptionalParams,
  EnvironmentVersionsGetOptionalParams,
  EnvironmentVersionsGetResponse,
  EnvironmentVersionsCreateOrUpdateOptionalParams,
  EnvironmentVersionsCreateOrUpdateResponse,
  EnvironmentVersionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EnvironmentVersions operations. */
export class EnvironmentVersionsImpl implements EnvironmentVersions {
  private readonly client: AzureMachineLearningWorkspaces;

  /**
   * Initialize a new instance of the class EnvironmentVersions class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningWorkspaces) {
    this.client = client;
  }

  /**
   * List versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: EnvironmentVersionsListOptionalParams
  ): PagedAsyncIterableIterator<EnvironmentVersionData> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      name,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          workspaceName,
          name,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: EnvironmentVersionsListOptionalParams
  ): AsyncIterableIterator<EnvironmentVersionData[]> {
    let result = await this._list(
      resourceGroupName,
      workspaceName,
      name,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        name,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: EnvironmentVersionsListOptionalParams
  ): AsyncIterableIterator<EnvironmentVersionData> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      name,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: EnvironmentVersionsListOptionalParams
  ): Promise<EnvironmentVersionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, options },
      listOperationSpec
    );
  }

  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: EnvironmentVersionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, version, options },
      deleteOperationSpec
    );
  }

  /**
   * Get version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: EnvironmentVersionsGetOptionalParams
  ): Promise<EnvironmentVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, version, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an EnvironmentVersion.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Name of EnvironmentVersion. This is case-sensitive.
   * @param version Version of EnvironmentVersion.
   * @param body Definition of EnvironmentVersion.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: EnvironmentVersionData,
    options?: EnvironmentVersionsCreateOrUpdateOptionalParams
  ): Promise<EnvironmentVersionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, version, body, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    nextLink: string,
    options?: EnvironmentVersionsListNextOptionalParams
  ): Promise<EnvironmentVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentVersionResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.orderBy,
    Parameters.top,
    Parameters.listViewType
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}/versions/{version}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name,
    Parameters.version
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}/versions/{version}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentVersionData
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name,
    Parameters.version
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}/versions/{version}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentVersionData
    },
    201: {
      bodyMapper: Mappers.EnvironmentVersionData
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name1,
    Parameters.version
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentVersionResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.orderBy,
    Parameters.top,
    Parameters.listViewType
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};