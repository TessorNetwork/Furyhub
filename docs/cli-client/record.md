# Record

Record module allows you to manage record on PETRI Hub

## Available Commands

| Name                                | Description        |
| ----------------------------------- | ------------------ |
| [create](#petri-tx-record-create)    | Create a record    |
| [record](#petri-query-record-record) | Query record by id |

## petri tx record create

Create a record

```bash
petri tx record create [digest] [digest-algo] [flags]
```

**Flags:**

| Name, shorthand | Type   | Required | Default | Description                                |
| --------------- | ------ | -------- | ------- | ------------------------------------------ |
| --uri           | string |          |         | Source uri of record, such as an ipfs link |
| --meta          | string |          |         | meta data of record                        |

## petri query record record

Query record by id

```bash
petri query record record [record-id]
```
