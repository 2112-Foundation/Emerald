/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link CollectionPolicy}
 * @category Accounts
 * @category generated
 */
export type CollectionPolicyArgs = {
  rate: beet.bignum
  epoch: beet.bignum
  minimumStakeTime: beet.bignum
  interactionFrequency: beet.bignum
  attenuation: number
  permanentPolicy: boolean
  timeCapped: beet.bignum
}

export const collectionPolicyDiscriminator = [
  203, 231, 77, 202, 39, 103, 152, 232,
]
/**
 * Holds the data for the {@link CollectionPolicy} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class CollectionPolicy implements CollectionPolicyArgs {
  private constructor(
    readonly rate: beet.bignum,
    readonly epoch: beet.bignum,
    readonly minimumStakeTime: beet.bignum,
    readonly interactionFrequency: beet.bignum,
    readonly attenuation: number,
    readonly permanentPolicy: boolean,
    readonly timeCapped: beet.bignum
  ) {}

  /**
   * Creates a {@link CollectionPolicy} instance from the provided args.
   */
  static fromArgs(args: CollectionPolicyArgs) {
    return new CollectionPolicy(
      args.rate,
      args.epoch,
      args.minimumStakeTime,
      args.interactionFrequency,
      args.attenuation,
      args.permanentPolicy,
      args.timeCapped
    )
  }

  /**
   * Deserializes the {@link CollectionPolicy} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [CollectionPolicy, number] {
    return CollectionPolicy.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link CollectionPolicy} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<CollectionPolicy> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find CollectionPolicy account at ${address}`)
    }
    return CollectionPolicy.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '2HLsq8QGhRnUUwuukCKLNdpvNc4utW6AQVV1VoY9jgEd'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, collectionPolicyBeet)
  }

  /**
   * Deserializes the {@link CollectionPolicy} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [CollectionPolicy, number] {
    return collectionPolicyBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link CollectionPolicy} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return collectionPolicyBeet.serialize({
      accountDiscriminator: collectionPolicyDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link CollectionPolicy}
   */
  static get byteSize() {
    return collectionPolicyBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link CollectionPolicy} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      CollectionPolicy.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link CollectionPolicy} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === CollectionPolicy.byteSize
  }

  /**
   * Returns a readable version of {@link CollectionPolicy} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      rate: (() => {
        const x = <{ toNumber: () => number }>this.rate
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      epoch: (() => {
        const x = <{ toNumber: () => number }>this.epoch
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      minimumStakeTime: (() => {
        const x = <{ toNumber: () => number }>this.minimumStakeTime
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      interactionFrequency: (() => {
        const x = <{ toNumber: () => number }>this.interactionFrequency
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      attenuation: this.attenuation,
      permanentPolicy: this.permanentPolicy,
      timeCapped: (() => {
        const x = <{ toNumber: () => number }>this.timeCapped
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
export const collectionPolicyBeet = new beet.BeetStruct<
  CollectionPolicy,
  CollectionPolicyArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['rate', beet.u64],
    ['epoch', beet.i64],
    ['minimumStakeTime', beet.i64],
    ['interactionFrequency', beet.i64],
    ['attenuation', beet.u32],
    ['permanentPolicy', beet.bool],
    ['timeCapped', beet.i64],
  ],
  CollectionPolicy.fromArgs,
  'CollectionPolicy'
)