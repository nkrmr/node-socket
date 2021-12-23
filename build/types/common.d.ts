export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    bigint: string;
    bpchar: any;
    date: any;
    float8: any;
    geography: any;
    geometry: any;
    jsonb: any;
    numeric: number;
    timestamp: any;
    timestamptz: string;
    uuid: string;
};
/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export declare type BooleanComparisonExp = {
    _eq?: Maybe<Scalars['Boolean']>;
    _gt?: Maybe<Scalars['Boolean']>;
    _gte?: Maybe<Scalars['Boolean']>;
    _in?: Maybe<Array<Scalars['Boolean']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['Boolean']>;
    _lte?: Maybe<Scalars['Boolean']>;
    _neq?: Maybe<Scalars['Boolean']>;
    _nin?: Maybe<Array<Scalars['Boolean']>>;
};
/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export declare type IntComparisonExp = {
    _eq?: Maybe<Scalars['Int']>;
    _gt?: Maybe<Scalars['Int']>;
    _gte?: Maybe<Scalars['Int']>;
    _in?: Maybe<Array<Scalars['Int']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['Int']>;
    _lte?: Maybe<Scalars['Int']>;
    _neq?: Maybe<Scalars['Int']>;
    _nin?: Maybe<Array<Scalars['Int']>>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    _empty?: Maybe<Scalars['String']>;
    create_stripe_customer: StripeCustomer;
    create_stripe_intent: StripeIntent;
};
export declare type MutationCreateStripeCustomerArgs = {
    email: Scalars['String'];
    name: Scalars['String'];
};
export declare type MutationCreateStripeIntentArgs = {
    customerId: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    _empty?: Maybe<Scalars['String']>;
    get_stripe_customer_payment_methods: Array<Maybe<StripePaymentMethod>>;
};
export declare type QueryGetStripeCustomerPaymentMethodsArgs = {
    customer: Scalars['String'];
    type: Scalars['String'];
};
/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export declare type StringComparisonExp = {
    _eq?: Maybe<Scalars['String']>;
    _gt?: Maybe<Scalars['String']>;
    _gte?: Maybe<Scalars['String']>;
    _ilike?: Maybe<Scalars['String']>;
    _in?: Maybe<Array<Scalars['String']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _like?: Maybe<Scalars['String']>;
    _lt?: Maybe<Scalars['String']>;
    _lte?: Maybe<Scalars['String']>;
    _neq?: Maybe<Scalars['String']>;
    _nilike?: Maybe<Scalars['String']>;
    _nin?: Maybe<Array<Scalars['String']>>;
    _nlike?: Maybe<Scalars['String']>;
    _nsimilar?: Maybe<Scalars['String']>;
    _similar?: Maybe<Scalars['String']>;
};
export declare type StripeCustomer = {
    __typename?: 'StripeCustomer';
    stripe_cust_id: Scalars['String'];
};
export declare type StripeIntent = {
    __typename?: 'StripeIntent';
    client_secret: Scalars['String'];
};
export declare type StripePaymentMethod = {
    __typename?: 'StripePaymentMethod';
    billing_details?: Maybe<StripePaymentMethodBillingDetails>;
    card?: Maybe<StripePaymentMethodCard>;
    created?: Maybe<Scalars['Int']>;
    customer?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    livemode?: Maybe<Scalars['Boolean']>;
    object?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};
export declare type StripePaymentMethodBillingDetails = {
    __typename?: 'StripePaymentMethodBillingDetails';
    address?: Maybe<StripePaymentMethodBillingDetailsAddress>;
    email?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
};
export declare type StripePaymentMethodBillingDetailsAddress = {
    __typename?: 'StripePaymentMethodBillingDetailsAddress';
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    line1?: Maybe<Scalars['String']>;
    line2?: Maybe<Scalars['String']>;
    postal_code?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
};
export declare type StripePaymentMethodCard = {
    __typename?: 'StripePaymentMethodCard';
    brand?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    exp_month?: Maybe<Scalars['Int']>;
    exp_year?: Maybe<Scalars['Int']>;
    fingerprint?: Maybe<Scalars['String']>;
    funding?: Maybe<Scalars['String']>;
    generated_from?: Maybe<Scalars['String']>;
    last4?: Maybe<Scalars['Int']>;
    wallet?: Maybe<Scalars['String']>;
};
/** columns and relationships of "addresses" */
export declare type Addresses = {
    __typename?: 'addresses';
    address?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client?: Maybe<Clients>;
    country?: Maybe<Scalars['String']>;
    id: Scalars['bigint'];
    /** An object relationship */
    user?: Maybe<Users>;
    zipcode?: Maybe<Scalars['String']>;
};
/** aggregated selection of "addresses" */
export declare type AddressesAggregate = {
    __typename?: 'addresses_aggregate';
    aggregate?: Maybe<AddressesAggregateFields>;
    nodes: Array<Addresses>;
};
/** aggregate fields of "addresses" */
export declare type AddressesAggregateFields = {
    __typename?: 'addresses_aggregate_fields';
    avg?: Maybe<AddressesAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<AddressesMaxFields>;
    min?: Maybe<AddressesMinFields>;
    stddev?: Maybe<AddressesStddevFields>;
    stddev_pop?: Maybe<AddressesStddevPopFields>;
    stddev_samp?: Maybe<AddressesStddevSampFields>;
    sum?: Maybe<AddressesSumFields>;
    var_pop?: Maybe<AddressesVarPopFields>;
    var_samp?: Maybe<AddressesVarSampFields>;
    variance?: Maybe<AddressesVarianceFields>;
};
/** aggregate fields of "addresses" */
export declare type AddressesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<AddressesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "addresses" */
export declare type AddressesAggregateOrderBy = {
    avg?: Maybe<AddressesAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<AddressesMaxOrderBy>;
    min?: Maybe<AddressesMinOrderBy>;
    stddev?: Maybe<AddressesStddevOrderBy>;
    stddev_pop?: Maybe<AddressesStddevPopOrderBy>;
    stddev_samp?: Maybe<AddressesStddevSampOrderBy>;
    sum?: Maybe<AddressesSumOrderBy>;
    var_pop?: Maybe<AddressesVarPopOrderBy>;
    var_samp?: Maybe<AddressesVarSampOrderBy>;
    variance?: Maybe<AddressesVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "addresses" */
export declare type AddressesArrRelInsertInput = {
    data: Array<AddressesInsertInput>;
    on_conflict?: Maybe<AddressesOnConflict>;
};
/** aggregate avg on columns */
export declare type AddressesAvgFields = {
    __typename?: 'addresses_avg_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "addresses" */
export declare type AddressesAvgOrderBy = {
    id?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export declare type AddressesBoolExp = {
    _and?: Maybe<Array<Maybe<AddressesBoolExp>>>;
    _not?: Maybe<AddressesBoolExp>;
    _or?: Maybe<Array<Maybe<AddressesBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    country?: Maybe<StringComparisonExp>;
    id?: Maybe<BigintComparisonExp>;
    user?: Maybe<UsersBoolExp>;
    zipcode?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "addresses" */
export declare enum AddressesConstraint {
    /** unique or primary key constraint */
    AddressesPkey = "addresses_pkey"
}
/** input type for incrementing integer column in table "addresses" */
export declare type AddressesIncInput = {
    id?: Maybe<Scalars['bigint']>;
};
/** input type for inserting data into table "addresses" */
export declare type AddressesInsertInput = {
    address?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    country?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['bigint']>;
    user?: Maybe<UsersObjRelInsertInput>;
    zipcode?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type AddressesMaxFields = {
    __typename?: 'addresses_max_fields';
    address?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['bigint']>;
    zipcode?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "addresses" */
export declare type AddressesMaxOrderBy = {
    address?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    country?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    zipcode?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type AddressesMinFields = {
    __typename?: 'addresses_min_fields';
    address?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['bigint']>;
    zipcode?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "addresses" */
export declare type AddressesMinOrderBy = {
    address?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    country?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    zipcode?: Maybe<OrderBy>;
};
/** response of any mutation on the table "addresses" */
export declare type AddressesMutationResponse = {
    __typename?: 'addresses_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Addresses>;
};
/** input type for inserting object relation for remote table "addresses" */
export declare type AddressesObjRelInsertInput = {
    data: AddressesInsertInput;
    on_conflict?: Maybe<AddressesOnConflict>;
};
/** on conflict condition type for table "addresses" */
export declare type AddressesOnConflict = {
    constraint: AddressesConstraint;
    update_columns: Array<AddressesUpdateColumn>;
    where?: Maybe<AddressesBoolExp>;
};
/** ordering options when selecting data from "addresses" */
export declare type AddressesOrderBy = {
    address?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    country?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    user?: Maybe<UsersOrderBy>;
    zipcode?: Maybe<OrderBy>;
};
/** primary key columns input for table: "addresses" */
export declare type AddressesPkColumnsInput = {
    id: Scalars['bigint'];
};
/** select columns of table "addresses" */
export declare enum AddressesSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    City = "city",
    /** column name */
    Country = "country",
    /** column name */
    Id = "id",
    /** column name */
    Zipcode = "zipcode"
}
/** input type for updating data in table "addresses" */
export declare type AddressesSetInput = {
    address?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['bigint']>;
    zipcode?: Maybe<Scalars['String']>;
};
/** aggregate stddev on columns */
export declare type AddressesStddevFields = {
    __typename?: 'addresses_stddev_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "addresses" */
export declare type AddressesStddevOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type AddressesStddevPopFields = {
    __typename?: 'addresses_stddev_pop_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "addresses" */
export declare type AddressesStddevPopOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type AddressesStddevSampFields = {
    __typename?: 'addresses_stddev_samp_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "addresses" */
export declare type AddressesStddevSampOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type AddressesSumFields = {
    __typename?: 'addresses_sum_fields';
    id?: Maybe<Scalars['bigint']>;
};
/** order by sum() on columns of table "addresses" */
export declare type AddressesSumOrderBy = {
    id?: Maybe<OrderBy>;
};
/** update columns of table "addresses" */
export declare enum AddressesUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    City = "city",
    /** column name */
    Country = "country",
    /** column name */
    Id = "id",
    /** column name */
    Zipcode = "zipcode"
}
/** aggregate var_pop on columns */
export declare type AddressesVarPopFields = {
    __typename?: 'addresses_var_pop_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "addresses" */
export declare type AddressesVarPopOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type AddressesVarSampFields = {
    __typename?: 'addresses_var_samp_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "addresses" */
export declare type AddressesVarSampOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type AddressesVarianceFields = {
    __typename?: 'addresses_variance_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "addresses" */
export declare type AddressesVarianceOrderBy = {
    id?: Maybe<OrderBy>;
};
/** columns and relationships of "animations" */
export declare type Animations = {
    __typename?: 'animations';
    /** An object relationship */
    asset?: Maybe<Assets>;
    asset_id?: Maybe<Scalars['uuid']>;
    /** An array relationship */
    assets: Array<AnimationsM2mAssets>;
    /** An aggregated array relationship */
    assets_aggregate: AnimationsM2mAssetsAggregate;
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    id: Scalars['uuid'];
    name?: Maybe<Scalars['String']>;
    /** An object relationship */
    portal?: Maybe<Assets>;
    portal_id?: Maybe<Scalars['uuid']>;
    /** An object relationship */
    tracker: ArTrackers;
    tracker_id: Scalars['uuid'];
    tracker_position: ArTrackerPositionsEnum;
    /** An object relationship */
    won_asset?: Maybe<Assets>;
    won_asset_id?: Maybe<Scalars['uuid']>;
};
/** columns and relationships of "animations" */
export declare type AnimationsAssetsArgs = {
    distinct_on?: Maybe<Array<AnimationsM2mAssetsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AnimationsM2mAssetsOrderBy>>;
    where?: Maybe<AnimationsM2mAssetsBoolExp>;
};
/** columns and relationships of "animations" */
export declare type AnimationsAssetsAggregateArgs = {
    distinct_on?: Maybe<Array<AnimationsM2mAssetsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AnimationsM2mAssetsOrderBy>>;
    where?: Maybe<AnimationsM2mAssetsBoolExp>;
};
/** aggregated selection of "animations" */
export declare type AnimationsAggregate = {
    __typename?: 'animations_aggregate';
    aggregate?: Maybe<AnimationsAggregateFields>;
    nodes: Array<Animations>;
};
/** aggregate fields of "animations" */
export declare type AnimationsAggregateFields = {
    __typename?: 'animations_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<AnimationsMaxFields>;
    min?: Maybe<AnimationsMinFields>;
};
/** aggregate fields of "animations" */
export declare type AnimationsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<AnimationsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "animations" */
export declare type AnimationsAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<AnimationsMaxOrderBy>;
    min?: Maybe<AnimationsMinOrderBy>;
};
/** input type for inserting array relation for remote table "animations" */
export declare type AnimationsArrRelInsertInput = {
    data: Array<AnimationsInsertInput>;
    on_conflict?: Maybe<AnimationsOnConflict>;
};
/** Boolean expression to filter rows from the table "animations". All fields are combined with a logical 'AND'. */
export declare type AnimationsBoolExp = {
    _and?: Maybe<Array<Maybe<AnimationsBoolExp>>>;
    _not?: Maybe<AnimationsBoolExp>;
    _or?: Maybe<Array<Maybe<AnimationsBoolExp>>>;
    asset?: Maybe<AssetsBoolExp>;
    asset_id?: Maybe<UuidComparisonExp>;
    assets?: Maybe<AnimationsM2mAssetsBoolExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    portal?: Maybe<AssetsBoolExp>;
    portal_id?: Maybe<UuidComparisonExp>;
    tracker?: Maybe<ArTrackersBoolExp>;
    tracker_id?: Maybe<UuidComparisonExp>;
    tracker_position?: Maybe<ArTrackerPositionsEnumComparisonExp>;
    won_asset?: Maybe<AssetsBoolExp>;
    won_asset_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "animations" */
export declare enum AnimationsConstraint {
    /** unique or primary key constraint */
    AnimationsPkey = "animations_pkey"
}
/** input type for inserting data into table "animations" */
export declare type AnimationsInsertInput = {
    asset?: Maybe<AssetsObjRelInsertInput>;
    asset_id?: Maybe<Scalars['uuid']>;
    assets?: Maybe<AnimationsM2mAssetsArrRelInsertInput>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    portal?: Maybe<AssetsObjRelInsertInput>;
    portal_id?: Maybe<Scalars['uuid']>;
    tracker?: Maybe<ArTrackersObjRelInsertInput>;
    tracker_id?: Maybe<Scalars['uuid']>;
    tracker_position?: Maybe<ArTrackerPositionsEnum>;
    won_asset?: Maybe<AssetsObjRelInsertInput>;
    won_asset_id?: Maybe<Scalars['uuid']>;
};
/** columns and relationships of "animations_m2m_assets" */
export declare type AnimationsM2mAssets = {
    __typename?: 'animations_m2m_assets';
    /** An object relationship */
    animation: Animations;
    animation_id: Scalars['uuid'];
    /** An object relationship */
    asset: Assets;
    asset_id: Scalars['uuid'];
    when_won: Scalars['Boolean'];
};
/** aggregated selection of "animations_m2m_assets" */
export declare type AnimationsM2mAssetsAggregate = {
    __typename?: 'animations_m2m_assets_aggregate';
    aggregate?: Maybe<AnimationsM2mAssetsAggregateFields>;
    nodes: Array<AnimationsM2mAssets>;
};
/** aggregate fields of "animations_m2m_assets" */
export declare type AnimationsM2mAssetsAggregateFields = {
    __typename?: 'animations_m2m_assets_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<AnimationsM2mAssetsMaxFields>;
    min?: Maybe<AnimationsM2mAssetsMinFields>;
};
/** aggregate fields of "animations_m2m_assets" */
export declare type AnimationsM2mAssetsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<AnimationsM2mAssetsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "animations_m2m_assets" */
export declare type AnimationsM2mAssetsAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<AnimationsM2mAssetsMaxOrderBy>;
    min?: Maybe<AnimationsM2mAssetsMinOrderBy>;
};
/** input type for inserting array relation for remote table "animations_m2m_assets" */
export declare type AnimationsM2mAssetsArrRelInsertInput = {
    data: Array<AnimationsM2mAssetsInsertInput>;
    on_conflict?: Maybe<AnimationsM2mAssetsOnConflict>;
};
/** Boolean expression to filter rows from the table "animations_m2m_assets". All fields are combined with a logical 'AND'. */
export declare type AnimationsM2mAssetsBoolExp = {
    _and?: Maybe<Array<Maybe<AnimationsM2mAssetsBoolExp>>>;
    _not?: Maybe<AnimationsM2mAssetsBoolExp>;
    _or?: Maybe<Array<Maybe<AnimationsM2mAssetsBoolExp>>>;
    animation?: Maybe<AnimationsBoolExp>;
    animation_id?: Maybe<UuidComparisonExp>;
    asset?: Maybe<AssetsBoolExp>;
    asset_id?: Maybe<UuidComparisonExp>;
    when_won?: Maybe<BooleanComparisonExp>;
};
/** unique or primary key constraints on table "animations_m2m_assets" */
export declare enum AnimationsM2mAssetsConstraint {
    /** unique or primary key constraint */
    AnimationsM2mAssetsPkey = "animations_m2m_assets_pkey"
}
/** input type for inserting data into table "animations_m2m_assets" */
export declare type AnimationsM2mAssetsInsertInput = {
    animation?: Maybe<AnimationsObjRelInsertInput>;
    animation_id?: Maybe<Scalars['uuid']>;
    asset?: Maybe<AssetsObjRelInsertInput>;
    asset_id?: Maybe<Scalars['uuid']>;
    when_won?: Maybe<Scalars['Boolean']>;
};
/** aggregate max on columns */
export declare type AnimationsM2mAssetsMaxFields = {
    __typename?: 'animations_m2m_assets_max_fields';
    animation_id?: Maybe<Scalars['uuid']>;
    asset_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "animations_m2m_assets" */
export declare type AnimationsM2mAssetsMaxOrderBy = {
    animation_id?: Maybe<OrderBy>;
    asset_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type AnimationsM2mAssetsMinFields = {
    __typename?: 'animations_m2m_assets_min_fields';
    animation_id?: Maybe<Scalars['uuid']>;
    asset_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "animations_m2m_assets" */
export declare type AnimationsM2mAssetsMinOrderBy = {
    animation_id?: Maybe<OrderBy>;
    asset_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "animations_m2m_assets" */
export declare type AnimationsM2mAssetsMutationResponse = {
    __typename?: 'animations_m2m_assets_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<AnimationsM2mAssets>;
};
/** input type for inserting object relation for remote table "animations_m2m_assets" */
export declare type AnimationsM2mAssetsObjRelInsertInput = {
    data: AnimationsM2mAssetsInsertInput;
    on_conflict?: Maybe<AnimationsM2mAssetsOnConflict>;
};
/** on conflict condition type for table "animations_m2m_assets" */
export declare type AnimationsM2mAssetsOnConflict = {
    constraint: AnimationsM2mAssetsConstraint;
    update_columns: Array<AnimationsM2mAssetsUpdateColumn>;
    where?: Maybe<AnimationsM2mAssetsBoolExp>;
};
/** ordering options when selecting data from "animations_m2m_assets" */
export declare type AnimationsM2mAssetsOrderBy = {
    animation?: Maybe<AnimationsOrderBy>;
    animation_id?: Maybe<OrderBy>;
    asset?: Maybe<AssetsOrderBy>;
    asset_id?: Maybe<OrderBy>;
    when_won?: Maybe<OrderBy>;
};
/** primary key columns input for table: "animations_m2m_assets" */
export declare type AnimationsM2mAssetsPkColumnsInput = {
    animation_id: Scalars['uuid'];
    asset_id: Scalars['uuid'];
};
/** select columns of table "animations_m2m_assets" */
export declare enum AnimationsM2mAssetsSelectColumn {
    /** column name */
    AnimationId = "animation_id",
    /** column name */
    AssetId = "asset_id",
    /** column name */
    WhenWon = "when_won"
}
/** input type for updating data in table "animations_m2m_assets" */
export declare type AnimationsM2mAssetsSetInput = {
    animation_id?: Maybe<Scalars['uuid']>;
    asset_id?: Maybe<Scalars['uuid']>;
    when_won?: Maybe<Scalars['Boolean']>;
};
/** update columns of table "animations_m2m_assets" */
export declare enum AnimationsM2mAssetsUpdateColumn {
    /** column name */
    AnimationId = "animation_id",
    /** column name */
    AssetId = "asset_id",
    /** column name */
    WhenWon = "when_won"
}
/** aggregate max on columns */
export declare type AnimationsMaxFields = {
    __typename?: 'animations_max_fields';
    asset_id?: Maybe<Scalars['uuid']>;
    client_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    portal_id?: Maybe<Scalars['uuid']>;
    tracker_id?: Maybe<Scalars['uuid']>;
    won_asset_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "animations" */
export declare type AnimationsMaxOrderBy = {
    asset_id?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    portal_id?: Maybe<OrderBy>;
    tracker_id?: Maybe<OrderBy>;
    won_asset_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type AnimationsMinFields = {
    __typename?: 'animations_min_fields';
    asset_id?: Maybe<Scalars['uuid']>;
    client_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    portal_id?: Maybe<Scalars['uuid']>;
    tracker_id?: Maybe<Scalars['uuid']>;
    won_asset_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "animations" */
export declare type AnimationsMinOrderBy = {
    asset_id?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    portal_id?: Maybe<OrderBy>;
    tracker_id?: Maybe<OrderBy>;
    won_asset_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "animations" */
export declare type AnimationsMutationResponse = {
    __typename?: 'animations_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Animations>;
};
/** input type for inserting object relation for remote table "animations" */
export declare type AnimationsObjRelInsertInput = {
    data: AnimationsInsertInput;
    on_conflict?: Maybe<AnimationsOnConflict>;
};
/** on conflict condition type for table "animations" */
export declare type AnimationsOnConflict = {
    constraint: AnimationsConstraint;
    update_columns: Array<AnimationsUpdateColumn>;
    where?: Maybe<AnimationsBoolExp>;
};
/** ordering options when selecting data from "animations" */
export declare type AnimationsOrderBy = {
    asset?: Maybe<AssetsOrderBy>;
    asset_id?: Maybe<OrderBy>;
    assets_aggregate?: Maybe<AnimationsM2mAssetsAggregateOrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    portal?: Maybe<AssetsOrderBy>;
    portal_id?: Maybe<OrderBy>;
    tracker?: Maybe<ArTrackersOrderBy>;
    tracker_id?: Maybe<OrderBy>;
    tracker_position?: Maybe<OrderBy>;
    won_asset?: Maybe<AssetsOrderBy>;
    won_asset_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "animations" */
export declare type AnimationsPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "animations" */
export declare enum AnimationsSelectColumn {
    /** column name */
    AssetId = "asset_id",
    /** column name */
    ClientId = "client_id",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    PortalId = "portal_id",
    /** column name */
    TrackerId = "tracker_id",
    /** column name */
    TrackerPosition = "tracker_position",
    /** column name */
    WonAssetId = "won_asset_id"
}
/** input type for updating data in table "animations" */
export declare type AnimationsSetInput = {
    asset_id?: Maybe<Scalars['uuid']>;
    client_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    portal_id?: Maybe<Scalars['uuid']>;
    tracker_id?: Maybe<Scalars['uuid']>;
    tracker_position?: Maybe<ArTrackerPositionsEnum>;
    won_asset_id?: Maybe<Scalars['uuid']>;
};
/** update columns of table "animations" */
export declare enum AnimationsUpdateColumn {
    /** column name */
    AssetId = "asset_id",
    /** column name */
    ClientId = "client_id",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    PortalId = "portal_id",
    /** column name */
    TrackerId = "tracker_id",
    /** column name */
    TrackerPosition = "tracker_position",
    /** column name */
    WonAssetId = "won_asset_id"
}
/** columns and relationships of "ar" */
export declare type Ar = {
    __typename?: 'ar';
    address?: Maybe<Scalars['String']>;
    /** An array relationship */
    animations: Array<ArM2mAnimations>;
    /** An aggregated array relationship */
    animations_aggregate: ArM2mAnimationsAggregate;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    /** An array relationship */
    games_gains: Array<GamesGains>;
    /** An aggregated array relationship */
    games_gains_aggregate: GamesGainsAggregate;
    /** An array relationship */
    games_gains_available: Array<GamesGainsAvailable>;
    /** An aggregated array relationship */
    games_gains_available_aggregate: GamesGainsAvailableAggregate;
    gtc?: Maybe<Scalars['String']>;
    id: Scalars['uuid'];
    instructions?: Maybe<Scalars['String']>;
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    is_test: Scalars['Boolean'];
    keep_cumulated_probability: Scalars['Boolean'];
    location?: Maybe<Scalars['geography']>;
    max_participations: Scalars['Int'];
    name: Scalars['String'];
    radius?: Maybe<Scalars['Int']>;
    /** An object relationship */
    type: GamesTypes;
    type_id: Scalars['uuid'];
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    with_instant_gains: Scalars['Boolean'];
    with_magic_random_drawings: Scalars['Boolean'];
    with_random_drawings: Scalars['Boolean'];
};
/** columns and relationships of "ar" */
export declare type ArAnimationsArgs = {
    distinct_on?: Maybe<Array<ArM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArM2mAnimationsOrderBy>>;
    where?: Maybe<ArM2mAnimationsBoolExp>;
};
/** columns and relationships of "ar" */
export declare type ArAnimationsAggregateArgs = {
    distinct_on?: Maybe<Array<ArM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArM2mAnimationsOrderBy>>;
    where?: Maybe<ArM2mAnimationsBoolExp>;
};
/** columns and relationships of "ar" */
export declare type ArDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "ar" */
export declare type ArGamesGainsArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "ar" */
export declare type ArGamesGainsAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "ar" */
export declare type ArGamesGainsAvailableArgs = {
    distinct_on?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsAvailableOrderBy>>;
    where?: Maybe<GamesGainsAvailableBoolExp>;
};
/** columns and relationships of "ar" */
export declare type ArGamesGainsAvailableAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsAvailableOrderBy>>;
    where?: Maybe<GamesGainsAvailableBoolExp>;
};
/** aggregated selection of "ar" */
export declare type ArAggregate = {
    __typename?: 'ar_aggregate';
    aggregate?: Maybe<ArAggregateFields>;
    nodes: Array<Ar>;
};
/** aggregate fields of "ar" */
export declare type ArAggregateFields = {
    __typename?: 'ar_aggregate_fields';
    avg?: Maybe<ArAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<ArMaxFields>;
    min?: Maybe<ArMinFields>;
    stddev?: Maybe<ArStddevFields>;
    stddev_pop?: Maybe<ArStddevPopFields>;
    stddev_samp?: Maybe<ArStddevSampFields>;
    sum?: Maybe<ArSumFields>;
    var_pop?: Maybe<ArVarPopFields>;
    var_samp?: Maybe<ArVarSampFields>;
    variance?: Maybe<ArVarianceFields>;
};
/** aggregate fields of "ar" */
export declare type ArAggregateFieldsCountArgs = {
    columns?: Maybe<Array<ArSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "ar" */
export declare type ArAggregateOrderBy = {
    avg?: Maybe<ArAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<ArMaxOrderBy>;
    min?: Maybe<ArMinOrderBy>;
    stddev?: Maybe<ArStddevOrderBy>;
    stddev_pop?: Maybe<ArStddevPopOrderBy>;
    stddev_samp?: Maybe<ArStddevSampOrderBy>;
    sum?: Maybe<ArSumOrderBy>;
    var_pop?: Maybe<ArVarPopOrderBy>;
    var_samp?: Maybe<ArVarSampOrderBy>;
    variance?: Maybe<ArVarianceOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type ArAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "ar" */
export declare type ArArrRelInsertInput = {
    data: Array<ArInsertInput>;
    on_conflict?: Maybe<ArOnConflict>;
};
/** aggregate avg on columns */
export declare type ArAvgFields = {
    __typename?: 'ar_avg_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "ar" */
export declare type ArAvgOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "ar". All fields are combined with a logical 'AND'. */
export declare type ArBoolExp = {
    _and?: Maybe<Array<Maybe<ArBoolExp>>>;
    _not?: Maybe<ArBoolExp>;
    _or?: Maybe<Array<Maybe<ArBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    animations?: Maybe<ArM2mAnimationsBoolExp>;
    card_image_background_id?: Maybe<UuidComparisonExp>;
    card_image_id?: Maybe<UuidComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    frequency?: Maybe<GamesFrequenciesEnumComparisonExp>;
    games_gains?: Maybe<GamesGainsBoolExp>;
    games_gains_available?: Maybe<GamesGainsAvailableBoolExp>;
    gtc?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    instructions?: Maybe<StringComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_private?: Maybe<BooleanComparisonExp>;
    is_test?: Maybe<BooleanComparisonExp>;
    keep_cumulated_probability?: Maybe<BooleanComparisonExp>;
    location?: Maybe<GeographyComparisonExp>;
    max_participations?: Maybe<IntComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    radius?: Maybe<IntComparisonExp>;
    type?: Maybe<GamesTypesBoolExp>;
    type_id?: Maybe<UuidComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
    valorization?: Maybe<GamesValorizationsEnumComparisonExp>;
    with_instant_gains?: Maybe<BooleanComparisonExp>;
    with_magic_random_drawings?: Maybe<BooleanComparisonExp>;
    with_random_drawings?: Maybe<BooleanComparisonExp>;
};
/** unique or primary key constraints on table "ar" */
export declare enum ArConstraint {
    /** unique or primary key constraint */
    ArIdKey = "ar_id_key",
    /** unique or primary key constraint */
    ArPkey = "ar_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type ArDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type ArDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type ArDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
};
/** input type for incrementing integer column in table "ar" */
export declare type ArIncInput = {
    max_participations?: Maybe<Scalars['Int']>;
    radius?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "ar" */
export declare type ArInsertInput = {
    address?: Maybe<Scalars['String']>;
    animations?: Maybe<ArM2mAnimationsArrRelInsertInput>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    games_gains?: Maybe<GamesGainsArrRelInsertInput>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    keep_cumulated_probability?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type?: Maybe<GamesTypesObjRelInsertInput>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    with_instant_gains?: Maybe<Scalars['Boolean']>;
    with_magic_random_drawings?: Maybe<Scalars['Boolean']>;
    with_random_drawings?: Maybe<Scalars['Boolean']>;
};
/** columns and relationships of "ar_m2m_animations" */
export declare type ArM2mAnimations = {
    __typename?: 'ar_m2m_animations';
    /** An object relationship */
    animation: Animations;
    animation_id: Scalars['uuid'];
    /** An object relationship */
    ar: Ar;
    ar_id: Scalars['uuid'];
};
/** aggregated selection of "ar_m2m_animations" */
export declare type ArM2mAnimationsAggregate = {
    __typename?: 'ar_m2m_animations_aggregate';
    aggregate?: Maybe<ArM2mAnimationsAggregateFields>;
    nodes: Array<ArM2mAnimations>;
};
/** aggregate fields of "ar_m2m_animations" */
export declare type ArM2mAnimationsAggregateFields = {
    __typename?: 'ar_m2m_animations_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<ArM2mAnimationsMaxFields>;
    min?: Maybe<ArM2mAnimationsMinFields>;
};
/** aggregate fields of "ar_m2m_animations" */
export declare type ArM2mAnimationsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<ArM2mAnimationsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "ar_m2m_animations" */
export declare type ArM2mAnimationsAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<ArM2mAnimationsMaxOrderBy>;
    min?: Maybe<ArM2mAnimationsMinOrderBy>;
};
/** input type for inserting array relation for remote table "ar_m2m_animations" */
export declare type ArM2mAnimationsArrRelInsertInput = {
    data: Array<ArM2mAnimationsInsertInput>;
    on_conflict?: Maybe<ArM2mAnimationsOnConflict>;
};
/** Boolean expression to filter rows from the table "ar_m2m_animations". All fields are combined with a logical 'AND'. */
export declare type ArM2mAnimationsBoolExp = {
    _and?: Maybe<Array<Maybe<ArM2mAnimationsBoolExp>>>;
    _not?: Maybe<ArM2mAnimationsBoolExp>;
    _or?: Maybe<Array<Maybe<ArM2mAnimationsBoolExp>>>;
    animation?: Maybe<AnimationsBoolExp>;
    animation_id?: Maybe<UuidComparisonExp>;
    ar?: Maybe<ArBoolExp>;
    ar_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "ar_m2m_animations" */
export declare enum ArM2mAnimationsConstraint {
    /** unique or primary key constraint */
    ArM2mAnimationsPkey = "ar_m2m_animations_pkey"
}
/** input type for inserting data into table "ar_m2m_animations" */
export declare type ArM2mAnimationsInsertInput = {
    animation?: Maybe<AnimationsObjRelInsertInput>;
    animation_id?: Maybe<Scalars['uuid']>;
    ar?: Maybe<ArObjRelInsertInput>;
    ar_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type ArM2mAnimationsMaxFields = {
    __typename?: 'ar_m2m_animations_max_fields';
    animation_id?: Maybe<Scalars['uuid']>;
    ar_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "ar_m2m_animations" */
export declare type ArM2mAnimationsMaxOrderBy = {
    animation_id?: Maybe<OrderBy>;
    ar_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type ArM2mAnimationsMinFields = {
    __typename?: 'ar_m2m_animations_min_fields';
    animation_id?: Maybe<Scalars['uuid']>;
    ar_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "ar_m2m_animations" */
export declare type ArM2mAnimationsMinOrderBy = {
    animation_id?: Maybe<OrderBy>;
    ar_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "ar_m2m_animations" */
export declare type ArM2mAnimationsMutationResponse = {
    __typename?: 'ar_m2m_animations_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<ArM2mAnimations>;
};
/** input type for inserting object relation for remote table "ar_m2m_animations" */
export declare type ArM2mAnimationsObjRelInsertInput = {
    data: ArM2mAnimationsInsertInput;
    on_conflict?: Maybe<ArM2mAnimationsOnConflict>;
};
/** on conflict condition type for table "ar_m2m_animations" */
export declare type ArM2mAnimationsOnConflict = {
    constraint: ArM2mAnimationsConstraint;
    update_columns: Array<ArM2mAnimationsUpdateColumn>;
    where?: Maybe<ArM2mAnimationsBoolExp>;
};
/** ordering options when selecting data from "ar_m2m_animations" */
export declare type ArM2mAnimationsOrderBy = {
    animation?: Maybe<AnimationsOrderBy>;
    animation_id?: Maybe<OrderBy>;
    ar?: Maybe<ArOrderBy>;
    ar_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "ar_m2m_animations" */
export declare type ArM2mAnimationsPkColumnsInput = {
    animation_id: Scalars['uuid'];
    ar_id: Scalars['uuid'];
};
/** select columns of table "ar_m2m_animations" */
export declare enum ArM2mAnimationsSelectColumn {
    /** column name */
    AnimationId = "animation_id",
    /** column name */
    ArId = "ar_id"
}
/** input type for updating data in table "ar_m2m_animations" */
export declare type ArM2mAnimationsSetInput = {
    animation_id?: Maybe<Scalars['uuid']>;
    ar_id?: Maybe<Scalars['uuid']>;
};
/** update columns of table "ar_m2m_animations" */
export declare enum ArM2mAnimationsUpdateColumn {
    /** column name */
    AnimationId = "animation_id",
    /** column name */
    ArId = "ar_id"
}
/** aggregate max on columns */
export declare type ArMaxFields = {
    __typename?: 'ar_max_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "ar" */
export declare type ArMaxOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type ArMinFields = {
    __typename?: 'ar_min_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "ar" */
export declare type ArMinOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** response of any mutation on the table "ar" */
export declare type ArMutationResponse = {
    __typename?: 'ar_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Ar>;
};
/** input type for inserting object relation for remote table "ar" */
export declare type ArObjRelInsertInput = {
    data: ArInsertInput;
    on_conflict?: Maybe<ArOnConflict>;
};
/** on conflict condition type for table "ar" */
export declare type ArOnConflict = {
    constraint: ArConstraint;
    update_columns: Array<ArUpdateColumn>;
    where?: Maybe<ArBoolExp>;
};
/** ordering options when selecting data from "ar" */
export declare type ArOrderBy = {
    address?: Maybe<OrderBy>;
    animations_aggregate?: Maybe<ArM2mAnimationsAggregateOrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    frequency?: Maybe<OrderBy>;
    games_gains_aggregate?: Maybe<GamesGainsAggregateOrderBy>;
    games_gains_available_aggregate?: Maybe<GamesGainsAvailableAggregateOrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_private?: Maybe<OrderBy>;
    is_test?: Maybe<OrderBy>;
    keep_cumulated_probability?: Maybe<OrderBy>;
    location?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type?: Maybe<GamesTypesOrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
    valorization?: Maybe<OrderBy>;
    with_instant_gains?: Maybe<OrderBy>;
    with_magic_random_drawings?: Maybe<OrderBy>;
    with_random_drawings?: Maybe<OrderBy>;
};
/** primary key columns input for table: "ar" */
export declare type ArPkColumnsInput = {
    id: Scalars['uuid'];
};
/** columns and relationships of "ar_played" */
export declare type ArPlayed = {
    __typename?: 'ar_played';
    /** An object relationship */
    gain?: Maybe<Gains>;
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated: Scalars['Boolean'];
    game_id: Scalars['uuid'];
    id: Scalars['bigint'];
    played_at: Scalars['timestamptz'];
    user_id: Scalars['uuid'];
};
/** aggregated selection of "ar_played" */
export declare type ArPlayedAggregate = {
    __typename?: 'ar_played_aggregate';
    aggregate?: Maybe<ArPlayedAggregateFields>;
    nodes: Array<ArPlayed>;
};
/** aggregate fields of "ar_played" */
export declare type ArPlayedAggregateFields = {
    __typename?: 'ar_played_aggregate_fields';
    avg?: Maybe<ArPlayedAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<ArPlayedMaxFields>;
    min?: Maybe<ArPlayedMinFields>;
    stddev?: Maybe<ArPlayedStddevFields>;
    stddev_pop?: Maybe<ArPlayedStddevPopFields>;
    stddev_samp?: Maybe<ArPlayedStddevSampFields>;
    sum?: Maybe<ArPlayedSumFields>;
    var_pop?: Maybe<ArPlayedVarPopFields>;
    var_samp?: Maybe<ArPlayedVarSampFields>;
    variance?: Maybe<ArPlayedVarianceFields>;
};
/** aggregate fields of "ar_played" */
export declare type ArPlayedAggregateFieldsCountArgs = {
    columns?: Maybe<Array<ArPlayedSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "ar_played" */
export declare type ArPlayedAggregateOrderBy = {
    avg?: Maybe<ArPlayedAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<ArPlayedMaxOrderBy>;
    min?: Maybe<ArPlayedMinOrderBy>;
    stddev?: Maybe<ArPlayedStddevOrderBy>;
    stddev_pop?: Maybe<ArPlayedStddevPopOrderBy>;
    stddev_samp?: Maybe<ArPlayedStddevSampOrderBy>;
    sum?: Maybe<ArPlayedSumOrderBy>;
    var_pop?: Maybe<ArPlayedVarPopOrderBy>;
    var_samp?: Maybe<ArPlayedVarSampOrderBy>;
    variance?: Maybe<ArPlayedVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "ar_played" */
export declare type ArPlayedArrRelInsertInput = {
    data: Array<ArPlayedInsertInput>;
    on_conflict?: Maybe<ArPlayedOnConflict>;
};
/** aggregate avg on columns */
export declare type ArPlayedAvgFields = {
    __typename?: 'ar_played_avg_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "ar_played" */
export declare type ArPlayedAvgOrderBy = {
    id?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "ar_played". All fields are combined with a logical 'AND'. */
export declare type ArPlayedBoolExp = {
    _and?: Maybe<Array<Maybe<ArPlayedBoolExp>>>;
    _not?: Maybe<ArPlayedBoolExp>;
    _or?: Maybe<Array<Maybe<ArPlayedBoolExp>>>;
    gain?: Maybe<GainsBoolExp>;
    gain_id?: Maybe<UuidComparisonExp>;
    gain_validated?: Maybe<BooleanComparisonExp>;
    game_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<BigintComparisonExp>;
    played_at?: Maybe<TimestamptzComparisonExp>;
    user_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "ar_played" */
export declare enum ArPlayedConstraint {
    /** unique or primary key constraint */
    ArPlayedPkey = "ar_played_pkey"
}
/** input type for incrementing integer column in table "ar_played" */
export declare type ArPlayedIncInput = {
    id?: Maybe<Scalars['bigint']>;
};
/** input type for inserting data into table "ar_played" */
export declare type ArPlayedInsertInput = {
    gain?: Maybe<GainsObjRelInsertInput>;
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated?: Maybe<Scalars['Boolean']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type ArPlayedMaxFields = {
    __typename?: 'ar_played_max_fields';
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "ar_played" */
export declare type ArPlayedMaxOrderBy = {
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type ArPlayedMinFields = {
    __typename?: 'ar_played_min_fields';
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "ar_played" */
export declare type ArPlayedMinOrderBy = {
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "ar_played" */
export declare type ArPlayedMutationResponse = {
    __typename?: 'ar_played_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<ArPlayed>;
};
/** input type for inserting object relation for remote table "ar_played" */
export declare type ArPlayedObjRelInsertInput = {
    data: ArPlayedInsertInput;
    on_conflict?: Maybe<ArPlayedOnConflict>;
};
/** on conflict condition type for table "ar_played" */
export declare type ArPlayedOnConflict = {
    constraint: ArPlayedConstraint;
    update_columns: Array<ArPlayedUpdateColumn>;
    where?: Maybe<ArPlayedBoolExp>;
};
/** ordering options when selecting data from "ar_played" */
export declare type ArPlayedOrderBy = {
    gain?: Maybe<GainsOrderBy>;
    gain_id?: Maybe<OrderBy>;
    gain_validated?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "ar_played" */
export declare type ArPlayedPkColumnsInput = {
    id: Scalars['bigint'];
};
/** select columns of table "ar_played" */
export declare enum ArPlayedSelectColumn {
    /** column name */
    GainId = "gain_id",
    /** column name */
    GainValidated = "gain_validated",
    /** column name */
    GameId = "game_id",
    /** column name */
    Id = "id",
    /** column name */
    PlayedAt = "played_at",
    /** column name */
    UserId = "user_id"
}
/** input type for updating data in table "ar_played" */
export declare type ArPlayedSetInput = {
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated?: Maybe<Scalars['Boolean']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate stddev on columns */
export declare type ArPlayedStddevFields = {
    __typename?: 'ar_played_stddev_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "ar_played" */
export declare type ArPlayedStddevOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type ArPlayedStddevPopFields = {
    __typename?: 'ar_played_stddev_pop_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "ar_played" */
export declare type ArPlayedStddevPopOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type ArPlayedStddevSampFields = {
    __typename?: 'ar_played_stddev_samp_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "ar_played" */
export declare type ArPlayedStddevSampOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type ArPlayedSumFields = {
    __typename?: 'ar_played_sum_fields';
    id?: Maybe<Scalars['bigint']>;
};
/** order by sum() on columns of table "ar_played" */
export declare type ArPlayedSumOrderBy = {
    id?: Maybe<OrderBy>;
};
/** update columns of table "ar_played" */
export declare enum ArPlayedUpdateColumn {
    /** column name */
    GainId = "gain_id",
    /** column name */
    GainValidated = "gain_validated",
    /** column name */
    GameId = "game_id",
    /** column name */
    Id = "id",
    /** column name */
    PlayedAt = "played_at",
    /** column name */
    UserId = "user_id"
}
/** aggregate var_pop on columns */
export declare type ArPlayedVarPopFields = {
    __typename?: 'ar_played_var_pop_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "ar_played" */
export declare type ArPlayedVarPopOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type ArPlayedVarSampFields = {
    __typename?: 'ar_played_var_samp_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "ar_played" */
export declare type ArPlayedVarSampOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type ArPlayedVarianceFields = {
    __typename?: 'ar_played_variance_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "ar_played" */
export declare type ArPlayedVarianceOrderBy = {
    id?: Maybe<OrderBy>;
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type ArPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "ar" */
export declare enum ArSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Frequency = "frequency",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    IsTest = "is_test",
    /** column name */
    KeepCumulatedProbability = "keep_cumulated_probability",
    /** column name */
    Location = "location",
    /** column name */
    MaxParticipations = "max_participations",
    /** column name */
    Name = "name",
    /** column name */
    Radius = "radius",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz",
    /** column name */
    Valorization = "valorization",
    /** column name */
    WithInstantGains = "with_instant_gains",
    /** column name */
    WithMagicRandomDrawings = "with_magic_random_drawings",
    /** column name */
    WithRandomDrawings = "with_random_drawings"
}
/** input type for updating data in table "ar" */
export declare type ArSetInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    keep_cumulated_probability?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    with_instant_gains?: Maybe<Scalars['Boolean']>;
    with_magic_random_drawings?: Maybe<Scalars['Boolean']>;
    with_random_drawings?: Maybe<Scalars['Boolean']>;
};
/** aggregate stddev on columns */
export declare type ArStddevFields = {
    __typename?: 'ar_stddev_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "ar" */
export declare type ArStddevOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type ArStddevPopFields = {
    __typename?: 'ar_stddev_pop_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "ar" */
export declare type ArStddevPopOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type ArStddevSampFields = {
    __typename?: 'ar_stddev_samp_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "ar" */
export declare type ArStddevSampOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type ArSumFields = {
    __typename?: 'ar_sum_fields';
    max_participations?: Maybe<Scalars['Int']>;
    radius?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "ar" */
export declare type ArSumOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** columns and relationships of "ar_tracker_positions" */
export declare type ArTrackerPositions = {
    __typename?: 'ar_tracker_positions';
    position: Scalars['String'];
};
/** aggregated selection of "ar_tracker_positions" */
export declare type ArTrackerPositionsAggregate = {
    __typename?: 'ar_tracker_positions_aggregate';
    aggregate?: Maybe<ArTrackerPositionsAggregateFields>;
    nodes: Array<ArTrackerPositions>;
};
/** aggregate fields of "ar_tracker_positions" */
export declare type ArTrackerPositionsAggregateFields = {
    __typename?: 'ar_tracker_positions_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<ArTrackerPositionsMaxFields>;
    min?: Maybe<ArTrackerPositionsMinFields>;
};
/** aggregate fields of "ar_tracker_positions" */
export declare type ArTrackerPositionsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<ArTrackerPositionsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "ar_tracker_positions" */
export declare type ArTrackerPositionsAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<ArTrackerPositionsMaxOrderBy>;
    min?: Maybe<ArTrackerPositionsMinOrderBy>;
};
/** input type for inserting array relation for remote table "ar_tracker_positions" */
export declare type ArTrackerPositionsArrRelInsertInput = {
    data: Array<ArTrackerPositionsInsertInput>;
    on_conflict?: Maybe<ArTrackerPositionsOnConflict>;
};
/** Boolean expression to filter rows from the table "ar_tracker_positions". All fields are combined with a logical 'AND'. */
export declare type ArTrackerPositionsBoolExp = {
    _and?: Maybe<Array<Maybe<ArTrackerPositionsBoolExp>>>;
    _not?: Maybe<ArTrackerPositionsBoolExp>;
    _or?: Maybe<Array<Maybe<ArTrackerPositionsBoolExp>>>;
    position?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "ar_tracker_positions" */
export declare enum ArTrackerPositionsConstraint {
    /** unique or primary key constraint */
    ArTrackerPositionsPkey = "ar_tracker_positions_pkey"
}
export declare enum ArTrackerPositionsEnum {
    Floor = "floor",
    Wall = "wall"
}
/** expression to compare columns of type ar_tracker_positions_enum. All fields are combined with logical 'AND'. */
export declare type ArTrackerPositionsEnumComparisonExp = {
    _eq?: Maybe<ArTrackerPositionsEnum>;
    _in?: Maybe<Array<ArTrackerPositionsEnum>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _neq?: Maybe<ArTrackerPositionsEnum>;
    _nin?: Maybe<Array<ArTrackerPositionsEnum>>;
};
/** input type for inserting data into table "ar_tracker_positions" */
export declare type ArTrackerPositionsInsertInput = {
    position?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type ArTrackerPositionsMaxFields = {
    __typename?: 'ar_tracker_positions_max_fields';
    position?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "ar_tracker_positions" */
export declare type ArTrackerPositionsMaxOrderBy = {
    position?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type ArTrackerPositionsMinFields = {
    __typename?: 'ar_tracker_positions_min_fields';
    position?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "ar_tracker_positions" */
export declare type ArTrackerPositionsMinOrderBy = {
    position?: Maybe<OrderBy>;
};
/** response of any mutation on the table "ar_tracker_positions" */
export declare type ArTrackerPositionsMutationResponse = {
    __typename?: 'ar_tracker_positions_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<ArTrackerPositions>;
};
/** input type for inserting object relation for remote table "ar_tracker_positions" */
export declare type ArTrackerPositionsObjRelInsertInput = {
    data: ArTrackerPositionsInsertInput;
    on_conflict?: Maybe<ArTrackerPositionsOnConflict>;
};
/** on conflict condition type for table "ar_tracker_positions" */
export declare type ArTrackerPositionsOnConflict = {
    constraint: ArTrackerPositionsConstraint;
    update_columns: Array<ArTrackerPositionsUpdateColumn>;
    where?: Maybe<ArTrackerPositionsBoolExp>;
};
/** ordering options when selecting data from "ar_tracker_positions" */
export declare type ArTrackerPositionsOrderBy = {
    position?: Maybe<OrderBy>;
};
/** primary key columns input for table: "ar_tracker_positions" */
export declare type ArTrackerPositionsPkColumnsInput = {
    position: Scalars['String'];
};
/** select columns of table "ar_tracker_positions" */
export declare enum ArTrackerPositionsSelectColumn {
    /** column name */
    Position = "position"
}
/** input type for updating data in table "ar_tracker_positions" */
export declare type ArTrackerPositionsSetInput = {
    position?: Maybe<Scalars['String']>;
};
/** update columns of table "ar_tracker_positions" */
export declare enum ArTrackerPositionsUpdateColumn {
    /** column name */
    Position = "position"
}
/** columns and relationships of "ar_trackers" */
export declare type ArTrackers = {
    __typename?: 'ar_trackers';
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    height: Scalars['numeric'];
    id: Scalars['uuid'];
    /** An object relationship */
    image: Assets;
    image_id: Scalars['uuid'];
    name?: Maybe<Scalars['String']>;
    qrcode_inside: Scalars['Boolean'];
    width: Scalars['numeric'];
};
/** aggregated selection of "ar_trackers" */
export declare type ArTrackersAggregate = {
    __typename?: 'ar_trackers_aggregate';
    aggregate?: Maybe<ArTrackersAggregateFields>;
    nodes: Array<ArTrackers>;
};
/** aggregate fields of "ar_trackers" */
export declare type ArTrackersAggregateFields = {
    __typename?: 'ar_trackers_aggregate_fields';
    avg?: Maybe<ArTrackersAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<ArTrackersMaxFields>;
    min?: Maybe<ArTrackersMinFields>;
    stddev?: Maybe<ArTrackersStddevFields>;
    stddev_pop?: Maybe<ArTrackersStddevPopFields>;
    stddev_samp?: Maybe<ArTrackersStddevSampFields>;
    sum?: Maybe<ArTrackersSumFields>;
    var_pop?: Maybe<ArTrackersVarPopFields>;
    var_samp?: Maybe<ArTrackersVarSampFields>;
    variance?: Maybe<ArTrackersVarianceFields>;
};
/** aggregate fields of "ar_trackers" */
export declare type ArTrackersAggregateFieldsCountArgs = {
    columns?: Maybe<Array<ArTrackersSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "ar_trackers" */
export declare type ArTrackersAggregateOrderBy = {
    avg?: Maybe<ArTrackersAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<ArTrackersMaxOrderBy>;
    min?: Maybe<ArTrackersMinOrderBy>;
    stddev?: Maybe<ArTrackersStddevOrderBy>;
    stddev_pop?: Maybe<ArTrackersStddevPopOrderBy>;
    stddev_samp?: Maybe<ArTrackersStddevSampOrderBy>;
    sum?: Maybe<ArTrackersSumOrderBy>;
    var_pop?: Maybe<ArTrackersVarPopOrderBy>;
    var_samp?: Maybe<ArTrackersVarSampOrderBy>;
    variance?: Maybe<ArTrackersVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "ar_trackers" */
export declare type ArTrackersArrRelInsertInput = {
    data: Array<ArTrackersInsertInput>;
    on_conflict?: Maybe<ArTrackersOnConflict>;
};
/** aggregate avg on columns */
export declare type ArTrackersAvgFields = {
    __typename?: 'ar_trackers_avg_fields';
    height?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "ar_trackers" */
export declare type ArTrackersAvgOrderBy = {
    height?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "ar_trackers". All fields are combined with a logical 'AND'. */
export declare type ArTrackersBoolExp = {
    _and?: Maybe<Array<Maybe<ArTrackersBoolExp>>>;
    _not?: Maybe<ArTrackersBoolExp>;
    _or?: Maybe<Array<Maybe<ArTrackersBoolExp>>>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    height?: Maybe<NumericComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    image?: Maybe<AssetsBoolExp>;
    image_id?: Maybe<UuidComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    qrcode_inside?: Maybe<BooleanComparisonExp>;
    width?: Maybe<NumericComparisonExp>;
};
/** unique or primary key constraints on table "ar_trackers" */
export declare enum ArTrackersConstraint {
    /** unique or primary key constraint */
    ArTrackersPkey = "ar_trackers_pkey"
}
/** input type for incrementing integer column in table "ar_trackers" */
export declare type ArTrackersIncInput = {
    height?: Maybe<Scalars['numeric']>;
    width?: Maybe<Scalars['numeric']>;
};
/** input type for inserting data into table "ar_trackers" */
export declare type ArTrackersInsertInput = {
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    height?: Maybe<Scalars['numeric']>;
    id?: Maybe<Scalars['uuid']>;
    image?: Maybe<AssetsObjRelInsertInput>;
    image_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    qrcode_inside?: Maybe<Scalars['Boolean']>;
    width?: Maybe<Scalars['numeric']>;
};
/** aggregate max on columns */
export declare type ArTrackersMaxFields = {
    __typename?: 'ar_trackers_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    height?: Maybe<Scalars['numeric']>;
    id?: Maybe<Scalars['uuid']>;
    image_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['numeric']>;
};
/** order by max() on columns of table "ar_trackers" */
export declare type ArTrackersMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    height?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    image_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type ArTrackersMinFields = {
    __typename?: 'ar_trackers_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    height?: Maybe<Scalars['numeric']>;
    id?: Maybe<Scalars['uuid']>;
    image_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['numeric']>;
};
/** order by min() on columns of table "ar_trackers" */
export declare type ArTrackersMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    height?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    image_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** response of any mutation on the table "ar_trackers" */
export declare type ArTrackersMutationResponse = {
    __typename?: 'ar_trackers_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<ArTrackers>;
};
/** input type for inserting object relation for remote table "ar_trackers" */
export declare type ArTrackersObjRelInsertInput = {
    data: ArTrackersInsertInput;
    on_conflict?: Maybe<ArTrackersOnConflict>;
};
/** on conflict condition type for table "ar_trackers" */
export declare type ArTrackersOnConflict = {
    constraint: ArTrackersConstraint;
    update_columns: Array<ArTrackersUpdateColumn>;
    where?: Maybe<ArTrackersBoolExp>;
};
/** ordering options when selecting data from "ar_trackers" */
export declare type ArTrackersOrderBy = {
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    height?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    image?: Maybe<AssetsOrderBy>;
    image_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    qrcode_inside?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** primary key columns input for table: "ar_trackers" */
export declare type ArTrackersPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "ar_trackers" */
export declare enum ArTrackersSelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    Height = "height",
    /** column name */
    Id = "id",
    /** column name */
    ImageId = "image_id",
    /** column name */
    Name = "name",
    /** column name */
    QrcodeInside = "qrcode_inside",
    /** column name */
    Width = "width"
}
/** input type for updating data in table "ar_trackers" */
export declare type ArTrackersSetInput = {
    client_id?: Maybe<Scalars['uuid']>;
    height?: Maybe<Scalars['numeric']>;
    id?: Maybe<Scalars['uuid']>;
    image_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    qrcode_inside?: Maybe<Scalars['Boolean']>;
    width?: Maybe<Scalars['numeric']>;
};
/** aggregate stddev on columns */
export declare type ArTrackersStddevFields = {
    __typename?: 'ar_trackers_stddev_fields';
    height?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "ar_trackers" */
export declare type ArTrackersStddevOrderBy = {
    height?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type ArTrackersStddevPopFields = {
    __typename?: 'ar_trackers_stddev_pop_fields';
    height?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "ar_trackers" */
export declare type ArTrackersStddevPopOrderBy = {
    height?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type ArTrackersStddevSampFields = {
    __typename?: 'ar_trackers_stddev_samp_fields';
    height?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "ar_trackers" */
export declare type ArTrackersStddevSampOrderBy = {
    height?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type ArTrackersSumFields = {
    __typename?: 'ar_trackers_sum_fields';
    height?: Maybe<Scalars['numeric']>;
    width?: Maybe<Scalars['numeric']>;
};
/** order by sum() on columns of table "ar_trackers" */
export declare type ArTrackersSumOrderBy = {
    height?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** update columns of table "ar_trackers" */
export declare enum ArTrackersUpdateColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    Height = "height",
    /** column name */
    Id = "id",
    /** column name */
    ImageId = "image_id",
    /** column name */
    Name = "name",
    /** column name */
    QrcodeInside = "qrcode_inside",
    /** column name */
    Width = "width"
}
/** aggregate var_pop on columns */
export declare type ArTrackersVarPopFields = {
    __typename?: 'ar_trackers_var_pop_fields';
    height?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "ar_trackers" */
export declare type ArTrackersVarPopOrderBy = {
    height?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type ArTrackersVarSampFields = {
    __typename?: 'ar_trackers_var_samp_fields';
    height?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "ar_trackers" */
export declare type ArTrackersVarSampOrderBy = {
    height?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type ArTrackersVarianceFields = {
    __typename?: 'ar_trackers_variance_fields';
    height?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "ar_trackers" */
export declare type ArTrackersVarianceOrderBy = {
    height?: Maybe<OrderBy>;
    width?: Maybe<OrderBy>;
};
/** update columns of table "ar" */
export declare enum ArUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Frequency = "frequency",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    IsTest = "is_test",
    /** column name */
    KeepCumulatedProbability = "keep_cumulated_probability",
    /** column name */
    Location = "location",
    /** column name */
    MaxParticipations = "max_participations",
    /** column name */
    Name = "name",
    /** column name */
    Radius = "radius",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz",
    /** column name */
    Valorization = "valorization",
    /** column name */
    WithInstantGains = "with_instant_gains",
    /** column name */
    WithMagicRandomDrawings = "with_magic_random_drawings",
    /** column name */
    WithRandomDrawings = "with_random_drawings"
}
/** aggregate var_pop on columns */
export declare type ArVarPopFields = {
    __typename?: 'ar_var_pop_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "ar" */
export declare type ArVarPopOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type ArVarSampFields = {
    __typename?: 'ar_var_samp_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "ar" */
export declare type ArVarSampOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type ArVarianceFields = {
    __typename?: 'ar_variance_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "ar" */
export declare type ArVarianceOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** columns and relationships of "assets" */
export declare type Assets = {
    __typename?: 'assets';
    /** An object relationship */
    client?: Maybe<Clients>;
    client_id?: Maybe<Scalars['uuid']>;
    id: Scalars['uuid'];
    name: Scalars['String'];
    path: Scalars['String'];
    resources?: Maybe<Scalars['jsonb']>;
    scaleX?: Maybe<Scalars['numeric']>;
    scaleY?: Maybe<Scalars['numeric']>;
    scaleZ?: Maybe<Scalars['numeric']>;
    type: AssetsTypesEnum;
    user_id?: Maybe<Scalars['uuid']>;
};
/** columns and relationships of "assets" */
export declare type AssetsResourcesArgs = {
    path?: Maybe<Scalars['String']>;
};
/** aggregated selection of "assets" */
export declare type AssetsAggregate = {
    __typename?: 'assets_aggregate';
    aggregate?: Maybe<AssetsAggregateFields>;
    nodes: Array<Assets>;
};
/** aggregate fields of "assets" */
export declare type AssetsAggregateFields = {
    __typename?: 'assets_aggregate_fields';
    avg?: Maybe<AssetsAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<AssetsMaxFields>;
    min?: Maybe<AssetsMinFields>;
    stddev?: Maybe<AssetsStddevFields>;
    stddev_pop?: Maybe<AssetsStddevPopFields>;
    stddev_samp?: Maybe<AssetsStddevSampFields>;
    sum?: Maybe<AssetsSumFields>;
    var_pop?: Maybe<AssetsVarPopFields>;
    var_samp?: Maybe<AssetsVarSampFields>;
    variance?: Maybe<AssetsVarianceFields>;
};
/** aggregate fields of "assets" */
export declare type AssetsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<AssetsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "assets" */
export declare type AssetsAggregateOrderBy = {
    avg?: Maybe<AssetsAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<AssetsMaxOrderBy>;
    min?: Maybe<AssetsMinOrderBy>;
    stddev?: Maybe<AssetsStddevOrderBy>;
    stddev_pop?: Maybe<AssetsStddevPopOrderBy>;
    stddev_samp?: Maybe<AssetsStddevSampOrderBy>;
    sum?: Maybe<AssetsSumOrderBy>;
    var_pop?: Maybe<AssetsVarPopOrderBy>;
    var_samp?: Maybe<AssetsVarSampOrderBy>;
    variance?: Maybe<AssetsVarianceOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type AssetsAppendInput = {
    resources?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "assets" */
export declare type AssetsArrRelInsertInput = {
    data: Array<AssetsInsertInput>;
    on_conflict?: Maybe<AssetsOnConflict>;
};
/** aggregate avg on columns */
export declare type AssetsAvgFields = {
    __typename?: 'assets_avg_fields';
    scaleX?: Maybe<Scalars['Float']>;
    scaleY?: Maybe<Scalars['Float']>;
    scaleZ?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "assets" */
export declare type AssetsAvgOrderBy = {
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "assets". All fields are combined with a logical 'AND'. */
export declare type AssetsBoolExp = {
    _and?: Maybe<Array<Maybe<AssetsBoolExp>>>;
    _not?: Maybe<AssetsBoolExp>;
    _or?: Maybe<Array<Maybe<AssetsBoolExp>>>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    path?: Maybe<StringComparisonExp>;
    resources?: Maybe<JsonbComparisonExp>;
    scaleX?: Maybe<NumericComparisonExp>;
    scaleY?: Maybe<NumericComparisonExp>;
    scaleZ?: Maybe<NumericComparisonExp>;
    type?: Maybe<AssetsTypesEnumComparisonExp>;
    user_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "assets" */
export declare enum AssetsConstraint {
    /** unique or primary key constraint */
    AssetsPkey = "assets_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type AssetsDeleteAtPathInput = {
    resources?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type AssetsDeleteElemInput = {
    resources?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type AssetsDeleteKeyInput = {
    resources?: Maybe<Scalars['String']>;
};
/** input type for incrementing integer column in table "assets" */
export declare type AssetsIncInput = {
    scaleX?: Maybe<Scalars['numeric']>;
    scaleY?: Maybe<Scalars['numeric']>;
    scaleZ?: Maybe<Scalars['numeric']>;
};
/** input type for inserting data into table "assets" */
export declare type AssetsInsertInput = {
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    resources?: Maybe<Scalars['jsonb']>;
    scaleX?: Maybe<Scalars['numeric']>;
    scaleY?: Maybe<Scalars['numeric']>;
    scaleZ?: Maybe<Scalars['numeric']>;
    type?: Maybe<AssetsTypesEnum>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type AssetsMaxFields = {
    __typename?: 'assets_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    scaleX?: Maybe<Scalars['numeric']>;
    scaleY?: Maybe<Scalars['numeric']>;
    scaleZ?: Maybe<Scalars['numeric']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "assets" */
export declare type AssetsMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    path?: Maybe<OrderBy>;
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type AssetsMinFields = {
    __typename?: 'assets_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    scaleX?: Maybe<Scalars['numeric']>;
    scaleY?: Maybe<Scalars['numeric']>;
    scaleZ?: Maybe<Scalars['numeric']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "assets" */
export declare type AssetsMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    path?: Maybe<OrderBy>;
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "assets" */
export declare type AssetsMutationResponse = {
    __typename?: 'assets_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Assets>;
};
/** input type for inserting object relation for remote table "assets" */
export declare type AssetsObjRelInsertInput = {
    data: AssetsInsertInput;
    on_conflict?: Maybe<AssetsOnConflict>;
};
/** on conflict condition type for table "assets" */
export declare type AssetsOnConflict = {
    constraint: AssetsConstraint;
    update_columns: Array<AssetsUpdateColumn>;
    where?: Maybe<AssetsBoolExp>;
};
/** ordering options when selecting data from "assets" */
export declare type AssetsOrderBy = {
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    path?: Maybe<OrderBy>;
    resources?: Maybe<OrderBy>;
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
    type?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "assets" */
export declare type AssetsPkColumnsInput = {
    id: Scalars['uuid'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type AssetsPrependInput = {
    resources?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "assets" */
export declare enum AssetsSelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Path = "path",
    /** column name */
    Resources = "resources",
    /** column name */
    ScaleX = "scaleX",
    /** column name */
    ScaleY = "scaleY",
    /** column name */
    ScaleZ = "scaleZ",
    /** column name */
    Type = "type",
    /** column name */
    UserId = "user_id"
}
/** input type for updating data in table "assets" */
export declare type AssetsSetInput = {
    client_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    resources?: Maybe<Scalars['jsonb']>;
    scaleX?: Maybe<Scalars['numeric']>;
    scaleY?: Maybe<Scalars['numeric']>;
    scaleZ?: Maybe<Scalars['numeric']>;
    type?: Maybe<AssetsTypesEnum>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate stddev on columns */
export declare type AssetsStddevFields = {
    __typename?: 'assets_stddev_fields';
    scaleX?: Maybe<Scalars['Float']>;
    scaleY?: Maybe<Scalars['Float']>;
    scaleZ?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "assets" */
export declare type AssetsStddevOrderBy = {
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type AssetsStddevPopFields = {
    __typename?: 'assets_stddev_pop_fields';
    scaleX?: Maybe<Scalars['Float']>;
    scaleY?: Maybe<Scalars['Float']>;
    scaleZ?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "assets" */
export declare type AssetsStddevPopOrderBy = {
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type AssetsStddevSampFields = {
    __typename?: 'assets_stddev_samp_fields';
    scaleX?: Maybe<Scalars['Float']>;
    scaleY?: Maybe<Scalars['Float']>;
    scaleZ?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "assets" */
export declare type AssetsStddevSampOrderBy = {
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type AssetsSumFields = {
    __typename?: 'assets_sum_fields';
    scaleX?: Maybe<Scalars['numeric']>;
    scaleY?: Maybe<Scalars['numeric']>;
    scaleZ?: Maybe<Scalars['numeric']>;
};
/** order by sum() on columns of table "assets" */
export declare type AssetsSumOrderBy = {
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
};
/** columns and relationships of "assets_types" */
export declare type AssetsTypes = {
    __typename?: 'assets_types';
    type: Scalars['String'];
};
/** aggregated selection of "assets_types" */
export declare type AssetsTypesAggregate = {
    __typename?: 'assets_types_aggregate';
    aggregate?: Maybe<AssetsTypesAggregateFields>;
    nodes: Array<AssetsTypes>;
};
/** aggregate fields of "assets_types" */
export declare type AssetsTypesAggregateFields = {
    __typename?: 'assets_types_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<AssetsTypesMaxFields>;
    min?: Maybe<AssetsTypesMinFields>;
};
/** aggregate fields of "assets_types" */
export declare type AssetsTypesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<AssetsTypesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "assets_types" */
export declare type AssetsTypesAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<AssetsTypesMaxOrderBy>;
    min?: Maybe<AssetsTypesMinOrderBy>;
};
/** input type for inserting array relation for remote table "assets_types" */
export declare type AssetsTypesArrRelInsertInput = {
    data: Array<AssetsTypesInsertInput>;
    on_conflict?: Maybe<AssetsTypesOnConflict>;
};
/** Boolean expression to filter rows from the table "assets_types". All fields are combined with a logical 'AND'. */
export declare type AssetsTypesBoolExp = {
    _and?: Maybe<Array<Maybe<AssetsTypesBoolExp>>>;
    _not?: Maybe<AssetsTypesBoolExp>;
    _or?: Maybe<Array<Maybe<AssetsTypesBoolExp>>>;
    type?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "assets_types" */
export declare enum AssetsTypesConstraint {
    /** unique or primary key constraint */
    AssetsTypesPkey = "assets_types_pkey"
}
export declare enum AssetsTypesEnum {
    Image = "image",
    Image360 = "image360",
    Object3D = "object3D",
    Portal = "portal",
    Video = "video",
    Video360 = "video360"
}
/** expression to compare columns of type assets_types_enum. All fields are combined with logical 'AND'. */
export declare type AssetsTypesEnumComparisonExp = {
    _eq?: Maybe<AssetsTypesEnum>;
    _in?: Maybe<Array<AssetsTypesEnum>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _neq?: Maybe<AssetsTypesEnum>;
    _nin?: Maybe<Array<AssetsTypesEnum>>;
};
/** input type for inserting data into table "assets_types" */
export declare type AssetsTypesInsertInput = {
    type?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type AssetsTypesMaxFields = {
    __typename?: 'assets_types_max_fields';
    type?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "assets_types" */
export declare type AssetsTypesMaxOrderBy = {
    type?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type AssetsTypesMinFields = {
    __typename?: 'assets_types_min_fields';
    type?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "assets_types" */
export declare type AssetsTypesMinOrderBy = {
    type?: Maybe<OrderBy>;
};
/** response of any mutation on the table "assets_types" */
export declare type AssetsTypesMutationResponse = {
    __typename?: 'assets_types_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<AssetsTypes>;
};
/** input type for inserting object relation for remote table "assets_types" */
export declare type AssetsTypesObjRelInsertInput = {
    data: AssetsTypesInsertInput;
    on_conflict?: Maybe<AssetsTypesOnConflict>;
};
/** on conflict condition type for table "assets_types" */
export declare type AssetsTypesOnConflict = {
    constraint: AssetsTypesConstraint;
    update_columns: Array<AssetsTypesUpdateColumn>;
    where?: Maybe<AssetsTypesBoolExp>;
};
/** ordering options when selecting data from "assets_types" */
export declare type AssetsTypesOrderBy = {
    type?: Maybe<OrderBy>;
};
/** primary key columns input for table: "assets_types" */
export declare type AssetsTypesPkColumnsInput = {
    type: Scalars['String'];
};
/** select columns of table "assets_types" */
export declare enum AssetsTypesSelectColumn {
    /** column name */
    Type = "type"
}
/** input type for updating data in table "assets_types" */
export declare type AssetsTypesSetInput = {
    type?: Maybe<Scalars['String']>;
};
/** update columns of table "assets_types" */
export declare enum AssetsTypesUpdateColumn {
    /** column name */
    Type = "type"
}
/** update columns of table "assets" */
export declare enum AssetsUpdateColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Path = "path",
    /** column name */
    Resources = "resources",
    /** column name */
    ScaleX = "scaleX",
    /** column name */
    ScaleY = "scaleY",
    /** column name */
    ScaleZ = "scaleZ",
    /** column name */
    Type = "type",
    /** column name */
    UserId = "user_id"
}
/** aggregate var_pop on columns */
export declare type AssetsVarPopFields = {
    __typename?: 'assets_var_pop_fields';
    scaleX?: Maybe<Scalars['Float']>;
    scaleY?: Maybe<Scalars['Float']>;
    scaleZ?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "assets" */
export declare type AssetsVarPopOrderBy = {
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type AssetsVarSampFields = {
    __typename?: 'assets_var_samp_fields';
    scaleX?: Maybe<Scalars['Float']>;
    scaleY?: Maybe<Scalars['Float']>;
    scaleZ?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "assets" */
export declare type AssetsVarSampOrderBy = {
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type AssetsVarianceFields = {
    __typename?: 'assets_variance_fields';
    scaleX?: Maybe<Scalars['Float']>;
    scaleY?: Maybe<Scalars['Float']>;
    scaleZ?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "assets" */
export declare type AssetsVarianceOrderBy = {
    scaleX?: Maybe<OrderBy>;
    scaleY?: Maybe<OrderBy>;
    scaleZ?: Maybe<OrderBy>;
};
/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export declare type BigintComparisonExp = {
    _eq?: Maybe<Scalars['bigint']>;
    _gt?: Maybe<Scalars['bigint']>;
    _gte?: Maybe<Scalars['bigint']>;
    _in?: Maybe<Array<Scalars['bigint']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['bigint']>;
    _lte?: Maybe<Scalars['bigint']>;
    _neq?: Maybe<Scalars['bigint']>;
    _nin?: Maybe<Array<Scalars['bigint']>>;
};
/** expression to compare columns of type bpchar. All fields are combined with logical 'AND'. */
export declare type BpcharComparisonExp = {
    _eq?: Maybe<Scalars['bpchar']>;
    _gt?: Maybe<Scalars['bpchar']>;
    _gte?: Maybe<Scalars['bpchar']>;
    _in?: Maybe<Array<Scalars['bpchar']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['bpchar']>;
    _lte?: Maybe<Scalars['bpchar']>;
    _neq?: Maybe<Scalars['bpchar']>;
    _nin?: Maybe<Array<Scalars['bpchar']>>;
};
/** columns and relationships of "clients" */
export declare type Clients = {
    __typename?: 'clients';
    /** An object relationship */
    address?: Maybe<Addresses>;
    address_id?: Maybe<Scalars['bigint']>;
    company?: Maybe<Scalars['String']>;
    created_at: Scalars['timestamptz'];
    discount?: Maybe<Scalars['Int']>;
    email: Scalars['String'];
    first_name?: Maybe<Scalars['String']>;
    id: Scalars['uuid'];
    is_active: Scalars['Boolean'];
    name: Scalars['String'];
    password: Scalars['String'];
    /** An object relationship */
    password_forgotten_token?: Maybe<ClientsPasswordForgottenTokens>;
    phone?: Maybe<Scalars['String']>;
    /** An object relationship */
    picture?: Maybe<Assets>;
    picture_id?: Maybe<Scalars['uuid']>;
    /** An object relationship */
    reseller?: Maybe<Clients>;
    reseller_id?: Maybe<Scalars['uuid']>;
    role: ClientsRolesEnum;
    stripe_customer_id?: Maybe<Scalars['String']>;
    vat_id?: Maybe<Scalars['String']>;
};
/** aggregated selection of "clients" */
export declare type ClientsAggregate = {
    __typename?: 'clients_aggregate';
    aggregate?: Maybe<ClientsAggregateFields>;
    nodes: Array<Clients>;
};
/** aggregate fields of "clients" */
export declare type ClientsAggregateFields = {
    __typename?: 'clients_aggregate_fields';
    avg?: Maybe<ClientsAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<ClientsMaxFields>;
    min?: Maybe<ClientsMinFields>;
    stddev?: Maybe<ClientsStddevFields>;
    stddev_pop?: Maybe<ClientsStddevPopFields>;
    stddev_samp?: Maybe<ClientsStddevSampFields>;
    sum?: Maybe<ClientsSumFields>;
    var_pop?: Maybe<ClientsVarPopFields>;
    var_samp?: Maybe<ClientsVarSampFields>;
    variance?: Maybe<ClientsVarianceFields>;
};
/** aggregate fields of "clients" */
export declare type ClientsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<ClientsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "clients" */
export declare type ClientsAggregateOrderBy = {
    avg?: Maybe<ClientsAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<ClientsMaxOrderBy>;
    min?: Maybe<ClientsMinOrderBy>;
    stddev?: Maybe<ClientsStddevOrderBy>;
    stddev_pop?: Maybe<ClientsStddevPopOrderBy>;
    stddev_samp?: Maybe<ClientsStddevSampOrderBy>;
    sum?: Maybe<ClientsSumOrderBy>;
    var_pop?: Maybe<ClientsVarPopOrderBy>;
    var_samp?: Maybe<ClientsVarSampOrderBy>;
    variance?: Maybe<ClientsVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "clients" */
export declare type ClientsArrRelInsertInput = {
    data: Array<ClientsInsertInput>;
    on_conflict?: Maybe<ClientsOnConflict>;
};
/** aggregate avg on columns */
export declare type ClientsAvgFields = {
    __typename?: 'clients_avg_fields';
    address_id?: Maybe<Scalars['Float']>;
    discount?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "clients" */
export declare type ClientsAvgOrderBy = {
    address_id?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "clients". All fields are combined with a logical 'AND'. */
export declare type ClientsBoolExp = {
    _and?: Maybe<Array<Maybe<ClientsBoolExp>>>;
    _not?: Maybe<ClientsBoolExp>;
    _or?: Maybe<Array<Maybe<ClientsBoolExp>>>;
    address?: Maybe<AddressesBoolExp>;
    address_id?: Maybe<BigintComparisonExp>;
    company?: Maybe<StringComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    discount?: Maybe<IntComparisonExp>;
    email?: Maybe<StringComparisonExp>;
    first_name?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    password?: Maybe<StringComparisonExp>;
    password_forgotten_token?: Maybe<ClientsPasswordForgottenTokensBoolExp>;
    phone?: Maybe<StringComparisonExp>;
    picture?: Maybe<AssetsBoolExp>;
    picture_id?: Maybe<UuidComparisonExp>;
    reseller?: Maybe<ClientsBoolExp>;
    reseller_id?: Maybe<UuidComparisonExp>;
    role?: Maybe<ClientsRolesEnumComparisonExp>;
    stripe_customer_id?: Maybe<StringComparisonExp>;
    vat_id?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "clients" */
export declare enum ClientsConstraint {
    /** unique or primary key constraint */
    ClientsAddressIdKey = "clients_address_id_key",
    /** unique or primary key constraint */
    ClientsEmailKey = "clients_email_key",
    /** unique or primary key constraint */
    ClientsPkey = "clients_pkey"
}
/** input type for incrementing integer column in table "clients" */
export declare type ClientsIncInput = {
    address_id?: Maybe<Scalars['bigint']>;
    discount?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "clients" */
export declare type ClientsInsertInput = {
    address?: Maybe<AddressesObjRelInsertInput>;
    address_id?: Maybe<Scalars['bigint']>;
    company?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    discount?: Maybe<Scalars['Int']>;
    email?: Maybe<Scalars['String']>;
    first_name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    password_forgotten_token?: Maybe<ClientsPasswordForgottenTokensObjRelInsertInput>;
    phone?: Maybe<Scalars['String']>;
    picture?: Maybe<AssetsObjRelInsertInput>;
    picture_id?: Maybe<Scalars['uuid']>;
    reseller?: Maybe<ClientsObjRelInsertInput>;
    reseller_id?: Maybe<Scalars['uuid']>;
    role?: Maybe<ClientsRolesEnum>;
    stripe_customer_id?: Maybe<Scalars['String']>;
    vat_id?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type ClientsMaxFields = {
    __typename?: 'clients_max_fields';
    address_id?: Maybe<Scalars['bigint']>;
    company?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    discount?: Maybe<Scalars['Int']>;
    email?: Maybe<Scalars['String']>;
    first_name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    picture_id?: Maybe<Scalars['uuid']>;
    reseller_id?: Maybe<Scalars['uuid']>;
    stripe_customer_id?: Maybe<Scalars['String']>;
    vat_id?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "clients" */
export declare type ClientsMaxOrderBy = {
    address_id?: Maybe<OrderBy>;
    company?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
    email?: Maybe<OrderBy>;
    first_name?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    password?: Maybe<OrderBy>;
    phone?: Maybe<OrderBy>;
    picture_id?: Maybe<OrderBy>;
    reseller_id?: Maybe<OrderBy>;
    stripe_customer_id?: Maybe<OrderBy>;
    vat_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type ClientsMinFields = {
    __typename?: 'clients_min_fields';
    address_id?: Maybe<Scalars['bigint']>;
    company?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    discount?: Maybe<Scalars['Int']>;
    email?: Maybe<Scalars['String']>;
    first_name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    picture_id?: Maybe<Scalars['uuid']>;
    reseller_id?: Maybe<Scalars['uuid']>;
    stripe_customer_id?: Maybe<Scalars['String']>;
    vat_id?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "clients" */
export declare type ClientsMinOrderBy = {
    address_id?: Maybe<OrderBy>;
    company?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
    email?: Maybe<OrderBy>;
    first_name?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    password?: Maybe<OrderBy>;
    phone?: Maybe<OrderBy>;
    picture_id?: Maybe<OrderBy>;
    reseller_id?: Maybe<OrderBy>;
    stripe_customer_id?: Maybe<OrderBy>;
    vat_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "clients" */
export declare type ClientsMutationResponse = {
    __typename?: 'clients_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Clients>;
};
/** input type for inserting object relation for remote table "clients" */
export declare type ClientsObjRelInsertInput = {
    data: ClientsInsertInput;
    on_conflict?: Maybe<ClientsOnConflict>;
};
/** on conflict condition type for table "clients" */
export declare type ClientsOnConflict = {
    constraint: ClientsConstraint;
    update_columns: Array<ClientsUpdateColumn>;
    where?: Maybe<ClientsBoolExp>;
};
/** ordering options when selecting data from "clients" */
export declare type ClientsOrderBy = {
    address?: Maybe<AddressesOrderBy>;
    address_id?: Maybe<OrderBy>;
    company?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
    email?: Maybe<OrderBy>;
    first_name?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    password?: Maybe<OrderBy>;
    password_forgotten_token?: Maybe<ClientsPasswordForgottenTokensOrderBy>;
    phone?: Maybe<OrderBy>;
    picture?: Maybe<AssetsOrderBy>;
    picture_id?: Maybe<OrderBy>;
    reseller?: Maybe<ClientsOrderBy>;
    reseller_id?: Maybe<OrderBy>;
    role?: Maybe<OrderBy>;
    stripe_customer_id?: Maybe<OrderBy>;
    vat_id?: Maybe<OrderBy>;
};
/** columns and relationships of "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokens = {
    __typename?: 'clients_password_forgotten_tokens';
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamp'];
    id: Scalars['uuid'];
};
/** aggregated selection of "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensAggregate = {
    __typename?: 'clients_password_forgotten_tokens_aggregate';
    aggregate?: Maybe<ClientsPasswordForgottenTokensAggregateFields>;
    nodes: Array<ClientsPasswordForgottenTokens>;
};
/** aggregate fields of "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensAggregateFields = {
    __typename?: 'clients_password_forgotten_tokens_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<ClientsPasswordForgottenTokensMaxFields>;
    min?: Maybe<ClientsPasswordForgottenTokensMinFields>;
};
/** aggregate fields of "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensAggregateFieldsCountArgs = {
    columns?: Maybe<Array<ClientsPasswordForgottenTokensSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<ClientsPasswordForgottenTokensMaxOrderBy>;
    min?: Maybe<ClientsPasswordForgottenTokensMinOrderBy>;
};
/** input type for inserting array relation for remote table "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensArrRelInsertInput = {
    data: Array<ClientsPasswordForgottenTokensInsertInput>;
    on_conflict?: Maybe<ClientsPasswordForgottenTokensOnConflict>;
};
/** Boolean expression to filter rows from the table "clients_password_forgotten_tokens". All fields are combined with a logical 'AND'. */
export declare type ClientsPasswordForgottenTokensBoolExp = {
    _and?: Maybe<Array<Maybe<ClientsPasswordForgottenTokensBoolExp>>>;
    _not?: Maybe<ClientsPasswordForgottenTokensBoolExp>;
    _or?: Maybe<Array<Maybe<ClientsPasswordForgottenTokensBoolExp>>>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestampComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "clients_password_forgotten_tokens" */
export declare enum ClientsPasswordForgottenTokensConstraint {
    /** unique or primary key constraint */
    ClientsPasswordForgottenTokensClientIdKey = "clients_password_forgotten_tokens_client_id_key",
    /** unique or primary key constraint */
    ClientsPasswordForgottenTokensPkey = "clients_password_forgotten_tokens_pkey"
}
/** input type for inserting data into table "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensInsertInput = {
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type ClientsPasswordForgottenTokensMaxFields = {
    __typename?: 'clients_password_forgotten_tokens_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type ClientsPasswordForgottenTokensMinFields = {
    __typename?: 'clients_password_forgotten_tokens_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensMutationResponse = {
    __typename?: 'clients_password_forgotten_tokens_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<ClientsPasswordForgottenTokens>;
};
/** input type for inserting object relation for remote table "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensObjRelInsertInput = {
    data: ClientsPasswordForgottenTokensInsertInput;
    on_conflict?: Maybe<ClientsPasswordForgottenTokensOnConflict>;
};
/** on conflict condition type for table "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensOnConflict = {
    constraint: ClientsPasswordForgottenTokensConstraint;
    update_columns: Array<ClientsPasswordForgottenTokensUpdateColumn>;
    where?: Maybe<ClientsPasswordForgottenTokensBoolExp>;
};
/** ordering options when selecting data from "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "clients_password_forgotten_tokens" */
export declare enum ClientsPasswordForgottenTokensSelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Id = "id"
}
/** input type for updating data in table "clients_password_forgotten_tokens" */
export declare type ClientsPasswordForgottenTokensSetInput = {
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
};
/** update columns of table "clients_password_forgotten_tokens" */
export declare enum ClientsPasswordForgottenTokensUpdateColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Id = "id"
}
/** primary key columns input for table: "clients" */
export declare type ClientsPkColumnsInput = {
    id: Scalars['uuid'];
};
/** columns and relationships of "clients_roles" */
export declare type ClientsRoles = {
    __typename?: 'clients_roles';
    name: Scalars['String'];
};
/** aggregated selection of "clients_roles" */
export declare type ClientsRolesAggregate = {
    __typename?: 'clients_roles_aggregate';
    aggregate?: Maybe<ClientsRolesAggregateFields>;
    nodes: Array<ClientsRoles>;
};
/** aggregate fields of "clients_roles" */
export declare type ClientsRolesAggregateFields = {
    __typename?: 'clients_roles_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<ClientsRolesMaxFields>;
    min?: Maybe<ClientsRolesMinFields>;
};
/** aggregate fields of "clients_roles" */
export declare type ClientsRolesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<ClientsRolesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "clients_roles" */
export declare type ClientsRolesAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<ClientsRolesMaxOrderBy>;
    min?: Maybe<ClientsRolesMinOrderBy>;
};
/** input type for inserting array relation for remote table "clients_roles" */
export declare type ClientsRolesArrRelInsertInput = {
    data: Array<ClientsRolesInsertInput>;
    on_conflict?: Maybe<ClientsRolesOnConflict>;
};
/** Boolean expression to filter rows from the table "clients_roles". All fields are combined with a logical 'AND'. */
export declare type ClientsRolesBoolExp = {
    _and?: Maybe<Array<Maybe<ClientsRolesBoolExp>>>;
    _not?: Maybe<ClientsRolesBoolExp>;
    _or?: Maybe<Array<Maybe<ClientsRolesBoolExp>>>;
    name?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "clients_roles" */
export declare enum ClientsRolesConstraint {
    /** unique or primary key constraint */
    ClientsRolesPkey = "clients_roles_pkey"
}
export declare enum ClientsRolesEnum {
    Admin = "admin",
    Client = "client",
    Reseller = "reseller"
}
/** expression to compare columns of type clients_roles_enum. All fields are combined with logical 'AND'. */
export declare type ClientsRolesEnumComparisonExp = {
    _eq?: Maybe<ClientsRolesEnum>;
    _in?: Maybe<Array<ClientsRolesEnum>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _neq?: Maybe<ClientsRolesEnum>;
    _nin?: Maybe<Array<ClientsRolesEnum>>;
};
/** input type for inserting data into table "clients_roles" */
export declare type ClientsRolesInsertInput = {
    name?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type ClientsRolesMaxFields = {
    __typename?: 'clients_roles_max_fields';
    name?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "clients_roles" */
export declare type ClientsRolesMaxOrderBy = {
    name?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type ClientsRolesMinFields = {
    __typename?: 'clients_roles_min_fields';
    name?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "clients_roles" */
export declare type ClientsRolesMinOrderBy = {
    name?: Maybe<OrderBy>;
};
/** response of any mutation on the table "clients_roles" */
export declare type ClientsRolesMutationResponse = {
    __typename?: 'clients_roles_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<ClientsRoles>;
};
/** input type for inserting object relation for remote table "clients_roles" */
export declare type ClientsRolesObjRelInsertInput = {
    data: ClientsRolesInsertInput;
    on_conflict?: Maybe<ClientsRolesOnConflict>;
};
/** on conflict condition type for table "clients_roles" */
export declare type ClientsRolesOnConflict = {
    constraint: ClientsRolesConstraint;
    update_columns: Array<ClientsRolesUpdateColumn>;
    where?: Maybe<ClientsRolesBoolExp>;
};
/** ordering options when selecting data from "clients_roles" */
export declare type ClientsRolesOrderBy = {
    name?: Maybe<OrderBy>;
};
/** primary key columns input for table: "clients_roles" */
export declare type ClientsRolesPkColumnsInput = {
    name: Scalars['String'];
};
/** select columns of table "clients_roles" */
export declare enum ClientsRolesSelectColumn {
    /** column name */
    Name = "name"
}
/** input type for updating data in table "clients_roles" */
export declare type ClientsRolesSetInput = {
    name?: Maybe<Scalars['String']>;
};
/** update columns of table "clients_roles" */
export declare enum ClientsRolesUpdateColumn {
    /** column name */
    Name = "name"
}
/** select columns of table "clients" */
export declare enum ClientsSelectColumn {
    /** column name */
    AddressId = "address_id",
    /** column name */
    Company = "company",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Discount = "discount",
    /** column name */
    Email = "email",
    /** column name */
    FirstName = "first_name",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    Name = "name",
    /** column name */
    Password = "password",
    /** column name */
    Phone = "phone",
    /** column name */
    PictureId = "picture_id",
    /** column name */
    ResellerId = "reseller_id",
    /** column name */
    Role = "role",
    /** column name */
    StripeCustomerId = "stripe_customer_id",
    /** column name */
    VatId = "vat_id"
}
/** input type for updating data in table "clients" */
export declare type ClientsSetInput = {
    address_id?: Maybe<Scalars['bigint']>;
    company?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    discount?: Maybe<Scalars['Int']>;
    email?: Maybe<Scalars['String']>;
    first_name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    picture_id?: Maybe<Scalars['uuid']>;
    reseller_id?: Maybe<Scalars['uuid']>;
    role?: Maybe<ClientsRolesEnum>;
    stripe_customer_id?: Maybe<Scalars['String']>;
    vat_id?: Maybe<Scalars['String']>;
};
/** aggregate stddev on columns */
export declare type ClientsStddevFields = {
    __typename?: 'clients_stddev_fields';
    address_id?: Maybe<Scalars['Float']>;
    discount?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "clients" */
export declare type ClientsStddevOrderBy = {
    address_id?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type ClientsStddevPopFields = {
    __typename?: 'clients_stddev_pop_fields';
    address_id?: Maybe<Scalars['Float']>;
    discount?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "clients" */
export declare type ClientsStddevPopOrderBy = {
    address_id?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type ClientsStddevSampFields = {
    __typename?: 'clients_stddev_samp_fields';
    address_id?: Maybe<Scalars['Float']>;
    discount?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "clients" */
export declare type ClientsStddevSampOrderBy = {
    address_id?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type ClientsSumFields = {
    __typename?: 'clients_sum_fields';
    address_id?: Maybe<Scalars['bigint']>;
    discount?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "clients" */
export declare type ClientsSumOrderBy = {
    address_id?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
};
/** update columns of table "clients" */
export declare enum ClientsUpdateColumn {
    /** column name */
    AddressId = "address_id",
    /** column name */
    Company = "company",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Discount = "discount",
    /** column name */
    Email = "email",
    /** column name */
    FirstName = "first_name",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    Name = "name",
    /** column name */
    Password = "password",
    /** column name */
    Phone = "phone",
    /** column name */
    PictureId = "picture_id",
    /** column name */
    ResellerId = "reseller_id",
    /** column name */
    Role = "role",
    /** column name */
    StripeCustomerId = "stripe_customer_id",
    /** column name */
    VatId = "vat_id"
}
/** aggregate var_pop on columns */
export declare type ClientsVarPopFields = {
    __typename?: 'clients_var_pop_fields';
    address_id?: Maybe<Scalars['Float']>;
    discount?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "clients" */
export declare type ClientsVarPopOrderBy = {
    address_id?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type ClientsVarSampFields = {
    __typename?: 'clients_var_samp_fields';
    address_id?: Maybe<Scalars['Float']>;
    discount?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "clients" */
export declare type ClientsVarSampOrderBy = {
    address_id?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type ClientsVarianceFields = {
    __typename?: 'clients_variance_fields';
    address_id?: Maybe<Scalars['Float']>;
    discount?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "clients" */
export declare type ClientsVarianceOrderBy = {
    address_id?: Maybe<OrderBy>;
    discount?: Maybe<OrderBy>;
};
/** columns and relationships of "communications" */
export declare type Communications = {
    __typename?: 'communications';
    address?: Maybe<Scalars['String']>;
    /** An object relationship */
    card_image?: Maybe<Assets>;
    /** An object relationship */
    card_image_background?: Maybe<Assets>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    id: Scalars['uuid'];
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    location?: Maybe<Scalars['geography']>;
    name: Scalars['String'];
    /** An object relationship */
    type: CommunicationsTypes;
    type_id: Scalars['uuid'];
    tz?: Maybe<Scalars['String']>;
};
/** columns and relationships of "communications" */
export declare type CommunicationsDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** aggregated selection of "communications" */
export declare type CommunicationsAggregate = {
    __typename?: 'communications_aggregate';
    aggregate?: Maybe<CommunicationsAggregateFields>;
    nodes: Array<Communications>;
};
/** aggregate fields of "communications" */
export declare type CommunicationsAggregateFields = {
    __typename?: 'communications_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<CommunicationsMaxFields>;
    min?: Maybe<CommunicationsMinFields>;
};
/** aggregate fields of "communications" */
export declare type CommunicationsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<CommunicationsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "communications" */
export declare type CommunicationsAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<CommunicationsMaxOrderBy>;
    min?: Maybe<CommunicationsMinOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type CommunicationsAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "communications" */
export declare type CommunicationsArrRelInsertInput = {
    data: Array<CommunicationsInsertInput>;
    on_conflict?: Maybe<CommunicationsOnConflict>;
};
/** Boolean expression to filter rows from the table "communications". All fields are combined with a logical 'AND'. */
export declare type CommunicationsBoolExp = {
    _and?: Maybe<Array<Maybe<CommunicationsBoolExp>>>;
    _not?: Maybe<CommunicationsBoolExp>;
    _or?: Maybe<Array<Maybe<CommunicationsBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    card_image?: Maybe<AssetsBoolExp>;
    card_image_background?: Maybe<AssetsBoolExp>;
    card_image_background_id?: Maybe<UuidComparisonExp>;
    card_image_id?: Maybe<UuidComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_private?: Maybe<BooleanComparisonExp>;
    location?: Maybe<GeographyComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    type?: Maybe<CommunicationsTypesBoolExp>;
    type_id?: Maybe<UuidComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "communications" */
export declare enum CommunicationsConstraint {
    /** unique or primary key constraint */
    CommunicationsPkey = "communications_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type CommunicationsDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type CommunicationsDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type CommunicationsDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
};
/** input type for inserting data into table "communications" */
export declare type CommunicationsInsertInput = {
    address?: Maybe<Scalars['String']>;
    card_image?: Maybe<AssetsObjRelInsertInput>;
    card_image_background?: Maybe<AssetsObjRelInsertInput>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    name?: Maybe<Scalars['String']>;
    type?: Maybe<CommunicationsTypesObjRelInsertInput>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type CommunicationsMaxFields = {
    __typename?: 'communications_max_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "communications" */
export declare type CommunicationsMaxOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type CommunicationsMinFields = {
    __typename?: 'communications_min_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "communications" */
export declare type CommunicationsMinOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** response of any mutation on the table "communications" */
export declare type CommunicationsMutationResponse = {
    __typename?: 'communications_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Communications>;
};
/** input type for inserting object relation for remote table "communications" */
export declare type CommunicationsObjRelInsertInput = {
    data: CommunicationsInsertInput;
    on_conflict?: Maybe<CommunicationsOnConflict>;
};
/** on conflict condition type for table "communications" */
export declare type CommunicationsOnConflict = {
    constraint: CommunicationsConstraint;
    update_columns: Array<CommunicationsUpdateColumn>;
    where?: Maybe<CommunicationsBoolExp>;
};
/** ordering options when selecting data from "communications" */
export declare type CommunicationsOrderBy = {
    address?: Maybe<OrderBy>;
    card_image?: Maybe<AssetsOrderBy>;
    card_image_background?: Maybe<AssetsOrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_private?: Maybe<OrderBy>;
    location?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type?: Maybe<CommunicationsTypesOrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** primary key columns input for table: "communications" */
export declare type CommunicationsPkColumnsInput = {
    id: Scalars['uuid'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type CommunicationsPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "communications" */
export declare enum CommunicationsSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    Location = "location",
    /** column name */
    Name = "name",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz"
}
/** input type for updating data in table "communications" */
export declare type CommunicationsSetInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** columns and relationships of "communications_types" */
export declare type CommunicationsTypes = {
    __typename?: 'communications_types';
    acronym?: Maybe<Scalars['bpchar']>;
    color?: Maybe<Scalars['String']>;
    /** An array relationship */
    communications: Array<Communications>;
    /** An aggregated array relationship */
    communications_aggregate: CommunicationsAggregate;
    id: Scalars['uuid'];
    /** An array relationship */
    infos: Array<Infos>;
    /** An aggregated array relationship */
    infos_aggregate: InfosAggregate;
    name: Scalars['String'];
    price?: Maybe<Scalars['Int']>;
    radius_price_range?: Maybe<Scalars['jsonb']>;
};
/** columns and relationships of "communications_types" */
export declare type CommunicationsTypesCommunicationsArgs = {
    distinct_on?: Maybe<Array<CommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<CommunicationsOrderBy>>;
    where?: Maybe<CommunicationsBoolExp>;
};
/** columns and relationships of "communications_types" */
export declare type CommunicationsTypesCommunicationsAggregateArgs = {
    distinct_on?: Maybe<Array<CommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<CommunicationsOrderBy>>;
    where?: Maybe<CommunicationsBoolExp>;
};
/** columns and relationships of "communications_types" */
export declare type CommunicationsTypesInfosArgs = {
    distinct_on?: Maybe<Array<InfosSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<InfosOrderBy>>;
    where?: Maybe<InfosBoolExp>;
};
/** columns and relationships of "communications_types" */
export declare type CommunicationsTypesInfosAggregateArgs = {
    distinct_on?: Maybe<Array<InfosSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<InfosOrderBy>>;
    where?: Maybe<InfosBoolExp>;
};
/** columns and relationships of "communications_types" */
export declare type CommunicationsTypesRadiusPriceRangeArgs = {
    path?: Maybe<Scalars['String']>;
};
/** aggregated selection of "communications_types" */
export declare type CommunicationsTypesAggregate = {
    __typename?: 'communications_types_aggregate';
    aggregate?: Maybe<CommunicationsTypesAggregateFields>;
    nodes: Array<CommunicationsTypes>;
};
/** aggregate fields of "communications_types" */
export declare type CommunicationsTypesAggregateFields = {
    __typename?: 'communications_types_aggregate_fields';
    avg?: Maybe<CommunicationsTypesAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<CommunicationsTypesMaxFields>;
    min?: Maybe<CommunicationsTypesMinFields>;
    stddev?: Maybe<CommunicationsTypesStddevFields>;
    stddev_pop?: Maybe<CommunicationsTypesStddevPopFields>;
    stddev_samp?: Maybe<CommunicationsTypesStddevSampFields>;
    sum?: Maybe<CommunicationsTypesSumFields>;
    var_pop?: Maybe<CommunicationsTypesVarPopFields>;
    var_samp?: Maybe<CommunicationsTypesVarSampFields>;
    variance?: Maybe<CommunicationsTypesVarianceFields>;
};
/** aggregate fields of "communications_types" */
export declare type CommunicationsTypesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<CommunicationsTypesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "communications_types" */
export declare type CommunicationsTypesAggregateOrderBy = {
    avg?: Maybe<CommunicationsTypesAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<CommunicationsTypesMaxOrderBy>;
    min?: Maybe<CommunicationsTypesMinOrderBy>;
    stddev?: Maybe<CommunicationsTypesStddevOrderBy>;
    stddev_pop?: Maybe<CommunicationsTypesStddevPopOrderBy>;
    stddev_samp?: Maybe<CommunicationsTypesStddevSampOrderBy>;
    sum?: Maybe<CommunicationsTypesSumOrderBy>;
    var_pop?: Maybe<CommunicationsTypesVarPopOrderBy>;
    var_samp?: Maybe<CommunicationsTypesVarSampOrderBy>;
    variance?: Maybe<CommunicationsTypesVarianceOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type CommunicationsTypesAppendInput = {
    radius_price_range?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "communications_types" */
export declare type CommunicationsTypesArrRelInsertInput = {
    data: Array<CommunicationsTypesInsertInput>;
    on_conflict?: Maybe<CommunicationsTypesOnConflict>;
};
/** aggregate avg on columns */
export declare type CommunicationsTypesAvgFields = {
    __typename?: 'communications_types_avg_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "communications_types" */
export declare type CommunicationsTypesAvgOrderBy = {
    price?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "communications_types". All fields are combined with a logical 'AND'. */
export declare type CommunicationsTypesBoolExp = {
    _and?: Maybe<Array<Maybe<CommunicationsTypesBoolExp>>>;
    _not?: Maybe<CommunicationsTypesBoolExp>;
    _or?: Maybe<Array<Maybe<CommunicationsTypesBoolExp>>>;
    acronym?: Maybe<BpcharComparisonExp>;
    color?: Maybe<StringComparisonExp>;
    communications?: Maybe<CommunicationsBoolExp>;
    id?: Maybe<UuidComparisonExp>;
    infos?: Maybe<InfosBoolExp>;
    name?: Maybe<StringComparisonExp>;
    price?: Maybe<IntComparisonExp>;
    radius_price_range?: Maybe<JsonbComparisonExp>;
};
/** unique or primary key constraints on table "communications_types" */
export declare enum CommunicationsTypesConstraint {
    /** unique or primary key constraint */
    CommunicationsTypePkey = "communications_type_pkey",
    /** unique or primary key constraint */
    CommunicationsTypesAcronymKey = "communications_types_acronym_key"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type CommunicationsTypesDeleteAtPathInput = {
    radius_price_range?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type CommunicationsTypesDeleteElemInput = {
    radius_price_range?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type CommunicationsTypesDeleteKeyInput = {
    radius_price_range?: Maybe<Scalars['String']>;
};
/** input type for incrementing integer column in table "communications_types" */
export declare type CommunicationsTypesIncInput = {
    price?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "communications_types" */
export declare type CommunicationsTypesInsertInput = {
    acronym?: Maybe<Scalars['bpchar']>;
    color?: Maybe<Scalars['String']>;
    communications?: Maybe<CommunicationsArrRelInsertInput>;
    id?: Maybe<Scalars['uuid']>;
    infos?: Maybe<InfosArrRelInsertInput>;
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Int']>;
    radius_price_range?: Maybe<Scalars['jsonb']>;
};
/** aggregate max on columns */
export declare type CommunicationsTypesMaxFields = {
    __typename?: 'communications_types_max_fields';
    color?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Int']>;
};
/** order by max() on columns of table "communications_types" */
export declare type CommunicationsTypesMaxOrderBy = {
    color?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    price?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type CommunicationsTypesMinFields = {
    __typename?: 'communications_types_min_fields';
    color?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Int']>;
};
/** order by min() on columns of table "communications_types" */
export declare type CommunicationsTypesMinOrderBy = {
    color?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    price?: Maybe<OrderBy>;
};
/** response of any mutation on the table "communications_types" */
export declare type CommunicationsTypesMutationResponse = {
    __typename?: 'communications_types_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<CommunicationsTypes>;
};
/** input type for inserting object relation for remote table "communications_types" */
export declare type CommunicationsTypesObjRelInsertInput = {
    data: CommunicationsTypesInsertInput;
    on_conflict?: Maybe<CommunicationsTypesOnConflict>;
};
/** on conflict condition type for table "communications_types" */
export declare type CommunicationsTypesOnConflict = {
    constraint: CommunicationsTypesConstraint;
    update_columns: Array<CommunicationsTypesUpdateColumn>;
    where?: Maybe<CommunicationsTypesBoolExp>;
};
/** ordering options when selecting data from "communications_types" */
export declare type CommunicationsTypesOrderBy = {
    acronym?: Maybe<OrderBy>;
    color?: Maybe<OrderBy>;
    communications_aggregate?: Maybe<CommunicationsAggregateOrderBy>;
    id?: Maybe<OrderBy>;
    infos_aggregate?: Maybe<InfosAggregateOrderBy>;
    name?: Maybe<OrderBy>;
    price?: Maybe<OrderBy>;
    radius_price_range?: Maybe<OrderBy>;
};
/** primary key columns input for table: "communications_types" */
export declare type CommunicationsTypesPkColumnsInput = {
    id: Scalars['uuid'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type CommunicationsTypesPrependInput = {
    radius_price_range?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "communications_types" */
export declare enum CommunicationsTypesSelectColumn {
    /** column name */
    Acronym = "acronym",
    /** column name */
    Color = "color",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Price = "price",
    /** column name */
    RadiusPriceRange = "radius_price_range"
}
/** input type for updating data in table "communications_types" */
export declare type CommunicationsTypesSetInput = {
    acronym?: Maybe<Scalars['bpchar']>;
    color?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Int']>;
    radius_price_range?: Maybe<Scalars['jsonb']>;
};
/** aggregate stddev on columns */
export declare type CommunicationsTypesStddevFields = {
    __typename?: 'communications_types_stddev_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "communications_types" */
export declare type CommunicationsTypesStddevOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type CommunicationsTypesStddevPopFields = {
    __typename?: 'communications_types_stddev_pop_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "communications_types" */
export declare type CommunicationsTypesStddevPopOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type CommunicationsTypesStddevSampFields = {
    __typename?: 'communications_types_stddev_samp_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "communications_types" */
export declare type CommunicationsTypesStddevSampOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type CommunicationsTypesSumFields = {
    __typename?: 'communications_types_sum_fields';
    price?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "communications_types" */
export declare type CommunicationsTypesSumOrderBy = {
    price?: Maybe<OrderBy>;
};
/** update columns of table "communications_types" */
export declare enum CommunicationsTypesUpdateColumn {
    /** column name */
    Acronym = "acronym",
    /** column name */
    Color = "color",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Price = "price",
    /** column name */
    RadiusPriceRange = "radius_price_range"
}
/** aggregate var_pop on columns */
export declare type CommunicationsTypesVarPopFields = {
    __typename?: 'communications_types_var_pop_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "communications_types" */
export declare type CommunicationsTypesVarPopOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type CommunicationsTypesVarSampFields = {
    __typename?: 'communications_types_var_samp_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "communications_types" */
export declare type CommunicationsTypesVarSampOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type CommunicationsTypesVarianceFields = {
    __typename?: 'communications_types_variance_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "communications_types" */
export declare type CommunicationsTypesVarianceOrderBy = {
    price?: Maybe<OrderBy>;
};
/** update columns of table "communications" */
export declare enum CommunicationsUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    Location = "location",
    /** column name */
    Name = "name",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz"
}
/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export declare type DateComparisonExp = {
    _eq?: Maybe<Scalars['date']>;
    _gt?: Maybe<Scalars['date']>;
    _gte?: Maybe<Scalars['date']>;
    _in?: Maybe<Array<Scalars['date']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['date']>;
    _lte?: Maybe<Scalars['date']>;
    _neq?: Maybe<Scalars['date']>;
    _nin?: Maybe<Array<Scalars['date']>>;
};
/** columns and relationships of "estimates" */
export declare type Estimates = {
    __typename?: 'estimates';
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    /** An array relationship */
    estimates_m2m_entities: Array<EstimatesM2mEntities>;
    /** An aggregated array relationship */
    estimates_m2m_entities_aggregate: EstimatesM2mEntitiesAggregate;
    /** An object relationship */
    estimates_status: EstimatesStatus;
    id: Scalars['uuid'];
    is_archive: Scalars['Boolean'];
    name: Scalars['String'];
    participations_credits: Scalars['Int'];
    status: EstimatesStatusEnum;
    updated_at: Scalars['timestamptz'];
};
/** columns and relationships of "estimates" */
export declare type EstimatesEstimatesM2mEntitiesArgs = {
    distinct_on?: Maybe<Array<EstimatesM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesM2mEntitiesOrderBy>>;
    where?: Maybe<EstimatesM2mEntitiesBoolExp>;
};
/** columns and relationships of "estimates" */
export declare type EstimatesEstimatesM2mEntitiesAggregateArgs = {
    distinct_on?: Maybe<Array<EstimatesM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesM2mEntitiesOrderBy>>;
    where?: Maybe<EstimatesM2mEntitiesBoolExp>;
};
/** aggregated selection of "estimates" */
export declare type EstimatesAggregate = {
    __typename?: 'estimates_aggregate';
    aggregate?: Maybe<EstimatesAggregateFields>;
    nodes: Array<Estimates>;
};
/** aggregate fields of "estimates" */
export declare type EstimatesAggregateFields = {
    __typename?: 'estimates_aggregate_fields';
    avg?: Maybe<EstimatesAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<EstimatesMaxFields>;
    min?: Maybe<EstimatesMinFields>;
    stddev?: Maybe<EstimatesStddevFields>;
    stddev_pop?: Maybe<EstimatesStddevPopFields>;
    stddev_samp?: Maybe<EstimatesStddevSampFields>;
    sum?: Maybe<EstimatesSumFields>;
    var_pop?: Maybe<EstimatesVarPopFields>;
    var_samp?: Maybe<EstimatesVarSampFields>;
    variance?: Maybe<EstimatesVarianceFields>;
};
/** aggregate fields of "estimates" */
export declare type EstimatesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<EstimatesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "estimates" */
export declare type EstimatesAggregateOrderBy = {
    avg?: Maybe<EstimatesAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<EstimatesMaxOrderBy>;
    min?: Maybe<EstimatesMinOrderBy>;
    stddev?: Maybe<EstimatesStddevOrderBy>;
    stddev_pop?: Maybe<EstimatesStddevPopOrderBy>;
    stddev_samp?: Maybe<EstimatesStddevSampOrderBy>;
    sum?: Maybe<EstimatesSumOrderBy>;
    var_pop?: Maybe<EstimatesVarPopOrderBy>;
    var_samp?: Maybe<EstimatesVarSampOrderBy>;
    variance?: Maybe<EstimatesVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "estimates" */
export declare type EstimatesArrRelInsertInput = {
    data: Array<EstimatesInsertInput>;
    on_conflict?: Maybe<EstimatesOnConflict>;
};
/** aggregate avg on columns */
export declare type EstimatesAvgFields = {
    __typename?: 'estimates_avg_fields';
    participations_credits?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "estimates" */
export declare type EstimatesAvgOrderBy = {
    participations_credits?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "estimates". All fields are combined with a logical 'AND'. */
export declare type EstimatesBoolExp = {
    _and?: Maybe<Array<Maybe<EstimatesBoolExp>>>;
    _not?: Maybe<EstimatesBoolExp>;
    _or?: Maybe<Array<Maybe<EstimatesBoolExp>>>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    estimates_m2m_entities?: Maybe<EstimatesM2mEntitiesBoolExp>;
    estimates_status?: Maybe<EstimatesStatusBoolExp>;
    id?: Maybe<UuidComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    participations_credits?: Maybe<IntComparisonExp>;
    status?: Maybe<EstimatesStatusEnumComparisonExp>;
    updated_at?: Maybe<TimestamptzComparisonExp>;
};
/** unique or primary key constraints on table "estimates" */
export declare enum EstimatesConstraint {
    /** unique or primary key constraint */
    EstimatesPkey = "estimates_pkey"
}
/** input type for incrementing integer column in table "estimates" */
export declare type EstimatesIncInput = {
    participations_credits?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "estimates" */
export declare type EstimatesInsertInput = {
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    estimates_m2m_entities?: Maybe<EstimatesM2mEntitiesArrRelInsertInput>;
    estimates_status?: Maybe<EstimatesStatusObjRelInsertInput>;
    id?: Maybe<Scalars['uuid']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    participations_credits?: Maybe<Scalars['Int']>;
    status?: Maybe<EstimatesStatusEnum>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};
/** columns and relationships of "estimates_m2m_entities" */
export declare type EstimatesM2mEntities = {
    __typename?: 'estimates_m2m_entities';
    /** An object relationship */
    communications_types?: Maybe<CommunicationsTypes>;
    entity_id: Scalars['uuid'];
    /** An object relationship */
    estimate: Estimates;
    estimate_id: Scalars['uuid'];
    /** An object relationship */
    games_types?: Maybe<GamesTypes>;
    id: Scalars['uuid'];
    name: Scalars['String'];
    radius: Scalars['Int'];
    trackers?: Maybe<Scalars['Int']>;
};
/** aggregated selection of "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesAggregate = {
    __typename?: 'estimates_m2m_entities_aggregate';
    aggregate?: Maybe<EstimatesM2mEntitiesAggregateFields>;
    nodes: Array<EstimatesM2mEntities>;
};
/** aggregate fields of "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesAggregateFields = {
    __typename?: 'estimates_m2m_entities_aggregate_fields';
    avg?: Maybe<EstimatesM2mEntitiesAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<EstimatesM2mEntitiesMaxFields>;
    min?: Maybe<EstimatesM2mEntitiesMinFields>;
    stddev?: Maybe<EstimatesM2mEntitiesStddevFields>;
    stddev_pop?: Maybe<EstimatesM2mEntitiesStddevPopFields>;
    stddev_samp?: Maybe<EstimatesM2mEntitiesStddevSampFields>;
    sum?: Maybe<EstimatesM2mEntitiesSumFields>;
    var_pop?: Maybe<EstimatesM2mEntitiesVarPopFields>;
    var_samp?: Maybe<EstimatesM2mEntitiesVarSampFields>;
    variance?: Maybe<EstimatesM2mEntitiesVarianceFields>;
};
/** aggregate fields of "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<EstimatesM2mEntitiesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesAggregateOrderBy = {
    avg?: Maybe<EstimatesM2mEntitiesAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<EstimatesM2mEntitiesMaxOrderBy>;
    min?: Maybe<EstimatesM2mEntitiesMinOrderBy>;
    stddev?: Maybe<EstimatesM2mEntitiesStddevOrderBy>;
    stddev_pop?: Maybe<EstimatesM2mEntitiesStddevPopOrderBy>;
    stddev_samp?: Maybe<EstimatesM2mEntitiesStddevSampOrderBy>;
    sum?: Maybe<EstimatesM2mEntitiesSumOrderBy>;
    var_pop?: Maybe<EstimatesM2mEntitiesVarPopOrderBy>;
    var_samp?: Maybe<EstimatesM2mEntitiesVarSampOrderBy>;
    variance?: Maybe<EstimatesM2mEntitiesVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesArrRelInsertInput = {
    data: Array<EstimatesM2mEntitiesInsertInput>;
    on_conflict?: Maybe<EstimatesM2mEntitiesOnConflict>;
};
/** aggregate avg on columns */
export declare type EstimatesM2mEntitiesAvgFields = {
    __typename?: 'estimates_m2m_entities_avg_fields';
    radius?: Maybe<Scalars['Float']>;
    trackers?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesAvgOrderBy = {
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "estimates_m2m_entities". All fields are combined with a logical 'AND'. */
export declare type EstimatesM2mEntitiesBoolExp = {
    _and?: Maybe<Array<Maybe<EstimatesM2mEntitiesBoolExp>>>;
    _not?: Maybe<EstimatesM2mEntitiesBoolExp>;
    _or?: Maybe<Array<Maybe<EstimatesM2mEntitiesBoolExp>>>;
    communications_types?: Maybe<CommunicationsTypesBoolExp>;
    entity_id?: Maybe<UuidComparisonExp>;
    estimate?: Maybe<EstimatesBoolExp>;
    estimate_id?: Maybe<UuidComparisonExp>;
    games_types?: Maybe<GamesTypesBoolExp>;
    id?: Maybe<UuidComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    radius?: Maybe<IntComparisonExp>;
    trackers?: Maybe<IntComparisonExp>;
};
/** unique or primary key constraints on table "estimates_m2m_entities" */
export declare enum EstimatesM2mEntitiesConstraint {
    /** unique or primary key constraint */
    EstimatesM2mEntitiesPkey = "estimates_m2m_entities_pkey"
}
/** input type for incrementing integer column in table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesIncInput = {
    radius?: Maybe<Scalars['Int']>;
    trackers?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesInsertInput = {
    communications_types?: Maybe<CommunicationsTypesObjRelInsertInput>;
    entity_id?: Maybe<Scalars['uuid']>;
    estimate?: Maybe<EstimatesObjRelInsertInput>;
    estimate_id?: Maybe<Scalars['uuid']>;
    games_types?: Maybe<GamesTypesObjRelInsertInput>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    trackers?: Maybe<Scalars['Int']>;
};
/** aggregate max on columns */
export declare type EstimatesM2mEntitiesMaxFields = {
    __typename?: 'estimates_m2m_entities_max_fields';
    entity_id?: Maybe<Scalars['uuid']>;
    estimate_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    trackers?: Maybe<Scalars['Int']>;
};
/** order by max() on columns of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesMaxOrderBy = {
    entity_id?: Maybe<OrderBy>;
    estimate_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type EstimatesM2mEntitiesMinFields = {
    __typename?: 'estimates_m2m_entities_min_fields';
    entity_id?: Maybe<Scalars['uuid']>;
    estimate_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    trackers?: Maybe<Scalars['Int']>;
};
/** order by min() on columns of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesMinOrderBy = {
    entity_id?: Maybe<OrderBy>;
    estimate_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** response of any mutation on the table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesMutationResponse = {
    __typename?: 'estimates_m2m_entities_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<EstimatesM2mEntities>;
};
/** input type for inserting object relation for remote table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesObjRelInsertInput = {
    data: EstimatesM2mEntitiesInsertInput;
    on_conflict?: Maybe<EstimatesM2mEntitiesOnConflict>;
};
/** on conflict condition type for table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesOnConflict = {
    constraint: EstimatesM2mEntitiesConstraint;
    update_columns: Array<EstimatesM2mEntitiesUpdateColumn>;
    where?: Maybe<EstimatesM2mEntitiesBoolExp>;
};
/** ordering options when selecting data from "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesOrderBy = {
    communications_types?: Maybe<CommunicationsTypesOrderBy>;
    entity_id?: Maybe<OrderBy>;
    estimate?: Maybe<EstimatesOrderBy>;
    estimate_id?: Maybe<OrderBy>;
    games_types?: Maybe<GamesTypesOrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** primary key columns input for table: "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "estimates_m2m_entities" */
export declare enum EstimatesM2mEntitiesSelectColumn {
    /** column name */
    EntityId = "entity_id",
    /** column name */
    EstimateId = "estimate_id",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Radius = "radius",
    /** column name */
    Trackers = "trackers"
}
/** input type for updating data in table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesSetInput = {
    entity_id?: Maybe<Scalars['uuid']>;
    estimate_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    trackers?: Maybe<Scalars['Int']>;
};
/** aggregate stddev on columns */
export declare type EstimatesM2mEntitiesStddevFields = {
    __typename?: 'estimates_m2m_entities_stddev_fields';
    radius?: Maybe<Scalars['Float']>;
    trackers?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesStddevOrderBy = {
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type EstimatesM2mEntitiesStddevPopFields = {
    __typename?: 'estimates_m2m_entities_stddev_pop_fields';
    radius?: Maybe<Scalars['Float']>;
    trackers?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesStddevPopOrderBy = {
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type EstimatesM2mEntitiesStddevSampFields = {
    __typename?: 'estimates_m2m_entities_stddev_samp_fields';
    radius?: Maybe<Scalars['Float']>;
    trackers?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesStddevSampOrderBy = {
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type EstimatesM2mEntitiesSumFields = {
    __typename?: 'estimates_m2m_entities_sum_fields';
    radius?: Maybe<Scalars['Int']>;
    trackers?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesSumOrderBy = {
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** update columns of table "estimates_m2m_entities" */
export declare enum EstimatesM2mEntitiesUpdateColumn {
    /** column name */
    EntityId = "entity_id",
    /** column name */
    EstimateId = "estimate_id",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Radius = "radius",
    /** column name */
    Trackers = "trackers"
}
/** aggregate var_pop on columns */
export declare type EstimatesM2mEntitiesVarPopFields = {
    __typename?: 'estimates_m2m_entities_var_pop_fields';
    radius?: Maybe<Scalars['Float']>;
    trackers?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesVarPopOrderBy = {
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type EstimatesM2mEntitiesVarSampFields = {
    __typename?: 'estimates_m2m_entities_var_samp_fields';
    radius?: Maybe<Scalars['Float']>;
    trackers?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesVarSampOrderBy = {
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type EstimatesM2mEntitiesVarianceFields = {
    __typename?: 'estimates_m2m_entities_variance_fields';
    radius?: Maybe<Scalars['Float']>;
    trackers?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "estimates_m2m_entities" */
export declare type EstimatesM2mEntitiesVarianceOrderBy = {
    radius?: Maybe<OrderBy>;
    trackers?: Maybe<OrderBy>;
};
/** aggregate max on columns */
export declare type EstimatesMaxFields = {
    __typename?: 'estimates_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    participations_credits?: Maybe<Scalars['Int']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};
/** order by max() on columns of table "estimates" */
export declare type EstimatesMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    participations_credits?: Maybe<OrderBy>;
    updated_at?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type EstimatesMinFields = {
    __typename?: 'estimates_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    participations_credits?: Maybe<Scalars['Int']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};
/** order by min() on columns of table "estimates" */
export declare type EstimatesMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    participations_credits?: Maybe<OrderBy>;
    updated_at?: Maybe<OrderBy>;
};
/** response of any mutation on the table "estimates" */
export declare type EstimatesMutationResponse = {
    __typename?: 'estimates_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Estimates>;
};
/** input type for inserting object relation for remote table "estimates" */
export declare type EstimatesObjRelInsertInput = {
    data: EstimatesInsertInput;
    on_conflict?: Maybe<EstimatesOnConflict>;
};
/** on conflict condition type for table "estimates" */
export declare type EstimatesOnConflict = {
    constraint: EstimatesConstraint;
    update_columns: Array<EstimatesUpdateColumn>;
    where?: Maybe<EstimatesBoolExp>;
};
/** ordering options when selecting data from "estimates" */
export declare type EstimatesOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    estimates_m2m_entities_aggregate?: Maybe<EstimatesM2mEntitiesAggregateOrderBy>;
    estimates_status?: Maybe<EstimatesStatusOrderBy>;
    id?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    participations_credits?: Maybe<OrderBy>;
    status?: Maybe<OrderBy>;
    updated_at?: Maybe<OrderBy>;
};
/** primary key columns input for table: "estimates" */
export declare type EstimatesPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "estimates" */
export declare enum EstimatesSelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Id = "id",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    Name = "name",
    /** column name */
    ParticipationsCredits = "participations_credits",
    /** column name */
    Status = "status",
    /** column name */
    UpdatedAt = "updated_at"
}
/** input type for updating data in table "estimates" */
export declare type EstimatesSetInput = {
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    participations_credits?: Maybe<Scalars['Int']>;
    status?: Maybe<EstimatesStatusEnum>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};
/** columns and relationships of "estimates_status" */
export declare type EstimatesStatus = {
    __typename?: 'estimates_status';
    description: Scalars['String'];
    value: Scalars['String'];
};
/** aggregated selection of "estimates_status" */
export declare type EstimatesStatusAggregate = {
    __typename?: 'estimates_status_aggregate';
    aggregate?: Maybe<EstimatesStatusAggregateFields>;
    nodes: Array<EstimatesStatus>;
};
/** aggregate fields of "estimates_status" */
export declare type EstimatesStatusAggregateFields = {
    __typename?: 'estimates_status_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<EstimatesStatusMaxFields>;
    min?: Maybe<EstimatesStatusMinFields>;
};
/** aggregate fields of "estimates_status" */
export declare type EstimatesStatusAggregateFieldsCountArgs = {
    columns?: Maybe<Array<EstimatesStatusSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "estimates_status" */
export declare type EstimatesStatusAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<EstimatesStatusMaxOrderBy>;
    min?: Maybe<EstimatesStatusMinOrderBy>;
};
/** input type for inserting array relation for remote table "estimates_status" */
export declare type EstimatesStatusArrRelInsertInput = {
    data: Array<EstimatesStatusInsertInput>;
    on_conflict?: Maybe<EstimatesStatusOnConflict>;
};
/** Boolean expression to filter rows from the table "estimates_status". All fields are combined with a logical 'AND'. */
export declare type EstimatesStatusBoolExp = {
    _and?: Maybe<Array<Maybe<EstimatesStatusBoolExp>>>;
    _not?: Maybe<EstimatesStatusBoolExp>;
    _or?: Maybe<Array<Maybe<EstimatesStatusBoolExp>>>;
    description?: Maybe<StringComparisonExp>;
    value?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "estimates_status" */
export declare enum EstimatesStatusConstraint {
    /** unique or primary key constraint */
    EstimatesStatusPkey = "estimates_status_pkey"
}
export declare enum EstimatesStatusEnum {
    /** Canceled quote */
    CanceledQuote = "CANCELED_QUOTE",
    /** In progress */
    InProgress = "IN_PROGRESS",
    /** Pending quote */
    PendingQuote = "PENDING_QUOTE",
    /** Validated */
    Validated = "VALIDATED"
}
/** expression to compare columns of type estimates_status_enum. All fields are combined with logical 'AND'. */
export declare type EstimatesStatusEnumComparisonExp = {
    _eq?: Maybe<EstimatesStatusEnum>;
    _in?: Maybe<Array<EstimatesStatusEnum>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _neq?: Maybe<EstimatesStatusEnum>;
    _nin?: Maybe<Array<EstimatesStatusEnum>>;
};
/** input type for inserting data into table "estimates_status" */
export declare type EstimatesStatusInsertInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type EstimatesStatusMaxFields = {
    __typename?: 'estimates_status_max_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "estimates_status" */
export declare type EstimatesStatusMaxOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type EstimatesStatusMinFields = {
    __typename?: 'estimates_status_min_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "estimates_status" */
export declare type EstimatesStatusMinOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** response of any mutation on the table "estimates_status" */
export declare type EstimatesStatusMutationResponse = {
    __typename?: 'estimates_status_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<EstimatesStatus>;
};
/** input type for inserting object relation for remote table "estimates_status" */
export declare type EstimatesStatusObjRelInsertInput = {
    data: EstimatesStatusInsertInput;
    on_conflict?: Maybe<EstimatesStatusOnConflict>;
};
/** on conflict condition type for table "estimates_status" */
export declare type EstimatesStatusOnConflict = {
    constraint: EstimatesStatusConstraint;
    update_columns: Array<EstimatesStatusUpdateColumn>;
    where?: Maybe<EstimatesStatusBoolExp>;
};
/** ordering options when selecting data from "estimates_status" */
export declare type EstimatesStatusOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** primary key columns input for table: "estimates_status" */
export declare type EstimatesStatusPkColumnsInput = {
    value: Scalars['String'];
};
/** select columns of table "estimates_status" */
export declare enum EstimatesStatusSelectColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** input type for updating data in table "estimates_status" */
export declare type EstimatesStatusSetInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** update columns of table "estimates_status" */
export declare enum EstimatesStatusUpdateColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** aggregate stddev on columns */
export declare type EstimatesStddevFields = {
    __typename?: 'estimates_stddev_fields';
    participations_credits?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "estimates" */
export declare type EstimatesStddevOrderBy = {
    participations_credits?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type EstimatesStddevPopFields = {
    __typename?: 'estimates_stddev_pop_fields';
    participations_credits?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "estimates" */
export declare type EstimatesStddevPopOrderBy = {
    participations_credits?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type EstimatesStddevSampFields = {
    __typename?: 'estimates_stddev_samp_fields';
    participations_credits?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "estimates" */
export declare type EstimatesStddevSampOrderBy = {
    participations_credits?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type EstimatesSumFields = {
    __typename?: 'estimates_sum_fields';
    participations_credits?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "estimates" */
export declare type EstimatesSumOrderBy = {
    participations_credits?: Maybe<OrderBy>;
};
/** update columns of table "estimates" */
export declare enum EstimatesUpdateColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Id = "id",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    Name = "name",
    /** column name */
    ParticipationsCredits = "participations_credits",
    /** column name */
    Status = "status",
    /** column name */
    UpdatedAt = "updated_at"
}
/** aggregate var_pop on columns */
export declare type EstimatesVarPopFields = {
    __typename?: 'estimates_var_pop_fields';
    participations_credits?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "estimates" */
export declare type EstimatesVarPopOrderBy = {
    participations_credits?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type EstimatesVarSampFields = {
    __typename?: 'estimates_var_samp_fields';
    participations_credits?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "estimates" */
export declare type EstimatesVarSampOrderBy = {
    participations_credits?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type EstimatesVarianceFields = {
    __typename?: 'estimates_variance_fields';
    participations_credits?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "estimates" */
export declare type EstimatesVarianceOrderBy = {
    participations_credits?: Maybe<OrderBy>;
};
/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export declare type Float8ComparisonExp = {
    _eq?: Maybe<Scalars['float8']>;
    _gt?: Maybe<Scalars['float8']>;
    _gte?: Maybe<Scalars['float8']>;
    _in?: Maybe<Array<Scalars['float8']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['float8']>;
    _lte?: Maybe<Scalars['float8']>;
    _neq?: Maybe<Scalars['float8']>;
    _nin?: Maybe<Array<Scalars['float8']>>;
};
/** columns and relationships of "gains" */
export declare type Gains = {
    __typename?: 'gains';
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    description: Scalars['String'];
    /** An array relationship */
    gains_virtuals: Array<GainsVirtuals>;
    /** An aggregated array relationship */
    gains_virtuals_aggregate: GainsVirtualsAggregate;
    /** An array relationship */
    games_gains: Array<GamesGains>;
    /** An aggregated array relationship */
    games_gains_aggregate: GamesGainsAggregate;
    gtc?: Maybe<Scalars['String']>;
    id: Scalars['uuid'];
    /** An object relationship */
    image?: Maybe<Assets>;
    image_id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_virtual: Scalars['Boolean'];
    name: Scalars['String'];
    stock: Scalars['Int'];
    /** An object relationship */
    template?: Maybe<Templates>;
    template_id?: Maybe<Scalars['uuid']>;
};
/** columns and relationships of "gains" */
export declare type GainsGainsVirtualsArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsOrderBy>>;
    where?: Maybe<GainsVirtualsBoolExp>;
};
/** columns and relationships of "gains" */
export declare type GainsGainsVirtualsAggregateArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsOrderBy>>;
    where?: Maybe<GainsVirtualsBoolExp>;
};
/** columns and relationships of "gains" */
export declare type GainsGamesGainsArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "gains" */
export declare type GainsGamesGainsAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** aggregated selection of "gains" */
export declare type GainsAggregate = {
    __typename?: 'gains_aggregate';
    aggregate?: Maybe<GainsAggregateFields>;
    nodes: Array<Gains>;
};
/** aggregate fields of "gains" */
export declare type GainsAggregateFields = {
    __typename?: 'gains_aggregate_fields';
    avg?: Maybe<GainsAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GainsMaxFields>;
    min?: Maybe<GainsMinFields>;
    stddev?: Maybe<GainsStddevFields>;
    stddev_pop?: Maybe<GainsStddevPopFields>;
    stddev_samp?: Maybe<GainsStddevSampFields>;
    sum?: Maybe<GainsSumFields>;
    var_pop?: Maybe<GainsVarPopFields>;
    var_samp?: Maybe<GainsVarSampFields>;
    variance?: Maybe<GainsVarianceFields>;
};
/** aggregate fields of "gains" */
export declare type GainsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GainsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "gains" */
export declare type GainsAggregateOrderBy = {
    avg?: Maybe<GainsAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GainsMaxOrderBy>;
    min?: Maybe<GainsMinOrderBy>;
    stddev?: Maybe<GainsStddevOrderBy>;
    stddev_pop?: Maybe<GainsStddevPopOrderBy>;
    stddev_samp?: Maybe<GainsStddevSampOrderBy>;
    sum?: Maybe<GainsSumOrderBy>;
    var_pop?: Maybe<GainsVarPopOrderBy>;
    var_samp?: Maybe<GainsVarSampOrderBy>;
    variance?: Maybe<GainsVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "gains" */
export declare type GainsArrRelInsertInput = {
    data: Array<GainsInsertInput>;
    on_conflict?: Maybe<GainsOnConflict>;
};
/** aggregate avg on columns */
export declare type GainsAvgFields = {
    __typename?: 'gains_avg_fields';
    stock?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "gains" */
export declare type GainsAvgOrderBy = {
    stock?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "gains". All fields are combined with a logical 'AND'. */
export declare type GainsBoolExp = {
    _and?: Maybe<Array<Maybe<GainsBoolExp>>>;
    _not?: Maybe<GainsBoolExp>;
    _or?: Maybe<Array<Maybe<GainsBoolExp>>>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    description?: Maybe<StringComparisonExp>;
    gains_virtuals?: Maybe<GainsVirtualsBoolExp>;
    games_gains?: Maybe<GamesGainsBoolExp>;
    gtc?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    image?: Maybe<AssetsBoolExp>;
    image_id?: Maybe<UuidComparisonExp>;
    instructions?: Maybe<StringComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_virtual?: Maybe<BooleanComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    stock?: Maybe<IntComparisonExp>;
    template?: Maybe<TemplatesBoolExp>;
    template_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "gains" */
export declare enum GainsConstraint {
    /** unique or primary key constraint */
    GainsPkey = "Gains_pkey"
}
/** input type for incrementing integer column in table "gains" */
export declare type GainsIncInput = {
    stock?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "gains" */
export declare type GainsInsertInput = {
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    description?: Maybe<Scalars['String']>;
    gains_virtuals?: Maybe<GainsVirtualsArrRelInsertInput>;
    games_gains?: Maybe<GamesGainsArrRelInsertInput>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    image?: Maybe<AssetsObjRelInsertInput>;
    image_id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_virtual?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    stock?: Maybe<Scalars['Int']>;
    template?: Maybe<TemplatesObjRelInsertInput>;
    template_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type GainsMaxFields = {
    __typename?: 'gains_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    description?: Maybe<Scalars['String']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    image_id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    stock?: Maybe<Scalars['Int']>;
    template_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "gains" */
export declare type GainsMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    image_id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    template_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GainsMinFields = {
    __typename?: 'gains_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    description?: Maybe<Scalars['String']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    image_id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    stock?: Maybe<Scalars['Int']>;
    template_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "gains" */
export declare type GainsMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    image_id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    template_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "gains" */
export declare type GainsMutationResponse = {
    __typename?: 'gains_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Gains>;
};
/** input type for inserting object relation for remote table "gains" */
export declare type GainsObjRelInsertInput = {
    data: GainsInsertInput;
    on_conflict?: Maybe<GainsOnConflict>;
};
/** on conflict condition type for table "gains" */
export declare type GainsOnConflict = {
    constraint: GainsConstraint;
    update_columns: Array<GainsUpdateColumn>;
    where?: Maybe<GainsBoolExp>;
};
/** ordering options when selecting data from "gains" */
export declare type GainsOrderBy = {
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    gains_virtuals_aggregate?: Maybe<GainsVirtualsAggregateOrderBy>;
    games_gains_aggregate?: Maybe<GamesGainsAggregateOrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    image?: Maybe<AssetsOrderBy>;
    image_id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_virtual?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    template?: Maybe<TemplatesOrderBy>;
    template_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "gains" */
export declare type GainsPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "gains" */
export declare enum GainsSelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Description = "description",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    ImageId = "image_id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsVirtual = "is_virtual",
    /** column name */
    Name = "name",
    /** column name */
    Stock = "stock",
    /** column name */
    TemplateId = "template_id"
}
/** input type for updating data in table "gains" */
export declare type GainsSetInput = {
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    description?: Maybe<Scalars['String']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    image_id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_virtual?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    stock?: Maybe<Scalars['Int']>;
    template_id?: Maybe<Scalars['uuid']>;
};
/** aggregate stddev on columns */
export declare type GainsStddevFields = {
    __typename?: 'gains_stddev_fields';
    stock?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "gains" */
export declare type GainsStddevOrderBy = {
    stock?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GainsStddevPopFields = {
    __typename?: 'gains_stddev_pop_fields';
    stock?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "gains" */
export declare type GainsStddevPopOrderBy = {
    stock?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GainsStddevSampFields = {
    __typename?: 'gains_stddev_samp_fields';
    stock?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "gains" */
export declare type GainsStddevSampOrderBy = {
    stock?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GainsSumFields = {
    __typename?: 'gains_sum_fields';
    stock?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "gains" */
export declare type GainsSumOrderBy = {
    stock?: Maybe<OrderBy>;
};
/** update columns of table "gains" */
export declare enum GainsUpdateColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Description = "description",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    ImageId = "image_id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsVirtual = "is_virtual",
    /** column name */
    Name = "name",
    /** column name */
    Stock = "stock",
    /** column name */
    TemplateId = "template_id"
}
/** aggregate var_pop on columns */
export declare type GainsVarPopFields = {
    __typename?: 'gains_var_pop_fields';
    stock?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "gains" */
export declare type GainsVarPopOrderBy = {
    stock?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GainsVarSampFields = {
    __typename?: 'gains_var_samp_fields';
    stock?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "gains" */
export declare type GainsVarSampOrderBy = {
    stock?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GainsVarianceFields = {
    __typename?: 'gains_variance_fields';
    stock?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "gains" */
export declare type GainsVarianceOrderBy = {
    stock?: Maybe<OrderBy>;
};
/** columns and relationships of "gains_virtuals" */
export declare type GainsVirtuals = {
    __typename?: 'gains_virtuals';
    format: Scalars['String'];
    gain_id: Scalars['uuid'];
    id: Scalars['uuid'];
    value: Scalars['String'];
};
/** aggregated selection of "gains_virtuals" */
export declare type GainsVirtualsAggregate = {
    __typename?: 'gains_virtuals_aggregate';
    aggregate?: Maybe<GainsVirtualsAggregateFields>;
    nodes: Array<GainsVirtuals>;
};
/** aggregate fields of "gains_virtuals" */
export declare type GainsVirtualsAggregateFields = {
    __typename?: 'gains_virtuals_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GainsVirtualsMaxFields>;
    min?: Maybe<GainsVirtualsMinFields>;
};
/** aggregate fields of "gains_virtuals" */
export declare type GainsVirtualsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GainsVirtualsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "gains_virtuals" */
export declare type GainsVirtualsAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<GainsVirtualsMaxOrderBy>;
    min?: Maybe<GainsVirtualsMinOrderBy>;
};
/** input type for inserting array relation for remote table "gains_virtuals" */
export declare type GainsVirtualsArrRelInsertInput = {
    data: Array<GainsVirtualsInsertInput>;
    on_conflict?: Maybe<GainsVirtualsOnConflict>;
};
/** Boolean expression to filter rows from the table "gains_virtuals". All fields are combined with a logical 'AND'. */
export declare type GainsVirtualsBoolExp = {
    _and?: Maybe<Array<Maybe<GainsVirtualsBoolExp>>>;
    _not?: Maybe<GainsVirtualsBoolExp>;
    _or?: Maybe<Array<Maybe<GainsVirtualsBoolExp>>>;
    format?: Maybe<StringComparisonExp>;
    gain_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    value?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "gains_virtuals" */
export declare enum GainsVirtualsConstraint {
    /** unique or primary key constraint */
    GainsVirtualPkey = "gains_virtual_pkey",
    /** unique or primary key constraint */
    GainsVirtualsValueGainIdKey = "gains_virtuals_value_gain_id_key"
}
/** columns and relationships of "gains_virtuals_formats" */
export declare type GainsVirtualsFormats = {
    __typename?: 'gains_virtuals_formats';
    description: Scalars['String'];
    value: Scalars['String'];
};
/** aggregated selection of "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsAggregate = {
    __typename?: 'gains_virtuals_formats_aggregate';
    aggregate?: Maybe<GainsVirtualsFormatsAggregateFields>;
    nodes: Array<GainsVirtualsFormats>;
};
/** aggregate fields of "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsAggregateFields = {
    __typename?: 'gains_virtuals_formats_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GainsVirtualsFormatsMaxFields>;
    min?: Maybe<GainsVirtualsFormatsMinFields>;
};
/** aggregate fields of "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GainsVirtualsFormatsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<GainsVirtualsFormatsMaxOrderBy>;
    min?: Maybe<GainsVirtualsFormatsMinOrderBy>;
};
/** input type for inserting array relation for remote table "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsArrRelInsertInput = {
    data: Array<GainsVirtualsFormatsInsertInput>;
    on_conflict?: Maybe<GainsVirtualsFormatsOnConflict>;
};
/** Boolean expression to filter rows from the table "gains_virtuals_formats". All fields are combined with a logical 'AND'. */
export declare type GainsVirtualsFormatsBoolExp = {
    _and?: Maybe<Array<Maybe<GainsVirtualsFormatsBoolExp>>>;
    _not?: Maybe<GainsVirtualsFormatsBoolExp>;
    _or?: Maybe<Array<Maybe<GainsVirtualsFormatsBoolExp>>>;
    description?: Maybe<StringComparisonExp>;
    value?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "gains_virtuals_formats" */
export declare enum GainsVirtualsFormatsConstraint {
    /** unique or primary key constraint */
    GainsVirtualsFormatsPkey = "gains_virtuals_formats_pkey"
}
/** input type for inserting data into table "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsInsertInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type GainsVirtualsFormatsMaxFields = {
    __typename?: 'gains_virtuals_formats_max_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsMaxOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GainsVirtualsFormatsMinFields = {
    __typename?: 'gains_virtuals_formats_min_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsMinOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** response of any mutation on the table "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsMutationResponse = {
    __typename?: 'gains_virtuals_formats_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GainsVirtualsFormats>;
};
/** input type for inserting object relation for remote table "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsObjRelInsertInput = {
    data: GainsVirtualsFormatsInsertInput;
    on_conflict?: Maybe<GainsVirtualsFormatsOnConflict>;
};
/** on conflict condition type for table "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsOnConflict = {
    constraint: GainsVirtualsFormatsConstraint;
    update_columns: Array<GainsVirtualsFormatsUpdateColumn>;
    where?: Maybe<GainsVirtualsFormatsBoolExp>;
};
/** ordering options when selecting data from "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** primary key columns input for table: "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsPkColumnsInput = {
    value: Scalars['String'];
};
/** select columns of table "gains_virtuals_formats" */
export declare enum GainsVirtualsFormatsSelectColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** input type for updating data in table "gains_virtuals_formats" */
export declare type GainsVirtualsFormatsSetInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** update columns of table "gains_virtuals_formats" */
export declare enum GainsVirtualsFormatsUpdateColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** input type for inserting data into table "gains_virtuals" */
export declare type GainsVirtualsInsertInput = {
    format?: Maybe<Scalars['String']>;
    gain_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    value?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type GainsVirtualsMaxFields = {
    __typename?: 'gains_virtuals_max_fields';
    format?: Maybe<Scalars['String']>;
    gain_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    value?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "gains_virtuals" */
export declare type GainsVirtualsMaxOrderBy = {
    format?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GainsVirtualsMinFields = {
    __typename?: 'gains_virtuals_min_fields';
    format?: Maybe<Scalars['String']>;
    gain_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    value?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "gains_virtuals" */
export declare type GainsVirtualsMinOrderBy = {
    format?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** response of any mutation on the table "gains_virtuals" */
export declare type GainsVirtualsMutationResponse = {
    __typename?: 'gains_virtuals_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GainsVirtuals>;
};
/** input type for inserting object relation for remote table "gains_virtuals" */
export declare type GainsVirtualsObjRelInsertInput = {
    data: GainsVirtualsInsertInput;
    on_conflict?: Maybe<GainsVirtualsOnConflict>;
};
/** on conflict condition type for table "gains_virtuals" */
export declare type GainsVirtualsOnConflict = {
    constraint: GainsVirtualsConstraint;
    update_columns: Array<GainsVirtualsUpdateColumn>;
    where?: Maybe<GainsVirtualsBoolExp>;
};
/** ordering options when selecting data from "gains_virtuals" */
export declare type GainsVirtualsOrderBy = {
    format?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** primary key columns input for table: "gains_virtuals" */
export declare type GainsVirtualsPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "gains_virtuals" */
export declare enum GainsVirtualsSelectColumn {
    /** column name */
    Format = "format",
    /** column name */
    GainId = "gain_id",
    /** column name */
    Id = "id",
    /** column name */
    Value = "value"
}
/** input type for updating data in table "gains_virtuals" */
export declare type GainsVirtualsSetInput = {
    format?: Maybe<Scalars['String']>;
    gain_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    value?: Maybe<Scalars['String']>;
};
/** columns and relationships of "gains_virtuals_types" */
export declare type GainsVirtualsTypes = {
    __typename?: 'gains_virtuals_types';
    description: Scalars['String'];
    value: Scalars['String'];
};
/** aggregated selection of "gains_virtuals_types" */
export declare type GainsVirtualsTypesAggregate = {
    __typename?: 'gains_virtuals_types_aggregate';
    aggregate?: Maybe<GainsVirtualsTypesAggregateFields>;
    nodes: Array<GainsVirtualsTypes>;
};
/** aggregate fields of "gains_virtuals_types" */
export declare type GainsVirtualsTypesAggregateFields = {
    __typename?: 'gains_virtuals_types_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GainsVirtualsTypesMaxFields>;
    min?: Maybe<GainsVirtualsTypesMinFields>;
};
/** aggregate fields of "gains_virtuals_types" */
export declare type GainsVirtualsTypesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GainsVirtualsTypesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "gains_virtuals_types" */
export declare type GainsVirtualsTypesAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<GainsVirtualsTypesMaxOrderBy>;
    min?: Maybe<GainsVirtualsTypesMinOrderBy>;
};
/** input type for inserting array relation for remote table "gains_virtuals_types" */
export declare type GainsVirtualsTypesArrRelInsertInput = {
    data: Array<GainsVirtualsTypesInsertInput>;
    on_conflict?: Maybe<GainsVirtualsTypesOnConflict>;
};
/** Boolean expression to filter rows from the table "gains_virtuals_types". All fields are combined with a logical 'AND'. */
export declare type GainsVirtualsTypesBoolExp = {
    _and?: Maybe<Array<Maybe<GainsVirtualsTypesBoolExp>>>;
    _not?: Maybe<GainsVirtualsTypesBoolExp>;
    _or?: Maybe<Array<Maybe<GainsVirtualsTypesBoolExp>>>;
    description?: Maybe<StringComparisonExp>;
    value?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "gains_virtuals_types" */
export declare enum GainsVirtualsTypesConstraint {
    /** unique or primary key constraint */
    GainsVirtualsTypesPkey = "gains_virtuals_types_pkey"
}
/** input type for inserting data into table "gains_virtuals_types" */
export declare type GainsVirtualsTypesInsertInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type GainsVirtualsTypesMaxFields = {
    __typename?: 'gains_virtuals_types_max_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "gains_virtuals_types" */
export declare type GainsVirtualsTypesMaxOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GainsVirtualsTypesMinFields = {
    __typename?: 'gains_virtuals_types_min_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "gains_virtuals_types" */
export declare type GainsVirtualsTypesMinOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** response of any mutation on the table "gains_virtuals_types" */
export declare type GainsVirtualsTypesMutationResponse = {
    __typename?: 'gains_virtuals_types_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GainsVirtualsTypes>;
};
/** input type for inserting object relation for remote table "gains_virtuals_types" */
export declare type GainsVirtualsTypesObjRelInsertInput = {
    data: GainsVirtualsTypesInsertInput;
    on_conflict?: Maybe<GainsVirtualsTypesOnConflict>;
};
/** on conflict condition type for table "gains_virtuals_types" */
export declare type GainsVirtualsTypesOnConflict = {
    constraint: GainsVirtualsTypesConstraint;
    update_columns: Array<GainsVirtualsTypesUpdateColumn>;
    where?: Maybe<GainsVirtualsTypesBoolExp>;
};
/** ordering options when selecting data from "gains_virtuals_types" */
export declare type GainsVirtualsTypesOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** primary key columns input for table: "gains_virtuals_types" */
export declare type GainsVirtualsTypesPkColumnsInput = {
    value: Scalars['String'];
};
/** select columns of table "gains_virtuals_types" */
export declare enum GainsVirtualsTypesSelectColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** input type for updating data in table "gains_virtuals_types" */
export declare type GainsVirtualsTypesSetInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** update columns of table "gains_virtuals_types" */
export declare enum GainsVirtualsTypesUpdateColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** update columns of table "gains_virtuals" */
export declare enum GainsVirtualsUpdateColumn {
    /** column name */
    Format = "format",
    /** column name */
    GainId = "gain_id",
    /** column name */
    Id = "id",
    /** column name */
    Value = "value"
}
/** columns and relationships of "games" */
export declare type Games = {
    __typename?: 'games';
    address?: Maybe<Scalars['String']>;
    /** An object relationship */
    card_image?: Maybe<Assets>;
    /** An object relationship */
    card_image_background?: Maybe<Assets>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    /** An array relationship */
    games_gains: Array<GamesGains>;
    /** An aggregated array relationship */
    games_gains_aggregate: GamesGainsAggregate;
    /** An array relationship */
    games_played: Array<GamesPlayed>;
    /** An aggregated array relationship */
    games_played_aggregate: GamesPlayedAggregate;
    gtc?: Maybe<Scalars['String']>;
    id: Scalars['uuid'];
    instructions?: Maybe<Scalars['String']>;
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    is_test: Scalars['Boolean'];
    keep_cumulated_probability: Scalars['Boolean'];
    location?: Maybe<Scalars['geography']>;
    max_participations: Scalars['Int'];
    name: Scalars['String'];
    radius?: Maybe<Scalars['Int']>;
    /** An object relationship */
    type: GamesTypes;
    type_id: Scalars['uuid'];
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    with_instant_gains: Scalars['Boolean'];
    with_magic_random_drawings: Scalars['Boolean'];
    with_random_drawings: Scalars['Boolean'];
};
/** columns and relationships of "games" */
export declare type GamesDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "games" */
export declare type GamesGamesGainsArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "games" */
export declare type GamesGamesGainsAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "games" */
export declare type GamesGamesPlayedArgs = {
    distinct_on?: Maybe<Array<GamesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedOrderBy>>;
    where?: Maybe<GamesPlayedBoolExp>;
};
/** columns and relationships of "games" */
export declare type GamesGamesPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedOrderBy>>;
    where?: Maybe<GamesPlayedBoolExp>;
};
/** aggregated selection of "games" */
export declare type GamesAggregate = {
    __typename?: 'games_aggregate';
    aggregate?: Maybe<GamesAggregateFields>;
    nodes: Array<Games>;
};
/** aggregate fields of "games" */
export declare type GamesAggregateFields = {
    __typename?: 'games_aggregate_fields';
    avg?: Maybe<GamesAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesMaxFields>;
    min?: Maybe<GamesMinFields>;
    stddev?: Maybe<GamesStddevFields>;
    stddev_pop?: Maybe<GamesStddevPopFields>;
    stddev_samp?: Maybe<GamesStddevSampFields>;
    sum?: Maybe<GamesSumFields>;
    var_pop?: Maybe<GamesVarPopFields>;
    var_samp?: Maybe<GamesVarSampFields>;
    variance?: Maybe<GamesVarianceFields>;
};
/** aggregate fields of "games" */
export declare type GamesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games" */
export declare type GamesAggregateOrderBy = {
    avg?: Maybe<GamesAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesMaxOrderBy>;
    min?: Maybe<GamesMinOrderBy>;
    stddev?: Maybe<GamesStddevOrderBy>;
    stddev_pop?: Maybe<GamesStddevPopOrderBy>;
    stddev_samp?: Maybe<GamesStddevSampOrderBy>;
    sum?: Maybe<GamesSumOrderBy>;
    var_pop?: Maybe<GamesVarPopOrderBy>;
    var_samp?: Maybe<GamesVarSampOrderBy>;
    variance?: Maybe<GamesVarianceOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type GamesAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "games" */
export declare type GamesArrRelInsertInput = {
    data: Array<GamesInsertInput>;
    on_conflict?: Maybe<GamesOnConflict>;
};
/** aggregate avg on columns */
export declare type GamesAvgFields = {
    __typename?: 'games_avg_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "games" */
export declare type GamesAvgOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export declare type GamesBoolExp = {
    _and?: Maybe<Array<Maybe<GamesBoolExp>>>;
    _not?: Maybe<GamesBoolExp>;
    _or?: Maybe<Array<Maybe<GamesBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    card_image?: Maybe<AssetsBoolExp>;
    card_image_background?: Maybe<AssetsBoolExp>;
    card_image_background_id?: Maybe<UuidComparisonExp>;
    card_image_id?: Maybe<UuidComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    frequency?: Maybe<GamesFrequenciesEnumComparisonExp>;
    games_gains?: Maybe<GamesGainsBoolExp>;
    games_played?: Maybe<GamesPlayedBoolExp>;
    gtc?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    instructions?: Maybe<StringComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_private?: Maybe<BooleanComparisonExp>;
    is_test?: Maybe<BooleanComparisonExp>;
    keep_cumulated_probability?: Maybe<BooleanComparisonExp>;
    location?: Maybe<GeographyComparisonExp>;
    max_participations?: Maybe<IntComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    radius?: Maybe<IntComparisonExp>;
    type?: Maybe<GamesTypesBoolExp>;
    type_id?: Maybe<UuidComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
    valorization?: Maybe<GamesValorizationsEnumComparisonExp>;
    with_instant_gains?: Maybe<BooleanComparisonExp>;
    with_magic_random_drawings?: Maybe<BooleanComparisonExp>;
    with_random_drawings?: Maybe<BooleanComparisonExp>;
};
/** unique or primary key constraints on table "games" */
export declare enum GamesConstraint {
    /** unique or primary key constraint */
    GamesPkey = "games_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type GamesDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type GamesDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type GamesDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
};
/** columns and relationships of "games_frequencies" */
export declare type GamesFrequencies = {
    __typename?: 'games_frequencies';
    description: Scalars['String'];
    value: Scalars['String'];
};
/** aggregated selection of "games_frequencies" */
export declare type GamesFrequenciesAggregate = {
    __typename?: 'games_frequencies_aggregate';
    aggregate?: Maybe<GamesFrequenciesAggregateFields>;
    nodes: Array<GamesFrequencies>;
};
/** aggregate fields of "games_frequencies" */
export declare type GamesFrequenciesAggregateFields = {
    __typename?: 'games_frequencies_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesFrequenciesMaxFields>;
    min?: Maybe<GamesFrequenciesMinFields>;
};
/** aggregate fields of "games_frequencies" */
export declare type GamesFrequenciesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesFrequenciesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_frequencies" */
export declare type GamesFrequenciesAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesFrequenciesMaxOrderBy>;
    min?: Maybe<GamesFrequenciesMinOrderBy>;
};
/** input type for inserting array relation for remote table "games_frequencies" */
export declare type GamesFrequenciesArrRelInsertInput = {
    data: Array<GamesFrequenciesInsertInput>;
    on_conflict?: Maybe<GamesFrequenciesOnConflict>;
};
/** Boolean expression to filter rows from the table "games_frequencies". All fields are combined with a logical 'AND'. */
export declare type GamesFrequenciesBoolExp = {
    _and?: Maybe<Array<Maybe<GamesFrequenciesBoolExp>>>;
    _not?: Maybe<GamesFrequenciesBoolExp>;
    _or?: Maybe<Array<Maybe<GamesFrequenciesBoolExp>>>;
    description?: Maybe<StringComparisonExp>;
    value?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "games_frequencies" */
export declare enum GamesFrequenciesConstraint {
    /** unique or primary key constraint */
    GamesFrequenciesPkey = "games_frequencies_pkey"
}
export declare enum GamesFrequenciesEnum {
    /** Daily */
    Daily = "DAILY",
    /** Monthly */
    Monthly = "MONTHLY",
    /** Weekly */
    Weekly = "WEEKLY"
}
/** expression to compare columns of type games_frequencies_enum. All fields are combined with logical 'AND'. */
export declare type GamesFrequenciesEnumComparisonExp = {
    _eq?: Maybe<GamesFrequenciesEnum>;
    _in?: Maybe<Array<GamesFrequenciesEnum>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _neq?: Maybe<GamesFrequenciesEnum>;
    _nin?: Maybe<Array<GamesFrequenciesEnum>>;
};
/** input type for inserting data into table "games_frequencies" */
export declare type GamesFrequenciesInsertInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type GamesFrequenciesMaxFields = {
    __typename?: 'games_frequencies_max_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "games_frequencies" */
export declare type GamesFrequenciesMaxOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesFrequenciesMinFields = {
    __typename?: 'games_frequencies_min_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "games_frequencies" */
export declare type GamesFrequenciesMinOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** response of any mutation on the table "games_frequencies" */
export declare type GamesFrequenciesMutationResponse = {
    __typename?: 'games_frequencies_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GamesFrequencies>;
};
/** input type for inserting object relation for remote table "games_frequencies" */
export declare type GamesFrequenciesObjRelInsertInput = {
    data: GamesFrequenciesInsertInput;
    on_conflict?: Maybe<GamesFrequenciesOnConflict>;
};
/** on conflict condition type for table "games_frequencies" */
export declare type GamesFrequenciesOnConflict = {
    constraint: GamesFrequenciesConstraint;
    update_columns: Array<GamesFrequenciesUpdateColumn>;
    where?: Maybe<GamesFrequenciesBoolExp>;
};
/** ordering options when selecting data from "games_frequencies" */
export declare type GamesFrequenciesOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** primary key columns input for table: "games_frequencies" */
export declare type GamesFrequenciesPkColumnsInput = {
    value: Scalars['String'];
};
/** select columns of table "games_frequencies" */
export declare enum GamesFrequenciesSelectColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** input type for updating data in table "games_frequencies" */
export declare type GamesFrequenciesSetInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** update columns of table "games_frequencies" */
export declare enum GamesFrequenciesUpdateColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** columns and relationships of "games_gains" */
export declare type GamesGains = {
    __typename?: 'games_gains';
    created_at?: Maybe<Scalars['timestamptz']>;
    /** An object relationship */
    gain: Gains;
    gain_id: Scalars['uuid'];
    /** An object relationship */
    game?: Maybe<Games>;
    game_id: Scalars['uuid'];
    is_active: Scalars['Boolean'];
    probability: Scalars['numeric'];
    stock: Scalars['Int'];
    stock_won: Scalars['Int'];
};
/** aggregated selection of "games_gains" */
export declare type GamesGainsAggregate = {
    __typename?: 'games_gains_aggregate';
    aggregate?: Maybe<GamesGainsAggregateFields>;
    nodes: Array<GamesGains>;
};
/** aggregate fields of "games_gains" */
export declare type GamesGainsAggregateFields = {
    __typename?: 'games_gains_aggregate_fields';
    avg?: Maybe<GamesGainsAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesGainsMaxFields>;
    min?: Maybe<GamesGainsMinFields>;
    stddev?: Maybe<GamesGainsStddevFields>;
    stddev_pop?: Maybe<GamesGainsStddevPopFields>;
    stddev_samp?: Maybe<GamesGainsStddevSampFields>;
    sum?: Maybe<GamesGainsSumFields>;
    var_pop?: Maybe<GamesGainsVarPopFields>;
    var_samp?: Maybe<GamesGainsVarSampFields>;
    variance?: Maybe<GamesGainsVarianceFields>;
};
/** aggregate fields of "games_gains" */
export declare type GamesGainsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesGainsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_gains" */
export declare type GamesGainsAggregateOrderBy = {
    avg?: Maybe<GamesGainsAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesGainsMaxOrderBy>;
    min?: Maybe<GamesGainsMinOrderBy>;
    stddev?: Maybe<GamesGainsStddevOrderBy>;
    stddev_pop?: Maybe<GamesGainsStddevPopOrderBy>;
    stddev_samp?: Maybe<GamesGainsStddevSampOrderBy>;
    sum?: Maybe<GamesGainsSumOrderBy>;
    var_pop?: Maybe<GamesGainsVarPopOrderBy>;
    var_samp?: Maybe<GamesGainsVarSampOrderBy>;
    variance?: Maybe<GamesGainsVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "games_gains" */
export declare type GamesGainsArrRelInsertInput = {
    data: Array<GamesGainsInsertInput>;
    on_conflict?: Maybe<GamesGainsOnConflict>;
};
/** columns and relationships of "games_gains_available" */
export declare type GamesGainsAvailable = {
    __typename?: 'games_gains_available';
    created_at?: Maybe<Scalars['timestamptz']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_gain_active?: Maybe<Scalars['Boolean']>;
    probability?: Maybe<Scalars['numeric']>;
    stock?: Maybe<Scalars['Int']>;
    stock_won?: Maybe<Scalars['Int']>;
};
/** aggregated selection of "games_gains_available" */
export declare type GamesGainsAvailableAggregate = {
    __typename?: 'games_gains_available_aggregate';
    aggregate?: Maybe<GamesGainsAvailableAggregateFields>;
    nodes: Array<GamesGainsAvailable>;
};
/** aggregate fields of "games_gains_available" */
export declare type GamesGainsAvailableAggregateFields = {
    __typename?: 'games_gains_available_aggregate_fields';
    avg?: Maybe<GamesGainsAvailableAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesGainsAvailableMaxFields>;
    min?: Maybe<GamesGainsAvailableMinFields>;
    stddev?: Maybe<GamesGainsAvailableStddevFields>;
    stddev_pop?: Maybe<GamesGainsAvailableStddevPopFields>;
    stddev_samp?: Maybe<GamesGainsAvailableStddevSampFields>;
    sum?: Maybe<GamesGainsAvailableSumFields>;
    var_pop?: Maybe<GamesGainsAvailableVarPopFields>;
    var_samp?: Maybe<GamesGainsAvailableVarSampFields>;
    variance?: Maybe<GamesGainsAvailableVarianceFields>;
};
/** aggregate fields of "games_gains_available" */
export declare type GamesGainsAvailableAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_gains_available" */
export declare type GamesGainsAvailableAggregateOrderBy = {
    avg?: Maybe<GamesGainsAvailableAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesGainsAvailableMaxOrderBy>;
    min?: Maybe<GamesGainsAvailableMinOrderBy>;
    stddev?: Maybe<GamesGainsAvailableStddevOrderBy>;
    stddev_pop?: Maybe<GamesGainsAvailableStddevPopOrderBy>;
    stddev_samp?: Maybe<GamesGainsAvailableStddevSampOrderBy>;
    sum?: Maybe<GamesGainsAvailableSumOrderBy>;
    var_pop?: Maybe<GamesGainsAvailableVarPopOrderBy>;
    var_samp?: Maybe<GamesGainsAvailableVarSampOrderBy>;
    variance?: Maybe<GamesGainsAvailableVarianceOrderBy>;
};
/** aggregate avg on columns */
export declare type GamesGainsAvailableAvgFields = {
    __typename?: 'games_gains_available_avg_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "games_gains_available" */
export declare type GamesGainsAvailableAvgOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "games_gains_available". All fields are combined with a logical 'AND'. */
export declare type GamesGainsAvailableBoolExp = {
    _and?: Maybe<Array<Maybe<GamesGainsAvailableBoolExp>>>;
    _not?: Maybe<GamesGainsAvailableBoolExp>;
    _or?: Maybe<Array<Maybe<GamesGainsAvailableBoolExp>>>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    gain_id?: Maybe<UuidComparisonExp>;
    game_id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_gain_active?: Maybe<BooleanComparisonExp>;
    probability?: Maybe<NumericComparisonExp>;
    stock?: Maybe<IntComparisonExp>;
    stock_won?: Maybe<IntComparisonExp>;
};
/** aggregate max on columns */
export declare type GamesGainsAvailableMaxFields = {
    __typename?: 'games_gains_available_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    probability?: Maybe<Scalars['numeric']>;
    stock?: Maybe<Scalars['Int']>;
    stock_won?: Maybe<Scalars['Int']>;
};
/** order by max() on columns of table "games_gains_available" */
export declare type GamesGainsAvailableMaxOrderBy = {
    created_at?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesGainsAvailableMinFields = {
    __typename?: 'games_gains_available_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    probability?: Maybe<Scalars['numeric']>;
    stock?: Maybe<Scalars['Int']>;
    stock_won?: Maybe<Scalars['Int']>;
};
/** order by min() on columns of table "games_gains_available" */
export declare type GamesGainsAvailableMinOrderBy = {
    created_at?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** ordering options when selecting data from "games_gains_available" */
export declare type GamesGainsAvailableOrderBy = {
    created_at?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_gain_active?: Maybe<OrderBy>;
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** select columns of table "games_gains_available" */
export declare enum GamesGainsAvailableSelectColumn {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    GainId = "gain_id",
    /** column name */
    GameId = "game_id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsGainActive = "is_gain_active",
    /** column name */
    Probability = "probability",
    /** column name */
    Stock = "stock",
    /** column name */
    StockWon = "stock_won"
}
/** aggregate stddev on columns */
export declare type GamesGainsAvailableStddevFields = {
    __typename?: 'games_gains_available_stddev_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "games_gains_available" */
export declare type GamesGainsAvailableStddevOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GamesGainsAvailableStddevPopFields = {
    __typename?: 'games_gains_available_stddev_pop_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "games_gains_available" */
export declare type GamesGainsAvailableStddevPopOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GamesGainsAvailableStddevSampFields = {
    __typename?: 'games_gains_available_stddev_samp_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "games_gains_available" */
export declare type GamesGainsAvailableStddevSampOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GamesGainsAvailableSumFields = {
    __typename?: 'games_gains_available_sum_fields';
    probability?: Maybe<Scalars['numeric']>;
    stock?: Maybe<Scalars['Int']>;
    stock_won?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "games_gains_available" */
export declare type GamesGainsAvailableSumOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate var_pop on columns */
export declare type GamesGainsAvailableVarPopFields = {
    __typename?: 'games_gains_available_var_pop_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "games_gains_available" */
export declare type GamesGainsAvailableVarPopOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GamesGainsAvailableVarSampFields = {
    __typename?: 'games_gains_available_var_samp_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "games_gains_available" */
export declare type GamesGainsAvailableVarSampOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GamesGainsAvailableVarianceFields = {
    __typename?: 'games_gains_available_variance_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "games_gains_available" */
export declare type GamesGainsAvailableVarianceOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate avg on columns */
export declare type GamesGainsAvgFields = {
    __typename?: 'games_gains_avg_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "games_gains" */
export declare type GamesGainsAvgOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "games_gains". All fields are combined with a logical 'AND'. */
export declare type GamesGainsBoolExp = {
    _and?: Maybe<Array<Maybe<GamesGainsBoolExp>>>;
    _not?: Maybe<GamesGainsBoolExp>;
    _or?: Maybe<Array<Maybe<GamesGainsBoolExp>>>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    gain?: Maybe<GainsBoolExp>;
    gain_id?: Maybe<UuidComparisonExp>;
    game?: Maybe<GamesBoolExp>;
    game_id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    probability?: Maybe<NumericComparisonExp>;
    stock?: Maybe<IntComparisonExp>;
    stock_won?: Maybe<IntComparisonExp>;
};
/** unique or primary key constraints on table "games_gains" */
export declare enum GamesGainsConstraint {
    /** unique or primary key constraint */
    GamesGainsPkey = "games_gains_pkey"
}
/** input type for incrementing integer column in table "games_gains" */
export declare type GamesGainsIncInput = {
    probability?: Maybe<Scalars['numeric']>;
    stock?: Maybe<Scalars['Int']>;
    stock_won?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "games_gains" */
export declare type GamesGainsInsertInput = {
    created_at?: Maybe<Scalars['timestamptz']>;
    gain?: Maybe<GainsObjRelInsertInput>;
    gain_id?: Maybe<Scalars['uuid']>;
    game?: Maybe<GamesObjRelInsertInput>;
    game_id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    probability?: Maybe<Scalars['numeric']>;
    stock?: Maybe<Scalars['Int']>;
    stock_won?: Maybe<Scalars['Int']>;
};
/** aggregate max on columns */
export declare type GamesGainsMaxFields = {
    __typename?: 'games_gains_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    probability?: Maybe<Scalars['numeric']>;
    stock?: Maybe<Scalars['Int']>;
    stock_won?: Maybe<Scalars['Int']>;
};
/** order by max() on columns of table "games_gains" */
export declare type GamesGainsMaxOrderBy = {
    created_at?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesGainsMinFields = {
    __typename?: 'games_gains_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    probability?: Maybe<Scalars['numeric']>;
    stock?: Maybe<Scalars['Int']>;
    stock_won?: Maybe<Scalars['Int']>;
};
/** order by min() on columns of table "games_gains" */
export declare type GamesGainsMinOrderBy = {
    created_at?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** response of any mutation on the table "games_gains" */
export declare type GamesGainsMutationResponse = {
    __typename?: 'games_gains_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GamesGains>;
};
/** input type for inserting object relation for remote table "games_gains" */
export declare type GamesGainsObjRelInsertInput = {
    data: GamesGainsInsertInput;
    on_conflict?: Maybe<GamesGainsOnConflict>;
};
/** on conflict condition type for table "games_gains" */
export declare type GamesGainsOnConflict = {
    constraint: GamesGainsConstraint;
    update_columns: Array<GamesGainsUpdateColumn>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** ordering options when selecting data from "games_gains" */
export declare type GamesGainsOrderBy = {
    created_at?: Maybe<OrderBy>;
    gain?: Maybe<GainsOrderBy>;
    gain_id?: Maybe<OrderBy>;
    game?: Maybe<GamesOrderBy>;
    game_id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** primary key columns input for table: "games_gains" */
export declare type GamesGainsPkColumnsInput = {
    gain_id: Scalars['uuid'];
    game_id: Scalars['uuid'];
};
/** select columns of table "games_gains" */
export declare enum GamesGainsSelectColumn {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    GainId = "gain_id",
    /** column name */
    GameId = "game_id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    Probability = "probability",
    /** column name */
    Stock = "stock",
    /** column name */
    StockWon = "stock_won"
}
/** input type for updating data in table "games_gains" */
export declare type GamesGainsSetInput = {
    created_at?: Maybe<Scalars['timestamptz']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    probability?: Maybe<Scalars['numeric']>;
    stock?: Maybe<Scalars['Int']>;
    stock_won?: Maybe<Scalars['Int']>;
};
/** aggregate stddev on columns */
export declare type GamesGainsStddevFields = {
    __typename?: 'games_gains_stddev_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "games_gains" */
export declare type GamesGainsStddevOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GamesGainsStddevPopFields = {
    __typename?: 'games_gains_stddev_pop_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "games_gains" */
export declare type GamesGainsStddevPopOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GamesGainsStddevSampFields = {
    __typename?: 'games_gains_stddev_samp_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "games_gains" */
export declare type GamesGainsStddevSampOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GamesGainsSumFields = {
    __typename?: 'games_gains_sum_fields';
    probability?: Maybe<Scalars['numeric']>;
    stock?: Maybe<Scalars['Int']>;
    stock_won?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "games_gains" */
export declare type GamesGainsSumOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** update columns of table "games_gains" */
export declare enum GamesGainsUpdateColumn {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    GainId = "gain_id",
    /** column name */
    GameId = "game_id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    Probability = "probability",
    /** column name */
    Stock = "stock",
    /** column name */
    StockWon = "stock_won"
}
/** aggregate var_pop on columns */
export declare type GamesGainsVarPopFields = {
    __typename?: 'games_gains_var_pop_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "games_gains" */
export declare type GamesGainsVarPopOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GamesGainsVarSampFields = {
    __typename?: 'games_gains_var_samp_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "games_gains" */
export declare type GamesGainsVarSampOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GamesGainsVarianceFields = {
    __typename?: 'games_gains_variance_fields';
    probability?: Maybe<Scalars['Float']>;
    stock?: Maybe<Scalars['Float']>;
    stock_won?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "games_gains" */
export declare type GamesGainsVarianceOrderBy = {
    probability?: Maybe<OrderBy>;
    stock?: Maybe<OrderBy>;
    stock_won?: Maybe<OrderBy>;
};
/** input type for incrementing integer column in table "games" */
export declare type GamesIncInput = {
    max_participations?: Maybe<Scalars['Int']>;
    radius?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "games" */
export declare type GamesInsertInput = {
    address?: Maybe<Scalars['String']>;
    card_image?: Maybe<AssetsObjRelInsertInput>;
    card_image_background?: Maybe<AssetsObjRelInsertInput>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    games_gains?: Maybe<GamesGainsArrRelInsertInput>;
    games_played?: Maybe<GamesPlayedArrRelInsertInput>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    keep_cumulated_probability?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type?: Maybe<GamesTypesObjRelInsertInput>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    with_instant_gains?: Maybe<Scalars['Boolean']>;
    with_magic_random_drawings?: Maybe<Scalars['Boolean']>;
    with_random_drawings?: Maybe<Scalars['Boolean']>;
};
/** aggregate max on columns */
export declare type GamesMaxFields = {
    __typename?: 'games_max_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "games" */
export declare type GamesMaxOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesMinFields = {
    __typename?: 'games_min_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "games" */
export declare type GamesMinOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** response of any mutation on the table "games" */
export declare type GamesMutationResponse = {
    __typename?: 'games_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Games>;
};
/** input type for inserting object relation for remote table "games" */
export declare type GamesObjRelInsertInput = {
    data: GamesInsertInput;
    on_conflict?: Maybe<GamesOnConflict>;
};
/** on conflict condition type for table "games" */
export declare type GamesOnConflict = {
    constraint: GamesConstraint;
    update_columns: Array<GamesUpdateColumn>;
    where?: Maybe<GamesBoolExp>;
};
/** ordering options when selecting data from "games" */
export declare type GamesOrderBy = {
    address?: Maybe<OrderBy>;
    card_image?: Maybe<AssetsOrderBy>;
    card_image_background?: Maybe<AssetsOrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    frequency?: Maybe<OrderBy>;
    games_gains_aggregate?: Maybe<GamesGainsAggregateOrderBy>;
    games_played_aggregate?: Maybe<GamesPlayedAggregateOrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_private?: Maybe<OrderBy>;
    is_test?: Maybe<OrderBy>;
    keep_cumulated_probability?: Maybe<OrderBy>;
    location?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type?: Maybe<GamesTypesOrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
    valorization?: Maybe<OrderBy>;
    with_instant_gains?: Maybe<OrderBy>;
    with_magic_random_drawings?: Maybe<OrderBy>;
    with_random_drawings?: Maybe<OrderBy>;
};
/** primary key columns input for table: "games" */
export declare type GamesPkColumnsInput = {
    id: Scalars['uuid'];
};
/** columns and relationships of "games_played" */
export declare type GamesPlayed = {
    __typename?: 'games_played';
    /** An object relationship */
    gain?: Maybe<Gains>;
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated: Scalars['Boolean'];
    /** An object relationship */
    game?: Maybe<Games>;
    game_id: Scalars['uuid'];
    id: Scalars['bigint'];
    played_at: Scalars['timestamptz'];
    /** An object relationship */
    user: Users;
    user_id: Scalars['uuid'];
};
/** aggregated selection of "games_played" */
export declare type GamesPlayedAggregate = {
    __typename?: 'games_played_aggregate';
    aggregate?: Maybe<GamesPlayedAggregateFields>;
    nodes: Array<GamesPlayed>;
};
/** aggregate fields of "games_played" */
export declare type GamesPlayedAggregateFields = {
    __typename?: 'games_played_aggregate_fields';
    avg?: Maybe<GamesPlayedAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesPlayedMaxFields>;
    min?: Maybe<GamesPlayedMinFields>;
    stddev?: Maybe<GamesPlayedStddevFields>;
    stddev_pop?: Maybe<GamesPlayedStddevPopFields>;
    stddev_samp?: Maybe<GamesPlayedStddevSampFields>;
    sum?: Maybe<GamesPlayedSumFields>;
    var_pop?: Maybe<GamesPlayedVarPopFields>;
    var_samp?: Maybe<GamesPlayedVarSampFields>;
    variance?: Maybe<GamesPlayedVarianceFields>;
};
/** aggregate fields of "games_played" */
export declare type GamesPlayedAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesPlayedSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_played" */
export declare type GamesPlayedAggregateOrderBy = {
    avg?: Maybe<GamesPlayedAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesPlayedMaxOrderBy>;
    min?: Maybe<GamesPlayedMinOrderBy>;
    stddev?: Maybe<GamesPlayedStddevOrderBy>;
    stddev_pop?: Maybe<GamesPlayedStddevPopOrderBy>;
    stddev_samp?: Maybe<GamesPlayedStddevSampOrderBy>;
    sum?: Maybe<GamesPlayedSumOrderBy>;
    var_pop?: Maybe<GamesPlayedVarPopOrderBy>;
    var_samp?: Maybe<GamesPlayedVarSampOrderBy>;
    variance?: Maybe<GamesPlayedVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "games_played" */
export declare type GamesPlayedArrRelInsertInput = {
    data: Array<GamesPlayedInsertInput>;
    on_conflict?: Maybe<GamesPlayedOnConflict>;
};
/** aggregate avg on columns */
export declare type GamesPlayedAvgFields = {
    __typename?: 'games_played_avg_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "games_played" */
export declare type GamesPlayedAvgOrderBy = {
    id?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "games_played". All fields are combined with a logical 'AND'. */
export declare type GamesPlayedBoolExp = {
    _and?: Maybe<Array<Maybe<GamesPlayedBoolExp>>>;
    _not?: Maybe<GamesPlayedBoolExp>;
    _or?: Maybe<Array<Maybe<GamesPlayedBoolExp>>>;
    gain?: Maybe<GainsBoolExp>;
    gain_id?: Maybe<UuidComparisonExp>;
    gain_validated?: Maybe<BooleanComparisonExp>;
    game?: Maybe<GamesBoolExp>;
    game_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<BigintComparisonExp>;
    played_at?: Maybe<TimestamptzComparisonExp>;
    user?: Maybe<UsersBoolExp>;
    user_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "games_played" */
export declare enum GamesPlayedConstraint {
    /** unique or primary key constraint */
    GamesPlayedPkey = "games_played_pkey"
}
/** columns and relationships of "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHours = {
    __typename?: 'games_played_gains_by_current_day_hours';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['float8']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** aggregated selection of "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursAggregate = {
    __typename?: 'games_played_gains_by_current_day_hours_aggregate';
    aggregate?: Maybe<GamesPlayedGainsByCurrentDayHoursAggregateFields>;
    nodes: Array<GamesPlayedGainsByCurrentDayHours>;
};
/** aggregate fields of "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursAggregateFields = {
    __typename?: 'games_played_gains_by_current_day_hours_aggregate_fields';
    avg?: Maybe<GamesPlayedGainsByCurrentDayHoursAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesPlayedGainsByCurrentDayHoursMaxFields>;
    min?: Maybe<GamesPlayedGainsByCurrentDayHoursMinFields>;
    stddev?: Maybe<GamesPlayedGainsByCurrentDayHoursStddevFields>;
    stddev_pop?: Maybe<GamesPlayedGainsByCurrentDayHoursStddevPopFields>;
    stddev_samp?: Maybe<GamesPlayedGainsByCurrentDayHoursStddevSampFields>;
    sum?: Maybe<GamesPlayedGainsByCurrentDayHoursSumFields>;
    var_pop?: Maybe<GamesPlayedGainsByCurrentDayHoursVarPopFields>;
    var_samp?: Maybe<GamesPlayedGainsByCurrentDayHoursVarSampFields>;
    variance?: Maybe<GamesPlayedGainsByCurrentDayHoursVarianceFields>;
};
/** aggregate fields of "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesPlayedGainsByCurrentDayHoursSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursAggregateOrderBy = {
    avg?: Maybe<GamesPlayedGainsByCurrentDayHoursAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesPlayedGainsByCurrentDayHoursMaxOrderBy>;
    min?: Maybe<GamesPlayedGainsByCurrentDayHoursMinOrderBy>;
    stddev?: Maybe<GamesPlayedGainsByCurrentDayHoursStddevOrderBy>;
    stddev_pop?: Maybe<GamesPlayedGainsByCurrentDayHoursStddevPopOrderBy>;
    stddev_samp?: Maybe<GamesPlayedGainsByCurrentDayHoursStddevSampOrderBy>;
    sum?: Maybe<GamesPlayedGainsByCurrentDayHoursSumOrderBy>;
    var_pop?: Maybe<GamesPlayedGainsByCurrentDayHoursVarPopOrderBy>;
    var_samp?: Maybe<GamesPlayedGainsByCurrentDayHoursVarSampOrderBy>;
    variance?: Maybe<GamesPlayedGainsByCurrentDayHoursVarianceOrderBy>;
};
/** aggregate avg on columns */
export declare type GamesPlayedGainsByCurrentDayHoursAvgFields = {
    __typename?: 'games_played_gains_by_current_day_hours_avg_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursAvgOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "games_played_gains_by_current_day_hours". All fields are combined with a logical 'AND'. */
export declare type GamesPlayedGainsByCurrentDayHoursBoolExp = {
    _and?: Maybe<Array<Maybe<GamesPlayedGainsByCurrentDayHoursBoolExp>>>;
    _not?: Maybe<GamesPlayedGainsByCurrentDayHoursBoolExp>;
    _or?: Maybe<Array<Maybe<GamesPlayedGainsByCurrentDayHoursBoolExp>>>;
    client_id?: Maybe<UuidComparisonExp>;
    date?: Maybe<Float8ComparisonExp>;
    gain_id?: Maybe<UuidComparisonExp>;
    game_id?: Maybe<UuidComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    total_count?: Maybe<BigintComparisonExp>;
};
/** aggregate max on columns */
export declare type GamesPlayedGainsByCurrentDayHoursMaxFields = {
    __typename?: 'games_played_gains_by_current_day_hours_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['float8']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by max() on columns of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesPlayedGainsByCurrentDayHoursMinFields = {
    __typename?: 'games_played_gains_by_current_day_hours_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['float8']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by min() on columns of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** ordering options when selecting data from "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** select columns of table "games_played_gains_by_current_day_hours" */
export declare enum GamesPlayedGainsByCurrentDayHoursSelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    Date = "date",
    /** column name */
    GainId = "gain_id",
    /** column name */
    GameId = "game_id",
    /** column name */
    Name = "name",
    /** column name */
    TotalCount = "total_count"
}
/** aggregate stddev on columns */
export declare type GamesPlayedGainsByCurrentDayHoursStddevFields = {
    __typename?: 'games_played_gains_by_current_day_hours_stddev_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursStddevOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GamesPlayedGainsByCurrentDayHoursStddevPopFields = {
    __typename?: 'games_played_gains_by_current_day_hours_stddev_pop_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursStddevPopOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GamesPlayedGainsByCurrentDayHoursStddevSampFields = {
    __typename?: 'games_played_gains_by_current_day_hours_stddev_samp_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursStddevSampOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GamesPlayedGainsByCurrentDayHoursSumFields = {
    __typename?: 'games_played_gains_by_current_day_hours_sum_fields';
    date?: Maybe<Scalars['float8']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by sum() on columns of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursSumOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate var_pop on columns */
export declare type GamesPlayedGainsByCurrentDayHoursVarPopFields = {
    __typename?: 'games_played_gains_by_current_day_hours_var_pop_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursVarPopOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GamesPlayedGainsByCurrentDayHoursVarSampFields = {
    __typename?: 'games_played_gains_by_current_day_hours_var_samp_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursVarSampOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GamesPlayedGainsByCurrentDayHoursVarianceFields = {
    __typename?: 'games_played_gains_by_current_day_hours_variance_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "games_played_gains_by_current_day_hours" */
export declare type GamesPlayedGainsByCurrentDayHoursVarianceOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** columns and relationships of "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDay = {
    __typename?: 'games_played_gains_by_day';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['date']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** aggregated selection of "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayAggregate = {
    __typename?: 'games_played_gains_by_day_aggregate';
    aggregate?: Maybe<GamesPlayedGainsByDayAggregateFields>;
    nodes: Array<GamesPlayedGainsByDay>;
};
/** aggregate fields of "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayAggregateFields = {
    __typename?: 'games_played_gains_by_day_aggregate_fields';
    avg?: Maybe<GamesPlayedGainsByDayAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesPlayedGainsByDayMaxFields>;
    min?: Maybe<GamesPlayedGainsByDayMinFields>;
    stddev?: Maybe<GamesPlayedGainsByDayStddevFields>;
    stddev_pop?: Maybe<GamesPlayedGainsByDayStddevPopFields>;
    stddev_samp?: Maybe<GamesPlayedGainsByDayStddevSampFields>;
    sum?: Maybe<GamesPlayedGainsByDaySumFields>;
    var_pop?: Maybe<GamesPlayedGainsByDayVarPopFields>;
    var_samp?: Maybe<GamesPlayedGainsByDayVarSampFields>;
    variance?: Maybe<GamesPlayedGainsByDayVarianceFields>;
};
/** aggregate fields of "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesPlayedGainsByDaySelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayAggregateOrderBy = {
    avg?: Maybe<GamesPlayedGainsByDayAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesPlayedGainsByDayMaxOrderBy>;
    min?: Maybe<GamesPlayedGainsByDayMinOrderBy>;
    stddev?: Maybe<GamesPlayedGainsByDayStddevOrderBy>;
    stddev_pop?: Maybe<GamesPlayedGainsByDayStddevPopOrderBy>;
    stddev_samp?: Maybe<GamesPlayedGainsByDayStddevSampOrderBy>;
    sum?: Maybe<GamesPlayedGainsByDaySumOrderBy>;
    var_pop?: Maybe<GamesPlayedGainsByDayVarPopOrderBy>;
    var_samp?: Maybe<GamesPlayedGainsByDayVarSampOrderBy>;
    variance?: Maybe<GamesPlayedGainsByDayVarianceOrderBy>;
};
/** aggregate avg on columns */
export declare type GamesPlayedGainsByDayAvgFields = {
    __typename?: 'games_played_gains_by_day_avg_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayAvgOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "games_played_gains_by_day". All fields are combined with a logical 'AND'. */
export declare type GamesPlayedGainsByDayBoolExp = {
    _and?: Maybe<Array<Maybe<GamesPlayedGainsByDayBoolExp>>>;
    _not?: Maybe<GamesPlayedGainsByDayBoolExp>;
    _or?: Maybe<Array<Maybe<GamesPlayedGainsByDayBoolExp>>>;
    client_id?: Maybe<UuidComparisonExp>;
    date?: Maybe<DateComparisonExp>;
    gain_id?: Maybe<UuidComparisonExp>;
    game_id?: Maybe<UuidComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    total_count?: Maybe<BigintComparisonExp>;
};
/** aggregate max on columns */
export declare type GamesPlayedGainsByDayMaxFields = {
    __typename?: 'games_played_gains_by_day_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['date']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by max() on columns of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesPlayedGainsByDayMinFields = {
    __typename?: 'games_played_gains_by_day_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['date']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by min() on columns of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** ordering options when selecting data from "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** select columns of table "games_played_gains_by_day" */
export declare enum GamesPlayedGainsByDaySelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    Date = "date",
    /** column name */
    GainId = "gain_id",
    /** column name */
    GameId = "game_id",
    /** column name */
    Name = "name",
    /** column name */
    TotalCount = "total_count"
}
/** aggregate stddev on columns */
export declare type GamesPlayedGainsByDayStddevFields = {
    __typename?: 'games_played_gains_by_day_stddev_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayStddevOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GamesPlayedGainsByDayStddevPopFields = {
    __typename?: 'games_played_gains_by_day_stddev_pop_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayStddevPopOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GamesPlayedGainsByDayStddevSampFields = {
    __typename?: 'games_played_gains_by_day_stddev_samp_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayStddevSampOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GamesPlayedGainsByDaySumFields = {
    __typename?: 'games_played_gains_by_day_sum_fields';
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by sum() on columns of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDaySumOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate var_pop on columns */
export declare type GamesPlayedGainsByDayVarPopFields = {
    __typename?: 'games_played_gains_by_day_var_pop_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayVarPopOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GamesPlayedGainsByDayVarSampFields = {
    __typename?: 'games_played_gains_by_day_var_samp_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayVarSampOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GamesPlayedGainsByDayVarianceFields = {
    __typename?: 'games_played_gains_by_day_variance_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "games_played_gains_by_day" */
export declare type GamesPlayedGainsByDayVarianceOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** input type for incrementing integer column in table "games_played" */
export declare type GamesPlayedIncInput = {
    id?: Maybe<Scalars['bigint']>;
};
/** input type for inserting data into table "games_played" */
export declare type GamesPlayedInsertInput = {
    gain?: Maybe<GainsObjRelInsertInput>;
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated?: Maybe<Scalars['Boolean']>;
    game?: Maybe<GamesObjRelInsertInput>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user?: Maybe<UsersObjRelInsertInput>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type GamesPlayedMaxFields = {
    __typename?: 'games_played_max_fields';
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "games_played" */
export declare type GamesPlayedMaxOrderBy = {
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesPlayedMinFields = {
    __typename?: 'games_played_min_fields';
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "games_played" */
export declare type GamesPlayedMinOrderBy = {
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "games_played" */
export declare type GamesPlayedMutationResponse = {
    __typename?: 'games_played_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GamesPlayed>;
};
/** input type for inserting object relation for remote table "games_played" */
export declare type GamesPlayedObjRelInsertInput = {
    data: GamesPlayedInsertInput;
    on_conflict?: Maybe<GamesPlayedOnConflict>;
};
/** on conflict condition type for table "games_played" */
export declare type GamesPlayedOnConflict = {
    constraint: GamesPlayedConstraint;
    update_columns: Array<GamesPlayedUpdateColumn>;
    where?: Maybe<GamesPlayedBoolExp>;
};
/** ordering options when selecting data from "games_played" */
export declare type GamesPlayedOrderBy = {
    gain?: Maybe<GainsOrderBy>;
    gain_id?: Maybe<OrderBy>;
    gain_validated?: Maybe<OrderBy>;
    game?: Maybe<GamesOrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user?: Maybe<UsersOrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** columns and relationships of "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHours = {
    __typename?: 'games_played_participations_by_current_day_hours';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['float8']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** aggregated selection of "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursAggregate = {
    __typename?: 'games_played_participations_by_current_day_hours_aggregate';
    aggregate?: Maybe<GamesPlayedParticipationsByCurrentDayHoursAggregateFields>;
    nodes: Array<GamesPlayedParticipationsByCurrentDayHours>;
};
/** aggregate fields of "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursAggregateFields = {
    __typename?: 'games_played_participations_by_current_day_hours_aggregate_fields';
    avg?: Maybe<GamesPlayedParticipationsByCurrentDayHoursAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesPlayedParticipationsByCurrentDayHoursMaxFields>;
    min?: Maybe<GamesPlayedParticipationsByCurrentDayHoursMinFields>;
    stddev?: Maybe<GamesPlayedParticipationsByCurrentDayHoursStddevFields>;
    stddev_pop?: Maybe<GamesPlayedParticipationsByCurrentDayHoursStddevPopFields>;
    stddev_samp?: Maybe<GamesPlayedParticipationsByCurrentDayHoursStddevSampFields>;
    sum?: Maybe<GamesPlayedParticipationsByCurrentDayHoursSumFields>;
    var_pop?: Maybe<GamesPlayedParticipationsByCurrentDayHoursVarPopFields>;
    var_samp?: Maybe<GamesPlayedParticipationsByCurrentDayHoursVarSampFields>;
    variance?: Maybe<GamesPlayedParticipationsByCurrentDayHoursVarianceFields>;
};
/** aggregate fields of "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesPlayedParticipationsByCurrentDayHoursSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursAggregateOrderBy = {
    avg?: Maybe<GamesPlayedParticipationsByCurrentDayHoursAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesPlayedParticipationsByCurrentDayHoursMaxOrderBy>;
    min?: Maybe<GamesPlayedParticipationsByCurrentDayHoursMinOrderBy>;
    stddev?: Maybe<GamesPlayedParticipationsByCurrentDayHoursStddevOrderBy>;
    stddev_pop?: Maybe<GamesPlayedParticipationsByCurrentDayHoursStddevPopOrderBy>;
    stddev_samp?: Maybe<GamesPlayedParticipationsByCurrentDayHoursStddevSampOrderBy>;
    sum?: Maybe<GamesPlayedParticipationsByCurrentDayHoursSumOrderBy>;
    var_pop?: Maybe<GamesPlayedParticipationsByCurrentDayHoursVarPopOrderBy>;
    var_samp?: Maybe<GamesPlayedParticipationsByCurrentDayHoursVarSampOrderBy>;
    variance?: Maybe<GamesPlayedParticipationsByCurrentDayHoursVarianceOrderBy>;
};
/** aggregate avg on columns */
export declare type GamesPlayedParticipationsByCurrentDayHoursAvgFields = {
    __typename?: 'games_played_participations_by_current_day_hours_avg_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursAvgOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "games_played_participations_by_current_day_hours". All fields are combined with a logical 'AND'. */
export declare type GamesPlayedParticipationsByCurrentDayHoursBoolExp = {
    _and?: Maybe<Array<Maybe<GamesPlayedParticipationsByCurrentDayHoursBoolExp>>>;
    _not?: Maybe<GamesPlayedParticipationsByCurrentDayHoursBoolExp>;
    _or?: Maybe<Array<Maybe<GamesPlayedParticipationsByCurrentDayHoursBoolExp>>>;
    client_id?: Maybe<UuidComparisonExp>;
    date?: Maybe<Float8ComparisonExp>;
    game_id?: Maybe<UuidComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    total_count?: Maybe<BigintComparisonExp>;
};
/** aggregate max on columns */
export declare type GamesPlayedParticipationsByCurrentDayHoursMaxFields = {
    __typename?: 'games_played_participations_by_current_day_hours_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['float8']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by max() on columns of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesPlayedParticipationsByCurrentDayHoursMinFields = {
    __typename?: 'games_played_participations_by_current_day_hours_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['float8']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by min() on columns of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** ordering options when selecting data from "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** select columns of table "games_played_participations_by_current_day_hours" */
export declare enum GamesPlayedParticipationsByCurrentDayHoursSelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    Date = "date",
    /** column name */
    GameId = "game_id",
    /** column name */
    Name = "name",
    /** column name */
    TotalCount = "total_count"
}
/** aggregate stddev on columns */
export declare type GamesPlayedParticipationsByCurrentDayHoursStddevFields = {
    __typename?: 'games_played_participations_by_current_day_hours_stddev_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursStddevOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GamesPlayedParticipationsByCurrentDayHoursStddevPopFields = {
    __typename?: 'games_played_participations_by_current_day_hours_stddev_pop_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursStddevPopOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GamesPlayedParticipationsByCurrentDayHoursStddevSampFields = {
    __typename?: 'games_played_participations_by_current_day_hours_stddev_samp_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursStddevSampOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GamesPlayedParticipationsByCurrentDayHoursSumFields = {
    __typename?: 'games_played_participations_by_current_day_hours_sum_fields';
    date?: Maybe<Scalars['float8']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by sum() on columns of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursSumOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate var_pop on columns */
export declare type GamesPlayedParticipationsByCurrentDayHoursVarPopFields = {
    __typename?: 'games_played_participations_by_current_day_hours_var_pop_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursVarPopOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GamesPlayedParticipationsByCurrentDayHoursVarSampFields = {
    __typename?: 'games_played_participations_by_current_day_hours_var_samp_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursVarSampOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GamesPlayedParticipationsByCurrentDayHoursVarianceFields = {
    __typename?: 'games_played_participations_by_current_day_hours_variance_fields';
    date?: Maybe<Scalars['Float']>;
    total_count?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "games_played_participations_by_current_day_hours" */
export declare type GamesPlayedParticipationsByCurrentDayHoursVarianceOrderBy = {
    date?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** columns and relationships of "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDay = {
    __typename?: 'games_played_participations_by_day';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['date']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** aggregated selection of "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayAggregate = {
    __typename?: 'games_played_participations_by_day_aggregate';
    aggregate?: Maybe<GamesPlayedParticipationsByDayAggregateFields>;
    nodes: Array<GamesPlayedParticipationsByDay>;
};
/** aggregate fields of "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayAggregateFields = {
    __typename?: 'games_played_participations_by_day_aggregate_fields';
    avg?: Maybe<GamesPlayedParticipationsByDayAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesPlayedParticipationsByDayMaxFields>;
    min?: Maybe<GamesPlayedParticipationsByDayMinFields>;
    stddev?: Maybe<GamesPlayedParticipationsByDayStddevFields>;
    stddev_pop?: Maybe<GamesPlayedParticipationsByDayStddevPopFields>;
    stddev_samp?: Maybe<GamesPlayedParticipationsByDayStddevSampFields>;
    sum?: Maybe<GamesPlayedParticipationsByDaySumFields>;
    var_pop?: Maybe<GamesPlayedParticipationsByDayVarPopFields>;
    var_samp?: Maybe<GamesPlayedParticipationsByDayVarSampFields>;
    variance?: Maybe<GamesPlayedParticipationsByDayVarianceFields>;
};
/** aggregate fields of "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesPlayedParticipationsByDaySelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayAggregateOrderBy = {
    avg?: Maybe<GamesPlayedParticipationsByDayAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesPlayedParticipationsByDayMaxOrderBy>;
    min?: Maybe<GamesPlayedParticipationsByDayMinOrderBy>;
    stddev?: Maybe<GamesPlayedParticipationsByDayStddevOrderBy>;
    stddev_pop?: Maybe<GamesPlayedParticipationsByDayStddevPopOrderBy>;
    stddev_samp?: Maybe<GamesPlayedParticipationsByDayStddevSampOrderBy>;
    sum?: Maybe<GamesPlayedParticipationsByDaySumOrderBy>;
    var_pop?: Maybe<GamesPlayedParticipationsByDayVarPopOrderBy>;
    var_samp?: Maybe<GamesPlayedParticipationsByDayVarSampOrderBy>;
    variance?: Maybe<GamesPlayedParticipationsByDayVarianceOrderBy>;
};
/** aggregate avg on columns */
export declare type GamesPlayedParticipationsByDayAvgFields = {
    __typename?: 'games_played_participations_by_day_avg_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayAvgOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "games_played_participations_by_day". All fields are combined with a logical 'AND'. */
export declare type GamesPlayedParticipationsByDayBoolExp = {
    _and?: Maybe<Array<Maybe<GamesPlayedParticipationsByDayBoolExp>>>;
    _not?: Maybe<GamesPlayedParticipationsByDayBoolExp>;
    _or?: Maybe<Array<Maybe<GamesPlayedParticipationsByDayBoolExp>>>;
    client_id?: Maybe<UuidComparisonExp>;
    date?: Maybe<DateComparisonExp>;
    game_id?: Maybe<UuidComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    total_count?: Maybe<BigintComparisonExp>;
};
/** aggregate max on columns */
export declare type GamesPlayedParticipationsByDayMaxFields = {
    __typename?: 'games_played_participations_by_day_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['date']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by max() on columns of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesPlayedParticipationsByDayMinFields = {
    __typename?: 'games_played_participations_by_day_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    date?: Maybe<Scalars['date']>;
    game_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by min() on columns of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** ordering options when selecting data from "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayOrderBy = {
    client_id?: Maybe<OrderBy>;
    date?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    total_count?: Maybe<OrderBy>;
};
/** select columns of table "games_played_participations_by_day" */
export declare enum GamesPlayedParticipationsByDaySelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    Date = "date",
    /** column name */
    GameId = "game_id",
    /** column name */
    Name = "name",
    /** column name */
    TotalCount = "total_count"
}
/** aggregate stddev on columns */
export declare type GamesPlayedParticipationsByDayStddevFields = {
    __typename?: 'games_played_participations_by_day_stddev_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayStddevOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GamesPlayedParticipationsByDayStddevPopFields = {
    __typename?: 'games_played_participations_by_day_stddev_pop_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayStddevPopOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GamesPlayedParticipationsByDayStddevSampFields = {
    __typename?: 'games_played_participations_by_day_stddev_samp_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayStddevSampOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GamesPlayedParticipationsByDaySumFields = {
    __typename?: 'games_played_participations_by_day_sum_fields';
    total_count?: Maybe<Scalars['bigint']>;
};
/** order by sum() on columns of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDaySumOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate var_pop on columns */
export declare type GamesPlayedParticipationsByDayVarPopFields = {
    __typename?: 'games_played_participations_by_day_var_pop_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayVarPopOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GamesPlayedParticipationsByDayVarSampFields = {
    __typename?: 'games_played_participations_by_day_var_samp_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayVarSampOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GamesPlayedParticipationsByDayVarianceFields = {
    __typename?: 'games_played_participations_by_day_variance_fields';
    total_count?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "games_played_participations_by_day" */
export declare type GamesPlayedParticipationsByDayVarianceOrderBy = {
    total_count?: Maybe<OrderBy>;
};
/** primary key columns input for table: "games_played" */
export declare type GamesPlayedPkColumnsInput = {
    id: Scalars['bigint'];
};
/** select columns of table "games_played" */
export declare enum GamesPlayedSelectColumn {
    /** column name */
    GainId = "gain_id",
    /** column name */
    GainValidated = "gain_validated",
    /** column name */
    GameId = "game_id",
    /** column name */
    Id = "id",
    /** column name */
    PlayedAt = "played_at",
    /** column name */
    UserId = "user_id"
}
/** input type for updating data in table "games_played" */
export declare type GamesPlayedSetInput = {
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated?: Maybe<Scalars['Boolean']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate stddev on columns */
export declare type GamesPlayedStddevFields = {
    __typename?: 'games_played_stddev_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "games_played" */
export declare type GamesPlayedStddevOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GamesPlayedStddevPopFields = {
    __typename?: 'games_played_stddev_pop_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "games_played" */
export declare type GamesPlayedStddevPopOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GamesPlayedStddevSampFields = {
    __typename?: 'games_played_stddev_samp_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "games_played" */
export declare type GamesPlayedStddevSampOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GamesPlayedSumFields = {
    __typename?: 'games_played_sum_fields';
    id?: Maybe<Scalars['bigint']>;
};
/** order by sum() on columns of table "games_played" */
export declare type GamesPlayedSumOrderBy = {
    id?: Maybe<OrderBy>;
};
/** update columns of table "games_played" */
export declare enum GamesPlayedUpdateColumn {
    /** column name */
    GainId = "gain_id",
    /** column name */
    GainValidated = "gain_validated",
    /** column name */
    GameId = "game_id",
    /** column name */
    Id = "id",
    /** column name */
    PlayedAt = "played_at",
    /** column name */
    UserId = "user_id"
}
/** aggregate var_pop on columns */
export declare type GamesPlayedVarPopFields = {
    __typename?: 'games_played_var_pop_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "games_played" */
export declare type GamesPlayedVarPopOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GamesPlayedVarSampFields = {
    __typename?: 'games_played_var_samp_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "games_played" */
export declare type GamesPlayedVarSampOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GamesPlayedVarianceFields = {
    __typename?: 'games_played_variance_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "games_played" */
export declare type GamesPlayedVarianceOrderBy = {
    id?: Maybe<OrderBy>;
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type GamesPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** columns and relationships of "games_prices" */
export declare type GamesPrices = {
    __typename?: 'games_prices';
    game_id: Scalars['uuid'];
    price: Scalars['Int'];
    price_type: Scalars['String'];
};
/** aggregated selection of "games_prices" */
export declare type GamesPricesAggregate = {
    __typename?: 'games_prices_aggregate';
    aggregate?: Maybe<GamesPricesAggregateFields>;
    nodes: Array<GamesPrices>;
};
/** aggregate fields of "games_prices" */
export declare type GamesPricesAggregateFields = {
    __typename?: 'games_prices_aggregate_fields';
    avg?: Maybe<GamesPricesAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesPricesMaxFields>;
    min?: Maybe<GamesPricesMinFields>;
    stddev?: Maybe<GamesPricesStddevFields>;
    stddev_pop?: Maybe<GamesPricesStddevPopFields>;
    stddev_samp?: Maybe<GamesPricesStddevSampFields>;
    sum?: Maybe<GamesPricesSumFields>;
    var_pop?: Maybe<GamesPricesVarPopFields>;
    var_samp?: Maybe<GamesPricesVarSampFields>;
    variance?: Maybe<GamesPricesVarianceFields>;
};
/** aggregate fields of "games_prices" */
export declare type GamesPricesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesPricesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_prices" */
export declare type GamesPricesAggregateOrderBy = {
    avg?: Maybe<GamesPricesAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesPricesMaxOrderBy>;
    min?: Maybe<GamesPricesMinOrderBy>;
    stddev?: Maybe<GamesPricesStddevOrderBy>;
    stddev_pop?: Maybe<GamesPricesStddevPopOrderBy>;
    stddev_samp?: Maybe<GamesPricesStddevSampOrderBy>;
    sum?: Maybe<GamesPricesSumOrderBy>;
    var_pop?: Maybe<GamesPricesVarPopOrderBy>;
    var_samp?: Maybe<GamesPricesVarSampOrderBy>;
    variance?: Maybe<GamesPricesVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "games_prices" */
export declare type GamesPricesArrRelInsertInput = {
    data: Array<GamesPricesInsertInput>;
    on_conflict?: Maybe<GamesPricesOnConflict>;
};
/** aggregate avg on columns */
export declare type GamesPricesAvgFields = {
    __typename?: 'games_prices_avg_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "games_prices" */
export declare type GamesPricesAvgOrderBy = {
    price?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "games_prices". All fields are combined with a logical 'AND'. */
export declare type GamesPricesBoolExp = {
    _and?: Maybe<Array<Maybe<GamesPricesBoolExp>>>;
    _not?: Maybe<GamesPricesBoolExp>;
    _or?: Maybe<Array<Maybe<GamesPricesBoolExp>>>;
    game_id?: Maybe<UuidComparisonExp>;
    price?: Maybe<IntComparisonExp>;
    price_type?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "games_prices" */
export declare enum GamesPricesConstraint {
    /** unique or primary key constraint */
    GamesPricesPkey = "games_prices_pkey"
}
/** input type for incrementing integer column in table "games_prices" */
export declare type GamesPricesIncInput = {
    price?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "games_prices" */
export declare type GamesPricesInsertInput = {
    game_id?: Maybe<Scalars['uuid']>;
    price?: Maybe<Scalars['Int']>;
    price_type?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type GamesPricesMaxFields = {
    __typename?: 'games_prices_max_fields';
    game_id?: Maybe<Scalars['uuid']>;
    price?: Maybe<Scalars['Int']>;
    price_type?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "games_prices" */
export declare type GamesPricesMaxOrderBy = {
    game_id?: Maybe<OrderBy>;
    price?: Maybe<OrderBy>;
    price_type?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesPricesMinFields = {
    __typename?: 'games_prices_min_fields';
    game_id?: Maybe<Scalars['uuid']>;
    price?: Maybe<Scalars['Int']>;
    price_type?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "games_prices" */
export declare type GamesPricesMinOrderBy = {
    game_id?: Maybe<OrderBy>;
    price?: Maybe<OrderBy>;
    price_type?: Maybe<OrderBy>;
};
/** response of any mutation on the table "games_prices" */
export declare type GamesPricesMutationResponse = {
    __typename?: 'games_prices_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GamesPrices>;
};
/** input type for inserting object relation for remote table "games_prices" */
export declare type GamesPricesObjRelInsertInput = {
    data: GamesPricesInsertInput;
    on_conflict?: Maybe<GamesPricesOnConflict>;
};
/** on conflict condition type for table "games_prices" */
export declare type GamesPricesOnConflict = {
    constraint: GamesPricesConstraint;
    update_columns: Array<GamesPricesUpdateColumn>;
    where?: Maybe<GamesPricesBoolExp>;
};
/** ordering options when selecting data from "games_prices" */
export declare type GamesPricesOrderBy = {
    game_id?: Maybe<OrderBy>;
    price?: Maybe<OrderBy>;
    price_type?: Maybe<OrderBy>;
};
/** primary key columns input for table: "games_prices" */
export declare type GamesPricesPkColumnsInput = {
    game_id: Scalars['uuid'];
    price_type: Scalars['String'];
};
/** select columns of table "games_prices" */
export declare enum GamesPricesSelectColumn {
    /** column name */
    GameId = "game_id",
    /** column name */
    Price = "price",
    /** column name */
    PriceType = "price_type"
}
/** input type for updating data in table "games_prices" */
export declare type GamesPricesSetInput = {
    game_id?: Maybe<Scalars['uuid']>;
    price?: Maybe<Scalars['Int']>;
    price_type?: Maybe<Scalars['String']>;
};
/** aggregate stddev on columns */
export declare type GamesPricesStddevFields = {
    __typename?: 'games_prices_stddev_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "games_prices" */
export declare type GamesPricesStddevOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GamesPricesStddevPopFields = {
    __typename?: 'games_prices_stddev_pop_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "games_prices" */
export declare type GamesPricesStddevPopOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GamesPricesStddevSampFields = {
    __typename?: 'games_prices_stddev_samp_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "games_prices" */
export declare type GamesPricesStddevSampOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GamesPricesSumFields = {
    __typename?: 'games_prices_sum_fields';
    price?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "games_prices" */
export declare type GamesPricesSumOrderBy = {
    price?: Maybe<OrderBy>;
};
/** columns and relationships of "games_prices_types" */
export declare type GamesPricesTypes = {
    __typename?: 'games_prices_types';
    description: Scalars['String'];
    value: Scalars['String'];
};
/** aggregated selection of "games_prices_types" */
export declare type GamesPricesTypesAggregate = {
    __typename?: 'games_prices_types_aggregate';
    aggregate?: Maybe<GamesPricesTypesAggregateFields>;
    nodes: Array<GamesPricesTypes>;
};
/** aggregate fields of "games_prices_types" */
export declare type GamesPricesTypesAggregateFields = {
    __typename?: 'games_prices_types_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesPricesTypesMaxFields>;
    min?: Maybe<GamesPricesTypesMinFields>;
};
/** aggregate fields of "games_prices_types" */
export declare type GamesPricesTypesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesPricesTypesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_prices_types" */
export declare type GamesPricesTypesAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesPricesTypesMaxOrderBy>;
    min?: Maybe<GamesPricesTypesMinOrderBy>;
};
/** input type for inserting array relation for remote table "games_prices_types" */
export declare type GamesPricesTypesArrRelInsertInput = {
    data: Array<GamesPricesTypesInsertInput>;
    on_conflict?: Maybe<GamesPricesTypesOnConflict>;
};
/** Boolean expression to filter rows from the table "games_prices_types". All fields are combined with a logical 'AND'. */
export declare type GamesPricesTypesBoolExp = {
    _and?: Maybe<Array<Maybe<GamesPricesTypesBoolExp>>>;
    _not?: Maybe<GamesPricesTypesBoolExp>;
    _or?: Maybe<Array<Maybe<GamesPricesTypesBoolExp>>>;
    description?: Maybe<StringComparisonExp>;
    value?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "games_prices_types" */
export declare enum GamesPricesTypesConstraint {
    /** unique or primary key constraint */
    GamesPricesTypesPkey = "games_prices_types_pkey"
}
/** input type for inserting data into table "games_prices_types" */
export declare type GamesPricesTypesInsertInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type GamesPricesTypesMaxFields = {
    __typename?: 'games_prices_types_max_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "games_prices_types" */
export declare type GamesPricesTypesMaxOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesPricesTypesMinFields = {
    __typename?: 'games_prices_types_min_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "games_prices_types" */
export declare type GamesPricesTypesMinOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** response of any mutation on the table "games_prices_types" */
export declare type GamesPricesTypesMutationResponse = {
    __typename?: 'games_prices_types_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GamesPricesTypes>;
};
/** input type for inserting object relation for remote table "games_prices_types" */
export declare type GamesPricesTypesObjRelInsertInput = {
    data: GamesPricesTypesInsertInput;
    on_conflict?: Maybe<GamesPricesTypesOnConflict>;
};
/** on conflict condition type for table "games_prices_types" */
export declare type GamesPricesTypesOnConflict = {
    constraint: GamesPricesTypesConstraint;
    update_columns: Array<GamesPricesTypesUpdateColumn>;
    where?: Maybe<GamesPricesTypesBoolExp>;
};
/** ordering options when selecting data from "games_prices_types" */
export declare type GamesPricesTypesOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** primary key columns input for table: "games_prices_types" */
export declare type GamesPricesTypesPkColumnsInput = {
    value: Scalars['String'];
};
/** select columns of table "games_prices_types" */
export declare enum GamesPricesTypesSelectColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** input type for updating data in table "games_prices_types" */
export declare type GamesPricesTypesSetInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** update columns of table "games_prices_types" */
export declare enum GamesPricesTypesUpdateColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** update columns of table "games_prices" */
export declare enum GamesPricesUpdateColumn {
    /** column name */
    GameId = "game_id",
    /** column name */
    Price = "price",
    /** column name */
    PriceType = "price_type"
}
/** aggregate var_pop on columns */
export declare type GamesPricesVarPopFields = {
    __typename?: 'games_prices_var_pop_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "games_prices" */
export declare type GamesPricesVarPopOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GamesPricesVarSampFields = {
    __typename?: 'games_prices_var_samp_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "games_prices" */
export declare type GamesPricesVarSampOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GamesPricesVarianceFields = {
    __typename?: 'games_prices_variance_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "games_prices" */
export declare type GamesPricesVarianceOrderBy = {
    price?: Maybe<OrderBy>;
};
/** select columns of table "games" */
export declare enum GamesSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Frequency = "frequency",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    IsTest = "is_test",
    /** column name */
    KeepCumulatedProbability = "keep_cumulated_probability",
    /** column name */
    Location = "location",
    /** column name */
    MaxParticipations = "max_participations",
    /** column name */
    Name = "name",
    /** column name */
    Radius = "radius",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz",
    /** column name */
    Valorization = "valorization",
    /** column name */
    WithInstantGains = "with_instant_gains",
    /** column name */
    WithMagicRandomDrawings = "with_magic_random_drawings",
    /** column name */
    WithRandomDrawings = "with_random_drawings"
}
/** input type for updating data in table "games" */
export declare type GamesSetInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    keep_cumulated_probability?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    with_instant_gains?: Maybe<Scalars['Boolean']>;
    with_magic_random_drawings?: Maybe<Scalars['Boolean']>;
    with_random_drawings?: Maybe<Scalars['Boolean']>;
};
/** aggregate stddev on columns */
export declare type GamesStddevFields = {
    __typename?: 'games_stddev_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "games" */
export declare type GamesStddevOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GamesStddevPopFields = {
    __typename?: 'games_stddev_pop_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "games" */
export declare type GamesStddevPopOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GamesStddevSampFields = {
    __typename?: 'games_stddev_samp_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "games" */
export declare type GamesStddevSampOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GamesSumFields = {
    __typename?: 'games_sum_fields';
    max_participations?: Maybe<Scalars['Int']>;
    radius?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "games" */
export declare type GamesSumOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** columns and relationships of "games_types" */
export declare type GamesTypes = {
    __typename?: 'games_types';
    acronym?: Maybe<Scalars['bpchar']>;
    color?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['uuid'];
    name: Scalars['String'];
    participations_price_range?: Maybe<Scalars['jsonb']>;
    price: Scalars['Int'];
    radius_price_range?: Maybe<Scalars['jsonb']>;
    trackers_price_range?: Maybe<Scalars['jsonb']>;
};
/** columns and relationships of "games_types" */
export declare type GamesTypesParticipationsPriceRangeArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "games_types" */
export declare type GamesTypesRadiusPriceRangeArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "games_types" */
export declare type GamesTypesTrackersPriceRangeArgs = {
    path?: Maybe<Scalars['String']>;
};
/** aggregated selection of "games_types" */
export declare type GamesTypesAggregate = {
    __typename?: 'games_types_aggregate';
    aggregate?: Maybe<GamesTypesAggregateFields>;
    nodes: Array<GamesTypes>;
};
/** aggregate fields of "games_types" */
export declare type GamesTypesAggregateFields = {
    __typename?: 'games_types_aggregate_fields';
    avg?: Maybe<GamesTypesAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesTypesMaxFields>;
    min?: Maybe<GamesTypesMinFields>;
    stddev?: Maybe<GamesTypesStddevFields>;
    stddev_pop?: Maybe<GamesTypesStddevPopFields>;
    stddev_samp?: Maybe<GamesTypesStddevSampFields>;
    sum?: Maybe<GamesTypesSumFields>;
    var_pop?: Maybe<GamesTypesVarPopFields>;
    var_samp?: Maybe<GamesTypesVarSampFields>;
    variance?: Maybe<GamesTypesVarianceFields>;
};
/** aggregate fields of "games_types" */
export declare type GamesTypesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesTypesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_types" */
export declare type GamesTypesAggregateOrderBy = {
    avg?: Maybe<GamesTypesAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesTypesMaxOrderBy>;
    min?: Maybe<GamesTypesMinOrderBy>;
    stddev?: Maybe<GamesTypesStddevOrderBy>;
    stddev_pop?: Maybe<GamesTypesStddevPopOrderBy>;
    stddev_samp?: Maybe<GamesTypesStddevSampOrderBy>;
    sum?: Maybe<GamesTypesSumOrderBy>;
    var_pop?: Maybe<GamesTypesVarPopOrderBy>;
    var_samp?: Maybe<GamesTypesVarSampOrderBy>;
    variance?: Maybe<GamesTypesVarianceOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type GamesTypesAppendInput = {
    participations_price_range?: Maybe<Scalars['jsonb']>;
    radius_price_range?: Maybe<Scalars['jsonb']>;
    trackers_price_range?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "games_types" */
export declare type GamesTypesArrRelInsertInput = {
    data: Array<GamesTypesInsertInput>;
    on_conflict?: Maybe<GamesTypesOnConflict>;
};
/** aggregate avg on columns */
export declare type GamesTypesAvgFields = {
    __typename?: 'games_types_avg_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "games_types" */
export declare type GamesTypesAvgOrderBy = {
    price?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "games_types". All fields are combined with a logical 'AND'. */
export declare type GamesTypesBoolExp = {
    _and?: Maybe<Array<Maybe<GamesTypesBoolExp>>>;
    _not?: Maybe<GamesTypesBoolExp>;
    _or?: Maybe<Array<Maybe<GamesTypesBoolExp>>>;
    acronym?: Maybe<BpcharComparisonExp>;
    color?: Maybe<StringComparisonExp>;
    description?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    participations_price_range?: Maybe<JsonbComparisonExp>;
    price?: Maybe<IntComparisonExp>;
    radius_price_range?: Maybe<JsonbComparisonExp>;
    trackers_price_range?: Maybe<JsonbComparisonExp>;
};
/** unique or primary key constraints on table "games_types" */
export declare enum GamesTypesConstraint {
    /** unique or primary key constraint */
    GamesTypesPkey = "games_types_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type GamesTypesDeleteAtPathInput = {
    participations_price_range?: Maybe<Array<Maybe<Scalars['String']>>>;
    radius_price_range?: Maybe<Array<Maybe<Scalars['String']>>>;
    trackers_price_range?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type GamesTypesDeleteElemInput = {
    participations_price_range?: Maybe<Scalars['Int']>;
    radius_price_range?: Maybe<Scalars['Int']>;
    trackers_price_range?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type GamesTypesDeleteKeyInput = {
    participations_price_range?: Maybe<Scalars['String']>;
    radius_price_range?: Maybe<Scalars['String']>;
    trackers_price_range?: Maybe<Scalars['String']>;
};
/** input type for incrementing integer column in table "games_types" */
export declare type GamesTypesIncInput = {
    price?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "games_types" */
export declare type GamesTypesInsertInput = {
    acronym?: Maybe<Scalars['bpchar']>;
    color?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    participations_price_range?: Maybe<Scalars['jsonb']>;
    price?: Maybe<Scalars['Int']>;
    radius_price_range?: Maybe<Scalars['jsonb']>;
    trackers_price_range?: Maybe<Scalars['jsonb']>;
};
/** aggregate max on columns */
export declare type GamesTypesMaxFields = {
    __typename?: 'games_types_max_fields';
    color?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Int']>;
};
/** order by max() on columns of table "games_types" */
export declare type GamesTypesMaxOrderBy = {
    color?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    price?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesTypesMinFields = {
    __typename?: 'games_types_min_fields';
    color?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Int']>;
};
/** order by min() on columns of table "games_types" */
export declare type GamesTypesMinOrderBy = {
    color?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    price?: Maybe<OrderBy>;
};
/** response of any mutation on the table "games_types" */
export declare type GamesTypesMutationResponse = {
    __typename?: 'games_types_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GamesTypes>;
};
/** input type for inserting object relation for remote table "games_types" */
export declare type GamesTypesObjRelInsertInput = {
    data: GamesTypesInsertInput;
    on_conflict?: Maybe<GamesTypesOnConflict>;
};
/** on conflict condition type for table "games_types" */
export declare type GamesTypesOnConflict = {
    constraint: GamesTypesConstraint;
    update_columns: Array<GamesTypesUpdateColumn>;
    where?: Maybe<GamesTypesBoolExp>;
};
/** ordering options when selecting data from "games_types" */
export declare type GamesTypesOrderBy = {
    acronym?: Maybe<OrderBy>;
    color?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    participations_price_range?: Maybe<OrderBy>;
    price?: Maybe<OrderBy>;
    radius_price_range?: Maybe<OrderBy>;
    trackers_price_range?: Maybe<OrderBy>;
};
/** primary key columns input for table: "games_types" */
export declare type GamesTypesPkColumnsInput = {
    id: Scalars['uuid'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type GamesTypesPrependInput = {
    participations_price_range?: Maybe<Scalars['jsonb']>;
    radius_price_range?: Maybe<Scalars['jsonb']>;
    trackers_price_range?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "games_types" */
export declare enum GamesTypesSelectColumn {
    /** column name */
    Acronym = "acronym",
    /** column name */
    Color = "color",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    ParticipationsPriceRange = "participations_price_range",
    /** column name */
    Price = "price",
    /** column name */
    RadiusPriceRange = "radius_price_range",
    /** column name */
    TrackersPriceRange = "trackers_price_range"
}
/** input type for updating data in table "games_types" */
export declare type GamesTypesSetInput = {
    acronym?: Maybe<Scalars['bpchar']>;
    color?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    participations_price_range?: Maybe<Scalars['jsonb']>;
    price?: Maybe<Scalars['Int']>;
    radius_price_range?: Maybe<Scalars['jsonb']>;
    trackers_price_range?: Maybe<Scalars['jsonb']>;
};
/** aggregate stddev on columns */
export declare type GamesTypesStddevFields = {
    __typename?: 'games_types_stddev_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "games_types" */
export declare type GamesTypesStddevOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type GamesTypesStddevPopFields = {
    __typename?: 'games_types_stddev_pop_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "games_types" */
export declare type GamesTypesStddevPopOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type GamesTypesStddevSampFields = {
    __typename?: 'games_types_stddev_samp_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "games_types" */
export declare type GamesTypesStddevSampOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type GamesTypesSumFields = {
    __typename?: 'games_types_sum_fields';
    price?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "games_types" */
export declare type GamesTypesSumOrderBy = {
    price?: Maybe<OrderBy>;
};
/** update columns of table "games_types" */
export declare enum GamesTypesUpdateColumn {
    /** column name */
    Acronym = "acronym",
    /** column name */
    Color = "color",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    ParticipationsPriceRange = "participations_price_range",
    /** column name */
    Price = "price",
    /** column name */
    RadiusPriceRange = "radius_price_range",
    /** column name */
    TrackersPriceRange = "trackers_price_range"
}
/** aggregate var_pop on columns */
export declare type GamesTypesVarPopFields = {
    __typename?: 'games_types_var_pop_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "games_types" */
export declare type GamesTypesVarPopOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GamesTypesVarSampFields = {
    __typename?: 'games_types_var_samp_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "games_types" */
export declare type GamesTypesVarSampOrderBy = {
    price?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GamesTypesVarianceFields = {
    __typename?: 'games_types_variance_fields';
    price?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "games_types" */
export declare type GamesTypesVarianceOrderBy = {
    price?: Maybe<OrderBy>;
};
/** update columns of table "games" */
export declare enum GamesUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Frequency = "frequency",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    IsTest = "is_test",
    /** column name */
    KeepCumulatedProbability = "keep_cumulated_probability",
    /** column name */
    Location = "location",
    /** column name */
    MaxParticipations = "max_participations",
    /** column name */
    Name = "name",
    /** column name */
    Radius = "radius",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz",
    /** column name */
    Valorization = "valorization",
    /** column name */
    WithInstantGains = "with_instant_gains",
    /** column name */
    WithMagicRandomDrawings = "with_magic_random_drawings",
    /** column name */
    WithRandomDrawings = "with_random_drawings"
}
/** columns and relationships of "games_valorizations" */
export declare type GamesValorizations = {
    __typename?: 'games_valorizations';
    description: Scalars['String'];
    value: Scalars['String'];
};
/** aggregated selection of "games_valorizations" */
export declare type GamesValorizationsAggregate = {
    __typename?: 'games_valorizations_aggregate';
    aggregate?: Maybe<GamesValorizationsAggregateFields>;
    nodes: Array<GamesValorizations>;
};
/** aggregate fields of "games_valorizations" */
export declare type GamesValorizationsAggregateFields = {
    __typename?: 'games_valorizations_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GamesValorizationsMaxFields>;
    min?: Maybe<GamesValorizationsMinFields>;
};
/** aggregate fields of "games_valorizations" */
export declare type GamesValorizationsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GamesValorizationsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "games_valorizations" */
export declare type GamesValorizationsAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<GamesValorizationsMaxOrderBy>;
    min?: Maybe<GamesValorizationsMinOrderBy>;
};
/** input type for inserting array relation for remote table "games_valorizations" */
export declare type GamesValorizationsArrRelInsertInput = {
    data: Array<GamesValorizationsInsertInput>;
    on_conflict?: Maybe<GamesValorizationsOnConflict>;
};
/** Boolean expression to filter rows from the table "games_valorizations". All fields are combined with a logical 'AND'. */
export declare type GamesValorizationsBoolExp = {
    _and?: Maybe<Array<Maybe<GamesValorizationsBoolExp>>>;
    _not?: Maybe<GamesValorizationsBoolExp>;
    _or?: Maybe<Array<Maybe<GamesValorizationsBoolExp>>>;
    description?: Maybe<StringComparisonExp>;
    value?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "games_valorizations" */
export declare enum GamesValorizationsConstraint {
    /** unique or primary key constraint */
    GamesValorizationsPkey = "games_valorizations_pkey"
}
export declare enum GamesValorizationsEnum {
    /** Immediate gain */
    ImmediateGain = "IMMEDIATE_GAIN",
    /** None */
    None = "NONE",
    /** Random drawing */
    RandomDrawing = "RANDOM_DRAWING"
}
/** expression to compare columns of type games_valorizations_enum. All fields are combined with logical 'AND'. */
export declare type GamesValorizationsEnumComparisonExp = {
    _eq?: Maybe<GamesValorizationsEnum>;
    _in?: Maybe<Array<GamesValorizationsEnum>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _neq?: Maybe<GamesValorizationsEnum>;
    _nin?: Maybe<Array<GamesValorizationsEnum>>;
};
/** input type for inserting data into table "games_valorizations" */
export declare type GamesValorizationsInsertInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type GamesValorizationsMaxFields = {
    __typename?: 'games_valorizations_max_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "games_valorizations" */
export declare type GamesValorizationsMaxOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GamesValorizationsMinFields = {
    __typename?: 'games_valorizations_min_fields';
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "games_valorizations" */
export declare type GamesValorizationsMinOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** response of any mutation on the table "games_valorizations" */
export declare type GamesValorizationsMutationResponse = {
    __typename?: 'games_valorizations_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GamesValorizations>;
};
/** input type for inserting object relation for remote table "games_valorizations" */
export declare type GamesValorizationsObjRelInsertInput = {
    data: GamesValorizationsInsertInput;
    on_conflict?: Maybe<GamesValorizationsOnConflict>;
};
/** on conflict condition type for table "games_valorizations" */
export declare type GamesValorizationsOnConflict = {
    constraint: GamesValorizationsConstraint;
    update_columns: Array<GamesValorizationsUpdateColumn>;
    where?: Maybe<GamesValorizationsBoolExp>;
};
/** ordering options when selecting data from "games_valorizations" */
export declare type GamesValorizationsOrderBy = {
    description?: Maybe<OrderBy>;
    value?: Maybe<OrderBy>;
};
/** primary key columns input for table: "games_valorizations" */
export declare type GamesValorizationsPkColumnsInput = {
    value: Scalars['String'];
};
/** select columns of table "games_valorizations" */
export declare enum GamesValorizationsSelectColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** input type for updating data in table "games_valorizations" */
export declare type GamesValorizationsSetInput = {
    description?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
/** update columns of table "games_valorizations" */
export declare enum GamesValorizationsUpdateColumn {
    /** column name */
    Description = "description",
    /** column name */
    Value = "value"
}
/** aggregate var_pop on columns */
export declare type GamesVarPopFields = {
    __typename?: 'games_var_pop_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "games" */
export declare type GamesVarPopOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type GamesVarSampFields = {
    __typename?: 'games_var_samp_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "games" */
export declare type GamesVarSampOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type GamesVarianceFields = {
    __typename?: 'games_variance_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "games" */
export declare type GamesVarianceOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** Expression to compare the result of casting a column of type geography. Multiple cast targets are combined with logical 'AND'. */
export declare type GeographyCastExp = {
    geometry?: Maybe<GeometryComparisonExp>;
};
/** expression to compare columns of type geography. All fields are combined with logical 'AND'. */
export declare type GeographyComparisonExp = {
    _cast?: Maybe<GeographyCastExp>;
    _eq?: Maybe<Scalars['geography']>;
    _gt?: Maybe<Scalars['geography']>;
    _gte?: Maybe<Scalars['geography']>;
    _in?: Maybe<Array<Scalars['geography']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['geography']>;
    _lte?: Maybe<Scalars['geography']>;
    _neq?: Maybe<Scalars['geography']>;
    _nin?: Maybe<Array<Scalars['geography']>>;
    /** is the column within a distance from a geography value */
    _st_d_within?: Maybe<StDWithinGeographyInput>;
    /** does the column spatially intersect the given geography value */
    _st_intersects?: Maybe<Scalars['geography']>;
};
/** Expression to compare the result of casting a column of type geometry. Multiple cast targets are combined with logical 'AND'. */
export declare type GeometryCastExp = {
    geography?: Maybe<GeographyComparisonExp>;
};
/** expression to compare columns of type geometry. All fields are combined with logical 'AND'. */
export declare type GeometryComparisonExp = {
    _cast?: Maybe<GeometryCastExp>;
    _eq?: Maybe<Scalars['geometry']>;
    _gt?: Maybe<Scalars['geometry']>;
    _gte?: Maybe<Scalars['geometry']>;
    _in?: Maybe<Array<Scalars['geometry']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['geometry']>;
    _lte?: Maybe<Scalars['geometry']>;
    _neq?: Maybe<Scalars['geometry']>;
    _nin?: Maybe<Array<Scalars['geometry']>>;
    /** does the column contain the given geometry value */
    _st_contains?: Maybe<Scalars['geometry']>;
    /** does the column crosses the given geometry value */
    _st_crosses?: Maybe<Scalars['geometry']>;
    /** is the column within a distance from a geometry value */
    _st_d_within?: Maybe<StDWithinInput>;
    /** is the column equal to given geometry value. Directionality is ignored */
    _st_equals?: Maybe<Scalars['geometry']>;
    /** does the column spatially intersect the given geometry value */
    _st_intersects?: Maybe<Scalars['geometry']>;
    /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
    _st_overlaps?: Maybe<Scalars['geometry']>;
    /** does the column have atleast one point in common with the given geometry value */
    _st_touches?: Maybe<Scalars['geometry']>;
    /** is the column contained in the given geometry value */
    _st_within?: Maybe<Scalars['geometry']>;
};
export declare type GetNearbyCommunicationsArgs = {
    user_location?: Maybe<Scalars['geometry']>;
};
export declare type GetNearbyGamesArgs = {
    user_location?: Maybe<Scalars['geometry']>;
};
export declare type GetNearbyPrivateDeckCommunicationsArgs = {
    private_deck_id?: Maybe<Scalars['uuid']>;
    user_location?: Maybe<Scalars['geometry']>;
};
export declare type GetNearbyPrivateDeckGamesArgs = {
    private_deck_id?: Maybe<Scalars['uuid']>;
    user_location?: Maybe<Scalars['geometry']>;
};
/** columns and relationships of "goodies" */
export declare type Goodies = {
    __typename?: 'goodies';
    /** An array relationship */
    animations: Array<GoodiesM2mAnimations>;
    /** An aggregated array relationship */
    animations_aggregate: GoodiesM2mAnimationsAggregate;
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamp'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    id: Scalars['uuid'];
    /** An object relationship */
    image?: Maybe<Assets>;
    image_id?: Maybe<Scalars['uuid']>;
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_test: Scalars['Boolean'];
    name: Scalars['String'];
    tz?: Maybe<Scalars['String']>;
};
/** columns and relationships of "goodies" */
export declare type GoodiesAnimationsArgs = {
    distinct_on?: Maybe<Array<GoodiesM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesM2mAnimationsOrderBy>>;
    where?: Maybe<GoodiesM2mAnimationsBoolExp>;
};
/** columns and relationships of "goodies" */
export declare type GoodiesAnimationsAggregateArgs = {
    distinct_on?: Maybe<Array<GoodiesM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesM2mAnimationsOrderBy>>;
    where?: Maybe<GoodiesM2mAnimationsBoolExp>;
};
/** columns and relationships of "goodies" */
export declare type GoodiesDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** aggregated selection of "goodies" */
export declare type GoodiesAggregate = {
    __typename?: 'goodies_aggregate';
    aggregate?: Maybe<GoodiesAggregateFields>;
    nodes: Array<Goodies>;
};
/** aggregate fields of "goodies" */
export declare type GoodiesAggregateFields = {
    __typename?: 'goodies_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GoodiesMaxFields>;
    min?: Maybe<GoodiesMinFields>;
};
/** aggregate fields of "goodies" */
export declare type GoodiesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GoodiesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "goodies" */
export declare type GoodiesAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<GoodiesMaxOrderBy>;
    min?: Maybe<GoodiesMinOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type GoodiesAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "goodies" */
export declare type GoodiesArrRelInsertInput = {
    data: Array<GoodiesInsertInput>;
    on_conflict?: Maybe<GoodiesOnConflict>;
};
/** Boolean expression to filter rows from the table "goodies". All fields are combined with a logical 'AND'. */
export declare type GoodiesBoolExp = {
    _and?: Maybe<Array<Maybe<GoodiesBoolExp>>>;
    _not?: Maybe<GoodiesBoolExp>;
    _or?: Maybe<Array<Maybe<GoodiesBoolExp>>>;
    animations?: Maybe<GoodiesM2mAnimationsBoolExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestampComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    image?: Maybe<AssetsBoolExp>;
    image_id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_test?: Maybe<BooleanComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "goodies" */
export declare enum GoodiesConstraint {
    /** unique or primary key constraint */
    GoodiesPkey = "goodies_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type GoodiesDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type GoodiesDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type GoodiesDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
};
/** input type for inserting data into table "goodies" */
export declare type GoodiesInsertInput = {
    animations?: Maybe<GoodiesM2mAnimationsArrRelInsertInput>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamp']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    id?: Maybe<Scalars['uuid']>;
    image?: Maybe<AssetsObjRelInsertInput>;
    image_id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    tz?: Maybe<Scalars['String']>;
};
/** columns and relationships of "goodies_m2m_animations" */
export declare type GoodiesM2mAnimations = {
    __typename?: 'goodies_m2m_animations';
    /** An object relationship */
    animation: Animations;
    animation_id: Scalars['uuid'];
    /** An object relationship */
    goodie: Goodies;
    goodie_id: Scalars['uuid'];
};
/** aggregated selection of "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsAggregate = {
    __typename?: 'goodies_m2m_animations_aggregate';
    aggregate?: Maybe<GoodiesM2mAnimationsAggregateFields>;
    nodes: Array<GoodiesM2mAnimations>;
};
/** aggregate fields of "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsAggregateFields = {
    __typename?: 'goodies_m2m_animations_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GoodiesM2mAnimationsMaxFields>;
    min?: Maybe<GoodiesM2mAnimationsMinFields>;
};
/** aggregate fields of "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GoodiesM2mAnimationsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<GoodiesM2mAnimationsMaxOrderBy>;
    min?: Maybe<GoodiesM2mAnimationsMinOrderBy>;
};
/** input type for inserting array relation for remote table "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsArrRelInsertInput = {
    data: Array<GoodiesM2mAnimationsInsertInput>;
    on_conflict?: Maybe<GoodiesM2mAnimationsOnConflict>;
};
/** Boolean expression to filter rows from the table "goodies_m2m_animations". All fields are combined with a logical 'AND'. */
export declare type GoodiesM2mAnimationsBoolExp = {
    _and?: Maybe<Array<Maybe<GoodiesM2mAnimationsBoolExp>>>;
    _not?: Maybe<GoodiesM2mAnimationsBoolExp>;
    _or?: Maybe<Array<Maybe<GoodiesM2mAnimationsBoolExp>>>;
    animation?: Maybe<AnimationsBoolExp>;
    animation_id?: Maybe<UuidComparisonExp>;
    goodie?: Maybe<GoodiesBoolExp>;
    goodie_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "goodies_m2m_animations" */
export declare enum GoodiesM2mAnimationsConstraint {
    /** unique or primary key constraint */
    GoodiesM2mAnimationsPkey = "goodies_m2m_animations_pkey"
}
/** input type for inserting data into table "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsInsertInput = {
    animation?: Maybe<AnimationsObjRelInsertInput>;
    animation_id?: Maybe<Scalars['uuid']>;
    goodie?: Maybe<GoodiesObjRelInsertInput>;
    goodie_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type GoodiesM2mAnimationsMaxFields = {
    __typename?: 'goodies_m2m_animations_max_fields';
    animation_id?: Maybe<Scalars['uuid']>;
    goodie_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsMaxOrderBy = {
    animation_id?: Maybe<OrderBy>;
    goodie_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GoodiesM2mAnimationsMinFields = {
    __typename?: 'goodies_m2m_animations_min_fields';
    animation_id?: Maybe<Scalars['uuid']>;
    goodie_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsMinOrderBy = {
    animation_id?: Maybe<OrderBy>;
    goodie_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsMutationResponse = {
    __typename?: 'goodies_m2m_animations_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GoodiesM2mAnimations>;
};
/** input type for inserting object relation for remote table "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsObjRelInsertInput = {
    data: GoodiesM2mAnimationsInsertInput;
    on_conflict?: Maybe<GoodiesM2mAnimationsOnConflict>;
};
/** on conflict condition type for table "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsOnConflict = {
    constraint: GoodiesM2mAnimationsConstraint;
    update_columns: Array<GoodiesM2mAnimationsUpdateColumn>;
    where?: Maybe<GoodiesM2mAnimationsBoolExp>;
};
/** ordering options when selecting data from "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsOrderBy = {
    animation?: Maybe<AnimationsOrderBy>;
    animation_id?: Maybe<OrderBy>;
    goodie?: Maybe<GoodiesOrderBy>;
    goodie_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsPkColumnsInput = {
    animation_id: Scalars['uuid'];
    goodie_id: Scalars['uuid'];
};
/** select columns of table "goodies_m2m_animations" */
export declare enum GoodiesM2mAnimationsSelectColumn {
    /** column name */
    AnimationId = "animation_id",
    /** column name */
    GoodieId = "goodie_id"
}
/** input type for updating data in table "goodies_m2m_animations" */
export declare type GoodiesM2mAnimationsSetInput = {
    animation_id?: Maybe<Scalars['uuid']>;
    goodie_id?: Maybe<Scalars['uuid']>;
};
/** update columns of table "goodies_m2m_animations" */
export declare enum GoodiesM2mAnimationsUpdateColumn {
    /** column name */
    AnimationId = "animation_id",
    /** column name */
    GoodieId = "goodie_id"
}
/** aggregate max on columns */
export declare type GoodiesMaxFields = {
    __typename?: 'goodies_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamp']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    image_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "goodies" */
export declare type GoodiesMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    image_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GoodiesMinFields = {
    __typename?: 'goodies_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamp']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    image_id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "goodies" */
export declare type GoodiesMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    image_id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** response of any mutation on the table "goodies" */
export declare type GoodiesMutationResponse = {
    __typename?: 'goodies_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Goodies>;
};
/** input type for inserting object relation for remote table "goodies" */
export declare type GoodiesObjRelInsertInput = {
    data: GoodiesInsertInput;
    on_conflict?: Maybe<GoodiesOnConflict>;
};
/** on conflict condition type for table "goodies" */
export declare type GoodiesOnConflict = {
    constraint: GoodiesConstraint;
    update_columns: Array<GoodiesUpdateColumn>;
    where?: Maybe<GoodiesBoolExp>;
};
/** ordering options when selecting data from "goodies" */
export declare type GoodiesOrderBy = {
    animations_aggregate?: Maybe<GoodiesM2mAnimationsAggregateOrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    image?: Maybe<AssetsOrderBy>;
    image_id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_test?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** primary key columns input for table: "goodies" */
export declare type GoodiesPkColumnsInput = {
    id: Scalars['uuid'];
};
/** columns and relationships of "goodies_played" */
export declare type GoodiesPlayed = {
    __typename?: 'goodies_played';
    /** An object relationship */
    goodie: Goodies;
    goodie_id: Scalars['uuid'];
    id: Scalars['uuid'];
    played_at: Scalars['timestamptz'];
    user_id: Scalars['uuid'];
};
/** aggregated selection of "goodies_played" */
export declare type GoodiesPlayedAggregate = {
    __typename?: 'goodies_played_aggregate';
    aggregate?: Maybe<GoodiesPlayedAggregateFields>;
    nodes: Array<GoodiesPlayed>;
};
/** aggregate fields of "goodies_played" */
export declare type GoodiesPlayedAggregateFields = {
    __typename?: 'goodies_played_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<GoodiesPlayedMaxFields>;
    min?: Maybe<GoodiesPlayedMinFields>;
};
/** aggregate fields of "goodies_played" */
export declare type GoodiesPlayedAggregateFieldsCountArgs = {
    columns?: Maybe<Array<GoodiesPlayedSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "goodies_played" */
export declare type GoodiesPlayedAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<GoodiesPlayedMaxOrderBy>;
    min?: Maybe<GoodiesPlayedMinOrderBy>;
};
/** input type for inserting array relation for remote table "goodies_played" */
export declare type GoodiesPlayedArrRelInsertInput = {
    data: Array<GoodiesPlayedInsertInput>;
    on_conflict?: Maybe<GoodiesPlayedOnConflict>;
};
/** Boolean expression to filter rows from the table "goodies_played". All fields are combined with a logical 'AND'. */
export declare type GoodiesPlayedBoolExp = {
    _and?: Maybe<Array<Maybe<GoodiesPlayedBoolExp>>>;
    _not?: Maybe<GoodiesPlayedBoolExp>;
    _or?: Maybe<Array<Maybe<GoodiesPlayedBoolExp>>>;
    goodie?: Maybe<GoodiesBoolExp>;
    goodie_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    played_at?: Maybe<TimestamptzComparisonExp>;
    user_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "goodies_played" */
export declare enum GoodiesPlayedConstraint {
    /** unique or primary key constraint */
    GoodiesPlayedPkey = "goodies_played_pkey"
}
/** input type for inserting data into table "goodies_played" */
export declare type GoodiesPlayedInsertInput = {
    goodie?: Maybe<GoodiesObjRelInsertInput>;
    goodie_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type GoodiesPlayedMaxFields = {
    __typename?: 'goodies_played_max_fields';
    goodie_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "goodies_played" */
export declare type GoodiesPlayedMaxOrderBy = {
    goodie_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type GoodiesPlayedMinFields = {
    __typename?: 'goodies_played_min_fields';
    goodie_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "goodies_played" */
export declare type GoodiesPlayedMinOrderBy = {
    goodie_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "goodies_played" */
export declare type GoodiesPlayedMutationResponse = {
    __typename?: 'goodies_played_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<GoodiesPlayed>;
};
/** input type for inserting object relation for remote table "goodies_played" */
export declare type GoodiesPlayedObjRelInsertInput = {
    data: GoodiesPlayedInsertInput;
    on_conflict?: Maybe<GoodiesPlayedOnConflict>;
};
/** on conflict condition type for table "goodies_played" */
export declare type GoodiesPlayedOnConflict = {
    constraint: GoodiesPlayedConstraint;
    update_columns: Array<GoodiesPlayedUpdateColumn>;
    where?: Maybe<GoodiesPlayedBoolExp>;
};
/** ordering options when selecting data from "goodies_played" */
export declare type GoodiesPlayedOrderBy = {
    goodie?: Maybe<GoodiesOrderBy>;
    goodie_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "goodies_played" */
export declare type GoodiesPlayedPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "goodies_played" */
export declare enum GoodiesPlayedSelectColumn {
    /** column name */
    GoodieId = "goodie_id",
    /** column name */
    Id = "id",
    /** column name */
    PlayedAt = "played_at",
    /** column name */
    UserId = "user_id"
}
/** input type for updating data in table "goodies_played" */
export declare type GoodiesPlayedSetInput = {
    goodie_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** update columns of table "goodies_played" */
export declare enum GoodiesPlayedUpdateColumn {
    /** column name */
    GoodieId = "goodie_id",
    /** column name */
    Id = "id",
    /** column name */
    PlayedAt = "played_at",
    /** column name */
    UserId = "user_id"
}
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type GoodiesPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "goodies" */
export declare enum GoodiesSelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    ImageId = "image_id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsTest = "is_test",
    /** column name */
    Name = "name",
    /** column name */
    Tz = "tz"
}
/** input type for updating data in table "goodies" */
export declare type GoodiesSetInput = {
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamp']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    id?: Maybe<Scalars['uuid']>;
    image_id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    tz?: Maybe<Scalars['String']>;
};
/** update columns of table "goodies" */
export declare enum GoodiesUpdateColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    ImageId = "image_id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsTest = "is_test",
    /** column name */
    Name = "name",
    /** column name */
    Tz = "tz"
}
/** columns and relationships of "infos" */
export declare type Infos = {
    __typename?: 'infos';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    design?: Maybe<Scalars['jsonb']>;
    html?: Maybe<Scalars['jsonb']>;
    id: Scalars['uuid'];
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    location?: Maybe<Scalars['geography']>;
    name: Scalars['String'];
    /** An object relationship */
    template?: Maybe<Templates>;
    template_id?: Maybe<Scalars['uuid']>;
    /** An object relationship */
    type: CommunicationsTypes;
    type_id: Scalars['uuid'];
    tz?: Maybe<Scalars['String']>;
};
/** columns and relationships of "infos" */
export declare type InfosDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "infos" */
export declare type InfosDesignArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "infos" */
export declare type InfosHtmlArgs = {
    path?: Maybe<Scalars['String']>;
};
/** aggregated selection of "infos" */
export declare type InfosAggregate = {
    __typename?: 'infos_aggregate';
    aggregate?: Maybe<InfosAggregateFields>;
    nodes: Array<Infos>;
};
/** aggregate fields of "infos" */
export declare type InfosAggregateFields = {
    __typename?: 'infos_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<InfosMaxFields>;
    min?: Maybe<InfosMinFields>;
};
/** aggregate fields of "infos" */
export declare type InfosAggregateFieldsCountArgs = {
    columns?: Maybe<Array<InfosSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "infos" */
export declare type InfosAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<InfosMaxOrderBy>;
    min?: Maybe<InfosMinOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type InfosAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
    design?: Maybe<Scalars['jsonb']>;
    html?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "infos" */
export declare type InfosArrRelInsertInput = {
    data: Array<InfosInsertInput>;
    on_conflict?: Maybe<InfosOnConflict>;
};
/** Boolean expression to filter rows from the table "infos". All fields are combined with a logical 'AND'. */
export declare type InfosBoolExp = {
    _and?: Maybe<Array<Maybe<InfosBoolExp>>>;
    _not?: Maybe<InfosBoolExp>;
    _or?: Maybe<Array<Maybe<InfosBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    card_image_background_id?: Maybe<UuidComparisonExp>;
    card_image_id?: Maybe<UuidComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    design?: Maybe<JsonbComparisonExp>;
    html?: Maybe<JsonbComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_private?: Maybe<BooleanComparisonExp>;
    location?: Maybe<GeographyComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    template?: Maybe<TemplatesBoolExp>;
    template_id?: Maybe<UuidComparisonExp>;
    type?: Maybe<CommunicationsTypesBoolExp>;
    type_id?: Maybe<UuidComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "infos" */
export declare enum InfosConstraint {
    /** unique or primary key constraint */
    InfosIdKey = "infos_id_key",
    /** unique or primary key constraint */
    InfosPkey = "infos_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type InfosDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
    design?: Maybe<Array<Maybe<Scalars['String']>>>;
    html?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type InfosDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
    design?: Maybe<Scalars['Int']>;
    html?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type InfosDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
    design?: Maybe<Scalars['String']>;
    html?: Maybe<Scalars['String']>;
};
/** input type for inserting data into table "infos" */
export declare type InfosInsertInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    design?: Maybe<Scalars['jsonb']>;
    html?: Maybe<Scalars['jsonb']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    name?: Maybe<Scalars['String']>;
    template?: Maybe<TemplatesObjRelInsertInput>;
    template_id?: Maybe<Scalars['uuid']>;
    type?: Maybe<CommunicationsTypesObjRelInsertInput>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type InfosMaxFields = {
    __typename?: 'infos_max_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    template_id?: Maybe<Scalars['uuid']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "infos" */
export declare type InfosMaxOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    template_id?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type InfosMinFields = {
    __typename?: 'infos_min_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    template_id?: Maybe<Scalars['uuid']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "infos" */
export declare type InfosMinOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    template_id?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** response of any mutation on the table "infos" */
export declare type InfosMutationResponse = {
    __typename?: 'infos_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Infos>;
};
/** input type for inserting object relation for remote table "infos" */
export declare type InfosObjRelInsertInput = {
    data: InfosInsertInput;
    on_conflict?: Maybe<InfosOnConflict>;
};
/** on conflict condition type for table "infos" */
export declare type InfosOnConflict = {
    constraint: InfosConstraint;
    update_columns: Array<InfosUpdateColumn>;
    where?: Maybe<InfosBoolExp>;
};
/** ordering options when selecting data from "infos" */
export declare type InfosOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    design?: Maybe<OrderBy>;
    html?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_private?: Maybe<OrderBy>;
    location?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    template?: Maybe<TemplatesOrderBy>;
    template_id?: Maybe<OrderBy>;
    type?: Maybe<CommunicationsTypesOrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** primary key columns input for table: "infos" */
export declare type InfosPkColumnsInput = {
    id: Scalars['uuid'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type InfosPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
    design?: Maybe<Scalars['jsonb']>;
    html?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "infos" */
export declare enum InfosSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Design = "design",
    /** column name */
    Html = "html",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    Location = "location",
    /** column name */
    Name = "name",
    /** column name */
    TemplateId = "template_id",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz"
}
/** input type for updating data in table "infos" */
export declare type InfosSetInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    design?: Maybe<Scalars['jsonb']>;
    html?: Maybe<Scalars['jsonb']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    name?: Maybe<Scalars['String']>;
    template_id?: Maybe<Scalars['uuid']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** update columns of table "infos" */
export declare enum InfosUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Design = "design",
    /** column name */
    Html = "html",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    Location = "location",
    /** column name */
    Name = "name",
    /** column name */
    TemplateId = "template_id",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz"
}
/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export declare type JsonbComparisonExp = {
    /** is the column contained in the given json value */
    _contained_in?: Maybe<Scalars['jsonb']>;
    /** does the column contain the given json value at the top level */
    _contains?: Maybe<Scalars['jsonb']>;
    _eq?: Maybe<Scalars['jsonb']>;
    _gt?: Maybe<Scalars['jsonb']>;
    _gte?: Maybe<Scalars['jsonb']>;
    /** does the string exist as a top-level key in the column */
    _has_key?: Maybe<Scalars['String']>;
    /** do all of these strings exist as top-level keys in the column */
    _has_keys_all?: Maybe<Array<Scalars['String']>>;
    /** do any of these strings exist as top-level keys in the column */
    _has_keys_any?: Maybe<Array<Scalars['String']>>;
    _in?: Maybe<Array<Scalars['jsonb']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['jsonb']>;
    _lte?: Maybe<Scalars['jsonb']>;
    _neq?: Maybe<Scalars['jsonb']>;
    _nin?: Maybe<Array<Scalars['jsonb']>>;
};
/** mutation root */
export declare type MutationRoot = {
    __typename?: 'mutation_root';
    _empty?: Maybe<Scalars['String']>;
    create_stripe_customer: StripeCustomer;
    create_stripe_intent: StripeIntent;
    /** delete data from the table: "addresses" */
    delete_addresses?: Maybe<AddressesMutationResponse>;
    /** delete single row from the table: "addresses" */
    delete_addresses_by_pk?: Maybe<Addresses>;
    /** delete data from the table: "animations" */
    delete_animations?: Maybe<AnimationsMutationResponse>;
    /** delete single row from the table: "animations" */
    delete_animations_by_pk?: Maybe<Animations>;
    /** delete data from the table: "animations_m2m_assets" */
    delete_animations_m2m_assets?: Maybe<AnimationsM2mAssetsMutationResponse>;
    /** delete single row from the table: "animations_m2m_assets" */
    delete_animations_m2m_assets_by_pk?: Maybe<AnimationsM2mAssets>;
    /** delete data from the table: "ar" */
    delete_ar?: Maybe<ArMutationResponse>;
    /** delete single row from the table: "ar" */
    delete_ar_by_pk?: Maybe<Ar>;
    /** delete data from the table: "ar_m2m_animations" */
    delete_ar_m2m_animations?: Maybe<ArM2mAnimationsMutationResponse>;
    /** delete single row from the table: "ar_m2m_animations" */
    delete_ar_m2m_animations_by_pk?: Maybe<ArM2mAnimations>;
    /** delete data from the table: "ar_played" */
    delete_ar_played?: Maybe<ArPlayedMutationResponse>;
    /** delete single row from the table: "ar_played" */
    delete_ar_played_by_pk?: Maybe<ArPlayed>;
    /** delete data from the table: "ar_tracker_positions" */
    delete_ar_tracker_positions?: Maybe<ArTrackerPositionsMutationResponse>;
    /** delete single row from the table: "ar_tracker_positions" */
    delete_ar_tracker_positions_by_pk?: Maybe<ArTrackerPositions>;
    /** delete data from the table: "ar_trackers" */
    delete_ar_trackers?: Maybe<ArTrackersMutationResponse>;
    /** delete single row from the table: "ar_trackers" */
    delete_ar_trackers_by_pk?: Maybe<ArTrackers>;
    /** delete data from the table: "assets" */
    delete_assets?: Maybe<AssetsMutationResponse>;
    /** delete single row from the table: "assets" */
    delete_assets_by_pk?: Maybe<Assets>;
    /** delete data from the table: "assets_types" */
    delete_assets_types?: Maybe<AssetsTypesMutationResponse>;
    /** delete single row from the table: "assets_types" */
    delete_assets_types_by_pk?: Maybe<AssetsTypes>;
    /** delete data from the table: "clients" */
    delete_clients?: Maybe<ClientsMutationResponse>;
    /** delete single row from the table: "clients" */
    delete_clients_by_pk?: Maybe<Clients>;
    /** delete data from the table: "clients_password_forgotten_tokens" */
    delete_clients_password_forgotten_tokens?: Maybe<ClientsPasswordForgottenTokensMutationResponse>;
    /** delete single row from the table: "clients_password_forgotten_tokens" */
    delete_clients_password_forgotten_tokens_by_pk?: Maybe<ClientsPasswordForgottenTokens>;
    /** delete data from the table: "clients_roles" */
    delete_clients_roles?: Maybe<ClientsRolesMutationResponse>;
    /** delete single row from the table: "clients_roles" */
    delete_clients_roles_by_pk?: Maybe<ClientsRoles>;
    /** delete data from the table: "communications" */
    delete_communications?: Maybe<CommunicationsMutationResponse>;
    /** delete single row from the table: "communications" */
    delete_communications_by_pk?: Maybe<Communications>;
    /** delete data from the table: "communications_types" */
    delete_communications_types?: Maybe<CommunicationsTypesMutationResponse>;
    /** delete single row from the table: "communications_types" */
    delete_communications_types_by_pk?: Maybe<CommunicationsTypes>;
    /** delete data from the table: "estimates" */
    delete_estimates?: Maybe<EstimatesMutationResponse>;
    /** delete single row from the table: "estimates" */
    delete_estimates_by_pk?: Maybe<Estimates>;
    /** delete data from the table: "estimates_m2m_entities" */
    delete_estimates_m2m_entities?: Maybe<EstimatesM2mEntitiesMutationResponse>;
    /** delete single row from the table: "estimates_m2m_entities" */
    delete_estimates_m2m_entities_by_pk?: Maybe<EstimatesM2mEntities>;
    /** delete data from the table: "estimates_status" */
    delete_estimates_status?: Maybe<EstimatesStatusMutationResponse>;
    /** delete single row from the table: "estimates_status" */
    delete_estimates_status_by_pk?: Maybe<EstimatesStatus>;
    /** delete data from the table: "gains" */
    delete_gains?: Maybe<GainsMutationResponse>;
    /** delete single row from the table: "gains" */
    delete_gains_by_pk?: Maybe<Gains>;
    /** delete data from the table: "gains_virtuals" */
    delete_gains_virtuals?: Maybe<GainsVirtualsMutationResponse>;
    /** delete single row from the table: "gains_virtuals" */
    delete_gains_virtuals_by_pk?: Maybe<GainsVirtuals>;
    /** delete data from the table: "gains_virtuals_formats" */
    delete_gains_virtuals_formats?: Maybe<GainsVirtualsFormatsMutationResponse>;
    /** delete single row from the table: "gains_virtuals_formats" */
    delete_gains_virtuals_formats_by_pk?: Maybe<GainsVirtualsFormats>;
    /** delete data from the table: "gains_virtuals_types" */
    delete_gains_virtuals_types?: Maybe<GainsVirtualsTypesMutationResponse>;
    /** delete single row from the table: "gains_virtuals_types" */
    delete_gains_virtuals_types_by_pk?: Maybe<GainsVirtualsTypes>;
    /** delete data from the table: "games" */
    delete_games?: Maybe<GamesMutationResponse>;
    /** delete single row from the table: "games" */
    delete_games_by_pk?: Maybe<Games>;
    /** delete data from the table: "games_frequencies" */
    delete_games_frequencies?: Maybe<GamesFrequenciesMutationResponse>;
    /** delete single row from the table: "games_frequencies" */
    delete_games_frequencies_by_pk?: Maybe<GamesFrequencies>;
    /** delete data from the table: "games_gains" */
    delete_games_gains?: Maybe<GamesGainsMutationResponse>;
    /** delete single row from the table: "games_gains" */
    delete_games_gains_by_pk?: Maybe<GamesGains>;
    /** delete data from the table: "games_played" */
    delete_games_played?: Maybe<GamesPlayedMutationResponse>;
    /** delete single row from the table: "games_played" */
    delete_games_played_by_pk?: Maybe<GamesPlayed>;
    /** delete data from the table: "games_prices" */
    delete_games_prices?: Maybe<GamesPricesMutationResponse>;
    /** delete single row from the table: "games_prices" */
    delete_games_prices_by_pk?: Maybe<GamesPrices>;
    /** delete data from the table: "games_prices_types" */
    delete_games_prices_types?: Maybe<GamesPricesTypesMutationResponse>;
    /** delete single row from the table: "games_prices_types" */
    delete_games_prices_types_by_pk?: Maybe<GamesPricesTypes>;
    /** delete data from the table: "games_types" */
    delete_games_types?: Maybe<GamesTypesMutationResponse>;
    /** delete single row from the table: "games_types" */
    delete_games_types_by_pk?: Maybe<GamesTypes>;
    /** delete data from the table: "games_valorizations" */
    delete_games_valorizations?: Maybe<GamesValorizationsMutationResponse>;
    /** delete single row from the table: "games_valorizations" */
    delete_games_valorizations_by_pk?: Maybe<GamesValorizations>;
    /** delete data from the table: "goodies" */
    delete_goodies?: Maybe<GoodiesMutationResponse>;
    /** delete single row from the table: "goodies" */
    delete_goodies_by_pk?: Maybe<Goodies>;
    /** delete data from the table: "goodies_m2m_animations" */
    delete_goodies_m2m_animations?: Maybe<GoodiesM2mAnimationsMutationResponse>;
    /** delete single row from the table: "goodies_m2m_animations" */
    delete_goodies_m2m_animations_by_pk?: Maybe<GoodiesM2mAnimations>;
    /** delete data from the table: "goodies_played" */
    delete_goodies_played?: Maybe<GoodiesPlayedMutationResponse>;
    /** delete single row from the table: "goodies_played" */
    delete_goodies_played_by_pk?: Maybe<GoodiesPlayed>;
    /** delete data from the table: "infos" */
    delete_infos?: Maybe<InfosMutationResponse>;
    /** delete single row from the table: "infos" */
    delete_infos_by_pk?: Maybe<Infos>;
    /** delete data from the table: "nearby_communications" */
    delete_nearby_communications?: Maybe<NearbyCommunicationsMutationResponse>;
    /** delete single row from the table: "nearby_communications" */
    delete_nearby_communications_by_pk?: Maybe<NearbyCommunications>;
    /** delete data from the table: "nearby_games" */
    delete_nearby_games?: Maybe<NearbyGamesMutationResponse>;
    /** delete single row from the table: "nearby_games" */
    delete_nearby_games_by_pk?: Maybe<NearbyGames>;
    /** delete data from the table: "photos" */
    delete_photos?: Maybe<PhotosMutationResponse>;
    /** delete single row from the table: "photos" */
    delete_photos_by_pk?: Maybe<Photos>;
    /** delete data from the table: "privates_decks" */
    delete_privates_decks?: Maybe<PrivatesDecksMutationResponse>;
    /** delete single row from the table: "privates_decks" */
    delete_privates_decks_by_pk?: Maybe<PrivatesDecks>;
    /** delete data from the table: "privates_decks_m2m_entities" */
    delete_privates_decks_m2m_entities?: Maybe<PrivatesDecksM2mEntitiesMutationResponse>;
    /** delete single row from the table: "privates_decks_m2m_entities" */
    delete_privates_decks_m2m_entities_by_pk?: Maybe<PrivatesDecksM2mEntities>;
    /** delete data from the table: "privates_decks_m2m_users" */
    delete_privates_decks_m2m_users?: Maybe<PrivatesDecksM2mUsersMutationResponse>;
    /** delete single row from the table: "privates_decks_m2m_users" */
    delete_privates_decks_m2m_users_by_pk?: Maybe<PrivatesDecksM2mUsers>;
    /** delete data from the table: "quizz" */
    delete_quizz?: Maybe<QuizzMutationResponse>;
    /** delete single row from the table: "quizz" */
    delete_quizz_by_pk?: Maybe<Quizz>;
    /** delete data from the table: "quizz_played" */
    delete_quizz_played?: Maybe<QuizzPlayedMutationResponse>;
    /** delete single row from the table: "quizz_played" */
    delete_quizz_played_by_pk?: Maybe<QuizzPlayed>;
    /** delete data from the table: "quizz_questions" */
    delete_quizz_questions?: Maybe<QuizzQuestionsMutationResponse>;
    /** delete data from the table: "quizz_questions_answers" */
    delete_quizz_questions_answers?: Maybe<QuizzQuestionsAnswersMutationResponse>;
    /** delete single row from the table: "quizz_questions_answers" */
    delete_quizz_questions_answers_by_pk?: Maybe<QuizzQuestionsAnswers>;
    /** delete single row from the table: "quizz_questions" */
    delete_quizz_questions_by_pk?: Maybe<QuizzQuestions>;
    /** delete data from the table: "random_drawings" */
    delete_random_drawings?: Maybe<RandomDrawingsMutationResponse>;
    /** delete single row from the table: "random_drawings" */
    delete_random_drawings_by_pk?: Maybe<RandomDrawings>;
    /** delete data from the table: "surveys" */
    delete_surveys?: Maybe<SurveysMutationResponse>;
    /** delete single row from the table: "surveys" */
    delete_surveys_by_pk?: Maybe<Surveys>;
    /** delete data from the table: "surveys_questions" */
    delete_surveys_questions?: Maybe<SurveysQuestionsMutationResponse>;
    /** delete data from the table: "surveys_questions_answers" */
    delete_surveys_questions_answers?: Maybe<SurveysQuestionsAnswersMutationResponse>;
    /** delete single row from the table: "surveys_questions_answers" */
    delete_surveys_questions_answers_by_pk?: Maybe<SurveysQuestionsAnswers>;
    /** delete single row from the table: "surveys_questions" */
    delete_surveys_questions_by_pk?: Maybe<SurveysQuestions>;
    /** delete data from the table: "templates" */
    delete_templates?: Maybe<TemplatesMutationResponse>;
    /** delete single row from the table: "templates" */
    delete_templates_by_pk?: Maybe<Templates>;
    /** delete data from the table: "users" */
    delete_users?: Maybe<UsersMutationResponse>;
    /** delete single row from the table: "users" */
    delete_users_by_pk?: Maybe<Users>;
    /** delete data from the table: "votes" */
    delete_votes?: Maybe<VotesMutationResponse>;
    /** delete single row from the table: "votes" */
    delete_votes_by_pk?: Maybe<Votes>;
    /** delete data from the table: "votes_played" */
    delete_votes_played?: Maybe<VotesPlayedMutationResponse>;
    /** delete data from the table: "votes_selections" */
    delete_votes_selections?: Maybe<VotesSelectionsMutationResponse>;
    /** delete single row from the table: "votes_selections" */
    delete_votes_selections_by_pk?: Maybe<VotesSelections>;
    /** delete data from the table: "votes_selections_choices" */
    delete_votes_selections_choices?: Maybe<VotesSelectionsChoicesMutationResponse>;
    /** delete single row from the table: "votes_selections_choices" */
    delete_votes_selections_choices_by_pk?: Maybe<VotesSelectionsChoices>;
    /** insert data into the table: "addresses" */
    insert_addresses?: Maybe<AddressesMutationResponse>;
    /** insert a single row into the table: "addresses" */
    insert_addresses_one?: Maybe<Addresses>;
    /** insert data into the table: "animations" */
    insert_animations?: Maybe<AnimationsMutationResponse>;
    /** insert data into the table: "animations_m2m_assets" */
    insert_animations_m2m_assets?: Maybe<AnimationsM2mAssetsMutationResponse>;
    /** insert a single row into the table: "animations_m2m_assets" */
    insert_animations_m2m_assets_one?: Maybe<AnimationsM2mAssets>;
    /** insert a single row into the table: "animations" */
    insert_animations_one?: Maybe<Animations>;
    /** insert data into the table: "ar" */
    insert_ar?: Maybe<ArMutationResponse>;
    /** insert data into the table: "ar_m2m_animations" */
    insert_ar_m2m_animations?: Maybe<ArM2mAnimationsMutationResponse>;
    /** insert a single row into the table: "ar_m2m_animations" */
    insert_ar_m2m_animations_one?: Maybe<ArM2mAnimations>;
    /** insert a single row into the table: "ar" */
    insert_ar_one?: Maybe<Ar>;
    /** insert data into the table: "ar_played" */
    insert_ar_played?: Maybe<ArPlayedMutationResponse>;
    /** insert a single row into the table: "ar_played" */
    insert_ar_played_one?: Maybe<ArPlayed>;
    /** insert data into the table: "ar_tracker_positions" */
    insert_ar_tracker_positions?: Maybe<ArTrackerPositionsMutationResponse>;
    /** insert a single row into the table: "ar_tracker_positions" */
    insert_ar_tracker_positions_one?: Maybe<ArTrackerPositions>;
    /** insert data into the table: "ar_trackers" */
    insert_ar_trackers?: Maybe<ArTrackersMutationResponse>;
    /** insert a single row into the table: "ar_trackers" */
    insert_ar_trackers_one?: Maybe<ArTrackers>;
    /** insert data into the table: "assets" */
    insert_assets?: Maybe<AssetsMutationResponse>;
    /** insert a single row into the table: "assets" */
    insert_assets_one?: Maybe<Assets>;
    /** insert data into the table: "assets_types" */
    insert_assets_types?: Maybe<AssetsTypesMutationResponse>;
    /** insert a single row into the table: "assets_types" */
    insert_assets_types_one?: Maybe<AssetsTypes>;
    /** insert data into the table: "clients" */
    insert_clients?: Maybe<ClientsMutationResponse>;
    /** insert a single row into the table: "clients" */
    insert_clients_one?: Maybe<Clients>;
    /** insert data into the table: "clients_password_forgotten_tokens" */
    insert_clients_password_forgotten_tokens?: Maybe<ClientsPasswordForgottenTokensMutationResponse>;
    /** insert a single row into the table: "clients_password_forgotten_tokens" */
    insert_clients_password_forgotten_tokens_one?: Maybe<ClientsPasswordForgottenTokens>;
    /** insert data into the table: "clients_roles" */
    insert_clients_roles?: Maybe<ClientsRolesMutationResponse>;
    /** insert a single row into the table: "clients_roles" */
    insert_clients_roles_one?: Maybe<ClientsRoles>;
    /** insert data into the table: "communications" */
    insert_communications?: Maybe<CommunicationsMutationResponse>;
    /** insert a single row into the table: "communications" */
    insert_communications_one?: Maybe<Communications>;
    /** insert data into the table: "communications_types" */
    insert_communications_types?: Maybe<CommunicationsTypesMutationResponse>;
    /** insert a single row into the table: "communications_types" */
    insert_communications_types_one?: Maybe<CommunicationsTypes>;
    /** insert data into the table: "estimates" */
    insert_estimates?: Maybe<EstimatesMutationResponse>;
    /** insert data into the table: "estimates_m2m_entities" */
    insert_estimates_m2m_entities?: Maybe<EstimatesM2mEntitiesMutationResponse>;
    /** insert a single row into the table: "estimates_m2m_entities" */
    insert_estimates_m2m_entities_one?: Maybe<EstimatesM2mEntities>;
    /** insert a single row into the table: "estimates" */
    insert_estimates_one?: Maybe<Estimates>;
    /** insert data into the table: "estimates_status" */
    insert_estimates_status?: Maybe<EstimatesStatusMutationResponse>;
    /** insert a single row into the table: "estimates_status" */
    insert_estimates_status_one?: Maybe<EstimatesStatus>;
    /** insert data into the table: "gains" */
    insert_gains?: Maybe<GainsMutationResponse>;
    /** insert a single row into the table: "gains" */
    insert_gains_one?: Maybe<Gains>;
    /** insert data into the table: "gains_virtuals" */
    insert_gains_virtuals?: Maybe<GainsVirtualsMutationResponse>;
    /** insert data into the table: "gains_virtuals_formats" */
    insert_gains_virtuals_formats?: Maybe<GainsVirtualsFormatsMutationResponse>;
    /** insert a single row into the table: "gains_virtuals_formats" */
    insert_gains_virtuals_formats_one?: Maybe<GainsVirtualsFormats>;
    /** insert a single row into the table: "gains_virtuals" */
    insert_gains_virtuals_one?: Maybe<GainsVirtuals>;
    /** insert data into the table: "gains_virtuals_types" */
    insert_gains_virtuals_types?: Maybe<GainsVirtualsTypesMutationResponse>;
    /** insert a single row into the table: "gains_virtuals_types" */
    insert_gains_virtuals_types_one?: Maybe<GainsVirtualsTypes>;
    /** insert data into the table: "games" */
    insert_games?: Maybe<GamesMutationResponse>;
    /** insert data into the table: "games_frequencies" */
    insert_games_frequencies?: Maybe<GamesFrequenciesMutationResponse>;
    /** insert a single row into the table: "games_frequencies" */
    insert_games_frequencies_one?: Maybe<GamesFrequencies>;
    /** insert data into the table: "games_gains" */
    insert_games_gains?: Maybe<GamesGainsMutationResponse>;
    /** insert a single row into the table: "games_gains" */
    insert_games_gains_one?: Maybe<GamesGains>;
    /** insert a single row into the table: "games" */
    insert_games_one?: Maybe<Games>;
    /** insert data into the table: "games_played" */
    insert_games_played?: Maybe<GamesPlayedMutationResponse>;
    /** insert a single row into the table: "games_played" */
    insert_games_played_one?: Maybe<GamesPlayed>;
    /** insert data into the table: "games_prices" */
    insert_games_prices?: Maybe<GamesPricesMutationResponse>;
    /** insert a single row into the table: "games_prices" */
    insert_games_prices_one?: Maybe<GamesPrices>;
    /** insert data into the table: "games_prices_types" */
    insert_games_prices_types?: Maybe<GamesPricesTypesMutationResponse>;
    /** insert a single row into the table: "games_prices_types" */
    insert_games_prices_types_one?: Maybe<GamesPricesTypes>;
    /** insert data into the table: "games_types" */
    insert_games_types?: Maybe<GamesTypesMutationResponse>;
    /** insert a single row into the table: "games_types" */
    insert_games_types_one?: Maybe<GamesTypes>;
    /** insert data into the table: "games_valorizations" */
    insert_games_valorizations?: Maybe<GamesValorizationsMutationResponse>;
    /** insert a single row into the table: "games_valorizations" */
    insert_games_valorizations_one?: Maybe<GamesValorizations>;
    /** insert data into the table: "goodies" */
    insert_goodies?: Maybe<GoodiesMutationResponse>;
    /** insert data into the table: "goodies_m2m_animations" */
    insert_goodies_m2m_animations?: Maybe<GoodiesM2mAnimationsMutationResponse>;
    /** insert a single row into the table: "goodies_m2m_animations" */
    insert_goodies_m2m_animations_one?: Maybe<GoodiesM2mAnimations>;
    /** insert a single row into the table: "goodies" */
    insert_goodies_one?: Maybe<Goodies>;
    /** insert data into the table: "goodies_played" */
    insert_goodies_played?: Maybe<GoodiesPlayedMutationResponse>;
    /** insert a single row into the table: "goodies_played" */
    insert_goodies_played_one?: Maybe<GoodiesPlayed>;
    /** insert data into the table: "infos" */
    insert_infos?: Maybe<InfosMutationResponse>;
    /** insert a single row into the table: "infos" */
    insert_infos_one?: Maybe<Infos>;
    /** insert data into the table: "nearby_communications" */
    insert_nearby_communications?: Maybe<NearbyCommunicationsMutationResponse>;
    /** insert a single row into the table: "nearby_communications" */
    insert_nearby_communications_one?: Maybe<NearbyCommunications>;
    /** insert data into the table: "nearby_games" */
    insert_nearby_games?: Maybe<NearbyGamesMutationResponse>;
    /** insert a single row into the table: "nearby_games" */
    insert_nearby_games_one?: Maybe<NearbyGames>;
    /** insert data into the table: "photos" */
    insert_photos?: Maybe<PhotosMutationResponse>;
    /** insert a single row into the table: "photos" */
    insert_photos_one?: Maybe<Photos>;
    /** insert data into the table: "privates_decks" */
    insert_privates_decks?: Maybe<PrivatesDecksMutationResponse>;
    /** insert data into the table: "privates_decks_m2m_entities" */
    insert_privates_decks_m2m_entities?: Maybe<PrivatesDecksM2mEntitiesMutationResponse>;
    /** insert a single row into the table: "privates_decks_m2m_entities" */
    insert_privates_decks_m2m_entities_one?: Maybe<PrivatesDecksM2mEntities>;
    /** insert data into the table: "privates_decks_m2m_users" */
    insert_privates_decks_m2m_users?: Maybe<PrivatesDecksM2mUsersMutationResponse>;
    /** insert a single row into the table: "privates_decks_m2m_users" */
    insert_privates_decks_m2m_users_one?: Maybe<PrivatesDecksM2mUsers>;
    /** insert a single row into the table: "privates_decks" */
    insert_privates_decks_one?: Maybe<PrivatesDecks>;
    /** insert data into the table: "quizz" */
    insert_quizz?: Maybe<QuizzMutationResponse>;
    /** insert a single row into the table: "quizz" */
    insert_quizz_one?: Maybe<Quizz>;
    /** insert data into the table: "quizz_played" */
    insert_quizz_played?: Maybe<QuizzPlayedMutationResponse>;
    /** insert a single row into the table: "quizz_played" */
    insert_quizz_played_one?: Maybe<QuizzPlayed>;
    /** insert data into the table: "quizz_questions" */
    insert_quizz_questions?: Maybe<QuizzQuestionsMutationResponse>;
    /** insert data into the table: "quizz_questions_answers" */
    insert_quizz_questions_answers?: Maybe<QuizzQuestionsAnswersMutationResponse>;
    /** insert a single row into the table: "quizz_questions_answers" */
    insert_quizz_questions_answers_one?: Maybe<QuizzQuestionsAnswers>;
    /** insert a single row into the table: "quizz_questions" */
    insert_quizz_questions_one?: Maybe<QuizzQuestions>;
    /** insert data into the table: "random_drawings" */
    insert_random_drawings?: Maybe<RandomDrawingsMutationResponse>;
    /** insert a single row into the table: "random_drawings" */
    insert_random_drawings_one?: Maybe<RandomDrawings>;
    /** insert data into the table: "surveys" */
    insert_surveys?: Maybe<SurveysMutationResponse>;
    /** insert a single row into the table: "surveys" */
    insert_surveys_one?: Maybe<Surveys>;
    /** insert data into the table: "surveys_questions" */
    insert_surveys_questions?: Maybe<SurveysQuestionsMutationResponse>;
    /** insert data into the table: "surveys_questions_answers" */
    insert_surveys_questions_answers?: Maybe<SurveysQuestionsAnswersMutationResponse>;
    /** insert a single row into the table: "surveys_questions_answers" */
    insert_surveys_questions_answers_one?: Maybe<SurveysQuestionsAnswers>;
    /** insert a single row into the table: "surveys_questions" */
    insert_surveys_questions_one?: Maybe<SurveysQuestions>;
    /** insert data into the table: "templates" */
    insert_templates?: Maybe<TemplatesMutationResponse>;
    /** insert a single row into the table: "templates" */
    insert_templates_one?: Maybe<Templates>;
    /** insert data into the table: "users" */
    insert_users?: Maybe<UsersMutationResponse>;
    /** insert a single row into the table: "users" */
    insert_users_one?: Maybe<Users>;
    /** insert data into the table: "votes" */
    insert_votes?: Maybe<VotesMutationResponse>;
    /** insert a single row into the table: "votes" */
    insert_votes_one?: Maybe<Votes>;
    /** insert data into the table: "votes_played" */
    insert_votes_played?: Maybe<VotesPlayedMutationResponse>;
    /** insert a single row into the table: "votes_played" */
    insert_votes_played_one?: Maybe<VotesPlayed>;
    /** insert data into the table: "votes_selections" */
    insert_votes_selections?: Maybe<VotesSelectionsMutationResponse>;
    /** insert data into the table: "votes_selections_choices" */
    insert_votes_selections_choices?: Maybe<VotesSelectionsChoicesMutationResponse>;
    /** insert a single row into the table: "votes_selections_choices" */
    insert_votes_selections_choices_one?: Maybe<VotesSelectionsChoices>;
    /** insert a single row into the table: "votes_selections" */
    insert_votes_selections_one?: Maybe<VotesSelections>;
    /** update data of the table: "addresses" */
    update_addresses?: Maybe<AddressesMutationResponse>;
    /** update single row of the table: "addresses" */
    update_addresses_by_pk?: Maybe<Addresses>;
    /** update data of the table: "animations" */
    update_animations?: Maybe<AnimationsMutationResponse>;
    /** update single row of the table: "animations" */
    update_animations_by_pk?: Maybe<Animations>;
    /** update data of the table: "animations_m2m_assets" */
    update_animations_m2m_assets?: Maybe<AnimationsM2mAssetsMutationResponse>;
    /** update single row of the table: "animations_m2m_assets" */
    update_animations_m2m_assets_by_pk?: Maybe<AnimationsM2mAssets>;
    /** update data of the table: "ar" */
    update_ar?: Maybe<ArMutationResponse>;
    /** update single row of the table: "ar" */
    update_ar_by_pk?: Maybe<Ar>;
    /** update data of the table: "ar_m2m_animations" */
    update_ar_m2m_animations?: Maybe<ArM2mAnimationsMutationResponse>;
    /** update single row of the table: "ar_m2m_animations" */
    update_ar_m2m_animations_by_pk?: Maybe<ArM2mAnimations>;
    /** update data of the table: "ar_played" */
    update_ar_played?: Maybe<ArPlayedMutationResponse>;
    /** update single row of the table: "ar_played" */
    update_ar_played_by_pk?: Maybe<ArPlayed>;
    /** update data of the table: "ar_tracker_positions" */
    update_ar_tracker_positions?: Maybe<ArTrackerPositionsMutationResponse>;
    /** update single row of the table: "ar_tracker_positions" */
    update_ar_tracker_positions_by_pk?: Maybe<ArTrackerPositions>;
    /** update data of the table: "ar_trackers" */
    update_ar_trackers?: Maybe<ArTrackersMutationResponse>;
    /** update single row of the table: "ar_trackers" */
    update_ar_trackers_by_pk?: Maybe<ArTrackers>;
    /** update data of the table: "assets" */
    update_assets?: Maybe<AssetsMutationResponse>;
    /** update single row of the table: "assets" */
    update_assets_by_pk?: Maybe<Assets>;
    /** update data of the table: "assets_types" */
    update_assets_types?: Maybe<AssetsTypesMutationResponse>;
    /** update single row of the table: "assets_types" */
    update_assets_types_by_pk?: Maybe<AssetsTypes>;
    /** update data of the table: "clients" */
    update_clients?: Maybe<ClientsMutationResponse>;
    /** update single row of the table: "clients" */
    update_clients_by_pk?: Maybe<Clients>;
    /** update data of the table: "clients_password_forgotten_tokens" */
    update_clients_password_forgotten_tokens?: Maybe<ClientsPasswordForgottenTokensMutationResponse>;
    /** update single row of the table: "clients_password_forgotten_tokens" */
    update_clients_password_forgotten_tokens_by_pk?: Maybe<ClientsPasswordForgottenTokens>;
    /** update data of the table: "clients_roles" */
    update_clients_roles?: Maybe<ClientsRolesMutationResponse>;
    /** update single row of the table: "clients_roles" */
    update_clients_roles_by_pk?: Maybe<ClientsRoles>;
    /** update data of the table: "communications" */
    update_communications?: Maybe<CommunicationsMutationResponse>;
    /** update single row of the table: "communications" */
    update_communications_by_pk?: Maybe<Communications>;
    /** update data of the table: "communications_types" */
    update_communications_types?: Maybe<CommunicationsTypesMutationResponse>;
    /** update single row of the table: "communications_types" */
    update_communications_types_by_pk?: Maybe<CommunicationsTypes>;
    /** update data of the table: "estimates" */
    update_estimates?: Maybe<EstimatesMutationResponse>;
    /** update single row of the table: "estimates" */
    update_estimates_by_pk?: Maybe<Estimates>;
    /** update data of the table: "estimates_m2m_entities" */
    update_estimates_m2m_entities?: Maybe<EstimatesM2mEntitiesMutationResponse>;
    /** update single row of the table: "estimates_m2m_entities" */
    update_estimates_m2m_entities_by_pk?: Maybe<EstimatesM2mEntities>;
    /** update data of the table: "estimates_status" */
    update_estimates_status?: Maybe<EstimatesStatusMutationResponse>;
    /** update single row of the table: "estimates_status" */
    update_estimates_status_by_pk?: Maybe<EstimatesStatus>;
    /** update data of the table: "gains" */
    update_gains?: Maybe<GainsMutationResponse>;
    /** update single row of the table: "gains" */
    update_gains_by_pk?: Maybe<Gains>;
    /** update data of the table: "gains_virtuals" */
    update_gains_virtuals?: Maybe<GainsVirtualsMutationResponse>;
    /** update single row of the table: "gains_virtuals" */
    update_gains_virtuals_by_pk?: Maybe<GainsVirtuals>;
    /** update data of the table: "gains_virtuals_formats" */
    update_gains_virtuals_formats?: Maybe<GainsVirtualsFormatsMutationResponse>;
    /** update single row of the table: "gains_virtuals_formats" */
    update_gains_virtuals_formats_by_pk?: Maybe<GainsVirtualsFormats>;
    /** update data of the table: "gains_virtuals_types" */
    update_gains_virtuals_types?: Maybe<GainsVirtualsTypesMutationResponse>;
    /** update single row of the table: "gains_virtuals_types" */
    update_gains_virtuals_types_by_pk?: Maybe<GainsVirtualsTypes>;
    /** update data of the table: "games" */
    update_games?: Maybe<GamesMutationResponse>;
    /** update single row of the table: "games" */
    update_games_by_pk?: Maybe<Games>;
    /** update data of the table: "games_frequencies" */
    update_games_frequencies?: Maybe<GamesFrequenciesMutationResponse>;
    /** update single row of the table: "games_frequencies" */
    update_games_frequencies_by_pk?: Maybe<GamesFrequencies>;
    /** update data of the table: "games_gains" */
    update_games_gains?: Maybe<GamesGainsMutationResponse>;
    /** update single row of the table: "games_gains" */
    update_games_gains_by_pk?: Maybe<GamesGains>;
    /** update data of the table: "games_played" */
    update_games_played?: Maybe<GamesPlayedMutationResponse>;
    /** update single row of the table: "games_played" */
    update_games_played_by_pk?: Maybe<GamesPlayed>;
    /** update data of the table: "games_prices" */
    update_games_prices?: Maybe<GamesPricesMutationResponse>;
    /** update single row of the table: "games_prices" */
    update_games_prices_by_pk?: Maybe<GamesPrices>;
    /** update data of the table: "games_prices_types" */
    update_games_prices_types?: Maybe<GamesPricesTypesMutationResponse>;
    /** update single row of the table: "games_prices_types" */
    update_games_prices_types_by_pk?: Maybe<GamesPricesTypes>;
    /** update data of the table: "games_types" */
    update_games_types?: Maybe<GamesTypesMutationResponse>;
    /** update single row of the table: "games_types" */
    update_games_types_by_pk?: Maybe<GamesTypes>;
    /** update data of the table: "games_valorizations" */
    update_games_valorizations?: Maybe<GamesValorizationsMutationResponse>;
    /** update single row of the table: "games_valorizations" */
    update_games_valorizations_by_pk?: Maybe<GamesValorizations>;
    /** update data of the table: "goodies" */
    update_goodies?: Maybe<GoodiesMutationResponse>;
    /** update single row of the table: "goodies" */
    update_goodies_by_pk?: Maybe<Goodies>;
    /** update data of the table: "goodies_m2m_animations" */
    update_goodies_m2m_animations?: Maybe<GoodiesM2mAnimationsMutationResponse>;
    /** update single row of the table: "goodies_m2m_animations" */
    update_goodies_m2m_animations_by_pk?: Maybe<GoodiesM2mAnimations>;
    /** update data of the table: "goodies_played" */
    update_goodies_played?: Maybe<GoodiesPlayedMutationResponse>;
    /** update single row of the table: "goodies_played" */
    update_goodies_played_by_pk?: Maybe<GoodiesPlayed>;
    /** update data of the table: "infos" */
    update_infos?: Maybe<InfosMutationResponse>;
    /** update single row of the table: "infos" */
    update_infos_by_pk?: Maybe<Infos>;
    /** update data of the table: "nearby_communications" */
    update_nearby_communications?: Maybe<NearbyCommunicationsMutationResponse>;
    /** update single row of the table: "nearby_communications" */
    update_nearby_communications_by_pk?: Maybe<NearbyCommunications>;
    /** update data of the table: "nearby_games" */
    update_nearby_games?: Maybe<NearbyGamesMutationResponse>;
    /** update single row of the table: "nearby_games" */
    update_nearby_games_by_pk?: Maybe<NearbyGames>;
    /** update data of the table: "photos" */
    update_photos?: Maybe<PhotosMutationResponse>;
    /** update single row of the table: "photos" */
    update_photos_by_pk?: Maybe<Photos>;
    /** update data of the table: "privates_decks" */
    update_privates_decks?: Maybe<PrivatesDecksMutationResponse>;
    /** update single row of the table: "privates_decks" */
    update_privates_decks_by_pk?: Maybe<PrivatesDecks>;
    /** update data of the table: "privates_decks_m2m_entities" */
    update_privates_decks_m2m_entities?: Maybe<PrivatesDecksM2mEntitiesMutationResponse>;
    /** update single row of the table: "privates_decks_m2m_entities" */
    update_privates_decks_m2m_entities_by_pk?: Maybe<PrivatesDecksM2mEntities>;
    /** update data of the table: "privates_decks_m2m_users" */
    update_privates_decks_m2m_users?: Maybe<PrivatesDecksM2mUsersMutationResponse>;
    /** update single row of the table: "privates_decks_m2m_users" */
    update_privates_decks_m2m_users_by_pk?: Maybe<PrivatesDecksM2mUsers>;
    /** update data of the table: "quizz" */
    update_quizz?: Maybe<QuizzMutationResponse>;
    /** update single row of the table: "quizz" */
    update_quizz_by_pk?: Maybe<Quizz>;
    /** update data of the table: "quizz_played" */
    update_quizz_played?: Maybe<QuizzPlayedMutationResponse>;
    /** update single row of the table: "quizz_played" */
    update_quizz_played_by_pk?: Maybe<QuizzPlayed>;
    /** update data of the table: "quizz_questions" */
    update_quizz_questions?: Maybe<QuizzQuestionsMutationResponse>;
    /** update data of the table: "quizz_questions_answers" */
    update_quizz_questions_answers?: Maybe<QuizzQuestionsAnswersMutationResponse>;
    /** update single row of the table: "quizz_questions_answers" */
    update_quizz_questions_answers_by_pk?: Maybe<QuizzQuestionsAnswers>;
    /** update single row of the table: "quizz_questions" */
    update_quizz_questions_by_pk?: Maybe<QuizzQuestions>;
    /** update data of the table: "random_drawings" */
    update_random_drawings?: Maybe<RandomDrawingsMutationResponse>;
    /** update single row of the table: "random_drawings" */
    update_random_drawings_by_pk?: Maybe<RandomDrawings>;
    /** update data of the table: "surveys" */
    update_surveys?: Maybe<SurveysMutationResponse>;
    /** update single row of the table: "surveys" */
    update_surveys_by_pk?: Maybe<Surveys>;
    /** update data of the table: "surveys_questions" */
    update_surveys_questions?: Maybe<SurveysQuestionsMutationResponse>;
    /** update data of the table: "surveys_questions_answers" */
    update_surveys_questions_answers?: Maybe<SurveysQuestionsAnswersMutationResponse>;
    /** update single row of the table: "surveys_questions_answers" */
    update_surveys_questions_answers_by_pk?: Maybe<SurveysQuestionsAnswers>;
    /** update single row of the table: "surveys_questions" */
    update_surveys_questions_by_pk?: Maybe<SurveysQuestions>;
    /** update data of the table: "templates" */
    update_templates?: Maybe<TemplatesMutationResponse>;
    /** update single row of the table: "templates" */
    update_templates_by_pk?: Maybe<Templates>;
    /** update data of the table: "users" */
    update_users?: Maybe<UsersMutationResponse>;
    /** update single row of the table: "users" */
    update_users_by_pk?: Maybe<Users>;
    /** update data of the table: "votes" */
    update_votes?: Maybe<VotesMutationResponse>;
    /** update single row of the table: "votes" */
    update_votes_by_pk?: Maybe<Votes>;
    /** update data of the table: "votes_played" */
    update_votes_played?: Maybe<VotesPlayedMutationResponse>;
    /** update data of the table: "votes_selections" */
    update_votes_selections?: Maybe<VotesSelectionsMutationResponse>;
    /** update single row of the table: "votes_selections" */
    update_votes_selections_by_pk?: Maybe<VotesSelections>;
    /** update data of the table: "votes_selections_choices" */
    update_votes_selections_choices?: Maybe<VotesSelectionsChoicesMutationResponse>;
    /** update single row of the table: "votes_selections_choices" */
    update_votes_selections_choices_by_pk?: Maybe<VotesSelectionsChoices>;
};
/** mutation root */
export declare type MutationRootCreateStripeCustomerArgs = {
    email: Scalars['String'];
    name: Scalars['String'];
};
/** mutation root */
export declare type MutationRootCreateStripeIntentArgs = {
    customerId: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteAddressesArgs = {
    where: AddressesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteAddressesByPkArgs = {
    id: Scalars['bigint'];
};
/** mutation root */
export declare type MutationRootDeleteAnimationsArgs = {
    where: AnimationsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteAnimationsByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteAnimationsM2mAssetsArgs = {
    where: AnimationsM2mAssetsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteAnimationsM2mAssetsByPkArgs = {
    animation_id: Scalars['uuid'];
    asset_id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteArArgs = {
    where: ArBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteArByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteArM2mAnimationsArgs = {
    where: ArM2mAnimationsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteArM2mAnimationsByPkArgs = {
    animation_id: Scalars['uuid'];
    ar_id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteArPlayedArgs = {
    where: ArPlayedBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteArPlayedByPkArgs = {
    id: Scalars['bigint'];
};
/** mutation root */
export declare type MutationRootDeleteArTrackerPositionsArgs = {
    where: ArTrackerPositionsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteArTrackerPositionsByPkArgs = {
    position: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteArTrackersArgs = {
    where: ArTrackersBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteArTrackersByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteAssetsArgs = {
    where: AssetsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteAssetsByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteAssetsTypesArgs = {
    where: AssetsTypesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteAssetsTypesByPkArgs = {
    type: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteClientsArgs = {
    where: ClientsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteClientsByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteClientsPasswordForgottenTokensArgs = {
    where: ClientsPasswordForgottenTokensBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteClientsPasswordForgottenTokensByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteClientsRolesArgs = {
    where: ClientsRolesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteClientsRolesByPkArgs = {
    name: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteCommunicationsArgs = {
    where: CommunicationsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteCommunicationsByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteCommunicationsTypesArgs = {
    where: CommunicationsTypesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteCommunicationsTypesByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteEstimatesArgs = {
    where: EstimatesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteEstimatesByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteEstimatesM2mEntitiesArgs = {
    where: EstimatesM2mEntitiesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteEstimatesM2mEntitiesByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteEstimatesStatusArgs = {
    where: EstimatesStatusBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteEstimatesStatusByPkArgs = {
    value: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteGainsArgs = {
    where: GainsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGainsByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteGainsVirtualsArgs = {
    where: GainsVirtualsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGainsVirtualsByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteGainsVirtualsFormatsArgs = {
    where: GainsVirtualsFormatsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGainsVirtualsFormatsByPkArgs = {
    value: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteGainsVirtualsTypesArgs = {
    where: GainsVirtualsTypesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGainsVirtualsTypesByPkArgs = {
    value: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteGamesArgs = {
    where: GamesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGamesByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteGamesFrequenciesArgs = {
    where: GamesFrequenciesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGamesFrequenciesByPkArgs = {
    value: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteGamesGainsArgs = {
    where: GamesGainsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGamesGainsByPkArgs = {
    gain_id: Scalars['uuid'];
    game_id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteGamesPlayedArgs = {
    where: GamesPlayedBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGamesPlayedByPkArgs = {
    id: Scalars['bigint'];
};
/** mutation root */
export declare type MutationRootDeleteGamesPricesArgs = {
    where: GamesPricesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGamesPricesByPkArgs = {
    game_id: Scalars['uuid'];
    price_type: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteGamesPricesTypesArgs = {
    where: GamesPricesTypesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGamesPricesTypesByPkArgs = {
    value: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteGamesTypesArgs = {
    where: GamesTypesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGamesTypesByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteGamesValorizationsArgs = {
    where: GamesValorizationsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGamesValorizationsByPkArgs = {
    value: Scalars['String'];
};
/** mutation root */
export declare type MutationRootDeleteGoodiesArgs = {
    where: GoodiesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGoodiesByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteGoodiesM2mAnimationsArgs = {
    where: GoodiesM2mAnimationsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGoodiesM2mAnimationsByPkArgs = {
    animation_id: Scalars['uuid'];
    goodie_id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteGoodiesPlayedArgs = {
    where: GoodiesPlayedBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteGoodiesPlayedByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteInfosArgs = {
    where: InfosBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteInfosByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteNearbyCommunicationsArgs = {
    where: NearbyCommunicationsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteNearbyCommunicationsByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteNearbyGamesArgs = {
    where: NearbyGamesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteNearbyGamesByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeletePhotosArgs = {
    where: PhotosBoolExp;
};
/** mutation root */
export declare type MutationRootDeletePhotosByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeletePrivatesDecksArgs = {
    where: PrivatesDecksBoolExp;
};
/** mutation root */
export declare type MutationRootDeletePrivatesDecksByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeletePrivatesDecksM2mEntitiesArgs = {
    where: PrivatesDecksM2mEntitiesBoolExp;
};
/** mutation root */
export declare type MutationRootDeletePrivatesDecksM2mEntitiesByPkArgs = {
    entity_id: Scalars['uuid'];
    private_deck: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeletePrivatesDecksM2mUsersArgs = {
    where: PrivatesDecksM2mUsersBoolExp;
};
/** mutation root */
export declare type MutationRootDeletePrivatesDecksM2mUsersByPkArgs = {
    private_deck_id: Scalars['uuid'];
    user_id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteQuizzArgs = {
    where: QuizzBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteQuizzByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteQuizzPlayedArgs = {
    where: QuizzPlayedBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteQuizzPlayedByPkArgs = {
    id: Scalars['bigint'];
};
/** mutation root */
export declare type MutationRootDeleteQuizzQuestionsArgs = {
    where: QuizzQuestionsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteQuizzQuestionsAnswersArgs = {
    where: QuizzQuestionsAnswersBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteQuizzQuestionsAnswersByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteQuizzQuestionsByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteRandomDrawingsArgs = {
    where: RandomDrawingsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteRandomDrawingsByPkArgs = {
    id: Scalars['bigint'];
};
/** mutation root */
export declare type MutationRootDeleteSurveysArgs = {
    where: SurveysBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteSurveysByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteSurveysQuestionsArgs = {
    where: SurveysQuestionsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteSurveysQuestionsAnswersArgs = {
    where: SurveysQuestionsAnswersBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteSurveysQuestionsAnswersByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteSurveysQuestionsByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteTemplatesArgs = {
    where: TemplatesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteTemplatesByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteUsersArgs = {
    where: UsersBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteUsersByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteVotesArgs = {
    where: VotesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteVotesByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteVotesPlayedArgs = {
    where: VotesPlayedBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteVotesSelectionsArgs = {
    where: VotesSelectionsBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteVotesSelectionsByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootDeleteVotesSelectionsChoicesArgs = {
    where: VotesSelectionsChoicesBoolExp;
};
/** mutation root */
export declare type MutationRootDeleteVotesSelectionsChoicesByPkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type MutationRootInsertAddressesArgs = {
    objects: Array<AddressesInsertInput>;
    on_conflict?: Maybe<AddressesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertAddressesOneArgs = {
    object: AddressesInsertInput;
    on_conflict?: Maybe<AddressesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertAnimationsArgs = {
    objects: Array<AnimationsInsertInput>;
    on_conflict?: Maybe<AnimationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertAnimationsM2mAssetsArgs = {
    objects: Array<AnimationsM2mAssetsInsertInput>;
    on_conflict?: Maybe<AnimationsM2mAssetsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertAnimationsM2mAssetsOneArgs = {
    object: AnimationsM2mAssetsInsertInput;
    on_conflict?: Maybe<AnimationsM2mAssetsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertAnimationsOneArgs = {
    object: AnimationsInsertInput;
    on_conflict?: Maybe<AnimationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertArArgs = {
    objects: Array<ArInsertInput>;
    on_conflict?: Maybe<ArOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertArM2mAnimationsArgs = {
    objects: Array<ArM2mAnimationsInsertInput>;
    on_conflict?: Maybe<ArM2mAnimationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertArM2mAnimationsOneArgs = {
    object: ArM2mAnimationsInsertInput;
    on_conflict?: Maybe<ArM2mAnimationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertArOneArgs = {
    object: ArInsertInput;
    on_conflict?: Maybe<ArOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertArPlayedArgs = {
    objects: Array<ArPlayedInsertInput>;
    on_conflict?: Maybe<ArPlayedOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertArPlayedOneArgs = {
    object: ArPlayedInsertInput;
    on_conflict?: Maybe<ArPlayedOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertArTrackerPositionsArgs = {
    objects: Array<ArTrackerPositionsInsertInput>;
    on_conflict?: Maybe<ArTrackerPositionsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertArTrackerPositionsOneArgs = {
    object: ArTrackerPositionsInsertInput;
    on_conflict?: Maybe<ArTrackerPositionsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertArTrackersArgs = {
    objects: Array<ArTrackersInsertInput>;
    on_conflict?: Maybe<ArTrackersOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertArTrackersOneArgs = {
    object: ArTrackersInsertInput;
    on_conflict?: Maybe<ArTrackersOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertAssetsArgs = {
    objects: Array<AssetsInsertInput>;
    on_conflict?: Maybe<AssetsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertAssetsOneArgs = {
    object: AssetsInsertInput;
    on_conflict?: Maybe<AssetsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertAssetsTypesArgs = {
    objects: Array<AssetsTypesInsertInput>;
    on_conflict?: Maybe<AssetsTypesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertAssetsTypesOneArgs = {
    object: AssetsTypesInsertInput;
    on_conflict?: Maybe<AssetsTypesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertClientsArgs = {
    objects: Array<ClientsInsertInput>;
    on_conflict?: Maybe<ClientsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertClientsOneArgs = {
    object: ClientsInsertInput;
    on_conflict?: Maybe<ClientsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertClientsPasswordForgottenTokensArgs = {
    objects: Array<ClientsPasswordForgottenTokensInsertInput>;
    on_conflict?: Maybe<ClientsPasswordForgottenTokensOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertClientsPasswordForgottenTokensOneArgs = {
    object: ClientsPasswordForgottenTokensInsertInput;
    on_conflict?: Maybe<ClientsPasswordForgottenTokensOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertClientsRolesArgs = {
    objects: Array<ClientsRolesInsertInput>;
    on_conflict?: Maybe<ClientsRolesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertClientsRolesOneArgs = {
    object: ClientsRolesInsertInput;
    on_conflict?: Maybe<ClientsRolesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertCommunicationsArgs = {
    objects: Array<CommunicationsInsertInput>;
    on_conflict?: Maybe<CommunicationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertCommunicationsOneArgs = {
    object: CommunicationsInsertInput;
    on_conflict?: Maybe<CommunicationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertCommunicationsTypesArgs = {
    objects: Array<CommunicationsTypesInsertInput>;
    on_conflict?: Maybe<CommunicationsTypesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertCommunicationsTypesOneArgs = {
    object: CommunicationsTypesInsertInput;
    on_conflict?: Maybe<CommunicationsTypesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertEstimatesArgs = {
    objects: Array<EstimatesInsertInput>;
    on_conflict?: Maybe<EstimatesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertEstimatesM2mEntitiesArgs = {
    objects: Array<EstimatesM2mEntitiesInsertInput>;
    on_conflict?: Maybe<EstimatesM2mEntitiesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertEstimatesM2mEntitiesOneArgs = {
    object: EstimatesM2mEntitiesInsertInput;
    on_conflict?: Maybe<EstimatesM2mEntitiesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertEstimatesOneArgs = {
    object: EstimatesInsertInput;
    on_conflict?: Maybe<EstimatesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertEstimatesStatusArgs = {
    objects: Array<EstimatesStatusInsertInput>;
    on_conflict?: Maybe<EstimatesStatusOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertEstimatesStatusOneArgs = {
    object: EstimatesStatusInsertInput;
    on_conflict?: Maybe<EstimatesStatusOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGainsArgs = {
    objects: Array<GainsInsertInput>;
    on_conflict?: Maybe<GainsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGainsOneArgs = {
    object: GainsInsertInput;
    on_conflict?: Maybe<GainsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGainsVirtualsArgs = {
    objects: Array<GainsVirtualsInsertInput>;
    on_conflict?: Maybe<GainsVirtualsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGainsVirtualsFormatsArgs = {
    objects: Array<GainsVirtualsFormatsInsertInput>;
    on_conflict?: Maybe<GainsVirtualsFormatsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGainsVirtualsFormatsOneArgs = {
    object: GainsVirtualsFormatsInsertInput;
    on_conflict?: Maybe<GainsVirtualsFormatsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGainsVirtualsOneArgs = {
    object: GainsVirtualsInsertInput;
    on_conflict?: Maybe<GainsVirtualsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGainsVirtualsTypesArgs = {
    objects: Array<GainsVirtualsTypesInsertInput>;
    on_conflict?: Maybe<GainsVirtualsTypesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGainsVirtualsTypesOneArgs = {
    object: GainsVirtualsTypesInsertInput;
    on_conflict?: Maybe<GainsVirtualsTypesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesArgs = {
    objects: Array<GamesInsertInput>;
    on_conflict?: Maybe<GamesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesFrequenciesArgs = {
    objects: Array<GamesFrequenciesInsertInput>;
    on_conflict?: Maybe<GamesFrequenciesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesFrequenciesOneArgs = {
    object: GamesFrequenciesInsertInput;
    on_conflict?: Maybe<GamesFrequenciesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesGainsArgs = {
    objects: Array<GamesGainsInsertInput>;
    on_conflict?: Maybe<GamesGainsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesGainsOneArgs = {
    object: GamesGainsInsertInput;
    on_conflict?: Maybe<GamesGainsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesOneArgs = {
    object: GamesInsertInput;
    on_conflict?: Maybe<GamesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesPlayedArgs = {
    objects: Array<GamesPlayedInsertInput>;
    on_conflict?: Maybe<GamesPlayedOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesPlayedOneArgs = {
    object: GamesPlayedInsertInput;
    on_conflict?: Maybe<GamesPlayedOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesPricesArgs = {
    objects: Array<GamesPricesInsertInput>;
    on_conflict?: Maybe<GamesPricesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesPricesOneArgs = {
    object: GamesPricesInsertInput;
    on_conflict?: Maybe<GamesPricesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesPricesTypesArgs = {
    objects: Array<GamesPricesTypesInsertInput>;
    on_conflict?: Maybe<GamesPricesTypesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesPricesTypesOneArgs = {
    object: GamesPricesTypesInsertInput;
    on_conflict?: Maybe<GamesPricesTypesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesTypesArgs = {
    objects: Array<GamesTypesInsertInput>;
    on_conflict?: Maybe<GamesTypesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesTypesOneArgs = {
    object: GamesTypesInsertInput;
    on_conflict?: Maybe<GamesTypesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesValorizationsArgs = {
    objects: Array<GamesValorizationsInsertInput>;
    on_conflict?: Maybe<GamesValorizationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGamesValorizationsOneArgs = {
    object: GamesValorizationsInsertInput;
    on_conflict?: Maybe<GamesValorizationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGoodiesArgs = {
    objects: Array<GoodiesInsertInput>;
    on_conflict?: Maybe<GoodiesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGoodiesM2mAnimationsArgs = {
    objects: Array<GoodiesM2mAnimationsInsertInput>;
    on_conflict?: Maybe<GoodiesM2mAnimationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGoodiesM2mAnimationsOneArgs = {
    object: GoodiesM2mAnimationsInsertInput;
    on_conflict?: Maybe<GoodiesM2mAnimationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGoodiesOneArgs = {
    object: GoodiesInsertInput;
    on_conflict?: Maybe<GoodiesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGoodiesPlayedArgs = {
    objects: Array<GoodiesPlayedInsertInput>;
    on_conflict?: Maybe<GoodiesPlayedOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertGoodiesPlayedOneArgs = {
    object: GoodiesPlayedInsertInput;
    on_conflict?: Maybe<GoodiesPlayedOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertInfosArgs = {
    objects: Array<InfosInsertInput>;
    on_conflict?: Maybe<InfosOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertInfosOneArgs = {
    object: InfosInsertInput;
    on_conflict?: Maybe<InfosOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertNearbyCommunicationsArgs = {
    objects: Array<NearbyCommunicationsInsertInput>;
    on_conflict?: Maybe<NearbyCommunicationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertNearbyCommunicationsOneArgs = {
    object: NearbyCommunicationsInsertInput;
    on_conflict?: Maybe<NearbyCommunicationsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertNearbyGamesArgs = {
    objects: Array<NearbyGamesInsertInput>;
    on_conflict?: Maybe<NearbyGamesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertNearbyGamesOneArgs = {
    object: NearbyGamesInsertInput;
    on_conflict?: Maybe<NearbyGamesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertPhotosArgs = {
    objects: Array<PhotosInsertInput>;
    on_conflict?: Maybe<PhotosOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertPhotosOneArgs = {
    object: PhotosInsertInput;
    on_conflict?: Maybe<PhotosOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertPrivatesDecksArgs = {
    objects: Array<PrivatesDecksInsertInput>;
    on_conflict?: Maybe<PrivatesDecksOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertPrivatesDecksM2mEntitiesArgs = {
    objects: Array<PrivatesDecksM2mEntitiesInsertInput>;
    on_conflict?: Maybe<PrivatesDecksM2mEntitiesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertPrivatesDecksM2mEntitiesOneArgs = {
    object: PrivatesDecksM2mEntitiesInsertInput;
    on_conflict?: Maybe<PrivatesDecksM2mEntitiesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertPrivatesDecksM2mUsersArgs = {
    objects: Array<PrivatesDecksM2mUsersInsertInput>;
    on_conflict?: Maybe<PrivatesDecksM2mUsersOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertPrivatesDecksM2mUsersOneArgs = {
    object: PrivatesDecksM2mUsersInsertInput;
    on_conflict?: Maybe<PrivatesDecksM2mUsersOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertPrivatesDecksOneArgs = {
    object: PrivatesDecksInsertInput;
    on_conflict?: Maybe<PrivatesDecksOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertQuizzArgs = {
    objects: Array<QuizzInsertInput>;
    on_conflict?: Maybe<QuizzOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertQuizzOneArgs = {
    object: QuizzInsertInput;
    on_conflict?: Maybe<QuizzOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertQuizzPlayedArgs = {
    objects: Array<QuizzPlayedInsertInput>;
    on_conflict?: Maybe<QuizzPlayedOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertQuizzPlayedOneArgs = {
    object: QuizzPlayedInsertInput;
    on_conflict?: Maybe<QuizzPlayedOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertQuizzQuestionsArgs = {
    objects: Array<QuizzQuestionsInsertInput>;
    on_conflict?: Maybe<QuizzQuestionsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertQuizzQuestionsAnswersArgs = {
    objects: Array<QuizzQuestionsAnswersInsertInput>;
    on_conflict?: Maybe<QuizzQuestionsAnswersOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertQuizzQuestionsAnswersOneArgs = {
    object: QuizzQuestionsAnswersInsertInput;
    on_conflict?: Maybe<QuizzQuestionsAnswersOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertQuizzQuestionsOneArgs = {
    object: QuizzQuestionsInsertInput;
    on_conflict?: Maybe<QuizzQuestionsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertRandomDrawingsArgs = {
    objects: Array<RandomDrawingsInsertInput>;
    on_conflict?: Maybe<RandomDrawingsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertRandomDrawingsOneArgs = {
    object: RandomDrawingsInsertInput;
    on_conflict?: Maybe<RandomDrawingsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertSurveysArgs = {
    objects: Array<SurveysInsertInput>;
    on_conflict?: Maybe<SurveysOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertSurveysOneArgs = {
    object: SurveysInsertInput;
    on_conflict?: Maybe<SurveysOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertSurveysQuestionsArgs = {
    objects: Array<SurveysQuestionsInsertInput>;
    on_conflict?: Maybe<SurveysQuestionsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertSurveysQuestionsAnswersArgs = {
    objects: Array<SurveysQuestionsAnswersInsertInput>;
    on_conflict?: Maybe<SurveysQuestionsAnswersOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertSurveysQuestionsAnswersOneArgs = {
    object: SurveysQuestionsAnswersInsertInput;
    on_conflict?: Maybe<SurveysQuestionsAnswersOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertSurveysQuestionsOneArgs = {
    object: SurveysQuestionsInsertInput;
    on_conflict?: Maybe<SurveysQuestionsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertTemplatesArgs = {
    objects: Array<TemplatesInsertInput>;
    on_conflict?: Maybe<TemplatesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertTemplatesOneArgs = {
    object: TemplatesInsertInput;
    on_conflict?: Maybe<TemplatesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertUsersArgs = {
    objects: Array<UsersInsertInput>;
    on_conflict?: Maybe<UsersOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertUsersOneArgs = {
    object: UsersInsertInput;
    on_conflict?: Maybe<UsersOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertVotesArgs = {
    objects: Array<VotesInsertInput>;
    on_conflict?: Maybe<VotesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertVotesOneArgs = {
    object: VotesInsertInput;
    on_conflict?: Maybe<VotesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertVotesPlayedArgs = {
    objects: Array<VotesPlayedInsertInput>;
};
/** mutation root */
export declare type MutationRootInsertVotesPlayedOneArgs = {
    object: VotesPlayedInsertInput;
};
/** mutation root */
export declare type MutationRootInsertVotesSelectionsArgs = {
    objects: Array<VotesSelectionsInsertInput>;
    on_conflict?: Maybe<VotesSelectionsOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertVotesSelectionsChoicesArgs = {
    objects: Array<VotesSelectionsChoicesInsertInput>;
    on_conflict?: Maybe<VotesSelectionsChoicesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertVotesSelectionsChoicesOneArgs = {
    object: VotesSelectionsChoicesInsertInput;
    on_conflict?: Maybe<VotesSelectionsChoicesOnConflict>;
};
/** mutation root */
export declare type MutationRootInsertVotesSelectionsOneArgs = {
    object: VotesSelectionsInsertInput;
    on_conflict?: Maybe<VotesSelectionsOnConflict>;
};
/** mutation root */
export declare type MutationRootUpdateAddressesArgs = {
    _inc?: Maybe<AddressesIncInput>;
    _set?: Maybe<AddressesSetInput>;
    where: AddressesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateAddressesByPkArgs = {
    _inc?: Maybe<AddressesIncInput>;
    _set?: Maybe<AddressesSetInput>;
    pk_columns: AddressesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateAnimationsArgs = {
    _set?: Maybe<AnimationsSetInput>;
    where: AnimationsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateAnimationsByPkArgs = {
    _set?: Maybe<AnimationsSetInput>;
    pk_columns: AnimationsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateAnimationsM2mAssetsArgs = {
    _set?: Maybe<AnimationsM2mAssetsSetInput>;
    where: AnimationsM2mAssetsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateAnimationsM2mAssetsByPkArgs = {
    _set?: Maybe<AnimationsM2mAssetsSetInput>;
    pk_columns: AnimationsM2mAssetsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateArArgs = {
    _append?: Maybe<ArAppendInput>;
    _delete_at_path?: Maybe<ArDeleteAtPathInput>;
    _delete_elem?: Maybe<ArDeleteElemInput>;
    _delete_key?: Maybe<ArDeleteKeyInput>;
    _inc?: Maybe<ArIncInput>;
    _prepend?: Maybe<ArPrependInput>;
    _set?: Maybe<ArSetInput>;
    where: ArBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateArByPkArgs = {
    _append?: Maybe<ArAppendInput>;
    _delete_at_path?: Maybe<ArDeleteAtPathInput>;
    _delete_elem?: Maybe<ArDeleteElemInput>;
    _delete_key?: Maybe<ArDeleteKeyInput>;
    _inc?: Maybe<ArIncInput>;
    _prepend?: Maybe<ArPrependInput>;
    _set?: Maybe<ArSetInput>;
    pk_columns: ArPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateArM2mAnimationsArgs = {
    _set?: Maybe<ArM2mAnimationsSetInput>;
    where: ArM2mAnimationsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateArM2mAnimationsByPkArgs = {
    _set?: Maybe<ArM2mAnimationsSetInput>;
    pk_columns: ArM2mAnimationsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateArPlayedArgs = {
    _inc?: Maybe<ArPlayedIncInput>;
    _set?: Maybe<ArPlayedSetInput>;
    where: ArPlayedBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateArPlayedByPkArgs = {
    _inc?: Maybe<ArPlayedIncInput>;
    _set?: Maybe<ArPlayedSetInput>;
    pk_columns: ArPlayedPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateArTrackerPositionsArgs = {
    _set?: Maybe<ArTrackerPositionsSetInput>;
    where: ArTrackerPositionsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateArTrackerPositionsByPkArgs = {
    _set?: Maybe<ArTrackerPositionsSetInput>;
    pk_columns: ArTrackerPositionsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateArTrackersArgs = {
    _inc?: Maybe<ArTrackersIncInput>;
    _set?: Maybe<ArTrackersSetInput>;
    where: ArTrackersBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateArTrackersByPkArgs = {
    _inc?: Maybe<ArTrackersIncInput>;
    _set?: Maybe<ArTrackersSetInput>;
    pk_columns: ArTrackersPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateAssetsArgs = {
    _append?: Maybe<AssetsAppendInput>;
    _delete_at_path?: Maybe<AssetsDeleteAtPathInput>;
    _delete_elem?: Maybe<AssetsDeleteElemInput>;
    _delete_key?: Maybe<AssetsDeleteKeyInput>;
    _inc?: Maybe<AssetsIncInput>;
    _prepend?: Maybe<AssetsPrependInput>;
    _set?: Maybe<AssetsSetInput>;
    where: AssetsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateAssetsByPkArgs = {
    _append?: Maybe<AssetsAppendInput>;
    _delete_at_path?: Maybe<AssetsDeleteAtPathInput>;
    _delete_elem?: Maybe<AssetsDeleteElemInput>;
    _delete_key?: Maybe<AssetsDeleteKeyInput>;
    _inc?: Maybe<AssetsIncInput>;
    _prepend?: Maybe<AssetsPrependInput>;
    _set?: Maybe<AssetsSetInput>;
    pk_columns: AssetsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateAssetsTypesArgs = {
    _set?: Maybe<AssetsTypesSetInput>;
    where: AssetsTypesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateAssetsTypesByPkArgs = {
    _set?: Maybe<AssetsTypesSetInput>;
    pk_columns: AssetsTypesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateClientsArgs = {
    _inc?: Maybe<ClientsIncInput>;
    _set?: Maybe<ClientsSetInput>;
    where: ClientsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateClientsByPkArgs = {
    _inc?: Maybe<ClientsIncInput>;
    _set?: Maybe<ClientsSetInput>;
    pk_columns: ClientsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateClientsPasswordForgottenTokensArgs = {
    _set?: Maybe<ClientsPasswordForgottenTokensSetInput>;
    where: ClientsPasswordForgottenTokensBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateClientsPasswordForgottenTokensByPkArgs = {
    _set?: Maybe<ClientsPasswordForgottenTokensSetInput>;
    pk_columns: ClientsPasswordForgottenTokensPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateClientsRolesArgs = {
    _set?: Maybe<ClientsRolesSetInput>;
    where: ClientsRolesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateClientsRolesByPkArgs = {
    _set?: Maybe<ClientsRolesSetInput>;
    pk_columns: ClientsRolesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateCommunicationsArgs = {
    _append?: Maybe<CommunicationsAppendInput>;
    _delete_at_path?: Maybe<CommunicationsDeleteAtPathInput>;
    _delete_elem?: Maybe<CommunicationsDeleteElemInput>;
    _delete_key?: Maybe<CommunicationsDeleteKeyInput>;
    _prepend?: Maybe<CommunicationsPrependInput>;
    _set?: Maybe<CommunicationsSetInput>;
    where: CommunicationsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateCommunicationsByPkArgs = {
    _append?: Maybe<CommunicationsAppendInput>;
    _delete_at_path?: Maybe<CommunicationsDeleteAtPathInput>;
    _delete_elem?: Maybe<CommunicationsDeleteElemInput>;
    _delete_key?: Maybe<CommunicationsDeleteKeyInput>;
    _prepend?: Maybe<CommunicationsPrependInput>;
    _set?: Maybe<CommunicationsSetInput>;
    pk_columns: CommunicationsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateCommunicationsTypesArgs = {
    _append?: Maybe<CommunicationsTypesAppendInput>;
    _delete_at_path?: Maybe<CommunicationsTypesDeleteAtPathInput>;
    _delete_elem?: Maybe<CommunicationsTypesDeleteElemInput>;
    _delete_key?: Maybe<CommunicationsTypesDeleteKeyInput>;
    _inc?: Maybe<CommunicationsTypesIncInput>;
    _prepend?: Maybe<CommunicationsTypesPrependInput>;
    _set?: Maybe<CommunicationsTypesSetInput>;
    where: CommunicationsTypesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateCommunicationsTypesByPkArgs = {
    _append?: Maybe<CommunicationsTypesAppendInput>;
    _delete_at_path?: Maybe<CommunicationsTypesDeleteAtPathInput>;
    _delete_elem?: Maybe<CommunicationsTypesDeleteElemInput>;
    _delete_key?: Maybe<CommunicationsTypesDeleteKeyInput>;
    _inc?: Maybe<CommunicationsTypesIncInput>;
    _prepend?: Maybe<CommunicationsTypesPrependInput>;
    _set?: Maybe<CommunicationsTypesSetInput>;
    pk_columns: CommunicationsTypesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateEstimatesArgs = {
    _inc?: Maybe<EstimatesIncInput>;
    _set?: Maybe<EstimatesSetInput>;
    where: EstimatesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateEstimatesByPkArgs = {
    _inc?: Maybe<EstimatesIncInput>;
    _set?: Maybe<EstimatesSetInput>;
    pk_columns: EstimatesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateEstimatesM2mEntitiesArgs = {
    _inc?: Maybe<EstimatesM2mEntitiesIncInput>;
    _set?: Maybe<EstimatesM2mEntitiesSetInput>;
    where: EstimatesM2mEntitiesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateEstimatesM2mEntitiesByPkArgs = {
    _inc?: Maybe<EstimatesM2mEntitiesIncInput>;
    _set?: Maybe<EstimatesM2mEntitiesSetInput>;
    pk_columns: EstimatesM2mEntitiesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateEstimatesStatusArgs = {
    _set?: Maybe<EstimatesStatusSetInput>;
    where: EstimatesStatusBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateEstimatesStatusByPkArgs = {
    _set?: Maybe<EstimatesStatusSetInput>;
    pk_columns: EstimatesStatusPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGainsArgs = {
    _inc?: Maybe<GainsIncInput>;
    _set?: Maybe<GainsSetInput>;
    where: GainsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGainsByPkArgs = {
    _inc?: Maybe<GainsIncInput>;
    _set?: Maybe<GainsSetInput>;
    pk_columns: GainsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGainsVirtualsArgs = {
    _set?: Maybe<GainsVirtualsSetInput>;
    where: GainsVirtualsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGainsVirtualsByPkArgs = {
    _set?: Maybe<GainsVirtualsSetInput>;
    pk_columns: GainsVirtualsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGainsVirtualsFormatsArgs = {
    _set?: Maybe<GainsVirtualsFormatsSetInput>;
    where: GainsVirtualsFormatsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGainsVirtualsFormatsByPkArgs = {
    _set?: Maybe<GainsVirtualsFormatsSetInput>;
    pk_columns: GainsVirtualsFormatsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGainsVirtualsTypesArgs = {
    _set?: Maybe<GainsVirtualsTypesSetInput>;
    where: GainsVirtualsTypesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGainsVirtualsTypesByPkArgs = {
    _set?: Maybe<GainsVirtualsTypesSetInput>;
    pk_columns: GainsVirtualsTypesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGamesArgs = {
    _append?: Maybe<GamesAppendInput>;
    _delete_at_path?: Maybe<GamesDeleteAtPathInput>;
    _delete_elem?: Maybe<GamesDeleteElemInput>;
    _delete_key?: Maybe<GamesDeleteKeyInput>;
    _inc?: Maybe<GamesIncInput>;
    _prepend?: Maybe<GamesPrependInput>;
    _set?: Maybe<GamesSetInput>;
    where: GamesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGamesByPkArgs = {
    _append?: Maybe<GamesAppendInput>;
    _delete_at_path?: Maybe<GamesDeleteAtPathInput>;
    _delete_elem?: Maybe<GamesDeleteElemInput>;
    _delete_key?: Maybe<GamesDeleteKeyInput>;
    _inc?: Maybe<GamesIncInput>;
    _prepend?: Maybe<GamesPrependInput>;
    _set?: Maybe<GamesSetInput>;
    pk_columns: GamesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGamesFrequenciesArgs = {
    _set?: Maybe<GamesFrequenciesSetInput>;
    where: GamesFrequenciesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGamesFrequenciesByPkArgs = {
    _set?: Maybe<GamesFrequenciesSetInput>;
    pk_columns: GamesFrequenciesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGamesGainsArgs = {
    _inc?: Maybe<GamesGainsIncInput>;
    _set?: Maybe<GamesGainsSetInput>;
    where: GamesGainsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGamesGainsByPkArgs = {
    _inc?: Maybe<GamesGainsIncInput>;
    _set?: Maybe<GamesGainsSetInput>;
    pk_columns: GamesGainsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGamesPlayedArgs = {
    _inc?: Maybe<GamesPlayedIncInput>;
    _set?: Maybe<GamesPlayedSetInput>;
    where: GamesPlayedBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGamesPlayedByPkArgs = {
    _inc?: Maybe<GamesPlayedIncInput>;
    _set?: Maybe<GamesPlayedSetInput>;
    pk_columns: GamesPlayedPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGamesPricesArgs = {
    _inc?: Maybe<GamesPricesIncInput>;
    _set?: Maybe<GamesPricesSetInput>;
    where: GamesPricesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGamesPricesByPkArgs = {
    _inc?: Maybe<GamesPricesIncInput>;
    _set?: Maybe<GamesPricesSetInput>;
    pk_columns: GamesPricesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGamesPricesTypesArgs = {
    _set?: Maybe<GamesPricesTypesSetInput>;
    where: GamesPricesTypesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGamesPricesTypesByPkArgs = {
    _set?: Maybe<GamesPricesTypesSetInput>;
    pk_columns: GamesPricesTypesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGamesTypesArgs = {
    _append?: Maybe<GamesTypesAppendInput>;
    _delete_at_path?: Maybe<GamesTypesDeleteAtPathInput>;
    _delete_elem?: Maybe<GamesTypesDeleteElemInput>;
    _delete_key?: Maybe<GamesTypesDeleteKeyInput>;
    _inc?: Maybe<GamesTypesIncInput>;
    _prepend?: Maybe<GamesTypesPrependInput>;
    _set?: Maybe<GamesTypesSetInput>;
    where: GamesTypesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGamesTypesByPkArgs = {
    _append?: Maybe<GamesTypesAppendInput>;
    _delete_at_path?: Maybe<GamesTypesDeleteAtPathInput>;
    _delete_elem?: Maybe<GamesTypesDeleteElemInput>;
    _delete_key?: Maybe<GamesTypesDeleteKeyInput>;
    _inc?: Maybe<GamesTypesIncInput>;
    _prepend?: Maybe<GamesTypesPrependInput>;
    _set?: Maybe<GamesTypesSetInput>;
    pk_columns: GamesTypesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGamesValorizationsArgs = {
    _set?: Maybe<GamesValorizationsSetInput>;
    where: GamesValorizationsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGamesValorizationsByPkArgs = {
    _set?: Maybe<GamesValorizationsSetInput>;
    pk_columns: GamesValorizationsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGoodiesArgs = {
    _append?: Maybe<GoodiesAppendInput>;
    _delete_at_path?: Maybe<GoodiesDeleteAtPathInput>;
    _delete_elem?: Maybe<GoodiesDeleteElemInput>;
    _delete_key?: Maybe<GoodiesDeleteKeyInput>;
    _prepend?: Maybe<GoodiesPrependInput>;
    _set?: Maybe<GoodiesSetInput>;
    where: GoodiesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGoodiesByPkArgs = {
    _append?: Maybe<GoodiesAppendInput>;
    _delete_at_path?: Maybe<GoodiesDeleteAtPathInput>;
    _delete_elem?: Maybe<GoodiesDeleteElemInput>;
    _delete_key?: Maybe<GoodiesDeleteKeyInput>;
    _prepend?: Maybe<GoodiesPrependInput>;
    _set?: Maybe<GoodiesSetInput>;
    pk_columns: GoodiesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGoodiesM2mAnimationsArgs = {
    _set?: Maybe<GoodiesM2mAnimationsSetInput>;
    where: GoodiesM2mAnimationsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGoodiesM2mAnimationsByPkArgs = {
    _set?: Maybe<GoodiesM2mAnimationsSetInput>;
    pk_columns: GoodiesM2mAnimationsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateGoodiesPlayedArgs = {
    _set?: Maybe<GoodiesPlayedSetInput>;
    where: GoodiesPlayedBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateGoodiesPlayedByPkArgs = {
    _set?: Maybe<GoodiesPlayedSetInput>;
    pk_columns: GoodiesPlayedPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateInfosArgs = {
    _append?: Maybe<InfosAppendInput>;
    _delete_at_path?: Maybe<InfosDeleteAtPathInput>;
    _delete_elem?: Maybe<InfosDeleteElemInput>;
    _delete_key?: Maybe<InfosDeleteKeyInput>;
    _prepend?: Maybe<InfosPrependInput>;
    _set?: Maybe<InfosSetInput>;
    where: InfosBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateInfosByPkArgs = {
    _append?: Maybe<InfosAppendInput>;
    _delete_at_path?: Maybe<InfosDeleteAtPathInput>;
    _delete_elem?: Maybe<InfosDeleteElemInput>;
    _delete_key?: Maybe<InfosDeleteKeyInput>;
    _prepend?: Maybe<InfosPrependInput>;
    _set?: Maybe<InfosSetInput>;
    pk_columns: InfosPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateNearbyCommunicationsArgs = {
    _append?: Maybe<NearbyCommunicationsAppendInput>;
    _delete_at_path?: Maybe<NearbyCommunicationsDeleteAtPathInput>;
    _delete_elem?: Maybe<NearbyCommunicationsDeleteElemInput>;
    _delete_key?: Maybe<NearbyCommunicationsDeleteKeyInput>;
    _inc?: Maybe<NearbyCommunicationsIncInput>;
    _prepend?: Maybe<NearbyCommunicationsPrependInput>;
    _set?: Maybe<NearbyCommunicationsSetInput>;
    where: NearbyCommunicationsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateNearbyCommunicationsByPkArgs = {
    _append?: Maybe<NearbyCommunicationsAppendInput>;
    _delete_at_path?: Maybe<NearbyCommunicationsDeleteAtPathInput>;
    _delete_elem?: Maybe<NearbyCommunicationsDeleteElemInput>;
    _delete_key?: Maybe<NearbyCommunicationsDeleteKeyInput>;
    _inc?: Maybe<NearbyCommunicationsIncInput>;
    _prepend?: Maybe<NearbyCommunicationsPrependInput>;
    _set?: Maybe<NearbyCommunicationsSetInput>;
    pk_columns: NearbyCommunicationsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateNearbyGamesArgs = {
    _append?: Maybe<NearbyGamesAppendInput>;
    _delete_at_path?: Maybe<NearbyGamesDeleteAtPathInput>;
    _delete_elem?: Maybe<NearbyGamesDeleteElemInput>;
    _delete_key?: Maybe<NearbyGamesDeleteKeyInput>;
    _inc?: Maybe<NearbyGamesIncInput>;
    _prepend?: Maybe<NearbyGamesPrependInput>;
    _set?: Maybe<NearbyGamesSetInput>;
    where: NearbyGamesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateNearbyGamesByPkArgs = {
    _append?: Maybe<NearbyGamesAppendInput>;
    _delete_at_path?: Maybe<NearbyGamesDeleteAtPathInput>;
    _delete_elem?: Maybe<NearbyGamesDeleteElemInput>;
    _delete_key?: Maybe<NearbyGamesDeleteKeyInput>;
    _inc?: Maybe<NearbyGamesIncInput>;
    _prepend?: Maybe<NearbyGamesPrependInput>;
    _set?: Maybe<NearbyGamesSetInput>;
    pk_columns: NearbyGamesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdatePhotosArgs = {
    _append?: Maybe<PhotosAppendInput>;
    _delete_at_path?: Maybe<PhotosDeleteAtPathInput>;
    _delete_elem?: Maybe<PhotosDeleteElemInput>;
    _delete_key?: Maybe<PhotosDeleteKeyInput>;
    _prepend?: Maybe<PhotosPrependInput>;
    _set?: Maybe<PhotosSetInput>;
    where: PhotosBoolExp;
};
/** mutation root */
export declare type MutationRootUpdatePhotosByPkArgs = {
    _append?: Maybe<PhotosAppendInput>;
    _delete_at_path?: Maybe<PhotosDeleteAtPathInput>;
    _delete_elem?: Maybe<PhotosDeleteElemInput>;
    _delete_key?: Maybe<PhotosDeleteKeyInput>;
    _prepend?: Maybe<PhotosPrependInput>;
    _set?: Maybe<PhotosSetInput>;
    pk_columns: PhotosPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdatePrivatesDecksArgs = {
    _set?: Maybe<PrivatesDecksSetInput>;
    where: PrivatesDecksBoolExp;
};
/** mutation root */
export declare type MutationRootUpdatePrivatesDecksByPkArgs = {
    _set?: Maybe<PrivatesDecksSetInput>;
    pk_columns: PrivatesDecksPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdatePrivatesDecksM2mEntitiesArgs = {
    _set?: Maybe<PrivatesDecksM2mEntitiesSetInput>;
    where: PrivatesDecksM2mEntitiesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdatePrivatesDecksM2mEntitiesByPkArgs = {
    _set?: Maybe<PrivatesDecksM2mEntitiesSetInput>;
    pk_columns: PrivatesDecksM2mEntitiesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdatePrivatesDecksM2mUsersArgs = {
    _set?: Maybe<PrivatesDecksM2mUsersSetInput>;
    where: PrivatesDecksM2mUsersBoolExp;
};
/** mutation root */
export declare type MutationRootUpdatePrivatesDecksM2mUsersByPkArgs = {
    _set?: Maybe<PrivatesDecksM2mUsersSetInput>;
    pk_columns: PrivatesDecksM2mUsersPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateQuizzArgs = {
    _append?: Maybe<QuizzAppendInput>;
    _delete_at_path?: Maybe<QuizzDeleteAtPathInput>;
    _delete_elem?: Maybe<QuizzDeleteElemInput>;
    _delete_key?: Maybe<QuizzDeleteKeyInput>;
    _inc?: Maybe<QuizzIncInput>;
    _prepend?: Maybe<QuizzPrependInput>;
    _set?: Maybe<QuizzSetInput>;
    where: QuizzBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateQuizzByPkArgs = {
    _append?: Maybe<QuizzAppendInput>;
    _delete_at_path?: Maybe<QuizzDeleteAtPathInput>;
    _delete_elem?: Maybe<QuizzDeleteElemInput>;
    _delete_key?: Maybe<QuizzDeleteKeyInput>;
    _inc?: Maybe<QuizzIncInput>;
    _prepend?: Maybe<QuizzPrependInput>;
    _set?: Maybe<QuizzSetInput>;
    pk_columns: QuizzPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateQuizzPlayedArgs = {
    _inc?: Maybe<QuizzPlayedIncInput>;
    _set?: Maybe<QuizzPlayedSetInput>;
    where: QuizzPlayedBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateQuizzPlayedByPkArgs = {
    _inc?: Maybe<QuizzPlayedIncInput>;
    _set?: Maybe<QuizzPlayedSetInput>;
    pk_columns: QuizzPlayedPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateQuizzQuestionsArgs = {
    _inc?: Maybe<QuizzQuestionsIncInput>;
    _set?: Maybe<QuizzQuestionsSetInput>;
    where: QuizzQuestionsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateQuizzQuestionsAnswersArgs = {
    _inc?: Maybe<QuizzQuestionsAnswersIncInput>;
    _set?: Maybe<QuizzQuestionsAnswersSetInput>;
    where: QuizzQuestionsAnswersBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateQuizzQuestionsAnswersByPkArgs = {
    _inc?: Maybe<QuizzQuestionsAnswersIncInput>;
    _set?: Maybe<QuizzQuestionsAnswersSetInput>;
    pk_columns: QuizzQuestionsAnswersPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateQuizzQuestionsByPkArgs = {
    _inc?: Maybe<QuizzQuestionsIncInput>;
    _set?: Maybe<QuizzQuestionsSetInput>;
    pk_columns: QuizzQuestionsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateRandomDrawingsArgs = {
    _inc?: Maybe<RandomDrawingsIncInput>;
    _set?: Maybe<RandomDrawingsSetInput>;
    where: RandomDrawingsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateRandomDrawingsByPkArgs = {
    _inc?: Maybe<RandomDrawingsIncInput>;
    _set?: Maybe<RandomDrawingsSetInput>;
    pk_columns: RandomDrawingsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateSurveysArgs = {
    _append?: Maybe<SurveysAppendInput>;
    _delete_at_path?: Maybe<SurveysDeleteAtPathInput>;
    _delete_elem?: Maybe<SurveysDeleteElemInput>;
    _delete_key?: Maybe<SurveysDeleteKeyInput>;
    _prepend?: Maybe<SurveysPrependInput>;
    _set?: Maybe<SurveysSetInput>;
    where: SurveysBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateSurveysByPkArgs = {
    _append?: Maybe<SurveysAppendInput>;
    _delete_at_path?: Maybe<SurveysDeleteAtPathInput>;
    _delete_elem?: Maybe<SurveysDeleteElemInput>;
    _delete_key?: Maybe<SurveysDeleteKeyInput>;
    _prepend?: Maybe<SurveysPrependInput>;
    _set?: Maybe<SurveysSetInput>;
    pk_columns: SurveysPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateSurveysQuestionsArgs = {
    _set?: Maybe<SurveysQuestionsSetInput>;
    where: SurveysQuestionsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateSurveysQuestionsAnswersArgs = {
    _set?: Maybe<SurveysQuestionsAnswersSetInput>;
    where: SurveysQuestionsAnswersBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateSurveysQuestionsAnswersByPkArgs = {
    _set?: Maybe<SurveysQuestionsAnswersSetInput>;
    pk_columns: SurveysQuestionsAnswersPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateSurveysQuestionsByPkArgs = {
    _set?: Maybe<SurveysQuestionsSetInput>;
    pk_columns: SurveysQuestionsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateTemplatesArgs = {
    _append?: Maybe<TemplatesAppendInput>;
    _delete_at_path?: Maybe<TemplatesDeleteAtPathInput>;
    _delete_elem?: Maybe<TemplatesDeleteElemInput>;
    _delete_key?: Maybe<TemplatesDeleteKeyInput>;
    _prepend?: Maybe<TemplatesPrependInput>;
    _set?: Maybe<TemplatesSetInput>;
    where: TemplatesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateTemplatesByPkArgs = {
    _append?: Maybe<TemplatesAppendInput>;
    _delete_at_path?: Maybe<TemplatesDeleteAtPathInput>;
    _delete_elem?: Maybe<TemplatesDeleteElemInput>;
    _delete_key?: Maybe<TemplatesDeleteKeyInput>;
    _prepend?: Maybe<TemplatesPrependInput>;
    _set?: Maybe<TemplatesSetInput>;
    pk_columns: TemplatesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateUsersArgs = {
    _inc?: Maybe<UsersIncInput>;
    _set?: Maybe<UsersSetInput>;
    where: UsersBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateUsersByPkArgs = {
    _inc?: Maybe<UsersIncInput>;
    _set?: Maybe<UsersSetInput>;
    pk_columns: UsersPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateVotesArgs = {
    _append?: Maybe<VotesAppendInput>;
    _delete_at_path?: Maybe<VotesDeleteAtPathInput>;
    _delete_elem?: Maybe<VotesDeleteElemInput>;
    _delete_key?: Maybe<VotesDeleteKeyInput>;
    _inc?: Maybe<VotesIncInput>;
    _prepend?: Maybe<VotesPrependInput>;
    _set?: Maybe<VotesSetInput>;
    where: VotesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateVotesByPkArgs = {
    _append?: Maybe<VotesAppendInput>;
    _delete_at_path?: Maybe<VotesDeleteAtPathInput>;
    _delete_elem?: Maybe<VotesDeleteElemInput>;
    _delete_key?: Maybe<VotesDeleteKeyInput>;
    _inc?: Maybe<VotesIncInput>;
    _prepend?: Maybe<VotesPrependInput>;
    _set?: Maybe<VotesSetInput>;
    pk_columns: VotesPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateVotesPlayedArgs = {
    _append?: Maybe<VotesPlayedAppendInput>;
    _delete_at_path?: Maybe<VotesPlayedDeleteAtPathInput>;
    _delete_elem?: Maybe<VotesPlayedDeleteElemInput>;
    _delete_key?: Maybe<VotesPlayedDeleteKeyInput>;
    _inc?: Maybe<VotesPlayedIncInput>;
    _prepend?: Maybe<VotesPlayedPrependInput>;
    _set?: Maybe<VotesPlayedSetInput>;
    where: VotesPlayedBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateVotesSelectionsArgs = {
    _inc?: Maybe<VotesSelectionsIncInput>;
    _set?: Maybe<VotesSelectionsSetInput>;
    where: VotesSelectionsBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateVotesSelectionsByPkArgs = {
    _inc?: Maybe<VotesSelectionsIncInput>;
    _set?: Maybe<VotesSelectionsSetInput>;
    pk_columns: VotesSelectionsPkColumnsInput;
};
/** mutation root */
export declare type MutationRootUpdateVotesSelectionsChoicesArgs = {
    _set?: Maybe<VotesSelectionsChoicesSetInput>;
    where: VotesSelectionsChoicesBoolExp;
};
/** mutation root */
export declare type MutationRootUpdateVotesSelectionsChoicesByPkArgs = {
    _set?: Maybe<VotesSelectionsChoicesSetInput>;
    pk_columns: VotesSelectionsChoicesPkColumnsInput;
};
/** columns and relationships of "nearby_communications" */
export declare type NearbyCommunications = {
    __typename?: 'nearby_communications';
    address?: Maybe<Scalars['String']>;
    /** An object relationship */
    card_image?: Maybe<Assets>;
    /** An object relationship */
    card_image_background?: Maybe<Assets>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    distance?: Maybe<Scalars['numeric']>;
    id: Scalars['uuid'];
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    location?: Maybe<Scalars['geography']>;
    name: Scalars['String'];
    /** An object relationship */
    type: CommunicationsTypes;
    type_id: Scalars['uuid'];
    tz?: Maybe<Scalars['String']>;
};
/** columns and relationships of "nearby_communications" */
export declare type NearbyCommunicationsDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** aggregated selection of "nearby_communications" */
export declare type NearbyCommunicationsAggregate = {
    __typename?: 'nearby_communications_aggregate';
    aggregate?: Maybe<NearbyCommunicationsAggregateFields>;
    nodes: Array<NearbyCommunications>;
};
/** aggregate fields of "nearby_communications" */
export declare type NearbyCommunicationsAggregateFields = {
    __typename?: 'nearby_communications_aggregate_fields';
    avg?: Maybe<NearbyCommunicationsAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<NearbyCommunicationsMaxFields>;
    min?: Maybe<NearbyCommunicationsMinFields>;
    stddev?: Maybe<NearbyCommunicationsStddevFields>;
    stddev_pop?: Maybe<NearbyCommunicationsStddevPopFields>;
    stddev_samp?: Maybe<NearbyCommunicationsStddevSampFields>;
    sum?: Maybe<NearbyCommunicationsSumFields>;
    var_pop?: Maybe<NearbyCommunicationsVarPopFields>;
    var_samp?: Maybe<NearbyCommunicationsVarSampFields>;
    variance?: Maybe<NearbyCommunicationsVarianceFields>;
};
/** aggregate fields of "nearby_communications" */
export declare type NearbyCommunicationsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "nearby_communications" */
export declare type NearbyCommunicationsAggregateOrderBy = {
    avg?: Maybe<NearbyCommunicationsAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<NearbyCommunicationsMaxOrderBy>;
    min?: Maybe<NearbyCommunicationsMinOrderBy>;
    stddev?: Maybe<NearbyCommunicationsStddevOrderBy>;
    stddev_pop?: Maybe<NearbyCommunicationsStddevPopOrderBy>;
    stddev_samp?: Maybe<NearbyCommunicationsStddevSampOrderBy>;
    sum?: Maybe<NearbyCommunicationsSumOrderBy>;
    var_pop?: Maybe<NearbyCommunicationsVarPopOrderBy>;
    var_samp?: Maybe<NearbyCommunicationsVarSampOrderBy>;
    variance?: Maybe<NearbyCommunicationsVarianceOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type NearbyCommunicationsAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "nearby_communications" */
export declare type NearbyCommunicationsArrRelInsertInput = {
    data: Array<NearbyCommunicationsInsertInput>;
    on_conflict?: Maybe<NearbyCommunicationsOnConflict>;
};
/** aggregate avg on columns */
export declare type NearbyCommunicationsAvgFields = {
    __typename?: 'nearby_communications_avg_fields';
    distance?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "nearby_communications" */
export declare type NearbyCommunicationsAvgOrderBy = {
    distance?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "nearby_communications". All fields are combined with a logical 'AND'. */
export declare type NearbyCommunicationsBoolExp = {
    _and?: Maybe<Array<Maybe<NearbyCommunicationsBoolExp>>>;
    _not?: Maybe<NearbyCommunicationsBoolExp>;
    _or?: Maybe<Array<Maybe<NearbyCommunicationsBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    card_image?: Maybe<AssetsBoolExp>;
    card_image_background?: Maybe<AssetsBoolExp>;
    card_image_background_id?: Maybe<UuidComparisonExp>;
    card_image_id?: Maybe<UuidComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    distance?: Maybe<NumericComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_private?: Maybe<BooleanComparisonExp>;
    location?: Maybe<GeographyComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    type?: Maybe<CommunicationsTypesBoolExp>;
    type_id?: Maybe<UuidComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "nearby_communications" */
export declare enum NearbyCommunicationsConstraint {
    /** unique or primary key constraint */
    NearbyCommunicationsPkey = "nearby_communications_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type NearbyCommunicationsDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type NearbyCommunicationsDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type NearbyCommunicationsDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
};
/** input type for incrementing integer column in table "nearby_communications" */
export declare type NearbyCommunicationsIncInput = {
    distance?: Maybe<Scalars['numeric']>;
};
/** input type for inserting data into table "nearby_communications" */
export declare type NearbyCommunicationsInsertInput = {
    address?: Maybe<Scalars['String']>;
    card_image?: Maybe<AssetsObjRelInsertInput>;
    card_image_background?: Maybe<AssetsObjRelInsertInput>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    distance?: Maybe<Scalars['numeric']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    name?: Maybe<Scalars['String']>;
    type?: Maybe<CommunicationsTypesObjRelInsertInput>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type NearbyCommunicationsMaxFields = {
    __typename?: 'nearby_communications_max_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    distance?: Maybe<Scalars['numeric']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "nearby_communications" */
export declare type NearbyCommunicationsMaxOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    distance?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type NearbyCommunicationsMinFields = {
    __typename?: 'nearby_communications_min_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    distance?: Maybe<Scalars['numeric']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "nearby_communications" */
export declare type NearbyCommunicationsMinOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    distance?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** response of any mutation on the table "nearby_communications" */
export declare type NearbyCommunicationsMutationResponse = {
    __typename?: 'nearby_communications_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<NearbyCommunications>;
};
/** input type for inserting object relation for remote table "nearby_communications" */
export declare type NearbyCommunicationsObjRelInsertInput = {
    data: NearbyCommunicationsInsertInput;
    on_conflict?: Maybe<NearbyCommunicationsOnConflict>;
};
/** on conflict condition type for table "nearby_communications" */
export declare type NearbyCommunicationsOnConflict = {
    constraint: NearbyCommunicationsConstraint;
    update_columns: Array<NearbyCommunicationsUpdateColumn>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** ordering options when selecting data from "nearby_communications" */
export declare type NearbyCommunicationsOrderBy = {
    address?: Maybe<OrderBy>;
    card_image?: Maybe<AssetsOrderBy>;
    card_image_background?: Maybe<AssetsOrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    distance?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_private?: Maybe<OrderBy>;
    location?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type?: Maybe<CommunicationsTypesOrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** primary key columns input for table: "nearby_communications" */
export declare type NearbyCommunicationsPkColumnsInput = {
    id: Scalars['uuid'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type NearbyCommunicationsPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "nearby_communications" */
export declare enum NearbyCommunicationsSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Distance = "distance",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    Location = "location",
    /** column name */
    Name = "name",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz"
}
/** input type for updating data in table "nearby_communications" */
export declare type NearbyCommunicationsSetInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    distance?: Maybe<Scalars['numeric']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** aggregate stddev on columns */
export declare type NearbyCommunicationsStddevFields = {
    __typename?: 'nearby_communications_stddev_fields';
    distance?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "nearby_communications" */
export declare type NearbyCommunicationsStddevOrderBy = {
    distance?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type NearbyCommunicationsStddevPopFields = {
    __typename?: 'nearby_communications_stddev_pop_fields';
    distance?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "nearby_communications" */
export declare type NearbyCommunicationsStddevPopOrderBy = {
    distance?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type NearbyCommunicationsStddevSampFields = {
    __typename?: 'nearby_communications_stddev_samp_fields';
    distance?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "nearby_communications" */
export declare type NearbyCommunicationsStddevSampOrderBy = {
    distance?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type NearbyCommunicationsSumFields = {
    __typename?: 'nearby_communications_sum_fields';
    distance?: Maybe<Scalars['numeric']>;
};
/** order by sum() on columns of table "nearby_communications" */
export declare type NearbyCommunicationsSumOrderBy = {
    distance?: Maybe<OrderBy>;
};
/** update columns of table "nearby_communications" */
export declare enum NearbyCommunicationsUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Distance = "distance",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    Location = "location",
    /** column name */
    Name = "name",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz"
}
/** aggregate var_pop on columns */
export declare type NearbyCommunicationsVarPopFields = {
    __typename?: 'nearby_communications_var_pop_fields';
    distance?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "nearby_communications" */
export declare type NearbyCommunicationsVarPopOrderBy = {
    distance?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type NearbyCommunicationsVarSampFields = {
    __typename?: 'nearby_communications_var_samp_fields';
    distance?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "nearby_communications" */
export declare type NearbyCommunicationsVarSampOrderBy = {
    distance?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type NearbyCommunicationsVarianceFields = {
    __typename?: 'nearby_communications_variance_fields';
    distance?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "nearby_communications" */
export declare type NearbyCommunicationsVarianceOrderBy = {
    distance?: Maybe<OrderBy>;
};
/** columns and relationships of "nearby_games" */
export declare type NearbyGames = {
    __typename?: 'nearby_games';
    address?: Maybe<Scalars['String']>;
    /** An object relationship */
    card_image?: Maybe<Assets>;
    /** An object relationship */
    card_image_background?: Maybe<Assets>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    distance?: Maybe<Scalars['numeric']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    /** An array relationship */
    games_gains: Array<GamesGains>;
    /** An aggregated array relationship */
    games_gains_aggregate: GamesGainsAggregate;
    /** An array relationship */
    games_played: Array<GamesPlayed>;
    /** An aggregated array relationship */
    games_played_aggregate: GamesPlayedAggregate;
    gtc?: Maybe<Scalars['String']>;
    id: Scalars['uuid'];
    instructions?: Maybe<Scalars['String']>;
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    is_test: Scalars['Boolean'];
    keep_cumulated_probability: Scalars['Boolean'];
    location?: Maybe<Scalars['geography']>;
    max_participations: Scalars['Int'];
    name: Scalars['String'];
    radius?: Maybe<Scalars['Int']>;
    /** An object relationship */
    type: GamesTypes;
    type_id: Scalars['uuid'];
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    with_instant_gains: Scalars['Boolean'];
    with_magic_random_drawings: Scalars['Boolean'];
    with_random_drawings: Scalars['Boolean'];
};
/** columns and relationships of "nearby_games" */
export declare type NearbyGamesDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "nearby_games" */
export declare type NearbyGamesGamesGainsArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "nearby_games" */
export declare type NearbyGamesGamesGainsAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "nearby_games" */
export declare type NearbyGamesGamesPlayedArgs = {
    distinct_on?: Maybe<Array<GamesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedOrderBy>>;
    where?: Maybe<GamesPlayedBoolExp>;
};
/** columns and relationships of "nearby_games" */
export declare type NearbyGamesGamesPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedOrderBy>>;
    where?: Maybe<GamesPlayedBoolExp>;
};
/** aggregated selection of "nearby_games" */
export declare type NearbyGamesAggregate = {
    __typename?: 'nearby_games_aggregate';
    aggregate?: Maybe<NearbyGamesAggregateFields>;
    nodes: Array<NearbyGames>;
};
/** aggregate fields of "nearby_games" */
export declare type NearbyGamesAggregateFields = {
    __typename?: 'nearby_games_aggregate_fields';
    avg?: Maybe<NearbyGamesAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<NearbyGamesMaxFields>;
    min?: Maybe<NearbyGamesMinFields>;
    stddev?: Maybe<NearbyGamesStddevFields>;
    stddev_pop?: Maybe<NearbyGamesStddevPopFields>;
    stddev_samp?: Maybe<NearbyGamesStddevSampFields>;
    sum?: Maybe<NearbyGamesSumFields>;
    var_pop?: Maybe<NearbyGamesVarPopFields>;
    var_samp?: Maybe<NearbyGamesVarSampFields>;
    variance?: Maybe<NearbyGamesVarianceFields>;
};
/** aggregate fields of "nearby_games" */
export declare type NearbyGamesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<NearbyGamesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "nearby_games" */
export declare type NearbyGamesAggregateOrderBy = {
    avg?: Maybe<NearbyGamesAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<NearbyGamesMaxOrderBy>;
    min?: Maybe<NearbyGamesMinOrderBy>;
    stddev?: Maybe<NearbyGamesStddevOrderBy>;
    stddev_pop?: Maybe<NearbyGamesStddevPopOrderBy>;
    stddev_samp?: Maybe<NearbyGamesStddevSampOrderBy>;
    sum?: Maybe<NearbyGamesSumOrderBy>;
    var_pop?: Maybe<NearbyGamesVarPopOrderBy>;
    var_samp?: Maybe<NearbyGamesVarSampOrderBy>;
    variance?: Maybe<NearbyGamesVarianceOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type NearbyGamesAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "nearby_games" */
export declare type NearbyGamesArrRelInsertInput = {
    data: Array<NearbyGamesInsertInput>;
    on_conflict?: Maybe<NearbyGamesOnConflict>;
};
/** aggregate avg on columns */
export declare type NearbyGamesAvgFields = {
    __typename?: 'nearby_games_avg_fields';
    distance?: Maybe<Scalars['Float']>;
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "nearby_games" */
export declare type NearbyGamesAvgOrderBy = {
    distance?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "nearby_games". All fields are combined with a logical 'AND'. */
export declare type NearbyGamesBoolExp = {
    _and?: Maybe<Array<Maybe<NearbyGamesBoolExp>>>;
    _not?: Maybe<NearbyGamesBoolExp>;
    _or?: Maybe<Array<Maybe<NearbyGamesBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    card_image?: Maybe<AssetsBoolExp>;
    card_image_background?: Maybe<AssetsBoolExp>;
    card_image_background_id?: Maybe<UuidComparisonExp>;
    card_image_id?: Maybe<UuidComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    distance?: Maybe<NumericComparisonExp>;
    frequency?: Maybe<GamesFrequenciesEnumComparisonExp>;
    games_gains?: Maybe<GamesGainsBoolExp>;
    games_played?: Maybe<GamesPlayedBoolExp>;
    gtc?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    instructions?: Maybe<StringComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_private?: Maybe<BooleanComparisonExp>;
    is_test?: Maybe<BooleanComparisonExp>;
    keep_cumulated_probability?: Maybe<BooleanComparisonExp>;
    location?: Maybe<GeographyComparisonExp>;
    max_participations?: Maybe<IntComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    radius?: Maybe<IntComparisonExp>;
    type?: Maybe<GamesTypesBoolExp>;
    type_id?: Maybe<UuidComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
    valorization?: Maybe<GamesValorizationsEnumComparisonExp>;
    with_instant_gains?: Maybe<BooleanComparisonExp>;
    with_magic_random_drawings?: Maybe<BooleanComparisonExp>;
    with_random_drawings?: Maybe<BooleanComparisonExp>;
};
/** unique or primary key constraints on table "nearby_games" */
export declare enum NearbyGamesConstraint {
    /** unique or primary key constraint */
    NearbyGamesPkey = "nearby_games_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type NearbyGamesDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type NearbyGamesDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type NearbyGamesDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
};
/** input type for incrementing integer column in table "nearby_games" */
export declare type NearbyGamesIncInput = {
    distance?: Maybe<Scalars['numeric']>;
    max_participations?: Maybe<Scalars['Int']>;
    radius?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "nearby_games" */
export declare type NearbyGamesInsertInput = {
    address?: Maybe<Scalars['String']>;
    card_image?: Maybe<AssetsObjRelInsertInput>;
    card_image_background?: Maybe<AssetsObjRelInsertInput>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    distance?: Maybe<Scalars['numeric']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    games_gains?: Maybe<GamesGainsArrRelInsertInput>;
    games_played?: Maybe<GamesPlayedArrRelInsertInput>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    keep_cumulated_probability?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type?: Maybe<GamesTypesObjRelInsertInput>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    with_instant_gains?: Maybe<Scalars['Boolean']>;
    with_magic_random_drawings?: Maybe<Scalars['Boolean']>;
    with_random_drawings?: Maybe<Scalars['Boolean']>;
};
/** aggregate max on columns */
export declare type NearbyGamesMaxFields = {
    __typename?: 'nearby_games_max_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    distance?: Maybe<Scalars['numeric']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "nearby_games" */
export declare type NearbyGamesMaxOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    distance?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type NearbyGamesMinFields = {
    __typename?: 'nearby_games_min_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    distance?: Maybe<Scalars['numeric']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "nearby_games" */
export declare type NearbyGamesMinOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    distance?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** response of any mutation on the table "nearby_games" */
export declare type NearbyGamesMutationResponse = {
    __typename?: 'nearby_games_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<NearbyGames>;
};
/** input type for inserting object relation for remote table "nearby_games" */
export declare type NearbyGamesObjRelInsertInput = {
    data: NearbyGamesInsertInput;
    on_conflict?: Maybe<NearbyGamesOnConflict>;
};
/** on conflict condition type for table "nearby_games" */
export declare type NearbyGamesOnConflict = {
    constraint: NearbyGamesConstraint;
    update_columns: Array<NearbyGamesUpdateColumn>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** ordering options when selecting data from "nearby_games" */
export declare type NearbyGamesOrderBy = {
    address?: Maybe<OrderBy>;
    card_image?: Maybe<AssetsOrderBy>;
    card_image_background?: Maybe<AssetsOrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    distance?: Maybe<OrderBy>;
    frequency?: Maybe<OrderBy>;
    games_gains_aggregate?: Maybe<GamesGainsAggregateOrderBy>;
    games_played_aggregate?: Maybe<GamesPlayedAggregateOrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_private?: Maybe<OrderBy>;
    is_test?: Maybe<OrderBy>;
    keep_cumulated_probability?: Maybe<OrderBy>;
    location?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type?: Maybe<GamesTypesOrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
    valorization?: Maybe<OrderBy>;
    with_instant_gains?: Maybe<OrderBy>;
    with_magic_random_drawings?: Maybe<OrderBy>;
    with_random_drawings?: Maybe<OrderBy>;
};
/** primary key columns input for table: "nearby_games" */
export declare type NearbyGamesPkColumnsInput = {
    id: Scalars['uuid'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type NearbyGamesPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "nearby_games" */
export declare enum NearbyGamesSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Distance = "distance",
    /** column name */
    Frequency = "frequency",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    IsTest = "is_test",
    /** column name */
    KeepCumulatedProbability = "keep_cumulated_probability",
    /** column name */
    Location = "location",
    /** column name */
    MaxParticipations = "max_participations",
    /** column name */
    Name = "name",
    /** column name */
    Radius = "radius",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz",
    /** column name */
    Valorization = "valorization",
    /** column name */
    WithInstantGains = "with_instant_gains",
    /** column name */
    WithMagicRandomDrawings = "with_magic_random_drawings",
    /** column name */
    WithRandomDrawings = "with_random_drawings"
}
/** input type for updating data in table "nearby_games" */
export declare type NearbyGamesSetInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    distance?: Maybe<Scalars['numeric']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    keep_cumulated_probability?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    with_instant_gains?: Maybe<Scalars['Boolean']>;
    with_magic_random_drawings?: Maybe<Scalars['Boolean']>;
    with_random_drawings?: Maybe<Scalars['Boolean']>;
};
/** aggregate stddev on columns */
export declare type NearbyGamesStddevFields = {
    __typename?: 'nearby_games_stddev_fields';
    distance?: Maybe<Scalars['Float']>;
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "nearby_games" */
export declare type NearbyGamesStddevOrderBy = {
    distance?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type NearbyGamesStddevPopFields = {
    __typename?: 'nearby_games_stddev_pop_fields';
    distance?: Maybe<Scalars['Float']>;
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "nearby_games" */
export declare type NearbyGamesStddevPopOrderBy = {
    distance?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type NearbyGamesStddevSampFields = {
    __typename?: 'nearby_games_stddev_samp_fields';
    distance?: Maybe<Scalars['Float']>;
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "nearby_games" */
export declare type NearbyGamesStddevSampOrderBy = {
    distance?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type NearbyGamesSumFields = {
    __typename?: 'nearby_games_sum_fields';
    distance?: Maybe<Scalars['numeric']>;
    max_participations?: Maybe<Scalars['Int']>;
    radius?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "nearby_games" */
export declare type NearbyGamesSumOrderBy = {
    distance?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** update columns of table "nearby_games" */
export declare enum NearbyGamesUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Distance = "distance",
    /** column name */
    Frequency = "frequency",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    IsTest = "is_test",
    /** column name */
    KeepCumulatedProbability = "keep_cumulated_probability",
    /** column name */
    Location = "location",
    /** column name */
    MaxParticipations = "max_participations",
    /** column name */
    Name = "name",
    /** column name */
    Radius = "radius",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz",
    /** column name */
    Valorization = "valorization",
    /** column name */
    WithInstantGains = "with_instant_gains",
    /** column name */
    WithMagicRandomDrawings = "with_magic_random_drawings",
    /** column name */
    WithRandomDrawings = "with_random_drawings"
}
/** aggregate var_pop on columns */
export declare type NearbyGamesVarPopFields = {
    __typename?: 'nearby_games_var_pop_fields';
    distance?: Maybe<Scalars['Float']>;
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "nearby_games" */
export declare type NearbyGamesVarPopOrderBy = {
    distance?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type NearbyGamesVarSampFields = {
    __typename?: 'nearby_games_var_samp_fields';
    distance?: Maybe<Scalars['Float']>;
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "nearby_games" */
export declare type NearbyGamesVarSampOrderBy = {
    distance?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type NearbyGamesVarianceFields = {
    __typename?: 'nearby_games_variance_fields';
    distance?: Maybe<Scalars['Float']>;
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "nearby_games" */
export declare type NearbyGamesVarianceOrderBy = {
    distance?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export declare type NumericComparisonExp = {
    _eq?: Maybe<Scalars['numeric']>;
    _gt?: Maybe<Scalars['numeric']>;
    _gte?: Maybe<Scalars['numeric']>;
    _in?: Maybe<Array<Scalars['numeric']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['numeric']>;
    _lte?: Maybe<Scalars['numeric']>;
    _neq?: Maybe<Scalars['numeric']>;
    _nin?: Maybe<Array<Scalars['numeric']>>;
};
/** column ordering options */
export declare enum OrderBy {
    /** in the ascending order, nulls last */
    Asc = "asc",
    /** in the ascending order, nulls first */
    AscNullsFirst = "asc_nulls_first",
    /** in the ascending order, nulls last */
    AscNullsLast = "asc_nulls_last",
    /** in the descending order, nulls first */
    Desc = "desc",
    /** in the descending order, nulls first */
    DescNullsFirst = "desc_nulls_first",
    /** in the descending order, nulls last */
    DescNullsLast = "desc_nulls_last"
}
/** columns and relationships of "photos" */
export declare type Photos = {
    __typename?: 'photos';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client?: Maybe<Clients>;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    /** An object relationship */
    foreground?: Maybe<Assets>;
    foreground_id?: Maybe<Scalars['uuid']>;
    id: Scalars['uuid'];
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    location?: Maybe<Scalars['geography']>;
    name: Scalars['String'];
    /** An object relationship */
    type?: Maybe<CommunicationsTypes>;
    type_id: Scalars['uuid'];
    tz?: Maybe<Scalars['String']>;
};
/** columns and relationships of "photos" */
export declare type PhotosDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** aggregated selection of "photos" */
export declare type PhotosAggregate = {
    __typename?: 'photos_aggregate';
    aggregate?: Maybe<PhotosAggregateFields>;
    nodes: Array<Photos>;
};
/** aggregate fields of "photos" */
export declare type PhotosAggregateFields = {
    __typename?: 'photos_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<PhotosMaxFields>;
    min?: Maybe<PhotosMinFields>;
};
/** aggregate fields of "photos" */
export declare type PhotosAggregateFieldsCountArgs = {
    columns?: Maybe<Array<PhotosSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "photos" */
export declare type PhotosAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<PhotosMaxOrderBy>;
    min?: Maybe<PhotosMinOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type PhotosAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "photos" */
export declare type PhotosArrRelInsertInput = {
    data: Array<PhotosInsertInput>;
    on_conflict?: Maybe<PhotosOnConflict>;
};
/** Boolean expression to filter rows from the table "photos". All fields are combined with a logical 'AND'. */
export declare type PhotosBoolExp = {
    _and?: Maybe<Array<Maybe<PhotosBoolExp>>>;
    _not?: Maybe<PhotosBoolExp>;
    _or?: Maybe<Array<Maybe<PhotosBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    card_image_background_id?: Maybe<UuidComparisonExp>;
    card_image_id?: Maybe<UuidComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    foreground?: Maybe<AssetsBoolExp>;
    foreground_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_private?: Maybe<BooleanComparisonExp>;
    location?: Maybe<GeographyComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    type?: Maybe<CommunicationsTypesBoolExp>;
    type_id?: Maybe<UuidComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "photos" */
export declare enum PhotosConstraint {
    /** unique or primary key constraint */
    PhotosIdKey = "photos_id_key",
    /** unique or primary key constraint */
    PhotosPkey = "photos_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type PhotosDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type PhotosDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type PhotosDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
};
/** input type for inserting data into table "photos" */
export declare type PhotosInsertInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    foreground?: Maybe<AssetsObjRelInsertInput>;
    foreground_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    name?: Maybe<Scalars['String']>;
    type?: Maybe<CommunicationsTypesObjRelInsertInput>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type PhotosMaxFields = {
    __typename?: 'photos_max_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    foreground_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "photos" */
export declare type PhotosMaxOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    foreground_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type PhotosMinFields = {
    __typename?: 'photos_min_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    foreground_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "photos" */
export declare type PhotosMinOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    foreground_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** response of any mutation on the table "photos" */
export declare type PhotosMutationResponse = {
    __typename?: 'photos_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Photos>;
};
/** input type for inserting object relation for remote table "photos" */
export declare type PhotosObjRelInsertInput = {
    data: PhotosInsertInput;
    on_conflict?: Maybe<PhotosOnConflict>;
};
/** on conflict condition type for table "photos" */
export declare type PhotosOnConflict = {
    constraint: PhotosConstraint;
    update_columns: Array<PhotosUpdateColumn>;
    where?: Maybe<PhotosBoolExp>;
};
/** ordering options when selecting data from "photos" */
export declare type PhotosOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    foreground?: Maybe<AssetsOrderBy>;
    foreground_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_private?: Maybe<OrderBy>;
    location?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type?: Maybe<CommunicationsTypesOrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** primary key columns input for table: "photos" */
export declare type PhotosPkColumnsInput = {
    id: Scalars['uuid'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type PhotosPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "photos" */
export declare enum PhotosSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    ForegroundId = "foreground_id",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    Location = "location",
    /** column name */
    Name = "name",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz"
}
/** input type for updating data in table "photos" */
export declare type PhotosSetInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    foreground_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** update columns of table "photos" */
export declare enum PhotosUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    ForegroundId = "foreground_id",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    Location = "location",
    /** column name */
    Name = "name",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz"
}
/** columns and relationships of "privates_decks" */
export declare type PrivatesDecks = {
    __typename?: 'privates_decks';
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    code: Scalars['String'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description: Scalars['String'];
    id: Scalars['uuid'];
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    name: Scalars['String'];
    /** An array relationship */
    privates_decks_m2m_entities: Array<PrivatesDecksM2mEntities>;
    /** An aggregated array relationship */
    privates_decks_m2m_entities_aggregate: PrivatesDecksM2mEntitiesAggregate;
};
/** columns and relationships of "privates_decks" */
export declare type PrivatesDecksPrivatesDecksM2mEntitiesArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mEntitiesOrderBy>>;
    where?: Maybe<PrivatesDecksM2mEntitiesBoolExp>;
};
/** columns and relationships of "privates_decks" */
export declare type PrivatesDecksPrivatesDecksM2mEntitiesAggregateArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mEntitiesOrderBy>>;
    where?: Maybe<PrivatesDecksM2mEntitiesBoolExp>;
};
/** aggregated selection of "privates_decks" */
export declare type PrivatesDecksAggregate = {
    __typename?: 'privates_decks_aggregate';
    aggregate?: Maybe<PrivatesDecksAggregateFields>;
    nodes: Array<PrivatesDecks>;
};
/** aggregate fields of "privates_decks" */
export declare type PrivatesDecksAggregateFields = {
    __typename?: 'privates_decks_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<PrivatesDecksMaxFields>;
    min?: Maybe<PrivatesDecksMinFields>;
};
/** aggregate fields of "privates_decks" */
export declare type PrivatesDecksAggregateFieldsCountArgs = {
    columns?: Maybe<Array<PrivatesDecksSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "privates_decks" */
export declare type PrivatesDecksAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<PrivatesDecksMaxOrderBy>;
    min?: Maybe<PrivatesDecksMinOrderBy>;
};
/** input type for inserting array relation for remote table "privates_decks" */
export declare type PrivatesDecksArrRelInsertInput = {
    data: Array<PrivatesDecksInsertInput>;
    on_conflict?: Maybe<PrivatesDecksOnConflict>;
};
/** Boolean expression to filter rows from the table "privates_decks". All fields are combined with a logical 'AND'. */
export declare type PrivatesDecksBoolExp = {
    _and?: Maybe<Array<Maybe<PrivatesDecksBoolExp>>>;
    _not?: Maybe<PrivatesDecksBoolExp>;
    _or?: Maybe<Array<Maybe<PrivatesDecksBoolExp>>>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    code?: Maybe<StringComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    privates_decks_m2m_entities?: Maybe<PrivatesDecksM2mEntitiesBoolExp>;
};
/** unique or primary key constraints on table "privates_decks" */
export declare enum PrivatesDecksConstraint {
    /** unique or primary key constraint */
    PrivatesDecksClientIdCodeKey = "privates_decks_client_id_code_key",
    /** unique or primary key constraint */
    PrivatesDecksPkey = "privates_decks_pkey"
}
/** input type for inserting data into table "privates_decks" */
export declare type PrivatesDecksInsertInput = {
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    code?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    privates_decks_m2m_entities?: Maybe<PrivatesDecksM2mEntitiesArrRelInsertInput>;
};
/** columns and relationships of "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntities = {
    __typename?: 'privates_decks_m2m_entities';
    /** An object relationship */
    communication?: Maybe<Communications>;
    entity_id: Scalars['uuid'];
    /** An object relationship */
    game?: Maybe<Games>;
    private_deck: Scalars['uuid'];
    /** An object relationship */
    privates_deck: PrivatesDecks;
};
/** aggregated selection of "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesAggregate = {
    __typename?: 'privates_decks_m2m_entities_aggregate';
    aggregate?: Maybe<PrivatesDecksM2mEntitiesAggregateFields>;
    nodes: Array<PrivatesDecksM2mEntities>;
};
/** aggregate fields of "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesAggregateFields = {
    __typename?: 'privates_decks_m2m_entities_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<PrivatesDecksM2mEntitiesMaxFields>;
    min?: Maybe<PrivatesDecksM2mEntitiesMinFields>;
};
/** aggregate fields of "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<PrivatesDecksM2mEntitiesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<PrivatesDecksM2mEntitiesMaxOrderBy>;
    min?: Maybe<PrivatesDecksM2mEntitiesMinOrderBy>;
};
/** input type for inserting array relation for remote table "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesArrRelInsertInput = {
    data: Array<PrivatesDecksM2mEntitiesInsertInput>;
    on_conflict?: Maybe<PrivatesDecksM2mEntitiesOnConflict>;
};
/** Boolean expression to filter rows from the table "privates_decks_m2m_entities". All fields are combined with a logical 'AND'. */
export declare type PrivatesDecksM2mEntitiesBoolExp = {
    _and?: Maybe<Array<Maybe<PrivatesDecksM2mEntitiesBoolExp>>>;
    _not?: Maybe<PrivatesDecksM2mEntitiesBoolExp>;
    _or?: Maybe<Array<Maybe<PrivatesDecksM2mEntitiesBoolExp>>>;
    communication?: Maybe<CommunicationsBoolExp>;
    entity_id?: Maybe<UuidComparisonExp>;
    game?: Maybe<GamesBoolExp>;
    private_deck?: Maybe<UuidComparisonExp>;
    privates_deck?: Maybe<PrivatesDecksBoolExp>;
};
/** unique or primary key constraints on table "privates_decks_m2m_entities" */
export declare enum PrivatesDecksM2mEntitiesConstraint {
    /** unique or primary key constraint */
    PrivatesDecksM2mEntitiesPkey = "privates_decks_m2m_entities_pkey"
}
/** input type for inserting data into table "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesInsertInput = {
    communication?: Maybe<CommunicationsObjRelInsertInput>;
    entity_id?: Maybe<Scalars['uuid']>;
    game?: Maybe<GamesObjRelInsertInput>;
    private_deck?: Maybe<Scalars['uuid']>;
    privates_deck?: Maybe<PrivatesDecksObjRelInsertInput>;
};
/** aggregate max on columns */
export declare type PrivatesDecksM2mEntitiesMaxFields = {
    __typename?: 'privates_decks_m2m_entities_max_fields';
    entity_id?: Maybe<Scalars['uuid']>;
    private_deck?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesMaxOrderBy = {
    entity_id?: Maybe<OrderBy>;
    private_deck?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type PrivatesDecksM2mEntitiesMinFields = {
    __typename?: 'privates_decks_m2m_entities_min_fields';
    entity_id?: Maybe<Scalars['uuid']>;
    private_deck?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesMinOrderBy = {
    entity_id?: Maybe<OrderBy>;
    private_deck?: Maybe<OrderBy>;
};
/** response of any mutation on the table "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesMutationResponse = {
    __typename?: 'privates_decks_m2m_entities_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<PrivatesDecksM2mEntities>;
};
/** input type for inserting object relation for remote table "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesObjRelInsertInput = {
    data: PrivatesDecksM2mEntitiesInsertInput;
    on_conflict?: Maybe<PrivatesDecksM2mEntitiesOnConflict>;
};
/** on conflict condition type for table "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesOnConflict = {
    constraint: PrivatesDecksM2mEntitiesConstraint;
    update_columns: Array<PrivatesDecksM2mEntitiesUpdateColumn>;
    where?: Maybe<PrivatesDecksM2mEntitiesBoolExp>;
};
/** ordering options when selecting data from "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesOrderBy = {
    communication?: Maybe<CommunicationsOrderBy>;
    entity_id?: Maybe<OrderBy>;
    game?: Maybe<GamesOrderBy>;
    private_deck?: Maybe<OrderBy>;
    privates_deck?: Maybe<PrivatesDecksOrderBy>;
};
/** primary key columns input for table: "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesPkColumnsInput = {
    entity_id: Scalars['uuid'];
    private_deck: Scalars['uuid'];
};
/** select columns of table "privates_decks_m2m_entities" */
export declare enum PrivatesDecksM2mEntitiesSelectColumn {
    /** column name */
    EntityId = "entity_id",
    /** column name */
    PrivateDeck = "private_deck"
}
/** input type for updating data in table "privates_decks_m2m_entities" */
export declare type PrivatesDecksM2mEntitiesSetInput = {
    entity_id?: Maybe<Scalars['uuid']>;
    private_deck?: Maybe<Scalars['uuid']>;
};
/** update columns of table "privates_decks_m2m_entities" */
export declare enum PrivatesDecksM2mEntitiesUpdateColumn {
    /** column name */
    EntityId = "entity_id",
    /** column name */
    PrivateDeck = "private_deck"
}
/** columns and relationships of "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsers = {
    __typename?: 'privates_decks_m2m_users';
    /** An object relationship */
    private_deck: PrivatesDecks;
    private_deck_id: Scalars['uuid'];
    user_id: Scalars['uuid'];
};
/** aggregated selection of "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersAggregate = {
    __typename?: 'privates_decks_m2m_users_aggregate';
    aggregate?: Maybe<PrivatesDecksM2mUsersAggregateFields>;
    nodes: Array<PrivatesDecksM2mUsers>;
};
/** aggregate fields of "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersAggregateFields = {
    __typename?: 'privates_decks_m2m_users_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<PrivatesDecksM2mUsersMaxFields>;
    min?: Maybe<PrivatesDecksM2mUsersMinFields>;
};
/** aggregate fields of "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersAggregateFieldsCountArgs = {
    columns?: Maybe<Array<PrivatesDecksM2mUsersSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<PrivatesDecksM2mUsersMaxOrderBy>;
    min?: Maybe<PrivatesDecksM2mUsersMinOrderBy>;
};
/** input type for inserting array relation for remote table "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersArrRelInsertInput = {
    data: Array<PrivatesDecksM2mUsersInsertInput>;
    on_conflict?: Maybe<PrivatesDecksM2mUsersOnConflict>;
};
/** Boolean expression to filter rows from the table "privates_decks_m2m_users". All fields are combined with a logical 'AND'. */
export declare type PrivatesDecksM2mUsersBoolExp = {
    _and?: Maybe<Array<Maybe<PrivatesDecksM2mUsersBoolExp>>>;
    _not?: Maybe<PrivatesDecksM2mUsersBoolExp>;
    _or?: Maybe<Array<Maybe<PrivatesDecksM2mUsersBoolExp>>>;
    private_deck?: Maybe<PrivatesDecksBoolExp>;
    private_deck_id?: Maybe<UuidComparisonExp>;
    user_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "privates_decks_m2m_users" */
export declare enum PrivatesDecksM2mUsersConstraint {
    /** unique or primary key constraint */
    PrivatesDecksM2m2UsersPkey = "privates_decks_m2m2_users_pkey"
}
/** input type for inserting data into table "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersInsertInput = {
    private_deck?: Maybe<PrivatesDecksObjRelInsertInput>;
    private_deck_id?: Maybe<Scalars['uuid']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type PrivatesDecksM2mUsersMaxFields = {
    __typename?: 'privates_decks_m2m_users_max_fields';
    private_deck_id?: Maybe<Scalars['uuid']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersMaxOrderBy = {
    private_deck_id?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type PrivatesDecksM2mUsersMinFields = {
    __typename?: 'privates_decks_m2m_users_min_fields';
    private_deck_id?: Maybe<Scalars['uuid']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersMinOrderBy = {
    private_deck_id?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersMutationResponse = {
    __typename?: 'privates_decks_m2m_users_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<PrivatesDecksM2mUsers>;
};
/** input type for inserting object relation for remote table "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersObjRelInsertInput = {
    data: PrivatesDecksM2mUsersInsertInput;
    on_conflict?: Maybe<PrivatesDecksM2mUsersOnConflict>;
};
/** on conflict condition type for table "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersOnConflict = {
    constraint: PrivatesDecksM2mUsersConstraint;
    update_columns: Array<PrivatesDecksM2mUsersUpdateColumn>;
    where?: Maybe<PrivatesDecksM2mUsersBoolExp>;
};
/** ordering options when selecting data from "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersOrderBy = {
    private_deck?: Maybe<PrivatesDecksOrderBy>;
    private_deck_id?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersPkColumnsInput = {
    private_deck_id: Scalars['uuid'];
    user_id: Scalars['uuid'];
};
/** select columns of table "privates_decks_m2m_users" */
export declare enum PrivatesDecksM2mUsersSelectColumn {
    /** column name */
    PrivateDeckId = "private_deck_id",
    /** column name */
    UserId = "user_id"
}
/** input type for updating data in table "privates_decks_m2m_users" */
export declare type PrivatesDecksM2mUsersSetInput = {
    private_deck_id?: Maybe<Scalars['uuid']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** update columns of table "privates_decks_m2m_users" */
export declare enum PrivatesDecksM2mUsersUpdateColumn {
    /** column name */
    PrivateDeckId = "private_deck_id",
    /** column name */
    UserId = "user_id"
}
/** aggregate max on columns */
export declare type PrivatesDecksMaxFields = {
    __typename?: 'privates_decks_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    code?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "privates_decks" */
export declare type PrivatesDecksMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    code?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type PrivatesDecksMinFields = {
    __typename?: 'privates_decks_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    code?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "privates_decks" */
export declare type PrivatesDecksMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    code?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
};
/** response of any mutation on the table "privates_decks" */
export declare type PrivatesDecksMutationResponse = {
    __typename?: 'privates_decks_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<PrivatesDecks>;
};
/** input type for inserting object relation for remote table "privates_decks" */
export declare type PrivatesDecksObjRelInsertInput = {
    data: PrivatesDecksInsertInput;
    on_conflict?: Maybe<PrivatesDecksOnConflict>;
};
/** on conflict condition type for table "privates_decks" */
export declare type PrivatesDecksOnConflict = {
    constraint: PrivatesDecksConstraint;
    update_columns: Array<PrivatesDecksUpdateColumn>;
    where?: Maybe<PrivatesDecksBoolExp>;
};
/** ordering options when selecting data from "privates_decks" */
export declare type PrivatesDecksOrderBy = {
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    code?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    privates_decks_m2m_entities_aggregate?: Maybe<PrivatesDecksM2mEntitiesAggregateOrderBy>;
};
/** primary key columns input for table: "privates_decks" */
export declare type PrivatesDecksPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "privates_decks" */
export declare enum PrivatesDecksSelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    Code = "code",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    Name = "name"
}
/** input type for updating data in table "privates_decks" */
export declare type PrivatesDecksSetInput = {
    client_id?: Maybe<Scalars['uuid']>;
    code?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
};
/** update columns of table "privates_decks" */
export declare enum PrivatesDecksUpdateColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    Code = "code",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    Name = "name"
}
/** query root */
export declare type QueryRoot = {
    __typename?: 'query_root';
    _empty?: Maybe<Scalars['String']>;
    /** fetch data from the table: "addresses" */
    addresses: Array<Addresses>;
    /** fetch aggregated fields from the table: "addresses" */
    addresses_aggregate: AddressesAggregate;
    /** fetch data from the table: "addresses" using primary key columns */
    addresses_by_pk?: Maybe<Addresses>;
    /** fetch data from the table: "animations" */
    animations: Array<Animations>;
    /** fetch aggregated fields from the table: "animations" */
    animations_aggregate: AnimationsAggregate;
    /** fetch data from the table: "animations" using primary key columns */
    animations_by_pk?: Maybe<Animations>;
    /** fetch data from the table: "animations_m2m_assets" */
    animations_m2m_assets: Array<AnimationsM2mAssets>;
    /** fetch aggregated fields from the table: "animations_m2m_assets" */
    animations_m2m_assets_aggregate: AnimationsM2mAssetsAggregate;
    /** fetch data from the table: "animations_m2m_assets" using primary key columns */
    animations_m2m_assets_by_pk?: Maybe<AnimationsM2mAssets>;
    /** fetch data from the table: "ar" */
    ar: Array<Ar>;
    /** fetch aggregated fields from the table: "ar" */
    ar_aggregate: ArAggregate;
    /** fetch data from the table: "ar" using primary key columns */
    ar_by_pk?: Maybe<Ar>;
    /** fetch data from the table: "ar_m2m_animations" */
    ar_m2m_animations: Array<ArM2mAnimations>;
    /** fetch aggregated fields from the table: "ar_m2m_animations" */
    ar_m2m_animations_aggregate: ArM2mAnimationsAggregate;
    /** fetch data from the table: "ar_m2m_animations" using primary key columns */
    ar_m2m_animations_by_pk?: Maybe<ArM2mAnimations>;
    /** fetch data from the table: "ar_played" */
    ar_played: Array<ArPlayed>;
    /** fetch aggregated fields from the table: "ar_played" */
    ar_played_aggregate: ArPlayedAggregate;
    /** fetch data from the table: "ar_played" using primary key columns */
    ar_played_by_pk?: Maybe<ArPlayed>;
    /** fetch data from the table: "ar_tracker_positions" */
    ar_tracker_positions: Array<ArTrackerPositions>;
    /** fetch aggregated fields from the table: "ar_tracker_positions" */
    ar_tracker_positions_aggregate: ArTrackerPositionsAggregate;
    /** fetch data from the table: "ar_tracker_positions" using primary key columns */
    ar_tracker_positions_by_pk?: Maybe<ArTrackerPositions>;
    /** fetch data from the table: "ar_trackers" */
    ar_trackers: Array<ArTrackers>;
    /** fetch aggregated fields from the table: "ar_trackers" */
    ar_trackers_aggregate: ArTrackersAggregate;
    /** fetch data from the table: "ar_trackers" using primary key columns */
    ar_trackers_by_pk?: Maybe<ArTrackers>;
    /** fetch data from the table: "assets" */
    assets: Array<Assets>;
    /** fetch aggregated fields from the table: "assets" */
    assets_aggregate: AssetsAggregate;
    /** fetch data from the table: "assets" using primary key columns */
    assets_by_pk?: Maybe<Assets>;
    /** fetch data from the table: "assets_types" */
    assets_types: Array<AssetsTypes>;
    /** fetch aggregated fields from the table: "assets_types" */
    assets_types_aggregate: AssetsTypesAggregate;
    /** fetch data from the table: "assets_types" using primary key columns */
    assets_types_by_pk?: Maybe<AssetsTypes>;
    /** fetch data from the table: "clients" */
    clients: Array<Clients>;
    /** fetch aggregated fields from the table: "clients" */
    clients_aggregate: ClientsAggregate;
    /** fetch data from the table: "clients" using primary key columns */
    clients_by_pk?: Maybe<Clients>;
    /** fetch data from the table: "clients_password_forgotten_tokens" */
    clients_password_forgotten_tokens: Array<ClientsPasswordForgottenTokens>;
    /** fetch aggregated fields from the table: "clients_password_forgotten_tokens" */
    clients_password_forgotten_tokens_aggregate: ClientsPasswordForgottenTokensAggregate;
    /** fetch data from the table: "clients_password_forgotten_tokens" using primary key columns */
    clients_password_forgotten_tokens_by_pk?: Maybe<ClientsPasswordForgottenTokens>;
    /** fetch data from the table: "clients_roles" */
    clients_roles: Array<ClientsRoles>;
    /** fetch aggregated fields from the table: "clients_roles" */
    clients_roles_aggregate: ClientsRolesAggregate;
    /** fetch data from the table: "clients_roles" using primary key columns */
    clients_roles_by_pk?: Maybe<ClientsRoles>;
    /** fetch data from the table: "communications" */
    communications: Array<Communications>;
    /** fetch aggregated fields from the table: "communications" */
    communications_aggregate: CommunicationsAggregate;
    /** fetch data from the table: "communications" using primary key columns */
    communications_by_pk?: Maybe<Communications>;
    /** fetch data from the table: "communications_types" */
    communications_types: Array<CommunicationsTypes>;
    /** fetch aggregated fields from the table: "communications_types" */
    communications_types_aggregate: CommunicationsTypesAggregate;
    /** fetch data from the table: "communications_types" using primary key columns */
    communications_types_by_pk?: Maybe<CommunicationsTypes>;
    /** fetch data from the table: "estimates" */
    estimates: Array<Estimates>;
    /** fetch aggregated fields from the table: "estimates" */
    estimates_aggregate: EstimatesAggregate;
    /** fetch data from the table: "estimates" using primary key columns */
    estimates_by_pk?: Maybe<Estimates>;
    /** fetch data from the table: "estimates_m2m_entities" */
    estimates_m2m_entities: Array<EstimatesM2mEntities>;
    /** fetch aggregated fields from the table: "estimates_m2m_entities" */
    estimates_m2m_entities_aggregate: EstimatesM2mEntitiesAggregate;
    /** fetch data from the table: "estimates_m2m_entities" using primary key columns */
    estimates_m2m_entities_by_pk?: Maybe<EstimatesM2mEntities>;
    /** fetch data from the table: "estimates_status" */
    estimates_status: Array<EstimatesStatus>;
    /** fetch aggregated fields from the table: "estimates_status" */
    estimates_status_aggregate: EstimatesStatusAggregate;
    /** fetch data from the table: "estimates_status" using primary key columns */
    estimates_status_by_pk?: Maybe<EstimatesStatus>;
    /** fetch data from the table: "gains" */
    gains: Array<Gains>;
    /** fetch aggregated fields from the table: "gains" */
    gains_aggregate: GainsAggregate;
    /** fetch data from the table: "gains" using primary key columns */
    gains_by_pk?: Maybe<Gains>;
    /** fetch data from the table: "gains_virtuals" */
    gains_virtuals: Array<GainsVirtuals>;
    /** fetch aggregated fields from the table: "gains_virtuals" */
    gains_virtuals_aggregate: GainsVirtualsAggregate;
    /** fetch data from the table: "gains_virtuals" using primary key columns */
    gains_virtuals_by_pk?: Maybe<GainsVirtuals>;
    /** fetch data from the table: "gains_virtuals_formats" */
    gains_virtuals_formats: Array<GainsVirtualsFormats>;
    /** fetch aggregated fields from the table: "gains_virtuals_formats" */
    gains_virtuals_formats_aggregate: GainsVirtualsFormatsAggregate;
    /** fetch data from the table: "gains_virtuals_formats" using primary key columns */
    gains_virtuals_formats_by_pk?: Maybe<GainsVirtualsFormats>;
    /** fetch data from the table: "gains_virtuals_types" */
    gains_virtuals_types: Array<GainsVirtualsTypes>;
    /** fetch aggregated fields from the table: "gains_virtuals_types" */
    gains_virtuals_types_aggregate: GainsVirtualsTypesAggregate;
    /** fetch data from the table: "gains_virtuals_types" using primary key columns */
    gains_virtuals_types_by_pk?: Maybe<GainsVirtualsTypes>;
    /** fetch data from the table: "games" */
    games: Array<Games>;
    /** fetch aggregated fields from the table: "games" */
    games_aggregate: GamesAggregate;
    /** fetch data from the table: "games" using primary key columns */
    games_by_pk?: Maybe<Games>;
    /** fetch data from the table: "games_frequencies" */
    games_frequencies: Array<GamesFrequencies>;
    /** fetch aggregated fields from the table: "games_frequencies" */
    games_frequencies_aggregate: GamesFrequenciesAggregate;
    /** fetch data from the table: "games_frequencies" using primary key columns */
    games_frequencies_by_pk?: Maybe<GamesFrequencies>;
    /** fetch data from the table: "games_gains" */
    games_gains: Array<GamesGains>;
    /** fetch aggregated fields from the table: "games_gains" */
    games_gains_aggregate: GamesGainsAggregate;
    /** fetch data from the table: "games_gains_available" */
    games_gains_available: Array<GamesGainsAvailable>;
    /** fetch aggregated fields from the table: "games_gains_available" */
    games_gains_available_aggregate: GamesGainsAvailableAggregate;
    /** fetch data from the table: "games_gains" using primary key columns */
    games_gains_by_pk?: Maybe<GamesGains>;
    /** fetch data from the table: "games_played" */
    games_played: Array<GamesPlayed>;
    /** fetch aggregated fields from the table: "games_played" */
    games_played_aggregate: GamesPlayedAggregate;
    /** fetch data from the table: "games_played" using primary key columns */
    games_played_by_pk?: Maybe<GamesPlayed>;
    /** fetch data from the table: "games_played_gains_by_current_day_hours" */
    games_played_gains_by_current_day_hours: Array<GamesPlayedGainsByCurrentDayHours>;
    /** fetch aggregated fields from the table: "games_played_gains_by_current_day_hours" */
    games_played_gains_by_current_day_hours_aggregate: GamesPlayedGainsByCurrentDayHoursAggregate;
    /** fetch data from the table: "games_played_gains_by_day" */
    games_played_gains_by_day: Array<GamesPlayedGainsByDay>;
    /** fetch aggregated fields from the table: "games_played_gains_by_day" */
    games_played_gains_by_day_aggregate: GamesPlayedGainsByDayAggregate;
    /** fetch data from the table: "games_played_participations_by_current_day_hours" */
    games_played_participations_by_current_day_hours: Array<GamesPlayedParticipationsByCurrentDayHours>;
    /** fetch aggregated fields from the table: "games_played_participations_by_current_day_hours" */
    games_played_participations_by_current_day_hours_aggregate: GamesPlayedParticipationsByCurrentDayHoursAggregate;
    /** fetch data from the table: "games_played_participations_by_day" */
    games_played_participations_by_day: Array<GamesPlayedParticipationsByDay>;
    /** fetch aggregated fields from the table: "games_played_participations_by_day" */
    games_played_participations_by_day_aggregate: GamesPlayedParticipationsByDayAggregate;
    /** fetch data from the table: "games_prices" */
    games_prices: Array<GamesPrices>;
    /** fetch aggregated fields from the table: "games_prices" */
    games_prices_aggregate: GamesPricesAggregate;
    /** fetch data from the table: "games_prices" using primary key columns */
    games_prices_by_pk?: Maybe<GamesPrices>;
    /** fetch data from the table: "games_prices_types" */
    games_prices_types: Array<GamesPricesTypes>;
    /** fetch aggregated fields from the table: "games_prices_types" */
    games_prices_types_aggregate: GamesPricesTypesAggregate;
    /** fetch data from the table: "games_prices_types" using primary key columns */
    games_prices_types_by_pk?: Maybe<GamesPricesTypes>;
    /** fetch data from the table: "games_types" */
    games_types: Array<GamesTypes>;
    /** fetch aggregated fields from the table: "games_types" */
    games_types_aggregate: GamesTypesAggregate;
    /** fetch data from the table: "games_types" using primary key columns */
    games_types_by_pk?: Maybe<GamesTypes>;
    /** fetch data from the table: "games_valorizations" */
    games_valorizations: Array<GamesValorizations>;
    /** fetch aggregated fields from the table: "games_valorizations" */
    games_valorizations_aggregate: GamesValorizationsAggregate;
    /** fetch data from the table: "games_valorizations" using primary key columns */
    games_valorizations_by_pk?: Maybe<GamesValorizations>;
    /** execute function "get_nearby_communications" which returns "nearby_communications" */
    get_nearby_communications: Array<NearbyCommunications>;
    /** execute function "get_nearby_communications" and query aggregates on result of table type "nearby_communications" */
    get_nearby_communications_aggregate: NearbyCommunicationsAggregate;
    /** execute function "get_nearby_games" which returns "nearby_games" */
    get_nearby_games: Array<NearbyGames>;
    /** execute function "get_nearby_games" and query aggregates on result of table type "nearby_games" */
    get_nearby_games_aggregate: NearbyGamesAggregate;
    /** execute function "get_nearby_private_deck_communications" which returns "nearby_communications" */
    get_nearby_private_deck_communications: Array<NearbyCommunications>;
    /** execute function "get_nearby_private_deck_communications" and query aggregates on result of table type "nearby_communications" */
    get_nearby_private_deck_communications_aggregate: NearbyCommunicationsAggregate;
    /** execute function "get_nearby_private_deck_games" which returns "nearby_games" */
    get_nearby_private_deck_games: Array<NearbyGames>;
    /** execute function "get_nearby_private_deck_games" and query aggregates on result of table type "nearby_games" */
    get_nearby_private_deck_games_aggregate: NearbyGamesAggregate;
    get_stripe_customer_payment_methods: Array<Maybe<StripePaymentMethod>>;
    /** fetch data from the table: "goodies" */
    goodies: Array<Goodies>;
    /** fetch aggregated fields from the table: "goodies" */
    goodies_aggregate: GoodiesAggregate;
    /** fetch data from the table: "goodies" using primary key columns */
    goodies_by_pk?: Maybe<Goodies>;
    /** fetch data from the table: "goodies_m2m_animations" */
    goodies_m2m_animations: Array<GoodiesM2mAnimations>;
    /** fetch aggregated fields from the table: "goodies_m2m_animations" */
    goodies_m2m_animations_aggregate: GoodiesM2mAnimationsAggregate;
    /** fetch data from the table: "goodies_m2m_animations" using primary key columns */
    goodies_m2m_animations_by_pk?: Maybe<GoodiesM2mAnimations>;
    /** fetch data from the table: "goodies_played" */
    goodies_played: Array<GoodiesPlayed>;
    /** fetch aggregated fields from the table: "goodies_played" */
    goodies_played_aggregate: GoodiesPlayedAggregate;
    /** fetch data from the table: "goodies_played" using primary key columns */
    goodies_played_by_pk?: Maybe<GoodiesPlayed>;
    /** fetch data from the table: "infos" */
    infos: Array<Infos>;
    /** fetch aggregated fields from the table: "infos" */
    infos_aggregate: InfosAggregate;
    /** fetch data from the table: "infos" using primary key columns */
    infos_by_pk?: Maybe<Infos>;
    /** fetch data from the table: "nearby_communications" */
    nearby_communications: Array<NearbyCommunications>;
    /** fetch aggregated fields from the table: "nearby_communications" */
    nearby_communications_aggregate: NearbyCommunicationsAggregate;
    /** fetch data from the table: "nearby_communications" using primary key columns */
    nearby_communications_by_pk?: Maybe<NearbyCommunications>;
    /** fetch data from the table: "nearby_games" */
    nearby_games: Array<NearbyGames>;
    /** fetch aggregated fields from the table: "nearby_games" */
    nearby_games_aggregate: NearbyGamesAggregate;
    /** fetch data from the table: "nearby_games" using primary key columns */
    nearby_games_by_pk?: Maybe<NearbyGames>;
    /** fetch data from the table: "photos" */
    photos: Array<Photos>;
    /** fetch aggregated fields from the table: "photos" */
    photos_aggregate: PhotosAggregate;
    /** fetch data from the table: "photos" using primary key columns */
    photos_by_pk?: Maybe<Photos>;
    /** fetch data from the table: "privates_decks" */
    privates_decks: Array<PrivatesDecks>;
    /** fetch aggregated fields from the table: "privates_decks" */
    privates_decks_aggregate: PrivatesDecksAggregate;
    /** fetch data from the table: "privates_decks" using primary key columns */
    privates_decks_by_pk?: Maybe<PrivatesDecks>;
    /** fetch data from the table: "privates_decks_m2m_entities" */
    privates_decks_m2m_entities: Array<PrivatesDecksM2mEntities>;
    /** fetch aggregated fields from the table: "privates_decks_m2m_entities" */
    privates_decks_m2m_entities_aggregate: PrivatesDecksM2mEntitiesAggregate;
    /** fetch data from the table: "privates_decks_m2m_entities" using primary key columns */
    privates_decks_m2m_entities_by_pk?: Maybe<PrivatesDecksM2mEntities>;
    /** fetch data from the table: "privates_decks_m2m_users" */
    privates_decks_m2m_users: Array<PrivatesDecksM2mUsers>;
    /** fetch aggregated fields from the table: "privates_decks_m2m_users" */
    privates_decks_m2m_users_aggregate: PrivatesDecksM2mUsersAggregate;
    /** fetch data from the table: "privates_decks_m2m_users" using primary key columns */
    privates_decks_m2m_users_by_pk?: Maybe<PrivatesDecksM2mUsers>;
    /** fetch data from the table: "quizz" */
    quizz: Array<Quizz>;
    /** fetch aggregated fields from the table: "quizz" */
    quizz_aggregate: QuizzAggregate;
    /** fetch data from the table: "quizz" using primary key columns */
    quizz_by_pk?: Maybe<Quizz>;
    /** fetch data from the table: "quizz_played" */
    quizz_played: Array<QuizzPlayed>;
    /** fetch aggregated fields from the table: "quizz_played" */
    quizz_played_aggregate: QuizzPlayedAggregate;
    /** fetch data from the table: "quizz_played" using primary key columns */
    quizz_played_by_pk?: Maybe<QuizzPlayed>;
    /** fetch data from the table: "quizz_questions" */
    quizz_questions: Array<QuizzQuestions>;
    /** fetch aggregated fields from the table: "quizz_questions" */
    quizz_questions_aggregate: QuizzQuestionsAggregate;
    /** fetch data from the table: "quizz_questions_answers" */
    quizz_questions_answers: Array<QuizzQuestionsAnswers>;
    /** fetch aggregated fields from the table: "quizz_questions_answers" */
    quizz_questions_answers_aggregate: QuizzQuestionsAnswersAggregate;
    /** fetch data from the table: "quizz_questions_answers" using primary key columns */
    quizz_questions_answers_by_pk?: Maybe<QuizzQuestionsAnswers>;
    /** fetch data from the table: "quizz_questions" using primary key columns */
    quizz_questions_by_pk?: Maybe<QuizzQuestions>;
    /** fetch data from the table: "random_drawings" */
    random_drawings: Array<RandomDrawings>;
    /** fetch aggregated fields from the table: "random_drawings" */
    random_drawings_aggregate: RandomDrawingsAggregate;
    /** fetch data from the table: "random_drawings" using primary key columns */
    random_drawings_by_pk?: Maybe<RandomDrawings>;
    /** fetch data from the table: "surveys" */
    surveys: Array<Surveys>;
    /** fetch aggregated fields from the table: "surveys" */
    surveys_aggregate: SurveysAggregate;
    /** fetch data from the table: "surveys" using primary key columns */
    surveys_by_pk?: Maybe<Surveys>;
    /** fetch data from the table: "surveys_questions" */
    surveys_questions: Array<SurveysQuestions>;
    /** fetch aggregated fields from the table: "surveys_questions" */
    surveys_questions_aggregate: SurveysQuestionsAggregate;
    /** fetch data from the table: "surveys_questions_answers" */
    surveys_questions_answers: Array<SurveysQuestionsAnswers>;
    /** fetch aggregated fields from the table: "surveys_questions_answers" */
    surveys_questions_answers_aggregate: SurveysQuestionsAnswersAggregate;
    /** fetch data from the table: "surveys_questions_answers" using primary key columns */
    surveys_questions_answers_by_pk?: Maybe<SurveysQuestionsAnswers>;
    /** fetch data from the table: "surveys_questions" using primary key columns */
    surveys_questions_by_pk?: Maybe<SurveysQuestions>;
    /** fetch data from the table: "templates" */
    templates: Array<Templates>;
    /** fetch aggregated fields from the table: "templates" */
    templates_aggregate: TemplatesAggregate;
    /** fetch data from the table: "templates" using primary key columns */
    templates_by_pk?: Maybe<Templates>;
    /** fetch data from the table: "users" */
    users: Array<Users>;
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: UsersAggregate;
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: Maybe<Users>;
    /** fetch data from the table: "votes" */
    votes: Array<Votes>;
    /** fetch aggregated fields from the table: "votes" */
    votes_aggregate: VotesAggregate;
    /** fetch data from the table: "votes" using primary key columns */
    votes_by_pk?: Maybe<Votes>;
    /** fetch data from the table: "votes_played" */
    votes_played: Array<VotesPlayed>;
    /** fetch aggregated fields from the table: "votes_played" */
    votes_played_aggregate: VotesPlayedAggregate;
    /** fetch data from the table: "votes_selections" */
    votes_selections: Array<VotesSelections>;
    /** fetch aggregated fields from the table: "votes_selections" */
    votes_selections_aggregate: VotesSelectionsAggregate;
    /** fetch data from the table: "votes_selections" using primary key columns */
    votes_selections_by_pk?: Maybe<VotesSelections>;
    /** fetch data from the table: "votes_selections_choices" */
    votes_selections_choices: Array<VotesSelectionsChoices>;
    /** fetch aggregated fields from the table: "votes_selections_choices" */
    votes_selections_choices_aggregate: VotesSelectionsChoicesAggregate;
    /** fetch data from the table: "votes_selections_choices" using primary key columns */
    votes_selections_choices_by_pk?: Maybe<VotesSelectionsChoices>;
};
/** query root */
export declare type QueryRootAddressesArgs = {
    distinct_on?: Maybe<Array<AddressesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AddressesOrderBy>>;
    where?: Maybe<AddressesBoolExp>;
};
/** query root */
export declare type QueryRootAddressesAggregateArgs = {
    distinct_on?: Maybe<Array<AddressesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AddressesOrderBy>>;
    where?: Maybe<AddressesBoolExp>;
};
/** query root */
export declare type QueryRootAddressesByPkArgs = {
    id: Scalars['bigint'];
};
/** query root */
export declare type QueryRootAnimationsArgs = {
    distinct_on?: Maybe<Array<AnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AnimationsOrderBy>>;
    where?: Maybe<AnimationsBoolExp>;
};
/** query root */
export declare type QueryRootAnimationsAggregateArgs = {
    distinct_on?: Maybe<Array<AnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AnimationsOrderBy>>;
    where?: Maybe<AnimationsBoolExp>;
};
/** query root */
export declare type QueryRootAnimationsByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootAnimationsM2mAssetsArgs = {
    distinct_on?: Maybe<Array<AnimationsM2mAssetsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AnimationsM2mAssetsOrderBy>>;
    where?: Maybe<AnimationsM2mAssetsBoolExp>;
};
/** query root */
export declare type QueryRootAnimationsM2mAssetsAggregateArgs = {
    distinct_on?: Maybe<Array<AnimationsM2mAssetsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AnimationsM2mAssetsOrderBy>>;
    where?: Maybe<AnimationsM2mAssetsBoolExp>;
};
/** query root */
export declare type QueryRootAnimationsM2mAssetsByPkArgs = {
    animation_id: Scalars['uuid'];
    asset_id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootArArgs = {
    distinct_on?: Maybe<Array<ArSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArOrderBy>>;
    where?: Maybe<ArBoolExp>;
};
/** query root */
export declare type QueryRootArAggregateArgs = {
    distinct_on?: Maybe<Array<ArSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArOrderBy>>;
    where?: Maybe<ArBoolExp>;
};
/** query root */
export declare type QueryRootArByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootArM2mAnimationsArgs = {
    distinct_on?: Maybe<Array<ArM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArM2mAnimationsOrderBy>>;
    where?: Maybe<ArM2mAnimationsBoolExp>;
};
/** query root */
export declare type QueryRootArM2mAnimationsAggregateArgs = {
    distinct_on?: Maybe<Array<ArM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArM2mAnimationsOrderBy>>;
    where?: Maybe<ArM2mAnimationsBoolExp>;
};
/** query root */
export declare type QueryRootArM2mAnimationsByPkArgs = {
    animation_id: Scalars['uuid'];
    ar_id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootArPlayedArgs = {
    distinct_on?: Maybe<Array<ArPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArPlayedOrderBy>>;
    where?: Maybe<ArPlayedBoolExp>;
};
/** query root */
export declare type QueryRootArPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<ArPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArPlayedOrderBy>>;
    where?: Maybe<ArPlayedBoolExp>;
};
/** query root */
export declare type QueryRootArPlayedByPkArgs = {
    id: Scalars['bigint'];
};
/** query root */
export declare type QueryRootArTrackerPositionsArgs = {
    distinct_on?: Maybe<Array<ArTrackerPositionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArTrackerPositionsOrderBy>>;
    where?: Maybe<ArTrackerPositionsBoolExp>;
};
/** query root */
export declare type QueryRootArTrackerPositionsAggregateArgs = {
    distinct_on?: Maybe<Array<ArTrackerPositionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArTrackerPositionsOrderBy>>;
    where?: Maybe<ArTrackerPositionsBoolExp>;
};
/** query root */
export declare type QueryRootArTrackerPositionsByPkArgs = {
    position: Scalars['String'];
};
/** query root */
export declare type QueryRootArTrackersArgs = {
    distinct_on?: Maybe<Array<ArTrackersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArTrackersOrderBy>>;
    where?: Maybe<ArTrackersBoolExp>;
};
/** query root */
export declare type QueryRootArTrackersAggregateArgs = {
    distinct_on?: Maybe<Array<ArTrackersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArTrackersOrderBy>>;
    where?: Maybe<ArTrackersBoolExp>;
};
/** query root */
export declare type QueryRootArTrackersByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootAssetsArgs = {
    distinct_on?: Maybe<Array<AssetsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AssetsOrderBy>>;
    where?: Maybe<AssetsBoolExp>;
};
/** query root */
export declare type QueryRootAssetsAggregateArgs = {
    distinct_on?: Maybe<Array<AssetsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AssetsOrderBy>>;
    where?: Maybe<AssetsBoolExp>;
};
/** query root */
export declare type QueryRootAssetsByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootAssetsTypesArgs = {
    distinct_on?: Maybe<Array<AssetsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AssetsTypesOrderBy>>;
    where?: Maybe<AssetsTypesBoolExp>;
};
/** query root */
export declare type QueryRootAssetsTypesAggregateArgs = {
    distinct_on?: Maybe<Array<AssetsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AssetsTypesOrderBy>>;
    where?: Maybe<AssetsTypesBoolExp>;
};
/** query root */
export declare type QueryRootAssetsTypesByPkArgs = {
    type: Scalars['String'];
};
/** query root */
export declare type QueryRootClientsArgs = {
    distinct_on?: Maybe<Array<ClientsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsOrderBy>>;
    where?: Maybe<ClientsBoolExp>;
};
/** query root */
export declare type QueryRootClientsAggregateArgs = {
    distinct_on?: Maybe<Array<ClientsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsOrderBy>>;
    where?: Maybe<ClientsBoolExp>;
};
/** query root */
export declare type QueryRootClientsByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootClientsPasswordForgottenTokensArgs = {
    distinct_on?: Maybe<Array<ClientsPasswordForgottenTokensSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsPasswordForgottenTokensOrderBy>>;
    where?: Maybe<ClientsPasswordForgottenTokensBoolExp>;
};
/** query root */
export declare type QueryRootClientsPasswordForgottenTokensAggregateArgs = {
    distinct_on?: Maybe<Array<ClientsPasswordForgottenTokensSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsPasswordForgottenTokensOrderBy>>;
    where?: Maybe<ClientsPasswordForgottenTokensBoolExp>;
};
/** query root */
export declare type QueryRootClientsPasswordForgottenTokensByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootClientsRolesArgs = {
    distinct_on?: Maybe<Array<ClientsRolesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsRolesOrderBy>>;
    where?: Maybe<ClientsRolesBoolExp>;
};
/** query root */
export declare type QueryRootClientsRolesAggregateArgs = {
    distinct_on?: Maybe<Array<ClientsRolesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsRolesOrderBy>>;
    where?: Maybe<ClientsRolesBoolExp>;
};
/** query root */
export declare type QueryRootClientsRolesByPkArgs = {
    name: Scalars['String'];
};
/** query root */
export declare type QueryRootCommunicationsArgs = {
    distinct_on?: Maybe<Array<CommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<CommunicationsOrderBy>>;
    where?: Maybe<CommunicationsBoolExp>;
};
/** query root */
export declare type QueryRootCommunicationsAggregateArgs = {
    distinct_on?: Maybe<Array<CommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<CommunicationsOrderBy>>;
    where?: Maybe<CommunicationsBoolExp>;
};
/** query root */
export declare type QueryRootCommunicationsByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootCommunicationsTypesArgs = {
    distinct_on?: Maybe<Array<CommunicationsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<CommunicationsTypesOrderBy>>;
    where?: Maybe<CommunicationsTypesBoolExp>;
};
/** query root */
export declare type QueryRootCommunicationsTypesAggregateArgs = {
    distinct_on?: Maybe<Array<CommunicationsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<CommunicationsTypesOrderBy>>;
    where?: Maybe<CommunicationsTypesBoolExp>;
};
/** query root */
export declare type QueryRootCommunicationsTypesByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootEstimatesArgs = {
    distinct_on?: Maybe<Array<EstimatesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesOrderBy>>;
    where?: Maybe<EstimatesBoolExp>;
};
/** query root */
export declare type QueryRootEstimatesAggregateArgs = {
    distinct_on?: Maybe<Array<EstimatesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesOrderBy>>;
    where?: Maybe<EstimatesBoolExp>;
};
/** query root */
export declare type QueryRootEstimatesByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootEstimatesM2mEntitiesArgs = {
    distinct_on?: Maybe<Array<EstimatesM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesM2mEntitiesOrderBy>>;
    where?: Maybe<EstimatesM2mEntitiesBoolExp>;
};
/** query root */
export declare type QueryRootEstimatesM2mEntitiesAggregateArgs = {
    distinct_on?: Maybe<Array<EstimatesM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesM2mEntitiesOrderBy>>;
    where?: Maybe<EstimatesM2mEntitiesBoolExp>;
};
/** query root */
export declare type QueryRootEstimatesM2mEntitiesByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootEstimatesStatusArgs = {
    distinct_on?: Maybe<Array<EstimatesStatusSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesStatusOrderBy>>;
    where?: Maybe<EstimatesStatusBoolExp>;
};
/** query root */
export declare type QueryRootEstimatesStatusAggregateArgs = {
    distinct_on?: Maybe<Array<EstimatesStatusSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesStatusOrderBy>>;
    where?: Maybe<EstimatesStatusBoolExp>;
};
/** query root */
export declare type QueryRootEstimatesStatusByPkArgs = {
    value: Scalars['String'];
};
/** query root */
export declare type QueryRootGainsArgs = {
    distinct_on?: Maybe<Array<GainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsOrderBy>>;
    where?: Maybe<GainsBoolExp>;
};
/** query root */
export declare type QueryRootGainsAggregateArgs = {
    distinct_on?: Maybe<Array<GainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsOrderBy>>;
    where?: Maybe<GainsBoolExp>;
};
/** query root */
export declare type QueryRootGainsByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootGainsVirtualsArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsOrderBy>>;
    where?: Maybe<GainsVirtualsBoolExp>;
};
/** query root */
export declare type QueryRootGainsVirtualsAggregateArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsOrderBy>>;
    where?: Maybe<GainsVirtualsBoolExp>;
};
/** query root */
export declare type QueryRootGainsVirtualsByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootGainsVirtualsFormatsArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsFormatsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsFormatsOrderBy>>;
    where?: Maybe<GainsVirtualsFormatsBoolExp>;
};
/** query root */
export declare type QueryRootGainsVirtualsFormatsAggregateArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsFormatsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsFormatsOrderBy>>;
    where?: Maybe<GainsVirtualsFormatsBoolExp>;
};
/** query root */
export declare type QueryRootGainsVirtualsFormatsByPkArgs = {
    value: Scalars['String'];
};
/** query root */
export declare type QueryRootGainsVirtualsTypesArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsTypesOrderBy>>;
    where?: Maybe<GainsVirtualsTypesBoolExp>;
};
/** query root */
export declare type QueryRootGainsVirtualsTypesAggregateArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsTypesOrderBy>>;
    where?: Maybe<GainsVirtualsTypesBoolExp>;
};
/** query root */
export declare type QueryRootGainsVirtualsTypesByPkArgs = {
    value: Scalars['String'];
};
/** query root */
export declare type QueryRootGamesArgs = {
    distinct_on?: Maybe<Array<GamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesOrderBy>>;
    where?: Maybe<GamesBoolExp>;
};
/** query root */
export declare type QueryRootGamesAggregateArgs = {
    distinct_on?: Maybe<Array<GamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesOrderBy>>;
    where?: Maybe<GamesBoolExp>;
};
/** query root */
export declare type QueryRootGamesByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootGamesFrequenciesArgs = {
    distinct_on?: Maybe<Array<GamesFrequenciesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesFrequenciesOrderBy>>;
    where?: Maybe<GamesFrequenciesBoolExp>;
};
/** query root */
export declare type QueryRootGamesFrequenciesAggregateArgs = {
    distinct_on?: Maybe<Array<GamesFrequenciesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesFrequenciesOrderBy>>;
    where?: Maybe<GamesFrequenciesBoolExp>;
};
/** query root */
export declare type QueryRootGamesFrequenciesByPkArgs = {
    value: Scalars['String'];
};
/** query root */
export declare type QueryRootGamesGainsArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** query root */
export declare type QueryRootGamesGainsAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** query root */
export declare type QueryRootGamesGainsAvailableArgs = {
    distinct_on?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsAvailableOrderBy>>;
    where?: Maybe<GamesGainsAvailableBoolExp>;
};
/** query root */
export declare type QueryRootGamesGainsAvailableAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsAvailableOrderBy>>;
    where?: Maybe<GamesGainsAvailableBoolExp>;
};
/** query root */
export declare type QueryRootGamesGainsByPkArgs = {
    gain_id: Scalars['uuid'];
    game_id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootGamesPlayedArgs = {
    distinct_on?: Maybe<Array<GamesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedOrderBy>>;
    where?: Maybe<GamesPlayedBoolExp>;
};
/** query root */
export declare type QueryRootGamesPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedOrderBy>>;
    where?: Maybe<GamesPlayedBoolExp>;
};
/** query root */
export declare type QueryRootGamesPlayedByPkArgs = {
    id: Scalars['bigint'];
};
/** query root */
export declare type QueryRootGamesPlayedGainsByCurrentDayHoursArgs = {
    distinct_on?: Maybe<Array<GamesPlayedGainsByCurrentDayHoursSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedGainsByCurrentDayHoursOrderBy>>;
    where?: Maybe<GamesPlayedGainsByCurrentDayHoursBoolExp>;
};
/** query root */
export declare type QueryRootGamesPlayedGainsByCurrentDayHoursAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedGainsByCurrentDayHoursSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedGainsByCurrentDayHoursOrderBy>>;
    where?: Maybe<GamesPlayedGainsByCurrentDayHoursBoolExp>;
};
/** query root */
export declare type QueryRootGamesPlayedGainsByDayArgs = {
    distinct_on?: Maybe<Array<GamesPlayedGainsByDaySelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedGainsByDayOrderBy>>;
    where?: Maybe<GamesPlayedGainsByDayBoolExp>;
};
/** query root */
export declare type QueryRootGamesPlayedGainsByDayAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedGainsByDaySelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedGainsByDayOrderBy>>;
    where?: Maybe<GamesPlayedGainsByDayBoolExp>;
};
/** query root */
export declare type QueryRootGamesPlayedParticipationsByCurrentDayHoursArgs = {
    distinct_on?: Maybe<Array<GamesPlayedParticipationsByCurrentDayHoursSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedParticipationsByCurrentDayHoursOrderBy>>;
    where?: Maybe<GamesPlayedParticipationsByCurrentDayHoursBoolExp>;
};
/** query root */
export declare type QueryRootGamesPlayedParticipationsByCurrentDayHoursAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedParticipationsByCurrentDayHoursSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedParticipationsByCurrentDayHoursOrderBy>>;
    where?: Maybe<GamesPlayedParticipationsByCurrentDayHoursBoolExp>;
};
/** query root */
export declare type QueryRootGamesPlayedParticipationsByDayArgs = {
    distinct_on?: Maybe<Array<GamesPlayedParticipationsByDaySelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedParticipationsByDayOrderBy>>;
    where?: Maybe<GamesPlayedParticipationsByDayBoolExp>;
};
/** query root */
export declare type QueryRootGamesPlayedParticipationsByDayAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedParticipationsByDaySelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedParticipationsByDayOrderBy>>;
    where?: Maybe<GamesPlayedParticipationsByDayBoolExp>;
};
/** query root */
export declare type QueryRootGamesPricesArgs = {
    distinct_on?: Maybe<Array<GamesPricesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPricesOrderBy>>;
    where?: Maybe<GamesPricesBoolExp>;
};
/** query root */
export declare type QueryRootGamesPricesAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPricesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPricesOrderBy>>;
    where?: Maybe<GamesPricesBoolExp>;
};
/** query root */
export declare type QueryRootGamesPricesByPkArgs = {
    game_id: Scalars['uuid'];
    price_type: Scalars['String'];
};
/** query root */
export declare type QueryRootGamesPricesTypesArgs = {
    distinct_on?: Maybe<Array<GamesPricesTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPricesTypesOrderBy>>;
    where?: Maybe<GamesPricesTypesBoolExp>;
};
/** query root */
export declare type QueryRootGamesPricesTypesAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPricesTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPricesTypesOrderBy>>;
    where?: Maybe<GamesPricesTypesBoolExp>;
};
/** query root */
export declare type QueryRootGamesPricesTypesByPkArgs = {
    value: Scalars['String'];
};
/** query root */
export declare type QueryRootGamesTypesArgs = {
    distinct_on?: Maybe<Array<GamesTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesTypesOrderBy>>;
    where?: Maybe<GamesTypesBoolExp>;
};
/** query root */
export declare type QueryRootGamesTypesAggregateArgs = {
    distinct_on?: Maybe<Array<GamesTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesTypesOrderBy>>;
    where?: Maybe<GamesTypesBoolExp>;
};
/** query root */
export declare type QueryRootGamesTypesByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootGamesValorizationsArgs = {
    distinct_on?: Maybe<Array<GamesValorizationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesValorizationsOrderBy>>;
    where?: Maybe<GamesValorizationsBoolExp>;
};
/** query root */
export declare type QueryRootGamesValorizationsAggregateArgs = {
    distinct_on?: Maybe<Array<GamesValorizationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesValorizationsOrderBy>>;
    where?: Maybe<GamesValorizationsBoolExp>;
};
/** query root */
export declare type QueryRootGamesValorizationsByPkArgs = {
    value: Scalars['String'];
};
/** query root */
export declare type QueryRootGetNearbyCommunicationsArgs = {
    args: GetNearbyCommunicationsArgs;
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** query root */
export declare type QueryRootGetNearbyCommunicationsAggregateArgs = {
    args: GetNearbyCommunicationsArgs;
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** query root */
export declare type QueryRootGetNearbyGamesArgs = {
    args: GetNearbyGamesArgs;
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** query root */
export declare type QueryRootGetNearbyGamesAggregateArgs = {
    args: GetNearbyGamesArgs;
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** query root */
export declare type QueryRootGetNearbyPrivateDeckCommunicationsArgs = {
    args: GetNearbyPrivateDeckCommunicationsArgs;
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** query root */
export declare type QueryRootGetNearbyPrivateDeckCommunicationsAggregateArgs = {
    args: GetNearbyPrivateDeckCommunicationsArgs;
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** query root */
export declare type QueryRootGetNearbyPrivateDeckGamesArgs = {
    args: GetNearbyPrivateDeckGamesArgs;
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** query root */
export declare type QueryRootGetNearbyPrivateDeckGamesAggregateArgs = {
    args: GetNearbyPrivateDeckGamesArgs;
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** query root */
export declare type QueryRootGetStripeCustomerPaymentMethodsArgs = {
    customer: Scalars['String'];
    type: Scalars['String'];
};
/** query root */
export declare type QueryRootGoodiesArgs = {
    distinct_on?: Maybe<Array<GoodiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesOrderBy>>;
    where?: Maybe<GoodiesBoolExp>;
};
/** query root */
export declare type QueryRootGoodiesAggregateArgs = {
    distinct_on?: Maybe<Array<GoodiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesOrderBy>>;
    where?: Maybe<GoodiesBoolExp>;
};
/** query root */
export declare type QueryRootGoodiesByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootGoodiesM2mAnimationsArgs = {
    distinct_on?: Maybe<Array<GoodiesM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesM2mAnimationsOrderBy>>;
    where?: Maybe<GoodiesM2mAnimationsBoolExp>;
};
/** query root */
export declare type QueryRootGoodiesM2mAnimationsAggregateArgs = {
    distinct_on?: Maybe<Array<GoodiesM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesM2mAnimationsOrderBy>>;
    where?: Maybe<GoodiesM2mAnimationsBoolExp>;
};
/** query root */
export declare type QueryRootGoodiesM2mAnimationsByPkArgs = {
    animation_id: Scalars['uuid'];
    goodie_id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootGoodiesPlayedArgs = {
    distinct_on?: Maybe<Array<GoodiesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesPlayedOrderBy>>;
    where?: Maybe<GoodiesPlayedBoolExp>;
};
/** query root */
export declare type QueryRootGoodiesPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<GoodiesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesPlayedOrderBy>>;
    where?: Maybe<GoodiesPlayedBoolExp>;
};
/** query root */
export declare type QueryRootGoodiesPlayedByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootInfosArgs = {
    distinct_on?: Maybe<Array<InfosSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<InfosOrderBy>>;
    where?: Maybe<InfosBoolExp>;
};
/** query root */
export declare type QueryRootInfosAggregateArgs = {
    distinct_on?: Maybe<Array<InfosSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<InfosOrderBy>>;
    where?: Maybe<InfosBoolExp>;
};
/** query root */
export declare type QueryRootInfosByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootNearbyCommunicationsArgs = {
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** query root */
export declare type QueryRootNearbyCommunicationsAggregateArgs = {
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** query root */
export declare type QueryRootNearbyCommunicationsByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootNearbyGamesArgs = {
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** query root */
export declare type QueryRootNearbyGamesAggregateArgs = {
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** query root */
export declare type QueryRootNearbyGamesByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootPhotosArgs = {
    distinct_on?: Maybe<Array<PhotosSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PhotosOrderBy>>;
    where?: Maybe<PhotosBoolExp>;
};
/** query root */
export declare type QueryRootPhotosAggregateArgs = {
    distinct_on?: Maybe<Array<PhotosSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PhotosOrderBy>>;
    where?: Maybe<PhotosBoolExp>;
};
/** query root */
export declare type QueryRootPhotosByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootPrivatesDecksArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksOrderBy>>;
    where?: Maybe<PrivatesDecksBoolExp>;
};
/** query root */
export declare type QueryRootPrivatesDecksAggregateArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksOrderBy>>;
    where?: Maybe<PrivatesDecksBoolExp>;
};
/** query root */
export declare type QueryRootPrivatesDecksByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootPrivatesDecksM2mEntitiesArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mEntitiesOrderBy>>;
    where?: Maybe<PrivatesDecksM2mEntitiesBoolExp>;
};
/** query root */
export declare type QueryRootPrivatesDecksM2mEntitiesAggregateArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mEntitiesOrderBy>>;
    where?: Maybe<PrivatesDecksM2mEntitiesBoolExp>;
};
/** query root */
export declare type QueryRootPrivatesDecksM2mEntitiesByPkArgs = {
    entity_id: Scalars['uuid'];
    private_deck: Scalars['uuid'];
};
/** query root */
export declare type QueryRootPrivatesDecksM2mUsersArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mUsersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mUsersOrderBy>>;
    where?: Maybe<PrivatesDecksM2mUsersBoolExp>;
};
/** query root */
export declare type QueryRootPrivatesDecksM2mUsersAggregateArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mUsersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mUsersOrderBy>>;
    where?: Maybe<PrivatesDecksM2mUsersBoolExp>;
};
/** query root */
export declare type QueryRootPrivatesDecksM2mUsersByPkArgs = {
    private_deck_id: Scalars['uuid'];
    user_id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootQuizzArgs = {
    distinct_on?: Maybe<Array<QuizzSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzOrderBy>>;
    where?: Maybe<QuizzBoolExp>;
};
/** query root */
export declare type QueryRootQuizzAggregateArgs = {
    distinct_on?: Maybe<Array<QuizzSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzOrderBy>>;
    where?: Maybe<QuizzBoolExp>;
};
/** query root */
export declare type QueryRootQuizzByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootQuizzPlayedArgs = {
    distinct_on?: Maybe<Array<QuizzPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzPlayedOrderBy>>;
    where?: Maybe<QuizzPlayedBoolExp>;
};
/** query root */
export declare type QueryRootQuizzPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<QuizzPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzPlayedOrderBy>>;
    where?: Maybe<QuizzPlayedBoolExp>;
};
/** query root */
export declare type QueryRootQuizzPlayedByPkArgs = {
    id: Scalars['bigint'];
};
/** query root */
export declare type QueryRootQuizzQuestionsArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsOrderBy>>;
    where?: Maybe<QuizzQuestionsBoolExp>;
};
/** query root */
export declare type QueryRootQuizzQuestionsAggregateArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsOrderBy>>;
    where?: Maybe<QuizzQuestionsBoolExp>;
};
/** query root */
export declare type QueryRootQuizzQuestionsAnswersArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsAnswersOrderBy>>;
    where?: Maybe<QuizzQuestionsAnswersBoolExp>;
};
/** query root */
export declare type QueryRootQuizzQuestionsAnswersAggregateArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsAnswersOrderBy>>;
    where?: Maybe<QuizzQuestionsAnswersBoolExp>;
};
/** query root */
export declare type QueryRootQuizzQuestionsAnswersByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootQuizzQuestionsByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootRandomDrawingsArgs = {
    distinct_on?: Maybe<Array<RandomDrawingsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<RandomDrawingsOrderBy>>;
    where?: Maybe<RandomDrawingsBoolExp>;
};
/** query root */
export declare type QueryRootRandomDrawingsAggregateArgs = {
    distinct_on?: Maybe<Array<RandomDrawingsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<RandomDrawingsOrderBy>>;
    where?: Maybe<RandomDrawingsBoolExp>;
};
/** query root */
export declare type QueryRootRandomDrawingsByPkArgs = {
    id: Scalars['bigint'];
};
/** query root */
export declare type QueryRootSurveysArgs = {
    distinct_on?: Maybe<Array<SurveysSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysOrderBy>>;
    where?: Maybe<SurveysBoolExp>;
};
/** query root */
export declare type QueryRootSurveysAggregateArgs = {
    distinct_on?: Maybe<Array<SurveysSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysOrderBy>>;
    where?: Maybe<SurveysBoolExp>;
};
/** query root */
export declare type QueryRootSurveysByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootSurveysQuestionsArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsOrderBy>>;
    where?: Maybe<SurveysQuestionsBoolExp>;
};
/** query root */
export declare type QueryRootSurveysQuestionsAggregateArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsOrderBy>>;
    where?: Maybe<SurveysQuestionsBoolExp>;
};
/** query root */
export declare type QueryRootSurveysQuestionsAnswersArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsAnswersOrderBy>>;
    where?: Maybe<SurveysQuestionsAnswersBoolExp>;
};
/** query root */
export declare type QueryRootSurveysQuestionsAnswersAggregateArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsAnswersOrderBy>>;
    where?: Maybe<SurveysQuestionsAnswersBoolExp>;
};
/** query root */
export declare type QueryRootSurveysQuestionsAnswersByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootSurveysQuestionsByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootTemplatesArgs = {
    distinct_on?: Maybe<Array<TemplatesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<TemplatesOrderBy>>;
    where?: Maybe<TemplatesBoolExp>;
};
/** query root */
export declare type QueryRootTemplatesAggregateArgs = {
    distinct_on?: Maybe<Array<TemplatesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<TemplatesOrderBy>>;
    where?: Maybe<TemplatesBoolExp>;
};
/** query root */
export declare type QueryRootTemplatesByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootUsersArgs = {
    distinct_on?: Maybe<Array<UsersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<UsersOrderBy>>;
    where?: Maybe<UsersBoolExp>;
};
/** query root */
export declare type QueryRootUsersAggregateArgs = {
    distinct_on?: Maybe<Array<UsersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<UsersOrderBy>>;
    where?: Maybe<UsersBoolExp>;
};
/** query root */
export declare type QueryRootUsersByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootVotesArgs = {
    distinct_on?: Maybe<Array<VotesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesOrderBy>>;
    where?: Maybe<VotesBoolExp>;
};
/** query root */
export declare type QueryRootVotesAggregateArgs = {
    distinct_on?: Maybe<Array<VotesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesOrderBy>>;
    where?: Maybe<VotesBoolExp>;
};
/** query root */
export declare type QueryRootVotesByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootVotesPlayedArgs = {
    distinct_on?: Maybe<Array<VotesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesPlayedOrderBy>>;
    where?: Maybe<VotesPlayedBoolExp>;
};
/** query root */
export declare type QueryRootVotesPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<VotesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesPlayedOrderBy>>;
    where?: Maybe<VotesPlayedBoolExp>;
};
/** query root */
export declare type QueryRootVotesSelectionsArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsOrderBy>>;
    where?: Maybe<VotesSelectionsBoolExp>;
};
/** query root */
export declare type QueryRootVotesSelectionsAggregateArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsOrderBy>>;
    where?: Maybe<VotesSelectionsBoolExp>;
};
/** query root */
export declare type QueryRootVotesSelectionsByPkArgs = {
    id: Scalars['uuid'];
};
/** query root */
export declare type QueryRootVotesSelectionsChoicesArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsChoicesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsChoicesOrderBy>>;
    where?: Maybe<VotesSelectionsChoicesBoolExp>;
};
/** query root */
export declare type QueryRootVotesSelectionsChoicesAggregateArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsChoicesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsChoicesOrderBy>>;
    where?: Maybe<VotesSelectionsChoicesBoolExp>;
};
/** query root */
export declare type QueryRootVotesSelectionsChoicesByPkArgs = {
    id: Scalars['uuid'];
};
/** columns and relationships of "quizz" */
export declare type Quizz = {
    __typename?: 'quizz';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    /** An array relationship */
    games_gains: Array<GamesGains>;
    /** An aggregated array relationship */
    games_gains_aggregate: GamesGainsAggregate;
    /** An array relationship */
    games_gains_available: Array<GamesGainsAvailable>;
    /** An aggregated array relationship */
    games_gains_available_aggregate: GamesGainsAvailableAggregate;
    gtc?: Maybe<Scalars['String']>;
    id: Scalars['uuid'];
    instructions?: Maybe<Scalars['String']>;
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    is_test: Scalars['Boolean'];
    keep_cumulated_probability: Scalars['Boolean'];
    location?: Maybe<Scalars['geography']>;
    max_participations: Scalars['Int'];
    name: Scalars['String'];
    ordered_questions: Scalars['Boolean'];
    /** An array relationship */
    quizz_questions: Array<QuizzQuestions>;
    /** An aggregated array relationship */
    quizz_questions_aggregate: QuizzQuestionsAggregate;
    radius?: Maybe<Scalars['Int']>;
    /** An object relationship */
    type: GamesTypes;
    type_id: Scalars['uuid'];
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    winning_percentage: Scalars['numeric'];
    with_instant_gains: Scalars['Boolean'];
    with_magic_random_drawings: Scalars['Boolean'];
    with_random_drawings: Scalars['Boolean'];
};
/** columns and relationships of "quizz" */
export declare type QuizzDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "quizz" */
export declare type QuizzGamesGainsArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "quizz" */
export declare type QuizzGamesGainsAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "quizz" */
export declare type QuizzGamesGainsAvailableArgs = {
    distinct_on?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsAvailableOrderBy>>;
    where?: Maybe<GamesGainsAvailableBoolExp>;
};
/** columns and relationships of "quizz" */
export declare type QuizzGamesGainsAvailableAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsAvailableOrderBy>>;
    where?: Maybe<GamesGainsAvailableBoolExp>;
};
/** columns and relationships of "quizz" */
export declare type QuizzQuizzQuestionsArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsOrderBy>>;
    where?: Maybe<QuizzQuestionsBoolExp>;
};
/** columns and relationships of "quizz" */
export declare type QuizzQuizzQuestionsAggregateArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsOrderBy>>;
    where?: Maybe<QuizzQuestionsBoolExp>;
};
/** aggregated selection of "quizz" */
export declare type QuizzAggregate = {
    __typename?: 'quizz_aggregate';
    aggregate?: Maybe<QuizzAggregateFields>;
    nodes: Array<Quizz>;
};
/** aggregate fields of "quizz" */
export declare type QuizzAggregateFields = {
    __typename?: 'quizz_aggregate_fields';
    avg?: Maybe<QuizzAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<QuizzMaxFields>;
    min?: Maybe<QuizzMinFields>;
    stddev?: Maybe<QuizzStddevFields>;
    stddev_pop?: Maybe<QuizzStddevPopFields>;
    stddev_samp?: Maybe<QuizzStddevSampFields>;
    sum?: Maybe<QuizzSumFields>;
    var_pop?: Maybe<QuizzVarPopFields>;
    var_samp?: Maybe<QuizzVarSampFields>;
    variance?: Maybe<QuizzVarianceFields>;
};
/** aggregate fields of "quizz" */
export declare type QuizzAggregateFieldsCountArgs = {
    columns?: Maybe<Array<QuizzSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "quizz" */
export declare type QuizzAggregateOrderBy = {
    avg?: Maybe<QuizzAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<QuizzMaxOrderBy>;
    min?: Maybe<QuizzMinOrderBy>;
    stddev?: Maybe<QuizzStddevOrderBy>;
    stddev_pop?: Maybe<QuizzStddevPopOrderBy>;
    stddev_samp?: Maybe<QuizzStddevSampOrderBy>;
    sum?: Maybe<QuizzSumOrderBy>;
    var_pop?: Maybe<QuizzVarPopOrderBy>;
    var_samp?: Maybe<QuizzVarSampOrderBy>;
    variance?: Maybe<QuizzVarianceOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type QuizzAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "quizz" */
export declare type QuizzArrRelInsertInput = {
    data: Array<QuizzInsertInput>;
    on_conflict?: Maybe<QuizzOnConflict>;
};
/** aggregate avg on columns */
export declare type QuizzAvgFields = {
    __typename?: 'quizz_avg_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
    winning_percentage?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "quizz" */
export declare type QuizzAvgOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "quizz". All fields are combined with a logical 'AND'. */
export declare type QuizzBoolExp = {
    _and?: Maybe<Array<Maybe<QuizzBoolExp>>>;
    _not?: Maybe<QuizzBoolExp>;
    _or?: Maybe<Array<Maybe<QuizzBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    card_image_background_id?: Maybe<UuidComparisonExp>;
    card_image_id?: Maybe<UuidComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    frequency?: Maybe<GamesFrequenciesEnumComparisonExp>;
    games_gains?: Maybe<GamesGainsBoolExp>;
    games_gains_available?: Maybe<GamesGainsAvailableBoolExp>;
    gtc?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    instructions?: Maybe<StringComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_private?: Maybe<BooleanComparisonExp>;
    is_test?: Maybe<BooleanComparisonExp>;
    keep_cumulated_probability?: Maybe<BooleanComparisonExp>;
    location?: Maybe<GeographyComparisonExp>;
    max_participations?: Maybe<IntComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    ordered_questions?: Maybe<BooleanComparisonExp>;
    quizz_questions?: Maybe<QuizzQuestionsBoolExp>;
    radius?: Maybe<IntComparisonExp>;
    type?: Maybe<GamesTypesBoolExp>;
    type_id?: Maybe<UuidComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
    valorization?: Maybe<GamesValorizationsEnumComparisonExp>;
    winning_percentage?: Maybe<NumericComparisonExp>;
    with_instant_gains?: Maybe<BooleanComparisonExp>;
    with_magic_random_drawings?: Maybe<BooleanComparisonExp>;
    with_random_drawings?: Maybe<BooleanComparisonExp>;
};
/** unique or primary key constraints on table "quizz" */
export declare enum QuizzConstraint {
    /** unique or primary key constraint */
    QuizzPkey = "quizz_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type QuizzDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type QuizzDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type QuizzDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
};
/** input type for incrementing integer column in table "quizz" */
export declare type QuizzIncInput = {
    max_participations?: Maybe<Scalars['Int']>;
    radius?: Maybe<Scalars['Int']>;
    winning_percentage?: Maybe<Scalars['numeric']>;
};
/** input type for inserting data into table "quizz" */
export declare type QuizzInsertInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    games_gains?: Maybe<GamesGainsArrRelInsertInput>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    keep_cumulated_probability?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    ordered_questions?: Maybe<Scalars['Boolean']>;
    quizz_questions?: Maybe<QuizzQuestionsArrRelInsertInput>;
    radius?: Maybe<Scalars['Int']>;
    type?: Maybe<GamesTypesObjRelInsertInput>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    winning_percentage?: Maybe<Scalars['numeric']>;
    with_instant_gains?: Maybe<Scalars['Boolean']>;
    with_magic_random_drawings?: Maybe<Scalars['Boolean']>;
    with_random_drawings?: Maybe<Scalars['Boolean']>;
};
/** aggregate max on columns */
export declare type QuizzMaxFields = {
    __typename?: 'quizz_max_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    winning_percentage?: Maybe<Scalars['numeric']>;
};
/** order by max() on columns of table "quizz" */
export declare type QuizzMaxOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type QuizzMinFields = {
    __typename?: 'quizz_min_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    winning_percentage?: Maybe<Scalars['numeric']>;
};
/** order by min() on columns of table "quizz" */
export declare type QuizzMinOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
};
/** response of any mutation on the table "quizz" */
export declare type QuizzMutationResponse = {
    __typename?: 'quizz_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Quizz>;
};
/** input type for inserting object relation for remote table "quizz" */
export declare type QuizzObjRelInsertInput = {
    data: QuizzInsertInput;
    on_conflict?: Maybe<QuizzOnConflict>;
};
/** on conflict condition type for table "quizz" */
export declare type QuizzOnConflict = {
    constraint: QuizzConstraint;
    update_columns: Array<QuizzUpdateColumn>;
    where?: Maybe<QuizzBoolExp>;
};
/** ordering options when selecting data from "quizz" */
export declare type QuizzOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    frequency?: Maybe<OrderBy>;
    games_gains_aggregate?: Maybe<GamesGainsAggregateOrderBy>;
    games_gains_available_aggregate?: Maybe<GamesGainsAvailableAggregateOrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_private?: Maybe<OrderBy>;
    is_test?: Maybe<OrderBy>;
    keep_cumulated_probability?: Maybe<OrderBy>;
    location?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    ordered_questions?: Maybe<OrderBy>;
    quizz_questions_aggregate?: Maybe<QuizzQuestionsAggregateOrderBy>;
    radius?: Maybe<OrderBy>;
    type?: Maybe<GamesTypesOrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
    valorization?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
    with_instant_gains?: Maybe<OrderBy>;
    with_magic_random_drawings?: Maybe<OrderBy>;
    with_random_drawings?: Maybe<OrderBy>;
};
/** primary key columns input for table: "quizz" */
export declare type QuizzPkColumnsInput = {
    id: Scalars['uuid'];
};
/** columns and relationships of "quizz_played" */
export declare type QuizzPlayed = {
    __typename?: 'quizz_played';
    /** An object relationship */
    gain?: Maybe<Gains>;
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated: Scalars['Boolean'];
    game_id: Scalars['uuid'];
    id: Scalars['bigint'];
    played_at: Scalars['timestamptz'];
    score: Scalars['numeric'];
    time?: Maybe<Scalars['numeric']>;
    user_id: Scalars['uuid'];
};
/** aggregated selection of "quizz_played" */
export declare type QuizzPlayedAggregate = {
    __typename?: 'quizz_played_aggregate';
    aggregate?: Maybe<QuizzPlayedAggregateFields>;
    nodes: Array<QuizzPlayed>;
};
/** aggregate fields of "quizz_played" */
export declare type QuizzPlayedAggregateFields = {
    __typename?: 'quizz_played_aggregate_fields';
    avg?: Maybe<QuizzPlayedAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<QuizzPlayedMaxFields>;
    min?: Maybe<QuizzPlayedMinFields>;
    stddev?: Maybe<QuizzPlayedStddevFields>;
    stddev_pop?: Maybe<QuizzPlayedStddevPopFields>;
    stddev_samp?: Maybe<QuizzPlayedStddevSampFields>;
    sum?: Maybe<QuizzPlayedSumFields>;
    var_pop?: Maybe<QuizzPlayedVarPopFields>;
    var_samp?: Maybe<QuizzPlayedVarSampFields>;
    variance?: Maybe<QuizzPlayedVarianceFields>;
};
/** aggregate fields of "quizz_played" */
export declare type QuizzPlayedAggregateFieldsCountArgs = {
    columns?: Maybe<Array<QuizzPlayedSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "quizz_played" */
export declare type QuizzPlayedAggregateOrderBy = {
    avg?: Maybe<QuizzPlayedAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<QuizzPlayedMaxOrderBy>;
    min?: Maybe<QuizzPlayedMinOrderBy>;
    stddev?: Maybe<QuizzPlayedStddevOrderBy>;
    stddev_pop?: Maybe<QuizzPlayedStddevPopOrderBy>;
    stddev_samp?: Maybe<QuizzPlayedStddevSampOrderBy>;
    sum?: Maybe<QuizzPlayedSumOrderBy>;
    var_pop?: Maybe<QuizzPlayedVarPopOrderBy>;
    var_samp?: Maybe<QuizzPlayedVarSampOrderBy>;
    variance?: Maybe<QuizzPlayedVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "quizz_played" */
export declare type QuizzPlayedArrRelInsertInput = {
    data: Array<QuizzPlayedInsertInput>;
    on_conflict?: Maybe<QuizzPlayedOnConflict>;
};
/** aggregate avg on columns */
export declare type QuizzPlayedAvgFields = {
    __typename?: 'quizz_played_avg_fields';
    id?: Maybe<Scalars['Float']>;
    score?: Maybe<Scalars['Float']>;
    time?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "quizz_played" */
export declare type QuizzPlayedAvgOrderBy = {
    id?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "quizz_played". All fields are combined with a logical 'AND'. */
export declare type QuizzPlayedBoolExp = {
    _and?: Maybe<Array<Maybe<QuizzPlayedBoolExp>>>;
    _not?: Maybe<QuizzPlayedBoolExp>;
    _or?: Maybe<Array<Maybe<QuizzPlayedBoolExp>>>;
    gain?: Maybe<GainsBoolExp>;
    gain_id?: Maybe<UuidComparisonExp>;
    gain_validated?: Maybe<BooleanComparisonExp>;
    game_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<BigintComparisonExp>;
    played_at?: Maybe<TimestamptzComparisonExp>;
    score?: Maybe<NumericComparisonExp>;
    time?: Maybe<NumericComparisonExp>;
    user_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "quizz_played" */
export declare enum QuizzPlayedConstraint {
    /** unique or primary key constraint */
    QuizzPlayedPkey = "quizz_played_pkey"
}
/** input type for incrementing integer column in table "quizz_played" */
export declare type QuizzPlayedIncInput = {
    id?: Maybe<Scalars['bigint']>;
    score?: Maybe<Scalars['numeric']>;
    time?: Maybe<Scalars['numeric']>;
};
/** input type for inserting data into table "quizz_played" */
export declare type QuizzPlayedInsertInput = {
    gain?: Maybe<GainsObjRelInsertInput>;
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated?: Maybe<Scalars['Boolean']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    score?: Maybe<Scalars['numeric']>;
    time?: Maybe<Scalars['numeric']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type QuizzPlayedMaxFields = {
    __typename?: 'quizz_played_max_fields';
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    score?: Maybe<Scalars['numeric']>;
    time?: Maybe<Scalars['numeric']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "quizz_played" */
export declare type QuizzPlayedMaxOrderBy = {
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type QuizzPlayedMinFields = {
    __typename?: 'quizz_played_min_fields';
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    score?: Maybe<Scalars['numeric']>;
    time?: Maybe<Scalars['numeric']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "quizz_played" */
export declare type QuizzPlayedMinOrderBy = {
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "quizz_played" */
export declare type QuizzPlayedMutationResponse = {
    __typename?: 'quizz_played_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<QuizzPlayed>;
};
/** input type for inserting object relation for remote table "quizz_played" */
export declare type QuizzPlayedObjRelInsertInput = {
    data: QuizzPlayedInsertInput;
    on_conflict?: Maybe<QuizzPlayedOnConflict>;
};
/** on conflict condition type for table "quizz_played" */
export declare type QuizzPlayedOnConflict = {
    constraint: QuizzPlayedConstraint;
    update_columns: Array<QuizzPlayedUpdateColumn>;
    where?: Maybe<QuizzPlayedBoolExp>;
};
/** ordering options when selecting data from "quizz_played" */
export declare type QuizzPlayedOrderBy = {
    gain?: Maybe<GainsOrderBy>;
    gain_id?: Maybe<OrderBy>;
    gain_validated?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "quizz_played" */
export declare type QuizzPlayedPkColumnsInput = {
    id: Scalars['bigint'];
};
/** select columns of table "quizz_played" */
export declare enum QuizzPlayedSelectColumn {
    /** column name */
    GainId = "gain_id",
    /** column name */
    GainValidated = "gain_validated",
    /** column name */
    GameId = "game_id",
    /** column name */
    Id = "id",
    /** column name */
    PlayedAt = "played_at",
    /** column name */
    Score = "score",
    /** column name */
    Time = "time",
    /** column name */
    UserId = "user_id"
}
/** input type for updating data in table "quizz_played" */
export declare type QuizzPlayedSetInput = {
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated?: Maybe<Scalars['Boolean']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    score?: Maybe<Scalars['numeric']>;
    time?: Maybe<Scalars['numeric']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate stddev on columns */
export declare type QuizzPlayedStddevFields = {
    __typename?: 'quizz_played_stddev_fields';
    id?: Maybe<Scalars['Float']>;
    score?: Maybe<Scalars['Float']>;
    time?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "quizz_played" */
export declare type QuizzPlayedStddevOrderBy = {
    id?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type QuizzPlayedStddevPopFields = {
    __typename?: 'quizz_played_stddev_pop_fields';
    id?: Maybe<Scalars['Float']>;
    score?: Maybe<Scalars['Float']>;
    time?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "quizz_played" */
export declare type QuizzPlayedStddevPopOrderBy = {
    id?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type QuizzPlayedStddevSampFields = {
    __typename?: 'quizz_played_stddev_samp_fields';
    id?: Maybe<Scalars['Float']>;
    score?: Maybe<Scalars['Float']>;
    time?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "quizz_played" */
export declare type QuizzPlayedStddevSampOrderBy = {
    id?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type QuizzPlayedSumFields = {
    __typename?: 'quizz_played_sum_fields';
    id?: Maybe<Scalars['bigint']>;
    score?: Maybe<Scalars['numeric']>;
    time?: Maybe<Scalars['numeric']>;
};
/** order by sum() on columns of table "quizz_played" */
export declare type QuizzPlayedSumOrderBy = {
    id?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
};
/** update columns of table "quizz_played" */
export declare enum QuizzPlayedUpdateColumn {
    /** column name */
    GainId = "gain_id",
    /** column name */
    GainValidated = "gain_validated",
    /** column name */
    GameId = "game_id",
    /** column name */
    Id = "id",
    /** column name */
    PlayedAt = "played_at",
    /** column name */
    Score = "score",
    /** column name */
    Time = "time",
    /** column name */
    UserId = "user_id"
}
/** aggregate var_pop on columns */
export declare type QuizzPlayedVarPopFields = {
    __typename?: 'quizz_played_var_pop_fields';
    id?: Maybe<Scalars['Float']>;
    score?: Maybe<Scalars['Float']>;
    time?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "quizz_played" */
export declare type QuizzPlayedVarPopOrderBy = {
    id?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type QuizzPlayedVarSampFields = {
    __typename?: 'quizz_played_var_samp_fields';
    id?: Maybe<Scalars['Float']>;
    score?: Maybe<Scalars['Float']>;
    time?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "quizz_played" */
export declare type QuizzPlayedVarSampOrderBy = {
    id?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type QuizzPlayedVarianceFields = {
    __typename?: 'quizz_played_variance_fields';
    id?: Maybe<Scalars['Float']>;
    score?: Maybe<Scalars['Float']>;
    time?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "quizz_played" */
export declare type QuizzPlayedVarianceOrderBy = {
    id?: Maybe<OrderBy>;
    score?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type QuizzPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** columns and relationships of "quizz_questions" */
export declare type QuizzQuestions = {
    __typename?: 'quizz_questions';
    /** An object relationship */
    asset?: Maybe<Assets>;
    asset_id?: Maybe<Scalars['uuid']>;
    id: Scalars['uuid'];
    question: Scalars['String'];
    /** An object relationship */
    quizz: Quizz;
    quizz_id: Scalars['uuid'];
    /** An array relationship */
    quizz_questions_answers: Array<QuizzQuestionsAnswers>;
    /** An aggregated array relationship */
    quizz_questions_answers_aggregate: QuizzQuestionsAnswersAggregate;
    time: Scalars['numeric'];
    total_points: Scalars['numeric'];
};
/** columns and relationships of "quizz_questions" */
export declare type QuizzQuestionsQuizzQuestionsAnswersArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsAnswersOrderBy>>;
    where?: Maybe<QuizzQuestionsAnswersBoolExp>;
};
/** columns and relationships of "quizz_questions" */
export declare type QuizzQuestionsQuizzQuestionsAnswersAggregateArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsAnswersOrderBy>>;
    where?: Maybe<QuizzQuestionsAnswersBoolExp>;
};
/** aggregated selection of "quizz_questions" */
export declare type QuizzQuestionsAggregate = {
    __typename?: 'quizz_questions_aggregate';
    aggregate?: Maybe<QuizzQuestionsAggregateFields>;
    nodes: Array<QuizzQuestions>;
};
/** aggregate fields of "quizz_questions" */
export declare type QuizzQuestionsAggregateFields = {
    __typename?: 'quizz_questions_aggregate_fields';
    avg?: Maybe<QuizzQuestionsAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<QuizzQuestionsMaxFields>;
    min?: Maybe<QuizzQuestionsMinFields>;
    stddev?: Maybe<QuizzQuestionsStddevFields>;
    stddev_pop?: Maybe<QuizzQuestionsStddevPopFields>;
    stddev_samp?: Maybe<QuizzQuestionsStddevSampFields>;
    sum?: Maybe<QuizzQuestionsSumFields>;
    var_pop?: Maybe<QuizzQuestionsVarPopFields>;
    var_samp?: Maybe<QuizzQuestionsVarSampFields>;
    variance?: Maybe<QuizzQuestionsVarianceFields>;
};
/** aggregate fields of "quizz_questions" */
export declare type QuizzQuestionsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<QuizzQuestionsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "quizz_questions" */
export declare type QuizzQuestionsAggregateOrderBy = {
    avg?: Maybe<QuizzQuestionsAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<QuizzQuestionsMaxOrderBy>;
    min?: Maybe<QuizzQuestionsMinOrderBy>;
    stddev?: Maybe<QuizzQuestionsStddevOrderBy>;
    stddev_pop?: Maybe<QuizzQuestionsStddevPopOrderBy>;
    stddev_samp?: Maybe<QuizzQuestionsStddevSampOrderBy>;
    sum?: Maybe<QuizzQuestionsSumOrderBy>;
    var_pop?: Maybe<QuizzQuestionsVarPopOrderBy>;
    var_samp?: Maybe<QuizzQuestionsVarSampOrderBy>;
    variance?: Maybe<QuizzQuestionsVarianceOrderBy>;
};
/** columns and relationships of "quizz_questions_answers" */
export declare type QuizzQuestionsAnswers = {
    __typename?: 'quizz_questions_answers';
    answer: Scalars['String'];
    id: Scalars['uuid'];
    is_correct: Scalars['Boolean'];
    points: Scalars['numeric'];
    quizz_question_id: Scalars['uuid'];
};
/** aggregated selection of "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersAggregate = {
    __typename?: 'quizz_questions_answers_aggregate';
    aggregate?: Maybe<QuizzQuestionsAnswersAggregateFields>;
    nodes: Array<QuizzQuestionsAnswers>;
};
/** aggregate fields of "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersAggregateFields = {
    __typename?: 'quizz_questions_answers_aggregate_fields';
    avg?: Maybe<QuizzQuestionsAnswersAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<QuizzQuestionsAnswersMaxFields>;
    min?: Maybe<QuizzQuestionsAnswersMinFields>;
    stddev?: Maybe<QuizzQuestionsAnswersStddevFields>;
    stddev_pop?: Maybe<QuizzQuestionsAnswersStddevPopFields>;
    stddev_samp?: Maybe<QuizzQuestionsAnswersStddevSampFields>;
    sum?: Maybe<QuizzQuestionsAnswersSumFields>;
    var_pop?: Maybe<QuizzQuestionsAnswersVarPopFields>;
    var_samp?: Maybe<QuizzQuestionsAnswersVarSampFields>;
    variance?: Maybe<QuizzQuestionsAnswersVarianceFields>;
};
/** aggregate fields of "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersAggregateFieldsCountArgs = {
    columns?: Maybe<Array<QuizzQuestionsAnswersSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersAggregateOrderBy = {
    avg?: Maybe<QuizzQuestionsAnswersAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<QuizzQuestionsAnswersMaxOrderBy>;
    min?: Maybe<QuizzQuestionsAnswersMinOrderBy>;
    stddev?: Maybe<QuizzQuestionsAnswersStddevOrderBy>;
    stddev_pop?: Maybe<QuizzQuestionsAnswersStddevPopOrderBy>;
    stddev_samp?: Maybe<QuizzQuestionsAnswersStddevSampOrderBy>;
    sum?: Maybe<QuizzQuestionsAnswersSumOrderBy>;
    var_pop?: Maybe<QuizzQuestionsAnswersVarPopOrderBy>;
    var_samp?: Maybe<QuizzQuestionsAnswersVarSampOrderBy>;
    variance?: Maybe<QuizzQuestionsAnswersVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersArrRelInsertInput = {
    data: Array<QuizzQuestionsAnswersInsertInput>;
    on_conflict?: Maybe<QuizzQuestionsAnswersOnConflict>;
};
/** aggregate avg on columns */
export declare type QuizzQuestionsAnswersAvgFields = {
    __typename?: 'quizz_questions_answers_avg_fields';
    points?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersAvgOrderBy = {
    points?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "quizz_questions_answers". All fields are combined with a logical 'AND'. */
export declare type QuizzQuestionsAnswersBoolExp = {
    _and?: Maybe<Array<Maybe<QuizzQuestionsAnswersBoolExp>>>;
    _not?: Maybe<QuizzQuestionsAnswersBoolExp>;
    _or?: Maybe<Array<Maybe<QuizzQuestionsAnswersBoolExp>>>;
    answer?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    is_correct?: Maybe<BooleanComparisonExp>;
    points?: Maybe<NumericComparisonExp>;
    quizz_question_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "quizz_questions_answers" */
export declare enum QuizzQuestionsAnswersConstraint {
    /** unique or primary key constraint */
    QuizzQuestionsAnswersPkey = "quizz_questions_answers_pkey"
}
/** input type for incrementing integer column in table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersIncInput = {
    points?: Maybe<Scalars['numeric']>;
};
/** input type for inserting data into table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersInsertInput = {
    answer?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_correct?: Maybe<Scalars['Boolean']>;
    points?: Maybe<Scalars['numeric']>;
    quizz_question_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type QuizzQuestionsAnswersMaxFields = {
    __typename?: 'quizz_questions_answers_max_fields';
    answer?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    points?: Maybe<Scalars['numeric']>;
    quizz_question_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersMaxOrderBy = {
    answer?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    points?: Maybe<OrderBy>;
    quizz_question_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type QuizzQuestionsAnswersMinFields = {
    __typename?: 'quizz_questions_answers_min_fields';
    answer?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    points?: Maybe<Scalars['numeric']>;
    quizz_question_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersMinOrderBy = {
    answer?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    points?: Maybe<OrderBy>;
    quizz_question_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersMutationResponse = {
    __typename?: 'quizz_questions_answers_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<QuizzQuestionsAnswers>;
};
/** input type for inserting object relation for remote table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersObjRelInsertInput = {
    data: QuizzQuestionsAnswersInsertInput;
    on_conflict?: Maybe<QuizzQuestionsAnswersOnConflict>;
};
/** on conflict condition type for table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersOnConflict = {
    constraint: QuizzQuestionsAnswersConstraint;
    update_columns: Array<QuizzQuestionsAnswersUpdateColumn>;
    where?: Maybe<QuizzQuestionsAnswersBoolExp>;
};
/** ordering options when selecting data from "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersOrderBy = {
    answer?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    is_correct?: Maybe<OrderBy>;
    points?: Maybe<OrderBy>;
    quizz_question_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "quizz_questions_answers" */
export declare enum QuizzQuestionsAnswersSelectColumn {
    /** column name */
    Answer = "answer",
    /** column name */
    Id = "id",
    /** column name */
    IsCorrect = "is_correct",
    /** column name */
    Points = "points",
    /** column name */
    QuizzQuestionId = "quizz_question_id"
}
/** input type for updating data in table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersSetInput = {
    answer?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_correct?: Maybe<Scalars['Boolean']>;
    points?: Maybe<Scalars['numeric']>;
    quizz_question_id?: Maybe<Scalars['uuid']>;
};
/** aggregate stddev on columns */
export declare type QuizzQuestionsAnswersStddevFields = {
    __typename?: 'quizz_questions_answers_stddev_fields';
    points?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersStddevOrderBy = {
    points?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type QuizzQuestionsAnswersStddevPopFields = {
    __typename?: 'quizz_questions_answers_stddev_pop_fields';
    points?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersStddevPopOrderBy = {
    points?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type QuizzQuestionsAnswersStddevSampFields = {
    __typename?: 'quizz_questions_answers_stddev_samp_fields';
    points?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersStddevSampOrderBy = {
    points?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type QuizzQuestionsAnswersSumFields = {
    __typename?: 'quizz_questions_answers_sum_fields';
    points?: Maybe<Scalars['numeric']>;
};
/** order by sum() on columns of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersSumOrderBy = {
    points?: Maybe<OrderBy>;
};
/** update columns of table "quizz_questions_answers" */
export declare enum QuizzQuestionsAnswersUpdateColumn {
    /** column name */
    Answer = "answer",
    /** column name */
    Id = "id",
    /** column name */
    IsCorrect = "is_correct",
    /** column name */
    Points = "points",
    /** column name */
    QuizzQuestionId = "quizz_question_id"
}
/** aggregate var_pop on columns */
export declare type QuizzQuestionsAnswersVarPopFields = {
    __typename?: 'quizz_questions_answers_var_pop_fields';
    points?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersVarPopOrderBy = {
    points?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type QuizzQuestionsAnswersVarSampFields = {
    __typename?: 'quizz_questions_answers_var_samp_fields';
    points?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersVarSampOrderBy = {
    points?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type QuizzQuestionsAnswersVarianceFields = {
    __typename?: 'quizz_questions_answers_variance_fields';
    points?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "quizz_questions_answers" */
export declare type QuizzQuestionsAnswersVarianceOrderBy = {
    points?: Maybe<OrderBy>;
};
/** input type for inserting array relation for remote table "quizz_questions" */
export declare type QuizzQuestionsArrRelInsertInput = {
    data: Array<QuizzQuestionsInsertInput>;
    on_conflict?: Maybe<QuizzQuestionsOnConflict>;
};
/** aggregate avg on columns */
export declare type QuizzQuestionsAvgFields = {
    __typename?: 'quizz_questions_avg_fields';
    time?: Maybe<Scalars['Float']>;
    total_points?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "quizz_questions" */
export declare type QuizzQuestionsAvgOrderBy = {
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "quizz_questions". All fields are combined with a logical 'AND'. */
export declare type QuizzQuestionsBoolExp = {
    _and?: Maybe<Array<Maybe<QuizzQuestionsBoolExp>>>;
    _not?: Maybe<QuizzQuestionsBoolExp>;
    _or?: Maybe<Array<Maybe<QuizzQuestionsBoolExp>>>;
    asset?: Maybe<AssetsBoolExp>;
    asset_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    question?: Maybe<StringComparisonExp>;
    quizz?: Maybe<QuizzBoolExp>;
    quizz_id?: Maybe<UuidComparisonExp>;
    quizz_questions_answers?: Maybe<QuizzQuestionsAnswersBoolExp>;
    time?: Maybe<NumericComparisonExp>;
    total_points?: Maybe<NumericComparisonExp>;
};
/** unique or primary key constraints on table "quizz_questions" */
export declare enum QuizzQuestionsConstraint {
    /** unique or primary key constraint */
    QuizzQuestionPkey = "quizz_question_pkey"
}
/** input type for incrementing integer column in table "quizz_questions" */
export declare type QuizzQuestionsIncInput = {
    time?: Maybe<Scalars['numeric']>;
    total_points?: Maybe<Scalars['numeric']>;
};
/** input type for inserting data into table "quizz_questions" */
export declare type QuizzQuestionsInsertInput = {
    asset?: Maybe<AssetsObjRelInsertInput>;
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    question?: Maybe<Scalars['String']>;
    quizz?: Maybe<QuizzObjRelInsertInput>;
    quizz_id?: Maybe<Scalars['uuid']>;
    quizz_questions_answers?: Maybe<QuizzQuestionsAnswersArrRelInsertInput>;
    time?: Maybe<Scalars['numeric']>;
    total_points?: Maybe<Scalars['numeric']>;
};
/** aggregate max on columns */
export declare type QuizzQuestionsMaxFields = {
    __typename?: 'quizz_questions_max_fields';
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    question?: Maybe<Scalars['String']>;
    quizz_id?: Maybe<Scalars['uuid']>;
    time?: Maybe<Scalars['numeric']>;
    total_points?: Maybe<Scalars['numeric']>;
};
/** order by max() on columns of table "quizz_questions" */
export declare type QuizzQuestionsMaxOrderBy = {
    asset_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    question?: Maybe<OrderBy>;
    quizz_id?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type QuizzQuestionsMinFields = {
    __typename?: 'quizz_questions_min_fields';
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    question?: Maybe<Scalars['String']>;
    quizz_id?: Maybe<Scalars['uuid']>;
    time?: Maybe<Scalars['numeric']>;
    total_points?: Maybe<Scalars['numeric']>;
};
/** order by min() on columns of table "quizz_questions" */
export declare type QuizzQuestionsMinOrderBy = {
    asset_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    question?: Maybe<OrderBy>;
    quizz_id?: Maybe<OrderBy>;
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** response of any mutation on the table "quizz_questions" */
export declare type QuizzQuestionsMutationResponse = {
    __typename?: 'quizz_questions_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<QuizzQuestions>;
};
/** input type for inserting object relation for remote table "quizz_questions" */
export declare type QuizzQuestionsObjRelInsertInput = {
    data: QuizzQuestionsInsertInput;
    on_conflict?: Maybe<QuizzQuestionsOnConflict>;
};
/** on conflict condition type for table "quizz_questions" */
export declare type QuizzQuestionsOnConflict = {
    constraint: QuizzQuestionsConstraint;
    update_columns: Array<QuizzQuestionsUpdateColumn>;
    where?: Maybe<QuizzQuestionsBoolExp>;
};
/** ordering options when selecting data from "quizz_questions" */
export declare type QuizzQuestionsOrderBy = {
    asset?: Maybe<AssetsOrderBy>;
    asset_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    question?: Maybe<OrderBy>;
    quizz?: Maybe<QuizzOrderBy>;
    quizz_id?: Maybe<OrderBy>;
    quizz_questions_answers_aggregate?: Maybe<QuizzQuestionsAnswersAggregateOrderBy>;
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** primary key columns input for table: "quizz_questions" */
export declare type QuizzQuestionsPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "quizz_questions" */
export declare enum QuizzQuestionsSelectColumn {
    /** column name */
    AssetId = "asset_id",
    /** column name */
    Id = "id",
    /** column name */
    Question = "question",
    /** column name */
    QuizzId = "quizz_id",
    /** column name */
    Time = "time",
    /** column name */
    TotalPoints = "total_points"
}
/** input type for updating data in table "quizz_questions" */
export declare type QuizzQuestionsSetInput = {
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    question?: Maybe<Scalars['String']>;
    quizz_id?: Maybe<Scalars['uuid']>;
    time?: Maybe<Scalars['numeric']>;
    total_points?: Maybe<Scalars['numeric']>;
};
/** aggregate stddev on columns */
export declare type QuizzQuestionsStddevFields = {
    __typename?: 'quizz_questions_stddev_fields';
    time?: Maybe<Scalars['Float']>;
    total_points?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "quizz_questions" */
export declare type QuizzQuestionsStddevOrderBy = {
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type QuizzQuestionsStddevPopFields = {
    __typename?: 'quizz_questions_stddev_pop_fields';
    time?: Maybe<Scalars['Float']>;
    total_points?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "quizz_questions" */
export declare type QuizzQuestionsStddevPopOrderBy = {
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type QuizzQuestionsStddevSampFields = {
    __typename?: 'quizz_questions_stddev_samp_fields';
    time?: Maybe<Scalars['Float']>;
    total_points?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "quizz_questions" */
export declare type QuizzQuestionsStddevSampOrderBy = {
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type QuizzQuestionsSumFields = {
    __typename?: 'quizz_questions_sum_fields';
    time?: Maybe<Scalars['numeric']>;
    total_points?: Maybe<Scalars['numeric']>;
};
/** order by sum() on columns of table "quizz_questions" */
export declare type QuizzQuestionsSumOrderBy = {
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** update columns of table "quizz_questions" */
export declare enum QuizzQuestionsUpdateColumn {
    /** column name */
    AssetId = "asset_id",
    /** column name */
    Id = "id",
    /** column name */
    Question = "question",
    /** column name */
    QuizzId = "quizz_id",
    /** column name */
    Time = "time",
    /** column name */
    TotalPoints = "total_points"
}
/** aggregate var_pop on columns */
export declare type QuizzQuestionsVarPopFields = {
    __typename?: 'quizz_questions_var_pop_fields';
    time?: Maybe<Scalars['Float']>;
    total_points?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "quizz_questions" */
export declare type QuizzQuestionsVarPopOrderBy = {
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type QuizzQuestionsVarSampFields = {
    __typename?: 'quizz_questions_var_samp_fields';
    time?: Maybe<Scalars['Float']>;
    total_points?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "quizz_questions" */
export declare type QuizzQuestionsVarSampOrderBy = {
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type QuizzQuestionsVarianceFields = {
    __typename?: 'quizz_questions_variance_fields';
    time?: Maybe<Scalars['Float']>;
    total_points?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "quizz_questions" */
export declare type QuizzQuestionsVarianceOrderBy = {
    time?: Maybe<OrderBy>;
    total_points?: Maybe<OrderBy>;
};
/** select columns of table "quizz" */
export declare enum QuizzSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Frequency = "frequency",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    IsTest = "is_test",
    /** column name */
    KeepCumulatedProbability = "keep_cumulated_probability",
    /** column name */
    Location = "location",
    /** column name */
    MaxParticipations = "max_participations",
    /** column name */
    Name = "name",
    /** column name */
    OrderedQuestions = "ordered_questions",
    /** column name */
    Radius = "radius",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz",
    /** column name */
    Valorization = "valorization",
    /** column name */
    WinningPercentage = "winning_percentage",
    /** column name */
    WithInstantGains = "with_instant_gains",
    /** column name */
    WithMagicRandomDrawings = "with_magic_random_drawings",
    /** column name */
    WithRandomDrawings = "with_random_drawings"
}
/** input type for updating data in table "quizz" */
export declare type QuizzSetInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    keep_cumulated_probability?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    ordered_questions?: Maybe<Scalars['Boolean']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    winning_percentage?: Maybe<Scalars['numeric']>;
    with_instant_gains?: Maybe<Scalars['Boolean']>;
    with_magic_random_drawings?: Maybe<Scalars['Boolean']>;
    with_random_drawings?: Maybe<Scalars['Boolean']>;
};
/** aggregate stddev on columns */
export declare type QuizzStddevFields = {
    __typename?: 'quizz_stddev_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
    winning_percentage?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "quizz" */
export declare type QuizzStddevOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type QuizzStddevPopFields = {
    __typename?: 'quizz_stddev_pop_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
    winning_percentage?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "quizz" */
export declare type QuizzStddevPopOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type QuizzStddevSampFields = {
    __typename?: 'quizz_stddev_samp_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
    winning_percentage?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "quizz" */
export declare type QuizzStddevSampOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type QuizzSumFields = {
    __typename?: 'quizz_sum_fields';
    max_participations?: Maybe<Scalars['Int']>;
    radius?: Maybe<Scalars['Int']>;
    winning_percentage?: Maybe<Scalars['numeric']>;
};
/** order by sum() on columns of table "quizz" */
export declare type QuizzSumOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
};
/** update columns of table "quizz" */
export declare enum QuizzUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Frequency = "frequency",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    IsTest = "is_test",
    /** column name */
    KeepCumulatedProbability = "keep_cumulated_probability",
    /** column name */
    Location = "location",
    /** column name */
    MaxParticipations = "max_participations",
    /** column name */
    Name = "name",
    /** column name */
    OrderedQuestions = "ordered_questions",
    /** column name */
    Radius = "radius",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz",
    /** column name */
    Valorization = "valorization",
    /** column name */
    WinningPercentage = "winning_percentage",
    /** column name */
    WithInstantGains = "with_instant_gains",
    /** column name */
    WithMagicRandomDrawings = "with_magic_random_drawings",
    /** column name */
    WithRandomDrawings = "with_random_drawings"
}
/** aggregate var_pop on columns */
export declare type QuizzVarPopFields = {
    __typename?: 'quizz_var_pop_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
    winning_percentage?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "quizz" */
export declare type QuizzVarPopOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type QuizzVarSampFields = {
    __typename?: 'quizz_var_samp_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
    winning_percentage?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "quizz" */
export declare type QuizzVarSampOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type QuizzVarianceFields = {
    __typename?: 'quizz_variance_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
    winning_percentage?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "quizz" */
export declare type QuizzVarianceOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    winning_percentage?: Maybe<OrderBy>;
};
/** columns and relationships of "random_drawings" */
export declare type RandomDrawings = {
    __typename?: 'random_drawings';
    created_at: Scalars['timestamptz'];
    /** An object relationship */
    gain: Gains;
    gain_id: Scalars['uuid'];
    gain_validated: Scalars['Boolean'];
    /** An object relationship */
    game?: Maybe<Games>;
    game_id: Scalars['uuid'];
    id: Scalars['bigint'];
    /** An object relationship */
    winner: Users;
    winner_id: Scalars['uuid'];
};
/** aggregated selection of "random_drawings" */
export declare type RandomDrawingsAggregate = {
    __typename?: 'random_drawings_aggregate';
    aggregate?: Maybe<RandomDrawingsAggregateFields>;
    nodes: Array<RandomDrawings>;
};
/** aggregate fields of "random_drawings" */
export declare type RandomDrawingsAggregateFields = {
    __typename?: 'random_drawings_aggregate_fields';
    avg?: Maybe<RandomDrawingsAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<RandomDrawingsMaxFields>;
    min?: Maybe<RandomDrawingsMinFields>;
    stddev?: Maybe<RandomDrawingsStddevFields>;
    stddev_pop?: Maybe<RandomDrawingsStddevPopFields>;
    stddev_samp?: Maybe<RandomDrawingsStddevSampFields>;
    sum?: Maybe<RandomDrawingsSumFields>;
    var_pop?: Maybe<RandomDrawingsVarPopFields>;
    var_samp?: Maybe<RandomDrawingsVarSampFields>;
    variance?: Maybe<RandomDrawingsVarianceFields>;
};
/** aggregate fields of "random_drawings" */
export declare type RandomDrawingsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<RandomDrawingsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "random_drawings" */
export declare type RandomDrawingsAggregateOrderBy = {
    avg?: Maybe<RandomDrawingsAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<RandomDrawingsMaxOrderBy>;
    min?: Maybe<RandomDrawingsMinOrderBy>;
    stddev?: Maybe<RandomDrawingsStddevOrderBy>;
    stddev_pop?: Maybe<RandomDrawingsStddevPopOrderBy>;
    stddev_samp?: Maybe<RandomDrawingsStddevSampOrderBy>;
    sum?: Maybe<RandomDrawingsSumOrderBy>;
    var_pop?: Maybe<RandomDrawingsVarPopOrderBy>;
    var_samp?: Maybe<RandomDrawingsVarSampOrderBy>;
    variance?: Maybe<RandomDrawingsVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "random_drawings" */
export declare type RandomDrawingsArrRelInsertInput = {
    data: Array<RandomDrawingsInsertInput>;
    on_conflict?: Maybe<RandomDrawingsOnConflict>;
};
/** aggregate avg on columns */
export declare type RandomDrawingsAvgFields = {
    __typename?: 'random_drawings_avg_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "random_drawings" */
export declare type RandomDrawingsAvgOrderBy = {
    id?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "random_drawings". All fields are combined with a logical 'AND'. */
export declare type RandomDrawingsBoolExp = {
    _and?: Maybe<Array<Maybe<RandomDrawingsBoolExp>>>;
    _not?: Maybe<RandomDrawingsBoolExp>;
    _or?: Maybe<Array<Maybe<RandomDrawingsBoolExp>>>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    gain?: Maybe<GainsBoolExp>;
    gain_id?: Maybe<UuidComparisonExp>;
    gain_validated?: Maybe<BooleanComparisonExp>;
    game?: Maybe<GamesBoolExp>;
    game_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<BigintComparisonExp>;
    winner?: Maybe<UsersBoolExp>;
    winner_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "random_drawings" */
export declare enum RandomDrawingsConstraint {
    /** unique or primary key constraint */
    RandomDrawingsPkey = "random_drawings_pkey"
}
/** input type for incrementing integer column in table "random_drawings" */
export declare type RandomDrawingsIncInput = {
    id?: Maybe<Scalars['bigint']>;
};
/** input type for inserting data into table "random_drawings" */
export declare type RandomDrawingsInsertInput = {
    created_at?: Maybe<Scalars['timestamptz']>;
    gain?: Maybe<GainsObjRelInsertInput>;
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated?: Maybe<Scalars['Boolean']>;
    game?: Maybe<GamesObjRelInsertInput>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    winner?: Maybe<UsersObjRelInsertInput>;
    winner_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type RandomDrawingsMaxFields = {
    __typename?: 'random_drawings_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    winner_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "random_drawings" */
export declare type RandomDrawingsMaxOrderBy = {
    created_at?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    winner_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type RandomDrawingsMinFields = {
    __typename?: 'random_drawings_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    winner_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "random_drawings" */
export declare type RandomDrawingsMinOrderBy = {
    created_at?: Maybe<OrderBy>;
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    winner_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "random_drawings" */
export declare type RandomDrawingsMutationResponse = {
    __typename?: 'random_drawings_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<RandomDrawings>;
};
/** input type for inserting object relation for remote table "random_drawings" */
export declare type RandomDrawingsObjRelInsertInput = {
    data: RandomDrawingsInsertInput;
    on_conflict?: Maybe<RandomDrawingsOnConflict>;
};
/** on conflict condition type for table "random_drawings" */
export declare type RandomDrawingsOnConflict = {
    constraint: RandomDrawingsConstraint;
    update_columns: Array<RandomDrawingsUpdateColumn>;
    where?: Maybe<RandomDrawingsBoolExp>;
};
/** ordering options when selecting data from "random_drawings" */
export declare type RandomDrawingsOrderBy = {
    created_at?: Maybe<OrderBy>;
    gain?: Maybe<GainsOrderBy>;
    gain_id?: Maybe<OrderBy>;
    gain_validated?: Maybe<OrderBy>;
    game?: Maybe<GamesOrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    winner?: Maybe<UsersOrderBy>;
    winner_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "random_drawings" */
export declare type RandomDrawingsPkColumnsInput = {
    id: Scalars['bigint'];
};
/** select columns of table "random_drawings" */
export declare enum RandomDrawingsSelectColumn {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    GainId = "gain_id",
    /** column name */
    GainValidated = "gain_validated",
    /** column name */
    GameId = "game_id",
    /** column name */
    Id = "id",
    /** column name */
    WinnerId = "winner_id"
}
/** input type for updating data in table "random_drawings" */
export declare type RandomDrawingsSetInput = {
    created_at?: Maybe<Scalars['timestamptz']>;
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated?: Maybe<Scalars['Boolean']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    winner_id?: Maybe<Scalars['uuid']>;
};
/** aggregate stddev on columns */
export declare type RandomDrawingsStddevFields = {
    __typename?: 'random_drawings_stddev_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "random_drawings" */
export declare type RandomDrawingsStddevOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type RandomDrawingsStddevPopFields = {
    __typename?: 'random_drawings_stddev_pop_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "random_drawings" */
export declare type RandomDrawingsStddevPopOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type RandomDrawingsStddevSampFields = {
    __typename?: 'random_drawings_stddev_samp_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "random_drawings" */
export declare type RandomDrawingsStddevSampOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type RandomDrawingsSumFields = {
    __typename?: 'random_drawings_sum_fields';
    id?: Maybe<Scalars['bigint']>;
};
/** order by sum() on columns of table "random_drawings" */
export declare type RandomDrawingsSumOrderBy = {
    id?: Maybe<OrderBy>;
};
/** update columns of table "random_drawings" */
export declare enum RandomDrawingsUpdateColumn {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    GainId = "gain_id",
    /** column name */
    GainValidated = "gain_validated",
    /** column name */
    GameId = "game_id",
    /** column name */
    Id = "id",
    /** column name */
    WinnerId = "winner_id"
}
/** aggregate var_pop on columns */
export declare type RandomDrawingsVarPopFields = {
    __typename?: 'random_drawings_var_pop_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "random_drawings" */
export declare type RandomDrawingsVarPopOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type RandomDrawingsVarSampFields = {
    __typename?: 'random_drawings_var_samp_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "random_drawings" */
export declare type RandomDrawingsVarSampOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type RandomDrawingsVarianceFields = {
    __typename?: 'random_drawings_variance_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "random_drawings" */
export declare type RandomDrawingsVarianceOrderBy = {
    id?: Maybe<OrderBy>;
};
export declare type StDWithinGeographyInput = {
    distance: Scalars['Float'];
    from: Scalars['geography'];
    use_spheroid?: Maybe<Scalars['Boolean']>;
};
export declare type StDWithinInput = {
    distance: Scalars['Float'];
    from: Scalars['geometry'];
};
/** subscription root */
export declare type SubscriptionRoot = {
    __typename?: 'subscription_root';
    /** fetch data from the table: "addresses" */
    addresses: Array<Addresses>;
    /** fetch aggregated fields from the table: "addresses" */
    addresses_aggregate: AddressesAggregate;
    /** fetch data from the table: "addresses" using primary key columns */
    addresses_by_pk?: Maybe<Addresses>;
    /** fetch data from the table: "animations" */
    animations: Array<Animations>;
    /** fetch aggregated fields from the table: "animations" */
    animations_aggregate: AnimationsAggregate;
    /** fetch data from the table: "animations" using primary key columns */
    animations_by_pk?: Maybe<Animations>;
    /** fetch data from the table: "animations_m2m_assets" */
    animations_m2m_assets: Array<AnimationsM2mAssets>;
    /** fetch aggregated fields from the table: "animations_m2m_assets" */
    animations_m2m_assets_aggregate: AnimationsM2mAssetsAggregate;
    /** fetch data from the table: "animations_m2m_assets" using primary key columns */
    animations_m2m_assets_by_pk?: Maybe<AnimationsM2mAssets>;
    /** fetch data from the table: "ar" */
    ar: Array<Ar>;
    /** fetch aggregated fields from the table: "ar" */
    ar_aggregate: ArAggregate;
    /** fetch data from the table: "ar" using primary key columns */
    ar_by_pk?: Maybe<Ar>;
    /** fetch data from the table: "ar_m2m_animations" */
    ar_m2m_animations: Array<ArM2mAnimations>;
    /** fetch aggregated fields from the table: "ar_m2m_animations" */
    ar_m2m_animations_aggregate: ArM2mAnimationsAggregate;
    /** fetch data from the table: "ar_m2m_animations" using primary key columns */
    ar_m2m_animations_by_pk?: Maybe<ArM2mAnimations>;
    /** fetch data from the table: "ar_played" */
    ar_played: Array<ArPlayed>;
    /** fetch aggregated fields from the table: "ar_played" */
    ar_played_aggregate: ArPlayedAggregate;
    /** fetch data from the table: "ar_played" using primary key columns */
    ar_played_by_pk?: Maybe<ArPlayed>;
    /** fetch data from the table: "ar_tracker_positions" */
    ar_tracker_positions: Array<ArTrackerPositions>;
    /** fetch aggregated fields from the table: "ar_tracker_positions" */
    ar_tracker_positions_aggregate: ArTrackerPositionsAggregate;
    /** fetch data from the table: "ar_tracker_positions" using primary key columns */
    ar_tracker_positions_by_pk?: Maybe<ArTrackerPositions>;
    /** fetch data from the table: "ar_trackers" */
    ar_trackers: Array<ArTrackers>;
    /** fetch aggregated fields from the table: "ar_trackers" */
    ar_trackers_aggregate: ArTrackersAggregate;
    /** fetch data from the table: "ar_trackers" using primary key columns */
    ar_trackers_by_pk?: Maybe<ArTrackers>;
    /** fetch data from the table: "assets" */
    assets: Array<Assets>;
    /** fetch aggregated fields from the table: "assets" */
    assets_aggregate: AssetsAggregate;
    /** fetch data from the table: "assets" using primary key columns */
    assets_by_pk?: Maybe<Assets>;
    /** fetch data from the table: "assets_types" */
    assets_types: Array<AssetsTypes>;
    /** fetch aggregated fields from the table: "assets_types" */
    assets_types_aggregate: AssetsTypesAggregate;
    /** fetch data from the table: "assets_types" using primary key columns */
    assets_types_by_pk?: Maybe<AssetsTypes>;
    /** fetch data from the table: "clients" */
    clients: Array<Clients>;
    /** fetch aggregated fields from the table: "clients" */
    clients_aggregate: ClientsAggregate;
    /** fetch data from the table: "clients" using primary key columns */
    clients_by_pk?: Maybe<Clients>;
    /** fetch data from the table: "clients_password_forgotten_tokens" */
    clients_password_forgotten_tokens: Array<ClientsPasswordForgottenTokens>;
    /** fetch aggregated fields from the table: "clients_password_forgotten_tokens" */
    clients_password_forgotten_tokens_aggregate: ClientsPasswordForgottenTokensAggregate;
    /** fetch data from the table: "clients_password_forgotten_tokens" using primary key columns */
    clients_password_forgotten_tokens_by_pk?: Maybe<ClientsPasswordForgottenTokens>;
    /** fetch data from the table: "clients_roles" */
    clients_roles: Array<ClientsRoles>;
    /** fetch aggregated fields from the table: "clients_roles" */
    clients_roles_aggregate: ClientsRolesAggregate;
    /** fetch data from the table: "clients_roles" using primary key columns */
    clients_roles_by_pk?: Maybe<ClientsRoles>;
    /** fetch data from the table: "communications" */
    communications: Array<Communications>;
    /** fetch aggregated fields from the table: "communications" */
    communications_aggregate: CommunicationsAggregate;
    /** fetch data from the table: "communications" using primary key columns */
    communications_by_pk?: Maybe<Communications>;
    /** fetch data from the table: "communications_types" */
    communications_types: Array<CommunicationsTypes>;
    /** fetch aggregated fields from the table: "communications_types" */
    communications_types_aggregate: CommunicationsTypesAggregate;
    /** fetch data from the table: "communications_types" using primary key columns */
    communications_types_by_pk?: Maybe<CommunicationsTypes>;
    /** fetch data from the table: "estimates" */
    estimates: Array<Estimates>;
    /** fetch aggregated fields from the table: "estimates" */
    estimates_aggregate: EstimatesAggregate;
    /** fetch data from the table: "estimates" using primary key columns */
    estimates_by_pk?: Maybe<Estimates>;
    /** fetch data from the table: "estimates_m2m_entities" */
    estimates_m2m_entities: Array<EstimatesM2mEntities>;
    /** fetch aggregated fields from the table: "estimates_m2m_entities" */
    estimates_m2m_entities_aggregate: EstimatesM2mEntitiesAggregate;
    /** fetch data from the table: "estimates_m2m_entities" using primary key columns */
    estimates_m2m_entities_by_pk?: Maybe<EstimatesM2mEntities>;
    /** fetch data from the table: "estimates_status" */
    estimates_status: Array<EstimatesStatus>;
    /** fetch aggregated fields from the table: "estimates_status" */
    estimates_status_aggregate: EstimatesStatusAggregate;
    /** fetch data from the table: "estimates_status" using primary key columns */
    estimates_status_by_pk?: Maybe<EstimatesStatus>;
    /** fetch data from the table: "gains" */
    gains: Array<Gains>;
    /** fetch aggregated fields from the table: "gains" */
    gains_aggregate: GainsAggregate;
    /** fetch data from the table: "gains" using primary key columns */
    gains_by_pk?: Maybe<Gains>;
    /** fetch data from the table: "gains_virtuals" */
    gains_virtuals: Array<GainsVirtuals>;
    /** fetch aggregated fields from the table: "gains_virtuals" */
    gains_virtuals_aggregate: GainsVirtualsAggregate;
    /** fetch data from the table: "gains_virtuals" using primary key columns */
    gains_virtuals_by_pk?: Maybe<GainsVirtuals>;
    /** fetch data from the table: "gains_virtuals_formats" */
    gains_virtuals_formats: Array<GainsVirtualsFormats>;
    /** fetch aggregated fields from the table: "gains_virtuals_formats" */
    gains_virtuals_formats_aggregate: GainsVirtualsFormatsAggregate;
    /** fetch data from the table: "gains_virtuals_formats" using primary key columns */
    gains_virtuals_formats_by_pk?: Maybe<GainsVirtualsFormats>;
    /** fetch data from the table: "gains_virtuals_types" */
    gains_virtuals_types: Array<GainsVirtualsTypes>;
    /** fetch aggregated fields from the table: "gains_virtuals_types" */
    gains_virtuals_types_aggregate: GainsVirtualsTypesAggregate;
    /** fetch data from the table: "gains_virtuals_types" using primary key columns */
    gains_virtuals_types_by_pk?: Maybe<GainsVirtualsTypes>;
    /** fetch data from the table: "games" */
    games: Array<Games>;
    /** fetch aggregated fields from the table: "games" */
    games_aggregate: GamesAggregate;
    /** fetch data from the table: "games" using primary key columns */
    games_by_pk?: Maybe<Games>;
    /** fetch data from the table: "games_frequencies" */
    games_frequencies: Array<GamesFrequencies>;
    /** fetch aggregated fields from the table: "games_frequencies" */
    games_frequencies_aggregate: GamesFrequenciesAggregate;
    /** fetch data from the table: "games_frequencies" using primary key columns */
    games_frequencies_by_pk?: Maybe<GamesFrequencies>;
    /** fetch data from the table: "games_gains" */
    games_gains: Array<GamesGains>;
    /** fetch aggregated fields from the table: "games_gains" */
    games_gains_aggregate: GamesGainsAggregate;
    /** fetch data from the table: "games_gains_available" */
    games_gains_available: Array<GamesGainsAvailable>;
    /** fetch aggregated fields from the table: "games_gains_available" */
    games_gains_available_aggregate: GamesGainsAvailableAggregate;
    /** fetch data from the table: "games_gains" using primary key columns */
    games_gains_by_pk?: Maybe<GamesGains>;
    /** fetch data from the table: "games_played" */
    games_played: Array<GamesPlayed>;
    /** fetch aggregated fields from the table: "games_played" */
    games_played_aggregate: GamesPlayedAggregate;
    /** fetch data from the table: "games_played" using primary key columns */
    games_played_by_pk?: Maybe<GamesPlayed>;
    /** fetch data from the table: "games_played_gains_by_current_day_hours" */
    games_played_gains_by_current_day_hours: Array<GamesPlayedGainsByCurrentDayHours>;
    /** fetch aggregated fields from the table: "games_played_gains_by_current_day_hours" */
    games_played_gains_by_current_day_hours_aggregate: GamesPlayedGainsByCurrentDayHoursAggregate;
    /** fetch data from the table: "games_played_gains_by_day" */
    games_played_gains_by_day: Array<GamesPlayedGainsByDay>;
    /** fetch aggregated fields from the table: "games_played_gains_by_day" */
    games_played_gains_by_day_aggregate: GamesPlayedGainsByDayAggregate;
    /** fetch data from the table: "games_played_participations_by_current_day_hours" */
    games_played_participations_by_current_day_hours: Array<GamesPlayedParticipationsByCurrentDayHours>;
    /** fetch aggregated fields from the table: "games_played_participations_by_current_day_hours" */
    games_played_participations_by_current_day_hours_aggregate: GamesPlayedParticipationsByCurrentDayHoursAggregate;
    /** fetch data from the table: "games_played_participations_by_day" */
    games_played_participations_by_day: Array<GamesPlayedParticipationsByDay>;
    /** fetch aggregated fields from the table: "games_played_participations_by_day" */
    games_played_participations_by_day_aggregate: GamesPlayedParticipationsByDayAggregate;
    /** fetch data from the table: "games_prices" */
    games_prices: Array<GamesPrices>;
    /** fetch aggregated fields from the table: "games_prices" */
    games_prices_aggregate: GamesPricesAggregate;
    /** fetch data from the table: "games_prices" using primary key columns */
    games_prices_by_pk?: Maybe<GamesPrices>;
    /** fetch data from the table: "games_prices_types" */
    games_prices_types: Array<GamesPricesTypes>;
    /** fetch aggregated fields from the table: "games_prices_types" */
    games_prices_types_aggregate: GamesPricesTypesAggregate;
    /** fetch data from the table: "games_prices_types" using primary key columns */
    games_prices_types_by_pk?: Maybe<GamesPricesTypes>;
    /** fetch data from the table: "games_types" */
    games_types: Array<GamesTypes>;
    /** fetch aggregated fields from the table: "games_types" */
    games_types_aggregate: GamesTypesAggregate;
    /** fetch data from the table: "games_types" using primary key columns */
    games_types_by_pk?: Maybe<GamesTypes>;
    /** fetch data from the table: "games_valorizations" */
    games_valorizations: Array<GamesValorizations>;
    /** fetch aggregated fields from the table: "games_valorizations" */
    games_valorizations_aggregate: GamesValorizationsAggregate;
    /** fetch data from the table: "games_valorizations" using primary key columns */
    games_valorizations_by_pk?: Maybe<GamesValorizations>;
    /** execute function "get_nearby_communications" which returns "nearby_communications" */
    get_nearby_communications: Array<NearbyCommunications>;
    /** execute function "get_nearby_communications" and query aggregates on result of table type "nearby_communications" */
    get_nearby_communications_aggregate: NearbyCommunicationsAggregate;
    /** execute function "get_nearby_games" which returns "nearby_games" */
    get_nearby_games: Array<NearbyGames>;
    /** execute function "get_nearby_games" and query aggregates on result of table type "nearby_games" */
    get_nearby_games_aggregate: NearbyGamesAggregate;
    /** execute function "get_nearby_private_deck_communications" which returns "nearby_communications" */
    get_nearby_private_deck_communications: Array<NearbyCommunications>;
    /** execute function "get_nearby_private_deck_communications" and query aggregates on result of table type "nearby_communications" */
    get_nearby_private_deck_communications_aggregate: NearbyCommunicationsAggregate;
    /** execute function "get_nearby_private_deck_games" which returns "nearby_games" */
    get_nearby_private_deck_games: Array<NearbyGames>;
    /** execute function "get_nearby_private_deck_games" and query aggregates on result of table type "nearby_games" */
    get_nearby_private_deck_games_aggregate: NearbyGamesAggregate;
    /** fetch data from the table: "goodies" */
    goodies: Array<Goodies>;
    /** fetch aggregated fields from the table: "goodies" */
    goodies_aggregate: GoodiesAggregate;
    /** fetch data from the table: "goodies" using primary key columns */
    goodies_by_pk?: Maybe<Goodies>;
    /** fetch data from the table: "goodies_m2m_animations" */
    goodies_m2m_animations: Array<GoodiesM2mAnimations>;
    /** fetch aggregated fields from the table: "goodies_m2m_animations" */
    goodies_m2m_animations_aggregate: GoodiesM2mAnimationsAggregate;
    /** fetch data from the table: "goodies_m2m_animations" using primary key columns */
    goodies_m2m_animations_by_pk?: Maybe<GoodiesM2mAnimations>;
    /** fetch data from the table: "goodies_played" */
    goodies_played: Array<GoodiesPlayed>;
    /** fetch aggregated fields from the table: "goodies_played" */
    goodies_played_aggregate: GoodiesPlayedAggregate;
    /** fetch data from the table: "goodies_played" using primary key columns */
    goodies_played_by_pk?: Maybe<GoodiesPlayed>;
    /** fetch data from the table: "infos" */
    infos: Array<Infos>;
    /** fetch aggregated fields from the table: "infos" */
    infos_aggregate: InfosAggregate;
    /** fetch data from the table: "infos" using primary key columns */
    infos_by_pk?: Maybe<Infos>;
    /** fetch data from the table: "nearby_communications" */
    nearby_communications: Array<NearbyCommunications>;
    /** fetch aggregated fields from the table: "nearby_communications" */
    nearby_communications_aggregate: NearbyCommunicationsAggregate;
    /** fetch data from the table: "nearby_communications" using primary key columns */
    nearby_communications_by_pk?: Maybe<NearbyCommunications>;
    /** fetch data from the table: "nearby_games" */
    nearby_games: Array<NearbyGames>;
    /** fetch aggregated fields from the table: "nearby_games" */
    nearby_games_aggregate: NearbyGamesAggregate;
    /** fetch data from the table: "nearby_games" using primary key columns */
    nearby_games_by_pk?: Maybe<NearbyGames>;
    /** fetch data from the table: "photos" */
    photos: Array<Photos>;
    /** fetch aggregated fields from the table: "photos" */
    photos_aggregate: PhotosAggregate;
    /** fetch data from the table: "photos" using primary key columns */
    photos_by_pk?: Maybe<Photos>;
    /** fetch data from the table: "privates_decks" */
    privates_decks: Array<PrivatesDecks>;
    /** fetch aggregated fields from the table: "privates_decks" */
    privates_decks_aggregate: PrivatesDecksAggregate;
    /** fetch data from the table: "privates_decks" using primary key columns */
    privates_decks_by_pk?: Maybe<PrivatesDecks>;
    /** fetch data from the table: "privates_decks_m2m_entities" */
    privates_decks_m2m_entities: Array<PrivatesDecksM2mEntities>;
    /** fetch aggregated fields from the table: "privates_decks_m2m_entities" */
    privates_decks_m2m_entities_aggregate: PrivatesDecksM2mEntitiesAggregate;
    /** fetch data from the table: "privates_decks_m2m_entities" using primary key columns */
    privates_decks_m2m_entities_by_pk?: Maybe<PrivatesDecksM2mEntities>;
    /** fetch data from the table: "privates_decks_m2m_users" */
    privates_decks_m2m_users: Array<PrivatesDecksM2mUsers>;
    /** fetch aggregated fields from the table: "privates_decks_m2m_users" */
    privates_decks_m2m_users_aggregate: PrivatesDecksM2mUsersAggregate;
    /** fetch data from the table: "privates_decks_m2m_users" using primary key columns */
    privates_decks_m2m_users_by_pk?: Maybe<PrivatesDecksM2mUsers>;
    /** fetch data from the table: "quizz" */
    quizz: Array<Quizz>;
    /** fetch aggregated fields from the table: "quizz" */
    quizz_aggregate: QuizzAggregate;
    /** fetch data from the table: "quizz" using primary key columns */
    quizz_by_pk?: Maybe<Quizz>;
    /** fetch data from the table: "quizz_played" */
    quizz_played: Array<QuizzPlayed>;
    /** fetch aggregated fields from the table: "quizz_played" */
    quizz_played_aggregate: QuizzPlayedAggregate;
    /** fetch data from the table: "quizz_played" using primary key columns */
    quizz_played_by_pk?: Maybe<QuizzPlayed>;
    /** fetch data from the table: "quizz_questions" */
    quizz_questions: Array<QuizzQuestions>;
    /** fetch aggregated fields from the table: "quizz_questions" */
    quizz_questions_aggregate: QuizzQuestionsAggregate;
    /** fetch data from the table: "quizz_questions_answers" */
    quizz_questions_answers: Array<QuizzQuestionsAnswers>;
    /** fetch aggregated fields from the table: "quizz_questions_answers" */
    quizz_questions_answers_aggregate: QuizzQuestionsAnswersAggregate;
    /** fetch data from the table: "quizz_questions_answers" using primary key columns */
    quizz_questions_answers_by_pk?: Maybe<QuizzQuestionsAnswers>;
    /** fetch data from the table: "quizz_questions" using primary key columns */
    quizz_questions_by_pk?: Maybe<QuizzQuestions>;
    /** fetch data from the table: "random_drawings" */
    random_drawings: Array<RandomDrawings>;
    /** fetch aggregated fields from the table: "random_drawings" */
    random_drawings_aggregate: RandomDrawingsAggregate;
    /** fetch data from the table: "random_drawings" using primary key columns */
    random_drawings_by_pk?: Maybe<RandomDrawings>;
    /** fetch data from the table: "surveys" */
    surveys: Array<Surveys>;
    /** fetch aggregated fields from the table: "surveys" */
    surveys_aggregate: SurveysAggregate;
    /** fetch data from the table: "surveys" using primary key columns */
    surveys_by_pk?: Maybe<Surveys>;
    /** fetch data from the table: "surveys_questions" */
    surveys_questions: Array<SurveysQuestions>;
    /** fetch aggregated fields from the table: "surveys_questions" */
    surveys_questions_aggregate: SurveysQuestionsAggregate;
    /** fetch data from the table: "surveys_questions_answers" */
    surveys_questions_answers: Array<SurveysQuestionsAnswers>;
    /** fetch aggregated fields from the table: "surveys_questions_answers" */
    surveys_questions_answers_aggregate: SurveysQuestionsAnswersAggregate;
    /** fetch data from the table: "surveys_questions_answers" using primary key columns */
    surveys_questions_answers_by_pk?: Maybe<SurveysQuestionsAnswers>;
    /** fetch data from the table: "surveys_questions" using primary key columns */
    surveys_questions_by_pk?: Maybe<SurveysQuestions>;
    /** fetch data from the table: "templates" */
    templates: Array<Templates>;
    /** fetch aggregated fields from the table: "templates" */
    templates_aggregate: TemplatesAggregate;
    /** fetch data from the table: "templates" using primary key columns */
    templates_by_pk?: Maybe<Templates>;
    /** fetch data from the table: "users" */
    users: Array<Users>;
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: UsersAggregate;
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: Maybe<Users>;
    /** fetch data from the table: "votes" */
    votes: Array<Votes>;
    /** fetch aggregated fields from the table: "votes" */
    votes_aggregate: VotesAggregate;
    /** fetch data from the table: "votes" using primary key columns */
    votes_by_pk?: Maybe<Votes>;
    /** fetch data from the table: "votes_played" */
    votes_played: Array<VotesPlayed>;
    /** fetch aggregated fields from the table: "votes_played" */
    votes_played_aggregate: VotesPlayedAggregate;
    /** fetch data from the table: "votes_selections" */
    votes_selections: Array<VotesSelections>;
    /** fetch aggregated fields from the table: "votes_selections" */
    votes_selections_aggregate: VotesSelectionsAggregate;
    /** fetch data from the table: "votes_selections" using primary key columns */
    votes_selections_by_pk?: Maybe<VotesSelections>;
    /** fetch data from the table: "votes_selections_choices" */
    votes_selections_choices: Array<VotesSelectionsChoices>;
    /** fetch aggregated fields from the table: "votes_selections_choices" */
    votes_selections_choices_aggregate: VotesSelectionsChoicesAggregate;
    /** fetch data from the table: "votes_selections_choices" using primary key columns */
    votes_selections_choices_by_pk?: Maybe<VotesSelectionsChoices>;
};
/** subscription root */
export declare type SubscriptionRootAddressesArgs = {
    distinct_on?: Maybe<Array<AddressesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AddressesOrderBy>>;
    where?: Maybe<AddressesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootAddressesAggregateArgs = {
    distinct_on?: Maybe<Array<AddressesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AddressesOrderBy>>;
    where?: Maybe<AddressesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootAddressesByPkArgs = {
    id: Scalars['bigint'];
};
/** subscription root */
export declare type SubscriptionRootAnimationsArgs = {
    distinct_on?: Maybe<Array<AnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AnimationsOrderBy>>;
    where?: Maybe<AnimationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootAnimationsAggregateArgs = {
    distinct_on?: Maybe<Array<AnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AnimationsOrderBy>>;
    where?: Maybe<AnimationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootAnimationsByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootAnimationsM2mAssetsArgs = {
    distinct_on?: Maybe<Array<AnimationsM2mAssetsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AnimationsM2mAssetsOrderBy>>;
    where?: Maybe<AnimationsM2mAssetsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootAnimationsM2mAssetsAggregateArgs = {
    distinct_on?: Maybe<Array<AnimationsM2mAssetsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AnimationsM2mAssetsOrderBy>>;
    where?: Maybe<AnimationsM2mAssetsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootAnimationsM2mAssetsByPkArgs = {
    animation_id: Scalars['uuid'];
    asset_id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootArArgs = {
    distinct_on?: Maybe<Array<ArSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArOrderBy>>;
    where?: Maybe<ArBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootArAggregateArgs = {
    distinct_on?: Maybe<Array<ArSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArOrderBy>>;
    where?: Maybe<ArBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootArByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootArM2mAnimationsArgs = {
    distinct_on?: Maybe<Array<ArM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArM2mAnimationsOrderBy>>;
    where?: Maybe<ArM2mAnimationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootArM2mAnimationsAggregateArgs = {
    distinct_on?: Maybe<Array<ArM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArM2mAnimationsOrderBy>>;
    where?: Maybe<ArM2mAnimationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootArM2mAnimationsByPkArgs = {
    animation_id: Scalars['uuid'];
    ar_id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootArPlayedArgs = {
    distinct_on?: Maybe<Array<ArPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArPlayedOrderBy>>;
    where?: Maybe<ArPlayedBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootArPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<ArPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArPlayedOrderBy>>;
    where?: Maybe<ArPlayedBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootArPlayedByPkArgs = {
    id: Scalars['bigint'];
};
/** subscription root */
export declare type SubscriptionRootArTrackerPositionsArgs = {
    distinct_on?: Maybe<Array<ArTrackerPositionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArTrackerPositionsOrderBy>>;
    where?: Maybe<ArTrackerPositionsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootArTrackerPositionsAggregateArgs = {
    distinct_on?: Maybe<Array<ArTrackerPositionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArTrackerPositionsOrderBy>>;
    where?: Maybe<ArTrackerPositionsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootArTrackerPositionsByPkArgs = {
    position: Scalars['String'];
};
/** subscription root */
export declare type SubscriptionRootArTrackersArgs = {
    distinct_on?: Maybe<Array<ArTrackersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArTrackersOrderBy>>;
    where?: Maybe<ArTrackersBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootArTrackersAggregateArgs = {
    distinct_on?: Maybe<Array<ArTrackersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ArTrackersOrderBy>>;
    where?: Maybe<ArTrackersBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootArTrackersByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootAssetsArgs = {
    distinct_on?: Maybe<Array<AssetsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AssetsOrderBy>>;
    where?: Maybe<AssetsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootAssetsAggregateArgs = {
    distinct_on?: Maybe<Array<AssetsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AssetsOrderBy>>;
    where?: Maybe<AssetsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootAssetsByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootAssetsTypesArgs = {
    distinct_on?: Maybe<Array<AssetsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AssetsTypesOrderBy>>;
    where?: Maybe<AssetsTypesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootAssetsTypesAggregateArgs = {
    distinct_on?: Maybe<Array<AssetsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<AssetsTypesOrderBy>>;
    where?: Maybe<AssetsTypesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootAssetsTypesByPkArgs = {
    type: Scalars['String'];
};
/** subscription root */
export declare type SubscriptionRootClientsArgs = {
    distinct_on?: Maybe<Array<ClientsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsOrderBy>>;
    where?: Maybe<ClientsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootClientsAggregateArgs = {
    distinct_on?: Maybe<Array<ClientsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsOrderBy>>;
    where?: Maybe<ClientsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootClientsByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootClientsPasswordForgottenTokensArgs = {
    distinct_on?: Maybe<Array<ClientsPasswordForgottenTokensSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsPasswordForgottenTokensOrderBy>>;
    where?: Maybe<ClientsPasswordForgottenTokensBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootClientsPasswordForgottenTokensAggregateArgs = {
    distinct_on?: Maybe<Array<ClientsPasswordForgottenTokensSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsPasswordForgottenTokensOrderBy>>;
    where?: Maybe<ClientsPasswordForgottenTokensBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootClientsPasswordForgottenTokensByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootClientsRolesArgs = {
    distinct_on?: Maybe<Array<ClientsRolesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsRolesOrderBy>>;
    where?: Maybe<ClientsRolesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootClientsRolesAggregateArgs = {
    distinct_on?: Maybe<Array<ClientsRolesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<ClientsRolesOrderBy>>;
    where?: Maybe<ClientsRolesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootClientsRolesByPkArgs = {
    name: Scalars['String'];
};
/** subscription root */
export declare type SubscriptionRootCommunicationsArgs = {
    distinct_on?: Maybe<Array<CommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<CommunicationsOrderBy>>;
    where?: Maybe<CommunicationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootCommunicationsAggregateArgs = {
    distinct_on?: Maybe<Array<CommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<CommunicationsOrderBy>>;
    where?: Maybe<CommunicationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootCommunicationsByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootCommunicationsTypesArgs = {
    distinct_on?: Maybe<Array<CommunicationsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<CommunicationsTypesOrderBy>>;
    where?: Maybe<CommunicationsTypesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootCommunicationsTypesAggregateArgs = {
    distinct_on?: Maybe<Array<CommunicationsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<CommunicationsTypesOrderBy>>;
    where?: Maybe<CommunicationsTypesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootCommunicationsTypesByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootEstimatesArgs = {
    distinct_on?: Maybe<Array<EstimatesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesOrderBy>>;
    where?: Maybe<EstimatesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootEstimatesAggregateArgs = {
    distinct_on?: Maybe<Array<EstimatesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesOrderBy>>;
    where?: Maybe<EstimatesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootEstimatesByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootEstimatesM2mEntitiesArgs = {
    distinct_on?: Maybe<Array<EstimatesM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesM2mEntitiesOrderBy>>;
    where?: Maybe<EstimatesM2mEntitiesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootEstimatesM2mEntitiesAggregateArgs = {
    distinct_on?: Maybe<Array<EstimatesM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesM2mEntitiesOrderBy>>;
    where?: Maybe<EstimatesM2mEntitiesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootEstimatesM2mEntitiesByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootEstimatesStatusArgs = {
    distinct_on?: Maybe<Array<EstimatesStatusSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesStatusOrderBy>>;
    where?: Maybe<EstimatesStatusBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootEstimatesStatusAggregateArgs = {
    distinct_on?: Maybe<Array<EstimatesStatusSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<EstimatesStatusOrderBy>>;
    where?: Maybe<EstimatesStatusBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootEstimatesStatusByPkArgs = {
    value: Scalars['String'];
};
/** subscription root */
export declare type SubscriptionRootGainsArgs = {
    distinct_on?: Maybe<Array<GainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsOrderBy>>;
    where?: Maybe<GainsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGainsAggregateArgs = {
    distinct_on?: Maybe<Array<GainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsOrderBy>>;
    where?: Maybe<GainsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGainsByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootGainsVirtualsArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsOrderBy>>;
    where?: Maybe<GainsVirtualsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGainsVirtualsAggregateArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsOrderBy>>;
    where?: Maybe<GainsVirtualsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGainsVirtualsByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootGainsVirtualsFormatsArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsFormatsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsFormatsOrderBy>>;
    where?: Maybe<GainsVirtualsFormatsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGainsVirtualsFormatsAggregateArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsFormatsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsFormatsOrderBy>>;
    where?: Maybe<GainsVirtualsFormatsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGainsVirtualsFormatsByPkArgs = {
    value: Scalars['String'];
};
/** subscription root */
export declare type SubscriptionRootGainsVirtualsTypesArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsTypesOrderBy>>;
    where?: Maybe<GainsVirtualsTypesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGainsVirtualsTypesAggregateArgs = {
    distinct_on?: Maybe<Array<GainsVirtualsTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GainsVirtualsTypesOrderBy>>;
    where?: Maybe<GainsVirtualsTypesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGainsVirtualsTypesByPkArgs = {
    value: Scalars['String'];
};
/** subscription root */
export declare type SubscriptionRootGamesArgs = {
    distinct_on?: Maybe<Array<GamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesOrderBy>>;
    where?: Maybe<GamesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesAggregateArgs = {
    distinct_on?: Maybe<Array<GamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesOrderBy>>;
    where?: Maybe<GamesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootGamesFrequenciesArgs = {
    distinct_on?: Maybe<Array<GamesFrequenciesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesFrequenciesOrderBy>>;
    where?: Maybe<GamesFrequenciesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesFrequenciesAggregateArgs = {
    distinct_on?: Maybe<Array<GamesFrequenciesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesFrequenciesOrderBy>>;
    where?: Maybe<GamesFrequenciesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesFrequenciesByPkArgs = {
    value: Scalars['String'];
};
/** subscription root */
export declare type SubscriptionRootGamesGainsArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesGainsAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesGainsAvailableArgs = {
    distinct_on?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsAvailableOrderBy>>;
    where?: Maybe<GamesGainsAvailableBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesGainsAvailableAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsAvailableOrderBy>>;
    where?: Maybe<GamesGainsAvailableBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesGainsByPkArgs = {
    gain_id: Scalars['uuid'];
    game_id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedArgs = {
    distinct_on?: Maybe<Array<GamesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedOrderBy>>;
    where?: Maybe<GamesPlayedBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedOrderBy>>;
    where?: Maybe<GamesPlayedBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedByPkArgs = {
    id: Scalars['bigint'];
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedGainsByCurrentDayHoursArgs = {
    distinct_on?: Maybe<Array<GamesPlayedGainsByCurrentDayHoursSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedGainsByCurrentDayHoursOrderBy>>;
    where?: Maybe<GamesPlayedGainsByCurrentDayHoursBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedGainsByCurrentDayHoursAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedGainsByCurrentDayHoursSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedGainsByCurrentDayHoursOrderBy>>;
    where?: Maybe<GamesPlayedGainsByCurrentDayHoursBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedGainsByDayArgs = {
    distinct_on?: Maybe<Array<GamesPlayedGainsByDaySelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedGainsByDayOrderBy>>;
    where?: Maybe<GamesPlayedGainsByDayBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedGainsByDayAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedGainsByDaySelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedGainsByDayOrderBy>>;
    where?: Maybe<GamesPlayedGainsByDayBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedParticipationsByCurrentDayHoursArgs = {
    distinct_on?: Maybe<Array<GamesPlayedParticipationsByCurrentDayHoursSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedParticipationsByCurrentDayHoursOrderBy>>;
    where?: Maybe<GamesPlayedParticipationsByCurrentDayHoursBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedParticipationsByCurrentDayHoursAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedParticipationsByCurrentDayHoursSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedParticipationsByCurrentDayHoursOrderBy>>;
    where?: Maybe<GamesPlayedParticipationsByCurrentDayHoursBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedParticipationsByDayArgs = {
    distinct_on?: Maybe<Array<GamesPlayedParticipationsByDaySelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedParticipationsByDayOrderBy>>;
    where?: Maybe<GamesPlayedParticipationsByDayBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPlayedParticipationsByDayAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPlayedParticipationsByDaySelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPlayedParticipationsByDayOrderBy>>;
    where?: Maybe<GamesPlayedParticipationsByDayBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPricesArgs = {
    distinct_on?: Maybe<Array<GamesPricesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPricesOrderBy>>;
    where?: Maybe<GamesPricesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPricesAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPricesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPricesOrderBy>>;
    where?: Maybe<GamesPricesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPricesByPkArgs = {
    game_id: Scalars['uuid'];
    price_type: Scalars['String'];
};
/** subscription root */
export declare type SubscriptionRootGamesPricesTypesArgs = {
    distinct_on?: Maybe<Array<GamesPricesTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPricesTypesOrderBy>>;
    where?: Maybe<GamesPricesTypesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPricesTypesAggregateArgs = {
    distinct_on?: Maybe<Array<GamesPricesTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesPricesTypesOrderBy>>;
    where?: Maybe<GamesPricesTypesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesPricesTypesByPkArgs = {
    value: Scalars['String'];
};
/** subscription root */
export declare type SubscriptionRootGamesTypesArgs = {
    distinct_on?: Maybe<Array<GamesTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesTypesOrderBy>>;
    where?: Maybe<GamesTypesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesTypesAggregateArgs = {
    distinct_on?: Maybe<Array<GamesTypesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesTypesOrderBy>>;
    where?: Maybe<GamesTypesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesTypesByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootGamesValorizationsArgs = {
    distinct_on?: Maybe<Array<GamesValorizationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesValorizationsOrderBy>>;
    where?: Maybe<GamesValorizationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesValorizationsAggregateArgs = {
    distinct_on?: Maybe<Array<GamesValorizationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesValorizationsOrderBy>>;
    where?: Maybe<GamesValorizationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGamesValorizationsByPkArgs = {
    value: Scalars['String'];
};
/** subscription root */
export declare type SubscriptionRootGetNearbyCommunicationsArgs = {
    args: GetNearbyCommunicationsArgs;
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGetNearbyCommunicationsAggregateArgs = {
    args: GetNearbyCommunicationsArgs;
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGetNearbyGamesArgs = {
    args: GetNearbyGamesArgs;
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGetNearbyGamesAggregateArgs = {
    args: GetNearbyGamesArgs;
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGetNearbyPrivateDeckCommunicationsArgs = {
    args: GetNearbyPrivateDeckCommunicationsArgs;
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGetNearbyPrivateDeckCommunicationsAggregateArgs = {
    args: GetNearbyPrivateDeckCommunicationsArgs;
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGetNearbyPrivateDeckGamesArgs = {
    args: GetNearbyPrivateDeckGamesArgs;
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGetNearbyPrivateDeckGamesAggregateArgs = {
    args: GetNearbyPrivateDeckGamesArgs;
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGoodiesArgs = {
    distinct_on?: Maybe<Array<GoodiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesOrderBy>>;
    where?: Maybe<GoodiesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGoodiesAggregateArgs = {
    distinct_on?: Maybe<Array<GoodiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesOrderBy>>;
    where?: Maybe<GoodiesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGoodiesByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootGoodiesM2mAnimationsArgs = {
    distinct_on?: Maybe<Array<GoodiesM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesM2mAnimationsOrderBy>>;
    where?: Maybe<GoodiesM2mAnimationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGoodiesM2mAnimationsAggregateArgs = {
    distinct_on?: Maybe<Array<GoodiesM2mAnimationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesM2mAnimationsOrderBy>>;
    where?: Maybe<GoodiesM2mAnimationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGoodiesM2mAnimationsByPkArgs = {
    animation_id: Scalars['uuid'];
    goodie_id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootGoodiesPlayedArgs = {
    distinct_on?: Maybe<Array<GoodiesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesPlayedOrderBy>>;
    where?: Maybe<GoodiesPlayedBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGoodiesPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<GoodiesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GoodiesPlayedOrderBy>>;
    where?: Maybe<GoodiesPlayedBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootGoodiesPlayedByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootInfosArgs = {
    distinct_on?: Maybe<Array<InfosSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<InfosOrderBy>>;
    where?: Maybe<InfosBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootInfosAggregateArgs = {
    distinct_on?: Maybe<Array<InfosSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<InfosOrderBy>>;
    where?: Maybe<InfosBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootInfosByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootNearbyCommunicationsArgs = {
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootNearbyCommunicationsAggregateArgs = {
    distinct_on?: Maybe<Array<NearbyCommunicationsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyCommunicationsOrderBy>>;
    where?: Maybe<NearbyCommunicationsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootNearbyCommunicationsByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootNearbyGamesArgs = {
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootNearbyGamesAggregateArgs = {
    distinct_on?: Maybe<Array<NearbyGamesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<NearbyGamesOrderBy>>;
    where?: Maybe<NearbyGamesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootNearbyGamesByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootPhotosArgs = {
    distinct_on?: Maybe<Array<PhotosSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PhotosOrderBy>>;
    where?: Maybe<PhotosBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootPhotosAggregateArgs = {
    distinct_on?: Maybe<Array<PhotosSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PhotosOrderBy>>;
    where?: Maybe<PhotosBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootPhotosByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootPrivatesDecksArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksOrderBy>>;
    where?: Maybe<PrivatesDecksBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootPrivatesDecksAggregateArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksOrderBy>>;
    where?: Maybe<PrivatesDecksBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootPrivatesDecksByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootPrivatesDecksM2mEntitiesArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mEntitiesOrderBy>>;
    where?: Maybe<PrivatesDecksM2mEntitiesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootPrivatesDecksM2mEntitiesAggregateArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mEntitiesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mEntitiesOrderBy>>;
    where?: Maybe<PrivatesDecksM2mEntitiesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootPrivatesDecksM2mEntitiesByPkArgs = {
    entity_id: Scalars['uuid'];
    private_deck: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootPrivatesDecksM2mUsersArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mUsersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mUsersOrderBy>>;
    where?: Maybe<PrivatesDecksM2mUsersBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootPrivatesDecksM2mUsersAggregateArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mUsersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mUsersOrderBy>>;
    where?: Maybe<PrivatesDecksM2mUsersBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootPrivatesDecksM2mUsersByPkArgs = {
    private_deck_id: Scalars['uuid'];
    user_id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootQuizzArgs = {
    distinct_on?: Maybe<Array<QuizzSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzOrderBy>>;
    where?: Maybe<QuizzBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootQuizzAggregateArgs = {
    distinct_on?: Maybe<Array<QuizzSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzOrderBy>>;
    where?: Maybe<QuizzBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootQuizzByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootQuizzPlayedArgs = {
    distinct_on?: Maybe<Array<QuizzPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzPlayedOrderBy>>;
    where?: Maybe<QuizzPlayedBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootQuizzPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<QuizzPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzPlayedOrderBy>>;
    where?: Maybe<QuizzPlayedBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootQuizzPlayedByPkArgs = {
    id: Scalars['bigint'];
};
/** subscription root */
export declare type SubscriptionRootQuizzQuestionsArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsOrderBy>>;
    where?: Maybe<QuizzQuestionsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootQuizzQuestionsAggregateArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsOrderBy>>;
    where?: Maybe<QuizzQuestionsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootQuizzQuestionsAnswersArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsAnswersOrderBy>>;
    where?: Maybe<QuizzQuestionsAnswersBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootQuizzQuestionsAnswersAggregateArgs = {
    distinct_on?: Maybe<Array<QuizzQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<QuizzQuestionsAnswersOrderBy>>;
    where?: Maybe<QuizzQuestionsAnswersBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootQuizzQuestionsAnswersByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootQuizzQuestionsByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootRandomDrawingsArgs = {
    distinct_on?: Maybe<Array<RandomDrawingsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<RandomDrawingsOrderBy>>;
    where?: Maybe<RandomDrawingsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootRandomDrawingsAggregateArgs = {
    distinct_on?: Maybe<Array<RandomDrawingsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<RandomDrawingsOrderBy>>;
    where?: Maybe<RandomDrawingsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootRandomDrawingsByPkArgs = {
    id: Scalars['bigint'];
};
/** subscription root */
export declare type SubscriptionRootSurveysArgs = {
    distinct_on?: Maybe<Array<SurveysSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysOrderBy>>;
    where?: Maybe<SurveysBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootSurveysAggregateArgs = {
    distinct_on?: Maybe<Array<SurveysSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysOrderBy>>;
    where?: Maybe<SurveysBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootSurveysByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootSurveysQuestionsArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsOrderBy>>;
    where?: Maybe<SurveysQuestionsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootSurveysQuestionsAggregateArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsOrderBy>>;
    where?: Maybe<SurveysQuestionsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootSurveysQuestionsAnswersArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsAnswersOrderBy>>;
    where?: Maybe<SurveysQuestionsAnswersBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootSurveysQuestionsAnswersAggregateArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsAnswersOrderBy>>;
    where?: Maybe<SurveysQuestionsAnswersBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootSurveysQuestionsAnswersByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootSurveysQuestionsByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootTemplatesArgs = {
    distinct_on?: Maybe<Array<TemplatesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<TemplatesOrderBy>>;
    where?: Maybe<TemplatesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootTemplatesAggregateArgs = {
    distinct_on?: Maybe<Array<TemplatesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<TemplatesOrderBy>>;
    where?: Maybe<TemplatesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootTemplatesByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootUsersArgs = {
    distinct_on?: Maybe<Array<UsersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<UsersOrderBy>>;
    where?: Maybe<UsersBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootUsersAggregateArgs = {
    distinct_on?: Maybe<Array<UsersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<UsersOrderBy>>;
    where?: Maybe<UsersBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootUsersByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootVotesArgs = {
    distinct_on?: Maybe<Array<VotesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesOrderBy>>;
    where?: Maybe<VotesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootVotesAggregateArgs = {
    distinct_on?: Maybe<Array<VotesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesOrderBy>>;
    where?: Maybe<VotesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootVotesByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootVotesPlayedArgs = {
    distinct_on?: Maybe<Array<VotesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesPlayedOrderBy>>;
    where?: Maybe<VotesPlayedBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootVotesPlayedAggregateArgs = {
    distinct_on?: Maybe<Array<VotesPlayedSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesPlayedOrderBy>>;
    where?: Maybe<VotesPlayedBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootVotesSelectionsArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsOrderBy>>;
    where?: Maybe<VotesSelectionsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootVotesSelectionsAggregateArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsOrderBy>>;
    where?: Maybe<VotesSelectionsBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootVotesSelectionsByPkArgs = {
    id: Scalars['uuid'];
};
/** subscription root */
export declare type SubscriptionRootVotesSelectionsChoicesArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsChoicesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsChoicesOrderBy>>;
    where?: Maybe<VotesSelectionsChoicesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootVotesSelectionsChoicesAggregateArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsChoicesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsChoicesOrderBy>>;
    where?: Maybe<VotesSelectionsChoicesBoolExp>;
};
/** subscription root */
export declare type SubscriptionRootVotesSelectionsChoicesByPkArgs = {
    id: Scalars['uuid'];
};
/** columns and relationships of "surveys" */
export declare type Surveys = {
    __typename?: 'surveys';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client?: Maybe<Clients>;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    id: Scalars['uuid'];
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    location?: Maybe<Scalars['geography']>;
    name: Scalars['String'];
    /** An array relationship */
    surveys_questions: Array<SurveysQuestions>;
    /** An aggregated array relationship */
    surveys_questions_aggregate: SurveysQuestionsAggregate;
    /** An object relationship */
    type?: Maybe<CommunicationsTypes>;
    type_id: Scalars['uuid'];
    tz?: Maybe<Scalars['String']>;
};
/** columns and relationships of "surveys" */
export declare type SurveysDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "surveys" */
export declare type SurveysSurveysQuestionsArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsOrderBy>>;
    where?: Maybe<SurveysQuestionsBoolExp>;
};
/** columns and relationships of "surveys" */
export declare type SurveysSurveysQuestionsAggregateArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsOrderBy>>;
    where?: Maybe<SurveysQuestionsBoolExp>;
};
/** aggregated selection of "surveys" */
export declare type SurveysAggregate = {
    __typename?: 'surveys_aggregate';
    aggregate?: Maybe<SurveysAggregateFields>;
    nodes: Array<Surveys>;
};
/** aggregate fields of "surveys" */
export declare type SurveysAggregateFields = {
    __typename?: 'surveys_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<SurveysMaxFields>;
    min?: Maybe<SurveysMinFields>;
};
/** aggregate fields of "surveys" */
export declare type SurveysAggregateFieldsCountArgs = {
    columns?: Maybe<Array<SurveysSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "surveys" */
export declare type SurveysAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<SurveysMaxOrderBy>;
    min?: Maybe<SurveysMinOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type SurveysAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "surveys" */
export declare type SurveysArrRelInsertInput = {
    data: Array<SurveysInsertInput>;
    on_conflict?: Maybe<SurveysOnConflict>;
};
/** Boolean expression to filter rows from the table "surveys". All fields are combined with a logical 'AND'. */
export declare type SurveysBoolExp = {
    _and?: Maybe<Array<Maybe<SurveysBoolExp>>>;
    _not?: Maybe<SurveysBoolExp>;
    _or?: Maybe<Array<Maybe<SurveysBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    card_image_background_id?: Maybe<UuidComparisonExp>;
    card_image_id?: Maybe<UuidComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_private?: Maybe<BooleanComparisonExp>;
    location?: Maybe<GeographyComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    surveys_questions?: Maybe<SurveysQuestionsBoolExp>;
    type?: Maybe<CommunicationsTypesBoolExp>;
    type_id?: Maybe<UuidComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
};
/** unique or primary key constraints on table "surveys" */
export declare enum SurveysConstraint {
    /** unique or primary key constraint */
    SurveysIdKey = "surveys_id_key",
    /** unique or primary key constraint */
    SurveysPkey = "surveys_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type SurveysDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type SurveysDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type SurveysDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
};
/** input type for inserting data into table "surveys" */
export declare type SurveysInsertInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    name?: Maybe<Scalars['String']>;
    surveys_questions?: Maybe<SurveysQuestionsArrRelInsertInput>;
    type?: Maybe<CommunicationsTypesObjRelInsertInput>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type SurveysMaxFields = {
    __typename?: 'surveys_max_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "surveys" */
export declare type SurveysMaxOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type SurveysMinFields = {
    __typename?: 'surveys_min_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "surveys" */
export declare type SurveysMinOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** response of any mutation on the table "surveys" */
export declare type SurveysMutationResponse = {
    __typename?: 'surveys_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Surveys>;
};
/** input type for inserting object relation for remote table "surveys" */
export declare type SurveysObjRelInsertInput = {
    data: SurveysInsertInput;
    on_conflict?: Maybe<SurveysOnConflict>;
};
/** on conflict condition type for table "surveys" */
export declare type SurveysOnConflict = {
    constraint: SurveysConstraint;
    update_columns: Array<SurveysUpdateColumn>;
    where?: Maybe<SurveysBoolExp>;
};
/** ordering options when selecting data from "surveys" */
export declare type SurveysOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_private?: Maybe<OrderBy>;
    location?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    surveys_questions_aggregate?: Maybe<SurveysQuestionsAggregateOrderBy>;
    type?: Maybe<CommunicationsTypesOrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** primary key columns input for table: "surveys" */
export declare type SurveysPkColumnsInput = {
    id: Scalars['uuid'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type SurveysPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** columns and relationships of "surveys_questions" */
export declare type SurveysQuestions = {
    __typename?: 'surveys_questions';
    /** An object relationship */
    asset?: Maybe<Assets>;
    asset_id?: Maybe<Scalars['uuid']>;
    id: Scalars['uuid'];
    question: Scalars['String'];
    /** An object relationship */
    survey: Surveys;
    survey_id: Scalars['uuid'];
    /** An array relationship */
    surveys_questions_answers: Array<SurveysQuestionsAnswers>;
    /** An aggregated array relationship */
    surveys_questions_answers_aggregate: SurveysQuestionsAnswersAggregate;
};
/** columns and relationships of "surveys_questions" */
export declare type SurveysQuestionsSurveysQuestionsAnswersArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsAnswersOrderBy>>;
    where?: Maybe<SurveysQuestionsAnswersBoolExp>;
};
/** columns and relationships of "surveys_questions" */
export declare type SurveysQuestionsSurveysQuestionsAnswersAggregateArgs = {
    distinct_on?: Maybe<Array<SurveysQuestionsAnswersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<SurveysQuestionsAnswersOrderBy>>;
    where?: Maybe<SurveysQuestionsAnswersBoolExp>;
};
/** aggregated selection of "surveys_questions" */
export declare type SurveysQuestionsAggregate = {
    __typename?: 'surveys_questions_aggregate';
    aggregate?: Maybe<SurveysQuestionsAggregateFields>;
    nodes: Array<SurveysQuestions>;
};
/** aggregate fields of "surveys_questions" */
export declare type SurveysQuestionsAggregateFields = {
    __typename?: 'surveys_questions_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<SurveysQuestionsMaxFields>;
    min?: Maybe<SurveysQuestionsMinFields>;
};
/** aggregate fields of "surveys_questions" */
export declare type SurveysQuestionsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<SurveysQuestionsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "surveys_questions" */
export declare type SurveysQuestionsAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<SurveysQuestionsMaxOrderBy>;
    min?: Maybe<SurveysQuestionsMinOrderBy>;
};
/** columns and relationships of "surveys_questions_answers" */
export declare type SurveysQuestionsAnswers = {
    __typename?: 'surveys_questions_answers';
    answer: Scalars['String'];
    id: Scalars['uuid'];
    survey_question_id: Scalars['uuid'];
};
/** aggregated selection of "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersAggregate = {
    __typename?: 'surveys_questions_answers_aggregate';
    aggregate?: Maybe<SurveysQuestionsAnswersAggregateFields>;
    nodes: Array<SurveysQuestionsAnswers>;
};
/** aggregate fields of "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersAggregateFields = {
    __typename?: 'surveys_questions_answers_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<SurveysQuestionsAnswersMaxFields>;
    min?: Maybe<SurveysQuestionsAnswersMinFields>;
};
/** aggregate fields of "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersAggregateFieldsCountArgs = {
    columns?: Maybe<Array<SurveysQuestionsAnswersSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<SurveysQuestionsAnswersMaxOrderBy>;
    min?: Maybe<SurveysQuestionsAnswersMinOrderBy>;
};
/** input type for inserting array relation for remote table "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersArrRelInsertInput = {
    data: Array<SurveysQuestionsAnswersInsertInput>;
    on_conflict?: Maybe<SurveysQuestionsAnswersOnConflict>;
};
/** Boolean expression to filter rows from the table "surveys_questions_answers". All fields are combined with a logical 'AND'. */
export declare type SurveysQuestionsAnswersBoolExp = {
    _and?: Maybe<Array<Maybe<SurveysQuestionsAnswersBoolExp>>>;
    _not?: Maybe<SurveysQuestionsAnswersBoolExp>;
    _or?: Maybe<Array<Maybe<SurveysQuestionsAnswersBoolExp>>>;
    answer?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    survey_question_id?: Maybe<UuidComparisonExp>;
};
/** unique or primary key constraints on table "surveys_questions_answers" */
export declare enum SurveysQuestionsAnswersConstraint {
    /** unique or primary key constraint */
    SurveysQuestionsAnswersPkey = "surveys_questions_answers_pkey"
}
/** input type for inserting data into table "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersInsertInput = {
    answer?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    survey_question_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type SurveysQuestionsAnswersMaxFields = {
    __typename?: 'surveys_questions_answers_max_fields';
    answer?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    survey_question_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersMaxOrderBy = {
    answer?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    survey_question_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type SurveysQuestionsAnswersMinFields = {
    __typename?: 'surveys_questions_answers_min_fields';
    answer?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    survey_question_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersMinOrderBy = {
    answer?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    survey_question_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersMutationResponse = {
    __typename?: 'surveys_questions_answers_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<SurveysQuestionsAnswers>;
};
/** input type for inserting object relation for remote table "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersObjRelInsertInput = {
    data: SurveysQuestionsAnswersInsertInput;
    on_conflict?: Maybe<SurveysQuestionsAnswersOnConflict>;
};
/** on conflict condition type for table "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersOnConflict = {
    constraint: SurveysQuestionsAnswersConstraint;
    update_columns: Array<SurveysQuestionsAnswersUpdateColumn>;
    where?: Maybe<SurveysQuestionsAnswersBoolExp>;
};
/** ordering options when selecting data from "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersOrderBy = {
    answer?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    survey_question_id?: Maybe<OrderBy>;
};
/** primary key columns input for table: "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "surveys_questions_answers" */
export declare enum SurveysQuestionsAnswersSelectColumn {
    /** column name */
    Answer = "answer",
    /** column name */
    Id = "id",
    /** column name */
    SurveyQuestionId = "survey_question_id"
}
/** input type for updating data in table "surveys_questions_answers" */
export declare type SurveysQuestionsAnswersSetInput = {
    answer?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    survey_question_id?: Maybe<Scalars['uuid']>;
};
/** update columns of table "surveys_questions_answers" */
export declare enum SurveysQuestionsAnswersUpdateColumn {
    /** column name */
    Answer = "answer",
    /** column name */
    Id = "id",
    /** column name */
    SurveyQuestionId = "survey_question_id"
}
/** input type for inserting array relation for remote table "surveys_questions" */
export declare type SurveysQuestionsArrRelInsertInput = {
    data: Array<SurveysQuestionsInsertInput>;
    on_conflict?: Maybe<SurveysQuestionsOnConflict>;
};
/** Boolean expression to filter rows from the table "surveys_questions". All fields are combined with a logical 'AND'. */
export declare type SurveysQuestionsBoolExp = {
    _and?: Maybe<Array<Maybe<SurveysQuestionsBoolExp>>>;
    _not?: Maybe<SurveysQuestionsBoolExp>;
    _or?: Maybe<Array<Maybe<SurveysQuestionsBoolExp>>>;
    asset?: Maybe<AssetsBoolExp>;
    asset_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    question?: Maybe<StringComparisonExp>;
    survey?: Maybe<SurveysBoolExp>;
    survey_id?: Maybe<UuidComparisonExp>;
    surveys_questions_answers?: Maybe<SurveysQuestionsAnswersBoolExp>;
};
/** unique or primary key constraints on table "surveys_questions" */
export declare enum SurveysQuestionsConstraint {
    /** unique or primary key constraint */
    SurveysQuestionsPkey = "surveys_questions_pkey"
}
/** input type for inserting data into table "surveys_questions" */
export declare type SurveysQuestionsInsertInput = {
    asset?: Maybe<AssetsObjRelInsertInput>;
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    question?: Maybe<Scalars['String']>;
    survey?: Maybe<SurveysObjRelInsertInput>;
    survey_id?: Maybe<Scalars['uuid']>;
    surveys_questions_answers?: Maybe<SurveysQuestionsAnswersArrRelInsertInput>;
};
/** aggregate max on columns */
export declare type SurveysQuestionsMaxFields = {
    __typename?: 'surveys_questions_max_fields';
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    question?: Maybe<Scalars['String']>;
    survey_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "surveys_questions" */
export declare type SurveysQuestionsMaxOrderBy = {
    asset_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    question?: Maybe<OrderBy>;
    survey_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type SurveysQuestionsMinFields = {
    __typename?: 'surveys_questions_min_fields';
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    question?: Maybe<Scalars['String']>;
    survey_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "surveys_questions" */
export declare type SurveysQuestionsMinOrderBy = {
    asset_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    question?: Maybe<OrderBy>;
    survey_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "surveys_questions" */
export declare type SurveysQuestionsMutationResponse = {
    __typename?: 'surveys_questions_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<SurveysQuestions>;
};
/** input type for inserting object relation for remote table "surveys_questions" */
export declare type SurveysQuestionsObjRelInsertInput = {
    data: SurveysQuestionsInsertInput;
    on_conflict?: Maybe<SurveysQuestionsOnConflict>;
};
/** on conflict condition type for table "surveys_questions" */
export declare type SurveysQuestionsOnConflict = {
    constraint: SurveysQuestionsConstraint;
    update_columns: Array<SurveysQuestionsUpdateColumn>;
    where?: Maybe<SurveysQuestionsBoolExp>;
};
/** ordering options when selecting data from "surveys_questions" */
export declare type SurveysQuestionsOrderBy = {
    asset?: Maybe<AssetsOrderBy>;
    asset_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    question?: Maybe<OrderBy>;
    survey?: Maybe<SurveysOrderBy>;
    survey_id?: Maybe<OrderBy>;
    surveys_questions_answers_aggregate?: Maybe<SurveysQuestionsAnswersAggregateOrderBy>;
};
/** primary key columns input for table: "surveys_questions" */
export declare type SurveysQuestionsPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "surveys_questions" */
export declare enum SurveysQuestionsSelectColumn {
    /** column name */
    AssetId = "asset_id",
    /** column name */
    Id = "id",
    /** column name */
    Question = "question",
    /** column name */
    SurveyId = "survey_id"
}
/** input type for updating data in table "surveys_questions" */
export declare type SurveysQuestionsSetInput = {
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    question?: Maybe<Scalars['String']>;
    survey_id?: Maybe<Scalars['uuid']>;
};
/** update columns of table "surveys_questions" */
export declare enum SurveysQuestionsUpdateColumn {
    /** column name */
    AssetId = "asset_id",
    /** column name */
    Id = "id",
    /** column name */
    Question = "question",
    /** column name */
    SurveyId = "survey_id"
}
/** select columns of table "surveys" */
export declare enum SurveysSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    Location = "location",
    /** column name */
    Name = "name",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz"
}
/** input type for updating data in table "surveys" */
export declare type SurveysSetInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    name?: Maybe<Scalars['String']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** update columns of table "surveys" */
export declare enum SurveysUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    Location = "location",
    /** column name */
    Name = "name",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz"
}
/** columns and relationships of "templates" */
export declare type Templates = {
    __typename?: 'templates';
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    design?: Maybe<Scalars['jsonb']>;
    html?: Maybe<Scalars['jsonb']>;
    id: Scalars['uuid'];
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    name: Scalars['String'];
    updated_at: Scalars['timestamptz'];
};
/** columns and relationships of "templates" */
export declare type TemplatesDesignArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "templates" */
export declare type TemplatesHtmlArgs = {
    path?: Maybe<Scalars['String']>;
};
/** aggregated selection of "templates" */
export declare type TemplatesAggregate = {
    __typename?: 'templates_aggregate';
    aggregate?: Maybe<TemplatesAggregateFields>;
    nodes: Array<Templates>;
};
/** aggregate fields of "templates" */
export declare type TemplatesAggregateFields = {
    __typename?: 'templates_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<TemplatesMaxFields>;
    min?: Maybe<TemplatesMinFields>;
};
/** aggregate fields of "templates" */
export declare type TemplatesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<TemplatesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "templates" */
export declare type TemplatesAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<TemplatesMaxOrderBy>;
    min?: Maybe<TemplatesMinOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type TemplatesAppendInput = {
    design?: Maybe<Scalars['jsonb']>;
    html?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "templates" */
export declare type TemplatesArrRelInsertInput = {
    data: Array<TemplatesInsertInput>;
    on_conflict?: Maybe<TemplatesOnConflict>;
};
/** Boolean expression to filter rows from the table "templates". All fields are combined with a logical 'AND'. */
export declare type TemplatesBoolExp = {
    _and?: Maybe<Array<Maybe<TemplatesBoolExp>>>;
    _not?: Maybe<TemplatesBoolExp>;
    _or?: Maybe<Array<Maybe<TemplatesBoolExp>>>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    design?: Maybe<JsonbComparisonExp>;
    html?: Maybe<JsonbComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    updated_at?: Maybe<TimestamptzComparisonExp>;
};
/** unique or primary key constraints on table "templates" */
export declare enum TemplatesConstraint {
    /** unique or primary key constraint */
    TemplatesPkey = "Templates_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type TemplatesDeleteAtPathInput = {
    design?: Maybe<Array<Maybe<Scalars['String']>>>;
    html?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type TemplatesDeleteElemInput = {
    design?: Maybe<Scalars['Int']>;
    html?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type TemplatesDeleteKeyInput = {
    design?: Maybe<Scalars['String']>;
    html?: Maybe<Scalars['String']>;
};
/** input type for inserting data into table "templates" */
export declare type TemplatesInsertInput = {
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    design?: Maybe<Scalars['jsonb']>;
    html?: Maybe<Scalars['jsonb']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};
/** aggregate max on columns */
export declare type TemplatesMaxFields = {
    __typename?: 'templates_max_fields';
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};
/** order by max() on columns of table "templates" */
export declare type TemplatesMaxOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    updated_at?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type TemplatesMinFields = {
    __typename?: 'templates_min_fields';
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};
/** order by min() on columns of table "templates" */
export declare type TemplatesMinOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    updated_at?: Maybe<OrderBy>;
};
/** response of any mutation on the table "templates" */
export declare type TemplatesMutationResponse = {
    __typename?: 'templates_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Templates>;
};
/** input type for inserting object relation for remote table "templates" */
export declare type TemplatesObjRelInsertInput = {
    data: TemplatesInsertInput;
    on_conflict?: Maybe<TemplatesOnConflict>;
};
/** on conflict condition type for table "templates" */
export declare type TemplatesOnConflict = {
    constraint: TemplatesConstraint;
    update_columns: Array<TemplatesUpdateColumn>;
    where?: Maybe<TemplatesBoolExp>;
};
/** ordering options when selecting data from "templates" */
export declare type TemplatesOrderBy = {
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    design?: Maybe<OrderBy>;
    html?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    updated_at?: Maybe<OrderBy>;
};
/** primary key columns input for table: "templates" */
export declare type TemplatesPkColumnsInput = {
    id: Scalars['uuid'];
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type TemplatesPrependInput = {
    design?: Maybe<Scalars['jsonb']>;
    html?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "templates" */
export declare enum TemplatesSelectColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Design = "design",
    /** column name */
    Html = "html",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    Name = "name",
    /** column name */
    UpdatedAt = "updated_at"
}
/** input type for updating data in table "templates" */
export declare type TemplatesSetInput = {
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    design?: Maybe<Scalars['jsonb']>;
    html?: Maybe<Scalars['jsonb']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};
/** update columns of table "templates" */
export declare enum TemplatesUpdateColumn {
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Design = "design",
    /** column name */
    Html = "html",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    Name = "name",
    /** column name */
    UpdatedAt = "updated_at"
}
/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export declare type TimestampComparisonExp = {
    _eq?: Maybe<Scalars['timestamp']>;
    _gt?: Maybe<Scalars['timestamp']>;
    _gte?: Maybe<Scalars['timestamp']>;
    _in?: Maybe<Array<Scalars['timestamp']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['timestamp']>;
    _lte?: Maybe<Scalars['timestamp']>;
    _neq?: Maybe<Scalars['timestamp']>;
    _nin?: Maybe<Array<Scalars['timestamp']>>;
};
/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export declare type TimestamptzComparisonExp = {
    _eq?: Maybe<Scalars['timestamptz']>;
    _gt?: Maybe<Scalars['timestamptz']>;
    _gte?: Maybe<Scalars['timestamptz']>;
    _in?: Maybe<Array<Scalars['timestamptz']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['timestamptz']>;
    _lte?: Maybe<Scalars['timestamptz']>;
    _neq?: Maybe<Scalars['timestamptz']>;
    _nin?: Maybe<Array<Scalars['timestamptz']>>;
};
/** columns and relationships of "users" */
export declare type Users = {
    __typename?: 'users';
    /** An object relationship */
    address?: Maybe<Addresses>;
    address_id?: Maybe<Scalars['bigint']>;
    apple_id?: Maybe<Scalars['String']>;
    birthdate?: Maybe<Scalars['date']>;
    created_at: Scalars['timestamptz'];
    email: Scalars['String'];
    first_name?: Maybe<Scalars['String']>;
    id: Scalars['uuid'];
    is_active: Scalars['Boolean'];
    is_tester: Scalars['Boolean'];
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    /** An object relationship */
    picture?: Maybe<Assets>;
    picture_id?: Maybe<Scalars['uuid']>;
    /** An array relationship */
    privates_decks: Array<PrivatesDecksM2mUsers>;
    /** An aggregated array relationship */
    privates_decks_aggregate: PrivatesDecksM2mUsersAggregate;
};
/** columns and relationships of "users" */
export declare type UsersPrivatesDecksArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mUsersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mUsersOrderBy>>;
    where?: Maybe<PrivatesDecksM2mUsersBoolExp>;
};
/** columns and relationships of "users" */
export declare type UsersPrivatesDecksAggregateArgs = {
    distinct_on?: Maybe<Array<PrivatesDecksM2mUsersSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<PrivatesDecksM2mUsersOrderBy>>;
    where?: Maybe<PrivatesDecksM2mUsersBoolExp>;
};
/** aggregated selection of "users" */
export declare type UsersAggregate = {
    __typename?: 'users_aggregate';
    aggregate?: Maybe<UsersAggregateFields>;
    nodes: Array<Users>;
};
/** aggregate fields of "users" */
export declare type UsersAggregateFields = {
    __typename?: 'users_aggregate_fields';
    avg?: Maybe<UsersAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<UsersMaxFields>;
    min?: Maybe<UsersMinFields>;
    stddev?: Maybe<UsersStddevFields>;
    stddev_pop?: Maybe<UsersStddevPopFields>;
    stddev_samp?: Maybe<UsersStddevSampFields>;
    sum?: Maybe<UsersSumFields>;
    var_pop?: Maybe<UsersVarPopFields>;
    var_samp?: Maybe<UsersVarSampFields>;
    variance?: Maybe<UsersVarianceFields>;
};
/** aggregate fields of "users" */
export declare type UsersAggregateFieldsCountArgs = {
    columns?: Maybe<Array<UsersSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "users" */
export declare type UsersAggregateOrderBy = {
    avg?: Maybe<UsersAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<UsersMaxOrderBy>;
    min?: Maybe<UsersMinOrderBy>;
    stddev?: Maybe<UsersStddevOrderBy>;
    stddev_pop?: Maybe<UsersStddevPopOrderBy>;
    stddev_samp?: Maybe<UsersStddevSampOrderBy>;
    sum?: Maybe<UsersSumOrderBy>;
    var_pop?: Maybe<UsersVarPopOrderBy>;
    var_samp?: Maybe<UsersVarSampOrderBy>;
    variance?: Maybe<UsersVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "users" */
export declare type UsersArrRelInsertInput = {
    data: Array<UsersInsertInput>;
    on_conflict?: Maybe<UsersOnConflict>;
};
/** aggregate avg on columns */
export declare type UsersAvgFields = {
    __typename?: 'users_avg_fields';
    address_id?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "users" */
export declare type UsersAvgOrderBy = {
    address_id?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export declare type UsersBoolExp = {
    _and?: Maybe<Array<Maybe<UsersBoolExp>>>;
    _not?: Maybe<UsersBoolExp>;
    _or?: Maybe<Array<Maybe<UsersBoolExp>>>;
    address?: Maybe<AddressesBoolExp>;
    address_id?: Maybe<BigintComparisonExp>;
    apple_id?: Maybe<StringComparisonExp>;
    birthdate?: Maybe<DateComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    email?: Maybe<StringComparisonExp>;
    first_name?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_tester?: Maybe<BooleanComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    password?: Maybe<StringComparisonExp>;
    picture?: Maybe<AssetsBoolExp>;
    picture_id?: Maybe<UuidComparisonExp>;
    privates_decks?: Maybe<PrivatesDecksM2mUsersBoolExp>;
};
/** unique or primary key constraints on table "users" */
export declare enum UsersConstraint {
    /** unique or primary key constraint */
    UsersAddressIdKey = "users_address_id_key",
    /** unique or primary key constraint */
    UsersAppleIdKey = "users_apple_id_key",
    /** unique or primary key constraint */
    UsersEmailKey = "users_email_key",
    /** unique or primary key constraint */
    UsersPkey = "users_pkey"
}
/** input type for incrementing integer column in table "users" */
export declare type UsersIncInput = {
    address_id?: Maybe<Scalars['bigint']>;
};
/** input type for inserting data into table "users" */
export declare type UsersInsertInput = {
    address?: Maybe<AddressesObjRelInsertInput>;
    address_id?: Maybe<Scalars['bigint']>;
    apple_id?: Maybe<Scalars['String']>;
    birthdate?: Maybe<Scalars['date']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    first_name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_tester?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    picture?: Maybe<AssetsObjRelInsertInput>;
    picture_id?: Maybe<Scalars['uuid']>;
    privates_decks?: Maybe<PrivatesDecksM2mUsersArrRelInsertInput>;
};
/** aggregate max on columns */
export declare type UsersMaxFields = {
    __typename?: 'users_max_fields';
    address_id?: Maybe<Scalars['bigint']>;
    apple_id?: Maybe<Scalars['String']>;
    birthdate?: Maybe<Scalars['date']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    first_name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    picture_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "users" */
export declare type UsersMaxOrderBy = {
    address_id?: Maybe<OrderBy>;
    apple_id?: Maybe<OrderBy>;
    birthdate?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    email?: Maybe<OrderBy>;
    first_name?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    password?: Maybe<OrderBy>;
    picture_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type UsersMinFields = {
    __typename?: 'users_min_fields';
    address_id?: Maybe<Scalars['bigint']>;
    apple_id?: Maybe<Scalars['String']>;
    birthdate?: Maybe<Scalars['date']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    first_name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    picture_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "users" */
export declare type UsersMinOrderBy = {
    address_id?: Maybe<OrderBy>;
    apple_id?: Maybe<OrderBy>;
    birthdate?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    email?: Maybe<OrderBy>;
    first_name?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    password?: Maybe<OrderBy>;
    picture_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "users" */
export declare type UsersMutationResponse = {
    __typename?: 'users_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Users>;
};
/** input type for inserting object relation for remote table "users" */
export declare type UsersObjRelInsertInput = {
    data: UsersInsertInput;
    on_conflict?: Maybe<UsersOnConflict>;
};
/** on conflict condition type for table "users" */
export declare type UsersOnConflict = {
    constraint: UsersConstraint;
    update_columns: Array<UsersUpdateColumn>;
    where?: Maybe<UsersBoolExp>;
};
/** ordering options when selecting data from "users" */
export declare type UsersOrderBy = {
    address?: Maybe<AddressesOrderBy>;
    address_id?: Maybe<OrderBy>;
    apple_id?: Maybe<OrderBy>;
    birthdate?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    email?: Maybe<OrderBy>;
    first_name?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_tester?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    password?: Maybe<OrderBy>;
    picture?: Maybe<AssetsOrderBy>;
    picture_id?: Maybe<OrderBy>;
    privates_decks_aggregate?: Maybe<PrivatesDecksM2mUsersAggregateOrderBy>;
};
/** primary key columns input for table: "users" */
export declare type UsersPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "users" */
export declare enum UsersSelectColumn {
    /** column name */
    AddressId = "address_id",
    /** column name */
    AppleId = "apple_id",
    /** column name */
    Birthdate = "birthdate",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Email = "email",
    /** column name */
    FirstName = "first_name",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsTester = "is_tester",
    /** column name */
    Name = "name",
    /** column name */
    Password = "password",
    /** column name */
    PictureId = "picture_id"
}
/** input type for updating data in table "users" */
export declare type UsersSetInput = {
    address_id?: Maybe<Scalars['bigint']>;
    apple_id?: Maybe<Scalars['String']>;
    birthdate?: Maybe<Scalars['date']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    first_name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_tester?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    picture_id?: Maybe<Scalars['uuid']>;
};
/** aggregate stddev on columns */
export declare type UsersStddevFields = {
    __typename?: 'users_stddev_fields';
    address_id?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "users" */
export declare type UsersStddevOrderBy = {
    address_id?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type UsersStddevPopFields = {
    __typename?: 'users_stddev_pop_fields';
    address_id?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "users" */
export declare type UsersStddevPopOrderBy = {
    address_id?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type UsersStddevSampFields = {
    __typename?: 'users_stddev_samp_fields';
    address_id?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "users" */
export declare type UsersStddevSampOrderBy = {
    address_id?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type UsersSumFields = {
    __typename?: 'users_sum_fields';
    address_id?: Maybe<Scalars['bigint']>;
};
/** order by sum() on columns of table "users" */
export declare type UsersSumOrderBy = {
    address_id?: Maybe<OrderBy>;
};
/** update columns of table "users" */
export declare enum UsersUpdateColumn {
    /** column name */
    AddressId = "address_id",
    /** column name */
    AppleId = "apple_id",
    /** column name */
    Birthdate = "birthdate",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Email = "email",
    /** column name */
    FirstName = "first_name",
    /** column name */
    Id = "id",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsTester = "is_tester",
    /** column name */
    Name = "name",
    /** column name */
    Password = "password",
    /** column name */
    PictureId = "picture_id"
}
/** aggregate var_pop on columns */
export declare type UsersVarPopFields = {
    __typename?: 'users_var_pop_fields';
    address_id?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "users" */
export declare type UsersVarPopOrderBy = {
    address_id?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type UsersVarSampFields = {
    __typename?: 'users_var_samp_fields';
    address_id?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "users" */
export declare type UsersVarSampOrderBy = {
    address_id?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type UsersVarianceFields = {
    __typename?: 'users_variance_fields';
    address_id?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "users" */
export declare type UsersVarianceOrderBy = {
    address_id?: Maybe<OrderBy>;
};
/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export declare type UuidComparisonExp = {
    _eq?: Maybe<Scalars['uuid']>;
    _gt?: Maybe<Scalars['uuid']>;
    _gte?: Maybe<Scalars['uuid']>;
    _in?: Maybe<Array<Scalars['uuid']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['uuid']>;
    _lte?: Maybe<Scalars['uuid']>;
    _neq?: Maybe<Scalars['uuid']>;
    _nin?: Maybe<Array<Scalars['uuid']>>;
};
/** columns and relationships of "votes" */
export declare type Votes = {
    __typename?: 'votes';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    /** An object relationship */
    client: Clients;
    client_id: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    date_end: Scalars['date'];
    date_start: Scalars['date'];
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    /** An array relationship */
    games_gains: Array<GamesGains>;
    /** An aggregated array relationship */
    games_gains_aggregate: GamesGainsAggregate;
    /** An array relationship */
    games_gains_available: Array<GamesGainsAvailable>;
    /** An aggregated array relationship */
    games_gains_available_aggregate: GamesGainsAvailableAggregate;
    gtc?: Maybe<Scalars['String']>;
    id: Scalars['uuid'];
    instructions?: Maybe<Scalars['String']>;
    is_active: Scalars['Boolean'];
    is_archive: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    is_test: Scalars['Boolean'];
    keep_cumulated_probability: Scalars['Boolean'];
    location?: Maybe<Scalars['geography']>;
    max_participations: Scalars['Int'];
    name: Scalars['String'];
    radius?: Maybe<Scalars['Int']>;
    /** An object relationship */
    type: GamesTypes;
    type_id: Scalars['uuid'];
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    /** An array relationship */
    votes_selections: Array<VotesSelections>;
    /** An aggregated array relationship */
    votes_selections_aggregate: VotesSelectionsAggregate;
    with_instant_gains: Scalars['Boolean'];
    with_magic_random_drawings: Scalars['Boolean'];
    with_random_drawings: Scalars['Boolean'];
};
/** columns and relationships of "votes" */
export declare type VotesDescriptionArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "votes" */
export declare type VotesGamesGainsArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "votes" */
export declare type VotesGamesGainsAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsOrderBy>>;
    where?: Maybe<GamesGainsBoolExp>;
};
/** columns and relationships of "votes" */
export declare type VotesGamesGainsAvailableArgs = {
    distinct_on?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsAvailableOrderBy>>;
    where?: Maybe<GamesGainsAvailableBoolExp>;
};
/** columns and relationships of "votes" */
export declare type VotesGamesGainsAvailableAggregateArgs = {
    distinct_on?: Maybe<Array<GamesGainsAvailableSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<GamesGainsAvailableOrderBy>>;
    where?: Maybe<GamesGainsAvailableBoolExp>;
};
/** columns and relationships of "votes" */
export declare type VotesVotesSelectionsArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsOrderBy>>;
    where?: Maybe<VotesSelectionsBoolExp>;
};
/** columns and relationships of "votes" */
export declare type VotesVotesSelectionsAggregateArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsOrderBy>>;
    where?: Maybe<VotesSelectionsBoolExp>;
};
/** aggregated selection of "votes" */
export declare type VotesAggregate = {
    __typename?: 'votes_aggregate';
    aggregate?: Maybe<VotesAggregateFields>;
    nodes: Array<Votes>;
};
/** aggregate fields of "votes" */
export declare type VotesAggregateFields = {
    __typename?: 'votes_aggregate_fields';
    avg?: Maybe<VotesAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<VotesMaxFields>;
    min?: Maybe<VotesMinFields>;
    stddev?: Maybe<VotesStddevFields>;
    stddev_pop?: Maybe<VotesStddevPopFields>;
    stddev_samp?: Maybe<VotesStddevSampFields>;
    sum?: Maybe<VotesSumFields>;
    var_pop?: Maybe<VotesVarPopFields>;
    var_samp?: Maybe<VotesVarSampFields>;
    variance?: Maybe<VotesVarianceFields>;
};
/** aggregate fields of "votes" */
export declare type VotesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<VotesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "votes" */
export declare type VotesAggregateOrderBy = {
    avg?: Maybe<VotesAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<VotesMaxOrderBy>;
    min?: Maybe<VotesMinOrderBy>;
    stddev?: Maybe<VotesStddevOrderBy>;
    stddev_pop?: Maybe<VotesStddevPopOrderBy>;
    stddev_samp?: Maybe<VotesStddevSampOrderBy>;
    sum?: Maybe<VotesSumOrderBy>;
    var_pop?: Maybe<VotesVarPopOrderBy>;
    var_samp?: Maybe<VotesVarSampOrderBy>;
    variance?: Maybe<VotesVarianceOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type VotesAppendInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "votes" */
export declare type VotesArrRelInsertInput = {
    data: Array<VotesInsertInput>;
    on_conflict?: Maybe<VotesOnConflict>;
};
/** aggregate avg on columns */
export declare type VotesAvgFields = {
    __typename?: 'votes_avg_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "votes" */
export declare type VotesAvgOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "votes". All fields are combined with a logical 'AND'. */
export declare type VotesBoolExp = {
    _and?: Maybe<Array<Maybe<VotesBoolExp>>>;
    _not?: Maybe<VotesBoolExp>;
    _or?: Maybe<Array<Maybe<VotesBoolExp>>>;
    address?: Maybe<StringComparisonExp>;
    card_image_background_id?: Maybe<UuidComparisonExp>;
    card_image_id?: Maybe<UuidComparisonExp>;
    city?: Maybe<StringComparisonExp>;
    client?: Maybe<ClientsBoolExp>;
    client_id?: Maybe<UuidComparisonExp>;
    created_at?: Maybe<TimestamptzComparisonExp>;
    date_end?: Maybe<DateComparisonExp>;
    date_start?: Maybe<DateComparisonExp>;
    description?: Maybe<JsonbComparisonExp>;
    frequency?: Maybe<GamesFrequenciesEnumComparisonExp>;
    games_gains?: Maybe<GamesGainsBoolExp>;
    games_gains_available?: Maybe<GamesGainsAvailableBoolExp>;
    gtc?: Maybe<StringComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    instructions?: Maybe<StringComparisonExp>;
    is_active?: Maybe<BooleanComparisonExp>;
    is_archive?: Maybe<BooleanComparisonExp>;
    is_private?: Maybe<BooleanComparisonExp>;
    is_test?: Maybe<BooleanComparisonExp>;
    keep_cumulated_probability?: Maybe<BooleanComparisonExp>;
    location?: Maybe<GeographyComparisonExp>;
    max_participations?: Maybe<IntComparisonExp>;
    name?: Maybe<StringComparisonExp>;
    radius?: Maybe<IntComparisonExp>;
    type?: Maybe<GamesTypesBoolExp>;
    type_id?: Maybe<UuidComparisonExp>;
    tz?: Maybe<StringComparisonExp>;
    valorization?: Maybe<GamesValorizationsEnumComparisonExp>;
    votes_selections?: Maybe<VotesSelectionsBoolExp>;
    with_instant_gains?: Maybe<BooleanComparisonExp>;
    with_magic_random_drawings?: Maybe<BooleanComparisonExp>;
    with_random_drawings?: Maybe<BooleanComparisonExp>;
};
/** unique or primary key constraints on table "votes" */
export declare enum VotesConstraint {
    /** unique or primary key constraint */
    VotesPkey = "votes_pkey"
}
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type VotesDeleteAtPathInput = {
    description?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type VotesDeleteElemInput = {
    description?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type VotesDeleteKeyInput = {
    description?: Maybe<Scalars['String']>;
};
/** input type for incrementing integer column in table "votes" */
export declare type VotesIncInput = {
    max_participations?: Maybe<Scalars['Int']>;
    radius?: Maybe<Scalars['Int']>;
};
/** input type for inserting data into table "votes" */
export declare type VotesInsertInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client?: Maybe<ClientsObjRelInsertInput>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    games_gains?: Maybe<GamesGainsArrRelInsertInput>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    keep_cumulated_probability?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type?: Maybe<GamesTypesObjRelInsertInput>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    votes_selections?: Maybe<VotesSelectionsArrRelInsertInput>;
    with_instant_gains?: Maybe<Scalars['Boolean']>;
    with_magic_random_drawings?: Maybe<Scalars['Boolean']>;
    with_random_drawings?: Maybe<Scalars['Boolean']>;
};
/** aggregate max on columns */
export declare type VotesMaxFields = {
    __typename?: 'votes_max_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "votes" */
export declare type VotesMaxOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type VotesMinFields = {
    __typename?: 'votes_min_fields';
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "votes" */
export declare type VotesMinOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
};
/** response of any mutation on the table "votes" */
export declare type VotesMutationResponse = {
    __typename?: 'votes_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<Votes>;
};
/** input type for inserting object relation for remote table "votes" */
export declare type VotesObjRelInsertInput = {
    data: VotesInsertInput;
    on_conflict?: Maybe<VotesOnConflict>;
};
/** on conflict condition type for table "votes" */
export declare type VotesOnConflict = {
    constraint: VotesConstraint;
    update_columns: Array<VotesUpdateColumn>;
    where?: Maybe<VotesBoolExp>;
};
/** ordering options when selecting data from "votes" */
export declare type VotesOrderBy = {
    address?: Maybe<OrderBy>;
    card_image_background_id?: Maybe<OrderBy>;
    card_image_id?: Maybe<OrderBy>;
    city?: Maybe<OrderBy>;
    client?: Maybe<ClientsOrderBy>;
    client_id?: Maybe<OrderBy>;
    created_at?: Maybe<OrderBy>;
    date_end?: Maybe<OrderBy>;
    date_start?: Maybe<OrderBy>;
    description?: Maybe<OrderBy>;
    frequency?: Maybe<OrderBy>;
    games_gains_aggregate?: Maybe<GamesGainsAggregateOrderBy>;
    games_gains_available_aggregate?: Maybe<GamesGainsAvailableAggregateOrderBy>;
    gtc?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    instructions?: Maybe<OrderBy>;
    is_active?: Maybe<OrderBy>;
    is_archive?: Maybe<OrderBy>;
    is_private?: Maybe<OrderBy>;
    is_test?: Maybe<OrderBy>;
    keep_cumulated_probability?: Maybe<OrderBy>;
    location?: Maybe<OrderBy>;
    max_participations?: Maybe<OrderBy>;
    name?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
    type?: Maybe<GamesTypesOrderBy>;
    type_id?: Maybe<OrderBy>;
    tz?: Maybe<OrderBy>;
    valorization?: Maybe<OrderBy>;
    votes_selections_aggregate?: Maybe<VotesSelectionsAggregateOrderBy>;
    with_instant_gains?: Maybe<OrderBy>;
    with_magic_random_drawings?: Maybe<OrderBy>;
    with_random_drawings?: Maybe<OrderBy>;
};
/** primary key columns input for table: "votes" */
export declare type VotesPkColumnsInput = {
    id: Scalars['uuid'];
};
/** columns and relationships of "votes_played" */
export declare type VotesPlayed = {
    __typename?: 'votes_played';
    /** An object relationship */
    gain?: Maybe<Gains>;
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated: Scalars['Boolean'];
    game_id: Scalars['uuid'];
    id: Scalars['bigint'];
    played_at: Scalars['timestamptz'];
    results: Scalars['jsonb'];
    user_id: Scalars['uuid'];
};
/** columns and relationships of "votes_played" */
export declare type VotesPlayedResultsArgs = {
    path?: Maybe<Scalars['String']>;
};
/** aggregated selection of "votes_played" */
export declare type VotesPlayedAggregate = {
    __typename?: 'votes_played_aggregate';
    aggregate?: Maybe<VotesPlayedAggregateFields>;
    nodes: Array<VotesPlayed>;
};
/** aggregate fields of "votes_played" */
export declare type VotesPlayedAggregateFields = {
    __typename?: 'votes_played_aggregate_fields';
    avg?: Maybe<VotesPlayedAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<VotesPlayedMaxFields>;
    min?: Maybe<VotesPlayedMinFields>;
    stddev?: Maybe<VotesPlayedStddevFields>;
    stddev_pop?: Maybe<VotesPlayedStddevPopFields>;
    stddev_samp?: Maybe<VotesPlayedStddevSampFields>;
    sum?: Maybe<VotesPlayedSumFields>;
    var_pop?: Maybe<VotesPlayedVarPopFields>;
    var_samp?: Maybe<VotesPlayedVarSampFields>;
    variance?: Maybe<VotesPlayedVarianceFields>;
};
/** aggregate fields of "votes_played" */
export declare type VotesPlayedAggregateFieldsCountArgs = {
    columns?: Maybe<Array<VotesPlayedSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "votes_played" */
export declare type VotesPlayedAggregateOrderBy = {
    avg?: Maybe<VotesPlayedAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<VotesPlayedMaxOrderBy>;
    min?: Maybe<VotesPlayedMinOrderBy>;
    stddev?: Maybe<VotesPlayedStddevOrderBy>;
    stddev_pop?: Maybe<VotesPlayedStddevPopOrderBy>;
    stddev_samp?: Maybe<VotesPlayedStddevSampOrderBy>;
    sum?: Maybe<VotesPlayedSumOrderBy>;
    var_pop?: Maybe<VotesPlayedVarPopOrderBy>;
    var_samp?: Maybe<VotesPlayedVarSampOrderBy>;
    variance?: Maybe<VotesPlayedVarianceOrderBy>;
};
/** append existing jsonb value of filtered columns with new jsonb value */
export declare type VotesPlayedAppendInput = {
    results?: Maybe<Scalars['jsonb']>;
};
/** input type for inserting array relation for remote table "votes_played" */
export declare type VotesPlayedArrRelInsertInput = {
    data: Array<VotesPlayedInsertInput>;
};
/** aggregate avg on columns */
export declare type VotesPlayedAvgFields = {
    __typename?: 'votes_played_avg_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "votes_played" */
export declare type VotesPlayedAvgOrderBy = {
    id?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "votes_played". All fields are combined with a logical 'AND'. */
export declare type VotesPlayedBoolExp = {
    _and?: Maybe<Array<Maybe<VotesPlayedBoolExp>>>;
    _not?: Maybe<VotesPlayedBoolExp>;
    _or?: Maybe<Array<Maybe<VotesPlayedBoolExp>>>;
    gain?: Maybe<GainsBoolExp>;
    gain_id?: Maybe<UuidComparisonExp>;
    gain_validated?: Maybe<BooleanComparisonExp>;
    game_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<BigintComparisonExp>;
    played_at?: Maybe<TimestamptzComparisonExp>;
    results?: Maybe<JsonbComparisonExp>;
    user_id?: Maybe<UuidComparisonExp>;
};
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export declare type VotesPlayedDeleteAtPathInput = {
    results?: Maybe<Array<Maybe<Scalars['String']>>>;
};
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export declare type VotesPlayedDeleteElemInput = {
    results?: Maybe<Scalars['Int']>;
};
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export declare type VotesPlayedDeleteKeyInput = {
    results?: Maybe<Scalars['String']>;
};
/** input type for incrementing integer column in table "votes_played" */
export declare type VotesPlayedIncInput = {
    id?: Maybe<Scalars['bigint']>;
};
/** input type for inserting data into table "votes_played" */
export declare type VotesPlayedInsertInput = {
    gain?: Maybe<GainsObjRelInsertInput>;
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated?: Maybe<Scalars['Boolean']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    results?: Maybe<Scalars['jsonb']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate max on columns */
export declare type VotesPlayedMaxFields = {
    __typename?: 'votes_played_max_fields';
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "votes_played" */
export declare type VotesPlayedMaxOrderBy = {
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type VotesPlayedMinFields = {
    __typename?: 'votes_played_min_fields';
    gain_id?: Maybe<Scalars['uuid']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "votes_played" */
export declare type VotesPlayedMinOrderBy = {
    gain_id?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "votes_played" */
export declare type VotesPlayedMutationResponse = {
    __typename?: 'votes_played_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<VotesPlayed>;
};
/** input type for inserting object relation for remote table "votes_played" */
export declare type VotesPlayedObjRelInsertInput = {
    data: VotesPlayedInsertInput;
};
/** ordering options when selecting data from "votes_played" */
export declare type VotesPlayedOrderBy = {
    gain?: Maybe<GainsOrderBy>;
    gain_id?: Maybe<OrderBy>;
    gain_validated?: Maybe<OrderBy>;
    game_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    played_at?: Maybe<OrderBy>;
    results?: Maybe<OrderBy>;
    user_id?: Maybe<OrderBy>;
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type VotesPlayedPrependInput = {
    results?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "votes_played" */
export declare enum VotesPlayedSelectColumn {
    /** column name */
    GainId = "gain_id",
    /** column name */
    GainValidated = "gain_validated",
    /** column name */
    GameId = "game_id",
    /** column name */
    Id = "id",
    /** column name */
    PlayedAt = "played_at",
    /** column name */
    Results = "results",
    /** column name */
    UserId = "user_id"
}
/** input type for updating data in table "votes_played" */
export declare type VotesPlayedSetInput = {
    gain_id?: Maybe<Scalars['uuid']>;
    gain_validated?: Maybe<Scalars['Boolean']>;
    game_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['bigint']>;
    played_at?: Maybe<Scalars['timestamptz']>;
    results?: Maybe<Scalars['jsonb']>;
    user_id?: Maybe<Scalars['uuid']>;
};
/** aggregate stddev on columns */
export declare type VotesPlayedStddevFields = {
    __typename?: 'votes_played_stddev_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "votes_played" */
export declare type VotesPlayedStddevOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type VotesPlayedStddevPopFields = {
    __typename?: 'votes_played_stddev_pop_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "votes_played" */
export declare type VotesPlayedStddevPopOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type VotesPlayedStddevSampFields = {
    __typename?: 'votes_played_stddev_samp_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "votes_played" */
export declare type VotesPlayedStddevSampOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type VotesPlayedSumFields = {
    __typename?: 'votes_played_sum_fields';
    id?: Maybe<Scalars['bigint']>;
};
/** order by sum() on columns of table "votes_played" */
export declare type VotesPlayedSumOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate var_pop on columns */
export declare type VotesPlayedVarPopFields = {
    __typename?: 'votes_played_var_pop_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "votes_played" */
export declare type VotesPlayedVarPopOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type VotesPlayedVarSampFields = {
    __typename?: 'votes_played_var_samp_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "votes_played" */
export declare type VotesPlayedVarSampOrderBy = {
    id?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type VotesPlayedVarianceFields = {
    __typename?: 'votes_played_variance_fields';
    id?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "votes_played" */
export declare type VotesPlayedVarianceOrderBy = {
    id?: Maybe<OrderBy>;
};
/** prepend existing jsonb value of filtered columns with new jsonb value */
export declare type VotesPrependInput = {
    description?: Maybe<Scalars['jsonb']>;
};
/** select columns of table "votes" */
export declare enum VotesSelectColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Frequency = "frequency",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    IsTest = "is_test",
    /** column name */
    KeepCumulatedProbability = "keep_cumulated_probability",
    /** column name */
    Location = "location",
    /** column name */
    MaxParticipations = "max_participations",
    /** column name */
    Name = "name",
    /** column name */
    Radius = "radius",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz",
    /** column name */
    Valorization = "valorization",
    /** column name */
    WithInstantGains = "with_instant_gains",
    /** column name */
    WithMagicRandomDrawings = "with_magic_random_drawings",
    /** column name */
    WithRandomDrawings = "with_random_drawings"
}
/** columns and relationships of "votes_selections" */
export declare type VotesSelections = {
    __typename?: 'votes_selections';
    id: Scalars['uuid'];
    required_choices: Scalars['numeric'];
    selection: Scalars['String'];
    /** An object relationship */
    vote: Votes;
    vote_id: Scalars['uuid'];
    /** An array relationship */
    votes_selections_choices: Array<VotesSelectionsChoices>;
    /** An aggregated array relationship */
    votes_selections_choices_aggregate: VotesSelectionsChoicesAggregate;
};
/** columns and relationships of "votes_selections" */
export declare type VotesSelectionsVotesSelectionsChoicesArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsChoicesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsChoicesOrderBy>>;
    where?: Maybe<VotesSelectionsChoicesBoolExp>;
};
/** columns and relationships of "votes_selections" */
export declare type VotesSelectionsVotesSelectionsChoicesAggregateArgs = {
    distinct_on?: Maybe<Array<VotesSelectionsChoicesSelectColumn>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<VotesSelectionsChoicesOrderBy>>;
    where?: Maybe<VotesSelectionsChoicesBoolExp>;
};
/** aggregated selection of "votes_selections" */
export declare type VotesSelectionsAggregate = {
    __typename?: 'votes_selections_aggregate';
    aggregate?: Maybe<VotesSelectionsAggregateFields>;
    nodes: Array<VotesSelections>;
};
/** aggregate fields of "votes_selections" */
export declare type VotesSelectionsAggregateFields = {
    __typename?: 'votes_selections_aggregate_fields';
    avg?: Maybe<VotesSelectionsAvgFields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<VotesSelectionsMaxFields>;
    min?: Maybe<VotesSelectionsMinFields>;
    stddev?: Maybe<VotesSelectionsStddevFields>;
    stddev_pop?: Maybe<VotesSelectionsStddevPopFields>;
    stddev_samp?: Maybe<VotesSelectionsStddevSampFields>;
    sum?: Maybe<VotesSelectionsSumFields>;
    var_pop?: Maybe<VotesSelectionsVarPopFields>;
    var_samp?: Maybe<VotesSelectionsVarSampFields>;
    variance?: Maybe<VotesSelectionsVarianceFields>;
};
/** aggregate fields of "votes_selections" */
export declare type VotesSelectionsAggregateFieldsCountArgs = {
    columns?: Maybe<Array<VotesSelectionsSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "votes_selections" */
export declare type VotesSelectionsAggregateOrderBy = {
    avg?: Maybe<VotesSelectionsAvgOrderBy>;
    count?: Maybe<OrderBy>;
    max?: Maybe<VotesSelectionsMaxOrderBy>;
    min?: Maybe<VotesSelectionsMinOrderBy>;
    stddev?: Maybe<VotesSelectionsStddevOrderBy>;
    stddev_pop?: Maybe<VotesSelectionsStddevPopOrderBy>;
    stddev_samp?: Maybe<VotesSelectionsStddevSampOrderBy>;
    sum?: Maybe<VotesSelectionsSumOrderBy>;
    var_pop?: Maybe<VotesSelectionsVarPopOrderBy>;
    var_samp?: Maybe<VotesSelectionsVarSampOrderBy>;
    variance?: Maybe<VotesSelectionsVarianceOrderBy>;
};
/** input type for inserting array relation for remote table "votes_selections" */
export declare type VotesSelectionsArrRelInsertInput = {
    data: Array<VotesSelectionsInsertInput>;
    on_conflict?: Maybe<VotesSelectionsOnConflict>;
};
/** aggregate avg on columns */
export declare type VotesSelectionsAvgFields = {
    __typename?: 'votes_selections_avg_fields';
    required_choices?: Maybe<Scalars['Float']>;
};
/** order by avg() on columns of table "votes_selections" */
export declare type VotesSelectionsAvgOrderBy = {
    required_choices?: Maybe<OrderBy>;
};
/** Boolean expression to filter rows from the table "votes_selections". All fields are combined with a logical 'AND'. */
export declare type VotesSelectionsBoolExp = {
    _and?: Maybe<Array<Maybe<VotesSelectionsBoolExp>>>;
    _not?: Maybe<VotesSelectionsBoolExp>;
    _or?: Maybe<Array<Maybe<VotesSelectionsBoolExp>>>;
    id?: Maybe<UuidComparisonExp>;
    required_choices?: Maybe<NumericComparisonExp>;
    selection?: Maybe<StringComparisonExp>;
    vote?: Maybe<VotesBoolExp>;
    vote_id?: Maybe<UuidComparisonExp>;
    votes_selections_choices?: Maybe<VotesSelectionsChoicesBoolExp>;
};
/** columns and relationships of "votes_selections_choices" */
export declare type VotesSelectionsChoices = {
    __typename?: 'votes_selections_choices';
    /** An object relationship */
    asset: Assets;
    asset_id: Scalars['uuid'];
    id: Scalars['uuid'];
    label: Scalars['String'];
    vote_selection_id: Scalars['uuid'];
    /** An object relationship */
    votes_selections: VotesSelections;
};
/** aggregated selection of "votes_selections_choices" */
export declare type VotesSelectionsChoicesAggregate = {
    __typename?: 'votes_selections_choices_aggregate';
    aggregate?: Maybe<VotesSelectionsChoicesAggregateFields>;
    nodes: Array<VotesSelectionsChoices>;
};
/** aggregate fields of "votes_selections_choices" */
export declare type VotesSelectionsChoicesAggregateFields = {
    __typename?: 'votes_selections_choices_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<VotesSelectionsChoicesMaxFields>;
    min?: Maybe<VotesSelectionsChoicesMinFields>;
};
/** aggregate fields of "votes_selections_choices" */
export declare type VotesSelectionsChoicesAggregateFieldsCountArgs = {
    columns?: Maybe<Array<VotesSelectionsChoicesSelectColumn>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "votes_selections_choices" */
export declare type VotesSelectionsChoicesAggregateOrderBy = {
    count?: Maybe<OrderBy>;
    max?: Maybe<VotesSelectionsChoicesMaxOrderBy>;
    min?: Maybe<VotesSelectionsChoicesMinOrderBy>;
};
/** input type for inserting array relation for remote table "votes_selections_choices" */
export declare type VotesSelectionsChoicesArrRelInsertInput = {
    data: Array<VotesSelectionsChoicesInsertInput>;
    on_conflict?: Maybe<VotesSelectionsChoicesOnConflict>;
};
/** Boolean expression to filter rows from the table "votes_selections_choices". All fields are combined with a logical 'AND'. */
export declare type VotesSelectionsChoicesBoolExp = {
    _and?: Maybe<Array<Maybe<VotesSelectionsChoicesBoolExp>>>;
    _not?: Maybe<VotesSelectionsChoicesBoolExp>;
    _or?: Maybe<Array<Maybe<VotesSelectionsChoicesBoolExp>>>;
    asset?: Maybe<AssetsBoolExp>;
    asset_id?: Maybe<UuidComparisonExp>;
    id?: Maybe<UuidComparisonExp>;
    label?: Maybe<StringComparisonExp>;
    vote_selection_id?: Maybe<UuidComparisonExp>;
    votes_selections?: Maybe<VotesSelectionsBoolExp>;
};
/** unique or primary key constraints on table "votes_selections_choices" */
export declare enum VotesSelectionsChoicesConstraint {
    /** unique or primary key constraint */
    VotesSelectionsChoicesPkey = "votes_selections_choices_pkey"
}
/** input type for inserting data into table "votes_selections_choices" */
export declare type VotesSelectionsChoicesInsertInput = {
    asset?: Maybe<AssetsObjRelInsertInput>;
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    label?: Maybe<Scalars['String']>;
    vote_selection_id?: Maybe<Scalars['uuid']>;
    votes_selections?: Maybe<VotesSelectionsObjRelInsertInput>;
};
/** aggregate max on columns */
export declare type VotesSelectionsChoicesMaxFields = {
    __typename?: 'votes_selections_choices_max_fields';
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    label?: Maybe<Scalars['String']>;
    vote_selection_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "votes_selections_choices" */
export declare type VotesSelectionsChoicesMaxOrderBy = {
    asset_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    label?: Maybe<OrderBy>;
    vote_selection_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type VotesSelectionsChoicesMinFields = {
    __typename?: 'votes_selections_choices_min_fields';
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    label?: Maybe<Scalars['String']>;
    vote_selection_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "votes_selections_choices" */
export declare type VotesSelectionsChoicesMinOrderBy = {
    asset_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    label?: Maybe<OrderBy>;
    vote_selection_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "votes_selections_choices" */
export declare type VotesSelectionsChoicesMutationResponse = {
    __typename?: 'votes_selections_choices_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<VotesSelectionsChoices>;
};
/** input type for inserting object relation for remote table "votes_selections_choices" */
export declare type VotesSelectionsChoicesObjRelInsertInput = {
    data: VotesSelectionsChoicesInsertInput;
    on_conflict?: Maybe<VotesSelectionsChoicesOnConflict>;
};
/** on conflict condition type for table "votes_selections_choices" */
export declare type VotesSelectionsChoicesOnConflict = {
    constraint: VotesSelectionsChoicesConstraint;
    update_columns: Array<VotesSelectionsChoicesUpdateColumn>;
    where?: Maybe<VotesSelectionsChoicesBoolExp>;
};
/** ordering options when selecting data from "votes_selections_choices" */
export declare type VotesSelectionsChoicesOrderBy = {
    asset?: Maybe<AssetsOrderBy>;
    asset_id?: Maybe<OrderBy>;
    id?: Maybe<OrderBy>;
    label?: Maybe<OrderBy>;
    vote_selection_id?: Maybe<OrderBy>;
    votes_selections?: Maybe<VotesSelectionsOrderBy>;
};
/** primary key columns input for table: "votes_selections_choices" */
export declare type VotesSelectionsChoicesPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "votes_selections_choices" */
export declare enum VotesSelectionsChoicesSelectColumn {
    /** column name */
    AssetId = "asset_id",
    /** column name */
    Id = "id",
    /** column name */
    Label = "label",
    /** column name */
    VoteSelectionId = "vote_selection_id"
}
/** input type for updating data in table "votes_selections_choices" */
export declare type VotesSelectionsChoicesSetInput = {
    asset_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    label?: Maybe<Scalars['String']>;
    vote_selection_id?: Maybe<Scalars['uuid']>;
};
/** update columns of table "votes_selections_choices" */
export declare enum VotesSelectionsChoicesUpdateColumn {
    /** column name */
    AssetId = "asset_id",
    /** column name */
    Id = "id",
    /** column name */
    Label = "label",
    /** column name */
    VoteSelectionId = "vote_selection_id"
}
/** unique or primary key constraints on table "votes_selections" */
export declare enum VotesSelectionsConstraint {
    /** unique or primary key constraint */
    VotesSelectionnsPkey = "votes_selectionns_pkey"
}
/** input type for incrementing integer column in table "votes_selections" */
export declare type VotesSelectionsIncInput = {
    required_choices?: Maybe<Scalars['numeric']>;
};
/** input type for inserting data into table "votes_selections" */
export declare type VotesSelectionsInsertInput = {
    id?: Maybe<Scalars['uuid']>;
    required_choices?: Maybe<Scalars['numeric']>;
    selection?: Maybe<Scalars['String']>;
    vote?: Maybe<VotesObjRelInsertInput>;
    vote_id?: Maybe<Scalars['uuid']>;
    votes_selections_choices?: Maybe<VotesSelectionsChoicesArrRelInsertInput>;
};
/** aggregate max on columns */
export declare type VotesSelectionsMaxFields = {
    __typename?: 'votes_selections_max_fields';
    id?: Maybe<Scalars['uuid']>;
    required_choices?: Maybe<Scalars['numeric']>;
    selection?: Maybe<Scalars['String']>;
    vote_id?: Maybe<Scalars['uuid']>;
};
/** order by max() on columns of table "votes_selections" */
export declare type VotesSelectionsMaxOrderBy = {
    id?: Maybe<OrderBy>;
    required_choices?: Maybe<OrderBy>;
    selection?: Maybe<OrderBy>;
    vote_id?: Maybe<OrderBy>;
};
/** aggregate min on columns */
export declare type VotesSelectionsMinFields = {
    __typename?: 'votes_selections_min_fields';
    id?: Maybe<Scalars['uuid']>;
    required_choices?: Maybe<Scalars['numeric']>;
    selection?: Maybe<Scalars['String']>;
    vote_id?: Maybe<Scalars['uuid']>;
};
/** order by min() on columns of table "votes_selections" */
export declare type VotesSelectionsMinOrderBy = {
    id?: Maybe<OrderBy>;
    required_choices?: Maybe<OrderBy>;
    selection?: Maybe<OrderBy>;
    vote_id?: Maybe<OrderBy>;
};
/** response of any mutation on the table "votes_selections" */
export declare type VotesSelectionsMutationResponse = {
    __typename?: 'votes_selections_mutation_response';
    /** number of affected rows by the mutation */
    affected_rows: Scalars['Int'];
    /** data of the affected rows by the mutation */
    returning: Array<VotesSelections>;
};
/** input type for inserting object relation for remote table "votes_selections" */
export declare type VotesSelectionsObjRelInsertInput = {
    data: VotesSelectionsInsertInput;
    on_conflict?: Maybe<VotesSelectionsOnConflict>;
};
/** on conflict condition type for table "votes_selections" */
export declare type VotesSelectionsOnConflict = {
    constraint: VotesSelectionsConstraint;
    update_columns: Array<VotesSelectionsUpdateColumn>;
    where?: Maybe<VotesSelectionsBoolExp>;
};
/** ordering options when selecting data from "votes_selections" */
export declare type VotesSelectionsOrderBy = {
    id?: Maybe<OrderBy>;
    required_choices?: Maybe<OrderBy>;
    selection?: Maybe<OrderBy>;
    vote?: Maybe<VotesOrderBy>;
    vote_id?: Maybe<OrderBy>;
    votes_selections_choices_aggregate?: Maybe<VotesSelectionsChoicesAggregateOrderBy>;
};
/** primary key columns input for table: "votes_selections" */
export declare type VotesSelectionsPkColumnsInput = {
    id: Scalars['uuid'];
};
/** select columns of table "votes_selections" */
export declare enum VotesSelectionsSelectColumn {
    /** column name */
    Id = "id",
    /** column name */
    RequiredChoices = "required_choices",
    /** column name */
    Selection = "selection",
    /** column name */
    VoteId = "vote_id"
}
/** input type for updating data in table "votes_selections" */
export declare type VotesSelectionsSetInput = {
    id?: Maybe<Scalars['uuid']>;
    required_choices?: Maybe<Scalars['numeric']>;
    selection?: Maybe<Scalars['String']>;
    vote_id?: Maybe<Scalars['uuid']>;
};
/** aggregate stddev on columns */
export declare type VotesSelectionsStddevFields = {
    __typename?: 'votes_selections_stddev_fields';
    required_choices?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "votes_selections" */
export declare type VotesSelectionsStddevOrderBy = {
    required_choices?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type VotesSelectionsStddevPopFields = {
    __typename?: 'votes_selections_stddev_pop_fields';
    required_choices?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "votes_selections" */
export declare type VotesSelectionsStddevPopOrderBy = {
    required_choices?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type VotesSelectionsStddevSampFields = {
    __typename?: 'votes_selections_stddev_samp_fields';
    required_choices?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "votes_selections" */
export declare type VotesSelectionsStddevSampOrderBy = {
    required_choices?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type VotesSelectionsSumFields = {
    __typename?: 'votes_selections_sum_fields';
    required_choices?: Maybe<Scalars['numeric']>;
};
/** order by sum() on columns of table "votes_selections" */
export declare type VotesSelectionsSumOrderBy = {
    required_choices?: Maybe<OrderBy>;
};
/** update columns of table "votes_selections" */
export declare enum VotesSelectionsUpdateColumn {
    /** column name */
    Id = "id",
    /** column name */
    RequiredChoices = "required_choices",
    /** column name */
    Selection = "selection",
    /** column name */
    VoteId = "vote_id"
}
/** aggregate var_pop on columns */
export declare type VotesSelectionsVarPopFields = {
    __typename?: 'votes_selections_var_pop_fields';
    required_choices?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "votes_selections" */
export declare type VotesSelectionsVarPopOrderBy = {
    required_choices?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type VotesSelectionsVarSampFields = {
    __typename?: 'votes_selections_var_samp_fields';
    required_choices?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "votes_selections" */
export declare type VotesSelectionsVarSampOrderBy = {
    required_choices?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type VotesSelectionsVarianceFields = {
    __typename?: 'votes_selections_variance_fields';
    required_choices?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "votes_selections" */
export declare type VotesSelectionsVarianceOrderBy = {
    required_choices?: Maybe<OrderBy>;
};
/** input type for updating data in table "votes" */
export declare type VotesSetInput = {
    address?: Maybe<Scalars['String']>;
    card_image_background_id?: Maybe<Scalars['uuid']>;
    card_image_id?: Maybe<Scalars['uuid']>;
    city?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    date_end?: Maybe<Scalars['date']>;
    date_start?: Maybe<Scalars['date']>;
    description?: Maybe<Scalars['jsonb']>;
    frequency?: Maybe<GamesFrequenciesEnum>;
    gtc?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    instructions?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_archive?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_test?: Maybe<Scalars['Boolean']>;
    keep_cumulated_probability?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Scalars['geography']>;
    max_participations?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    radius?: Maybe<Scalars['Int']>;
    type_id?: Maybe<Scalars['uuid']>;
    tz?: Maybe<Scalars['String']>;
    valorization?: Maybe<GamesValorizationsEnum>;
    with_instant_gains?: Maybe<Scalars['Boolean']>;
    with_magic_random_drawings?: Maybe<Scalars['Boolean']>;
    with_random_drawings?: Maybe<Scalars['Boolean']>;
};
/** aggregate stddev on columns */
export declare type VotesStddevFields = {
    __typename?: 'votes_stddev_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev() on columns of table "votes" */
export declare type VotesStddevOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate stddev_pop on columns */
export declare type VotesStddevPopFields = {
    __typename?: 'votes_stddev_pop_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev_pop() on columns of table "votes" */
export declare type VotesStddevPopOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate stddev_samp on columns */
export declare type VotesStddevSampFields = {
    __typename?: 'votes_stddev_samp_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by stddev_samp() on columns of table "votes" */
export declare type VotesStddevSampOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate sum on columns */
export declare type VotesSumFields = {
    __typename?: 'votes_sum_fields';
    max_participations?: Maybe<Scalars['Int']>;
    radius?: Maybe<Scalars['Int']>;
};
/** order by sum() on columns of table "votes" */
export declare type VotesSumOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** update columns of table "votes" */
export declare enum VotesUpdateColumn {
    /** column name */
    Address = "address",
    /** column name */
    CardImageBackgroundId = "card_image_background_id",
    /** column name */
    CardImageId = "card_image_id",
    /** column name */
    City = "city",
    /** column name */
    ClientId = "client_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    DateEnd = "date_end",
    /** column name */
    DateStart = "date_start",
    /** column name */
    Description = "description",
    /** column name */
    Frequency = "frequency",
    /** column name */
    Gtc = "gtc",
    /** column name */
    Id = "id",
    /** column name */
    Instructions = "instructions",
    /** column name */
    IsActive = "is_active",
    /** column name */
    IsArchive = "is_archive",
    /** column name */
    IsPrivate = "is_private",
    /** column name */
    IsTest = "is_test",
    /** column name */
    KeepCumulatedProbability = "keep_cumulated_probability",
    /** column name */
    Location = "location",
    /** column name */
    MaxParticipations = "max_participations",
    /** column name */
    Name = "name",
    /** column name */
    Radius = "radius",
    /** column name */
    TypeId = "type_id",
    /** column name */
    Tz = "tz",
    /** column name */
    Valorization = "valorization",
    /** column name */
    WithInstantGains = "with_instant_gains",
    /** column name */
    WithMagicRandomDrawings = "with_magic_random_drawings",
    /** column name */
    WithRandomDrawings = "with_random_drawings"
}
/** aggregate var_pop on columns */
export declare type VotesVarPopFields = {
    __typename?: 'votes_var_pop_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by var_pop() on columns of table "votes" */
export declare type VotesVarPopOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate var_samp on columns */
export declare type VotesVarSampFields = {
    __typename?: 'votes_var_samp_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by var_samp() on columns of table "votes" */
export declare type VotesVarSampOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
/** aggregate variance on columns */
export declare type VotesVarianceFields = {
    __typename?: 'votes_variance_fields';
    max_participations?: Maybe<Scalars['Float']>;
    radius?: Maybe<Scalars['Float']>;
};
/** order by variance() on columns of table "votes" */
export declare type VotesVarianceOrderBy = {
    max_participations?: Maybe<OrderBy>;
    radius?: Maybe<OrderBy>;
};
export declare type AnimationFragment = {
    __typename?: 'animations';
} & Pick<Animations, 'id' | 'name'> & {
    assets: Array<{
        __typename?: 'animations_m2m_assets';
    } & Pick<AnimationsM2mAssets, 'when_won'> & {
        asset: {
            __typename?: 'assets';
        } & AssetFragment;
    }>;
    tracker: {
        __typename?: 'ar_trackers';
    } & TrackerFragment;
};
export declare type ArSpecificsFragment = {
    __typename?: 'ar';
} & {
    animations: Array<{
        __typename?: 'ar_m2m_animations';
    } & ArM2MAnimationFragment>;
};
export declare type ArFragment = {
    __typename?: 'ar';
} & Pick<Ar, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'description' | 'gtc' | 'instructions' | 'address' | 'radius' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'frequency' | 'max_participations' | 'created_at' | 'type_id' | 'location' | 'city' | 'keep_cumulated_probability'> & {
    type: {
        __typename?: 'games_types';
    } & GameTypeFragment;
    games_gains: Array<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
} & ArSpecificsFragment;
export declare type ArM2MAnimationFragment = {
    __typename?: 'ar_m2m_animations';
} & Pick<ArM2mAnimations, 'ar_id' | 'animation_id'> & {
    animation: {
        __typename?: 'animations';
    } & AnimationFragment;
};
export declare type AnimationM2MAssetFragment = {
    __typename?: 'animations_m2m_assets';
} & Pick<AnimationsM2mAssets, 'animation_id' | 'asset_id' | 'when_won'>;
export declare type GetArQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetArQuery = {
    __typename?: 'query_root';
} & {
    ar_by_pk?: Maybe<{
        __typename?: 'ar';
    } & ArFragment>;
};
export declare type GetArSpecificsQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetArSpecificsQuery = {
    __typename?: 'query_root';
} & {
    ar_by_pk?: Maybe<{
        __typename?: 'ar';
    } & Pick<Ar, 'id'> & ArSpecificsFragment>;
};
export declare type InsertArMutationVariables = Exact<{
    ar: ArInsertInput;
}>;
export declare type InsertArMutation = {
    __typename?: 'mutation_root';
} & {
    insert_ar_one?: Maybe<{
        __typename?: 'ar';
    } & ArFragment>;
};
export declare type UpdateAnimationMutationVariables = Exact<{
    id: Scalars['uuid'];
    updates: AnimationsSetInput;
}>;
export declare type UpdateAnimationMutation = {
    __typename?: 'mutation_root';
} & {
    update_animations_by_pk?: Maybe<{
        __typename?: 'animations';
    } & AnimationFragment>;
};
export declare type InsertArM2mAnimationsMutationVariables = Exact<{
    ar_id: Scalars['uuid'];
    animation: AnimationsObjRelInsertInput;
}>;
export declare type InsertArM2mAnimationsMutation = {
    __typename?: 'mutation_root';
} & {
    insert_ar_m2m_animations_one?: Maybe<{
        __typename?: 'ar_m2m_animations';
    } & ArM2MAnimationFragment>;
};
export declare type DeleteArM2mAnimationsMutationVariables = Exact<{
    animation_id: Scalars['uuid'];
    ar_id: Scalars['uuid'];
}>;
export declare type DeleteArM2mAnimationsMutation = {
    __typename?: 'mutation_root';
} & {
    delete_ar_m2m_animations_by_pk?: Maybe<{
        __typename?: 'ar_m2m_animations';
    } & Pick<ArM2mAnimations, 'ar_id' | 'animation_id'>>;
};
export declare type InsertAnimationsM2mAssetsMutationVariables = Exact<{
    objects: Array<AnimationsM2mAssetsInsertInput> | AnimationsM2mAssetsInsertInput;
}>;
export declare type InsertAnimationsM2mAssetsMutation = {
    __typename?: 'mutation_root';
} & {
    insert_animations_m2m_assets?: Maybe<{
        __typename?: 'animations_m2m_assets_mutation_response';
    } & {
        returning: Array<{
            __typename?: 'animations_m2m_assets';
        } & AnimationM2MAssetFragment>;
    }>;
};
export declare type UpdateAnimationsM2mAssetsMutationVariables = Exact<{
    animation_id: Scalars['uuid'];
    asset_id: Scalars['uuid'];
    when_won: Scalars['Boolean'];
}>;
export declare type UpdateAnimationsM2mAssetsMutation = {
    __typename?: 'mutation_root';
} & {
    update_animations_m2m_assets_by_pk?: Maybe<{
        __typename?: 'animations_m2m_assets';
    } & AnimationM2MAssetFragment>;
};
export declare type DeleteAnimationsM2mAssetsMutationVariables = Exact<{
    animation_id: Scalars['uuid'];
    asset_id: Scalars['uuid'];
}>;
export declare type DeleteAnimationsM2mAssetsMutation = {
    __typename?: 'mutation_root';
} & {
    delete_animations_m2m_assets_by_pk?: Maybe<{
        __typename?: 'animations_m2m_assets';
    } & Pick<AnimationsM2mAssets, 'animation_id' | 'asset_id'>>;
};
export declare type AssetFragment = {
    __typename?: 'assets';
} & Pick<Assets, 'id' | 'type' | 'path' | 'name' | 'client_id' | 'user_id' | 'scaleX' | 'scaleY' | 'scaleZ' | 'resources'>;
export declare type AssetResourcesFragment = {
    __typename?: 'assets';
} & Pick<Assets, 'id' | 'resources'>;
export declare type GetAssetByIdQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetAssetByIdQuery = {
    __typename?: 'query_root';
} & {
    assets_by_pk?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type GetAssetByPathQueryVariables = Exact<{
    clientId: Scalars['uuid'];
    path: Scalars['String'];
}>;
export declare type GetAssetByPathQuery = {
    __typename?: 'query_root';
} & {
    assets: Array<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type GetAssetsQueryVariables = Exact<{
    type?: Maybe<AssetsTypesEnum>;
    clientId?: Maybe<Scalars['uuid']>;
}>;
export declare type GetAssetsQuery = {
    __typename?: 'query_root';
} & {
    assets: Array<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type InsertAssetMutationVariables = Exact<{
    object: AssetsInsertInput;
}>;
export declare type InsertAssetMutation = {
    __typename?: 'mutation_root';
} & {
    insert_assets_one?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type UpdateAssetMutationVariables = Exact<{
    id: Scalars['uuid'];
    updates: AssetsSetInput;
}>;
export declare type UpdateAssetMutation = {
    __typename?: 'mutation_root';
} & {
    update_assets_by_pk?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type AddResourceToAssetMutationVariables = Exact<{
    id: Scalars['uuid'];
    resource: Scalars['jsonb'];
}>;
export declare type AddResourceToAssetMutation = {
    __typename?: 'mutation_root';
} & {
    update_assets_by_pk?: Maybe<{
        __typename: 'assets';
    } & AssetResourcesFragment>;
};
export declare type DeleteResourceFromAssetMutationVariables = Exact<{
    id: Scalars['uuid'];
    resource: Scalars['String'];
}>;
export declare type DeleteResourceFromAssetMutation = {
    __typename?: 'mutation_root';
} & {
    update_assets_by_pk?: Maybe<{
        __typename: 'assets';
    } & AssetResourcesFragment>;
};
export declare type ClientDisplayFragment = {
    __typename?: 'clients';
} & Pick<Clients, 'id' | 'created_at' | 'email' | 'name' | 'first_name' | 'phone' | 'address_id' | 'stripe_customer_id' | 'company' | 'vat_id' | 'discount' | 'role' | 'is_active' | 'reseller_id'> & {
    address?: Maybe<{
        __typename?: 'addresses';
    } & Pick<Addresses, 'address' | 'city' | 'zipcode' | 'country'>>;
    reseller?: Maybe<{
        __typename?: 'clients';
    } & Pick<Clients, 'email' | 'name' | 'first_name'>>;
    picture?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type GetClientsQueryVariables = Exact<{
    withDiscount?: Maybe<Scalars['Boolean']>;
}>;
export declare type GetClientsQuery = {
    __typename?: 'query_root';
} & {
    clients: Array<{
        __typename?: 'clients';
    } & ClientDisplayFragment>;
};
export declare type GetClientByIdQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetClientByIdQuery = {
    __typename?: 'query_root';
} & {
    clients_by_pk?: Maybe<{
        __typename?: 'clients';
    } & ClientDisplayFragment>;
};
export declare type UpdateClientIsActiveMutationVariables = Exact<{
    id: Scalars['uuid'];
    isActive: Scalars['Boolean'];
}>;
export declare type UpdateClientIsActiveMutation = {
    __typename: 'mutation_root';
} & {
    update_clients_by_pk?: Maybe<{
        __typename: 'clients';
    } & Pick<Clients, 'id' | 'is_active'>>;
};
export declare type UpdateClientMutationVariables = Exact<{
    clientId: Scalars['uuid'];
    client?: Maybe<ClientsSetInput>;
}>;
export declare type UpdateClientMutation = {
    __typename?: 'mutation_root';
} & {
    update_clients_by_pk?: Maybe<{
        __typename: 'clients';
    } & ClientDisplayFragment>;
};
export declare type CommunicationTypeFragment = {
    __typename?: 'communications_types';
} & Pick<CommunicationsTypes, 'id' | 'name' | 'color' | 'acronym' | 'radius_price_range' | 'price'>;
export declare type GetCommunicationsTypesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetCommunicationsTypesQuery = {
    __typename?: 'query_root';
} & {
    communications_types: Array<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
};
export declare type GetCommunicationTypeByIdQueryVariables = Exact<{
    communicationTypeId: Scalars['uuid'];
}>;
export declare type GetCommunicationTypeByIdQuery = {
    __typename?: 'query_root';
} & {
    communications_types_by_pk?: Maybe<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
};
export declare type CommunicationFragment = {
    __typename?: 'communications';
} & Pick<Communications, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'address' | 'created_at' | 'type_id' | 'location' | 'city' | 'description'> & {
    card_image?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    card_image_background?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    type: {
        __typename?: 'communications_types';
    } & CommunicationTypeFragment;
};
export declare type CommunnicationMinimalInfosFragment = {
    __typename?: 'communications';
} & Pick<Communications, 'id' | 'name' | 'client_id' | 'is_private'> & {
    type: {
        __typename?: 'communications_types';
    } & Pick<CommunicationsTypes, 'name'>;
};
export declare type GetCommunicationsByClientQueryVariables = Exact<{
    clientId: Scalars['uuid'];
}>;
export declare type GetCommunicationsByClientQuery = {
    __typename?: 'query_root';
} & {
    communications: Array<{
        __typename?: 'communications';
    } & CommunicationFragment>;
};
export declare type GetCommunicationsByClientAndCommunicationTypeQueryVariables = Exact<{
    clientId: Scalars['uuid'];
    communicationTypeId: Scalars['uuid'];
}>;
export declare type GetCommunicationsByClientAndCommunicationTypeQuery = {
    __typename?: 'query_root';
} & {
    communications: Array<{
        __typename?: 'communications';
    } & CommunicationFragment>;
};
export declare type InsertCommunicationMutationVariables = Exact<{
    communication: CommunicationsInsertInput;
}>;
export declare type InsertCommunicationMutation = {
    __typename?: 'mutation_root';
} & {
    insert_communications_one?: Maybe<{
        __typename?: 'communications';
    } & CommunicationFragment>;
};
export declare type UpdateCommunicationMutationVariables = Exact<{
    communicationId: Scalars['uuid'];
    communication: CommunicationsSetInput;
}>;
export declare type UpdateCommunicationMutation = {
    __typename: 'mutation_root';
} & {
    update_communications_by_pk?: Maybe<{
        __typename: 'communications';
    } & CommunicationFragment>;
};
export declare type ArchiveCommunicationMutationVariables = Exact<{
    communicationId: Scalars['uuid'];
}>;
export declare type ArchiveCommunicationMutation = {
    __typename: 'mutation_root';
} & {
    update_communications_by_pk?: Maybe<{
        __typename: 'communications';
    } & CommunicationFragment>;
};
export declare type EstimateM2mEntityFragment = {
    __typename?: 'estimates_m2m_entities';
} & Pick<EstimatesM2mEntities, 'id' | 'name' | 'estimate_id' | 'entity_id' | 'radius' | 'trackers'> & {
    games_types?: Maybe<{
        __typename?: 'games_types';
    } & GameTypeFragment>;
    communications_types?: Maybe<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
};
export declare type EstimateFragment = {
    __typename?: 'estimates';
} & Pick<Estimates, 'id' | 'name' | 'date_start' | 'date_end' | 'status' | 'participations_credits' | 'created_at' | 'updated_at' | 'client_id' | 'is_archive'> & {
    estimates_m2m_entities: Array<{
        __typename?: 'estimates_m2m_entities';
    } & EstimateM2mEntityFragment>;
};
export declare type GetEstimatesByClientQueryVariables = Exact<{
    clientId: Scalars['uuid'];
}>;
export declare type GetEstimatesByClientQuery = {
    __typename?: 'query_root';
} & {
    estimates: Array<{
        __typename?: 'estimates';
    } & EstimateFragment>;
};
export declare type InsertEstimateMutationVariables = Exact<{
    estimate: EstimatesInsertInput;
}>;
export declare type InsertEstimateMutation = {
    __typename?: 'mutation_root';
} & {
    insert_estimates_one?: Maybe<{
        __typename?: 'estimates';
    } & EstimateFragment>;
};
export declare type UpdateEstimateMutationVariables = Exact<{
    estimateId: Scalars['uuid'];
    estimate: EstimatesSetInput;
}>;
export declare type UpdateEstimateMutation = {
    __typename?: 'mutation_root';
} & {
    update_estimates_by_pk?: Maybe<{
        __typename?: 'estimates';
    } & EstimateFragment>;
};
export declare type ArchiveEstimateMutationVariables = Exact<{
    estimateId: Scalars['uuid'];
}>;
export declare type ArchiveEstimateMutation = {
    __typename?: 'mutation_root';
} & {
    update_estimates_by_pk?: Maybe<{
        __typename?: 'estimates';
    } & EstimateFragment>;
};
export declare type InsertEstimateM2mEntityMutationVariables = Exact<{
    estimateM2mEntity: EstimatesM2mEntitiesInsertInput;
}>;
export declare type InsertEstimateM2mEntityMutation = {
    __typename?: 'mutation_root';
} & {
    insert_estimates_m2m_entities_one?: Maybe<{
        __typename?: 'estimates_m2m_entities';
    } & EstimateM2mEntityFragment>;
};
export declare type UpdateEstimateM2mEntityMutationVariables = Exact<{
    estimateM2mEntityId: Scalars['uuid'];
    estimateM2mEntity: EstimatesM2mEntitiesSetInput;
}>;
export declare type UpdateEstimateM2mEntityMutation = {
    __typename?: 'mutation_root';
} & {
    update_estimates_m2m_entities_by_pk?: Maybe<{
        __typename?: 'estimates_m2m_entities';
    } & EstimateM2mEntityFragment>;
};
export declare type GetEstimatesM2mEntitiesQueryVariables = Exact<{
    estimateId: Scalars['uuid'];
}>;
export declare type GetEstimatesM2mEntitiesQuery = {
    __typename: 'query_root';
} & {
    estimates_m2m_entities: Array<{
        __typename: 'estimates_m2m_entities';
    } & EstimateM2mEntityFragment>;
};
export declare type ArchiveEstimatesM2mEntitiesByPkMutationVariables = Exact<{
    estimateM2mEntityId: Scalars['uuid'];
}>;
export declare type ArchiveEstimatesM2mEntitiesByPkMutation = {
    __typename?: 'mutation_root';
} & {
    delete_estimates_m2m_entities_by_pk?: Maybe<{
        __typename?: 'estimates_m2m_entities';
    } & EstimateM2mEntityFragment>;
};
export declare type GetGamesCommunicationsTypesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetGamesCommunicationsTypesQuery = {
    __typename?: 'query_root';
} & {
    games_types: Array<{
        __typename?: 'games_types';
    } & GameTypeFragment>;
    communications_types: Array<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
};
export declare type GainVirtualFragment = {
    __typename?: 'gains_virtuals';
} & Pick<GainsVirtuals, 'id' | 'format' | 'value' | 'gain_id'>;
export declare type GetGainsVirtualsByGainQueryVariables = Exact<{
    gainId: Scalars['uuid'];
}>;
export declare type GetGainsVirtualsByGainQuery = {
    __typename?: 'query_root';
} & {
    gains_virtuals: Array<{
        __typename?: 'gains_virtuals';
    } & GainVirtualFragment>;
};
export declare type InsertGainsVirtualsMutationVariables = Exact<{
    gainId: Scalars['uuid'];
    gainsVirtuals: Array<GainsVirtualsInsertInput> | GainsVirtualsInsertInput;
}>;
export declare type InsertGainsVirtualsMutation = {
    __typename?: 'mutation_root';
} & {
    delete_gains_virtuals?: Maybe<{
        __typename?: 'gains_virtuals_mutation_response';
    } & Pick<GainsVirtualsMutationResponse, 'affected_rows'>>;
    insert_gains_virtuals?: Maybe<{
        __typename?: 'gains_virtuals_mutation_response';
    } & {
        returning: Array<{
            __typename?: 'gains_virtuals';
        } & Pick<GainsVirtuals, 'format' | 'gain_id' | 'id' | 'value'>>;
    }>;
};
export declare type GainFragment = {
    __typename?: 'gains';
} & Pick<Gains, 'id' | 'is_active' | 'is_virtual' | 'name' | 'description' | 'stock' | 'client_id' | 'gtc' | 'instructions' | 'created_at' | 'template_id'> & {
    image?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    template?: Maybe<{
        __typename?: 'templates';
    } & TemplateFragment>;
};
export declare type GetGainsByClientQueryVariables = Exact<{
    clientId: Scalars['uuid'];
}>;
export declare type GetGainsByClientQuery = {
    __typename?: 'query_root';
} & {
    gains: Array<{
        __typename?: 'gains';
    } & GainFragment>;
};
export declare type InsertGainMutationVariables = Exact<{
    gain: GainsInsertInput;
}>;
export declare type InsertGainMutation = {
    __typename?: 'mutation_root';
} & {
    insert_gains_one?: Maybe<{
        __typename?: 'gains';
    } & GainFragment>;
};
export declare type UpdateGainMutationVariables = Exact<{
    gainId: Scalars['uuid'];
    gain: GainsSetInput;
}>;
export declare type UpdateGainMutation = {
    __typename: 'mutation_root';
} & {
    update_gains_by_pk?: Maybe<{
        __typename: 'gains';
    } & GainFragment>;
};
export declare type ArchiveGainMutationVariables = Exact<{
    gainId: Scalars['uuid'];
}>;
export declare type ArchiveGainMutation = {
    __typename: 'mutation_root';
} & {
    update_gains_by_pk?: Maybe<{
        __typename: 'gains';
    } & GainFragment>;
};
export declare type GamesGainsFragment = {
    __typename?: 'games_gains';
} & Pick<GamesGains, 'game_id' | 'gain_id' | 'stock' | 'stock_won' | 'is_active' | 'probability'> & {
    gain: {
        __typename?: 'gains';
    } & GainFragment;
};
export declare type InsertGameGainMutationVariables = Exact<{
    gameGain: GamesGainsInsertInput;
}>;
export declare type InsertGameGainMutation = {
    __typename?: 'mutation_root';
} & {
    insert_games_gains_one?: Maybe<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
};
export declare type UpdateGameGainMutationVariables = Exact<{
    gameId: Scalars['uuid'];
    gainId: Scalars['uuid'];
    gameGain: GamesGainsSetInput;
}>;
export declare type UpdateGameGainMutation = {
    __typename?: 'mutation_root';
} & {
    update_games_gains_by_pk?: Maybe<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
};
export declare type DeleteGameGainMutationVariables = Exact<{
    gameId: Scalars['uuid'];
    gainId: Scalars['uuid'];
}>;
export declare type DeleteGameGainMutation = {
    __typename?: 'mutation_root';
} & {
    delete_games_gains_by_pk?: Maybe<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
};
export declare type GamesPlayedParticipationsByDayFragment = {
    __typename?: 'games_played_participations_by_day';
} & Pick<GamesPlayedParticipationsByDay, 'date' | 'total_count' | 'game_id' | 'client_id' | 'name'>;
export declare type GamesPlayedParticipationsByCurrentDayHoursFragment = {
    __typename?: 'games_played_participations_by_current_day_hours';
} & Pick<GamesPlayedParticipationsByCurrentDayHours, 'date' | 'total_count' | 'game_id' | 'client_id' | 'name'>;
export declare type GamesPlayedGainsByDayFragment = {
    __typename?: 'games_played_gains_by_day';
} & Pick<GamesPlayedGainsByDay, 'date' | 'total_count' | 'game_id' | 'client_id' | 'name' | 'gain_id'>;
export declare type GamesPlayedGainsByCurrentDayHoursFragment = {
    __typename?: 'games_played_gains_by_current_day_hours';
} & Pick<GamesPlayedGainsByCurrentDayHours, 'date' | 'total_count' | 'game_id' | 'client_id' | 'name' | 'gain_id'>;
export declare type GetGamesPlayedStatisticByClientQueryVariables = Exact<{
    clientId: Scalars['uuid'];
}>;
export declare type GetGamesPlayedStatisticByClientQuery = {
    __typename?: 'query_root';
} & {
    games_played_participations_by_day: Array<{
        __typename?: 'games_played_participations_by_day';
    } & GamesPlayedParticipationsByDayFragment>;
    games_played_participations_by_current_day_hours: Array<{
        __typename?: 'games_played_participations_by_current_day_hours';
    } & GamesPlayedParticipationsByCurrentDayHoursFragment>;
    games_played_gains_by_day: Array<{
        __typename?: 'games_played_gains_by_day';
    } & GamesPlayedGainsByDayFragment>;
    games_played_gains_by_current_day_hours: Array<{
        __typename?: 'games_played_gains_by_current_day_hours';
    } & GamesPlayedGainsByCurrentDayHoursFragment>;
};
export declare type GetGameWinnersQueryVariables = Exact<{
    game_id: Scalars['uuid'];
}>;
export declare type GetGameWinnersQuery = {
    __typename?: 'query_root';
} & {
    games_played: Array<{
        __typename?: 'games_played';
    } & Pick<GamesPlayed, 'id' | 'played_at'> & {
        gain?: Maybe<{
            __typename?: 'gains';
        } & Pick<Gains, 'id' | 'name'>>;
        user: {
            __typename?: 'users';
        } & Pick<Users, 'id' | 'first_name' | 'name'>;
    }>;
};
export declare type GameTypeFragment = {
    __typename?: 'games_types';
} & Pick<GamesTypes, 'id' | 'name' | 'description' | 'price' | 'color' | 'acronym' | 'radius_price_range' | 'participations_price_range' | 'trackers_price_range'>;
export declare type GetGamesTypesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetGamesTypesQuery = {
    __typename?: 'query_root';
} & {
    games_types: Array<{
        __typename?: 'games_types';
    } & GameTypeFragment>;
};
export declare type GetGameTypeByIdQueryVariables = Exact<{
    gameTypeId: Scalars['uuid'];
}>;
export declare type GetGameTypeByIdQuery = {
    __typename?: 'query_root';
} & {
    games_types_by_pk?: Maybe<{
        __typename?: 'games_types';
    } & GameTypeFragment>;
};
export declare type GameFragment = {
    __typename?: 'games';
} & Pick<Games, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'description' | 'gtc' | 'instructions' | 'address' | 'radius' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'valorization' | 'frequency' | 'max_participations' | 'created_at' | 'type_id' | 'location' | 'city' | 'keep_cumulated_probability'> & {
    card_image?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    card_image_background?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    type: {
        __typename?: 'games_types';
    } & GameTypeFragment;
    games_gains: Array<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
};
export declare type GameMinimalInfosFragment = {
    __typename?: 'games';
} & Pick<Games, 'id' | 'name' | 'client_id' | 'is_private'> & {
    type: {
        __typename?: 'games_types';
    } & Pick<GamesTypes, 'name'>;
};
export declare type GetGamesMinimalInfosQueryVariables = Exact<{
    clientId?: Maybe<Scalars['uuid']>;
}>;
export declare type GetGamesMinimalInfosQuery = {
    __typename?: 'query_root';
} & {
    games: Array<{
        __typename?: 'games';
    } & GameMinimalInfosFragment>;
};
export declare type GetGamesByClientAndGameTypeQueryVariables = Exact<{
    clientId: Scalars['uuid'];
    gameTypeId: Scalars['uuid'];
}>;
export declare type GetGamesByClientAndGameTypeQuery = {
    __typename?: 'query_root';
} & {
    games: Array<{
        __typename?: 'games';
    } & GameFragment>;
};
export declare type InsertGameMutationVariables = Exact<{
    game: GamesInsertInput;
}>;
export declare type InsertGameMutation = {
    __typename?: 'mutation_root';
} & {
    insert_games_one?: Maybe<{
        __typename?: 'games';
    } & GameFragment>;
};
export declare type UpdateGameMutationVariables = Exact<{
    gameId: Scalars['uuid'];
    game: GamesSetInput;
}>;
export declare type UpdateGameMutation = {
    __typename: 'mutation_root';
} & {
    update_games_by_pk?: Maybe<{
        __typename: 'games';
    } & GameFragment>;
};
export declare type ArchiveGameMutationVariables = Exact<{
    gameId: Scalars['uuid'];
}>;
export declare type ArchiveGameMutation = {
    __typename: 'mutation_root';
} & {
    update_games_by_pk?: Maybe<{
        __typename: 'games';
    } & GameFragment>;
};
export declare type GetGoodieQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetGoodieQuery = {
    __typename?: 'query_root';
} & {
    goodies_by_pk?: Maybe<{
        __typename?: 'goodies';
    } & GoodieFragment>;
};
export declare type InsertGoodieMutationVariables = Exact<{
    goodie: GoodiesInsertInput;
}>;
export declare type InsertGoodieMutation = {
    __typename?: 'mutation_root';
} & {
    insert_goodies_one?: Maybe<{
        __typename?: 'goodies';
    } & GoodieFragment>;
};
export declare type UpdateGoodieMutationVariables = Exact<{
    goodieId: Scalars['uuid'];
    goodie: GoodiesSetInput;
}>;
export declare type UpdateGoodieMutation = {
    __typename?: 'mutation_root';
} & {
    update_goodies_by_pk?: Maybe<{
        __typename?: 'goodies';
    } & GoodieFragment>;
};
export declare type ArchiveGoodieMutationVariables = Exact<{
    goodieId: Scalars['uuid'];
}>;
export declare type ArchiveGoodieMutation = {
    __typename?: 'mutation_root';
} & {
    update_goodies_by_pk?: Maybe<{
        __typename?: 'goodies';
    } & Pick<Goodies, 'id' | 'is_archive'>>;
};
export declare type InsertGoodiesM2mAnimationsMutationVariables = Exact<{
    goodie_id: Scalars['uuid'];
    animation: AnimationsObjRelInsertInput;
}>;
export declare type InsertGoodiesM2mAnimationsMutation = {
    __typename?: 'mutation_root';
} & {
    insert_goodies_m2m_animations_one?: Maybe<{
        __typename?: 'goodies_m2m_animations';
    } & GoodieM2MAnimationFragment>;
};
export declare type DeleteGoodiesM2mAnimationsMutationVariables = Exact<{
    goodie_id: Scalars['uuid'];
    animation_id: Scalars['uuid'];
}>;
export declare type DeleteGoodiesM2mAnimationsMutation = {
    __typename?: 'mutation_root';
} & {
    delete_goodies_m2m_animations_by_pk?: Maybe<{
        __typename?: 'goodies_m2m_animations';
    } & Pick<GoodiesM2mAnimations, 'goodie_id' | 'animation_id'>>;
};
export declare type InfoFragment = {
    __typename?: 'infos';
} & Pick<Infos, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'address' | 'created_at' | 'type_id' | 'location' | 'city' | 'html' | 'design'> & {
    type: {
        __typename?: 'communications_types';
    } & CommunicationTypeFragment;
};
export declare type InfoSpecificsFragment = {
    __typename?: 'infos';
} & Pick<Infos, 'html' | 'design' | 'template_id'> & {
    template?: Maybe<{
        __typename?: 'templates';
    } & Pick<Templates, 'id' | 'name' | 'html'>>;
};
export declare type InsertInfoMutationVariables = Exact<{
    info: InfosInsertInput;
}>;
export declare type InsertInfoMutation = {
    __typename?: 'mutation_root';
} & {
    insert_infos_one?: Maybe<{
        __typename?: 'infos';
    } & Pick<Infos, 'id'> & InfoFragment>;
};
export declare type GetInfoSpecificsQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetInfoSpecificsQuery = {
    __typename?: 'query_root';
} & {
    infos_by_pk?: Maybe<{
        __typename?: 'infos';
    } & Pick<Infos, 'id'> & InfoSpecificsFragment>;
};
export declare type UpdateInfoMutationVariables = Exact<{
    id: Scalars['uuid'];
    updates: InfosSetInput;
}>;
export declare type UpdateInfoMutation = {
    __typename?: 'mutation_root';
} & {
    update_infos_by_pk?: Maybe<{
        __typename?: 'infos';
    } & Pick<Infos, 'id'> & InfoFragment>;
};
export declare type PhotoFragment = {
    __typename?: 'photos';
} & Pick<Photos, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'address' | 'created_at' | 'type_id' | 'location'> & {
    type?: Maybe<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
    foreground?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type PhotoSpecificsFragment = {
    __typename?: 'photos';
} & Pick<Photos, 'id' | 'foreground_id'> & {
    foreground?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type InsertPhotoMutationVariables = Exact<{
    photo: PhotosInsertInput;
}>;
export declare type InsertPhotoMutation = {
    __typename?: 'mutation_root';
} & {
    insert_photos_one?: Maybe<{
        __typename?: 'photos';
    } & PhotoFragment>;
};
export declare type GetPhotoSpecificsQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetPhotoSpecificsQuery = {
    __typename?: 'query_root';
} & {
    photos_by_pk?: Maybe<{
        __typename?: 'photos';
    } & PhotoSpecificsFragment>;
};
export declare type UpdatePhotoMutationVariables = Exact<{
    id: Scalars['uuid'];
    updates: PhotosSetInput;
}>;
export declare type UpdatePhotoMutation = {
    __typename?: 'mutation_root';
} & {
    update_photos_by_pk?: Maybe<{
        __typename?: 'photos';
    } & PhotoFragment>;
};
export declare type PrivateDeckM2mEntitiesFragment = {
    __typename: 'privates_decks_m2m_entities';
} & Pick<PrivatesDecksM2mEntities, 'private_deck' | 'entity_id'> & {
    game?: Maybe<{
        __typename: 'games';
    } & GameMinimalInfosFragment>;
    communication?: Maybe<{
        __typename: 'communications';
    } & CommunnicationMinimalInfosFragment>;
};
export declare type PrivateDeckFragment = {
    __typename?: 'privates_decks';
} & Pick<PrivatesDecks, 'id' | 'name' | 'description' | 'code' | 'date_start' | 'date_end' | 'is_active' | 'is_archive' | 'client_id' | 'created_at'> & {
    privates_decks_m2m_entities: Array<{
        __typename?: 'privates_decks_m2m_entities';
    } & PrivateDeckM2mEntitiesFragment>;
};
export declare type GetPrivatesDecksByClientQueryVariables = Exact<{
    clientId: Scalars['uuid'];
}>;
export declare type GetPrivatesDecksByClientQuery = {
    __typename?: 'query_root';
} & {
    privates_decks: Array<{
        __typename?: 'privates_decks';
    } & PrivateDeckFragment>;
};
export declare type InsertPrivateDeckMutationVariables = Exact<{
    privateDeck: PrivatesDecksInsertInput;
}>;
export declare type InsertPrivateDeckMutation = {
    __typename?: 'mutation_root';
} & {
    insert_privates_decks_one?: Maybe<{
        __typename?: 'privates_decks';
    } & PrivateDeckFragment>;
};
export declare type UpdatePrivateDeckMutationVariables = Exact<{
    privateDeckId: Scalars['uuid'];
    privateDeck: PrivatesDecksSetInput;
}>;
export declare type UpdatePrivateDeckMutation = {
    __typename: 'mutation_root';
} & {
    update_privates_decks_by_pk?: Maybe<{
        __typename: 'privates_decks';
    } & PrivateDeckFragment>;
};
export declare type ArchivePrivateDeckMutationVariables = Exact<{
    privateDeckId: Scalars['uuid'];
}>;
export declare type ArchivePrivateDeckMutation = {
    __typename: 'mutation_root';
} & {
    update_privates_decks_by_pk?: Maybe<{
        __typename: 'privates_decks';
    } & PrivateDeckFragment>;
};
export declare type GetGamesCommunicationsMinimalInfosQueryVariables = Exact<{
    clientId?: Maybe<Scalars['uuid']>;
}>;
export declare type GetGamesCommunicationsMinimalInfosQuery = {
    __typename?: 'query_root';
} & {
    games: Array<{
        __typename?: 'games';
    } & GameMinimalInfosFragment>;
    communications: Array<{
        __typename?: 'communications';
    } & CommunnicationMinimalInfosFragment>;
};
export declare type InsertPrivateDeckM2mEntityMutationVariables = Exact<{
    privateDeckId: Scalars['uuid'];
    entityId: Scalars['uuid'];
}>;
export declare type InsertPrivateDeckM2mEntityMutation = {
    __typename?: 'mutation_root';
} & {
    insert_privates_decks_m2m_entities_one?: Maybe<{
        __typename?: 'privates_decks_m2m_entities';
    } & PrivateDeckM2mEntitiesFragment>;
};
export declare type GetPrivateDeckM2mEntitiesQueryVariables = Exact<{
    privateDeckId: Scalars['uuid'];
}>;
export declare type GetPrivateDeckM2mEntitiesQuery = {
    __typename?: 'query_root';
} & {
    privates_decks_m2m_entities: Array<{
        __typename?: 'privates_decks_m2m_entities';
    } & PrivateDeckM2mEntitiesFragment>;
};
export declare type DeletePrivateDeckM2mEntitiesByPkMutationVariables = Exact<{
    privateDeckId: Scalars['uuid'];
    entityId: Scalars['uuid'];
}>;
export declare type DeletePrivateDeckM2mEntitiesByPkMutation = {
    __typename?: 'mutation_root';
} & {
    delete_privates_decks_m2m_entities_by_pk?: Maybe<{
        __typename?: 'privates_decks_m2m_entities';
    } & PrivateDeckM2mEntitiesFragment>;
};
export declare type QuizzQuestionsFragment = {
    __typename?: 'quizz_questions';
} & Pick<QuizzQuestions, 'id' | 'quizz_id' | 'question' | 'asset_id' | 'time' | 'total_points'> & {
    asset?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    quizz_questions_answers: Array<{
        __typename?: 'quizz_questions_answers';
    } & QuizzQuestionAnswersFragment>;
};
export declare type QuizzQuestionAnswersFragment = {
    __typename?: 'quizz_questions_answers';
} & Pick<QuizzQuestionsAnswers, 'id' | 'answer' | 'is_correct' | 'points'>;
export declare type QuizzFragment = {
    __typename?: 'quizz';
} & Pick<Quizz, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'description' | 'gtc' | 'instructions' | 'address' | 'radius' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'frequency' | 'max_participations' | 'created_at' | 'type_id' | 'location' | 'city' | 'keep_cumulated_probability' | 'winning_percentage' | 'ordered_questions'> & {
    type: {
        __typename?: 'games_types';
    } & GameTypeFragment;
    games_gains: Array<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
    quizz_questions: Array<{
        __typename?: 'quizz_questions';
    } & QuizzQuestionsFragment>;
};
export declare type GetQuizzSpecificsQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetQuizzSpecificsQuery = {
    __typename?: 'query_root';
} & {
    quizz_by_pk?: Maybe<{
        __typename?: 'quizz';
    } & Pick<Quizz, 'id' | 'winning_percentage' | 'ordered_questions'> & {
        quizz_questions: Array<{
            __typename?: 'quizz_questions';
        } & QuizzQuestionsFragment>;
    }>;
};
export declare type InsertQuizzMutationVariables = Exact<{
    quizz: QuizzInsertInput;
}>;
export declare type InsertQuizzMutation = {
    __typename?: 'mutation_root';
} & {
    insert_quizz_one?: Maybe<{
        __typename?: 'quizz';
    } & QuizzFragment>;
};
export declare type UpdateQuizzMutationVariables = Exact<{
    quizzId: Scalars['uuid'];
    quizz: QuizzSetInput;
}>;
export declare type UpdateQuizzMutation = {
    __typename: 'mutation_root';
} & {
    update_quizz_by_pk?: Maybe<{
        __typename: 'quizz';
    } & QuizzFragment>;
};
export declare type InsertQuizzQuestionMutationVariables = Exact<{
    object: QuizzQuestionsInsertInput;
}>;
export declare type InsertQuizzQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    insert_quizz_questions_one?: Maybe<{
        __typename?: 'quizz_questions';
    } & {
        quizz_questions_answers: Array<{
            __typename?: 'quizz_questions_answers';
        } & QuizzQuestionAnswersFragment>;
    } & QuizzQuestionsFragment>;
};
export declare type UpdateQuizzQuestionMutationVariables = Exact<{
    id: Scalars['uuid'];
    updates: QuizzQuestionsSetInput;
    quizzQuestionsAnswers: Array<QuizzQuestionsAnswersInsertInput> | QuizzQuestionsAnswersInsertInput;
}>;
export declare type UpdateQuizzQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_quizz_questions_answers?: Maybe<{
        __typename?: 'quizz_questions_answers_mutation_response';
    } & Pick<QuizzQuestionsAnswersMutationResponse, 'affected_rows'>>;
    insert_quizz_questions_answers?: Maybe<{
        __typename?: 'quizz_questions_answers_mutation_response';
    } & Pick<QuizzQuestionsAnswersMutationResponse, 'affected_rows'>>;
    update_quizz_questions_by_pk?: Maybe<{
        __typename?: 'quizz_questions';
    } & {
        quizz_questions_answers: Array<{
            __typename?: 'quizz_questions_answers';
        } & QuizzQuestionAnswersFragment>;
    } & QuizzQuestionsFragment>;
};
export declare type DeleteQuizzQuestionMutationVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type DeleteQuizzQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_quizz_questions_by_pk?: Maybe<{
        __typename?: 'quizz_questions';
    } & QuizzQuestionsFragment>;
};
export declare type RandomDrawingFragment = {
    __typename: 'random_drawings';
} & Pick<RandomDrawings, 'id' | 'created_at' | 'game_id'> & {
    gain: {
        __typename: 'gains';
    } & Pick<Gains, 'id' | 'name' | 'stock'>;
    winner: {
        __typename: 'users';
    } & Pick<Users, 'id' | 'name' | 'first_name'>;
};
export declare type VerifyRandomDrawingInfosQueryVariables = Exact<{
    gameId: Scalars['uuid'];
    gainsIds: Array<Scalars['uuid']> | Scalars['uuid'];
}>;
export declare type VerifyRandomDrawingInfosQuery = {
    __typename?: 'query_root';
} & {
    game?: Maybe<{
        __typename?: 'games';
    } & Pick<Games, 'client_id'>>;
    gains: Array<{
        __typename?: 'gains';
    } & Pick<Gains, 'id' | 'client_id' | 'name' | 'stock'>>;
};
export declare type GetArPlayersQueryVariables = Exact<{
    gameId: Scalars['uuid'];
    dateStart?: Maybe<Scalars['timestamptz']>;
    dateEnd?: Maybe<Scalars['timestamptz']>;
}>;
export declare type GetArPlayersQuery = {
    __typename?: 'query_root';
} & {
    players: Array<{
        __typename?: 'ar_played';
    } & Pick<ArPlayed, 'user_id'>>;
};
export declare type GetQuizzPlayersQueryVariables = Exact<{
    gameId: Scalars['uuid'];
    dateStart?: Maybe<Scalars['timestamptz']>;
    dateEnd?: Maybe<Scalars['timestamptz']>;
    minScore?: Maybe<Scalars['numeric']>;
}>;
export declare type GetQuizzPlayersQuery = {
    __typename?: 'query_root';
} & {
    players: Array<{
        __typename?: 'quizz_played';
    } & Pick<QuizzPlayed, 'user_id'>>;
};
export declare type GetVotePlayersQueryVariables = Exact<{
    gameId: Scalars['uuid'];
    dateStart?: Maybe<Scalars['timestamptz']>;
    dateEnd?: Maybe<Scalars['timestamptz']>;
}>;
export declare type GetVotePlayersQuery = {
    __typename?: 'query_root';
} & {
    players: Array<{
        __typename?: 'votes_played';
    } & Pick<VotesPlayed, 'user_id'>>;
};
export declare type GetGameRandomDrawingsQueryVariables = Exact<{
    gameId: Scalars['uuid'];
}>;
export declare type GetGameRandomDrawingsQuery = {
    __typename?: 'query_root';
} & {
    random_drawings: Array<{
        __typename?: 'random_drawings';
    } & RandomDrawingFragment>;
};
export declare type InsertRandomDrawingsMutationVariables = Exact<{
    randomDrawingsInput: Array<RandomDrawingsInsertInput> | RandomDrawingsInsertInput;
}>;
export declare type InsertRandomDrawingsMutation = {
    __typename?: 'mutation_root';
} & {
    randomDrawings?: Maybe<{
        __typename?: 'random_drawings_mutation_response';
    } & {
        returning: Array<{
            __typename?: 'random_drawings';
        } & RandomDrawingFragment>;
    }>;
};
export declare type SurveyQuestionsFragment = {
    __typename?: 'surveys_questions';
} & Pick<SurveysQuestions, 'id' | 'survey_id' | 'question' | 'asset_id'> & {
    asset?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    surveys_questions_answers: Array<{
        __typename?: 'surveys_questions_answers';
    } & SurveyQuestionAnswersFragment>;
};
export declare type SurveyQuestionAnswersFragment = {
    __typename?: 'surveys_questions_answers';
} & Pick<SurveysQuestionsAnswers, 'id' | 'answer'>;
export declare type SurveyFragment = {
    __typename?: 'surveys';
} & Pick<Surveys, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'address' | 'created_at' | 'type_id' | 'location' | 'city'> & {
    type?: Maybe<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
    surveys_questions: Array<{
        __typename?: 'surveys_questions';
    } & SurveyQuestionsFragment>;
};
export declare type InsertSurveyMutationVariables = Exact<{
    survey: SurveysInsertInput;
}>;
export declare type InsertSurveyMutation = {
    __typename?: 'mutation_root';
} & {
    insert_surveys_one?: Maybe<{
        __typename?: 'surveys';
    } & SurveyFragment>;
};
export declare type GetSurveySpecificsQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetSurveySpecificsQuery = {
    __typename?: 'query_root';
} & {
    surveys_by_pk?: Maybe<{
        __typename?: 'surveys';
    } & Pick<Surveys, 'id'> & {
        surveys_questions: Array<{
            __typename?: 'surveys_questions';
        } & SurveyQuestionsFragment>;
    }>;
};
export declare type UpdateSurveyMutationVariables = Exact<{
    id: Scalars['uuid'];
    updates: SurveysSetInput;
}>;
export declare type UpdateSurveyMutation = {
    __typename: 'mutation_root';
} & {
    update_surveys_by_pk?: Maybe<{
        __typename: 'surveys';
    } & SurveyFragment>;
};
export declare type InsertSurveyQuestionMutationVariables = Exact<{
    object: SurveysQuestionsInsertInput;
}>;
export declare type InsertSurveyQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    insert_surveys_questions_one?: Maybe<{
        __typename?: 'surveys_questions';
    } & {
        surveys_questions_answers: Array<{
            __typename?: 'surveys_questions_answers';
        } & SurveyQuestionAnswersFragment>;
    } & SurveyQuestionsFragment>;
};
export declare type UpdateSurveyQuestionMutationVariables = Exact<{
    id: Scalars['uuid'];
    updates: SurveysQuestionsSetInput;
    surveysQuestionsAnswers: Array<SurveysQuestionsAnswersInsertInput> | SurveysQuestionsAnswersInsertInput;
}>;
export declare type UpdateSurveyQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_surveys_questions_answers?: Maybe<{
        __typename?: 'surveys_questions_answers_mutation_response';
    } & Pick<SurveysQuestionsAnswersMutationResponse, 'affected_rows'>>;
    insert_surveys_questions_answers?: Maybe<{
        __typename?: 'surveys_questions_answers_mutation_response';
    } & Pick<SurveysQuestionsAnswersMutationResponse, 'affected_rows'>>;
    update_surveys_questions_by_pk?: Maybe<{
        __typename?: 'surveys_questions';
    } & {
        surveys_questions_answers: Array<{
            __typename?: 'surveys_questions_answers';
        } & SurveyQuestionAnswersFragment>;
    } & SurveyQuestionsFragment>;
};
export declare type DeleteSurveyQuestionMutationVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type DeleteSurveyQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_surveys_questions_by_pk?: Maybe<{
        __typename?: 'surveys_questions';
    } & Pick<SurveysQuestions, 'id'>>;
};
export declare type TemplateFragment = {
    __typename?: 'templates';
} & Pick<Templates, 'id' | 'name' | 'design' | 'html' | 'created_at' | 'updated_at' | 'client_id' | 'is_active'>;
export declare type GetTemplatesByClientQueryVariables = Exact<{
    clientId: Scalars['uuid'];
}>;
export declare type GetTemplatesByClientQuery = {
    __typename?: 'query_root';
} & {
    templates: Array<{
        __typename?: 'templates';
    } & TemplateFragment>;
};
export declare type InsertTemplateMutationVariables = Exact<{
    template: TemplatesInsertInput;
}>;
export declare type InsertTemplateMutation = {
    __typename?: 'mutation_root';
} & {
    insert_templates_one?: Maybe<{
        __typename?: 'templates';
    } & TemplateFragment>;
};
export declare type UpdateTemplateMutationVariables = Exact<{
    templateId: Scalars['uuid'];
    updates: TemplatesSetInput;
}>;
export declare type UpdateTemplateMutation = {
    __typename: 'mutation_root';
} & {
    update_templates_by_pk?: Maybe<{
        __typename: 'templates';
    } & TemplateFragment>;
};
export declare type ArchiveTemplateMutationVariables = Exact<{
    templateId: Scalars['uuid'];
}>;
export declare type ArchiveTemplateMutation = {
    __typename: 'mutation_root';
} & {
    update_templates_by_pk?: Maybe<{
        __typename: 'templates';
    } & TemplateFragment>;
};
export declare type TrackerFragment = {
    __typename?: 'ar_trackers';
} & Pick<ArTrackers, 'id' | 'name' | 'width' | 'height' | 'qrcode_inside'> & {
    image: {
        __typename?: 'assets';
    } & AssetFragment;
};
export declare type GetTrackersQueryVariables = Exact<{
    clientId?: Maybe<Scalars['uuid']>;
}>;
export declare type GetTrackersQuery = {
    __typename?: 'query_root';
} & {
    ar_trackers: Array<{
        __typename?: 'ar_trackers';
    } & TrackerFragment>;
};
export declare type InsertTrackerMutationVariables = Exact<{
    object: ArTrackersInsertInput;
}>;
export declare type InsertTrackerMutation = {
    __typename?: 'mutation_root';
} & {
    insert_ar_trackers_one?: Maybe<{
        __typename?: 'ar_trackers';
    } & TrackerFragment>;
};
export declare type UpdateTrackerMutationVariables = Exact<{
    id: Scalars['uuid'];
    updates: ArTrackersSetInput;
}>;
export declare type UpdateTrackerMutation = {
    __typename?: 'mutation_root';
} & {
    update_ar_trackers_by_pk?: Maybe<{
        __typename?: 'ar_trackers';
    } & TrackerFragment>;
};
export declare type GetVoteResultsQueryVariables = Exact<{
    gameId: Scalars['uuid'];
}>;
export declare type GetVoteResultsQuery = {
    __typename?: 'query_root';
} & {
    votes_selections: Array<{
        __typename?: 'votes_selections';
    } & Pick<VotesSelections, 'id' | 'selection'> & {
        votes_selections_choices: Array<{
            __typename?: 'votes_selections_choices';
        } & Pick<VotesSelectionsChoices, 'id' | 'label'>>;
    }>;
    votes_played: Array<{
        __typename?: 'votes_played';
    } & Pick<VotesPlayed, 'id' | 'game_id' | 'played_at' | 'results' | 'user_id'>>;
};
export declare type VoteSelectionFragment = {
    __typename?: 'votes_selections';
} & Pick<VotesSelections, 'id' | 'vote_id' | 'selection' | 'required_choices'> & {
    votes_selections_choices: Array<{
        __typename?: 'votes_selections_choices';
    } & VoteSelectionChoiceFragment>;
};
export declare type VoteSelectionChoiceFragment = {
    __typename?: 'votes_selections_choices';
} & Pick<VotesSelectionsChoices, 'id' | 'label' | 'vote_selection_id'> & {
    asset: {
        __typename?: 'assets';
    } & AssetFragment;
};
export declare type VoteFragment = {
    __typename?: 'votes';
} & Pick<Votes, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'description' | 'gtc' | 'instructions' | 'address' | 'radius' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'frequency' | 'max_participations' | 'created_at' | 'type_id' | 'location' | 'city' | 'keep_cumulated_probability'> & {
    type: {
        __typename?: 'games_types';
    } & GameTypeFragment;
    games_gains: Array<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
    votes_selections: Array<{
        __typename?: 'votes_selections';
    } & VoteSelectionFragment>;
};
export declare type InsertVoteMutationVariables = Exact<{
    vote: VotesInsertInput;
}>;
export declare type InsertVoteMutation = {
    __typename?: 'mutation_root';
} & {
    insert_votes_one?: Maybe<{
        __typename?: 'votes';
    } & VoteFragment>;
};
export declare type GetVoteSpecificsQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetVoteSpecificsQuery = {
    __typename?: 'query_root';
} & {
    votes_by_pk?: Maybe<{
        __typename?: 'votes';
    } & Pick<Votes, 'id'> & {
        votes_selections: Array<{
            __typename?: 'votes_selections';
        } & VoteSelectionFragment>;
    }>;
};
export declare type InsertVoteSelectionMutationVariables = Exact<{
    object: VotesSelectionsInsertInput;
}>;
export declare type InsertVoteSelectionMutation = {
    __typename?: 'mutation_root';
} & {
    insert_votes_selections_one?: Maybe<{
        __typename?: 'votes_selections';
    } & {
        votes_selections_choices: Array<{
            __typename?: 'votes_selections_choices';
        } & VoteSelectionChoiceFragment>;
    } & VoteSelectionFragment>;
};
export declare type UpdateVoteSelectionMutationVariables = Exact<{
    id: Scalars['uuid'];
    updates: VotesSelectionsSetInput;
    voteSelectionsChoices: Array<VotesSelectionsChoicesInsertInput> | VotesSelectionsChoicesInsertInput;
}>;
export declare type UpdateVoteSelectionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_votes_selections_choices?: Maybe<{
        __typename?: 'votes_selections_choices_mutation_response';
    } & Pick<VotesSelectionsChoicesMutationResponse, 'affected_rows'>>;
    insert_votes_selections_choices?: Maybe<{
        __typename?: 'votes_selections_choices_mutation_response';
    } & Pick<VotesSelectionsChoicesMutationResponse, 'affected_rows'>>;
    update_votes_selections_by_pk?: Maybe<{
        __typename?: 'votes_selections';
    } & {
        votes_selections_choices: Array<{
            __typename?: 'votes_selections_choices';
        } & VoteSelectionChoiceFragment>;
    } & VoteSelectionFragment>;
};
export declare type DeleteVoteSelectionMutationVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type DeleteVoteSelectionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_votes_selections_by_pk?: Maybe<{
        __typename?: 'votes_selections';
    } & VoteSelectionFragment>;
};
export declare type GetClientsByEmailQueryVariables = Exact<{
    email: Scalars['String'];
}>;
export declare type GetClientsByEmailQuery = {
    __typename?: 'query_root';
} & {
    clients: Array<{
        __typename?: 'clients';
    } & Pick<Clients, 'password'> & ClientDisplayFragment>;
};
export declare type InsertClientMutationVariables = Exact<{
    client: ClientsInsertInput;
}>;
export declare type InsertClientMutation = {
    __typename?: 'mutation_root';
} & {
    insert_clients_one?: Maybe<{
        __typename?: 'clients';
    } & ClientDisplayFragment>;
};
export declare type InsertClientPasswordForgottenTokenMutationVariables = Exact<{
    client_id: Scalars['uuid'];
}>;
export declare type InsertClientPasswordForgottenTokenMutation = {
    __typename?: 'mutation_root';
} & {
    insert_clients_password_forgotten_tokens_one?: Maybe<{
        __typename?: 'clients_password_forgotten_tokens';
    } & Pick<ClientsPasswordForgottenTokens, 'id'>>;
};
export declare type ResetPasswordMutationVariables = Exact<{
    resetTokenId: Scalars['uuid'];
    limitDate: Scalars['timestamp'];
    newPassword: Scalars['String'];
}>;
export declare type ResetPasswordMutation = {
    __typename?: 'mutation_root';
} & {
    update_clients?: Maybe<{
        __typename?: 'clients_mutation_response';
    } & Pick<ClientsMutationResponse, 'affected_rows'>>;
    delete_clients_password_forgotten_tokens_by_pk?: Maybe<{
        __typename?: 'clients_password_forgotten_tokens';
    } & Pick<ClientsPasswordForgottenTokens, 'id'>>;
};
export declare type GetUsersByEmailQueryVariables = Exact<{
    email: Scalars['String'];
}>;
export declare type GetUsersByEmailQuery = {
    __typename?: 'query_root';
} & {
    users: Array<{
        __typename?: 'users';
    } & Pick<Users, 'password' | 'apple_id'> & UserDisplayFragment>;
};
export declare type GetUsersByAppleIdQueryVariables = Exact<{
    appleId: Scalars['String'];
}>;
export declare type GetUsersByAppleIdQuery = {
    __typename?: 'query_root';
} & {
    users: Array<{
        __typename?: 'users';
    } & UserDisplayFragment>;
};
export declare type InsertUserMutationVariables = Exact<{
    user: UsersInsertInput;
}>;
export declare type InsertUserMutation = {
    __typename?: 'mutation_root';
} & {
    insert_users_one?: Maybe<{
        __typename?: 'users';
    } & UserDisplayFragment>;
};
export declare type UpsertUserMutationVariables = Exact<{
    user: UsersInsertInput;
}>;
export declare type UpsertUserMutation = {
    __typename?: 'mutation_root';
} & {
    insert_users_one?: Maybe<{
        __typename?: 'users';
    } & UserDisplayFragment>;
};
export declare type AddressFragment = {
    __typename?: 'addresses';
} & Pick<Addresses, 'address' | 'city' | 'zipcode' | 'country'>;
export declare type UpsertAddressMutationVariables = Exact<{
    address: AddressesInsertInput;
}>;
export declare type UpsertAddressMutation = {
    __typename?: 'mutation_root';
} & {
    insert_addresses_one?: Maybe<{
        __typename?: 'addresses';
    } & Pick<Addresses, 'id'> & AddressFragment>;
};
export declare type GainWonFragment = {
    __typename: 'gains';
} & Pick<Gains, 'id' | 'name' | 'description' | 'instructions' | 'is_virtual' | 'gtc' | 'template_id'> & {
    image?: Maybe<{
        __typename: 'assets';
    } & AssetFragment>;
    gains_virtuals: Array<{
        __typename: 'gains_virtuals';
    } & Pick<GainsVirtuals, 'format' | 'id' | 'value'>>;
    client: {
        __typename: 'clients';
    } & {
        picture?: Maybe<{
            __typename: 'assets';
        } & AssetFragment>;
    };
};
export declare type ValidateGainMutationVariables = Exact<{
    id: Scalars['bigint'];
    fromRandomDrawing: Scalars['Boolean'];
}>;
export declare type ValidateGainMutation = {
    __typename?: 'mutation_root';
} & {
    update_games_played_by_pk?: Maybe<{
        __typename?: 'games_played';
    } & Pick<GamesPlayed, 'id' | 'gain_validated'>>;
    update_random_drawings_by_pk?: Maybe<{
        __typename?: 'random_drawings';
    } & Pick<RandomDrawings, 'id' | 'gain_validated'>>;
};
export declare type GetGainsWonQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetGainsWonQuery = {
    __typename?: 'query_root';
} & {
    games_played: Array<{
        __typename?: 'games_played';
    } & GameWonFragment>;
    random_drawings: Array<{
        __typename?: 'random_drawings';
    } & RandomDrawingWonFragment>;
};
export declare type GamesGainsAvailableFragment = {
    __typename?: 'games_gains_available';
} & Pick<GamesGainsAvailable, 'gain_id' | 'probability' | 'stock' | 'stock_won'>;
export declare type GamePlayedFragment = {
    __typename?: 'games_played';
} & Pick<GamesPlayed, 'id' | 'game_id' | 'user_id' | 'played_at'> & {
    gain?: Maybe<{
        __typename?: 'gains';
    } & GainWonFragment>;
};
export declare type GameWonFragment = {
    __typename?: 'games_played';
} & Pick<GamesPlayed, 'id' | 'played_at' | 'gain_validated'> & {
    gain?: Maybe<{
        __typename?: 'gains';
    } & GainWonFragment>;
    game?: Maybe<{
        __typename?: 'games';
    } & Pick<Games, 'name' | 'valorization'>>;
};
export declare type GetGameFrequencyQueryVariables = Exact<{
    gameId: Scalars['uuid'];
}>;
export declare type GetGameFrequencyQuery = {
    __typename?: 'query_root';
} & {
    games_by_pk?: Maybe<{
        __typename?: 'games';
    } & Pick<Games, 'is_active' | 'frequency' | 'max_participations' | 'tz'> & {
        type: {
            __typename?: 'games_types';
        } & Pick<GamesTypes, 'name'>;
    }>;
};
export declare type GetGamePlayedCountQueryVariables = Exact<{
    gameId: Scalars['uuid'];
    userId: Scalars['uuid'];
    dateFrom?: Maybe<Scalars['timestamptz']>;
}>;
export declare type GetGamePlayedCountQuery = {
    __typename?: 'query_root';
} & {
    games_played_aggregate: {
        __typename?: 'games_played_aggregate';
    } & {
        aggregate?: Maybe<{
            __typename?: 'games_played_aggregate_fields';
        } & Pick<GamesPlayedAggregateFields, 'count'>>;
    };
};
export declare type InfosToPlayArFragment = {
    __typename?: 'ar';
} & Pick<Ar, 'id' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'keep_cumulated_probability'> & {
    games_gains_available: Array<{
        __typename?: 'games_gains_available';
    } & GamesGainsAvailableFragment>;
};
export declare type GetInfosToPlayArQueryVariables = Exact<{
    gameId: Scalars['uuid'];
}>;
export declare type GetInfosToPlayArQuery = {
    __typename?: 'query_root';
} & {
    ar?: Maybe<{
        __typename?: 'ar';
    } & InfosToPlayArFragment>;
};
export declare type ArPlayedFragment = {
    __typename?: 'ar_played';
} & Pick<ArPlayed, 'id' | 'game_id' | 'user_id' | 'played_at'> & {
    gain?: Maybe<{
        __typename?: 'gains';
    } & GainWonFragment>;
};
export declare type PlayArMutationVariables = Exact<{
    gameId: Scalars['uuid'];
    gainId?: Maybe<Scalars['uuid']>;
    userId: Scalars['uuid'];
}>;
export declare type PlayArMutation = {
    __typename?: 'mutation_root';
} & {
    arPlayed?: Maybe<{
        __typename?: 'ar_played';
    } & ArPlayedFragment>;
};
export declare type InfosToPlayQuizzFragment = {
    __typename?: 'quizz';
} & Pick<Quizz, 'id' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'keep_cumulated_probability' | 'winning_percentage'> & {
    quizz_questions: Array<{
        __typename?: 'quizz_questions';
    } & QuizzQuestionsFragment>;
    games_gains_available: Array<{
        __typename?: 'games_gains_available';
    } & GamesGainsAvailableFragment>;
};
export declare type GetInfosToPlayQuizzQueryVariables = Exact<{
    gameId: Scalars['uuid'];
}>;
export declare type GetInfosToPlayQuizzQuery = {
    __typename?: 'query_root';
} & {
    quizz?: Maybe<{
        __typename?: 'quizz';
    } & InfosToPlayQuizzFragment>;
};
export declare type QuizzPlayedFragment = {
    __typename?: 'quizz_played';
} & Pick<QuizzPlayed, 'id' | 'game_id' | 'user_id' | 'played_at'> & {
    gain?: Maybe<{
        __typename?: 'gains';
    } & GainWonFragment>;
};
export declare type PlayQuizzMutationVariables = Exact<{
    gameId: Scalars['uuid'];
    gainId?: Maybe<Scalars['uuid']>;
    userId: Scalars['uuid'];
    score: Scalars['numeric'];
    time: Scalars['numeric'];
}>;
export declare type PlayQuizzMutation = {
    __typename?: 'mutation_root';
} & {
    quizzPlayed?: Maybe<{
        __typename?: 'quizz_played';
    } & QuizzPlayedFragment>;
};
export declare type QuizzClientFragment = {
    __typename?: 'quizz';
} & {
    client: {
        __typename?: 'clients';
    } & Pick<Clients, 'id' | 'name'> & {
        picture?: Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
} & QuizzFragment;
export declare type GetQuizzByIdQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetQuizzByIdQuery = {
    __typename?: 'query_root';
} & {
    quizz_by_pk?: Maybe<{
        __typename?: 'quizz';
    } & QuizzClientFragment>;
};
export declare type VoteClientFragment = {
    __typename?: 'votes';
} & {
    client: {
        __typename?: 'clients';
    } & Pick<Clients, 'id' | 'name'> & {
        picture?: Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
} & VoteFragment;
export declare type InfosToPlayVoteFragment = {
    __typename?: 'votes';
} & Pick<Votes, 'id' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'keep_cumulated_probability'> & {
    games_gains_available: Array<{
        __typename?: 'games_gains_available';
    } & GamesGainsAvailableFragment>;
};
export declare type GetInfosToPlayVoteQueryVariables = Exact<{
    gameId: Scalars['uuid'];
}>;
export declare type GetInfosToPlayVoteQuery = {
    __typename?: 'query_root';
} & {
    vote?: Maybe<{
        __typename?: 'votes';
    } & InfosToPlayVoteFragment>;
};
export declare type VotePlayedFragment = {
    __typename?: 'votes_played';
} & Pick<VotesPlayed, 'id' | 'game_id' | 'user_id' | 'played_at'> & {
    gain?: Maybe<{
        __typename?: 'gains';
    } & GainWonFragment>;
};
export declare type PlayVoteMutationVariables = Exact<{
    gameId: Scalars['uuid'];
    gainId?: Maybe<Scalars['uuid']>;
    userId: Scalars['uuid'];
    results: Scalars['jsonb'];
}>;
export declare type PlayVoteMutation = {
    __typename?: 'mutation_root';
} & {
    votePlayed?: Maybe<{
        __typename?: 'votes_played';
    } & VotePlayedFragment>;
};
export declare type GetVoteByIdQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetVoteByIdQuery = {
    __typename?: 'query_root';
} & {
    votes_by_pk?: Maybe<{
        __typename?: 'votes';
    } & VoteClientFragment>;
};
export declare type GoodieFragment = {
    __typename?: 'goodies';
} & Pick<Goodies, 'id' | 'name' | 'created_at' | 'client_id' | 'date_start' | 'date_end' | 'is_active' | 'description'> & {
    image?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type GoodieM2MAnimationFragment = {
    __typename?: 'goodies_m2m_animations';
} & Pick<GoodiesM2mAnimations, 'goodie_id' | 'animation_id'> & {
    animation: {
        __typename?: 'animations';
    } & AnimationFragment;
};
export declare type GoodiePlayedFragment = {
    __typename?: 'goodies_played';
} & Pick<GoodiesPlayed, 'id' | 'goodie_id' | 'user_id' | 'played_at'> & {
    goodie: {
        __typename?: 'goodies';
    } & {
        animations: Array<{
            __typename?: 'goodies_m2m_animations';
        } & {
            animation: {
                __typename?: 'animations';
            } & AnimationFragment;
        }>;
    };
};
export declare type GetGoodiesQueryVariables = Exact<{
    clientId?: Maybe<Scalars['uuid']>;
}>;
export declare type GetGoodiesQuery = {
    __typename?: 'query_root';
} & {
    goodies: Array<{
        __typename?: 'goodies';
    } & {
        client: {
            __typename?: 'clients';
        } & {
            picture?: Maybe<{
                __typename?: 'assets';
            } & AssetFragment>;
        };
    } & GoodieFragment>;
};
export declare type GetGoodieAnimationsQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetGoodieAnimationsQuery = {
    __typename?: 'query_root';
} & {
    goodies_by_pk?: Maybe<{
        __typename?: 'goodies';
    } & Pick<Goodies, 'id'> & {
        animations: Array<{
            __typename?: 'goodies_m2m_animations';
        } & GoodieM2MAnimationFragment>;
    }>;
};
export declare type PlayGoodieMutationVariables = Exact<{
    goodieId: Scalars['uuid'];
    userId: Scalars['uuid'];
}>;
export declare type PlayGoodieMutation = {
    __typename?: 'mutation_root';
} & {
    goodiePlayed?: Maybe<{
        __typename?: 'goodies_played';
    } & GoodiePlayedFragment>;
};
export declare type GetTemplateByIdQueryVariables = Exact<{
    templateId: Scalars['uuid'];
}>;
export declare type GetTemplateByIdQuery = {
    __typename?: 'query_root';
} & {
    templates_by_pk?: Maybe<{
        __typename?: 'templates';
    } & Pick<Templates, 'id' | 'name' | 'html'>>;
};
export declare type NearbyGameCardFragment = {
    __typename?: 'nearby_games';
} & Pick<NearbyGames, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'client_id' | 'description' | 'gtc' | 'instructions' | 'address' | 'radius' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'frequency' | 'max_participations' | 'created_at' | 'type_id' | 'location' | 'city' | 'distance' | 'is_test'> & {
    card_image?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    card_image_background?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    type: {
        __typename?: 'games_types';
    } & GameTypeFragment;
    games_gains: Array<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
    client: {
        __typename?: 'clients';
    } & Pick<Clients, 'id' | 'name' | 'company'> & {
        picture?: Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
};
export declare type NearbyCommunicationCardFragment = {
    __typename?: 'nearby_communications';
} & Pick<NearbyCommunications, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'client_id' | 'address' | 'created_at' | 'type_id' | 'location' | 'city' | 'description' | 'distance'> & {
    card_image?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    card_image_background?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    type: {
        __typename?: 'communications_types';
    } & CommunicationTypeFragment;
    client: {
        __typename?: 'clients';
    } & Pick<Clients, 'id' | 'name'> & {
        picture?: Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
};
export declare type GetNearbyCardsQueryVariables = Exact<{
    location: Scalars['geometry'];
}>;
export declare type GetNearbyCardsQuery = {
    __typename?: 'query_root';
} & {
    get_nearby_games: Array<{
        __typename?: 'nearby_games';
    } & NearbyGameCardFragment>;
    get_nearby_communications: Array<{
        __typename?: 'nearby_communications';
    } & NearbyCommunicationCardFragment>;
};
export declare type GetNearbyPrivateDeckCardsQueryVariables = Exact<{
    location: Scalars['geometry'];
    privateDeckId: Scalars['uuid'];
}>;
export declare type GetNearbyPrivateDeckCardsQuery = {
    __typename?: 'query_root';
} & {
    get_nearby_private_deck_games: Array<{
        __typename?: 'nearby_games';
    } & NearbyGameCardFragment>;
    get_nearby_private_deck_communications: Array<{
        __typename?: 'nearby_communications';
    } & NearbyCommunicationCardFragment>;
};
export declare type NearbyCommunicationFragment = {
    __typename?: 'communications';
} & {
    client: {
        __typename?: 'clients';
    } & Pick<Clients, 'id' | 'name'> & {
        picture?: Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
} & CommunicationFragment;
export declare type GetNearbyCommunicationsQueryVariables = Exact<{
    location: Scalars['geography'];
    distance: Scalars['Float'];
    currentDate: Scalars['date'];
}>;
export declare type GetNearbyCommunicationsQuery = {
    __typename?: 'query_root';
} & {
    communications: Array<{
        __typename?: 'communications';
    } & NearbyCommunicationFragment>;
};
export declare type NearbyGameFragment = {
    __typename?: 'games';
} & Pick<Games, 'is_test'> & {
    client: {
        __typename?: 'clients';
    } & Pick<Clients, 'id' | 'name'> & {
        picture?: Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
} & GameFragment;
export declare type GetNearbyGamesQueryVariables = Exact<{
    location: Scalars['geography'];
    distance: Scalars['Float'];
    currentDate: Scalars['date'];
}>;
export declare type GetNearbyGamesQuery = {
    __typename?: 'query_root';
} & {
    games: Array<{
        __typename?: 'games';
    } & NearbyGameFragment>;
};
export declare type GetTestGamesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetTestGamesQuery = {
    __typename?: 'query_root';
} & {
    games: Array<{
        __typename?: 'games';
    } & NearbyGameFragment>;
};
export declare type PrivateDeckDisplayFragment = {
    __typename?: 'privates_decks';
} & Pick<PrivatesDecks, 'id' | 'name' | 'description' | 'code' | 'date_start' | 'date_end' | 'is_active'>;
export declare type PrivateDeckM2mUserFragment = {
    __typename?: 'privates_decks_m2m_users';
} & Pick<PrivatesDecksM2mUsers, 'private_deck_id' | 'user_id'> & {
    private_deck: {
        __typename?: 'privates_decks';
    } & PrivateDeckDisplayFragment;
};
export declare type GetPrivateDeckByCodeQueryVariables = Exact<{
    code: Scalars['String'];
}>;
export declare type GetPrivateDeckByCodeQuery = {
    __typename?: 'query_root';
} & {
    privates_decks: Array<{
        __typename?: 'privates_decks';
    } & PrivateDeckFragment>;
};
export declare type InsertPrivateDeckM2mUserMutationVariables = Exact<{
    privateDeckId: Scalars['uuid'];
}>;
export declare type InsertPrivateDeckM2mUserMutation = {
    __typename?: 'mutation_root';
} & {
    insert_privates_decks_m2m_users_one?: Maybe<{
        __typename?: 'privates_decks_m2m_users';
    } & PrivateDeckM2mUserFragment>;
};
export declare type GetPrivatesDeckByUserQueryVariables = Exact<{
    userId: Scalars['uuid'];
}>;
export declare type GetPrivatesDeckByUserQuery = {
    __typename?: 'query_root';
} & {
    privates_decks_m2m_users: Array<{
        __typename?: 'privates_decks_m2m_users';
    } & PrivateDeckM2mUserFragment>;
};
export declare type RandomDrawingWonFragment = {
    __typename: 'random_drawings';
} & Pick<RandomDrawings, 'id' | 'created_at' | 'game_id' | 'gain_validated'> & {
    gain: {
        __typename?: 'gains';
    } & GainWonFragment;
};
export declare type UserDisplayFragment = {
    __typename?: 'users';
} & Pick<Users, 'id' | 'created_at' | 'email' | 'name' | 'first_name' | 'birthdate' | 'address_id' | 'is_active' | 'is_tester' | 'picture_id'> & {
    address?: Maybe<{
        __typename?: 'addresses';
    } & Pick<Addresses, 'address' | 'city' | 'zipcode' | 'country'>>;
    picture?: Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type GetUserByIdQueryVariables = Exact<{
    id: Scalars['uuid'];
}>;
export declare type GetUserByIdQuery = {
    __typename?: 'query_root';
} & {
    users_by_pk?: Maybe<{
        __typename?: 'users';
    } & UserDisplayFragment>;
};
export declare type UpdateUserMutationVariables = Exact<{
    userId: Scalars['uuid'];
    user?: Maybe<UsersSetInput>;
}>;
export declare type UpdateUserMutation = {
    __typename?: 'mutation_root';
} & {
    update_users_by_pk?: Maybe<{
        __typename?: 'users';
    } & UserDisplayFragment>;
};
export declare type CreateStripeCustomerMutationVariables = Exact<{
    name: Scalars['String'];
    email: Scalars['String'];
}>;
export declare type CreateStripeCustomerMutation = {
    __typename?: 'mutation_root';
} & {
    create_stripe_customer: {
        __typename?: 'StripeCustomer';
    } & Pick<StripeCustomer, 'stripe_cust_id'>;
};
export declare type CreateStripeIntentMutationVariables = Exact<{
    customerId: Scalars['String'];
}>;
export declare type CreateStripeIntentMutation = {
    __typename?: 'mutation_root';
} & {
    create_stripe_intent: {
        __typename?: 'StripeIntent';
    } & Pick<StripeIntent, 'client_secret'>;
};
export declare type GetStripeCustomerPaymentMethodsQueryVariables = Exact<{
    customer: Scalars['String'];
    type: Scalars['String'];
}>;
export declare type GetStripeCustomerPaymentMethodsQuery = {
    __typename?: 'query_root';
} & {
    get_stripe_customer_payment_methods: Array<Maybe<{
        __typename?: 'StripePaymentMethod';
    } & Pick<StripePaymentMethod, 'id' | 'object' | 'created' | 'customer' | 'livemode' | 'type'> & {
        billing_details?: Maybe<{
            __typename?: 'StripePaymentMethodBillingDetails';
        } & Pick<StripePaymentMethodBillingDetails, 'email' | 'name' | 'phone'> & {
            address?: Maybe<{
                __typename?: 'StripePaymentMethodBillingDetailsAddress';
            } & Pick<StripePaymentMethodBillingDetailsAddress, 'city' | 'country' | 'line1' | 'line2' | 'postal_code' | 'state'>>;
        }>;
        card?: Maybe<{
            __typename?: 'StripePaymentMethodCard';
        } & Pick<StripePaymentMethodCard, 'brand' | 'country' | 'exp_month' | 'exp_year' | 'fingerprint' | 'funding' | 'generated_from' | 'last4' | 'wallet'>>;
    }>>;
};
