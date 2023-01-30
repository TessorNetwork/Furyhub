# Gov

This module provides the basic functionalities for [Governance](../features/governance.md).

## Available Commands

| Name                                            | Description                                                       |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| [proposal](#grid-query-gov-proposal)            | Query details of a single proposal                                |
| [proposals](#grid-query-gov-proposals)          | Query proposals with optional filter                              |
| [vote](#grid-query-gov-vote)                    | Query details of a single vote                                    |
| [votes](#grid-query-gov-votes)                  | Query votes on a proposal                                         |
| [deposit](#grid-query-gov-deposit)              | Query details of a deposit                                        |
| [deposits](#grid-query-gov-deposits)            | Query deposits on a proposal                                      |
| [tally](#grid-query-gov-tally)                  | Get the tally of a proposal vote                                  |
| [param](#grid-query-gov-param)                  | Query the parameters (voting                                      |
| [params](#grid-query-gov-params)                | Query the parameters of the governance process                    |
| [proposer](#grid-query-gov-proposer)            | Query which address proposed a proposal with a given ID.          |
| [submit-proposal](#grid-tx-gov-submit-proposal) | Submit a proposal along with an initial deposit                   |
| [deposit](#grid-tx-gov-deposit)                 | Deposit tokens for an active proposal                             |
| [vote](#grid-tx-gov-vote)                       | Vote for an active proposal, options: yes/no/no_with_veto/abstain |

## grid query gov proposal

Query details of a proposal.

```bash
grid query gov proposal [proposal-id] [flags]
```

### Query a proposal

```bash
grid query gov proposal <proposal-id>
```

## grid query gov proposals

Query proposals with optional filter.

```bash
grid query gov proposals [flags]
```

**Flags:**

| Name, shorthand | Type    | Required | Default | Description                                                         |
| --------------- | ------- | -------- | ------- | ------------------------------------------------------------------- |
| --depositor     | Address |          |         | Filter proposals by depositor address                               |
| --limit         | uint    |          |         | Limit to the latest [number] of proposals. Default to all proposals |
| --status        | string  |          |         | Filter proposals by status                                          |
| --voter         | Address |          |         | Filter proposals by voter address                                   |

### Query all proposals

```bash
grid query gov proposals
```

### Query proposals by conditions

```bash
grid query gov proposals --limit=3 --status=Passed --depositor=<iaa...>
```

## grid query gov vote

Query details of a single vote.

```bash
grid query gov vote [proposal-id] [voter-addr] [flags]
```

### Query a vote

```bash
grid query gov vote <proposal-id> <iaa...>
```

## grid query gov votes

Query votes on a proposal.

```bash
grid query gov votes [proposal-id] [flags]
```

### Query all votes of a proposal

```bash
grid query gov votes <proposal-id>
```

## grid query gov deposit

Query details for a single proposal deposit on a proposal by its identifier.

```bash
grid query gov deposit [proposal-id] [depositer-addr] [flags]
```

### Query a deposit of a proposal

```bash
grid query gov deposit <proposal-id> <iaa...>
```

## grid query gov deposits

Query details for all deposits on a proposal.

```bash
grid query gov deposits [proposal-id] [flags]
```

### Query all deposits of a proposal

```bash
grid query gov deposits <proposal-id>
```

## grid query gov tally

Query tally of votes on a proposal. You can find the proposal-id by running "grid query gov proposals".

```bash
grid query gov tally [proposal-id] [flags]
```

### Query the statistics of a proposal

```bash
grid query gov tally <proposal-id>
```

## grid query gov param

Query the parameters (voting|tallying|deposit) of the governance process.

```bash
grid query gov param [param-type] [flags]
```

Example:

```bash
> grid query gov param voting
> grid query gov param tallying
> grid query gov param deposit
```

## grid query gov params

Query the all the parameters for the governance process.

```bash
grid query gov params [flags]
```

## grid query gov proposer

Query which address proposed a proposal with a given ID.

```bash
grid query gov proposer [proposal-id] [flags]
```

## grid tx gov submit-proposal

Submit a proposal along with an initial deposit. Proposal title, description, type and deposit can be given directly or through a proposal JSON file.
Available Commands:  `community-pool-spend`, `param-change`, `software-upgrade`, `cancel-software-upgrade` .

### grid tx gov submit-proposal community-pool-spend

Submit a community pool spend proposal along with an initial deposit.
The proposal details must be supplied via a JSON file.

```bash
grid tx gov submit-proposal community-pool-spend <path/to/proposal.json> --from=<key_or_address>
```

Where proposal.json contains:

```json
{
    "title": "Community Pool Spend",
    "description": "Pay me some Atoms!",
    "recipient": "iaa1mjk4p68mmulwla3x5uzlgjwsc3zrms448rel3q",
    "amount": "1000ugrid",
    "deposit": "1000ugrid"
}
```

### grid tx gov submit-proposal param-change

Submit a parameter proposal along with an initial deposit.
The proposal details must be supplied via a JSON file. For values that contains objects, only non-empty fields will be updated.

IMPORTANT: Currently parameter changes are evaluated but not validated, so it is very important that any "value" change is valid (ie. correct type and within bounds) for its respective parameter, eg. "MaxValidators" should be an integer and not a decimal.

Proper vetting of a parameter change proposal should prevent this from happening (no deposits should occur during the governance process), but it should be noted regardless.

```bash
grid tx gov submit-proposal param-change <path/to/proposal.json> --from=<key_or_address>
```

Where proposal.json contains:

```json
{
    "title": "Staking Param Change",
    "description": "Update max validators",
    "changes": [
        {
        "subspace": "staking",
        "key": "MaxValidators",
        "value": 105
        }
    ],
    "deposit": "1000ugrid"
}
```

### grid tx gov submit-proposal software-upgrade

Submit a software upgrade along with an initial deposit.
Please specify a unique name and height OR time for the upgrade to take effect.

```bash
grid tx gov submit-proposal software-upgrade [name] (--upgrade-height [height] | --upgrade-time [time]) (--upgrade-info [info]) [flags]
```

**Flags:**

| Name, shorthand  | Type   | Required | Default | Description                                                                               |
| ---------------- | ------ | -------- | ------- | ----------------------------------------------------------------------------------------- |
| --deposit        | Coin   | Yes      |         | Deposit of the proposal                                                                   |
| --title          | string | Yes      |         | Title of proposal                                                                         |
| --description    | string | Yes      |         | Description of proposal                                                                   |
| --upgrade-height | int64  |          |         | The height at which the upgrade must happen (not to be used together with --upgrade-time) |
| --time           | string |          |         | The time at which the upgrade must happen (not to be used together with --upgrade-height) |
| --info           | string |          |         | Optional info for the planned upgrade such as commit hash, etc.                           |

### grid tx gov submit-proposal cancel-software-upgrade

Cancel a software upgrade along with an initial deposit.

```bash
grid tx gov submit-proposal cancel-software-upgrade [flags]
```

**Flags:**

| Name, shorthand | Type   | Required | Default | Description             |
| --------------- | ------ | -------- | ------- | ----------------------- |
| --deposit       | Coin   | Yes      |         | Deposit of the proposal |
| --title         | string | Yes      |         | Title of proposal       |
| --description   | string | Yes      |         | Description of proposal |

## grid tx gov deposit

Submit a deposit for an active proposal. You can find the proposal-id by running "grid query gov proposals".

```bash
grid tx gov deposit [proposal-id] [deposit] [flags]
```

### Deposit for an active proposal

```bash
grid tx gov deposit [proposal-id] [deposit]
```

## grid tx gov vote

Submit a vote for an active proposal. You can find the proposal-id by running "grid query gov proposals".
Vote for an active proposal, options: yes/no/no_with_veto/abstain.

```bash
grid tx gov vote [proposal-id] [option] [flags]
```

### Vote for an active proposal

```bash
grid tx gov vote <proposal-id> <option> --from=<key-name> --fees=0.3grid
```
