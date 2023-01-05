# Slashing

Slashing module can unjail validator previously jailed for downtime

## Available Commands

| Name                                                | Description                                     |
| --------------------------------------------------- | ----------------------------------------------- |
| [unjail](#petri-tx-slashing-unjail)                  | Unjail validator previously jailed for downtime |
| [params](#petri-query-slashing-params)               | Query the current slashing parameters           |
| [signing-info](#petri-query-slashing-signing-info)   | Query a validator's signing information         |
| [signing-infos](#petri-query-slashing-signing-infos) | Query signing information of all validators     |

## petri tx slashing unjail

Unjail validator previously jailed for downtime.

```bash
petri tx slashing unjail [flags]
```

## petri query slashing params

Query the current slashing parameters.

```bash
petri query slashing params  [flags]
```

## petri query slashing signing-info

Query a validator's signing information.

```bash
petri query slashing signing-info [validator-conspub] [flags]
```

## petri query slashing signing-infos

Query signing information of all validators.

```bash
petri query slashing signing-infos [flags]
```
