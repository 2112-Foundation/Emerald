/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link CommunityPool}
 * @category Accounts
 * @category generated
 */
export type CommunityPoolArgs = {
  feeReduction: number
  communityAdmin: web3.PublicKey
  locked: boolean
  coinMint: web3.PublicKey
  coinDecimals: number
  totalStakedCount: beet.bignum
  totalRewardDistributed: beet.bignum
  collectionsIdx: number
  totalUsers: number
  lockedBalance: beet.bignum
}

export const communityPoolDiscriminator = [56, 185, 253, 148, 127, 79, 154, 126]
/**
 * Holds the data for the {@link CommunityPool} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class CommunityPool implements CommunityPoolArgs {
  private constructor(
    readonly feeReduction: number,
    readonly communityAdmin: web3.PublicKey,
    readonly locked: boolean,
    readonly coinMint: web3.PublicKey,
    readonly coinDecimals: number,
    readonly totalStakedCount: beet.bignum,
    readonly totalRewardDistributed: beet.bignum,
    readonly collectionsIdx: number,
    readonly totalUsers: number,
    readonly lockedBalance: beet.bignum
  ) {}

  /**
   * Creates a {@link CommunityPool} instance from the provided args.
   */
  static fromArgs(args: CommunityPoolArgs) {
    return new CommunityPool(
      args.feeReduction,
      args.communityAdmin,
      args.locked,
      args.coinMint,
      args.coinDecimals,
      args.totalStakedCount,
      args.totalRewardDistributed,
      args.collectionsIdx,
      args.totalUsers,
      args.lockedBalance
    )
  }

  /**
   * Deserializes the {@link CommunityPool} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [CommunityPool, number] {
    return CommunityPool.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link CommunityPool} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<CommunityPool> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find CommunityPool account at ${address}`)
    }
    return CommunityPool.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '5Kmi2sHYKD76GySjL9Tkoi64eLwGpiZCW7zUpbpJ8B5m'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, communityPoolBeet)
  }

  /**
   * Deserializes the {@link CommunityPool} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [CommunityPool, number] {
    return communityPoolBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link CommunityPool} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return communityPoolBeet.serialize({
      accountDiscriminator: communityPoolDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link CommunityPool}
   */
  static get byteSize() {
    return communityPoolBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link CommunityPool} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      CommunityPool.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link CommunityPool} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === CommunityPool.byteSize
  }

  /**
   * Returns a readable version of {@link CommunityPool} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      feeReduction: this.feeReduction,
      communityAdmin: this.communityAdmin.toBase58(),
      locked: this.locked,
      coinMint: this.coinMint.toBase58(),
      coinDecimals: this.coinDecimals,
      totalStakedCount: (() => {
        const x = <{ toNumber: () => number }>this.totalStakedCount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      totalRewardDistributed: (() => {
        const x = <{ toNumber: () => number }>this.totalRewardDistributed
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      collectionsIdx: this.collectionsIdx,
      totalUsers: this.totalUsers,
      lockedBalance: (() => {
        const x = <{ toNumber: () => number }>this.lockedBalance
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const communityPoolBeet = new beet.BeetStruct<
  CommunityPool,
  CommunityPoolArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['feeReduction', beet.u8],
    ['communityAdmin', beetSolana.publicKey],
    ['locked', beet.bool],
    ['coinMint', beetSolana.publicKey],
    ['coinDecimals', beet.u8],
    ['totalStakedCount', beet.u64],
    ['totalRewardDistributed', beet.u64],
    ['collectionsIdx', beet.u32],
    ['totalUsers', beet.u32],
    ['lockedBalance', beet.u64],
  ],
  CommunityPool.fromArgs,
  'CommunityPool'
)
