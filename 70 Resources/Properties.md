---
title: Properties
date-created: 2024-06-21T16:50:01+02:00
date-modified: 2024-06-25T16:53:15+02:00
cssclasses:
  - line1
parent:
  - "[[Home]]"
type: 
tags: []
---

# Properties Info

This includes some information on all properties regularly used, including their order for the *Linter* plugin, as well as legends for selection based properties.

| Property      | Datatype | Usage    | Description                                                                                           | Order |
| ------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------- | ----- |
| title         | Text     | Meta     | Dynamically updated using *Linter* plugin.                                                            | 1     |
| date-created  | DateTime | Meta     | Dynamically updated using *Linter* plugin.                                                            | 2     |
| date-modified | DateTime | Meta     | Dynamically updated using *Linter* plugin.                                                            | 3     |
| cssclasses    | List     | Meta     |                                                                                                       | 4     |
| date          | Date     | General  | Exists to keep dated notes to their day, even if they are created on another day.                     | 5     |
| week          | Text     | Periodic |                                                                                                       | 6     |
| parent        | List     | General  | Includes both the [[Home]] note and the direct hierarchical parent.                                   | 7     |
| type          | List     | General  |                                                                                                       | 8     |
| domain        | List     | General  | Areas of knowledge.                                                                                   | 9     |
| tags          | Tag List | General  |                                                                                                       | 10    |
| sources       | List     | General  | Links to either sites from which the content in the note is sourced or sites relevant to the content. | 11    |
| area          | Text     | Area     | What area the note pertains to.                                                                       | 12    |
| areapage      | Text     | Area     | Link to respective *Projects* plugin page.                                                            | 13    |
| project       | Text     | Project  | What project the note pertains to.                                                                    | 14    |
| projectpage   | Text     | Project  | Link to respective *Projects* plugin page.                                                            | 15    |
| team          | List     | Project  | List of people involved in project.                                                                   | 16    |
| status        | Text     | Project  | Status of the project                                                                                 | 17    |
| takeaway      | Text     | Periodic |                                                                                                       | 18    |
| sleep-rating  | Number   | Periodic |                                                                                                       | 19    |
| nightmare     | Toggle   | Periodic |                                                                                                       | 20    |
| gratitudes    | List     | Periodic |                                                                                                       | 21    |
| achievements  | List     | Periodic |                                                                                                       | 22    |
| day-rating    | Number   | Periodic |                                                                                                       | 23    |

## Legends

##### Types

| Main Types    | Sub Types | Description                            |
| ------------- | --------- | -------------------------------------- |
| **Periodic**  | Daily     |                                        |
|               | Weekly    |                                        |
|               | Monthly   |                                        |
|               | Yearly    |                                        |
| **Log**       | Morning   |                                        |
|               | Evening   |                                        |
|               | Dream     |                                        |
| **Knowledge** |           |                                        |
| **Glossar**   |           |                                        |
| **Query**     |           | Only queries content from other notes. |

##### Status'

| Status      | Description |
| ----------- | ----------- |
| Not Started |             |
| Running     |             |
| Suspended   |             |
| Canceled    |             |
| Completed   |             |
