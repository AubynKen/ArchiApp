# Tests Made

## Basics

### GET /json/string

```json
Hello, World!
```

### GET /json/object

```json
{
  "a": 1,
  "b": 2
}
```

### GET /json/array

```json
[
  "Hello",
  "World",
  "!"
]
```

### GET "/test/Blah"

```json
{
  "msg": "blah"
}
```

## Relating to counter

### GET /cpt/query

```json
{
  "code": 0,
  "message": "Current count is 0"
}
```

### GET /cpt/query?v=5

```json
{
  "code": 0,
  "message": "Successfully incremented to 5"
}
```

### GET /cpt/query?v=whatsup

```json
{
  "code": -1,
  "error": "Value is not an integer"
}
```

### GET /cpt/inc

```json
{
  "code": 0,
  "message": "Successfully incremented to 6"
}
```

## Relating to messages

### GET /msg/nber

```json
3
```

### GET /msg/getAll

```json
[
  "Hello World",
  "foobar",
  "CentraleSupelec Forever"
]
```

### GET /msg/post/你好,世界!

The uuid is returned:

```json
30763d62-5793-4211-b5bb-e073674beb14
```

### GET /msg/getAll

```json
[
  "Hello World",
  "foobar",
  "CentraleSupelec Forever",
  "你好,世界!"
]
```

### GET /msg/get/30763d62-5793-4211-b5bb-e073674beb14

```json
{
  "code": 1,
  "message": "你好,世界!"
}
```

### GET /msg/del/30763d62-5793-4211-b5bb-e073674beb14

```json
{
  "code": 0,
  "message": "Message deleted"
}
```

