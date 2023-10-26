/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { TagRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftDatadogClient } from "../microsoftDatadogClient";
import {
  MonitoringTagRules,
  TagRulesListNextOptionalParams,
  TagRulesListOptionalParams,
  TagRulesListResponse,
  TagRulesCreateOrUpdateOptionalParams,
  TagRulesCreateOrUpdateResponse,
  TagRulesGetOptionalParams,
  TagRulesGetResponse,
  TagRulesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TagRules operations. */
export class TagRulesImpl implements TagRules {
  private readonly client: MicrosoftDatadogClient;

  /**
   * Initialize a new instance of the class TagRules class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftDatadogClient) {
    this.client = client;
  }

  /**
   * List the tag rules for a given monitor resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    monitorName: string,
    options?: TagRulesListOptionalParams
  ): PagedAsyncIterableIterator<MonitoringTagRules> {
    const iter = this.listPagingAll(resourceGroupName, monitorName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          monitorName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    monitorName: string,
    options?: TagRulesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<MonitoringTagRules[]> {
    let result: TagRulesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, monitorName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        monitorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    monitorName: string,
    options?: TagRulesListOptionalParams
  ): AsyncIterableIterator<MonitoringTagRules> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      monitorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List the tag rules for a given monitor resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    monitorName: string,
    options?: TagRulesListOptionalParams
  ): Promise<TagRulesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, options },
      listOperationSpec
    );
  }

  /**
   * Create or update a tag rule set for a given monitor resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param ruleSetName Rule set name
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    options?: TagRulesCreateOrUpdateOptionalParams
  ): Promise<TagRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, ruleSetName, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Get a tag rule set for a given monitor resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param ruleSetName Rule set name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    monitorName: string,
    ruleSetName: string,
    options?: TagRulesGetOptionalParams
  ): Promise<TagRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, ruleSetName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    monitorName: string,
    nextLink: string,
    options?: TagRulesListNextOptionalParams
  ): Promise<TagRulesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/tagRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringTagRulesListResponse
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
    Parameters.monitorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/tagRules/{ruleSetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringTagRules
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName,
    Parameters.ruleSetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/tagRules/{ruleSetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringTagRules
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
    Parameters.monitorName,
    Parameters.ruleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringTagRulesListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.monitorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
