# Distribution

The distribution module allows you to manage your [Staking Rewards](../concepts/general-concepts.md#staking-rewards).

## Available Subcommands

| Name                                                                                    | Description                                                                                                                                           |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [commission](#petri-query-distribution-commission)                                       | Query distribution validator commission                                                                                                               |
| [community-pool](#petri-query-distribution-community-pool)                               | Query the amount of coins in the community pool                                                                                                       |
| [params](#petri-query-distribution-params)                                               | Query distribution params                                                                                                                             |
| [rewards](#petri-query-distribution-rewards)                                             | Query all distribution delegator rewards or rewards from a particular validator                                                                       |
| [slashes](#petri-query-distribution-slashes)                                             | Query distribution validator slashes.                                                                                                                 |
| [validator-outstanding-rewards](#petri-query-distribution-validator-outstanding-rewards) | Query distribution outstanding (un-withdrawn) rewards for a validator and all their delegations                                                       |
| [fund-community-pool](#petri-tx-distribution-fund-community-pool)                        | Funds the community pool with the specified amount                                                                                                    |
| [set-withdraw-addr](#petri-tx-distribution-set-withdraw-addr)                            | Set the withdraw address for rewards associated with a delegator address                                                                              |
| [withdraw-all-rewards](#petri-tx-distribution-withdraw-all-rewards)                      | Withdraw all rewards for a single delegator                                                                                                           |
| [withdraw-rewards](#petri-tx-distribution-withdraw-rewards)                              | Withdraw rewards from a given delegation address,and optionally withdraw validator commission if the delegation address given is a validator operator |

## petri query distribution commission

Query validator commission rewards from delegators to that validator.

```bash
petri query distribution commission [validator] [flags]
```

## petri query distribution community-pool

Query all coins in the community pool which is under Governance control.

```bash
petri query distribution community-pool [flags]
```

## petri query distribution params

Query distribution params.

```bash
 petri query distribution params [flags]
```

## petri query distribution rewards

Query all rewards earned by a delegator, optionally restrict to rewards from a single validator.

```bash
petri query distribution rewards [delegator-addr] [validator-addr] [flags]
```

## petri query distribution slashes

Query all slashes of a validator for a given block range.

```bash
petri query distribution slashes [validator] [start-height] [end-height] [flags]
```

## petri query distribution validator-outstanding-rewards

Query distribution outstanding (un-withdrawn) rewards for a validator and all their delegations.

```bash
petri query distribution validator-outstanding-rewards [validator] [flags]
```

## petri tx distribution fund-community-pool

Funds the community pool with the specified amount.

```bash
petri tx distribution fund-community-pool [amount] [flags]
```

## petri tx distribution set-withdraw-addr

Set the withdraw address for rewards associated with a delegator address.

```bash
petri tx distribution set-withdraw-addr [withdraw-addr] [flags]
```

## petri tx distribution withdraw-all-rewards

Withdraw all rewards for a single delegator.

```bash
petri tx distribution withdraw-all-rewards [flags]
```

## petri tx distribution withdraw-rewards

Withdraw rewards from a given delegation address, and optionally withdraw validator commission if the delegation address given is a validator operator.

```bash
petri tx distribution withdraw-rewards [validator-addr] [flags]
```
