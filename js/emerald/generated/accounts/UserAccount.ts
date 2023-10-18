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
 * Arguments used to create {@link UserAccount}
 * @category Accounts
 * @category generated
 */
export type UserAccountArgs = {
  communityCounter: number
  totalStaked: number
  totalLoaned: number
}

export const userAccountDiscriminator = [211, 33, 136, 16, 186, 110, 242, 127]
/**
 * Holds the data for the {@link UserAccount} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class UserAccount implements UserAccountArgs {
  private constructor(
    readonly communityCounter: number,
    readonly totalStaked: number,
    readonly totalLoaned: number
  ) {}

  /**
   * Creates a {@link UserAccount} instance from the provided args.
   */
  static fromArgs(args: UserAccountArgs) {
    return new UserAccount(
      args.communityCounter,
      args.totalStaked,
      args.totalLoaned
    )
  }

  /**
   * Deserializes the {@link UserAccount} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [UserAccount, number] {
    return UserAccount.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link UserAccount} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<UserAccount> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find UserAccount account at ${address}`)
    }
    return UserAccount.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, userAccountBeet)
  }

  /**
   * Deserializes the {@link UserAccount} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [UserAccount, number] {
    return userAccountBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link UserAccount} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return userAccountBeet.serialize({
      accountDiscriminator: userAccountDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link UserAccount}
   */
  static get byteSize() {
    return userAccountBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link UserAccount} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      UserAccount.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link UserAccount} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === UserAccount.byteSize
  }

  /**
   * Returns a readable version of {@link UserAccount} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      communityCounter: this.communityCounter,
      totalStaked: this.totalStaked,
      totalLoaned: this.totalLoaned,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const userAccountBeet = new beet.BeetStruct<
  UserAccount,
  UserAccountArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['communityCounter', beet.u32],
    ['totalStaked', beet.u32],
    ['totalLoaned', beet.u32],
  ],
  UserAccount.fromArgs,
  'UserAccount'
)
