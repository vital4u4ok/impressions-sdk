# Impressions

Impressions related requests

```ts
const impressionsController = new ImpressionsController(client);
```

## Class Name

`ImpressionsController`

## Methods

* [Delete Feedback](../../doc/controllers/impressions.md#delete-feedback)
* [Delete Subject](../../doc/controllers/impressions.md#delete-subject)
* [Get Subjects](../../doc/controllers/impressions.md#get-subjects)
* [Get Feedbacks](../../doc/controllers/impressions.md#get-feedbacks)
* [Add User Feedback](../../doc/controllers/impressions.md#add-user-feedback)


# Delete Feedback

Delete feedback

```ts
async deleteFeedback(
  subjectId: string,
  feedbackId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ImpressionsSubjectsFeedbacksResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subjectId` | `string` | Template, Required | Subject id |
| `feedbackId` | `string` | Template, Required | Feedback id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ImpressionsSubjectsFeedbacksResponse`](../../doc/models/impressions-subjects-feedbacks-response.md)

## Example Usage

```ts
const subjectId = 'subjectId4';
const feedbackId = 'feedbackId6';
try {
  const { result, ...httpResponse } = await impressionsController.deleteFeedback(subjectId, feedbackId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Subject

Delete subject

```ts
async deleteSubject(
  subjectId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ImpressionsSubjectsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subjectId` | `string` | Template, Required | Subject id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ImpressionsSubjectsResponse`](../../doc/models/impressions-subjects-response.md)

## Example Usage

```ts
const subjectId = 'subjectId4';
try {
  const { result, ...httpResponse } = await impressionsController.deleteSubject(subjectId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Subjects

Get a list of all subjects

```ts
async getSubjects(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Subject[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Subject[]`](../../doc/models/subject.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await impressionsController.getSubjects();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Feedbacks

Get a list of all subject feedbacks

```ts
async getFeedbacks(
  subjectId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Feedback[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subjectId` | `string` | Template, Required | Subject id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Feedback[]`](../../doc/models/feedback.md)

## Example Usage

```ts
const subjectId = 'subjectId4';
try {
  const { result, ...httpResponse } = await impressionsController.getFeedbacks(subjectId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Add User Feedback

Add feedback from user

```ts
async addUserFeedback(
  subjectId: string,
  body?: Feedback,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ImpressionsSubjectsFeedbacksResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subjectId` | `string` | Template, Required | Subject id |
| `body` | [`Feedback \| undefined`](../../doc/models/feedback.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ImpressionsSubjectsFeedbacksResponse`](../../doc/models/impressions-subjects-feedbacks-response.md)

## Example Usage

```ts
const subjectId = 'subjectId4';
const contentType = null;
try {
  const { result, ...httpResponse } = await impressionsController.addUserFeedback(subjectId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

