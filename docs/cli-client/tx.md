# Tx

Tx module allows you to sign or broadcast transactions

## Available Commands

| Name                            | Description                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------- |
| [sign](#petri-tx-sign)           | Sign transactions generated offline                                                   |
| [broadcast](#petri-tx-broadcast) | Broadcast a signed transaction to the network                                         |
| [multisign](#petri-tx-multisign) | Sign the same transaction by multiple accounts                                        |
| [tx](#petri-query-tx)            | Query for a transaction by hash in a committed block                                  |
| [txs](#petri-query-txs)          | Search for transactions that match the exact given events where results are paginated |

## petri tx sign

Sign transactions in generated offline file. The file created with the --generate-only flag.

```bash
petri tx sign <file> [flags]
```

### Flags

| Name, shorthand  | Type   | Required | Default | Description                                                                        |
| ---------------- | ------ | -------- | ------- | ---------------------------------------------------------------------------------- |
| --append         | bool   | true     | true    | Attach a signature to an existing signature.                                       |
| --from           | string | true     |         | Key name for signature                                                             |
| --offline        | bool   | true     |         | Offline mode.                                                                      |
| --signature-only | bool   | true     |         | Print only the generated signature, then exit                                      |
| --multisig       | string |          | true    | Address of the multisig account on behalf of which the transaction shall be signed |

### Generate an offline tx

:::tip
You can generate any type of txs offline by appending the flag `--generate-only`
:::

We use a transfer tx in the following examples:

```bash
petri tx bank send iaa1w9lvhwlvkwqvg08q84n2k4nn896u9pqx93velx iaa15uys54epmd2xzhcn32szps56wvev40tt908h62 10petri --chain-id=petrihub --generate-only
```

The `unsigned.json` should look like:

```json
{
    "type": "cosmos-sdk/StdTx",
    "value": {
        "msg": [
            {
                "type": "cosmos-sdk/MsgSend",
                "value": {
                    "from_address": "iaa1w9lvhwlvkwqvg08q84n2k4nn896u9pqx93velx",
                    "to_address": "iaa15uys54epmd2xzhcn32szps56wvev40tt908h62",
                    "amount": [
                        {
                            "denom": "petri",
                            "amount": "10"
                        }
                    ]
                }
            }
        ],
        "fee": {
            "amount": [],
            "gas": "200000"
        },
        "signatures": null,
        "memo": ""
    }
}
```

### Sign tx offline

```bash
petri tx sign unsigned.json --name=<key-name> > signed.tx
```

The `signed.json` should look like:

```json
{
    "type": "auth/StdTx",
    "value": {
        "msg": [
            {
                "type": "cosmos-sdk/Send",
                "value": {
                    "inputs": [
                        {
                            "address": "iaa106nhdckyf996q69v3qdxwe6y7408pvyvyxzhxh",
                            "coins": [
                                {
                                    "denom": "upetri",
                                    "amount": "1000000"
                                }
                            ]
                        }
                    ],
                    "outputs": [
                        {
                            "address": "iaa1893x4l2rdshytfzvfpduecpswz7qtpstevr742",
                            "coins": [
                                {
                                    "denom": "upetri",
                                    "amount": "1000000"
                                }
                            ]
                        }
                    ]
                }
            }
        ],
        "fee": {
            "amount": [
                {
                    "denom": "upetri",
                    "amount": "4000000"
                }
            ],
            "gas": "200000"
        },
        "signatures": [
            {
                "pub_key": {
                    "type": "tendermint/PubKeySecp256k1",
                    "value": "Auouudrg0P86v2kq2lykdr97AJYGHyD6BJXAQtjR1gzd"
                },
                "signature": "sJewd6lKjma49rAiGVfdT+V0YYerKNx6ZksdumVCvuItqGm24bEN9msh7IJ12Sil1lYjqQjdAcjVCX/77FKlIQ==",
                "account_number": "0",
                "sequence": "3"
            }
        ],
        "memo": "test"
    }
}
```

Note the `signature` in the `signed.json` should no longer be empty after signing.

Now it's ready to [broadcast the signed tx](#petri-tx-broadcast) to the PETRI Hub.

## petri tx broadcast

This command is used to broadcast an offline signed transaction to the network.

### Broadcast offline signed transaction

```bash
petri tx broadcast signed.json --chain-id=petrihub
```

## petri tx multisign

Sign a transaction by multiple accounts. The tx could be broadcasted only when the number of signatures meets the multisig-threshold.

```bash
petri tx multisign <file> <key-name> <[signature]...> [flags]
```

### Generate an offline tx by multisig key

:::tip
No multisig key? [Create one](keys.md#create-a-multisig-key)
:::

```bash
petri tx bank send <from> <to> 10petri --fees=0.3petri --chain-id=petrihub --from=<multisig-keyname> --generate-only > unsigned.json
```

### Sign the multisig tx

#### Query the multisig address

```bash
petri keys show <multisig-keyname>
```

#### Sign the `unsigned.json`

Assume the multisig-threshold is 2, here we sign the `unsigned.json` by 2 of the signers

Sign the tx by signer-1:

```bash
petri tx sign unsigned.json --from=<signer-keyname-1> --chain-id=petrihub --multisig=<multisig-address> --signature-only > signed-1.json
```

Sign the tx by signer-2:

```bash
petri tx sign unsigned.json --from=<signer-keyname-2> --chain-id=petrihub --multisig=<multisig-address> --signature-only > signed-2.json
```

#### Merge the signatures

Merge all the signatures into `signed.json`

```bash
petri tx multisign --chain-id=petrihub unsigned.json <multisig-keyname> signed-1.json signed-2.json > signed.json
```

Now you can [broadcast the signed tx](#petri-tx-broadcast).

## petri query tx

```bash
petri query tx [hash] [flags]
```

## petri query txs

```bash
petri query txs --events 'message.sender=<iaa...>&message.action=xxxx' --page 1 --limit 30
```

Among the possible values of `message.action`:

| module       | Msg                                       | action               |
| ------------ | ----------------------------------------- | -------------------- |
| bank         | cosmos-sdk/MsgSend                        | transfer             |
|              | cosmos-sdk/MsgMultiSend                   | transfer             |
| distribution | cosmos-sdk/MsgModifyWithdrawAddress       | set_withdraw_address |
|              | cosmos-sdk/MsgWithdrawValidatorCommission | withdraw_commission  |
|              | cosmos-sdk/MsgWithdrawDelegatorReward     | withdraw_rewards     |
| gov          | cosmos-sdk/MsgSubmitProposal              | submit_proposal      |
|              | cosmos-sdk/MsgDeposit                     | proposal_deposit     |
|              | cosmos-sdk/MsgVote                        | proposal_vote        |
| stake        | cosmos-sdk/MsgCreateValidator             | create_validator     |
|              | cosmos-sdk/MsgEditValidator               | edit_validator       |
|              | cosmos-sdk/MsgDelegate                    | delegate             |
|              | cosmos-sdk/MsgBeginRedelegate             | redelegate           |
|              | cosmos-sdk/MsgUndelegate                  | unbond               |
| slashing     | cosmos-sdk/MsgUnjail                      | unjail               |
| coinswap     | petrimod/MsgSwapOrder                      | swap                 |
|              | petrimod/MsgAddLiquidity                   | add_liquidity        |
|              | petrimod/MsgRemoveLiquidity                | remove_liquidity     |
| htlc         | petrimod/MsgCreateHTLC                     | create_htlc          |
|              | petrimod/MsgClaimHTLC                      | claim_htlc           |
|              | petrimod/MsgRefundHTLC                     | refund_htlc          |
| nft          | petrimod/MsgIssueDenom                     | issue_denom          |
|              | petrimod/MsgMintNFT                        | mint_nft             |
|              | petrimod/MsgBurnNFT                        | burn_nft             |
|              | petrimod/MsgTransferNFT                    | transfer_nft         |
|              | petrimod/MsgEditNFT                        | edit_nft             |
| record       | petrimod/MsgCreateRecord                   | create_record        |
| token        | petrimod/MsgIssueToken                     | issue_token          |
|              | petrimod/MsgEditToken                      | edit_token           |
|              | petrimod/MsgTransferTokenOwner             | transfer_token_owner |
|              | petrimod/MsgMintToken                      | mint_token           |
