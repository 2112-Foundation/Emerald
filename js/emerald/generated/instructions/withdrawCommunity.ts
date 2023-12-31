/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category WithdrawCommunity
 * @category generated
 */
export type WithdrawCommunityInstructionArgs = {
  communityIdx: number
  withdrawAmount: beet.bignum
}
/**
 * @category Instructions
 * @category WithdrawCommunity
 * @category generated
 */
export const withdrawCommunityStruct = new beet.BeetArgsStruct<
  WithdrawCommunityInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['communityIdx', beet.u32],
    ['withdrawAmount', beet.u64],
  ],
  'WithdrawCommunityInstructionArgs'
)
/**
 * Accounts required by the _withdrawCommunity_ instruction
 *
 * @property [_writable_, **signer**] admin
 * @property [_writable_] communityPool
 * @property [_writable_] rewardVault
 * @property [_writable_] withdrawAccount
 * @property [_writable_] mainPool
 * @category Instructions
 * @category WithdrawCommunity
 * @category generated
 */
export type WithdrawCommunityInstructionAccounts = {
  admin: web3.PublicKey
  communityPool: web3.PublicKey
  rewardVault: web3.PublicKey
  withdrawAccount: web3.PublicKey
  mainPool: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const withdrawCommunityInstructionDiscriminator = [
  175, 104, 50, 107, 15, 191, 133, 184,
]

/**
 * Creates a _WithdrawCommunity_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category WithdrawCommunity
 * @category generated
 */
export function createWithdrawCommunityInstruction(
  accounts: WithdrawCommunityInstructionAccounts,
  args: WithdrawCommunityInstructionArgs,
  programId = new web3.PublicKey('5Kmi2sHYKD76GySjL9Tkoi64eLwGpiZCW7zUpbpJ8B5m')
) {
  const [data] = withdrawCommunityStruct.serialize({
    instructionDiscriminator: withdrawCommunityInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.admin,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.communityPool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rewardVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.withdrawAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mainPool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
