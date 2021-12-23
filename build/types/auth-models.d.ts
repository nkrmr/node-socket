import * as Types from './common';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type AnimationFragment = {
    __typename?: 'animations';
} & Pick<Types.Animations, 'id' | 'name'> & {
    assets: Array<{
        __typename?: 'animations_m2m_assets';
    } & Pick<Types.AnimationsM2mAssets, 'when_won'> & {
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
} & Pick<Types.Ar, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'description' | 'gtc' | 'instructions' | 'address' | 'radius' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'frequency' | 'max_participations' | 'created_at' | 'type_id' | 'location' | 'city' | 'keep_cumulated_probability'> & {
    type: {
        __typename?: 'games_types';
    } & GameTypeFragment;
    games_gains: Array<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
} & ArSpecificsFragment;
export declare type ArM2MAnimationFragment = {
    __typename?: 'ar_m2m_animations';
} & Pick<Types.ArM2mAnimations, 'ar_id' | 'animation_id'> & {
    animation: {
        __typename?: 'animations';
    } & AnimationFragment;
};
export declare type AnimationM2MAssetFragment = {
    __typename?: 'animations_m2m_assets';
} & Pick<Types.AnimationsM2mAssets, 'animation_id' | 'asset_id' | 'when_won'>;
export declare type GetArQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetArQuery = {
    __typename?: 'query_root';
} & {
    ar_by_pk?: Types.Maybe<{
        __typename?: 'ar';
    } & ArFragment>;
};
export declare type GetArSpecificsQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetArSpecificsQuery = {
    __typename?: 'query_root';
} & {
    ar_by_pk?: Types.Maybe<{
        __typename?: 'ar';
    } & Pick<Types.Ar, 'id'> & ArSpecificsFragment>;
};
export declare type InsertArMutationVariables = Types.Exact<{
    ar: Types.ArInsertInput;
}>;
export declare type InsertArMutation = {
    __typename?: 'mutation_root';
} & {
    insert_ar_one?: Types.Maybe<{
        __typename?: 'ar';
    } & ArFragment>;
};
export declare type UpdateAnimationMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    updates: Types.AnimationsSetInput;
}>;
export declare type UpdateAnimationMutation = {
    __typename?: 'mutation_root';
} & {
    update_animations_by_pk?: Types.Maybe<{
        __typename?: 'animations';
    } & AnimationFragment>;
};
export declare type InsertArM2mAnimationsMutationVariables = Types.Exact<{
    ar_id: Types.Scalars['uuid'];
    animation: Types.AnimationsObjRelInsertInput;
}>;
export declare type InsertArM2mAnimationsMutation = {
    __typename?: 'mutation_root';
} & {
    insert_ar_m2m_animations_one?: Types.Maybe<{
        __typename?: 'ar_m2m_animations';
    } & ArM2MAnimationFragment>;
};
export declare type DeleteArM2mAnimationsMutationVariables = Types.Exact<{
    animation_id: Types.Scalars['uuid'];
    ar_id: Types.Scalars['uuid'];
}>;
export declare type DeleteArM2mAnimationsMutation = {
    __typename?: 'mutation_root';
} & {
    delete_ar_m2m_animations_by_pk?: Types.Maybe<{
        __typename?: 'ar_m2m_animations';
    } & Pick<Types.ArM2mAnimations, 'ar_id' | 'animation_id'>>;
};
export declare type InsertAnimationsM2mAssetsMutationVariables = Types.Exact<{
    objects: Array<Types.AnimationsM2mAssetsInsertInput> | Types.AnimationsM2mAssetsInsertInput;
}>;
export declare type InsertAnimationsM2mAssetsMutation = {
    __typename?: 'mutation_root';
} & {
    insert_animations_m2m_assets?: Types.Maybe<{
        __typename?: 'animations_m2m_assets_mutation_response';
    } & {
        returning: Array<{
            __typename?: 'animations_m2m_assets';
        } & AnimationM2MAssetFragment>;
    }>;
};
export declare type UpdateAnimationsM2mAssetsMutationVariables = Types.Exact<{
    animation_id: Types.Scalars['uuid'];
    asset_id: Types.Scalars['uuid'];
    when_won: Types.Scalars['Boolean'];
}>;
export declare type UpdateAnimationsM2mAssetsMutation = {
    __typename?: 'mutation_root';
} & {
    update_animations_m2m_assets_by_pk?: Types.Maybe<{
        __typename?: 'animations_m2m_assets';
    } & AnimationM2MAssetFragment>;
};
export declare type DeleteAnimationsM2mAssetsMutationVariables = Types.Exact<{
    animation_id: Types.Scalars['uuid'];
    asset_id: Types.Scalars['uuid'];
}>;
export declare type DeleteAnimationsM2mAssetsMutation = {
    __typename?: 'mutation_root';
} & {
    delete_animations_m2m_assets_by_pk?: Types.Maybe<{
        __typename?: 'animations_m2m_assets';
    } & Pick<Types.AnimationsM2mAssets, 'animation_id' | 'asset_id'>>;
};
export declare type AssetFragment = {
    __typename?: 'assets';
} & Pick<Types.Assets, 'id' | 'type' | 'path' | 'name' | 'client_id' | 'user_id' | 'scaleX' | 'scaleY' | 'scaleZ' | 'resources'>;
export declare type AssetResourcesFragment = {
    __typename?: 'assets';
} & Pick<Types.Assets, 'id' | 'resources'>;
export declare type GetAssetByIdQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetAssetByIdQuery = {
    __typename?: 'query_root';
} & {
    assets_by_pk?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type GetAssetByPathQueryVariables = Types.Exact<{
    clientId: Types.Scalars['uuid'];
    path: Types.Scalars['String'];
}>;
export declare type GetAssetByPathQuery = {
    __typename?: 'query_root';
} & {
    assets: Array<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type GetAssetsQueryVariables = Types.Exact<{
    type?: Types.Maybe<Types.AssetsTypesEnum>;
    clientId?: Types.Maybe<Types.Scalars['uuid']>;
}>;
export declare type GetAssetsQuery = {
    __typename?: 'query_root';
} & {
    assets: Array<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type InsertAssetMutationVariables = Types.Exact<{
    object: Types.AssetsInsertInput;
}>;
export declare type InsertAssetMutation = {
    __typename?: 'mutation_root';
} & {
    insert_assets_one?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type UpdateAssetMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    updates: Types.AssetsSetInput;
}>;
export declare type UpdateAssetMutation = {
    __typename?: 'mutation_root';
} & {
    update_assets_by_pk?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type AddResourceToAssetMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    resource: Types.Scalars['jsonb'];
}>;
export declare type AddResourceToAssetMutation = {
    __typename?: 'mutation_root';
} & {
    update_assets_by_pk?: Types.Maybe<{
        __typename: 'assets';
    } & AssetResourcesFragment>;
};
export declare type DeleteResourceFromAssetMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    resource: Types.Scalars['String'];
}>;
export declare type DeleteResourceFromAssetMutation = {
    __typename?: 'mutation_root';
} & {
    update_assets_by_pk?: Types.Maybe<{
        __typename: 'assets';
    } & AssetResourcesFragment>;
};
export declare type ClientDisplayFragment = {
    __typename?: 'clients';
} & Pick<Types.Clients, 'id' | 'created_at' | 'email' | 'name' | 'first_name' | 'phone' | 'address_id' | 'stripe_customer_id' | 'company' | 'vat_id' | 'discount' | 'role' | 'is_active' | 'reseller_id'> & {
    address?: Types.Maybe<{
        __typename?: 'addresses';
    } & Pick<Types.Addresses, 'address' | 'city' | 'zipcode' | 'country'>>;
    reseller?: Types.Maybe<{
        __typename?: 'clients';
    } & Pick<Types.Clients, 'email' | 'name' | 'first_name'>>;
    picture?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type GetClientsQueryVariables = Types.Exact<{
    withDiscount?: Types.Maybe<Types.Scalars['Boolean']>;
}>;
export declare type GetClientsQuery = {
    __typename?: 'query_root';
} & {
    clients: Array<{
        __typename?: 'clients';
    } & ClientDisplayFragment>;
};
export declare type GetClientByIdQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetClientByIdQuery = {
    __typename?: 'query_root';
} & {
    clients_by_pk?: Types.Maybe<{
        __typename?: 'clients';
    } & ClientDisplayFragment>;
};
export declare type UpdateClientIsActiveMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    isActive: Types.Scalars['Boolean'];
}>;
export declare type UpdateClientIsActiveMutation = {
    __typename: 'mutation_root';
} & {
    update_clients_by_pk?: Types.Maybe<{
        __typename: 'clients';
    } & Pick<Types.Clients, 'id' | 'is_active'>>;
};
export declare type UpdateClientMutationVariables = Types.Exact<{
    clientId: Types.Scalars['uuid'];
    client?: Types.Maybe<Types.ClientsSetInput>;
}>;
export declare type UpdateClientMutation = {
    __typename?: 'mutation_root';
} & {
    update_clients_by_pk?: Types.Maybe<{
        __typename: 'clients';
    } & ClientDisplayFragment>;
};
export declare type CommunicationTypeFragment = {
    __typename?: 'communications_types';
} & Pick<Types.CommunicationsTypes, 'id' | 'name' | 'color' | 'acronym' | 'radius_price_range' | 'price'>;
export declare type GetCommunicationsTypesQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export declare type GetCommunicationsTypesQuery = {
    __typename?: 'query_root';
} & {
    communications_types: Array<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
};
export declare type GetCommunicationTypeByIdQueryVariables = Types.Exact<{
    communicationTypeId: Types.Scalars['uuid'];
}>;
export declare type GetCommunicationTypeByIdQuery = {
    __typename?: 'query_root';
} & {
    communications_types_by_pk?: Types.Maybe<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
};
export declare type CommunicationFragment = {
    __typename?: 'communications';
} & Pick<Types.Communications, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'address' | 'created_at' | 'type_id' | 'location' | 'city' | 'description'> & {
    card_image?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    card_image_background?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    type: {
        __typename?: 'communications_types';
    } & CommunicationTypeFragment;
};
export declare type CommunnicationMinimalInfosFragment = {
    __typename?: 'communications';
} & Pick<Types.Communications, 'id' | 'name' | 'client_id' | 'is_private'> & {
    type: {
        __typename?: 'communications_types';
    } & Pick<Types.CommunicationsTypes, 'name'>;
};
export declare type GetCommunicationsByClientQueryVariables = Types.Exact<{
    clientId: Types.Scalars['uuid'];
}>;
export declare type GetCommunicationsByClientQuery = {
    __typename?: 'query_root';
} & {
    communications: Array<{
        __typename?: 'communications';
    } & CommunicationFragment>;
};
export declare type GetCommunicationsByClientAndCommunicationTypeQueryVariables = Types.Exact<{
    clientId: Types.Scalars['uuid'];
    communicationTypeId: Types.Scalars['uuid'];
}>;
export declare type GetCommunicationsByClientAndCommunicationTypeQuery = {
    __typename?: 'query_root';
} & {
    communications: Array<{
        __typename?: 'communications';
    } & CommunicationFragment>;
};
export declare type InsertCommunicationMutationVariables = Types.Exact<{
    communication: Types.CommunicationsInsertInput;
}>;
export declare type InsertCommunicationMutation = {
    __typename?: 'mutation_root';
} & {
    insert_communications_one?: Types.Maybe<{
        __typename?: 'communications';
    } & CommunicationFragment>;
};
export declare type UpdateCommunicationMutationVariables = Types.Exact<{
    communicationId: Types.Scalars['uuid'];
    communication: Types.CommunicationsSetInput;
}>;
export declare type UpdateCommunicationMutation = {
    __typename: 'mutation_root';
} & {
    update_communications_by_pk?: Types.Maybe<{
        __typename: 'communications';
    } & CommunicationFragment>;
};
export declare type ArchiveCommunicationMutationVariables = Types.Exact<{
    communicationId: Types.Scalars['uuid'];
}>;
export declare type ArchiveCommunicationMutation = {
    __typename: 'mutation_root';
} & {
    update_communications_by_pk?: Types.Maybe<{
        __typename: 'communications';
    } & CommunicationFragment>;
};
export declare type EstimateM2mEntityFragment = {
    __typename?: 'estimates_m2m_entities';
} & Pick<Types.EstimatesM2mEntities, 'id' | 'name' | 'estimate_id' | 'entity_id' | 'radius' | 'trackers'> & {
    games_types?: Types.Maybe<{
        __typename?: 'games_types';
    } & GameTypeFragment>;
    communications_types?: Types.Maybe<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
};
export declare type EstimateFragment = {
    __typename?: 'estimates';
} & Pick<Types.Estimates, 'id' | 'name' | 'date_start' | 'date_end' | 'status' | 'participations_credits' | 'created_at' | 'updated_at' | 'client_id' | 'is_archive'> & {
    estimates_m2m_entities: Array<{
        __typename?: 'estimates_m2m_entities';
    } & EstimateM2mEntityFragment>;
};
export declare type GetEstimatesByClientQueryVariables = Types.Exact<{
    clientId: Types.Scalars['uuid'];
}>;
export declare type GetEstimatesByClientQuery = {
    __typename?: 'query_root';
} & {
    estimates: Array<{
        __typename?: 'estimates';
    } & EstimateFragment>;
};
export declare type InsertEstimateMutationVariables = Types.Exact<{
    estimate: Types.EstimatesInsertInput;
}>;
export declare type InsertEstimateMutation = {
    __typename?: 'mutation_root';
} & {
    insert_estimates_one?: Types.Maybe<{
        __typename?: 'estimates';
    } & EstimateFragment>;
};
export declare type UpdateEstimateMutationVariables = Types.Exact<{
    estimateId: Types.Scalars['uuid'];
    estimate: Types.EstimatesSetInput;
}>;
export declare type UpdateEstimateMutation = {
    __typename?: 'mutation_root';
} & {
    update_estimates_by_pk?: Types.Maybe<{
        __typename?: 'estimates';
    } & EstimateFragment>;
};
export declare type ArchiveEstimateMutationVariables = Types.Exact<{
    estimateId: Types.Scalars['uuid'];
}>;
export declare type ArchiveEstimateMutation = {
    __typename?: 'mutation_root';
} & {
    update_estimates_by_pk?: Types.Maybe<{
        __typename?: 'estimates';
    } & EstimateFragment>;
};
export declare type InsertEstimateM2mEntityMutationVariables = Types.Exact<{
    estimateM2mEntity: Types.EstimatesM2mEntitiesInsertInput;
}>;
export declare type InsertEstimateM2mEntityMutation = {
    __typename?: 'mutation_root';
} & {
    insert_estimates_m2m_entities_one?: Types.Maybe<{
        __typename?: 'estimates_m2m_entities';
    } & EstimateM2mEntityFragment>;
};
export declare type UpdateEstimateM2mEntityMutationVariables = Types.Exact<{
    estimateM2mEntityId: Types.Scalars['uuid'];
    estimateM2mEntity: Types.EstimatesM2mEntitiesSetInput;
}>;
export declare type UpdateEstimateM2mEntityMutation = {
    __typename?: 'mutation_root';
} & {
    update_estimates_m2m_entities_by_pk?: Types.Maybe<{
        __typename?: 'estimates_m2m_entities';
    } & EstimateM2mEntityFragment>;
};
export declare type GetEstimatesM2mEntitiesQueryVariables = Types.Exact<{
    estimateId: Types.Scalars['uuid'];
}>;
export declare type GetEstimatesM2mEntitiesQuery = {
    __typename: 'query_root';
} & {
    estimates_m2m_entities: Array<{
        __typename: 'estimates_m2m_entities';
    } & EstimateM2mEntityFragment>;
};
export declare type ArchiveEstimatesM2mEntitiesByPkMutationVariables = Types.Exact<{
    estimateM2mEntityId: Types.Scalars['uuid'];
}>;
export declare type ArchiveEstimatesM2mEntitiesByPkMutation = {
    __typename?: 'mutation_root';
} & {
    delete_estimates_m2m_entities_by_pk?: Types.Maybe<{
        __typename?: 'estimates_m2m_entities';
    } & EstimateM2mEntityFragment>;
};
export declare type GetGamesCommunicationsTypesQueryVariables = Types.Exact<{
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
} & Pick<Types.GainsVirtuals, 'id' | 'format' | 'value' | 'gain_id'>;
export declare type GetGainsVirtualsByGainQueryVariables = Types.Exact<{
    gainId: Types.Scalars['uuid'];
}>;
export declare type GetGainsVirtualsByGainQuery = {
    __typename?: 'query_root';
} & {
    gains_virtuals: Array<{
        __typename?: 'gains_virtuals';
    } & GainVirtualFragment>;
};
export declare type InsertGainsVirtualsMutationVariables = Types.Exact<{
    gainId: Types.Scalars['uuid'];
    gainsVirtuals: Array<Types.GainsVirtualsInsertInput> | Types.GainsVirtualsInsertInput;
}>;
export declare type InsertGainsVirtualsMutation = {
    __typename?: 'mutation_root';
} & {
    delete_gains_virtuals?: Types.Maybe<{
        __typename?: 'gains_virtuals_mutation_response';
    } & Pick<Types.GainsVirtualsMutationResponse, 'affected_rows'>>;
    insert_gains_virtuals?: Types.Maybe<{
        __typename?: 'gains_virtuals_mutation_response';
    } & {
        returning: Array<{
            __typename?: 'gains_virtuals';
        } & Pick<Types.GainsVirtuals, 'format' | 'gain_id' | 'id' | 'value'>>;
    }>;
};
export declare type GainFragment = {
    __typename?: 'gains';
} & Pick<Types.Gains, 'id' | 'is_active' | 'is_virtual' | 'name' | 'description' | 'stock' | 'client_id' | 'gtc' | 'instructions' | 'created_at' | 'template_id'> & {
    image?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    template?: Types.Maybe<{
        __typename?: 'templates';
    } & TemplateFragment>;
};
export declare type GetGainsByClientQueryVariables = Types.Exact<{
    clientId: Types.Scalars['uuid'];
}>;
export declare type GetGainsByClientQuery = {
    __typename?: 'query_root';
} & {
    gains: Array<{
        __typename?: 'gains';
    } & GainFragment>;
};
export declare type InsertGainMutationVariables = Types.Exact<{
    gain: Types.GainsInsertInput;
}>;
export declare type InsertGainMutation = {
    __typename?: 'mutation_root';
} & {
    insert_gains_one?: Types.Maybe<{
        __typename?: 'gains';
    } & GainFragment>;
};
export declare type UpdateGainMutationVariables = Types.Exact<{
    gainId: Types.Scalars['uuid'];
    gain: Types.GainsSetInput;
}>;
export declare type UpdateGainMutation = {
    __typename: 'mutation_root';
} & {
    update_gains_by_pk?: Types.Maybe<{
        __typename: 'gains';
    } & GainFragment>;
};
export declare type ArchiveGainMutationVariables = Types.Exact<{
    gainId: Types.Scalars['uuid'];
}>;
export declare type ArchiveGainMutation = {
    __typename: 'mutation_root';
} & {
    update_gains_by_pk?: Types.Maybe<{
        __typename: 'gains';
    } & GainFragment>;
};
export declare type GamesGainsFragment = {
    __typename?: 'games_gains';
} & Pick<Types.GamesGains, 'game_id' | 'gain_id' | 'stock' | 'stock_won' | 'is_active' | 'probability'> & {
    gain: {
        __typename?: 'gains';
    } & GainFragment;
};
export declare type InsertGameGainMutationVariables = Types.Exact<{
    gameGain: Types.GamesGainsInsertInput;
}>;
export declare type InsertGameGainMutation = {
    __typename?: 'mutation_root';
} & {
    insert_games_gains_one?: Types.Maybe<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
};
export declare type UpdateGameGainMutationVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    gainId: Types.Scalars['uuid'];
    gameGain: Types.GamesGainsSetInput;
}>;
export declare type UpdateGameGainMutation = {
    __typename?: 'mutation_root';
} & {
    update_games_gains_by_pk?: Types.Maybe<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
};
export declare type DeleteGameGainMutationVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    gainId: Types.Scalars['uuid'];
}>;
export declare type DeleteGameGainMutation = {
    __typename?: 'mutation_root';
} & {
    delete_games_gains_by_pk?: Types.Maybe<{
        __typename?: 'games_gains';
    } & GamesGainsFragment>;
};
export declare type GamesPlayedParticipationsByDayFragment = {
    __typename?: 'games_played_participations_by_day';
} & Pick<Types.GamesPlayedParticipationsByDay, 'date' | 'total_count' | 'game_id' | 'client_id' | 'name'>;
export declare type GamesPlayedParticipationsByCurrentDayHoursFragment = {
    __typename?: 'games_played_participations_by_current_day_hours';
} & Pick<Types.GamesPlayedParticipationsByCurrentDayHours, 'date' | 'total_count' | 'game_id' | 'client_id' | 'name'>;
export declare type GamesPlayedGainsByDayFragment = {
    __typename?: 'games_played_gains_by_day';
} & Pick<Types.GamesPlayedGainsByDay, 'date' | 'total_count' | 'game_id' | 'client_id' | 'name' | 'gain_id'>;
export declare type GamesPlayedGainsByCurrentDayHoursFragment = {
    __typename?: 'games_played_gains_by_current_day_hours';
} & Pick<Types.GamesPlayedGainsByCurrentDayHours, 'date' | 'total_count' | 'game_id' | 'client_id' | 'name' | 'gain_id'>;
export declare type GetGamesPlayedStatisticByClientQueryVariables = Types.Exact<{
    clientId: Types.Scalars['uuid'];
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
export declare type GetGameWinnersQueryVariables = Types.Exact<{
    game_id: Types.Scalars['uuid'];
}>;
export declare type GetGameWinnersQuery = {
    __typename?: 'query_root';
} & {
    games_played: Array<{
        __typename?: 'games_played';
    } & Pick<Types.GamesPlayed, 'id' | 'played_at'> & {
        gain?: Types.Maybe<{
            __typename?: 'gains';
        } & Pick<Types.Gains, 'id' | 'name'>>;
        user: {
            __typename?: 'users';
        } & Pick<Types.Users, 'id' | 'first_name' | 'name'>;
    }>;
};
export declare type GameTypeFragment = {
    __typename?: 'games_types';
} & Pick<Types.GamesTypes, 'id' | 'name' | 'description' | 'price' | 'color' | 'acronym' | 'radius_price_range' | 'participations_price_range' | 'trackers_price_range'>;
export declare type GetGamesTypesQueryVariables = Types.Exact<{
    [key: string]: never;
}>;
export declare type GetGamesTypesQuery = {
    __typename?: 'query_root';
} & {
    games_types: Array<{
        __typename?: 'games_types';
    } & GameTypeFragment>;
};
export declare type GetGameTypeByIdQueryVariables = Types.Exact<{
    gameTypeId: Types.Scalars['uuid'];
}>;
export declare type GetGameTypeByIdQuery = {
    __typename?: 'query_root';
} & {
    games_types_by_pk?: Types.Maybe<{
        __typename?: 'games_types';
    } & GameTypeFragment>;
};
export declare type GameFragment = {
    __typename?: 'games';
} & Pick<Types.Games, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'description' | 'gtc' | 'instructions' | 'address' | 'radius' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'valorization' | 'frequency' | 'max_participations' | 'created_at' | 'type_id' | 'location' | 'city' | 'keep_cumulated_probability'> & {
    card_image?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    card_image_background?: Types.Maybe<{
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
} & Pick<Types.Games, 'id' | 'name' | 'client_id' | 'is_private'> & {
    type: {
        __typename?: 'games_types';
    } & Pick<Types.GamesTypes, 'name'>;
};
export declare type GetGamesMinimalInfosQueryVariables = Types.Exact<{
    clientId?: Types.Maybe<Types.Scalars['uuid']>;
}>;
export declare type GetGamesMinimalInfosQuery = {
    __typename?: 'query_root';
} & {
    games: Array<{
        __typename?: 'games';
    } & GameMinimalInfosFragment>;
};
export declare type GetGamesByClientAndGameTypeQueryVariables = Types.Exact<{
    clientId: Types.Scalars['uuid'];
    gameTypeId: Types.Scalars['uuid'];
}>;
export declare type GetGamesByClientAndGameTypeQuery = {
    __typename?: 'query_root';
} & {
    games: Array<{
        __typename?: 'games';
    } & GameFragment>;
};
export declare type InsertGameMutationVariables = Types.Exact<{
    game: Types.GamesInsertInput;
}>;
export declare type InsertGameMutation = {
    __typename?: 'mutation_root';
} & {
    insert_games_one?: Types.Maybe<{
        __typename?: 'games';
    } & GameFragment>;
};
export declare type UpdateGameMutationVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    game: Types.GamesSetInput;
}>;
export declare type UpdateGameMutation = {
    __typename: 'mutation_root';
} & {
    update_games_by_pk?: Types.Maybe<{
        __typename: 'games';
    } & GameFragment>;
};
export declare type ArchiveGameMutationVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
}>;
export declare type ArchiveGameMutation = {
    __typename: 'mutation_root';
} & {
    update_games_by_pk?: Types.Maybe<{
        __typename: 'games';
    } & GameFragment>;
};
export declare type GetGoodieQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetGoodieQuery = {
    __typename?: 'query_root';
} & {
    goodies_by_pk?: Types.Maybe<{
        __typename?: 'goodies';
    } & GoodieFragment>;
};
export declare type InsertGoodieMutationVariables = Types.Exact<{
    goodie: Types.GoodiesInsertInput;
}>;
export declare type InsertGoodieMutation = {
    __typename?: 'mutation_root';
} & {
    insert_goodies_one?: Types.Maybe<{
        __typename?: 'goodies';
    } & GoodieFragment>;
};
export declare type UpdateGoodieMutationVariables = Types.Exact<{
    goodieId: Types.Scalars['uuid'];
    goodie: Types.GoodiesSetInput;
}>;
export declare type UpdateGoodieMutation = {
    __typename?: 'mutation_root';
} & {
    update_goodies_by_pk?: Types.Maybe<{
        __typename?: 'goodies';
    } & GoodieFragment>;
};
export declare type ArchiveGoodieMutationVariables = Types.Exact<{
    goodieId: Types.Scalars['uuid'];
}>;
export declare type ArchiveGoodieMutation = {
    __typename?: 'mutation_root';
} & {
    update_goodies_by_pk?: Types.Maybe<{
        __typename?: 'goodies';
    } & Pick<Types.Goodies, 'id' | 'is_archive'>>;
};
export declare type InsertGoodiesM2mAnimationsMutationVariables = Types.Exact<{
    goodie_id: Types.Scalars['uuid'];
    animation: Types.AnimationsObjRelInsertInput;
}>;
export declare type InsertGoodiesM2mAnimationsMutation = {
    __typename?: 'mutation_root';
} & {
    insert_goodies_m2m_animations_one?: Types.Maybe<{
        __typename?: 'goodies_m2m_animations';
    } & GoodieM2MAnimationFragment>;
};
export declare type DeleteGoodiesM2mAnimationsMutationVariables = Types.Exact<{
    goodie_id: Types.Scalars['uuid'];
    animation_id: Types.Scalars['uuid'];
}>;
export declare type DeleteGoodiesM2mAnimationsMutation = {
    __typename?: 'mutation_root';
} & {
    delete_goodies_m2m_animations_by_pk?: Types.Maybe<{
        __typename?: 'goodies_m2m_animations';
    } & Pick<Types.GoodiesM2mAnimations, 'goodie_id' | 'animation_id'>>;
};
export declare type InfoFragment = {
    __typename?: 'infos';
} & Pick<Types.Infos, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'address' | 'created_at' | 'type_id' | 'location' | 'city' | 'html' | 'design'> & {
    type: {
        __typename?: 'communications_types';
    } & CommunicationTypeFragment;
};
export declare type InfoSpecificsFragment = {
    __typename?: 'infos';
} & Pick<Types.Infos, 'html' | 'design' | 'template_id'> & {
    template?: Types.Maybe<{
        __typename?: 'templates';
    } & Pick<Types.Templates, 'id' | 'name' | 'html'>>;
};
export declare type InsertInfoMutationVariables = Types.Exact<{
    info: Types.InfosInsertInput;
}>;
export declare type InsertInfoMutation = {
    __typename?: 'mutation_root';
} & {
    insert_infos_one?: Types.Maybe<{
        __typename?: 'infos';
    } & Pick<Types.Infos, 'id'> & InfoFragment>;
};
export declare type GetInfoSpecificsQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetInfoSpecificsQuery = {
    __typename?: 'query_root';
} & {
    infos_by_pk?: Types.Maybe<{
        __typename?: 'infos';
    } & Pick<Types.Infos, 'id'> & InfoSpecificsFragment>;
};
export declare type UpdateInfoMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    updates: Types.InfosSetInput;
}>;
export declare type UpdateInfoMutation = {
    __typename?: 'mutation_root';
} & {
    update_infos_by_pk?: Types.Maybe<{
        __typename?: 'infos';
    } & Pick<Types.Infos, 'id'> & InfoFragment>;
};
export declare type PhotoFragment = {
    __typename?: 'photos';
} & Pick<Types.Photos, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'address' | 'created_at' | 'type_id' | 'location'> & {
    type?: Types.Maybe<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
    foreground?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type PhotoSpecificsFragment = {
    __typename?: 'photos';
} & Pick<Types.Photos, 'id' | 'foreground_id'> & {
    foreground?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type InsertPhotoMutationVariables = Types.Exact<{
    photo: Types.PhotosInsertInput;
}>;
export declare type InsertPhotoMutation = {
    __typename?: 'mutation_root';
} & {
    insert_photos_one?: Types.Maybe<{
        __typename?: 'photos';
    } & PhotoFragment>;
};
export declare type GetPhotoSpecificsQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetPhotoSpecificsQuery = {
    __typename?: 'query_root';
} & {
    photos_by_pk?: Types.Maybe<{
        __typename?: 'photos';
    } & PhotoSpecificsFragment>;
};
export declare type UpdatePhotoMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    updates: Types.PhotosSetInput;
}>;
export declare type UpdatePhotoMutation = {
    __typename?: 'mutation_root';
} & {
    update_photos_by_pk?: Types.Maybe<{
        __typename?: 'photos';
    } & PhotoFragment>;
};
export declare type PrivateDeckM2mEntitiesFragment = {
    __typename: 'privates_decks_m2m_entities';
} & Pick<Types.PrivatesDecksM2mEntities, 'private_deck' | 'entity_id'> & {
    game?: Types.Maybe<{
        __typename: 'games';
    } & GameMinimalInfosFragment>;
    communication?: Types.Maybe<{
        __typename: 'communications';
    } & CommunnicationMinimalInfosFragment>;
};
export declare type PrivateDeckFragment = {
    __typename?: 'privates_decks';
} & Pick<Types.PrivatesDecks, 'id' | 'name' | 'description' | 'code' | 'date_start' | 'date_end' | 'is_active' | 'is_archive' | 'client_id' | 'created_at'> & {
    privates_decks_m2m_entities: Array<{
        __typename?: 'privates_decks_m2m_entities';
    } & PrivateDeckM2mEntitiesFragment>;
};
export declare type GetPrivatesDecksByClientQueryVariables = Types.Exact<{
    clientId: Types.Scalars['uuid'];
}>;
export declare type GetPrivatesDecksByClientQuery = {
    __typename?: 'query_root';
} & {
    privates_decks: Array<{
        __typename?: 'privates_decks';
    } & PrivateDeckFragment>;
};
export declare type InsertPrivateDeckMutationVariables = Types.Exact<{
    privateDeck: Types.PrivatesDecksInsertInput;
}>;
export declare type InsertPrivateDeckMutation = {
    __typename?: 'mutation_root';
} & {
    insert_privates_decks_one?: Types.Maybe<{
        __typename?: 'privates_decks';
    } & PrivateDeckFragment>;
};
export declare type UpdatePrivateDeckMutationVariables = Types.Exact<{
    privateDeckId: Types.Scalars['uuid'];
    privateDeck: Types.PrivatesDecksSetInput;
}>;
export declare type UpdatePrivateDeckMutation = {
    __typename: 'mutation_root';
} & {
    update_privates_decks_by_pk?: Types.Maybe<{
        __typename: 'privates_decks';
    } & PrivateDeckFragment>;
};
export declare type ArchivePrivateDeckMutationVariables = Types.Exact<{
    privateDeckId: Types.Scalars['uuid'];
}>;
export declare type ArchivePrivateDeckMutation = {
    __typename: 'mutation_root';
} & {
    update_privates_decks_by_pk?: Types.Maybe<{
        __typename: 'privates_decks';
    } & PrivateDeckFragment>;
};
export declare type GetGamesCommunicationsMinimalInfosQueryVariables = Types.Exact<{
    clientId?: Types.Maybe<Types.Scalars['uuid']>;
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
export declare type InsertPrivateDeckM2mEntityMutationVariables = Types.Exact<{
    privateDeckId: Types.Scalars['uuid'];
    entityId: Types.Scalars['uuid'];
}>;
export declare type InsertPrivateDeckM2mEntityMutation = {
    __typename?: 'mutation_root';
} & {
    insert_privates_decks_m2m_entities_one?: Types.Maybe<{
        __typename?: 'privates_decks_m2m_entities';
    } & PrivateDeckM2mEntitiesFragment>;
};
export declare type GetPrivateDeckM2mEntitiesQueryVariables = Types.Exact<{
    privateDeckId: Types.Scalars['uuid'];
}>;
export declare type GetPrivateDeckM2mEntitiesQuery = {
    __typename?: 'query_root';
} & {
    privates_decks_m2m_entities: Array<{
        __typename?: 'privates_decks_m2m_entities';
    } & PrivateDeckM2mEntitiesFragment>;
};
export declare type DeletePrivateDeckM2mEntitiesByPkMutationVariables = Types.Exact<{
    privateDeckId: Types.Scalars['uuid'];
    entityId: Types.Scalars['uuid'];
}>;
export declare type DeletePrivateDeckM2mEntitiesByPkMutation = {
    __typename?: 'mutation_root';
} & {
    delete_privates_decks_m2m_entities_by_pk?: Types.Maybe<{
        __typename?: 'privates_decks_m2m_entities';
    } & PrivateDeckM2mEntitiesFragment>;
};
export declare type QuizzQuestionsFragment = {
    __typename?: 'quizz_questions';
} & Pick<Types.QuizzQuestions, 'id' | 'quizz_id' | 'question' | 'asset_id' | 'time' | 'total_points'> & {
    asset?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    quizz_questions_answers: Array<{
        __typename?: 'quizz_questions_answers';
    } & QuizzQuestionAnswersFragment>;
};
export declare type QuizzQuestionAnswersFragment = {
    __typename?: 'quizz_questions_answers';
} & Pick<Types.QuizzQuestionsAnswers, 'id' | 'answer' | 'is_correct' | 'points'>;
export declare type QuizzFragment = {
    __typename?: 'quizz';
} & Pick<Types.Quizz, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'description' | 'gtc' | 'instructions' | 'address' | 'radius' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'frequency' | 'max_participations' | 'created_at' | 'type_id' | 'location' | 'city' | 'keep_cumulated_probability' | 'winning_percentage' | 'ordered_questions'> & {
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
export declare type GetQuizzSpecificsQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetQuizzSpecificsQuery = {
    __typename?: 'query_root';
} & {
    quizz_by_pk?: Types.Maybe<{
        __typename?: 'quizz';
    } & Pick<Types.Quizz, 'id' | 'winning_percentage' | 'ordered_questions'> & {
        quizz_questions: Array<{
            __typename?: 'quizz_questions';
        } & QuizzQuestionsFragment>;
    }>;
};
export declare type InsertQuizzMutationVariables = Types.Exact<{
    quizz: Types.QuizzInsertInput;
}>;
export declare type InsertQuizzMutation = {
    __typename?: 'mutation_root';
} & {
    insert_quizz_one?: Types.Maybe<{
        __typename?: 'quizz';
    } & QuizzFragment>;
};
export declare type UpdateQuizzMutationVariables = Types.Exact<{
    quizzId: Types.Scalars['uuid'];
    quizz: Types.QuizzSetInput;
}>;
export declare type UpdateQuizzMutation = {
    __typename: 'mutation_root';
} & {
    update_quizz_by_pk?: Types.Maybe<{
        __typename: 'quizz';
    } & QuizzFragment>;
};
export declare type InsertQuizzQuestionMutationVariables = Types.Exact<{
    object: Types.QuizzQuestionsInsertInput;
}>;
export declare type InsertQuizzQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    insert_quizz_questions_one?: Types.Maybe<{
        __typename?: 'quizz_questions';
    } & {
        quizz_questions_answers: Array<{
            __typename?: 'quizz_questions_answers';
        } & QuizzQuestionAnswersFragment>;
    } & QuizzQuestionsFragment>;
};
export declare type UpdateQuizzQuestionMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    updates: Types.QuizzQuestionsSetInput;
    quizzQuestionsAnswers: Array<Types.QuizzQuestionsAnswersInsertInput> | Types.QuizzQuestionsAnswersInsertInput;
}>;
export declare type UpdateQuizzQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_quizz_questions_answers?: Types.Maybe<{
        __typename?: 'quizz_questions_answers_mutation_response';
    } & Pick<Types.QuizzQuestionsAnswersMutationResponse, 'affected_rows'>>;
    insert_quizz_questions_answers?: Types.Maybe<{
        __typename?: 'quizz_questions_answers_mutation_response';
    } & Pick<Types.QuizzQuestionsAnswersMutationResponse, 'affected_rows'>>;
    update_quizz_questions_by_pk?: Types.Maybe<{
        __typename?: 'quizz_questions';
    } & {
        quizz_questions_answers: Array<{
            __typename?: 'quizz_questions_answers';
        } & QuizzQuestionAnswersFragment>;
    } & QuizzQuestionsFragment>;
};
export declare type DeleteQuizzQuestionMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type DeleteQuizzQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_quizz_questions_by_pk?: Types.Maybe<{
        __typename?: 'quizz_questions';
    } & QuizzQuestionsFragment>;
};
export declare type RandomDrawingFragment = {
    __typename: 'random_drawings';
} & Pick<Types.RandomDrawings, 'id' | 'created_at' | 'game_id'> & {
    gain: {
        __typename: 'gains';
    } & Pick<Types.Gains, 'id' | 'name' | 'stock'>;
    winner: {
        __typename: 'users';
    } & Pick<Types.Users, 'id' | 'name' | 'first_name'>;
};
export declare type VerifyRandomDrawingInfosQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    gainsIds: Array<Types.Scalars['uuid']> | Types.Scalars['uuid'];
}>;
export declare type VerifyRandomDrawingInfosQuery = {
    __typename?: 'query_root';
} & {
    game?: Types.Maybe<{
        __typename?: 'games';
    } & Pick<Types.Games, 'client_id'>>;
    gains: Array<{
        __typename?: 'gains';
    } & Pick<Types.Gains, 'id' | 'client_id' | 'name' | 'stock'>>;
};
export declare type GetArPlayersQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    dateStart?: Types.Maybe<Types.Scalars['timestamptz']>;
    dateEnd?: Types.Maybe<Types.Scalars['timestamptz']>;
}>;
export declare type GetArPlayersQuery = {
    __typename?: 'query_root';
} & {
    players: Array<{
        __typename?: 'ar_played';
    } & Pick<Types.ArPlayed, 'user_id'>>;
};
export declare type GetQuizzPlayersQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    dateStart?: Types.Maybe<Types.Scalars['timestamptz']>;
    dateEnd?: Types.Maybe<Types.Scalars['timestamptz']>;
    minScore?: Types.Maybe<Types.Scalars['numeric']>;
}>;
export declare type GetQuizzPlayersQuery = {
    __typename?: 'query_root';
} & {
    players: Array<{
        __typename?: 'quizz_played';
    } & Pick<Types.QuizzPlayed, 'user_id'>>;
};
export declare type GetVotePlayersQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    dateStart?: Types.Maybe<Types.Scalars['timestamptz']>;
    dateEnd?: Types.Maybe<Types.Scalars['timestamptz']>;
}>;
export declare type GetVotePlayersQuery = {
    __typename?: 'query_root';
} & {
    players: Array<{
        __typename?: 'votes_played';
    } & Pick<Types.VotesPlayed, 'user_id'>>;
};
export declare type GetGameRandomDrawingsQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
}>;
export declare type GetGameRandomDrawingsQuery = {
    __typename?: 'query_root';
} & {
    random_drawings: Array<{
        __typename?: 'random_drawings';
    } & RandomDrawingFragment>;
};
export declare type InsertRandomDrawingsMutationVariables = Types.Exact<{
    randomDrawingsInput: Array<Types.RandomDrawingsInsertInput> | Types.RandomDrawingsInsertInput;
}>;
export declare type InsertRandomDrawingsMutation = {
    __typename?: 'mutation_root';
} & {
    randomDrawings?: Types.Maybe<{
        __typename?: 'random_drawings_mutation_response';
    } & {
        returning: Array<{
            __typename?: 'random_drawings';
        } & RandomDrawingFragment>;
    }>;
};
export declare type SurveyQuestionsFragment = {
    __typename?: 'surveys_questions';
} & Pick<Types.SurveysQuestions, 'id' | 'survey_id' | 'question' | 'asset_id'> & {
    asset?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    surveys_questions_answers: Array<{
        __typename?: 'surveys_questions_answers';
    } & SurveyQuestionAnswersFragment>;
};
export declare type SurveyQuestionAnswersFragment = {
    __typename?: 'surveys_questions_answers';
} & Pick<Types.SurveysQuestionsAnswers, 'id' | 'answer'>;
export declare type SurveyFragment = {
    __typename?: 'surveys';
} & Pick<Types.Surveys, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'address' | 'created_at' | 'type_id' | 'location' | 'city'> & {
    type?: Types.Maybe<{
        __typename?: 'communications_types';
    } & CommunicationTypeFragment>;
    surveys_questions: Array<{
        __typename?: 'surveys_questions';
    } & SurveyQuestionsFragment>;
};
export declare type InsertSurveyMutationVariables = Types.Exact<{
    survey: Types.SurveysInsertInput;
}>;
export declare type InsertSurveyMutation = {
    __typename?: 'mutation_root';
} & {
    insert_surveys_one?: Types.Maybe<{
        __typename?: 'surveys';
    } & SurveyFragment>;
};
export declare type GetSurveySpecificsQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetSurveySpecificsQuery = {
    __typename?: 'query_root';
} & {
    surveys_by_pk?: Types.Maybe<{
        __typename?: 'surveys';
    } & Pick<Types.Surveys, 'id'> & {
        surveys_questions: Array<{
            __typename?: 'surveys_questions';
        } & SurveyQuestionsFragment>;
    }>;
};
export declare type UpdateSurveyMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    updates: Types.SurveysSetInput;
}>;
export declare type UpdateSurveyMutation = {
    __typename: 'mutation_root';
} & {
    update_surveys_by_pk?: Types.Maybe<{
        __typename: 'surveys';
    } & SurveyFragment>;
};
export declare type InsertSurveyQuestionMutationVariables = Types.Exact<{
    object: Types.SurveysQuestionsInsertInput;
}>;
export declare type InsertSurveyQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    insert_surveys_questions_one?: Types.Maybe<{
        __typename?: 'surveys_questions';
    } & {
        surveys_questions_answers: Array<{
            __typename?: 'surveys_questions_answers';
        } & SurveyQuestionAnswersFragment>;
    } & SurveyQuestionsFragment>;
};
export declare type UpdateSurveyQuestionMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    updates: Types.SurveysQuestionsSetInput;
    surveysQuestionsAnswers: Array<Types.SurveysQuestionsAnswersInsertInput> | Types.SurveysQuestionsAnswersInsertInput;
}>;
export declare type UpdateSurveyQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_surveys_questions_answers?: Types.Maybe<{
        __typename?: 'surveys_questions_answers_mutation_response';
    } & Pick<Types.SurveysQuestionsAnswersMutationResponse, 'affected_rows'>>;
    insert_surveys_questions_answers?: Types.Maybe<{
        __typename?: 'surveys_questions_answers_mutation_response';
    } & Pick<Types.SurveysQuestionsAnswersMutationResponse, 'affected_rows'>>;
    update_surveys_questions_by_pk?: Types.Maybe<{
        __typename?: 'surveys_questions';
    } & {
        surveys_questions_answers: Array<{
            __typename?: 'surveys_questions_answers';
        } & SurveyQuestionAnswersFragment>;
    } & SurveyQuestionsFragment>;
};
export declare type DeleteSurveyQuestionMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type DeleteSurveyQuestionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_surveys_questions_by_pk?: Types.Maybe<{
        __typename?: 'surveys_questions';
    } & Pick<Types.SurveysQuestions, 'id'>>;
};
export declare type TemplateFragment = {
    __typename?: 'templates';
} & Pick<Types.Templates, 'id' | 'name' | 'design' | 'html' | 'created_at' | 'updated_at' | 'client_id' | 'is_active'>;
export declare type GetTemplatesByClientQueryVariables = Types.Exact<{
    clientId: Types.Scalars['uuid'];
}>;
export declare type GetTemplatesByClientQuery = {
    __typename?: 'query_root';
} & {
    templates: Array<{
        __typename?: 'templates';
    } & TemplateFragment>;
};
export declare type InsertTemplateMutationVariables = Types.Exact<{
    template: Types.TemplatesInsertInput;
}>;
export declare type InsertTemplateMutation = {
    __typename?: 'mutation_root';
} & {
    insert_templates_one?: Types.Maybe<{
        __typename?: 'templates';
    } & TemplateFragment>;
};
export declare type UpdateTemplateMutationVariables = Types.Exact<{
    templateId: Types.Scalars['uuid'];
    updates: Types.TemplatesSetInput;
}>;
export declare type UpdateTemplateMutation = {
    __typename: 'mutation_root';
} & {
    update_templates_by_pk?: Types.Maybe<{
        __typename: 'templates';
    } & TemplateFragment>;
};
export declare type ArchiveTemplateMutationVariables = Types.Exact<{
    templateId: Types.Scalars['uuid'];
}>;
export declare type ArchiveTemplateMutation = {
    __typename: 'mutation_root';
} & {
    update_templates_by_pk?: Types.Maybe<{
        __typename: 'templates';
    } & TemplateFragment>;
};
export declare type TrackerFragment = {
    __typename?: 'ar_trackers';
} & Pick<Types.ArTrackers, 'id' | 'name' | 'width' | 'height' | 'qrcode_inside'> & {
    image: {
        __typename?: 'assets';
    } & AssetFragment;
};
export declare type GetTrackersQueryVariables = Types.Exact<{
    clientId?: Types.Maybe<Types.Scalars['uuid']>;
}>;
export declare type GetTrackersQuery = {
    __typename?: 'query_root';
} & {
    ar_trackers: Array<{
        __typename?: 'ar_trackers';
    } & TrackerFragment>;
};
export declare type InsertTrackerMutationVariables = Types.Exact<{
    object: Types.ArTrackersInsertInput;
}>;
export declare type InsertTrackerMutation = {
    __typename?: 'mutation_root';
} & {
    insert_ar_trackers_one?: Types.Maybe<{
        __typename?: 'ar_trackers';
    } & TrackerFragment>;
};
export declare type UpdateTrackerMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    updates: Types.ArTrackersSetInput;
}>;
export declare type UpdateTrackerMutation = {
    __typename?: 'mutation_root';
} & {
    update_ar_trackers_by_pk?: Types.Maybe<{
        __typename?: 'ar_trackers';
    } & TrackerFragment>;
};
export declare type GetVoteResultsQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
}>;
export declare type GetVoteResultsQuery = {
    __typename?: 'query_root';
} & {
    votes_selections: Array<{
        __typename?: 'votes_selections';
    } & Pick<Types.VotesSelections, 'id' | 'selection'> & {
        votes_selections_choices: Array<{
            __typename?: 'votes_selections_choices';
        } & Pick<Types.VotesSelectionsChoices, 'id' | 'label'>>;
    }>;
    votes_played: Array<{
        __typename?: 'votes_played';
    } & Pick<Types.VotesPlayed, 'id' | 'game_id' | 'played_at' | 'results' | 'user_id'>>;
};
export declare type VoteSelectionFragment = {
    __typename?: 'votes_selections';
} & Pick<Types.VotesSelections, 'id' | 'vote_id' | 'selection' | 'required_choices'> & {
    votes_selections_choices: Array<{
        __typename?: 'votes_selections_choices';
    } & VoteSelectionChoiceFragment>;
};
export declare type VoteSelectionChoiceFragment = {
    __typename?: 'votes_selections_choices';
} & Pick<Types.VotesSelectionsChoices, 'id' | 'label' | 'vote_selection_id'> & {
    asset: {
        __typename?: 'assets';
    } & AssetFragment;
};
export declare type VoteFragment = {
    __typename?: 'votes';
} & Pick<Types.Votes, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'is_private' | 'client_id' | 'description' | 'gtc' | 'instructions' | 'address' | 'radius' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'frequency' | 'max_participations' | 'created_at' | 'type_id' | 'location' | 'city' | 'keep_cumulated_probability'> & {
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
export declare type InsertVoteMutationVariables = Types.Exact<{
    vote: Types.VotesInsertInput;
}>;
export declare type InsertVoteMutation = {
    __typename?: 'mutation_root';
} & {
    insert_votes_one?: Types.Maybe<{
        __typename?: 'votes';
    } & VoteFragment>;
};
export declare type GetVoteSpecificsQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetVoteSpecificsQuery = {
    __typename?: 'query_root';
} & {
    votes_by_pk?: Types.Maybe<{
        __typename?: 'votes';
    } & Pick<Types.Votes, 'id'> & {
        votes_selections: Array<{
            __typename?: 'votes_selections';
        } & VoteSelectionFragment>;
    }>;
};
export declare type InsertVoteSelectionMutationVariables = Types.Exact<{
    object: Types.VotesSelectionsInsertInput;
}>;
export declare type InsertVoteSelectionMutation = {
    __typename?: 'mutation_root';
} & {
    insert_votes_selections_one?: Types.Maybe<{
        __typename?: 'votes_selections';
    } & {
        votes_selections_choices: Array<{
            __typename?: 'votes_selections_choices';
        } & VoteSelectionChoiceFragment>;
    } & VoteSelectionFragment>;
};
export declare type UpdateVoteSelectionMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
    updates: Types.VotesSelectionsSetInput;
    voteSelectionsChoices: Array<Types.VotesSelectionsChoicesInsertInput> | Types.VotesSelectionsChoicesInsertInput;
}>;
export declare type UpdateVoteSelectionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_votes_selections_choices?: Types.Maybe<{
        __typename?: 'votes_selections_choices_mutation_response';
    } & Pick<Types.VotesSelectionsChoicesMutationResponse, 'affected_rows'>>;
    insert_votes_selections_choices?: Types.Maybe<{
        __typename?: 'votes_selections_choices_mutation_response';
    } & Pick<Types.VotesSelectionsChoicesMutationResponse, 'affected_rows'>>;
    update_votes_selections_by_pk?: Types.Maybe<{
        __typename?: 'votes_selections';
    } & {
        votes_selections_choices: Array<{
            __typename?: 'votes_selections_choices';
        } & VoteSelectionChoiceFragment>;
    } & VoteSelectionFragment>;
};
export declare type DeleteVoteSelectionMutationVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type DeleteVoteSelectionMutation = {
    __typename?: 'mutation_root';
} & {
    delete_votes_selections_by_pk?: Types.Maybe<{
        __typename?: 'votes_selections';
    } & VoteSelectionFragment>;
};
export declare type GetClientsByEmailQueryVariables = Types.Exact<{
    email: Types.Scalars['String'];
}>;
export declare type GetClientsByEmailQuery = {
    __typename?: 'query_root';
} & {
    clients: Array<{
        __typename?: 'clients';
    } & Pick<Types.Clients, 'password'> & ClientDisplayFragment>;
};
export declare type InsertClientMutationVariables = Types.Exact<{
    client: Types.ClientsInsertInput;
}>;
export declare type InsertClientMutation = {
    __typename?: 'mutation_root';
} & {
    insert_clients_one?: Types.Maybe<{
        __typename?: 'clients';
    } & ClientDisplayFragment>;
};
export declare type InsertClientPasswordForgottenTokenMutationVariables = Types.Exact<{
    client_id: Types.Scalars['uuid'];
}>;
export declare type InsertClientPasswordForgottenTokenMutation = {
    __typename?: 'mutation_root';
} & {
    insert_clients_password_forgotten_tokens_one?: Types.Maybe<{
        __typename?: 'clients_password_forgotten_tokens';
    } & Pick<Types.ClientsPasswordForgottenTokens, 'id'>>;
};
export declare type ResetPasswordMutationVariables = Types.Exact<{
    resetTokenId: Types.Scalars['uuid'];
    limitDate: Types.Scalars['timestamp'];
    newPassword: Types.Scalars['String'];
}>;
export declare type ResetPasswordMutation = {
    __typename?: 'mutation_root';
} & {
    update_clients?: Types.Maybe<{
        __typename?: 'clients_mutation_response';
    } & Pick<Types.ClientsMutationResponse, 'affected_rows'>>;
    delete_clients_password_forgotten_tokens_by_pk?: Types.Maybe<{
        __typename?: 'clients_password_forgotten_tokens';
    } & Pick<Types.ClientsPasswordForgottenTokens, 'id'>>;
};
export declare type GetUsersByEmailQueryVariables = Types.Exact<{
    email: Types.Scalars['String'];
}>;
export declare type GetUsersByEmailQuery = {
    __typename?: 'query_root';
} & {
    users: Array<{
        __typename?: 'users';
    } & Pick<Types.Users, 'password' | 'apple_id'> & UserDisplayFragment>;
};
export declare type GetUsersByAppleIdQueryVariables = Types.Exact<{
    appleId: Types.Scalars['String'];
}>;
export declare type GetUsersByAppleIdQuery = {
    __typename?: 'query_root';
} & {
    users: Array<{
        __typename?: 'users';
    } & UserDisplayFragment>;
};
export declare type InsertUserMutationVariables = Types.Exact<{
    user: Types.UsersInsertInput;
}>;
export declare type InsertUserMutation = {
    __typename?: 'mutation_root';
} & {
    insert_users_one?: Types.Maybe<{
        __typename?: 'users';
    } & UserDisplayFragment>;
};
export declare type UpsertUserMutationVariables = Types.Exact<{
    user: Types.UsersInsertInput;
}>;
export declare type UpsertUserMutation = {
    __typename?: 'mutation_root';
} & {
    insert_users_one?: Types.Maybe<{
        __typename?: 'users';
    } & UserDisplayFragment>;
};
export declare type AddressFragment = {
    __typename?: 'addresses';
} & Pick<Types.Addresses, 'address' | 'city' | 'zipcode' | 'country'>;
export declare type UpsertAddressMutationVariables = Types.Exact<{
    address: Types.AddressesInsertInput;
}>;
export declare type UpsertAddressMutation = {
    __typename?: 'mutation_root';
} & {
    insert_addresses_one?: Types.Maybe<{
        __typename?: 'addresses';
    } & Pick<Types.Addresses, 'id'> & AddressFragment>;
};
export declare type GainWonFragment = {
    __typename: 'gains';
} & Pick<Types.Gains, 'id' | 'name' | 'description' | 'instructions' | 'is_virtual' | 'gtc' | 'template_id'> & {
    image?: Types.Maybe<{
        __typename: 'assets';
    } & AssetFragment>;
    gains_virtuals: Array<{
        __typename: 'gains_virtuals';
    } & Pick<Types.GainsVirtuals, 'format' | 'id' | 'value'>>;
    client: {
        __typename: 'clients';
    } & {
        picture?: Types.Maybe<{
            __typename: 'assets';
        } & AssetFragment>;
    };
};
export declare type ValidateGainMutationVariables = Types.Exact<{
    id: Types.Scalars['bigint'];
    fromRandomDrawing: Types.Scalars['Boolean'];
}>;
export declare type ValidateGainMutation = {
    __typename?: 'mutation_root';
} & {
    update_games_played_by_pk?: Types.Maybe<{
        __typename?: 'games_played';
    } & Pick<Types.GamesPlayed, 'id' | 'gain_validated'>>;
    update_random_drawings_by_pk?: Types.Maybe<{
        __typename?: 'random_drawings';
    } & Pick<Types.RandomDrawings, 'id' | 'gain_validated'>>;
};
export declare type GetGainsWonQueryVariables = Types.Exact<{
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
} & Pick<Types.GamesGainsAvailable, 'gain_id' | 'probability' | 'stock' | 'stock_won'>;
export declare type GamePlayedFragment = {
    __typename?: 'games_played';
} & Pick<Types.GamesPlayed, 'id' | 'game_id' | 'user_id' | 'played_at'> & {
    gain?: Types.Maybe<{
        __typename?: 'gains';
    } & GainWonFragment>;
};
export declare type GameWonFragment = {
    __typename?: 'games_played';
} & Pick<Types.GamesPlayed, 'id' | 'played_at' | 'gain_validated'> & {
    gain?: Types.Maybe<{
        __typename?: 'gains';
    } & GainWonFragment>;
    game?: Types.Maybe<{
        __typename?: 'games';
    } & Pick<Types.Games, 'name' | 'valorization'>>;
};
export declare type GetGameFrequencyQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
}>;
export declare type GetGameFrequencyQuery = {
    __typename?: 'query_root';
} & {
    games_by_pk?: Types.Maybe<{
        __typename?: 'games';
    } & Pick<Types.Games, 'is_active' | 'frequency' | 'max_participations' | 'tz'> & {
        type: {
            __typename?: 'games_types';
        } & Pick<Types.GamesTypes, 'name'>;
    }>;
};
export declare type GetGamePlayedCountQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    userId: Types.Scalars['uuid'];
    dateFrom?: Types.Maybe<Types.Scalars['timestamptz']>;
}>;
export declare type GetGamePlayedCountQuery = {
    __typename?: 'query_root';
} & {
    games_played_aggregate: {
        __typename?: 'games_played_aggregate';
    } & {
        aggregate?: Types.Maybe<{
            __typename?: 'games_played_aggregate_fields';
        } & Pick<Types.GamesPlayedAggregateFields, 'count'>>;
    };
};
export declare type InfosToPlayArFragment = {
    __typename?: 'ar';
} & Pick<Types.Ar, 'id' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'keep_cumulated_probability'> & {
    games_gains_available: Array<{
        __typename?: 'games_gains_available';
    } & GamesGainsAvailableFragment>;
};
export declare type GetInfosToPlayArQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
}>;
export declare type GetInfosToPlayArQuery = {
    __typename?: 'query_root';
} & {
    ar?: Types.Maybe<{
        __typename?: 'ar';
    } & InfosToPlayArFragment>;
};
export declare type ArPlayedFragment = {
    __typename?: 'ar_played';
} & Pick<Types.ArPlayed, 'id' | 'game_id' | 'user_id' | 'played_at'> & {
    gain?: Types.Maybe<{
        __typename?: 'gains';
    } & GainWonFragment>;
};
export declare type PlayArMutationVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    gainId?: Types.Maybe<Types.Scalars['uuid']>;
    userId: Types.Scalars['uuid'];
}>;
export declare type PlayArMutation = {
    __typename?: 'mutation_root';
} & {
    arPlayed?: Types.Maybe<{
        __typename?: 'ar_played';
    } & ArPlayedFragment>;
};
export declare type InfosToPlayQuizzFragment = {
    __typename?: 'quizz';
} & Pick<Types.Quizz, 'id' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'keep_cumulated_probability' | 'winning_percentage'> & {
    quizz_questions: Array<{
        __typename?: 'quizz_questions';
    } & QuizzQuestionsFragment>;
    games_gains_available: Array<{
        __typename?: 'games_gains_available';
    } & GamesGainsAvailableFragment>;
};
export declare type GetInfosToPlayQuizzQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
}>;
export declare type GetInfosToPlayQuizzQuery = {
    __typename?: 'query_root';
} & {
    quizz?: Types.Maybe<{
        __typename?: 'quizz';
    } & InfosToPlayQuizzFragment>;
};
export declare type QuizzPlayedFragment = {
    __typename?: 'quizz_played';
} & Pick<Types.QuizzPlayed, 'id' | 'game_id' | 'user_id' | 'played_at'> & {
    gain?: Types.Maybe<{
        __typename?: 'gains';
    } & GainWonFragment>;
};
export declare type PlayQuizzMutationVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    gainId?: Types.Maybe<Types.Scalars['uuid']>;
    userId: Types.Scalars['uuid'];
    score: Types.Scalars['numeric'];
    time: Types.Scalars['numeric'];
}>;
export declare type PlayQuizzMutation = {
    __typename?: 'mutation_root';
} & {
    quizzPlayed?: Types.Maybe<{
        __typename?: 'quizz_played';
    } & QuizzPlayedFragment>;
};
export declare type QuizzClientFragment = {
    __typename?: 'quizz';
} & {
    client: {
        __typename?: 'clients';
    } & Pick<Types.Clients, 'id' | 'name'> & {
        picture?: Types.Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
} & QuizzFragment;
export declare type GetQuizzByIdQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetQuizzByIdQuery = {
    __typename?: 'query_root';
} & {
    quizz_by_pk?: Types.Maybe<{
        __typename?: 'quizz';
    } & QuizzClientFragment>;
};
export declare type VoteClientFragment = {
    __typename?: 'votes';
} & {
    client: {
        __typename?: 'clients';
    } & Pick<Types.Clients, 'id' | 'name'> & {
        picture?: Types.Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
} & VoteFragment;
export declare type InfosToPlayVoteFragment = {
    __typename?: 'votes';
} & Pick<Types.Votes, 'id' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'keep_cumulated_probability'> & {
    games_gains_available: Array<{
        __typename?: 'games_gains_available';
    } & GamesGainsAvailableFragment>;
};
export declare type GetInfosToPlayVoteQueryVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
}>;
export declare type GetInfosToPlayVoteQuery = {
    __typename?: 'query_root';
} & {
    vote?: Types.Maybe<{
        __typename?: 'votes';
    } & InfosToPlayVoteFragment>;
};
export declare type VotePlayedFragment = {
    __typename?: 'votes_played';
} & Pick<Types.VotesPlayed, 'id' | 'game_id' | 'user_id' | 'played_at'> & {
    gain?: Types.Maybe<{
        __typename?: 'gains';
    } & GainWonFragment>;
};
export declare type PlayVoteMutationVariables = Types.Exact<{
    gameId: Types.Scalars['uuid'];
    gainId?: Types.Maybe<Types.Scalars['uuid']>;
    userId: Types.Scalars['uuid'];
    results: Types.Scalars['jsonb'];
}>;
export declare type PlayVoteMutation = {
    __typename?: 'mutation_root';
} & {
    votePlayed?: Types.Maybe<{
        __typename?: 'votes_played';
    } & VotePlayedFragment>;
};
export declare type GetVoteByIdQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetVoteByIdQuery = {
    __typename?: 'query_root';
} & {
    votes_by_pk?: Types.Maybe<{
        __typename?: 'votes';
    } & VoteClientFragment>;
};
export declare type GoodieFragment = {
    __typename?: 'goodies';
} & Pick<Types.Goodies, 'id' | 'name' | 'created_at' | 'client_id' | 'date_start' | 'date_end' | 'is_active' | 'description'> & {
    image?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type GoodieM2MAnimationFragment = {
    __typename?: 'goodies_m2m_animations';
} & Pick<Types.GoodiesM2mAnimations, 'goodie_id' | 'animation_id'> & {
    animation: {
        __typename?: 'animations';
    } & AnimationFragment;
};
export declare type GoodiePlayedFragment = {
    __typename?: 'goodies_played';
} & Pick<Types.GoodiesPlayed, 'id' | 'goodie_id' | 'user_id' | 'played_at'> & {
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
export declare type GetGoodiesQueryVariables = Types.Exact<{
    clientId?: Types.Maybe<Types.Scalars['uuid']>;
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
            picture?: Types.Maybe<{
                __typename?: 'assets';
            } & AssetFragment>;
        };
    } & GoodieFragment>;
};
export declare type GetGoodieAnimationsQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetGoodieAnimationsQuery = {
    __typename?: 'query_root';
} & {
    goodies_by_pk?: Types.Maybe<{
        __typename?: 'goodies';
    } & Pick<Types.Goodies, 'id'> & {
        animations: Array<{
            __typename?: 'goodies_m2m_animations';
        } & GoodieM2MAnimationFragment>;
    }>;
};
export declare type PlayGoodieMutationVariables = Types.Exact<{
    goodieId: Types.Scalars['uuid'];
    userId: Types.Scalars['uuid'];
}>;
export declare type PlayGoodieMutation = {
    __typename?: 'mutation_root';
} & {
    goodiePlayed?: Types.Maybe<{
        __typename?: 'goodies_played';
    } & GoodiePlayedFragment>;
};
export declare type GetTemplateByIdQueryVariables = Types.Exact<{
    templateId: Types.Scalars['uuid'];
}>;
export declare type GetTemplateByIdQuery = {
    __typename?: 'query_root';
} & {
    templates_by_pk?: Types.Maybe<{
        __typename?: 'templates';
    } & Pick<Types.Templates, 'id' | 'name' | 'html'>>;
};
export declare type NearbyGameCardFragment = {
    __typename?: 'nearby_games';
} & Pick<Types.NearbyGames, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'client_id' | 'description' | 'gtc' | 'instructions' | 'address' | 'radius' | 'valorization' | 'with_instant_gains' | 'with_random_drawings' | 'with_magic_random_drawings' | 'frequency' | 'max_participations' | 'created_at' | 'type_id' | 'location' | 'city' | 'distance' | 'is_test'> & {
    card_image?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    card_image_background?: Types.Maybe<{
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
    } & Pick<Types.Clients, 'id' | 'name' | 'company'> & {
        picture?: Types.Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
};
export declare type NearbyCommunicationCardFragment = {
    __typename?: 'nearby_communications';
} & Pick<Types.NearbyCommunications, 'id' | 'name' | 'date_start' | 'date_end' | 'is_active' | 'client_id' | 'address' | 'created_at' | 'type_id' | 'location' | 'city' | 'description' | 'distance'> & {
    card_image?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    card_image_background?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
    type: {
        __typename?: 'communications_types';
    } & CommunicationTypeFragment;
    client: {
        __typename?: 'clients';
    } & Pick<Types.Clients, 'id' | 'name'> & {
        picture?: Types.Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
};
export declare type GetNearbyCardsQueryVariables = Types.Exact<{
    location: Types.Scalars['geometry'];
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
export declare type GetNearbyPrivateDeckCardsQueryVariables = Types.Exact<{
    location: Types.Scalars['geometry'];
    privateDeckId: Types.Scalars['uuid'];
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
    } & Pick<Types.Clients, 'id' | 'name'> & {
        picture?: Types.Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
} & CommunicationFragment;
export declare type GetNearbyCommunicationsQueryVariables = Types.Exact<{
    location: Types.Scalars['geography'];
    distance: Types.Scalars['Float'];
    currentDate: Types.Scalars['date'];
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
} & Pick<Types.Games, 'is_test'> & {
    client: {
        __typename?: 'clients';
    } & Pick<Types.Clients, 'id' | 'name'> & {
        picture?: Types.Maybe<{
            __typename?: 'assets';
        } & AssetFragment>;
    };
} & GameFragment;
export declare type GetNearbyGamesQueryVariables = Types.Exact<{
    location: Types.Scalars['geography'];
    distance: Types.Scalars['Float'];
    currentDate: Types.Scalars['date'];
}>;
export declare type GetNearbyGamesQuery = {
    __typename?: 'query_root';
} & {
    games: Array<{
        __typename?: 'games';
    } & NearbyGameFragment>;
};
export declare type GetTestGamesQueryVariables = Types.Exact<{
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
} & Pick<Types.PrivatesDecks, 'id' | 'name' | 'description' | 'code' | 'date_start' | 'date_end' | 'is_active'>;
export declare type PrivateDeckM2mUserFragment = {
    __typename?: 'privates_decks_m2m_users';
} & Pick<Types.PrivatesDecksM2mUsers, 'private_deck_id' | 'user_id'> & {
    private_deck: {
        __typename?: 'privates_decks';
    } & PrivateDeckDisplayFragment;
};
export declare type GetPrivateDeckByCodeQueryVariables = Types.Exact<{
    code: Types.Scalars['String'];
}>;
export declare type GetPrivateDeckByCodeQuery = {
    __typename?: 'query_root';
} & {
    privates_decks: Array<{
        __typename?: 'privates_decks';
    } & PrivateDeckFragment>;
};
export declare type InsertPrivateDeckM2mUserMutationVariables = Types.Exact<{
    privateDeckId: Types.Scalars['uuid'];
}>;
export declare type InsertPrivateDeckM2mUserMutation = {
    __typename?: 'mutation_root';
} & {
    insert_privates_decks_m2m_users_one?: Types.Maybe<{
        __typename?: 'privates_decks_m2m_users';
    } & PrivateDeckM2mUserFragment>;
};
export declare type GetPrivatesDeckByUserQueryVariables = Types.Exact<{
    userId: Types.Scalars['uuid'];
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
} & Pick<Types.RandomDrawings, 'id' | 'created_at' | 'game_id' | 'gain_validated'> & {
    gain: {
        __typename?: 'gains';
    } & GainWonFragment;
};
export declare type UserDisplayFragment = {
    __typename?: 'users';
} & Pick<Types.Users, 'id' | 'created_at' | 'email' | 'name' | 'first_name' | 'birthdate' | 'address_id' | 'is_active' | 'is_tester' | 'picture_id'> & {
    address?: Types.Maybe<{
        __typename?: 'addresses';
    } & Pick<Types.Addresses, 'address' | 'city' | 'zipcode' | 'country'>>;
    picture?: Types.Maybe<{
        __typename?: 'assets';
    } & AssetFragment>;
};
export declare type GetUserByIdQueryVariables = Types.Exact<{
    id: Types.Scalars['uuid'];
}>;
export declare type GetUserByIdQuery = {
    __typename?: 'query_root';
} & {
    users_by_pk?: Types.Maybe<{
        __typename?: 'users';
    } & UserDisplayFragment>;
};
export declare type UpdateUserMutationVariables = Types.Exact<{
    userId: Types.Scalars['uuid'];
    user?: Types.Maybe<Types.UsersSetInput>;
}>;
export declare type UpdateUserMutation = {
    __typename?: 'mutation_root';
} & {
    update_users_by_pk?: Types.Maybe<{
        __typename?: 'users';
    } & UserDisplayFragment>;
};
export declare type CreateStripeCustomerMutationVariables = Types.Exact<{
    name: Types.Scalars['String'];
    email: Types.Scalars['String'];
}>;
export declare type CreateStripeCustomerMutation = {
    __typename?: 'mutation_root';
} & {
    create_stripe_customer: {
        __typename?: 'StripeCustomer';
    } & Pick<Types.StripeCustomer, 'stripe_cust_id'>;
};
export declare type CreateStripeIntentMutationVariables = Types.Exact<{
    customerId: Types.Scalars['String'];
}>;
export declare type CreateStripeIntentMutation = {
    __typename?: 'mutation_root';
} & {
    create_stripe_intent: {
        __typename?: 'StripeIntent';
    } & Pick<Types.StripeIntent, 'client_secret'>;
};
export declare type GetStripeCustomerPaymentMethodsQueryVariables = Types.Exact<{
    customer: Types.Scalars['String'];
    type: Types.Scalars['String'];
}>;
export declare type GetStripeCustomerPaymentMethodsQuery = {
    __typename?: 'query_root';
} & {
    get_stripe_customer_payment_methods: Array<Types.Maybe<{
        __typename?: 'StripePaymentMethod';
    } & Pick<Types.StripePaymentMethod, 'id' | 'object' | 'created' | 'customer' | 'livemode' | 'type'> & {
        billing_details?: Types.Maybe<{
            __typename?: 'StripePaymentMethodBillingDetails';
        } & Pick<Types.StripePaymentMethodBillingDetails, 'email' | 'name' | 'phone'> & {
            address?: Types.Maybe<{
                __typename?: 'StripePaymentMethodBillingDetailsAddress';
            } & Pick<Types.StripePaymentMethodBillingDetailsAddress, 'city' | 'country' | 'line1' | 'line2' | 'postal_code' | 'state'>>;
        }>;
        card?: Types.Maybe<{
            __typename?: 'StripePaymentMethodCard';
        } & Pick<Types.StripePaymentMethodCard, 'brand' | 'country' | 'exp_month' | 'exp_year' | 'fingerprint' | 'funding' | 'generated_from' | 'last4' | 'wallet'>>;
    }>>;
};
export declare const GameTypeFragmentDoc: import("graphql").DocumentNode;
export declare const AssetFragmentDoc: import("graphql").DocumentNode;
export declare const TemplateFragmentDoc: import("graphql").DocumentNode;
export declare const GainFragmentDoc: import("graphql").DocumentNode;
export declare const GamesGainsFragmentDoc: import("graphql").DocumentNode;
export declare const TrackerFragmentDoc: import("graphql").DocumentNode;
export declare const AnimationFragmentDoc: import("graphql").DocumentNode;
export declare const ArM2MAnimationFragmentDoc: import("graphql").DocumentNode;
export declare const ArSpecificsFragmentDoc: import("graphql").DocumentNode;
export declare const ArFragmentDoc: import("graphql").DocumentNode;
export declare const AnimationM2MAssetFragmentDoc: import("graphql").DocumentNode;
export declare const AssetResourcesFragmentDoc: import("graphql").DocumentNode;
export declare const ClientDisplayFragmentDoc: import("graphql").DocumentNode;
export declare const CommunicationTypeFragmentDoc: import("graphql").DocumentNode;
export declare const EstimateM2mEntityFragmentDoc: import("graphql").DocumentNode;
export declare const EstimateFragmentDoc: import("graphql").DocumentNode;
export declare const GainVirtualFragmentDoc: import("graphql").DocumentNode;
export declare const GamesPlayedParticipationsByDayFragmentDoc: import("graphql").DocumentNode;
export declare const GamesPlayedParticipationsByCurrentDayHoursFragmentDoc: import("graphql").DocumentNode;
export declare const GamesPlayedGainsByDayFragmentDoc: import("graphql").DocumentNode;
export declare const GamesPlayedGainsByCurrentDayHoursFragmentDoc: import("graphql").DocumentNode;
export declare const InfoFragmentDoc: import("graphql").DocumentNode;
export declare const InfoSpecificsFragmentDoc: import("graphql").DocumentNode;
export declare const PhotoFragmentDoc: import("graphql").DocumentNode;
export declare const PhotoSpecificsFragmentDoc: import("graphql").DocumentNode;
export declare const GameMinimalInfosFragmentDoc: import("graphql").DocumentNode;
export declare const CommunnicationMinimalInfosFragmentDoc: import("graphql").DocumentNode;
export declare const PrivateDeckM2mEntitiesFragmentDoc: import("graphql").DocumentNode;
export declare const PrivateDeckFragmentDoc: import("graphql").DocumentNode;
export declare const RandomDrawingFragmentDoc: import("graphql").DocumentNode;
export declare const SurveyQuestionAnswersFragmentDoc: import("graphql").DocumentNode;
export declare const SurveyQuestionsFragmentDoc: import("graphql").DocumentNode;
export declare const SurveyFragmentDoc: import("graphql").DocumentNode;
export declare const AddressFragmentDoc: import("graphql").DocumentNode;
export declare const GainWonFragmentDoc: import("graphql").DocumentNode;
export declare const GamePlayedFragmentDoc: import("graphql").DocumentNode;
export declare const GameWonFragmentDoc: import("graphql").DocumentNode;
export declare const GamesGainsAvailableFragmentDoc: import("graphql").DocumentNode;
export declare const InfosToPlayArFragmentDoc: import("graphql").DocumentNode;
export declare const ArPlayedFragmentDoc: import("graphql").DocumentNode;
export declare const QuizzQuestionAnswersFragmentDoc: import("graphql").DocumentNode;
export declare const QuizzQuestionsFragmentDoc: import("graphql").DocumentNode;
export declare const InfosToPlayQuizzFragmentDoc: import("graphql").DocumentNode;
export declare const QuizzPlayedFragmentDoc: import("graphql").DocumentNode;
export declare const QuizzFragmentDoc: import("graphql").DocumentNode;
export declare const QuizzClientFragmentDoc: import("graphql").DocumentNode;
export declare const VoteSelectionChoiceFragmentDoc: import("graphql").DocumentNode;
export declare const VoteSelectionFragmentDoc: import("graphql").DocumentNode;
export declare const VoteFragmentDoc: import("graphql").DocumentNode;
export declare const VoteClientFragmentDoc: import("graphql").DocumentNode;
export declare const InfosToPlayVoteFragmentDoc: import("graphql").DocumentNode;
export declare const VotePlayedFragmentDoc: import("graphql").DocumentNode;
export declare const GoodieFragmentDoc: import("graphql").DocumentNode;
export declare const GoodieM2MAnimationFragmentDoc: import("graphql").DocumentNode;
export declare const GoodiePlayedFragmentDoc: import("graphql").DocumentNode;
export declare const NearbyGameCardFragmentDoc: import("graphql").DocumentNode;
export declare const NearbyCommunicationCardFragmentDoc: import("graphql").DocumentNode;
export declare const CommunicationFragmentDoc: import("graphql").DocumentNode;
export declare const NearbyCommunicationFragmentDoc: import("graphql").DocumentNode;
export declare const GameFragmentDoc: import("graphql").DocumentNode;
export declare const NearbyGameFragmentDoc: import("graphql").DocumentNode;
export declare const PrivateDeckDisplayFragmentDoc: import("graphql").DocumentNode;
export declare const PrivateDeckM2mUserFragmentDoc: import("graphql").DocumentNode;
export declare const RandomDrawingWonFragmentDoc: import("graphql").DocumentNode;
export declare const UserDisplayFragmentDoc: import("graphql").DocumentNode;
export declare const GetArDocument: import("graphql").DocumentNode;
export declare const GetArSpecificsDocument: import("graphql").DocumentNode;
export declare const InsertArDocument: import("graphql").DocumentNode;
export declare const UpdateAnimationDocument: import("graphql").DocumentNode;
export declare const InsertArM2mAnimationsDocument: import("graphql").DocumentNode;
export declare const DeleteArM2mAnimationsDocument: import("graphql").DocumentNode;
export declare const InsertAnimationsM2mAssetsDocument: import("graphql").DocumentNode;
export declare const UpdateAnimationsM2mAssetsDocument: import("graphql").DocumentNode;
export declare const DeleteAnimationsM2mAssetsDocument: import("graphql").DocumentNode;
export declare const GetAssetByIdDocument: import("graphql").DocumentNode;
export declare const GetAssetByPathDocument: import("graphql").DocumentNode;
export declare const GetAssetsDocument: import("graphql").DocumentNode;
export declare const InsertAssetDocument: import("graphql").DocumentNode;
export declare const UpdateAssetDocument: import("graphql").DocumentNode;
export declare const AddResourceToAssetDocument: import("graphql").DocumentNode;
export declare const DeleteResourceFromAssetDocument: import("graphql").DocumentNode;
export declare const GetClientsDocument: import("graphql").DocumentNode;
export declare const GetClientByIdDocument: import("graphql").DocumentNode;
export declare const UpdateClientIsActiveDocument: import("graphql").DocumentNode;
export declare const UpdateClientDocument: import("graphql").DocumentNode;
export declare const GetCommunicationsTypesDocument: import("graphql").DocumentNode;
export declare const GetCommunicationTypeByIdDocument: import("graphql").DocumentNode;
export declare const GetCommunicationsByClientDocument: import("graphql").DocumentNode;
export declare const GetCommunicationsByClientAndCommunicationTypeDocument: import("graphql").DocumentNode;
export declare const InsertCommunicationDocument: import("graphql").DocumentNode;
export declare const UpdateCommunicationDocument: import("graphql").DocumentNode;
export declare const ArchiveCommunicationDocument: import("graphql").DocumentNode;
export declare const GetEstimatesByClientDocument: import("graphql").DocumentNode;
export declare const InsertEstimateDocument: import("graphql").DocumentNode;
export declare const UpdateEstimateDocument: import("graphql").DocumentNode;
export declare const ArchiveEstimateDocument: import("graphql").DocumentNode;
export declare const InsertEstimateM2mEntityDocument: import("graphql").DocumentNode;
export declare const UpdateEstimateM2mEntityDocument: import("graphql").DocumentNode;
export declare const GetEstimatesM2mEntitiesDocument: import("graphql").DocumentNode;
export declare const ArchiveEstimatesM2mEntitiesByPkDocument: import("graphql").DocumentNode;
export declare const GetGamesCommunicationsTypesDocument: import("graphql").DocumentNode;
export declare const GetGainsVirtualsByGainDocument: import("graphql").DocumentNode;
export declare const InsertGainsVirtualsDocument: import("graphql").DocumentNode;
export declare const GetGainsByClientDocument: import("graphql").DocumentNode;
export declare const InsertGainDocument: import("graphql").DocumentNode;
export declare const UpdateGainDocument: import("graphql").DocumentNode;
export declare const ArchiveGainDocument: import("graphql").DocumentNode;
export declare const InsertGameGainDocument: import("graphql").DocumentNode;
export declare const UpdateGameGainDocument: import("graphql").DocumentNode;
export declare const DeleteGameGainDocument: import("graphql").DocumentNode;
export declare const GetGamesPlayedStatisticByClientDocument: import("graphql").DocumentNode;
export declare const GetGameWinnersDocument: import("graphql").DocumentNode;
export declare const GetGamesTypesDocument: import("graphql").DocumentNode;
export declare const GetGameTypeByIdDocument: import("graphql").DocumentNode;
export declare const GetGamesMinimalInfosDocument: import("graphql").DocumentNode;
export declare const GetGamesByClientAndGameTypeDocument: import("graphql").DocumentNode;
export declare const InsertGameDocument: import("graphql").DocumentNode;
export declare const UpdateGameDocument: import("graphql").DocumentNode;
export declare const ArchiveGameDocument: import("graphql").DocumentNode;
export declare const GetGoodieDocument: import("graphql").DocumentNode;
export declare const InsertGoodieDocument: import("graphql").DocumentNode;
export declare const UpdateGoodieDocument: import("graphql").DocumentNode;
export declare const ArchiveGoodieDocument: import("graphql").DocumentNode;
export declare const InsertGoodiesM2mAnimationsDocument: import("graphql").DocumentNode;
export declare const DeleteGoodiesM2mAnimationsDocument: import("graphql").DocumentNode;
export declare const InsertInfoDocument: import("graphql").DocumentNode;
export declare const GetInfoSpecificsDocument: import("graphql").DocumentNode;
export declare const UpdateInfoDocument: import("graphql").DocumentNode;
export declare const InsertPhotoDocument: import("graphql").DocumentNode;
export declare const GetPhotoSpecificsDocument: import("graphql").DocumentNode;
export declare const UpdatePhotoDocument: import("graphql").DocumentNode;
export declare const GetPrivatesDecksByClientDocument: import("graphql").DocumentNode;
export declare const InsertPrivateDeckDocument: import("graphql").DocumentNode;
export declare const UpdatePrivateDeckDocument: import("graphql").DocumentNode;
export declare const ArchivePrivateDeckDocument: import("graphql").DocumentNode;
export declare const GetGamesCommunicationsMinimalInfosDocument: import("graphql").DocumentNode;
export declare const InsertPrivateDeckM2mEntityDocument: import("graphql").DocumentNode;
export declare const GetPrivateDeckM2mEntitiesDocument: import("graphql").DocumentNode;
export declare const DeletePrivateDeckM2mEntitiesByPkDocument: import("graphql").DocumentNode;
export declare const GetQuizzSpecificsDocument: import("graphql").DocumentNode;
export declare const InsertQuizzDocument: import("graphql").DocumentNode;
export declare const UpdateQuizzDocument: import("graphql").DocumentNode;
export declare const InsertQuizzQuestionDocument: import("graphql").DocumentNode;
export declare const UpdateQuizzQuestionDocument: import("graphql").DocumentNode;
export declare const DeleteQuizzQuestionDocument: import("graphql").DocumentNode;
export declare const VerifyRandomDrawingInfosDocument: import("graphql").DocumentNode;
export declare const GetArPlayersDocument: import("graphql").DocumentNode;
export declare const GetQuizzPlayersDocument: import("graphql").DocumentNode;
export declare const GetVotePlayersDocument: import("graphql").DocumentNode;
export declare const GetGameRandomDrawingsDocument: import("graphql").DocumentNode;
export declare const InsertRandomDrawingsDocument: import("graphql").DocumentNode;
export declare const InsertSurveyDocument: import("graphql").DocumentNode;
export declare const GetSurveySpecificsDocument: import("graphql").DocumentNode;
export declare const UpdateSurveyDocument: import("graphql").DocumentNode;
export declare const InsertSurveyQuestionDocument: import("graphql").DocumentNode;
export declare const UpdateSurveyQuestionDocument: import("graphql").DocumentNode;
export declare const DeleteSurveyQuestionDocument: import("graphql").DocumentNode;
export declare const GetTemplatesByClientDocument: import("graphql").DocumentNode;
export declare const InsertTemplateDocument: import("graphql").DocumentNode;
export declare const UpdateTemplateDocument: import("graphql").DocumentNode;
export declare const ArchiveTemplateDocument: import("graphql").DocumentNode;
export declare const GetTrackersDocument: import("graphql").DocumentNode;
export declare const InsertTrackerDocument: import("graphql").DocumentNode;
export declare const UpdateTrackerDocument: import("graphql").DocumentNode;
export declare const GetVoteResultsDocument: import("graphql").DocumentNode;
export declare const InsertVoteDocument: import("graphql").DocumentNode;
export declare const GetVoteSpecificsDocument: import("graphql").DocumentNode;
export declare const InsertVoteSelectionDocument: import("graphql").DocumentNode;
export declare const UpdateVoteSelectionDocument: import("graphql").DocumentNode;
export declare const DeleteVoteSelectionDocument: import("graphql").DocumentNode;
export declare const GetClientsByEmailDocument: import("graphql").DocumentNode;
export declare const InsertClientDocument: import("graphql").DocumentNode;
export declare const InsertClientPasswordForgottenTokenDocument: import("graphql").DocumentNode;
export declare const ResetPasswordDocument: import("graphql").DocumentNode;
export declare const GetUsersByEmailDocument: import("graphql").DocumentNode;
export declare const GetUsersByAppleIdDocument: import("graphql").DocumentNode;
export declare const InsertUserDocument: import("graphql").DocumentNode;
export declare const UpsertUserDocument: import("graphql").DocumentNode;
export declare const UpsertAddressDocument: import("graphql").DocumentNode;
export declare const ValidateGainDocument: import("graphql").DocumentNode;
export declare const GetGainsWonDocument: import("graphql").DocumentNode;
export declare const GetGameFrequencyDocument: import("graphql").DocumentNode;
export declare const GetGamePlayedCountDocument: import("graphql").DocumentNode;
export declare const GetInfosToPlayArDocument: import("graphql").DocumentNode;
export declare const PlayArDocument: import("graphql").DocumentNode;
export declare const GetInfosToPlayQuizzDocument: import("graphql").DocumentNode;
export declare const PlayQuizzDocument: import("graphql").DocumentNode;
export declare const GetQuizzByIdDocument: import("graphql").DocumentNode;
export declare const GetInfosToPlayVoteDocument: import("graphql").DocumentNode;
export declare const PlayVoteDocument: import("graphql").DocumentNode;
export declare const GetVoteByIdDocument: import("graphql").DocumentNode;
export declare const GetGoodiesDocument: import("graphql").DocumentNode;
export declare const GetGoodieAnimationsDocument: import("graphql").DocumentNode;
export declare const PlayGoodieDocument: import("graphql").DocumentNode;
export declare const GetTemplateByIdDocument: import("graphql").DocumentNode;
export declare const GetNearbyCardsDocument: import("graphql").DocumentNode;
export declare const GetNearbyPrivateDeckCardsDocument: import("graphql").DocumentNode;
export declare const GetNearbyCommunicationsDocument: import("graphql").DocumentNode;
export declare const GetNearbyGamesDocument: import("graphql").DocumentNode;
export declare const GetTestGamesDocument: import("graphql").DocumentNode;
export declare const GetPrivateDeckByCodeDocument: import("graphql").DocumentNode;
export declare const InsertPrivateDeckM2mUserDocument: import("graphql").DocumentNode;
export declare const GetPrivatesDeckByUserDocument: import("graphql").DocumentNode;
export declare const GetUserByIdDocument: import("graphql").DocumentNode;
export declare const UpdateUserDocument: import("graphql").DocumentNode;
export declare const CreateStripeCustomerDocument: import("graphql").DocumentNode;
export declare const CreateStripeIntentDocument: import("graphql").DocumentNode;
export declare const GetStripeCustomerPaymentMethodsDocument: import("graphql").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    getAr(variables: GetArQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetArQuery>;
    getArSpecifics(variables: GetArSpecificsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetArSpecificsQuery>;
    insertAr(variables: InsertArMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertArMutation>;
    updateAnimation(variables: UpdateAnimationMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateAnimationMutation>;
    insertArM2mAnimations(variables: InsertArM2mAnimationsMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertArM2mAnimationsMutation>;
    DeleteArM2mAnimations(variables: DeleteArM2mAnimationsMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DeleteArM2mAnimationsMutation>;
    insertAnimationsM2mAssets(variables: InsertAnimationsM2mAssetsMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertAnimationsM2mAssetsMutation>;
    updateAnimationsM2mAssets(variables: UpdateAnimationsM2mAssetsMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateAnimationsM2mAssetsMutation>;
    deleteAnimationsM2mAssets(variables: DeleteAnimationsM2mAssetsMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DeleteAnimationsM2mAssetsMutation>;
    getAssetById(variables: GetAssetByIdQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetAssetByIdQuery>;
    getAssetByPath(variables: GetAssetByPathQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetAssetByPathQuery>;
    getAssets(variables?: Types.Exact<{
        type?: Types.AssetsTypesEnum | null | undefined;
        clientId?: import("yup/lib/types").Maybe<string>;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetAssetsQuery>;
    insertAsset(variables: InsertAssetMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertAssetMutation>;
    updateAsset(variables: UpdateAssetMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateAssetMutation>;
    addResourceToAsset(variables: AddResourceToAssetMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<AddResourceToAssetMutation>;
    deleteResourceFromAsset(variables: DeleteResourceFromAssetMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DeleteResourceFromAssetMutation>;
    getClients(variables?: Types.Exact<{
        withDiscount?: boolean | null | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetClientsQuery>;
    getClientById(variables: GetClientByIdQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetClientByIdQuery>;
    updateClientIsActive(variables: UpdateClientIsActiveMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateClientIsActiveMutation>;
    updateClient(variables: UpdateClientMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateClientMutation>;
    getCommunicationsTypes(variables?: Types.Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetCommunicationsTypesQuery>;
    getCommunicationTypeById(variables: GetCommunicationTypeByIdQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetCommunicationTypeByIdQuery>;
    getCommunicationsByClient(variables: GetCommunicationsByClientQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetCommunicationsByClientQuery>;
    getCommunicationsByClientAndCommunicationType(variables: GetCommunicationsByClientAndCommunicationTypeQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetCommunicationsByClientAndCommunicationTypeQuery>;
    insertCommunication(variables: InsertCommunicationMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertCommunicationMutation>;
    updateCommunication(variables: UpdateCommunicationMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateCommunicationMutation>;
    archiveCommunication(variables: ArchiveCommunicationMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<ArchiveCommunicationMutation>;
    getEstimatesByClient(variables: GetEstimatesByClientQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetEstimatesByClientQuery>;
    insertEstimate(variables: InsertEstimateMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertEstimateMutation>;
    updateEstimate(variables: UpdateEstimateMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateEstimateMutation>;
    archiveEstimate(variables: ArchiveEstimateMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<ArchiveEstimateMutation>;
    insertEstimateM2mEntity(variables: InsertEstimateM2mEntityMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertEstimateM2mEntityMutation>;
    updateEstimateM2mEntity(variables: UpdateEstimateM2mEntityMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateEstimateM2mEntityMutation>;
    getEstimatesM2mEntities(variables: GetEstimatesM2mEntitiesQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetEstimatesM2mEntitiesQuery>;
    archiveEstimatesM2mEntitiesByPk(variables: ArchiveEstimatesM2mEntitiesByPkMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<ArchiveEstimatesM2mEntitiesByPkMutation>;
    getGamesCommunicationsTypes(variables?: Types.Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGamesCommunicationsTypesQuery>;
    getGainsVirtualsByGain(variables: GetGainsVirtualsByGainQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGainsVirtualsByGainQuery>;
    insertGainsVirtuals(variables: InsertGainsVirtualsMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertGainsVirtualsMutation>;
    getGainsByClient(variables: GetGainsByClientQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGainsByClientQuery>;
    insertGain(variables: InsertGainMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertGainMutation>;
    updateGain(variables: UpdateGainMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateGainMutation>;
    archiveGain(variables: ArchiveGainMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<ArchiveGainMutation>;
    insertGameGain(variables: InsertGameGainMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertGameGainMutation>;
    updateGameGain(variables: UpdateGameGainMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateGameGainMutation>;
    deleteGameGain(variables: DeleteGameGainMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DeleteGameGainMutation>;
    getGamesPlayedStatisticByClient(variables: GetGamesPlayedStatisticByClientQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGamesPlayedStatisticByClientQuery>;
    getGameWinners(variables: GetGameWinnersQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGameWinnersQuery>;
    getGamesTypes(variables?: Types.Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGamesTypesQuery>;
    getGameTypeById(variables: GetGameTypeByIdQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGameTypeByIdQuery>;
    getGamesMinimalInfos(variables?: Types.Exact<{
        clientId?: import("yup/lib/types").Maybe<string>;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGamesMinimalInfosQuery>;
    getGamesByClientAndGameType(variables: GetGamesByClientAndGameTypeQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGamesByClientAndGameTypeQuery>;
    insertGame(variables: InsertGameMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertGameMutation>;
    updateGame(variables: UpdateGameMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateGameMutation>;
    archiveGame(variables: ArchiveGameMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<ArchiveGameMutation>;
    getGoodie(variables: GetGoodieQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGoodieQuery>;
    insertGoodie(variables: InsertGoodieMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertGoodieMutation>;
    updateGoodie(variables: UpdateGoodieMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateGoodieMutation>;
    archiveGoodie(variables: ArchiveGoodieMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<ArchiveGoodieMutation>;
    insertGoodiesM2mAnimations(variables: InsertGoodiesM2mAnimationsMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertGoodiesM2mAnimationsMutation>;
    DeleteGoodiesM2mAnimations(variables: DeleteGoodiesM2mAnimationsMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DeleteGoodiesM2mAnimationsMutation>;
    insertInfo(variables: InsertInfoMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertInfoMutation>;
    getInfoSpecifics(variables: GetInfoSpecificsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetInfoSpecificsQuery>;
    updateInfo(variables: UpdateInfoMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateInfoMutation>;
    insertPhoto(variables: InsertPhotoMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertPhotoMutation>;
    getPhotoSpecifics(variables: GetPhotoSpecificsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetPhotoSpecificsQuery>;
    updatePhoto(variables: UpdatePhotoMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdatePhotoMutation>;
    getPrivatesDecksByClient(variables: GetPrivatesDecksByClientQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetPrivatesDecksByClientQuery>;
    insertPrivateDeck(variables: InsertPrivateDeckMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertPrivateDeckMutation>;
    updatePrivateDeck(variables: UpdatePrivateDeckMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdatePrivateDeckMutation>;
    archivePrivateDeck(variables: ArchivePrivateDeckMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<ArchivePrivateDeckMutation>;
    getGamesCommunicationsMinimalInfos(variables?: Types.Exact<{
        clientId?: import("yup/lib/types").Maybe<string>;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGamesCommunicationsMinimalInfosQuery>;
    insertPrivateDeckM2mEntity(variables: InsertPrivateDeckM2mEntityMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertPrivateDeckM2mEntityMutation>;
    getPrivateDeckM2mEntities(variables: GetPrivateDeckM2mEntitiesQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetPrivateDeckM2mEntitiesQuery>;
    deletePrivateDeckM2mEntitiesByPk(variables: DeletePrivateDeckM2mEntitiesByPkMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DeletePrivateDeckM2mEntitiesByPkMutation>;
    getQuizzSpecifics(variables: GetQuizzSpecificsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetQuizzSpecificsQuery>;
    insertQuizz(variables: InsertQuizzMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertQuizzMutation>;
    updateQuizz(variables: UpdateQuizzMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateQuizzMutation>;
    insertQuizzQuestion(variables: InsertQuizzQuestionMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertQuizzQuestionMutation>;
    updateQuizzQuestion(variables: UpdateQuizzQuestionMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateQuizzQuestionMutation>;
    deleteQuizzQuestion(variables: DeleteQuizzQuestionMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DeleteQuizzQuestionMutation>;
    verifyRandomDrawingInfos(variables: VerifyRandomDrawingInfosQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<VerifyRandomDrawingInfosQuery>;
    getArPlayers(variables: GetArPlayersQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetArPlayersQuery>;
    getQuizzPlayers(variables: GetQuizzPlayersQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetQuizzPlayersQuery>;
    getVotePlayers(variables: GetVotePlayersQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetVotePlayersQuery>;
    getGameRandomDrawings(variables: GetGameRandomDrawingsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGameRandomDrawingsQuery>;
    insertRandomDrawings(variables: InsertRandomDrawingsMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertRandomDrawingsMutation>;
    insertSurvey(variables: InsertSurveyMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertSurveyMutation>;
    getSurveySpecifics(variables: GetSurveySpecificsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetSurveySpecificsQuery>;
    updateSurvey(variables: UpdateSurveyMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateSurveyMutation>;
    insertSurveyQuestion(variables: InsertSurveyQuestionMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertSurveyQuestionMutation>;
    updateSurveyQuestion(variables: UpdateSurveyQuestionMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateSurveyQuestionMutation>;
    deleteSurveyQuestion(variables: DeleteSurveyQuestionMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DeleteSurveyQuestionMutation>;
    getTemplatesByClient(variables: GetTemplatesByClientQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetTemplatesByClientQuery>;
    insertTemplate(variables: InsertTemplateMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertTemplateMutation>;
    updateTemplate(variables: UpdateTemplateMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateTemplateMutation>;
    archiveTemplate(variables: ArchiveTemplateMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<ArchiveTemplateMutation>;
    getTrackers(variables?: Types.Exact<{
        clientId?: import("yup/lib/types").Maybe<string>;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetTrackersQuery>;
    insertTracker(variables: InsertTrackerMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertTrackerMutation>;
    updateTracker(variables: UpdateTrackerMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateTrackerMutation>;
    getVoteResults(variables: GetVoteResultsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetVoteResultsQuery>;
    insertVote(variables: InsertVoteMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertVoteMutation>;
    getVoteSpecifics(variables: GetVoteSpecificsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetVoteSpecificsQuery>;
    insertVoteSelection(variables: InsertVoteSelectionMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertVoteSelectionMutation>;
    updateVoteSelection(variables: UpdateVoteSelectionMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateVoteSelectionMutation>;
    deleteVoteSelection(variables: DeleteVoteSelectionMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<DeleteVoteSelectionMutation>;
    getClientsByEmail(variables: GetClientsByEmailQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetClientsByEmailQuery>;
    insertClient(variables: InsertClientMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertClientMutation>;
    insertClientPasswordForgottenToken(variables: InsertClientPasswordForgottenTokenMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertClientPasswordForgottenTokenMutation>;
    resetPassword(variables: ResetPasswordMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<ResetPasswordMutation>;
    getUsersByEmail(variables: GetUsersByEmailQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetUsersByEmailQuery>;
    getUsersByAppleId(variables: GetUsersByAppleIdQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetUsersByAppleIdQuery>;
    insertUser(variables: InsertUserMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertUserMutation>;
    upsertUser(variables: UpsertUserMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpsertUserMutation>;
    upsertAddress(variables: UpsertAddressMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpsertAddressMutation>;
    validateGain(variables: ValidateGainMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<ValidateGainMutation>;
    getGainsWon(variables?: Types.Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGainsWonQuery>;
    getGameFrequency(variables: GetGameFrequencyQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGameFrequencyQuery>;
    getGamePlayedCount(variables: GetGamePlayedCountQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGamePlayedCountQuery>;
    getInfosToPlayAr(variables: GetInfosToPlayArQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetInfosToPlayArQuery>;
    playAr(variables: PlayArMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<PlayArMutation>;
    getInfosToPlayQuizz(variables: GetInfosToPlayQuizzQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetInfosToPlayQuizzQuery>;
    playQuizz(variables: PlayQuizzMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<PlayQuizzMutation>;
    getQuizzById(variables: GetQuizzByIdQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetQuizzByIdQuery>;
    getInfosToPlayVote(variables: GetInfosToPlayVoteQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetInfosToPlayVoteQuery>;
    playVote(variables: PlayVoteMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<PlayVoteMutation>;
    getVoteById(variables: GetVoteByIdQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetVoteByIdQuery>;
    getGoodies(variables?: Types.Exact<{
        clientId?: import("yup/lib/types").Maybe<string>;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGoodiesQuery>;
    getGoodieAnimations(variables: GetGoodieAnimationsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetGoodieAnimationsQuery>;
    playGoodie(variables: PlayGoodieMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<PlayGoodieMutation>;
    getTemplateById(variables: GetTemplateByIdQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetTemplateByIdQuery>;
    getNearbyCards(variables: GetNearbyCardsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetNearbyCardsQuery>;
    getNearbyPrivateDeckCards(variables: GetNearbyPrivateDeckCardsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetNearbyPrivateDeckCardsQuery>;
    getNearbyCommunications(variables: GetNearbyCommunicationsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetNearbyCommunicationsQuery>;
    getNearbyGames(variables: GetNearbyGamesQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetNearbyGamesQuery>;
    getTestGames(variables?: Types.Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit['headers']): Promise<GetTestGamesQuery>;
    getPrivateDeckByCode(variables: GetPrivateDeckByCodeQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetPrivateDeckByCodeQuery>;
    insertPrivateDeckM2mUser(variables: InsertPrivateDeckM2mUserMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<InsertPrivateDeckM2mUserMutation>;
    getPrivatesDeckByUser(variables: GetPrivatesDeckByUserQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetPrivatesDeckByUserQuery>;
    getUserById(variables: GetUserByIdQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetUserByIdQuery>;
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UpdateUserMutation>;
    createStripeCustomer(variables: CreateStripeCustomerMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<CreateStripeCustomerMutation>;
    createStripeIntent(variables: CreateStripeIntentMutationVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<CreateStripeIntentMutation>;
    getStripeCustomerPaymentMethods(variables: GetStripeCustomerPaymentMethodsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetStripeCustomerPaymentMethodsQuery>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
