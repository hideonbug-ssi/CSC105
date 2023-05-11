# This is 105 integration module's repository

This repository contain backend and frontend

## To run the frontend and backend in developmode 
use
```
    npm run dev
```

# Note App

### All of the responses will be wrapped with this data before sending
| Parameter | Type | Description |
|-----|:----:|:-----|
| success| boolean | the status of request|
| msg | string | message for each request |
| data | JSON | the actual data |

#### URL
`POST /login`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|usernameOrEmail|String|username Or Email
|password|String| password|


Example
```
   {
     "usernameOrEmail" : "thistine",
     "password" : "1234"
   }


```


#### Success
Response

###### Status Code
` 200`  login success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|email|String| user email
|username|String| username
|id|String| user id

Example
```
{
   "email":"tine@thistine.com",
   "username":"thistine",
   "id" : "1"
}

```
**noted: If success, the Response will be sent with cookie named UserToken**

### Register

#### URL
`POST /register`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username |
|email| String | email |
|password|String| password|

Example
```
   {
    "email":"tine@thistine.com",
    "username":"thistine",
     "password" : "1234"
   }


```

#### Success

###### Status Code
` 200`  register success

no response body

### get logged in user


#### URL
`GET /me`

#### Request Body 
No Request Body


#### Success

###### Status Code
` 200`  got data

| Parameter | Type | Description |
|----------|:-------------:|:------|
|email|String| user email
|username|String| username
|id|String| user id

Example
```
{
   "email":"tine@thistine.com",
   "username":"thistine",
   "id" : "1"
}

```


### getAllNotes
#### URL
`GET /notes`

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200`  found notes

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of note | all notes related to user |

#### note
the note object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| title | string | note title |
| description | string | note description |
| updatedAt | DateTime | latest updated time |
| createdAt | DateTime | create Time |
| createdBy | User | note creator |

Example
```
[
    {
        "id" : "1",
        "title" : "Note1",
        "description" : "today is a good day",
        "updatedAt" : "2023-04-25T14:58:58.264Z",
        "createdAt" : "2023-04-25T14:58:58.264Z",
        createdBy : {
            "email":"tine@thistine.com",
            "username":"thistine",
            "id" : "1"
            }
    }
]

```



### Get the user friend
get friendlist of user

#### URL
`GET /note/:noteId`

### Parameter
| Parameter | Type | Description |
|----------|:-------------:|:------|
|noteId|String| id of note


 
#### Request Body 
No Request Body


#### Success
Response

###### Status Code
` 200`  success

| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| title | string | note title |
| description | string | note description |
| updatedAt | DateTime | latest updated time |
| createdAt | DateTime | create Time |
| createdBy | User | note creator |

Example
```
    {
        "id" : "1",
        "title" : "Note1",
        "description" : "today is a good day",
        "updatedAt" : "2023-04-25T14:58:58.264Z",
        "createdAt" : "2023-04-25T14:58:58.264Z",
        createdBy : {
            "email":"tine@thistine.com",
            "username":"thistine",
            "id" : "1"
            }
    }

```

### editNote

#### URL
`PATCH /note`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| noteId | string | id of note |
| title | string | note title |
| description | string | note description |


#### Success
Response

###### Status Code
` 200`  success

| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| title | string | note title |
| description | string | note description |
| updatedAt | DateTime | latest updated time |
| createdAt | DateTime | create Time |
| createdBy | User | note creator |

Example
```
    {
        "id" : "1",
        "title" : "Note1",
        "description" : "today is a good day",
        "updatedAt" : "2023-04-25T14:58:58.264Z",
        "createdAt" : "2023-04-25T14:58:58.264Z",
        createdBy : {
            "email":"tine@thistine.com",
            "username":"thistine",
            "id" : "1"
            }
    }

```



### Create Note


#### URL
`POST /note`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| title | string | note title |
| description | string | note description |


#### Success
Response

###### Status Code
` 200`  success

| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| title | string | note title |
| description | string | note description |
| updatedAt | DateTime | latest updated time |
| createdAt | DateTime | create Time |
| createdBy | User | note creator |

Example
```
    {
        "id" : "1",
        "title" : "Note1",
        "description" : "today is a good day",
        "updatedAt" : "2023-04-25T14:58:58.264Z",
        "createdAt" : "2023-04-25T14:58:58.264Z",
        createdBy : {
            "email":"tine@thistine.com",
            "username":"thistine",
            "id" : "1"
            }
    }

```

### Delete Note

#### URL
`DELETE /note/:noteId`

### Parameter
| Parameter | Type | Description |
|----------|:-------------:|:------|
|noteId|String| id of note
 
#### Request Body 
No Request Body

#### Success
Response

###### Status Code
` 200`  delete success

no response body



### getAllComment
#### URL
`GET /comment`

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200`  found comment

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of comment | all notes related to user |

#### comment
the comment object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| text | string | note title |
| description | string | note description |
| createdAt | DateTime | create Time |
| createdBy | User | note creator |

Example
```
[
    {
        "id" : "1",
        "text" : "comment",
        "description" : "today is a good day",
        "createdAt" : "2023-04-25T14:58:58.264Z",
        createdBy : {
            "email":"tine@thistine.com",
            "username":"thistine",
            "id" : "1"
            }
    }
]

```


### editComment
#### URL
`PATCH /comment`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| commentId | string | id of comment  |
| text | string | updated text |

#### Success

###### Status Code
` 200`  edited comment

Response
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of note |
| text | string | note title |
| description | string | note description |
| createdAt | DateTime | create Time |
| createdBy | User | note creator |

Example
```
    {
        "id" : "1",
        "text" : "comment",
        "description" : "today is a good day",
        "createdAt" : "2023-04-25T14:58:58.264Z",
        createdBy : {
            "email":"tine@thistine.com",
            "username":"thistine",
            "id" : "1"
            }
    }

```

### deleteComment
#### URL
`DELETE /comment`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| commentId | string | id of comment  |

#### Success

###### Status Code
` 200`  deleted successfully

Response
no response body
