# Auth

Auth endpoints

```ts
const authController = new AuthController(client);
```

## Class Name

`AuthController`

## Methods

* [Login](../../doc/controllers/auth.md#login)
* [Signup](../../doc/controllers/auth.md#signup)


# Login

Login into Imporession API

```ts
async login(
  body?: Login,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuthLoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Login \| undefined`](../../doc/models/login.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthLoginResponse`](../../doc/models/auth-login-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.login();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Signup

Signup for Imporession API

```ts
async signup(
  body?: Signup,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Signup \| undefined`](../../doc/models/signup.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await authController.signup();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

