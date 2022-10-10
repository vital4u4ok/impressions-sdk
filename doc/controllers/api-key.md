# Api Key

Api key related functionality

```ts
const apiKeyController = new ApiKeyController(client);
```

## Class Name

`ApiKeyController`

## Methods

* [Get All Api Keys](../../doc/controllers/api-key.md#get-all-api-keys)
* [Generate Api Key](../../doc/controllers/api-key.md#generate-api-key)


# Get All Api Keys

Get all of current user's api getAllApiKeys

```ts
async getAllApiKeys(
  skip?: number,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApikeysResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `skip` | `number \| undefined` | Query, Optional | Number of keys to skip |
| `limit` | `number \| undefined` | Query, Optional | Limit the number of keys in response |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApikeysResponse`](../../doc/models/apikeys-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await apiKeyController.getAllApiKeys();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Generate Api Key

Generate a new api key

```ts
async generateApiKey(
  body?: ApikeysRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApikeysResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApikeysRequest \| undefined`](../../doc/models/apikeys-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApikeysResponse1`](../../doc/models/apikeys-response-1.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await apiKeyController.generateApiKey();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

