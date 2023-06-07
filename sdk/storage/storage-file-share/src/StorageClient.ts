// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StorageClient as StorageClientContext } from "./generated/src/";
import { StorageContextClient } from "./StorageContextClient";
import {
  Pipeline,
  getCoreClientOptions,
  getCredentialFromPipeline,
} from "../../storage-blob/src/Pipeline";
import { escapeURLPath, getAccountNameFromUrl } from "./utils/utils.common";
import { isTokenCredential } from "@azure/core-auth";
import { OperationTracingOptions } from "@azure/core-tracing";
import { AnonymousCredential } from "../../storage-blob/src/credentials/AnonymousCredential";
import { StorageSharedKeyCredential } from "../../storage-blob/src/credentials/StorageSharedKeyCredential";
import { HttpClient } from "@azure/core-rest-pipeline";

let testOnlyHttpClient: HttpClient | undefined;
/**
 * @internal
 * Set a custom default http client for testing purposes
 */
export function setTestOnlySetHttpClient(httpClient: HttpClient): void {
  testOnlyHttpClient = httpClient;
}
/**
 * An interface for options common to every remote operation.
 */
export interface CommonOptions {
  tracingOptions?: OperationTracingOptions;
}

/**
 * A StorageClient represents a base client class for ServiceClient, ContainerClient and etc.
 */
export abstract class StorageClient {
  /**
   * URL string value.
   */
  public readonly url: string;
  public readonly accountName: string;

  /**
   * Request policy pipeline.
   *
   * @internal
   */
  protected readonly pipeline: Pipeline;

  /**
   * Credential in the pipeline to authenticate requests to the service, such as AnonymousCredential, StorageSharedKeyCredential.
   * Initialized to an AnonymousCredential if not able to retrieve it from the pipeline.
   *
   * @internal
   */
  protected readonly credential: StorageSharedKeyCredential | AnonymousCredential;

  /**
   * StorageClient is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   */
  protected readonly storageClientContext: StorageClientContext;

  /**
   * Creates an instance of StorageClient.
   * @param url -
   * @param pipeline -
   */
  protected constructor(url: string, pipeline: Pipeline) {
    // URL should be encoded and only once, protocol layer shouldn't encode URL again
    this.url = escapeURLPath(url);
    this.accountName = getAccountNameFromUrl(url);

    this.pipeline = pipeline;
    const coreOptions = getCoreClientOptions(pipeline);
    if (testOnlyHttpClient) {
      coreOptions.httpClient = testOnlyHttpClient;
    }
    this.storageClientContext = new StorageContextClient(this.url, coreOptions);
    // Remove the default content-type in generated code of StorageClientContext
    const storageClientContext = this.storageClientContext as any;
    if (storageClientContext.requestContentType) {
      storageClientContext.requestContentType = undefined;
    }

    const credential = getCredentialFromPipeline(pipeline);
    if (isTokenCredential(credential)) {
      throw new Error("Unsupported TokenCredential type found in pipeline.");
    }
    this.credential = credential;
  }
}
