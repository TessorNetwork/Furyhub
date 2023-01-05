# Bank

Bank module allows you to manage assets in your local accounts.

## Available Commands

| Name                                  | Description                                            |
| ------------------------------------- | ------------------------------------------------------ |
| [balances](#petri-query-bank-balances) | Query for account balances by address                  |
| [total](#petri-query-bank-total)       | Query the total supply of coins of the chain           |
| [send](#petri-tx-bank-send)            | Create and/or sign and broadcast a MsgSend transaction |

## petri query bank balances

Query the total balance of an account or of a specific denomination.

```bash
petri query bank balances [address] [flags]
```

**Flags:**

| Name, shorthand | Type   | Required | Default | Description                                                |
| --------------- | ------ | -------- | ------- | ---------------------------------------------------------- |
| -h, --help      |        |          |         | Help for coin-type                                         |
| --denom         | string |          |         | The specific balance denomination to query for             |
| --count-total   |        |          |         | Count total number of records in all balances to query for |

### petri query bank total

Query total supply of coins that are held by accounts in the chain.

```bash
petri query bank total [flags]
```

**Flags:**

| Name, shorthand | Type   | Required | Default | Description                                    |
| --------------- | ------ | -------- | ------- | ---------------------------------------------- |
| -h, --help      |        |          |         | Help for coin-type                             |
| --denom         | string |          |         | The specific balance denomination to query for |

## petri tx bank send

Sending tokens to another address, this command includes `generate`, `sign` and `broadcast` steps.

```bash
petri tx bank send [from_key_or_address] [to_address] [amount] [flags]
```

**Flags:**

| Name, shorthand | Type | Required | Default | Description       |
| --------------- | ---- | -------- | ------- | ----------------- |
| -h, --help      |      |          |         | Help for balances |
