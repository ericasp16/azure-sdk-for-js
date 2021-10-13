/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const InfoField: msRest.CompositeMapper = {
  serializedName: "InfoField",
  type: {
    name: "Composite",
    className: "InfoField",
    modelProperties: {
      project: {
        serializedName: "project",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UsageAggregation: msRest.CompositeMapper = {
  serializedName: "UsageAggregation",
  type: {
    name: "Composite",
    className: "UsageAggregation",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "properties.subscriptionId",
        type: {
          name: "Uuid"
        }
      },
      meterId: {
        serializedName: "properties.meterId",
        type: {
          name: "String"
        }
      },
      usageStartTime: {
        serializedName: "properties.usageStartTime",
        type: {
          name: "DateTime"
        }
      },
      usageEndTime: {
        serializedName: "properties.usageEndTime",
        type: {
          name: "DateTime"
        }
      },
      quantity: {
        serializedName: "properties.quantity",
        type: {
          name: "Number"
        }
      },
      unit: {
        serializedName: "properties.unit",
        type: {
          name: "String"
        }
      },
      meterName: {
        serializedName: "properties.meterName",
        type: {
          name: "String"
        }
      },
      meterCategory: {
        serializedName: "properties.meterCategory",
        type: {
          name: "String"
        }
      },
      meterSubCategory: {
        serializedName: "properties.meterSubCategory",
        type: {
          name: "String"
        }
      },
      meterRegion: {
        serializedName: "properties.meterRegion",
        type: {
          name: "String"
        }
      },
      infoFields: {
        serializedName: "properties.infoFields",
        type: {
          name: "Composite",
          className: "InfoField"
        }
      },
      instanceData: {
        serializedName: "properties.instanceData",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RateCardQueryParameters: msRest.CompositeMapper = {
  serializedName: "RateCardQueryParameters",
  type: {
    name: "Composite",
    className: "RateCardQueryParameters",
    modelProperties: {
      offerDurableId: {
        required: true,
        serializedName: "OfferDurableId",
        constraints: {
          Pattern: /^MS-AZR-\d{4}P(-\d{4}P)*$/
        },
        type: {
          name: "String"
        }
      },
      currency: {
        required: true,
        serializedName: "Currency",
        type: {
          name: "String"
        }
      },
      locale: {
        required: true,
        serializedName: "Locale",
        type: {
          name: "String"
        }
      },
      regionInfo: {
        required: true,
        serializedName: "RegionInfo",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OfferTermInfo: msRest.CompositeMapper = {
  serializedName: "OfferTermInfo",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "Name",
      clientName: "name"
    },
    uberParent: "OfferTermInfo",
    className: "OfferTermInfo",
    modelProperties: {
      effectiveDate: {
        serializedName: "EffectiveDate",
        type: {
          name: "DateTime"
        }
      },
      name: {
        required: true,
        serializedName: "Name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MeterInfo: msRest.CompositeMapper = {
  serializedName: "MeterInfo",
  type: {
    name: "Composite",
    className: "MeterInfo",
    modelProperties: {
      meterId: {
        serializedName: "MeterId",
        type: {
          name: "Uuid"
        }
      },
      meterName: {
        serializedName: "MeterName",
        type: {
          name: "String"
        }
      },
      meterCategory: {
        serializedName: "MeterCategory",
        type: {
          name: "String"
        }
      },
      meterSubCategory: {
        serializedName: "MeterSubCategory",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "Unit",
        type: {
          name: "String"
        }
      },
      meterTags: {
        serializedName: "MeterTags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      meterRegion: {
        serializedName: "MeterRegion",
        type: {
          name: "String"
        }
      },
      meterRates: {
        serializedName: "MeterRates",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Number"
            }
          }
        }
      },
      effectiveDate: {
        serializedName: "EffectiveDate",
        type: {
          name: "DateTime"
        }
      },
      includedQuantity: {
        serializedName: "IncludedQuantity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResourceRateCardInfo: msRest.CompositeMapper = {
  serializedName: "ResourceRateCardInfo",
  type: {
    name: "Composite",
    className: "ResourceRateCardInfo",
    modelProperties: {
      currency: {
        serializedName: "Currency",
        type: {
          name: "String"
        }
      },
      locale: {
        serializedName: "Locale",
        type: {
          name: "String"
        }
      },
      isTaxIncluded: {
        serializedName: "IsTaxIncluded",
        type: {
          name: "Boolean"
        }
      },
      offerTerms: {
        serializedName: "OfferTerms",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OfferTermInfo"
            }
          }
        }
      },
      meters: {
        serializedName: "Meters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MeterInfo"
            }
          }
        }
      }
    }
  }
};

export const MonetaryCredit: msRest.CompositeMapper = {
  serializedName: "Monetary Credit",
  type: {
    name: "Composite",
    polymorphicDiscriminator: OfferTermInfo.type.polymorphicDiscriminator,
    uberParent: "OfferTermInfo",
    className: "MonetaryCredit",
    modelProperties: {
      ...OfferTermInfo.type.modelProperties,
      credit: {
        serializedName: "Credit",
        type: {
          name: "Number"
        }
      },
      excludedMeterIds: {
        serializedName: "ExcludedMeterIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      }
    }
  }
};

export const MonetaryCommitment: msRest.CompositeMapper = {
  serializedName: "Monetary Commitment",
  type: {
    name: "Composite",
    polymorphicDiscriminator: OfferTermInfo.type.polymorphicDiscriminator,
    uberParent: "OfferTermInfo",
    className: "MonetaryCommitment",
    modelProperties: {
      ...OfferTermInfo.type.modelProperties,
      tieredDiscount: {
        serializedName: "TieredDiscount",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Number"
            }
          }
        }
      },
      excludedMeterIds: {
        serializedName: "ExcludedMeterIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      }
    }
  }
};

export const RecurringCharge: msRest.CompositeMapper = {
  serializedName: "Recurring Charge",
  type: {
    name: "Composite",
    polymorphicDiscriminator: OfferTermInfo.type.polymorphicDiscriminator,
    uberParent: "OfferTermInfo",
    className: "RecurringCharge",
    modelProperties: {
      ...OfferTermInfo.type.modelProperties,
      recurringCharge: {
        serializedName: "RecurringCharge",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UsageAggregationListResult: msRest.CompositeMapper = {
  serializedName: "UsageAggregationListResult",
  type: {
    name: "Composite",
    className: "UsageAggregationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UsageAggregation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const discriminators = {
  'OfferTermInfo' : OfferTermInfo,
  'OfferTermInfo.Monetary Credit' : MonetaryCredit,
  'OfferTermInfo.Monetary Commitment' : MonetaryCommitment,
  'OfferTermInfo.Recurring Charge' : RecurringCharge

};
