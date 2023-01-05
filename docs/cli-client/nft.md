# NFT

`NFT` provides the ability to digitize assets. Through this module, each off-chain asset will be modeled as a unique on-chain nft.

## Available Commands

| Name                                          | Description                                                                                         |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [issue](#petri-tx-nft-issue)                   | Specify the nft Denom (nft classification) and metadata JSON Schema to issue nft.                   |
| [transfer-denom](#petri-tx-nft-transfer-denom) | The owner of the NFT classification can transfer the ownership of the NFT classification to others. |
| [mint](#petri-tx-nft-mint)                     | Additional issuance (create) of specific nft of this type can be made.                              |
| [edit](#petri-tx-nft-edit)                     | The metadata of the specified nft can be updated.                                                   |
| [transfer](#petri-tx-nft-transfer)             | Transfer designated nft.                                                                            |
| [burn](#petri-tx-nft-burn)                     | Destroy the created nft.                                                                            |
| [supply](#petri-query-nft-supply)              | Query the total amount of nft according to Denom; accept the optional owner parameter.              |
| [owner](#petri-query-nft-owner)                | Query all nft owned by an account; you can specify the Denom parameter.                             |
| [collection](#petri-query-nft-collection)      | Query all nft according to Denom.                                                                   |
| [denom](#petri-query-nft-denom)                | Query nft denom information based on Denom.                                                         |
| [denoms](#petri-query-nft-denoms)              | Query the total amount of nft according to Denom; accept the optional owner parameter.              |
| [token](#petri-query-nft-token)                | Query specific nft based on Denom and ID.                                                           |

## petri tx nft issue

Specify the nft Denom (nft classification) and metadata JSON Schema to issue nft.

```bash
petri tx nft issue [denom-id] [flags]
```

**Flags:**

| Name, shorthand     | Required | Default                                                                                                                                                                                                                     | Description |
| ------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| --name              |          | The name of the denom                                                                                                                                                                                                       |             |
| --uri               |          | The uri of the denom                                                                                                                                                                                                        |             |
| --data              |          | Off-chain metadata for supplementation (JSON object)                                                                                                                                                                        |             |
| --schema            |          | Denom data structure definition                                                                                                                                                                                             |             |
| --symbol            |          | The symbol of the denom                                                                                                                                                                                                     |             |
| --mint-restricted   |          | This field indicates whether there are restrictions on the issuance of NFTs under this classification, true means that only Denom owners can issue NFTs under this classification, false means anyone can                   |             |
| --update-restricted |          | This field indicates whether there are restrictions on updating NFTs under this classification, true means that no one under this classification can update the NFT, false means that only the owner of this NFT can update |             |

## petri tx nft transfer-denom

The owner of the NFT classification can transfer the ownership of the NFT classification to others.

```bash
petri tx nft transfer-denom [recipient] [denom-id]
```

## petri tx nft mint

Additional issuance (create) of specific nft of this type can be made.  

```bash
petri tx nft mint [denomID] [tokenID] [flags]
```

**Flags:**

| Name, shorthand | Required | Default                     | Description |
| --------------- | -------- | --------------------------- | ----------- |
| --uri           |          | URI of off-chain token data |             |
| --recipient     |          | Receiver of the nft         |             |
| --name          |          | The name of nft             |             |

## petri tx nft edit

The metadata of the specified nft can be updated.

```bash
petri tx nft edit [denomID] [tokenID] [flags]
```

**Flags:**

| Name, shorthand | Required | Default                     | Description |
| --------------- | -------- | --------------------------- | ----------- |
| --uri           |          | URI of off-chain token data |             |
| --name          |          | The name of nft             |             |

## petri tx nft transfer

Transfer designated nft.

```bash
petri tx nft transfer [recipient] [denomID] [tokenID] [flags]
```

**Flags:**

| Name, shorthand | Required | Default                     | Description |
| --------------- | -------- | --------------------------- | ----------- |
| --uri           |          | URI of off-chain token data |             |
| --name          |          | The name of nft             |             |

## petri tx nft burn

Destroy the created nft.

```bash
petri tx nft burn [denomID] [tokenID] [flags]
```

## petri query nft

Query nft

### petri query nft supply

```bash
petri query nft supply [denomID]
petri query nft supply [denomID] --owner=<owner address>
```

### petri query nft owner

```bash
petri query nft owner [owner address]
petri query nft owner [owner address] --denom=<denomID>
```

### petri query nft collection

```bash
petri query nft collection [denomID]
```

### petri query nft denom

```bash
petri query nft denom [denomID]
```

### petri query nft denoms

```bash
petri query nft denoms
```

### petri query nft token

```bash
petri query nft token [denomID] [tokenID]
```
