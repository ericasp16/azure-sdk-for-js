// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { env, isLiveMode, isRecordMode } from "@azure-tools/test-recorder";
import { v4 as uuidv4, v5 as uuidv5 } from "uuid";
import { CallingServerClient, CallConnection, GroupCallLocator } from "../../../src";
import { CommunicationIdentityClient } from "@azure/communication-identity";
import * as Constants from "../utils/constants";

export class TestUtils {
  private static delay(ms: number): Promise<NodeJS.Timeout> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public static async getUserId(userName: string, connectionString: string): Promise<string> {
    const communicationIdentityClient = new CommunicationIdentityClient(connectionString);
    const tenant_id = env.COMMUNICATION_LIVETEST_STATIC_RESOURCE_IDENTIFIER || "016a7064-0581-40b9-be73-6dde64d69d72";

    if (!isLiveMode()) {
      return "8:acs:" + tenant_id + "_" + uuidv5(userName, Constants.NAMESPACE_UUID);
    }

    return (await communicationIdentityClient.createUser()).communicationUserId;
  }

  public static getGroupId(testName: string): string {
    if (isLiveMode()) {
      return uuidv4();
    }
    return uuidv5(testName, Constants.NAMESPACE_UUID);
  }

  public static async createCallConnections(
    callingServerClient: CallingServerClient,
    groupId: string,
    fromUser: string,
    toUser: string
  ): Promise<CallConnection[]> {
    const joinCallOptions = {
      callbackUri: Constants.CALLBACK_URI,
      requestedMediaTypes: ["audio"],
      requestedCallEvents: ["participantsUpdated"]
    };
    const callLocator: GroupCallLocator = { groupCallId: groupId };
    const callConnections = [];
    callConnections.push(
      await callingServerClient.joinCall(
        callLocator,
        { communicationUserId: fromUser },
        joinCallOptions
      )
    );
    callConnections.push(
      await callingServerClient.joinCall(
        callLocator,
        { communicationUserId: toUser },
        joinCallOptions
      )
    );
    return callConnections;
  }

  public static async delayIfLive(): Promise<void> {
    if (isLiveMode() || isRecordMode()) {
      await this.delay(10000);
    }
  }

  public static async cleanCallConnections(callConnections: Array<CallConnection>): Promise<void> {
    for (const callConnection of callConnections) {
      await callConnection.hangUp();
    }
  }
}
