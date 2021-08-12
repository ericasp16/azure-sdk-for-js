/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  RecordSet as RecordSetMapper,
  Zone as ZoneMapper,
  ZoneUpdate as ZoneUpdateMapper,
  DnsResourceReferenceRequest as DnsResourceReferenceRequestMapper
} from "./mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: RecordSetMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const zoneName: OperationURLParameter = {
  parameterPath: "zoneName",
  mapper: {
    serializedName: "zoneName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const relativeRecordSetName: OperationURLParameter = {
  parameterPath: "relativeRecordSetName",
  mapper: {
    serializedName: "relativeRecordSetName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const recordType: OperationURLParameter = {
  parameterPath: "recordType",
  mapper: {
    serializedName: "recordType",
    required: true,
    type: {
      name: "Enum",
      allowedValues: [
        "A",
        "AAAA",
        "CAA",
        "CNAME",
        "MX",
        "NS",
        "PTR",
        "SOA",
        "SRV",
        "TXT"
      ]
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-05-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const recordsetnamesuffix: OperationQueryParameter = {
  parameterPath: ["options", "recordsetnamesuffix"],
  mapper: {
    serializedName: "$recordsetnamesuffix",
    type: {
      name: "String"
    }
  }
};

export const recordSetNameSuffix: OperationQueryParameter = {
  parameterPath: ["options", "recordSetNameSuffix"],
  mapper: {
    serializedName: "$recordsetnamesuffix",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: ZoneMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ZoneUpdateMapper
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: DnsResourceReferenceRequestMapper
};
