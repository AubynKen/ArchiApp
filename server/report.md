# Report of the project
----
## Frontend

---
## Backend

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


## Below are tests for the backend used for the final application
router
.get("/:boardName", handleGetAllNotes)
.get("/:boardName/count", handleGetNoteCount)
.get("/:boardName/:noteId", handleGetNoteById)
.post("/:boardName", handleCreateNote)
.delete("/:boardName/:noteId", handleDeleteNote)

### Get all post board names
#### GET /post-board
```json
[
"global",
"gossips"
]
```

### Get all notes from the "global" post board
#### GET /post-board/global

```json
[
  {
    "id": "d37a85b8-957c-4da3-a5a2-23360deda11c",
    "ts": 1710943804,
    "content": "Welcome to the Post Board App!"
  },
  {
    "id": "0ee925d6-cd6f-4bef-a1f9-29a5e152e892",
    "ts": 1710943805,
    "content": "You are in the global post board, you can switch to any other post board as you like!"
  }
]
```

### Get all notes from a board name that doesn't exist
#### GET /post-board/wfuytneimrto

```json
[]
```

### Count the number of messages in the global channel
#### GET /post-board/global/count
```json
{
  "boardName": "global",
  "count": 2
}
```

