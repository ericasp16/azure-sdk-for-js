# client library samples for TypeScript (Beta)

These sample programs show how to use the TypeScript client libraries for in some common scenarios.

| **File Name**                                                                                                                     | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [managedClustersCreateOrUpdateSample.ts][managedclusterscreateorupdatesample]                                                     | Creates or updates a managed cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersAssociate_CRG.json                                                                                                                                                                                                                                                                                                                                          |
| [managedClustersDeleteSample.ts][managedclustersdeletesample]                                                                     | Deletes a managed cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersDelete.json                                                                                                                                                                                                                                                                                                                                                            |
| [managedClustersGetAccessProfileSample.ts][managedclustersgetaccessprofilesample]                                                 | **WARNING**: This API will be deprecated. Instead use [ListClusterUserCredentials](https://docs.microsoft.com/rest/api/aks/managedclusters/listclusterusercredentials) or [ListClusterAdminCredentials](https://docs.microsoft.com/rest/api/aks/managedclusters/listclusteradmincredentials) . x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersGetAccessProfile.json                                                                              |
| [managedClustersGetCommandResultSample.ts][managedclustersgetcommandresultsample]                                                 | Gets the results of a command which has been run on the Managed Cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/RunCommandResultFailed.json                                                                                                                                                                                                                                                                                                             |
| [managedClustersGetOSOptionsSample.ts][managedclustersgetosoptionssample]                                                         | Gets supported OS options in the specified subscription. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ContainerServiceGetOSOptions.json                                                                                                                                                                                                                                                                                                                       |
| [managedClustersGetSample.ts][managedclustersgetsample]                                                                           | Gets a managed cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersGet.json                                                                                                                                                                                                                                                                                                                                                                  |
| [managedClustersGetUpgradeProfileSample.ts][managedclustersgetupgradeprofilesample]                                               | Gets the upgrade profile of a managed cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersGetUpgradeProfile.json                                                                                                                                                                                                                                                                                                                             |
| [managedClustersListByResourceGroupSample.ts][managedclusterslistbyresourcegroupsample]                                           | Lists managed clusters in the specified subscription and resource group. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersListByResourceGroup.json                                                                                                                                                                                                                                                                                                 |
| [managedClustersListClusterAdminCredentialsSample.ts][managedclusterslistclusteradmincredentialssample]                           | Lists the admin credentials of a managed cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersListClusterCredentialResult.json                                                                                                                                                                                                                                                                                                                |
| [managedClustersListClusterMonitoringUserCredentialsSample.ts][managedclusterslistclustermonitoringusercredentialssample]         | Lists the cluster monitoring user credentials of a managed cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersListClusterCredentialResult.json                                                                                                                                                                                                                                                                                              |
| [managedClustersListClusterUserCredentialsSample.ts][managedclusterslistclusterusercredentialssample]                             | Lists the user credentials of a managed cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersListClusterCredentialResult.json                                                                                                                                                                                                                                                                                                                 |
| [managedClustersListOutboundNetworkDependenciesEndpointsSample.ts][managedclusterslistoutboundnetworkdependenciesendpointssample] | Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified managed cluster. The operation returns properties of each egress endpoint. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/OutboundNetworkDependenciesEndpointsList.json                                                                                                                                                                                       |
| [managedClustersListSample.ts][managedclusterslistsample]                                                                         | Gets a list of managed clusters in the specified subscription. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersList.json                                                                                                                                                                                                                                                                                                                          |
| [managedClustersResetAadProfileSample.ts][managedclustersresetaadprofilesample]                                                   | Reset the AAD Profile of a managed cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersResetAADProfile.json                                                                                                                                                                                                                                                                                                                                  |
| [managedClustersResetServicePrincipalProfileSample.ts][managedclustersresetserviceprincipalprofilesample]                         | This action cannot be performed on a cluster that is not using a service principal x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersResetServicePrincipalProfile.json                                                                                                                                                                                                                                                                              |
| [managedClustersRotateClusterCertificatesSample.ts][managedclustersrotateclustercertificatessample]                               | See [Certificate rotation](https://docs.microsoft.com/azure/aks/certificate-rotation) for more details about rotating managed cluster certificates. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersRotateClusterCertificates.json                                                                                                                                                                                                                |
| [managedClustersRotateServiceAccountSigningKeysSample.ts][managedclustersrotateserviceaccountsigningkeyssample]                   | Rotates the service account signing keys of a managed cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersRotateServiceAccountSigningKeys.json                                                                                                                                                                                                                                                                                               |
| [managedClustersRunCommandSample.ts][managedclustersruncommandsample]                                                             | AKS will create a pod to run the command. This is primarily useful for private clusters. For more information see [AKS Run Command](https://docs.microsoft.com/azure/aks/private-clusters#aks-run-command-preview). x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/RunCommandRequest.json                                                                                                                                                                       |
| [managedClustersStartSample.ts][managedclustersstartsample]                                                                       | See [starting a cluster](https://docs.microsoft.com/azure/aks/start-stop-cluster) for more details about starting a cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersStart.json                                                                                                                                                                                                                                                           |
| [managedClustersStopSample.ts][managedclustersstopsample]                                                                         | This can only be performed on Azure Virtual Machine Scale set backed clusters. Stopping a cluster stops the control plane and agent nodes entirely, while maintaining all object and cluster state. A cluster does not accrue charges while it is stopped. See [stopping a cluster](https://docs.microsoft.com/azure/aks/start-stop-cluster) for more details about stopping a cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersStop.json |
| [managedClustersUpdateTagsSample.ts][managedclustersupdatetagssample]                                                             | Updates tags on a managed cluster. x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersUpdateTags.json                                                                                                                                                                                                                                                                                                                                                |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://nodejs.org/about/releases/).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/managedClustersCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env  node dist/managedClustersCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[managedclusterscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersCreateOrUpdateSample.ts
[managedclustersdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersDeleteSample.ts
[managedclustersgetaccessprofilesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersGetAccessProfileSample.ts
[managedclustersgetcommandresultsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersGetCommandResultSample.ts
[managedclustersgetosoptionssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersGetOSOptionsSample.ts
[managedclustersgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersGetSample.ts
[managedclustersgetupgradeprofilesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersGetUpgradeProfileSample.ts
[managedclusterslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersListByResourceGroupSample.ts
[managedclusterslistclusteradmincredentialssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersListClusterAdminCredentialsSample.ts
[managedclusterslistclustermonitoringusercredentialssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersListClusterMonitoringUserCredentialsSample.ts
[managedclusterslistclusterusercredentialssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersListClusterUserCredentialsSample.ts
[managedclusterslistoutboundnetworkdependenciesendpointssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersListOutboundNetworkDependenciesEndpointsSample.ts
[managedclusterslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersListSample.ts
[managedclustersresetaadprofilesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersResetAadProfileSample.ts
[managedclustersresetserviceprincipalprofilesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersResetServicePrincipalProfileSample.ts
[managedclustersrotateclustercertificatessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersRotateClusterCertificatesSample.ts
[managedclustersrotateserviceaccountsigningkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersRotateServiceAccountSigningKeysSample.ts
[managedclustersruncommandsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersRunCommandSample.ts
[managedclustersstartsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersStartSample.ts
[managedclustersstopsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersStopSample.ts
[managedclustersupdatetagssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/containerservice/arm-containerservice-rest/samples/v1-beta/typescript/src/managedClustersUpdateTagsSample.ts
[apiref]: https://docs.microsoft.com/javascript/api/@azure-rest/arm-containerservice?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/containerservice/arm-containerservice-rest/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html