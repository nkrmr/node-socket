"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteClientFragmentDoc = exports.VoteFragmentDoc = exports.VoteSelectionFragmentDoc = exports.VoteSelectionChoiceFragmentDoc = exports.QuizzClientFragmentDoc = exports.QuizzFragmentDoc = exports.QuizzPlayedFragmentDoc = exports.InfosToPlayQuizzFragmentDoc = exports.QuizzQuestionsFragmentDoc = exports.QuizzQuestionAnswersFragmentDoc = exports.ArPlayedFragmentDoc = exports.InfosToPlayArFragmentDoc = exports.GamesGainsAvailableFragmentDoc = exports.GameWonFragmentDoc = exports.GamePlayedFragmentDoc = exports.GainWonFragmentDoc = exports.AddressFragmentDoc = exports.SurveyFragmentDoc = exports.SurveyQuestionsFragmentDoc = exports.SurveyQuestionAnswersFragmentDoc = exports.RandomDrawingFragmentDoc = exports.PrivateDeckFragmentDoc = exports.PrivateDeckM2mEntitiesFragmentDoc = exports.CommunnicationMinimalInfosFragmentDoc = exports.GameMinimalInfosFragmentDoc = exports.PhotoSpecificsFragmentDoc = exports.PhotoFragmentDoc = exports.InfoSpecificsFragmentDoc = exports.InfoFragmentDoc = exports.GamesPlayedGainsByCurrentDayHoursFragmentDoc = exports.GamesPlayedGainsByDayFragmentDoc = exports.GamesPlayedParticipationsByCurrentDayHoursFragmentDoc = exports.GamesPlayedParticipationsByDayFragmentDoc = exports.GainVirtualFragmentDoc = exports.EstimateFragmentDoc = exports.EstimateM2mEntityFragmentDoc = exports.CommunicationTypeFragmentDoc = exports.ClientDisplayFragmentDoc = exports.AssetResourcesFragmentDoc = exports.AnimationM2MAssetFragmentDoc = exports.ArFragmentDoc = exports.ArSpecificsFragmentDoc = exports.ArM2MAnimationFragmentDoc = exports.AnimationFragmentDoc = exports.TrackerFragmentDoc = exports.GamesGainsFragmentDoc = exports.GainFragmentDoc = exports.TemplateFragmentDoc = exports.AssetFragmentDoc = exports.GameTypeFragmentDoc = void 0;
exports.useAddResourceToAssetMutation = exports.AddResourceToAssetDocument = exports.useUpdateAssetMutation = exports.UpdateAssetDocument = exports.useInsertAssetMutation = exports.InsertAssetDocument = exports.useGetAssetsLazyQuery = exports.useGetAssetsQuery = exports.GetAssetsDocument = exports.useGetAssetByPathLazyQuery = exports.useGetAssetByPathQuery = exports.GetAssetByPathDocument = exports.useGetAssetByIdLazyQuery = exports.useGetAssetByIdQuery = exports.GetAssetByIdDocument = exports.useDeleteAnimationsM2mAssetsMutation = exports.DeleteAnimationsM2mAssetsDocument = exports.useUpdateAnimationsM2mAssetsMutation = exports.UpdateAnimationsM2mAssetsDocument = exports.useInsertAnimationsM2mAssetsMutation = exports.InsertAnimationsM2mAssetsDocument = exports.useDeleteArM2mAnimationsMutation = exports.DeleteArM2mAnimationsDocument = exports.useInsertArM2mAnimationsMutation = exports.InsertArM2mAnimationsDocument = exports.useUpdateAnimationMutation = exports.UpdateAnimationDocument = exports.useInsertArMutation = exports.InsertArDocument = exports.useGetArSpecificsLazyQuery = exports.useGetArSpecificsQuery = exports.GetArSpecificsDocument = exports.useGetArLazyQuery = exports.useGetArQuery = exports.GetArDocument = exports.UserDisplayFragmentDoc = exports.RandomDrawingWonFragmentDoc = exports.PrivateDeckM2mUserFragmentDoc = exports.PrivateDeckDisplayFragmentDoc = exports.NearbyGameFragmentDoc = exports.GameFragmentDoc = exports.NearbyCommunicationFragmentDoc = exports.CommunicationFragmentDoc = exports.NearbyCommunicationCardFragmentDoc = exports.NearbyGameCardFragmentDoc = exports.GoodiePlayedFragmentDoc = exports.GoodieM2MAnimationFragmentDoc = exports.GoodieFragmentDoc = exports.VotePlayedFragmentDoc = exports.InfosToPlayVoteFragmentDoc = void 0;
exports.useGetGamesCommunicationsTypesQuery = exports.GetGamesCommunicationsTypesDocument = exports.useArchiveEstimatesM2mEntitiesByPkMutation = exports.ArchiveEstimatesM2mEntitiesByPkDocument = exports.useGetEstimatesM2mEntitiesLazyQuery = exports.useGetEstimatesM2mEntitiesQuery = exports.GetEstimatesM2mEntitiesDocument = exports.useUpdateEstimateM2mEntityMutation = exports.UpdateEstimateM2mEntityDocument = exports.useInsertEstimateM2mEntityMutation = exports.InsertEstimateM2mEntityDocument = exports.useArchiveEstimateMutation = exports.ArchiveEstimateDocument = exports.useUpdateEstimateMutation = exports.UpdateEstimateDocument = exports.useInsertEstimateMutation = exports.InsertEstimateDocument = exports.useGetEstimatesByClientLazyQuery = exports.useGetEstimatesByClientQuery = exports.GetEstimatesByClientDocument = exports.useArchiveCommunicationMutation = exports.ArchiveCommunicationDocument = exports.useUpdateCommunicationMutation = exports.UpdateCommunicationDocument = exports.useInsertCommunicationMutation = exports.InsertCommunicationDocument = exports.useGetCommunicationsByClientAndCommunicationTypeLazyQuery = exports.useGetCommunicationsByClientAndCommunicationTypeQuery = exports.GetCommunicationsByClientAndCommunicationTypeDocument = exports.useGetCommunicationsByClientLazyQuery = exports.useGetCommunicationsByClientQuery = exports.GetCommunicationsByClientDocument = exports.useGetCommunicationTypeByIdLazyQuery = exports.useGetCommunicationTypeByIdQuery = exports.GetCommunicationTypeByIdDocument = exports.useGetCommunicationsTypesLazyQuery = exports.useGetCommunicationsTypesQuery = exports.GetCommunicationsTypesDocument = exports.useUpdateClientMutation = exports.UpdateClientDocument = exports.useUpdateClientIsActiveMutation = exports.UpdateClientIsActiveDocument = exports.useGetClientByIdLazyQuery = exports.useGetClientByIdQuery = exports.GetClientByIdDocument = exports.useGetClientsLazyQuery = exports.useGetClientsQuery = exports.GetClientsDocument = exports.useDeleteResourceFromAssetMutation = exports.DeleteResourceFromAssetDocument = void 0;
exports.useInsertGoodieMutation = exports.InsertGoodieDocument = exports.useGetGoodieLazyQuery = exports.useGetGoodieQuery = exports.GetGoodieDocument = exports.useArchiveGameMutation = exports.ArchiveGameDocument = exports.useUpdateGameMutation = exports.UpdateGameDocument = exports.useInsertGameMutation = exports.InsertGameDocument = exports.useGetGamesByClientAndGameTypeLazyQuery = exports.useGetGamesByClientAndGameTypeQuery = exports.GetGamesByClientAndGameTypeDocument = exports.useGetGamesMinimalInfosLazyQuery = exports.useGetGamesMinimalInfosQuery = exports.GetGamesMinimalInfosDocument = exports.useGetGameTypeByIdLazyQuery = exports.useGetGameTypeByIdQuery = exports.GetGameTypeByIdDocument = exports.useGetGamesTypesLazyQuery = exports.useGetGamesTypesQuery = exports.GetGamesTypesDocument = exports.useGetGameWinnersLazyQuery = exports.useGetGameWinnersQuery = exports.GetGameWinnersDocument = exports.useGetGamesPlayedStatisticByClientLazyQuery = exports.useGetGamesPlayedStatisticByClientQuery = exports.GetGamesPlayedStatisticByClientDocument = exports.useDeleteGameGainMutation = exports.DeleteGameGainDocument = exports.useUpdateGameGainMutation = exports.UpdateGameGainDocument = exports.useInsertGameGainMutation = exports.InsertGameGainDocument = exports.useArchiveGainMutation = exports.ArchiveGainDocument = exports.useUpdateGainMutation = exports.UpdateGainDocument = exports.useInsertGainMutation = exports.InsertGainDocument = exports.useGetGainsByClientLazyQuery = exports.useGetGainsByClientQuery = exports.GetGainsByClientDocument = exports.useInsertGainsVirtualsMutation = exports.InsertGainsVirtualsDocument = exports.useGetGainsVirtualsByGainLazyQuery = exports.useGetGainsVirtualsByGainQuery = exports.GetGainsVirtualsByGainDocument = exports.useGetGamesCommunicationsTypesLazyQuery = void 0;
exports.useInsertQuizzQuestionMutation = exports.InsertQuizzQuestionDocument = exports.useUpdateQuizzMutation = exports.UpdateQuizzDocument = exports.useInsertQuizzMutation = exports.InsertQuizzDocument = exports.useGetQuizzSpecificsLazyQuery = exports.useGetQuizzSpecificsQuery = exports.GetQuizzSpecificsDocument = exports.useDeletePrivateDeckM2mEntitiesByPkMutation = exports.DeletePrivateDeckM2mEntitiesByPkDocument = exports.useGetPrivateDeckM2mEntitiesLazyQuery = exports.useGetPrivateDeckM2mEntitiesQuery = exports.GetPrivateDeckM2mEntitiesDocument = exports.useInsertPrivateDeckM2mEntityMutation = exports.InsertPrivateDeckM2mEntityDocument = exports.useGetGamesCommunicationsMinimalInfosLazyQuery = exports.useGetGamesCommunicationsMinimalInfosQuery = exports.GetGamesCommunicationsMinimalInfosDocument = exports.useArchivePrivateDeckMutation = exports.ArchivePrivateDeckDocument = exports.useUpdatePrivateDeckMutation = exports.UpdatePrivateDeckDocument = exports.useInsertPrivateDeckMutation = exports.InsertPrivateDeckDocument = exports.useGetPrivatesDecksByClientLazyQuery = exports.useGetPrivatesDecksByClientQuery = exports.GetPrivatesDecksByClientDocument = exports.useUpdatePhotoMutation = exports.UpdatePhotoDocument = exports.useGetPhotoSpecificsLazyQuery = exports.useGetPhotoSpecificsQuery = exports.GetPhotoSpecificsDocument = exports.useInsertPhotoMutation = exports.InsertPhotoDocument = exports.useUpdateInfoMutation = exports.UpdateInfoDocument = exports.useGetInfoSpecificsLazyQuery = exports.useGetInfoSpecificsQuery = exports.GetInfoSpecificsDocument = exports.useInsertInfoMutation = exports.InsertInfoDocument = exports.useDeleteGoodiesM2mAnimationsMutation = exports.DeleteGoodiesM2mAnimationsDocument = exports.useInsertGoodiesM2mAnimationsMutation = exports.InsertGoodiesM2mAnimationsDocument = exports.useArchiveGoodieMutation = exports.ArchiveGoodieDocument = exports.useUpdateGoodieMutation = exports.UpdateGoodieDocument = void 0;
exports.useUpdateTrackerMutation = exports.UpdateTrackerDocument = exports.useInsertTrackerMutation = exports.InsertTrackerDocument = exports.useGetTrackersLazyQuery = exports.useGetTrackersQuery = exports.GetTrackersDocument = exports.useArchiveTemplateMutation = exports.ArchiveTemplateDocument = exports.useUpdateTemplateMutation = exports.UpdateTemplateDocument = exports.useInsertTemplateMutation = exports.InsertTemplateDocument = exports.useGetTemplatesByClientLazyQuery = exports.useGetTemplatesByClientQuery = exports.GetTemplatesByClientDocument = exports.useDeleteSurveyQuestionMutation = exports.DeleteSurveyQuestionDocument = exports.useUpdateSurveyQuestionMutation = exports.UpdateSurveyQuestionDocument = exports.useInsertSurveyQuestionMutation = exports.InsertSurveyQuestionDocument = exports.useUpdateSurveyMutation = exports.UpdateSurveyDocument = exports.useGetSurveySpecificsLazyQuery = exports.useGetSurveySpecificsQuery = exports.GetSurveySpecificsDocument = exports.useInsertSurveyMutation = exports.InsertSurveyDocument = exports.useInsertRandomDrawingsMutation = exports.InsertRandomDrawingsDocument = exports.useGetGameRandomDrawingsLazyQuery = exports.useGetGameRandomDrawingsQuery = exports.GetGameRandomDrawingsDocument = exports.useGetVotePlayersLazyQuery = exports.useGetVotePlayersQuery = exports.GetVotePlayersDocument = exports.useGetQuizzPlayersLazyQuery = exports.useGetQuizzPlayersQuery = exports.GetQuizzPlayersDocument = exports.useGetArPlayersLazyQuery = exports.useGetArPlayersQuery = exports.GetArPlayersDocument = exports.useVerifyRandomDrawingInfosLazyQuery = exports.useVerifyRandomDrawingInfosQuery = exports.VerifyRandomDrawingInfosDocument = exports.useDeleteQuizzQuestionMutation = exports.DeleteQuizzQuestionDocument = exports.useUpdateQuizzQuestionMutation = exports.UpdateQuizzQuestionDocument = void 0;
exports.PlayArDocument = exports.useGetInfosToPlayArLazyQuery = exports.useGetInfosToPlayArQuery = exports.GetInfosToPlayArDocument = exports.useGetGamePlayedCountLazyQuery = exports.useGetGamePlayedCountQuery = exports.GetGamePlayedCountDocument = exports.useGetGameFrequencyLazyQuery = exports.useGetGameFrequencyQuery = exports.GetGameFrequencyDocument = exports.useGetGainsWonLazyQuery = exports.useGetGainsWonQuery = exports.GetGainsWonDocument = exports.useValidateGainMutation = exports.ValidateGainDocument = exports.useUpsertAddressMutation = exports.UpsertAddressDocument = exports.useUpsertUserMutation = exports.UpsertUserDocument = exports.useInsertUserMutation = exports.InsertUserDocument = exports.useGetUsersByAppleIdLazyQuery = exports.useGetUsersByAppleIdQuery = exports.GetUsersByAppleIdDocument = exports.useGetUsersByEmailLazyQuery = exports.useGetUsersByEmailQuery = exports.GetUsersByEmailDocument = exports.useResetPasswordMutation = exports.ResetPasswordDocument = exports.useInsertClientPasswordForgottenTokenMutation = exports.InsertClientPasswordForgottenTokenDocument = exports.useInsertClientMutation = exports.InsertClientDocument = exports.useGetClientsByEmailLazyQuery = exports.useGetClientsByEmailQuery = exports.GetClientsByEmailDocument = exports.useDeleteVoteSelectionMutation = exports.DeleteVoteSelectionDocument = exports.useUpdateVoteSelectionMutation = exports.UpdateVoteSelectionDocument = exports.useInsertVoteSelectionMutation = exports.InsertVoteSelectionDocument = exports.useGetVoteSpecificsLazyQuery = exports.useGetVoteSpecificsQuery = exports.GetVoteSpecificsDocument = exports.useInsertVoteMutation = exports.InsertVoteDocument = exports.useGetVoteResultsLazyQuery = exports.useGetVoteResultsQuery = exports.GetVoteResultsDocument = void 0;
exports.useGetPrivatesDeckByUserQuery = exports.GetPrivatesDeckByUserDocument = exports.useInsertPrivateDeckM2mUserMutation = exports.InsertPrivateDeckM2mUserDocument = exports.useGetPrivateDeckByCodeLazyQuery = exports.useGetPrivateDeckByCodeQuery = exports.GetPrivateDeckByCodeDocument = exports.useGetTestGamesLazyQuery = exports.useGetTestGamesQuery = exports.GetTestGamesDocument = exports.useGetNearbyGamesLazyQuery = exports.useGetNearbyGamesQuery = exports.GetNearbyGamesDocument = exports.useGetNearbyCommunicationsLazyQuery = exports.useGetNearbyCommunicationsQuery = exports.GetNearbyCommunicationsDocument = exports.useGetNearbyPrivateDeckCardsLazyQuery = exports.useGetNearbyPrivateDeckCardsQuery = exports.GetNearbyPrivateDeckCardsDocument = exports.useGetNearbyCardsLazyQuery = exports.useGetNearbyCardsQuery = exports.GetNearbyCardsDocument = exports.useGetTemplateByIdLazyQuery = exports.useGetTemplateByIdQuery = exports.GetTemplateByIdDocument = exports.usePlayGoodieMutation = exports.PlayGoodieDocument = exports.useGetGoodieAnimationsLazyQuery = exports.useGetGoodieAnimationsQuery = exports.GetGoodieAnimationsDocument = exports.useGetGoodiesLazyQuery = exports.useGetGoodiesQuery = exports.GetGoodiesDocument = exports.useGetVoteByIdLazyQuery = exports.useGetVoteByIdQuery = exports.GetVoteByIdDocument = exports.usePlayVoteMutation = exports.PlayVoteDocument = exports.useGetInfosToPlayVoteLazyQuery = exports.useGetInfosToPlayVoteQuery = exports.GetInfosToPlayVoteDocument = exports.useGetQuizzByIdLazyQuery = exports.useGetQuizzByIdQuery = exports.GetQuizzByIdDocument = exports.usePlayQuizzMutation = exports.PlayQuizzDocument = exports.useGetInfosToPlayQuizzLazyQuery = exports.useGetInfosToPlayQuizzQuery = exports.GetInfosToPlayQuizzDocument = exports.usePlayArMutation = void 0;
exports.useGetStripeCustomerPaymentMethodsLazyQuery = exports.useGetStripeCustomerPaymentMethodsQuery = exports.GetStripeCustomerPaymentMethodsDocument = exports.useCreateStripeIntentMutation = exports.CreateStripeIntentDocument = exports.useCreateStripeCustomerMutation = exports.CreateStripeCustomerDocument = exports.useUpdateUserMutation = exports.UpdateUserDocument = exports.useGetUserByIdLazyQuery = exports.useGetUserByIdQuery = exports.GetUserByIdDocument = exports.useGetPrivatesDeckByUserLazyQuery = void 0;
const client_1 = require("@apollo/client");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
exports.GameTypeFragmentDoc = client_1.gql `
  fragment GameType on games_types {
    id
    name
    description
    price
    color
    acronym
    radius_price_range
    participations_price_range
    trackers_price_range
  }
`;
exports.AssetFragmentDoc = client_1.gql `
  fragment Asset on assets {
    id
    type
    path
    name
    client_id
    user_id
    scaleX
    scaleY
    scaleZ
    resources
  }
`;
exports.TemplateFragmentDoc = client_1.gql `
  fragment Template on templates {
    id
    name
    design
    html
    created_at
    updated_at
    client_id
    is_active
  }
`;
exports.GainFragmentDoc = client_1.gql `
  fragment Gain on gains {
    id
    is_active
    is_virtual
    name
    description
    stock
    image {
      ...Asset
    }
    client_id
    gtc
    instructions
    created_at
    template_id
    template {
      ...Template
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.TemplateFragmentDoc}
`;
exports.GamesGainsFragmentDoc = client_1.gql `
  fragment GamesGains on games_gains {
    game_id
    gain_id
    stock
    stock_won
    is_active
    probability
    gain {
      ...Gain
    }
  }
  ${exports.GainFragmentDoc}
`;
exports.TrackerFragmentDoc = client_1.gql `
  fragment Tracker on ar_trackers {
    id
    name
    width
    height
    image {
      ...Asset
    }
    qrcode_inside
  }
  ${exports.AssetFragmentDoc}
`;
exports.AnimationFragmentDoc = client_1.gql `
  fragment Animation on animations {
    id
    name
    assets {
      asset {
        ...Asset
      }
      when_won
    }
    tracker {
      ...Tracker
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.TrackerFragmentDoc}
`;
exports.ArM2MAnimationFragmentDoc = client_1.gql `
  fragment ArM2MAnimation on ar_m2m_animations {
    ar_id
    animation_id
    animation {
      ...Animation
    }
  }
  ${exports.AnimationFragmentDoc}
`;
exports.ArSpecificsFragmentDoc = client_1.gql `
  fragment ARSpecifics on ar {
    animations {
      ...ArM2MAnimation
    }
  }
  ${exports.ArM2MAnimationFragmentDoc}
`;
exports.ArFragmentDoc = client_1.gql `
  fragment AR on ar {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    description
    gtc
    instructions
    address
    radius
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    frequency
    max_participations
    created_at
    type_id
    location
    city
    keep_cumulated_probability
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
    ...ARSpecifics
  }
  ${exports.GameTypeFragmentDoc}
  ${exports.GamesGainsFragmentDoc}
  ${exports.ArSpecificsFragmentDoc}
`;
exports.AnimationM2MAssetFragmentDoc = client_1.gql `
  fragment AnimationM2MAsset on animations_m2m_assets {
    animation_id
    asset_id
    when_won
  }
`;
exports.AssetResourcesFragmentDoc = client_1.gql `
  fragment AssetResources on assets {
    id
    resources
  }
`;
exports.ClientDisplayFragmentDoc = client_1.gql `
  fragment ClientDisplay on clients {
    id
    created_at
    email
    name
    first_name
    phone
    address_id
    stripe_customer_id
    company
    vat_id
    address {
      address
      city
      zipcode
      country
    }
    discount
    role
    is_active
    reseller_id
    reseller {
      email
      name
      first_name
    }
    picture {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.CommunicationTypeFragmentDoc = client_1.gql `
  fragment CommunicationType on communications_types {
    id
    name
    color
    acronym
    radius_price_range
    price
  }
`;
exports.EstimateM2mEntityFragmentDoc = client_1.gql `
  fragment EstimateM2mEntity on estimates_m2m_entities {
    id
    name
    estimate_id
    entity_id
    radius
    trackers
    games_types {
      ...GameType
    }
    communications_types {
      ...CommunicationType
    }
  }
  ${exports.GameTypeFragmentDoc}
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.EstimateFragmentDoc = client_1.gql `
  fragment Estimate on estimates {
    id
    name
    date_start
    date_end
    status
    participations_credits
    created_at
    updated_at
    client_id
    is_archive
    estimates_m2m_entities {
      ...EstimateM2mEntity
    }
  }
  ${exports.EstimateM2mEntityFragmentDoc}
`;
exports.GainVirtualFragmentDoc = client_1.gql `
  fragment GainVirtual on gains_virtuals {
    id
    format
    value
    gain_id
  }
`;
exports.GamesPlayedParticipationsByDayFragmentDoc = client_1.gql `
  fragment GamesPlayedParticipationsByDay on games_played_participations_by_day {
    date
    total_count
    game_id
    client_id
    name
  }
`;
exports.GamesPlayedParticipationsByCurrentDayHoursFragmentDoc = client_1.gql `
  fragment GamesPlayedParticipationsByCurrentDayHours on games_played_participations_by_current_day_hours {
    date
    total_count
    game_id
    client_id
    name
  }
`;
exports.GamesPlayedGainsByDayFragmentDoc = client_1.gql `
  fragment GamesPlayedGainsByDay on games_played_gains_by_day {
    date
    total_count
    game_id
    client_id
    name
    gain_id
  }
`;
exports.GamesPlayedGainsByCurrentDayHoursFragmentDoc = client_1.gql `
  fragment GamesPlayedGainsByCurrentDayHours on games_played_gains_by_current_day_hours {
    date
    total_count
    game_id
    client_id
    name
    gain_id
  }
`;
exports.InfoFragmentDoc = client_1.gql `
  fragment Info on infos {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    address
    created_at
    type_id
    location
    city
    html
    design
    type {
      ...CommunicationType
    }
  }
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.InfoSpecificsFragmentDoc = client_1.gql `
  fragment InfoSpecifics on infos {
    html
    design
    template_id
    template {
      id
      name
      html
    }
  }
`;
exports.PhotoFragmentDoc = client_1.gql `
  fragment Photo on photos {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    address
    created_at
    type_id
    location
    type {
      ...CommunicationType
    }
    foreground {
      ...Asset
    }
  }
  ${exports.CommunicationTypeFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.PhotoSpecificsFragmentDoc = client_1.gql `
  fragment PhotoSpecifics on photos {
    id
    foreground_id
    foreground {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.GameMinimalInfosFragmentDoc = client_1.gql `
  fragment GameMinimalInfos on games {
    id
    name
    client_id
    is_private
    type {
      name
    }
  }
`;
exports.CommunnicationMinimalInfosFragmentDoc = client_1.gql `
  fragment CommunnicationMinimalInfos on communications {
    id
    name
    client_id
    is_private
    type {
      name
    }
  }
`;
exports.PrivateDeckM2mEntitiesFragmentDoc = client_1.gql `
  fragment PrivateDeckM2mEntities on privates_decks_m2m_entities {
    __typename
    private_deck
    entity_id
    game {
      __typename
      ...GameMinimalInfos
    }
    communication {
      __typename
      ...CommunnicationMinimalInfos
    }
  }
  ${exports.GameMinimalInfosFragmentDoc}
  ${exports.CommunnicationMinimalInfosFragmentDoc}
`;
exports.PrivateDeckFragmentDoc = client_1.gql `
  fragment PrivateDeck on privates_decks {
    id
    name
    description
    code
    date_start
    date_end
    is_active
    is_archive
    client_id
    created_at
    privates_decks_m2m_entities {
      ...PrivateDeckM2mEntities
    }
  }
  ${exports.PrivateDeckM2mEntitiesFragmentDoc}
`;
exports.RandomDrawingFragmentDoc = client_1.gql `
  fragment RandomDrawing on random_drawings {
    __typename
    id
    created_at
    game_id
    gain {
      __typename
      id
      name
      stock
    }
    winner {
      __typename
      id
      name
      first_name
    }
  }
`;
exports.SurveyQuestionAnswersFragmentDoc = client_1.gql `
  fragment SurveyQuestionAnswers on surveys_questions_answers {
    id
    answer
  }
`;
exports.SurveyQuestionsFragmentDoc = client_1.gql `
  fragment SurveyQuestions on surveys_questions {
    id
    survey_id
    question
    asset_id
    asset {
      ...Asset
    }
    surveys_questions_answers {
      ...SurveyQuestionAnswers
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.SurveyQuestionAnswersFragmentDoc}
`;
exports.SurveyFragmentDoc = client_1.gql `
  fragment Survey on surveys {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    address
    created_at
    type_id
    location
    city
    type {
      ...CommunicationType
    }
    surveys_questions {
      ...SurveyQuestions
    }
  }
  ${exports.CommunicationTypeFragmentDoc}
  ${exports.SurveyQuestionsFragmentDoc}
`;
exports.AddressFragmentDoc = client_1.gql `
  fragment Address on addresses {
    address
    city
    zipcode
    country
  }
`;
exports.GainWonFragmentDoc = client_1.gql `
  fragment GainWon on gains {
    __typename
    id
    name
    description
    image {
      __typename
      ...Asset
    }
    instructions
    is_virtual
    gains_virtuals {
      __typename
      format
      id
      value
    }
    gtc
    client {
      __typename
      picture {
        __typename
        ...Asset
      }
    }
    template_id
  }
  ${exports.AssetFragmentDoc}
`;
exports.GamePlayedFragmentDoc = client_1.gql `
  fragment GamePlayed on games_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
  ${exports.GainWonFragmentDoc}
`;
exports.GameWonFragmentDoc = client_1.gql `
  fragment GameWon on games_played {
    id
    played_at
    gain {
      ...GainWon
    }
    gain_validated
    game {
      name
      valorization
    }
  }
  ${exports.GainWonFragmentDoc}
`;
exports.GamesGainsAvailableFragmentDoc = client_1.gql `
  fragment GamesGainsAvailable on games_gains_available {
    gain_id
    probability
    stock
    stock_won
  }
`;
exports.InfosToPlayArFragmentDoc = client_1.gql `
  fragment InfosToPlayAr on ar {
    id
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    keep_cumulated_probability
    games_gains_available(order_by: { probability: asc }) {
      ...GamesGainsAvailable
    }
  }
  ${exports.GamesGainsAvailableFragmentDoc}
`;
exports.ArPlayedFragmentDoc = client_1.gql `
  fragment ArPlayed on ar_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
  ${exports.GainWonFragmentDoc}
`;
exports.QuizzQuestionAnswersFragmentDoc = client_1.gql `
  fragment QuizzQuestionAnswers on quizz_questions_answers {
    id
    answer
    is_correct
    points
  }
`;
exports.QuizzQuestionsFragmentDoc = client_1.gql `
  fragment QuizzQuestions on quizz_questions {
    id
    quizz_id
    question
    asset_id
    time
    total_points
    asset {
      ...Asset
    }
    quizz_questions_answers {
      ...QuizzQuestionAnswers
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.QuizzQuestionAnswersFragmentDoc}
`;
exports.InfosToPlayQuizzFragmentDoc = client_1.gql `
  fragment InfosToPlayQuizz on quizz {
    id
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    keep_cumulated_probability
    winning_percentage
    quizz_questions {
      ...QuizzQuestions
    }
    games_gains_available(order_by: { probability: asc }) {
      ...GamesGainsAvailable
    }
  }
  ${exports.QuizzQuestionsFragmentDoc}
  ${exports.GamesGainsAvailableFragmentDoc}
`;
exports.QuizzPlayedFragmentDoc = client_1.gql `
  fragment QuizzPlayed on quizz_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
  ${exports.GainWonFragmentDoc}
`;
exports.QuizzFragmentDoc = client_1.gql `
  fragment Quizz on quizz {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    description
    gtc
    instructions
    address
    radius
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    frequency
    max_participations
    created_at
    type_id
    location
    city
    keep_cumulated_probability
    winning_percentage
    ordered_questions
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
    quizz_questions {
      ...QuizzQuestions
    }
  }
  ${exports.GameTypeFragmentDoc}
  ${exports.GamesGainsFragmentDoc}
  ${exports.QuizzQuestionsFragmentDoc}
`;
exports.QuizzClientFragmentDoc = client_1.gql `
  fragment QuizzClient on quizz {
    ...Quizz
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
  ${exports.QuizzFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.VoteSelectionChoiceFragmentDoc = client_1.gql `
  fragment VoteSelectionChoice on votes_selections_choices {
    id
    label
    vote_selection_id
    asset {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.VoteSelectionFragmentDoc = client_1.gql `
  fragment VoteSelection on votes_selections {
    id
    vote_id
    selection
    required_choices
    votes_selections_choices {
      ...VoteSelectionChoice
    }
  }
  ${exports.VoteSelectionChoiceFragmentDoc}
`;
exports.VoteFragmentDoc = client_1.gql `
  fragment Vote on votes {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    description
    gtc
    instructions
    address
    radius
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    frequency
    max_participations
    created_at
    type_id
    location
    city
    keep_cumulated_probability
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
    votes_selections {
      ...VoteSelection
    }
  }
  ${exports.GameTypeFragmentDoc}
  ${exports.GamesGainsFragmentDoc}
  ${exports.VoteSelectionFragmentDoc}
`;
exports.VoteClientFragmentDoc = client_1.gql `
  fragment VoteClient on votes {
    ...Vote
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
  ${exports.VoteFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.InfosToPlayVoteFragmentDoc = client_1.gql `
  fragment InfosToPlayVote on votes {
    id
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    keep_cumulated_probability
    games_gains_available(order_by: { probability: asc }) {
      ...GamesGainsAvailable
    }
  }
  ${exports.GamesGainsAvailableFragmentDoc}
`;
exports.VotePlayedFragmentDoc = client_1.gql `
  fragment VotePlayed on votes_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
  ${exports.GainWonFragmentDoc}
`;
exports.GoodieFragmentDoc = client_1.gql `
  fragment Goodie on goodies {
    id
    name
    created_at
    client_id
    date_start
    date_end
    is_active
    description
    image {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.GoodieM2MAnimationFragmentDoc = client_1.gql `
  fragment GoodieM2MAnimation on goodies_m2m_animations {
    goodie_id
    animation_id
    animation {
      ...Animation
    }
  }
  ${exports.AnimationFragmentDoc}
`;
exports.GoodiePlayedFragmentDoc = client_1.gql `
  fragment GoodiePlayed on goodies_played {
    id
    goodie_id
    user_id
    played_at
    goodie {
      animations {
        animation {
          ...Animation
        }
      }
    }
  }
  ${exports.AnimationFragmentDoc}
`;
exports.NearbyGameCardFragmentDoc = client_1.gql `
  fragment NearbyGameCard on nearby_games {
    id
    name
    date_start
    date_end
    is_active
    client_id
    description
    gtc
    instructions
    address
    radius
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    frequency
    max_participations
    created_at
    type_id
    location
    city
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
    distance
    is_test
    client {
      id
      name
      company
      picture {
        ...Asset
      }
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.GameTypeFragmentDoc}
  ${exports.GamesGainsFragmentDoc}
`;
exports.NearbyCommunicationCardFragmentDoc = client_1.gql `
  fragment NearbyCommunicationCard on nearby_communications {
    id
    name
    date_start
    date_end
    is_active
    client_id
    address
    created_at
    type_id
    location
    city
    description
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...CommunicationType
    }
    distance
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.CommunicationFragmentDoc = client_1.gql `
  fragment Communication on communications {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    address
    created_at
    type_id
    location
    city
    description
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...CommunicationType
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.CommunicationTypeFragmentDoc}
`;
exports.NearbyCommunicationFragmentDoc = client_1.gql `
  fragment NearbyCommunication on communications {
    ...Communication
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
  ${exports.CommunicationFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.GameFragmentDoc = client_1.gql `
  fragment Game on games {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    description
    gtc
    instructions
    address
    radius
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    valorization
    frequency
    max_participations
    created_at
    type_id
    location
    city
    keep_cumulated_probability
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
  }
  ${exports.AssetFragmentDoc}
  ${exports.GameTypeFragmentDoc}
  ${exports.GamesGainsFragmentDoc}
`;
exports.NearbyGameFragmentDoc = client_1.gql `
  fragment NearbyGame on games {
    ...Game
    is_test
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
  ${exports.GameFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
exports.PrivateDeckDisplayFragmentDoc = client_1.gql `
  fragment PrivateDeckDisplay on privates_decks {
    id
    name
    description
    code
    date_start
    date_end
    is_active
  }
`;
exports.PrivateDeckM2mUserFragmentDoc = client_1.gql `
  fragment PrivateDeckM2mUser on privates_decks_m2m_users {
    private_deck_id
    user_id
    private_deck {
      ...PrivateDeckDisplay
    }
  }
  ${exports.PrivateDeckDisplayFragmentDoc}
`;
exports.RandomDrawingWonFragmentDoc = client_1.gql `
  fragment RandomDrawingWon on random_drawings {
    __typename
    id
    created_at
    game_id
    gain {
      ...GainWon
    }
    gain_validated
  }
  ${exports.GainWonFragmentDoc}
`;
exports.UserDisplayFragmentDoc = client_1.gql `
  fragment UserDisplay on users {
    id
    created_at
    email
    name
    first_name
    birthdate
    address_id
    address {
      address
      city
      zipcode
      country
    }
    is_active
    is_tester
    picture_id
    picture {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
exports.GetArDocument = client_1.gql `
  query getAr($id: uuid!) {
    ar_by_pk(id: $id) {
      ...AR
    }
  }
  ${exports.ArFragmentDoc}
`;
/**
 * __useGetArQuery__
 *
 * To run a query within a React component, call `useGetArQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetArQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetArDocument, options);
}
exports.useGetArQuery = useGetArQuery;
function useGetArLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetArDocument, options);
}
exports.useGetArLazyQuery = useGetArLazyQuery;
exports.GetArSpecificsDocument = client_1.gql `
  query getArSpecifics($id: uuid!) {
    ar_by_pk(id: $id) {
      id
      ...ARSpecifics
    }
  }
  ${exports.ArSpecificsFragmentDoc}
`;
/**
 * __useGetArSpecificsQuery__
 *
 * To run a query within a React component, call `useGetArSpecificsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArSpecificsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArSpecificsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetArSpecificsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetArSpecificsDocument, options);
}
exports.useGetArSpecificsQuery = useGetArSpecificsQuery;
function useGetArSpecificsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetArSpecificsDocument, options);
}
exports.useGetArSpecificsLazyQuery = useGetArSpecificsLazyQuery;
exports.InsertArDocument = client_1.gql `
  mutation insertAr($ar: ar_insert_input!) {
    insert_ar_one(object: $ar) {
      ...AR
    }
  }
  ${exports.ArFragmentDoc}
`;
/**
 * __useInsertArMutation__
 *
 * To run a mutation, you first call `useInsertArMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertArMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertArMutation, { data, loading, error }] = useInsertArMutation({
 *   variables: {
 *      ar: // value for 'ar'
 *   },
 * });
 */
function useInsertArMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertArDocument, options);
}
exports.useInsertArMutation = useInsertArMutation;
exports.UpdateAnimationDocument = client_1.gql `
  mutation updateAnimation($id: uuid!, $updates: animations_set_input!) {
    update_animations_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Animation
    }
  }
  ${exports.AnimationFragmentDoc}
`;
/**
 * __useUpdateAnimationMutation__
 *
 * To run a mutation, you first call `useUpdateAnimationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnimationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnimationMutation, { data, loading, error }] = useUpdateAnimationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *   },
 * });
 */
function useUpdateAnimationMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateAnimationDocument, options);
}
exports.useUpdateAnimationMutation = useUpdateAnimationMutation;
exports.InsertArM2mAnimationsDocument = client_1.gql `
  mutation insertArM2mAnimations(
    $ar_id: uuid!
    $animation: animations_obj_rel_insert_input!
  ) {
    insert_ar_m2m_animations_one(
      object: { ar_id: $ar_id, animation: $animation }
    ) {
      ...ArM2MAnimation
    }
  }
  ${exports.ArM2MAnimationFragmentDoc}
`;
/**
 * __useInsertArM2mAnimationsMutation__
 *
 * To run a mutation, you first call `useInsertArM2mAnimationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertArM2mAnimationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertArM2mAnimationsMutation, { data, loading, error }] = useInsertArM2mAnimationsMutation({
 *   variables: {
 *      ar_id: // value for 'ar_id'
 *      animation: // value for 'animation'
 *   },
 * });
 */
function useInsertArM2mAnimationsMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertArM2mAnimationsDocument, options);
}
exports.useInsertArM2mAnimationsMutation = useInsertArM2mAnimationsMutation;
exports.DeleteArM2mAnimationsDocument = client_1.gql `
  mutation DeleteArM2mAnimations($animation_id: uuid!, $ar_id: uuid!) {
    delete_ar_m2m_animations_by_pk(animation_id: $animation_id, ar_id: $ar_id) {
      ar_id
      animation_id
    }
  }
`;
/**
 * __useDeleteArM2mAnimationsMutation__
 *
 * To run a mutation, you first call `useDeleteArM2mAnimationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArM2mAnimationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArM2mAnimationsMutation, { data, loading, error }] = useDeleteArM2mAnimationsMutation({
 *   variables: {
 *      animation_id: // value for 'animation_id'
 *      ar_id: // value for 'ar_id'
 *   },
 * });
 */
function useDeleteArM2mAnimationsMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.DeleteArM2mAnimationsDocument, options);
}
exports.useDeleteArM2mAnimationsMutation = useDeleteArM2mAnimationsMutation;
exports.InsertAnimationsM2mAssetsDocument = client_1.gql `
  mutation insertAnimationsM2mAssets(
    $objects: [animations_m2m_assets_insert_input!]!
  ) {
    insert_animations_m2m_assets(objects: $objects) {
      returning {
        ...AnimationM2MAsset
      }
    }
  }
  ${exports.AnimationM2MAssetFragmentDoc}
`;
/**
 * __useInsertAnimationsM2mAssetsMutation__
 *
 * To run a mutation, you first call `useInsertAnimationsM2mAssetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAnimationsM2mAssetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAnimationsM2mAssetsMutation, { data, loading, error }] = useInsertAnimationsM2mAssetsMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
function useInsertAnimationsM2mAssetsMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertAnimationsM2mAssetsDocument, options);
}
exports.useInsertAnimationsM2mAssetsMutation = useInsertAnimationsM2mAssetsMutation;
exports.UpdateAnimationsM2mAssetsDocument = client_1.gql `
  mutation updateAnimationsM2mAssets(
    $animation_id: uuid!
    $asset_id: uuid!
    $when_won: Boolean!
  ) {
    update_animations_m2m_assets_by_pk(
      pk_columns: { animation_id: $animation_id, asset_id: $asset_id }
      _set: { when_won: $when_won }
    ) {
      ...AnimationM2MAsset
    }
  }
  ${exports.AnimationM2MAssetFragmentDoc}
`;
/**
 * __useUpdateAnimationsM2mAssetsMutation__
 *
 * To run a mutation, you first call `useUpdateAnimationsM2mAssetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnimationsM2mAssetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnimationsM2mAssetsMutation, { data, loading, error }] = useUpdateAnimationsM2mAssetsMutation({
 *   variables: {
 *      animation_id: // value for 'animation_id'
 *      asset_id: // value for 'asset_id'
 *      when_won: // value for 'when_won'
 *   },
 * });
 */
function useUpdateAnimationsM2mAssetsMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateAnimationsM2mAssetsDocument, options);
}
exports.useUpdateAnimationsM2mAssetsMutation = useUpdateAnimationsM2mAssetsMutation;
exports.DeleteAnimationsM2mAssetsDocument = client_1.gql `
  mutation deleteAnimationsM2mAssets($animation_id: uuid!, $asset_id: uuid!) {
    delete_animations_m2m_assets_by_pk(
      animation_id: $animation_id
      asset_id: $asset_id
    ) {
      animation_id
      asset_id
    }
  }
`;
/**
 * __useDeleteAnimationsM2mAssetsMutation__
 *
 * To run a mutation, you first call `useDeleteAnimationsM2mAssetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnimationsM2mAssetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnimationsM2mAssetsMutation, { data, loading, error }] = useDeleteAnimationsM2mAssetsMutation({
 *   variables: {
 *      animation_id: // value for 'animation_id'
 *      asset_id: // value for 'asset_id'
 *   },
 * });
 */
function useDeleteAnimationsM2mAssetsMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.DeleteAnimationsM2mAssetsDocument, options);
}
exports.useDeleteAnimationsM2mAssetsMutation = useDeleteAnimationsM2mAssetsMutation;
exports.GetAssetByIdDocument = client_1.gql `
  query getAssetById($id: uuid!) {
    assets_by_pk(id: $id) {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
/**
 * __useGetAssetByIdQuery__
 *
 * To run a query within a React component, call `useGetAssetByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssetByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssetByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetAssetByIdQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetAssetByIdDocument, options);
}
exports.useGetAssetByIdQuery = useGetAssetByIdQuery;
function useGetAssetByIdLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetAssetByIdDocument, options);
}
exports.useGetAssetByIdLazyQuery = useGetAssetByIdLazyQuery;
exports.GetAssetByPathDocument = client_1.gql `
  query getAssetByPath($clientId: uuid!, $path: String!) {
    assets(where: { client_id: { _eq: $clientId }, path: { _eq: $path } }) {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
/**
 * __useGetAssetByPathQuery__
 *
 * To run a query within a React component, call `useGetAssetByPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssetByPathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssetByPathQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *      path: // value for 'path'
 *   },
 * });
 */
function useGetAssetByPathQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetAssetByPathDocument, options);
}
exports.useGetAssetByPathQuery = useGetAssetByPathQuery;
function useGetAssetByPathLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetAssetByPathDocument, options);
}
exports.useGetAssetByPathLazyQuery = useGetAssetByPathLazyQuery;
exports.GetAssetsDocument = client_1.gql `
  query getAssets($type: assets_types_enum, $clientId: uuid) {
    assets(
      order_by: { name: asc }
      where: {
        type: { _eq: $type }
        _or: [
          { client_id: { _eq: $clientId } }
          { client_id: { _is_null: true }, user_id: { _is_null: true } }
        ]
      }
    ) {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
/**
 * __useGetAssetsQuery__
 *
 * To run a query within a React component, call `useGetAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssetsQuery({
 *   variables: {
 *      type: // value for 'type'
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetAssetsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetAssetsDocument, options);
}
exports.useGetAssetsQuery = useGetAssetsQuery;
function useGetAssetsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetAssetsDocument, options);
}
exports.useGetAssetsLazyQuery = useGetAssetsLazyQuery;
exports.InsertAssetDocument = client_1.gql `
  mutation insertAsset($object: assets_insert_input!) {
    insert_assets_one(object: $object) {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
/**
 * __useInsertAssetMutation__
 *
 * To run a mutation, you first call `useInsertAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAssetMutation, { data, loading, error }] = useInsertAssetMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
function useInsertAssetMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertAssetDocument, options);
}
exports.useInsertAssetMutation = useInsertAssetMutation;
exports.UpdateAssetDocument = client_1.gql `
  mutation updateAsset($id: uuid!, $updates: assets_set_input!) {
    update_assets_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Asset
    }
  }
  ${exports.AssetFragmentDoc}
`;
/**
 * __useUpdateAssetMutation__
 *
 * To run a mutation, you first call `useUpdateAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssetMutation, { data, loading, error }] = useUpdateAssetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *   },
 * });
 */
function useUpdateAssetMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateAssetDocument, options);
}
exports.useUpdateAssetMutation = useUpdateAssetMutation;
exports.AddResourceToAssetDocument = client_1.gql `
  mutation addResourceToAsset($id: uuid!, $resource: jsonb!) {
    update_assets_by_pk(
      pk_columns: { id: $id }
      _append: { resources: $resource }
    ) {
      __typename
      ...AssetResources
    }
  }
  ${exports.AssetResourcesFragmentDoc}
`;
/**
 * __useAddResourceToAssetMutation__
 *
 * To run a mutation, you first call `useAddResourceToAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddResourceToAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addResourceToAssetMutation, { data, loading, error }] = useAddResourceToAssetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      resource: // value for 'resource'
 *   },
 * });
 */
function useAddResourceToAssetMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.AddResourceToAssetDocument, options);
}
exports.useAddResourceToAssetMutation = useAddResourceToAssetMutation;
exports.DeleteResourceFromAssetDocument = client_1.gql `
  mutation deleteResourceFromAsset($id: uuid!, $resource: String!) {
    update_assets_by_pk(
      pk_columns: { id: $id }
      _delete_key: { resources: $resource }
    ) {
      __typename
      ...AssetResources
    }
  }
  ${exports.AssetResourcesFragmentDoc}
`;
/**
 * __useDeleteResourceFromAssetMutation__
 *
 * To run a mutation, you first call `useDeleteResourceFromAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteResourceFromAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteResourceFromAssetMutation, { data, loading, error }] = useDeleteResourceFromAssetMutation({
 *   variables: {
 *      id: // value for 'id'
 *      resource: // value for 'resource'
 *   },
 * });
 */
function useDeleteResourceFromAssetMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.DeleteResourceFromAssetDocument, options);
}
exports.useDeleteResourceFromAssetMutation = useDeleteResourceFromAssetMutation;
exports.GetClientsDocument = client_1.gql `
  query getClients($withDiscount: Boolean = false) {
    clients(order_by: { is_active: desc, name: asc, first_name: asc }) {
      ...ClientDisplay
    }
  }
  ${exports.ClientDisplayFragmentDoc}
`;
/**
 * __useGetClientsQuery__
 *
 * To run a query within a React component, call `useGetClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientsQuery({
 *   variables: {
 *      withDiscount: // value for 'withDiscount'
 *   },
 * });
 */
function useGetClientsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetClientsDocument, options);
}
exports.useGetClientsQuery = useGetClientsQuery;
function useGetClientsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetClientsDocument, options);
}
exports.useGetClientsLazyQuery = useGetClientsLazyQuery;
exports.GetClientByIdDocument = client_1.gql `
  query getClientById($id: uuid!) {
    clients_by_pk(id: $id) {
      ...ClientDisplay
    }
  }
  ${exports.ClientDisplayFragmentDoc}
`;
/**
 * __useGetClientByIdQuery__
 *
 * To run a query within a React component, call `useGetClientByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetClientByIdQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetClientByIdDocument, options);
}
exports.useGetClientByIdQuery = useGetClientByIdQuery;
function useGetClientByIdLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetClientByIdDocument, options);
}
exports.useGetClientByIdLazyQuery = useGetClientByIdLazyQuery;
exports.UpdateClientIsActiveDocument = client_1.gql `
  mutation updateClientIsActive($id: uuid!, $isActive: Boolean!) {
    __typename
    update_clients_by_pk(
      pk_columns: { id: $id }
      _set: { is_active: $isActive }
    ) {
      __typename
      id
      is_active
    }
  }
`;
/**
 * __useUpdateClientIsActiveMutation__
 *
 * To run a mutation, you first call `useUpdateClientIsActiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientIsActiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientIsActiveMutation, { data, loading, error }] = useUpdateClientIsActiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isActive: // value for 'isActive'
 *   },
 * });
 */
function useUpdateClientIsActiveMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateClientIsActiveDocument, options);
}
exports.useUpdateClientIsActiveMutation = useUpdateClientIsActiveMutation;
exports.UpdateClientDocument = client_1.gql `
  mutation updateClient($clientId: uuid!, $client: clients_set_input) {
    update_clients_by_pk(pk_columns: { id: $clientId }, _set: $client) {
      __typename
      ...ClientDisplay
    }
  }
  ${exports.ClientDisplayFragmentDoc}
`;
/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      clientId: // value for 'clientId'
 *      client: // value for 'client'
 *   },
 * });
 */
function useUpdateClientMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateClientDocument, options);
}
exports.useUpdateClientMutation = useUpdateClientMutation;
exports.GetCommunicationsTypesDocument = client_1.gql `
  query getCommunicationsTypes {
    communications_types(order_by: { name: asc }) {
      ...CommunicationType
    }
  }
  ${exports.CommunicationTypeFragmentDoc}
`;
/**
 * __useGetCommunicationsTypesQuery__
 *
 * To run a query within a React component, call `useGetCommunicationsTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunicationsTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunicationsTypesQuery({
 *   variables: {
 *   },
 * });
 */
function useGetCommunicationsTypesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetCommunicationsTypesDocument, options);
}
exports.useGetCommunicationsTypesQuery = useGetCommunicationsTypesQuery;
function useGetCommunicationsTypesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetCommunicationsTypesDocument, options);
}
exports.useGetCommunicationsTypesLazyQuery = useGetCommunicationsTypesLazyQuery;
exports.GetCommunicationTypeByIdDocument = client_1.gql `
  query getCommunicationTypeById($communicationTypeId: uuid!) {
    communications_types_by_pk(id: $communicationTypeId) {
      ...CommunicationType
    }
  }
  ${exports.CommunicationTypeFragmentDoc}
`;
/**
 * __useGetCommunicationTypeByIdQuery__
 *
 * To run a query within a React component, call `useGetCommunicationTypeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunicationTypeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunicationTypeByIdQuery({
 *   variables: {
 *      communicationTypeId: // value for 'communicationTypeId'
 *   },
 * });
 */
function useGetCommunicationTypeByIdQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetCommunicationTypeByIdDocument, options);
}
exports.useGetCommunicationTypeByIdQuery = useGetCommunicationTypeByIdQuery;
function useGetCommunicationTypeByIdLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetCommunicationTypeByIdDocument, options);
}
exports.useGetCommunicationTypeByIdLazyQuery = useGetCommunicationTypeByIdLazyQuery;
exports.GetCommunicationsByClientDocument = client_1.gql `
  query getCommunicationsByClient($clientId: uuid!) {
    communications(
      where: { client_id: { _eq: $clientId } }
      order_by: { created_at: desc }
    ) {
      ...Communication
    }
  }
  ${exports.CommunicationFragmentDoc}
`;
/**
 * __useGetCommunicationsByClientQuery__
 *
 * To run a query within a React component, call `useGetCommunicationsByClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunicationsByClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunicationsByClientQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetCommunicationsByClientQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetCommunicationsByClientDocument, options);
}
exports.useGetCommunicationsByClientQuery = useGetCommunicationsByClientQuery;
function useGetCommunicationsByClientLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetCommunicationsByClientDocument, options);
}
exports.useGetCommunicationsByClientLazyQuery = useGetCommunicationsByClientLazyQuery;
exports.GetCommunicationsByClientAndCommunicationTypeDocument = client_1.gql `
  query getCommunicationsByClientAndCommunicationType(
    $clientId: uuid!
    $communicationTypeId: uuid!
  ) {
    communications(
      where: {
        client_id: { _eq: $clientId }
        type_id: { _eq: $communicationTypeId }
        is_archive: { _neq: true }
      }
      order_by: { created_at: desc }
    ) {
      ...Communication
    }
  }
  ${exports.CommunicationFragmentDoc}
`;
/**
 * __useGetCommunicationsByClientAndCommunicationTypeQuery__
 *
 * To run a query within a React component, call `useGetCommunicationsByClientAndCommunicationTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunicationsByClientAndCommunicationTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunicationsByClientAndCommunicationTypeQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *      communicationTypeId: // value for 'communicationTypeId'
 *   },
 * });
 */
function useGetCommunicationsByClientAndCommunicationTypeQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetCommunicationsByClientAndCommunicationTypeDocument, options);
}
exports.useGetCommunicationsByClientAndCommunicationTypeQuery = useGetCommunicationsByClientAndCommunicationTypeQuery;
function useGetCommunicationsByClientAndCommunicationTypeLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetCommunicationsByClientAndCommunicationTypeDocument, options);
}
exports.useGetCommunicationsByClientAndCommunicationTypeLazyQuery = useGetCommunicationsByClientAndCommunicationTypeLazyQuery;
exports.InsertCommunicationDocument = client_1.gql `
  mutation insertCommunication($communication: communications_insert_input!) {
    insert_communications_one(object: $communication) {
      ...Communication
    }
  }
  ${exports.CommunicationFragmentDoc}
`;
/**
 * __useInsertCommunicationMutation__
 *
 * To run a mutation, you first call `useInsertCommunicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCommunicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCommunicationMutation, { data, loading, error }] = useInsertCommunicationMutation({
 *   variables: {
 *      communication: // value for 'communication'
 *   },
 * });
 */
function useInsertCommunicationMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertCommunicationDocument, options);
}
exports.useInsertCommunicationMutation = useInsertCommunicationMutation;
exports.UpdateCommunicationDocument = client_1.gql `
  mutation updateCommunication(
    $communicationId: uuid!
    $communication: communications_set_input!
  ) {
    __typename
    update_communications_by_pk(
      pk_columns: { id: $communicationId }
      _set: $communication
    ) {
      __typename
      ...Communication
    }
  }
  ${exports.CommunicationFragmentDoc}
`;
/**
 * __useUpdateCommunicationMutation__
 *
 * To run a mutation, you first call `useUpdateCommunicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommunicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommunicationMutation, { data, loading, error }] = useUpdateCommunicationMutation({
 *   variables: {
 *      communicationId: // value for 'communicationId'
 *      communication: // value for 'communication'
 *   },
 * });
 */
function useUpdateCommunicationMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateCommunicationDocument, options);
}
exports.useUpdateCommunicationMutation = useUpdateCommunicationMutation;
exports.ArchiveCommunicationDocument = client_1.gql `
  mutation archiveCommunication($communicationId: uuid!) {
    __typename
    update_communications_by_pk(
      pk_columns: { id: $communicationId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Communication
    }
  }
  ${exports.CommunicationFragmentDoc}
`;
/**
 * __useArchiveCommunicationMutation__
 *
 * To run a mutation, you first call `useArchiveCommunicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveCommunicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveCommunicationMutation, { data, loading, error }] = useArchiveCommunicationMutation({
 *   variables: {
 *      communicationId: // value for 'communicationId'
 *   },
 * });
 */
function useArchiveCommunicationMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.ArchiveCommunicationDocument, options);
}
exports.useArchiveCommunicationMutation = useArchiveCommunicationMutation;
exports.GetEstimatesByClientDocument = client_1.gql `
  query getEstimatesByClient($clientId: uuid!) {
    estimates(
      where: { client_id: { _eq: $clientId } }
      order_by: { created_at: desc }
    ) {
      ...Estimate
    }
  }
  ${exports.EstimateFragmentDoc}
`;
/**
 * __useGetEstimatesByClientQuery__
 *
 * To run a query within a React component, call `useGetEstimatesByClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEstimatesByClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEstimatesByClientQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetEstimatesByClientQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetEstimatesByClientDocument, options);
}
exports.useGetEstimatesByClientQuery = useGetEstimatesByClientQuery;
function useGetEstimatesByClientLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetEstimatesByClientDocument, options);
}
exports.useGetEstimatesByClientLazyQuery = useGetEstimatesByClientLazyQuery;
exports.InsertEstimateDocument = client_1.gql `
  mutation insertEstimate($estimate: estimates_insert_input!) {
    insert_estimates_one(object: $estimate) {
      ...Estimate
    }
  }
  ${exports.EstimateFragmentDoc}
`;
/**
 * __useInsertEstimateMutation__
 *
 * To run a mutation, you first call `useInsertEstimateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertEstimateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertEstimateMutation, { data, loading, error }] = useInsertEstimateMutation({
 *   variables: {
 *      estimate: // value for 'estimate'
 *   },
 * });
 */
function useInsertEstimateMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertEstimateDocument, options);
}
exports.useInsertEstimateMutation = useInsertEstimateMutation;
exports.UpdateEstimateDocument = client_1.gql `
  mutation updateEstimate($estimateId: uuid!, $estimate: estimates_set_input!) {
    update_estimates_by_pk(pk_columns: { id: $estimateId }, _set: $estimate) {
      ...Estimate
    }
  }
  ${exports.EstimateFragmentDoc}
`;
/**
 * __useUpdateEstimateMutation__
 *
 * To run a mutation, you first call `useUpdateEstimateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstimateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstimateMutation, { data, loading, error }] = useUpdateEstimateMutation({
 *   variables: {
 *      estimateId: // value for 'estimateId'
 *      estimate: // value for 'estimate'
 *   },
 * });
 */
function useUpdateEstimateMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateEstimateDocument, options);
}
exports.useUpdateEstimateMutation = useUpdateEstimateMutation;
exports.ArchiveEstimateDocument = client_1.gql `
  mutation archiveEstimate($estimateId: uuid!) {
    update_estimates_by_pk(
      pk_columns: { id: $estimateId }
      _set: { is_archive: true }
    ) {
      ...Estimate
    }
  }
  ${exports.EstimateFragmentDoc}
`;
/**
 * __useArchiveEstimateMutation__
 *
 * To run a mutation, you first call `useArchiveEstimateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveEstimateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveEstimateMutation, { data, loading, error }] = useArchiveEstimateMutation({
 *   variables: {
 *      estimateId: // value for 'estimateId'
 *   },
 * });
 */
function useArchiveEstimateMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.ArchiveEstimateDocument, options);
}
exports.useArchiveEstimateMutation = useArchiveEstimateMutation;
exports.InsertEstimateM2mEntityDocument = client_1.gql `
  mutation insertEstimateM2mEntity(
    $estimateM2mEntity: estimates_m2m_entities_insert_input!
  ) {
    insert_estimates_m2m_entities_one(object: $estimateM2mEntity) {
      ...EstimateM2mEntity
    }
  }
  ${exports.EstimateM2mEntityFragmentDoc}
`;
/**
 * __useInsertEstimateM2mEntityMutation__
 *
 * To run a mutation, you first call `useInsertEstimateM2mEntityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertEstimateM2mEntityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertEstimateM2mEntityMutation, { data, loading, error }] = useInsertEstimateM2mEntityMutation({
 *   variables: {
 *      estimateM2mEntity: // value for 'estimateM2mEntity'
 *   },
 * });
 */
function useInsertEstimateM2mEntityMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertEstimateM2mEntityDocument, options);
}
exports.useInsertEstimateM2mEntityMutation = useInsertEstimateM2mEntityMutation;
exports.UpdateEstimateM2mEntityDocument = client_1.gql `
  mutation updateEstimateM2mEntity(
    $estimateM2mEntityId: uuid!
    $estimateM2mEntity: estimates_m2m_entities_set_input!
  ) {
    update_estimates_m2m_entities_by_pk(
      pk_columns: { id: $estimateM2mEntityId }
      _set: $estimateM2mEntity
    ) {
      ...EstimateM2mEntity
    }
  }
  ${exports.EstimateM2mEntityFragmentDoc}
`;
/**
 * __useUpdateEstimateM2mEntityMutation__
 *
 * To run a mutation, you first call `useUpdateEstimateM2mEntityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstimateM2mEntityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstimateM2mEntityMutation, { data, loading, error }] = useUpdateEstimateM2mEntityMutation({
 *   variables: {
 *      estimateM2mEntityId: // value for 'estimateM2mEntityId'
 *      estimateM2mEntity: // value for 'estimateM2mEntity'
 *   },
 * });
 */
function useUpdateEstimateM2mEntityMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateEstimateM2mEntityDocument, options);
}
exports.useUpdateEstimateM2mEntityMutation = useUpdateEstimateM2mEntityMutation;
exports.GetEstimatesM2mEntitiesDocument = client_1.gql `
  query getEstimatesM2mEntities($estimateId: uuid!) {
    __typename
    estimates_m2m_entities(where: { estimate_id: { _eq: $estimateId } }) {
      __typename
      ...EstimateM2mEntity
    }
  }
  ${exports.EstimateM2mEntityFragmentDoc}
`;
/**
 * __useGetEstimatesM2mEntitiesQuery__
 *
 * To run a query within a React component, call `useGetEstimatesM2mEntitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEstimatesM2mEntitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEstimatesM2mEntitiesQuery({
 *   variables: {
 *      estimateId: // value for 'estimateId'
 *   },
 * });
 */
function useGetEstimatesM2mEntitiesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetEstimatesM2mEntitiesDocument, options);
}
exports.useGetEstimatesM2mEntitiesQuery = useGetEstimatesM2mEntitiesQuery;
function useGetEstimatesM2mEntitiesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetEstimatesM2mEntitiesDocument, options);
}
exports.useGetEstimatesM2mEntitiesLazyQuery = useGetEstimatesM2mEntitiesLazyQuery;
exports.ArchiveEstimatesM2mEntitiesByPkDocument = client_1.gql `
  mutation archiveEstimatesM2mEntitiesByPk($estimateM2mEntityId: uuid!) {
    delete_estimates_m2m_entities_by_pk(id: $estimateM2mEntityId) {
      ...EstimateM2mEntity
    }
  }
  ${exports.EstimateM2mEntityFragmentDoc}
`;
/**
 * __useArchiveEstimatesM2mEntitiesByPkMutation__
 *
 * To run a mutation, you first call `useArchiveEstimatesM2mEntitiesByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveEstimatesM2mEntitiesByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveEstimatesM2mEntitiesByPkMutation, { data, loading, error }] = useArchiveEstimatesM2mEntitiesByPkMutation({
 *   variables: {
 *      estimateM2mEntityId: // value for 'estimateM2mEntityId'
 *   },
 * });
 */
function useArchiveEstimatesM2mEntitiesByPkMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.ArchiveEstimatesM2mEntitiesByPkDocument, options);
}
exports.useArchiveEstimatesM2mEntitiesByPkMutation = useArchiveEstimatesM2mEntitiesByPkMutation;
exports.GetGamesCommunicationsTypesDocument = client_1.gql `
  query getGamesCommunicationsTypes {
    games_types {
      ...GameType
    }
    communications_types {
      ...CommunicationType
    }
  }
  ${exports.GameTypeFragmentDoc}
  ${exports.CommunicationTypeFragmentDoc}
`;
/**
 * __useGetGamesCommunicationsTypesQuery__
 *
 * To run a query within a React component, call `useGetGamesCommunicationsTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesCommunicationsTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesCommunicationsTypesQuery({
 *   variables: {
 *   },
 * });
 */
function useGetGamesCommunicationsTypesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGamesCommunicationsTypesDocument, options);
}
exports.useGetGamesCommunicationsTypesQuery = useGetGamesCommunicationsTypesQuery;
function useGetGamesCommunicationsTypesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGamesCommunicationsTypesDocument, options);
}
exports.useGetGamesCommunicationsTypesLazyQuery = useGetGamesCommunicationsTypesLazyQuery;
exports.GetGainsVirtualsByGainDocument = client_1.gql `
  query getGainsVirtualsByGain($gainId: uuid!) {
    gains_virtuals(where: { gain_id: { _eq: $gainId } }) {
      ...GainVirtual
    }
  }
  ${exports.GainVirtualFragmentDoc}
`;
/**
 * __useGetGainsVirtualsByGainQuery__
 *
 * To run a query within a React component, call `useGetGainsVirtualsByGainQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGainsVirtualsByGainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGainsVirtualsByGainQuery({
 *   variables: {
 *      gainId: // value for 'gainId'
 *   },
 * });
 */
function useGetGainsVirtualsByGainQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGainsVirtualsByGainDocument, options);
}
exports.useGetGainsVirtualsByGainQuery = useGetGainsVirtualsByGainQuery;
function useGetGainsVirtualsByGainLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGainsVirtualsByGainDocument, options);
}
exports.useGetGainsVirtualsByGainLazyQuery = useGetGainsVirtualsByGainLazyQuery;
exports.InsertGainsVirtualsDocument = client_1.gql `
  mutation insertGainsVirtuals(
    $gainId: uuid!
    $gainsVirtuals: [gains_virtuals_insert_input!]!
  ) {
    delete_gains_virtuals(where: { gain_id: { _eq: $gainId } }) {
      affected_rows
    }
    insert_gains_virtuals(objects: $gainsVirtuals) {
      returning {
        format
        gain_id
        id
        value
      }
    }
  }
`;
/**
 * __useInsertGainsVirtualsMutation__
 *
 * To run a mutation, you first call `useInsertGainsVirtualsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGainsVirtualsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGainsVirtualsMutation, { data, loading, error }] = useInsertGainsVirtualsMutation({
 *   variables: {
 *      gainId: // value for 'gainId'
 *      gainsVirtuals: // value for 'gainsVirtuals'
 *   },
 * });
 */
function useInsertGainsVirtualsMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertGainsVirtualsDocument, options);
}
exports.useInsertGainsVirtualsMutation = useInsertGainsVirtualsMutation;
exports.GetGainsByClientDocument = client_1.gql `
  query getGainsByClient($clientId: uuid!) {
    gains(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...Gain
    }
  }
  ${exports.GainFragmentDoc}
`;
/**
 * __useGetGainsByClientQuery__
 *
 * To run a query within a React component, call `useGetGainsByClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGainsByClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGainsByClientQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetGainsByClientQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGainsByClientDocument, options);
}
exports.useGetGainsByClientQuery = useGetGainsByClientQuery;
function useGetGainsByClientLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGainsByClientDocument, options);
}
exports.useGetGainsByClientLazyQuery = useGetGainsByClientLazyQuery;
exports.InsertGainDocument = client_1.gql `
  mutation insertGain($gain: gains_insert_input!) {
    insert_gains_one(object: $gain) {
      ...Gain
    }
  }
  ${exports.GainFragmentDoc}
`;
/**
 * __useInsertGainMutation__
 *
 * To run a mutation, you first call `useInsertGainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGainMutation, { data, loading, error }] = useInsertGainMutation({
 *   variables: {
 *      gain: // value for 'gain'
 *   },
 * });
 */
function useInsertGainMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertGainDocument, options);
}
exports.useInsertGainMutation = useInsertGainMutation;
exports.UpdateGainDocument = client_1.gql `
  mutation updateGain($gainId: uuid!, $gain: gains_set_input!) {
    __typename
    update_gains_by_pk(pk_columns: { id: $gainId }, _set: $gain) {
      __typename
      ...Gain
    }
  }
  ${exports.GainFragmentDoc}
`;
/**
 * __useUpdateGainMutation__
 *
 * To run a mutation, you first call `useUpdateGainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGainMutation, { data, loading, error }] = useUpdateGainMutation({
 *   variables: {
 *      gainId: // value for 'gainId'
 *      gain: // value for 'gain'
 *   },
 * });
 */
function useUpdateGainMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateGainDocument, options);
}
exports.useUpdateGainMutation = useUpdateGainMutation;
exports.ArchiveGainDocument = client_1.gql `
  mutation archiveGain($gainId: uuid!) {
    __typename
    update_gains_by_pk(
      pk_columns: { id: $gainId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Gain
    }
  }
  ${exports.GainFragmentDoc}
`;
/**
 * __useArchiveGainMutation__
 *
 * To run a mutation, you first call `useArchiveGainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveGainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveGainMutation, { data, loading, error }] = useArchiveGainMutation({
 *   variables: {
 *      gainId: // value for 'gainId'
 *   },
 * });
 */
function useArchiveGainMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.ArchiveGainDocument, options);
}
exports.useArchiveGainMutation = useArchiveGainMutation;
exports.InsertGameGainDocument = client_1.gql `
  mutation insertGameGain($gameGain: games_gains_insert_input!) {
    insert_games_gains_one(object: $gameGain) {
      ...GamesGains
    }
  }
  ${exports.GamesGainsFragmentDoc}
`;
/**
 * __useInsertGameGainMutation__
 *
 * To run a mutation, you first call `useInsertGameGainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGameGainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGameGainMutation, { data, loading, error }] = useInsertGameGainMutation({
 *   variables: {
 *      gameGain: // value for 'gameGain'
 *   },
 * });
 */
function useInsertGameGainMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertGameGainDocument, options);
}
exports.useInsertGameGainMutation = useInsertGameGainMutation;
exports.UpdateGameGainDocument = client_1.gql `
  mutation updateGameGain(
    $gameId: uuid!
    $gainId: uuid!
    $gameGain: games_gains_set_input!
  ) {
    update_games_gains_by_pk(
      pk_columns: { game_id: $gameId, gain_id: $gainId }
      _set: $gameGain
    ) {
      ...GamesGains
    }
  }
  ${exports.GamesGainsFragmentDoc}
`;
/**
 * __useUpdateGameGainMutation__
 *
 * To run a mutation, you first call `useUpdateGameGainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameGainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGameGainMutation, { data, loading, error }] = useUpdateGameGainMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      gainId: // value for 'gainId'
 *      gameGain: // value for 'gameGain'
 *   },
 * });
 */
function useUpdateGameGainMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateGameGainDocument, options);
}
exports.useUpdateGameGainMutation = useUpdateGameGainMutation;
exports.DeleteGameGainDocument = client_1.gql `
  mutation deleteGameGain($gameId: uuid!, $gainId: uuid!) {
    delete_games_gains_by_pk(game_id: $gameId, gain_id: $gainId) {
      ...GamesGains
    }
  }
  ${exports.GamesGainsFragmentDoc}
`;
/**
 * __useDeleteGameGainMutation__
 *
 * To run a mutation, you first call `useDeleteGameGainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGameGainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGameGainMutation, { data, loading, error }] = useDeleteGameGainMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      gainId: // value for 'gainId'
 *   },
 * });
 */
function useDeleteGameGainMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.DeleteGameGainDocument, options);
}
exports.useDeleteGameGainMutation = useDeleteGameGainMutation;
exports.GetGamesPlayedStatisticByClientDocument = client_1.gql `
  query getGamesPlayedStatisticByClient($clientId: uuid!) {
    games_played_participations_by_day(
      where: { client_id: { _eq: $clientId } }
    ) {
      ...GamesPlayedParticipationsByDay
    }
    games_played_participations_by_current_day_hours(
      where: { client_id: { _eq: $clientId } }
    ) {
      ...GamesPlayedParticipationsByCurrentDayHours
    }
    games_played_gains_by_day(where: { client_id: { _eq: $clientId } }) {
      ...GamesPlayedGainsByDay
    }
    games_played_gains_by_current_day_hours(
      where: { client_id: { _eq: $clientId } }
    ) {
      ...GamesPlayedGainsByCurrentDayHours
    }
  }
  ${exports.GamesPlayedParticipationsByDayFragmentDoc}
  ${exports.GamesPlayedParticipationsByCurrentDayHoursFragmentDoc}
  ${exports.GamesPlayedGainsByDayFragmentDoc}
  ${exports.GamesPlayedGainsByCurrentDayHoursFragmentDoc}
`;
/**
 * __useGetGamesPlayedStatisticByClientQuery__
 *
 * To run a query within a React component, call `useGetGamesPlayedStatisticByClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesPlayedStatisticByClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesPlayedStatisticByClientQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetGamesPlayedStatisticByClientQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGamesPlayedStatisticByClientDocument, options);
}
exports.useGetGamesPlayedStatisticByClientQuery = useGetGamesPlayedStatisticByClientQuery;
function useGetGamesPlayedStatisticByClientLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGamesPlayedStatisticByClientDocument, options);
}
exports.useGetGamesPlayedStatisticByClientLazyQuery = useGetGamesPlayedStatisticByClientLazyQuery;
exports.GetGameWinnersDocument = client_1.gql `
  query getGameWinners($game_id: uuid!) {
    games_played(
      where: { gain_id: { _is_null: false }, game_id: { _eq: $game_id } }
    ) {
      id
      played_at
      gain {
        id
        name
      }
      user {
        id
        first_name
        name
      }
    }
  }
`;
/**
 * __useGetGameWinnersQuery__
 *
 * To run a query within a React component, call `useGetGameWinnersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameWinnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameWinnersQuery({
 *   variables: {
 *      game_id: // value for 'game_id'
 *   },
 * });
 */
function useGetGameWinnersQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGameWinnersDocument, options);
}
exports.useGetGameWinnersQuery = useGetGameWinnersQuery;
function useGetGameWinnersLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGameWinnersDocument, options);
}
exports.useGetGameWinnersLazyQuery = useGetGameWinnersLazyQuery;
exports.GetGamesTypesDocument = client_1.gql `
  query getGamesTypes {
    games_types(order_by: { name: asc }) {
      ...GameType
    }
  }
  ${exports.GameTypeFragmentDoc}
`;
/**
 * __useGetGamesTypesQuery__
 *
 * To run a query within a React component, call `useGetGamesTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesTypesQuery({
 *   variables: {
 *   },
 * });
 */
function useGetGamesTypesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGamesTypesDocument, options);
}
exports.useGetGamesTypesQuery = useGetGamesTypesQuery;
function useGetGamesTypesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGamesTypesDocument, options);
}
exports.useGetGamesTypesLazyQuery = useGetGamesTypesLazyQuery;
exports.GetGameTypeByIdDocument = client_1.gql `
  query getGameTypeById($gameTypeId: uuid!) {
    games_types_by_pk(id: $gameTypeId) {
      ...GameType
    }
  }
  ${exports.GameTypeFragmentDoc}
`;
/**
 * __useGetGameTypeByIdQuery__
 *
 * To run a query within a React component, call `useGetGameTypeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameTypeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameTypeByIdQuery({
 *   variables: {
 *      gameTypeId: // value for 'gameTypeId'
 *   },
 * });
 */
function useGetGameTypeByIdQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGameTypeByIdDocument, options);
}
exports.useGetGameTypeByIdQuery = useGetGameTypeByIdQuery;
function useGetGameTypeByIdLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGameTypeByIdDocument, options);
}
exports.useGetGameTypeByIdLazyQuery = useGetGameTypeByIdLazyQuery;
exports.GetGamesMinimalInfosDocument = client_1.gql `
  query getGamesMinimalInfos($clientId: uuid) {
    games(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...GameMinimalInfos
    }
  }
  ${exports.GameMinimalInfosFragmentDoc}
`;
/**
 * __useGetGamesMinimalInfosQuery__
 *
 * To run a query within a React component, call `useGetGamesMinimalInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesMinimalInfosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesMinimalInfosQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetGamesMinimalInfosQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGamesMinimalInfosDocument, options);
}
exports.useGetGamesMinimalInfosQuery = useGetGamesMinimalInfosQuery;
function useGetGamesMinimalInfosLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGamesMinimalInfosDocument, options);
}
exports.useGetGamesMinimalInfosLazyQuery = useGetGamesMinimalInfosLazyQuery;
exports.GetGamesByClientAndGameTypeDocument = client_1.gql `
  query getGamesByClientAndGameType($clientId: uuid!, $gameTypeId: uuid!) {
    games(
      where: {
        client_id: { _eq: $clientId }
        type_id: { _eq: $gameTypeId }
        is_archive: { _neq: true }
      }
      order_by: { created_at: desc }
    ) {
      ...Game
    }
  }
  ${exports.GameFragmentDoc}
`;
/**
 * __useGetGamesByClientAndGameTypeQuery__
 *
 * To run a query within a React component, call `useGetGamesByClientAndGameTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesByClientAndGameTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesByClientAndGameTypeQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *      gameTypeId: // value for 'gameTypeId'
 *   },
 * });
 */
function useGetGamesByClientAndGameTypeQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGamesByClientAndGameTypeDocument, options);
}
exports.useGetGamesByClientAndGameTypeQuery = useGetGamesByClientAndGameTypeQuery;
function useGetGamesByClientAndGameTypeLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGamesByClientAndGameTypeDocument, options);
}
exports.useGetGamesByClientAndGameTypeLazyQuery = useGetGamesByClientAndGameTypeLazyQuery;
exports.InsertGameDocument = client_1.gql `
  mutation insertGame($game: games_insert_input!) {
    insert_games_one(object: $game) {
      ...Game
    }
  }
  ${exports.GameFragmentDoc}
`;
/**
 * __useInsertGameMutation__
 *
 * To run a mutation, you first call `useInsertGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGameMutation, { data, loading, error }] = useInsertGameMutation({
 *   variables: {
 *      game: // value for 'game'
 *   },
 * });
 */
function useInsertGameMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertGameDocument, options);
}
exports.useInsertGameMutation = useInsertGameMutation;
exports.UpdateGameDocument = client_1.gql `
  mutation updateGame($gameId: uuid!, $game: games_set_input!) {
    __typename
    update_games_by_pk(pk_columns: { id: $gameId }, _set: $game) {
      __typename
      ...Game
    }
  }
  ${exports.GameFragmentDoc}
`;
/**
 * __useUpdateGameMutation__
 *
 * To run a mutation, you first call `useUpdateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGameMutation, { data, loading, error }] = useUpdateGameMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      game: // value for 'game'
 *   },
 * });
 */
function useUpdateGameMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateGameDocument, options);
}
exports.useUpdateGameMutation = useUpdateGameMutation;
exports.ArchiveGameDocument = client_1.gql `
  mutation archiveGame($gameId: uuid!) {
    __typename
    update_games_by_pk(
      pk_columns: { id: $gameId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Game
    }
  }
  ${exports.GameFragmentDoc}
`;
/**
 * __useArchiveGameMutation__
 *
 * To run a mutation, you first call `useArchiveGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveGameMutation, { data, loading, error }] = useArchiveGameMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
function useArchiveGameMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.ArchiveGameDocument, options);
}
exports.useArchiveGameMutation = useArchiveGameMutation;
exports.GetGoodieDocument = client_1.gql `
  query getGoodie($id: uuid!) {
    goodies_by_pk(id: $id) {
      ...Goodie
    }
  }
  ${exports.GoodieFragmentDoc}
`;
/**
 * __useGetGoodieQuery__
 *
 * To run a query within a React component, call `useGetGoodieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoodieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGoodieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetGoodieQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGoodieDocument, options);
}
exports.useGetGoodieQuery = useGetGoodieQuery;
function useGetGoodieLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGoodieDocument, options);
}
exports.useGetGoodieLazyQuery = useGetGoodieLazyQuery;
exports.InsertGoodieDocument = client_1.gql `
  mutation insertGoodie($goodie: goodies_insert_input!) {
    insert_goodies_one(object: $goodie) {
      ...Goodie
    }
  }
  ${exports.GoodieFragmentDoc}
`;
/**
 * __useInsertGoodieMutation__
 *
 * To run a mutation, you first call `useInsertGoodieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGoodieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGoodieMutation, { data, loading, error }] = useInsertGoodieMutation({
 *   variables: {
 *      goodie: // value for 'goodie'
 *   },
 * });
 */
function useInsertGoodieMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertGoodieDocument, options);
}
exports.useInsertGoodieMutation = useInsertGoodieMutation;
exports.UpdateGoodieDocument = client_1.gql `
  mutation updateGoodie($goodieId: uuid!, $goodie: goodies_set_input!) {
    update_goodies_by_pk(pk_columns: { id: $goodieId }, _set: $goodie) {
      ...Goodie
    }
  }
  ${exports.GoodieFragmentDoc}
`;
/**
 * __useUpdateGoodieMutation__
 *
 * To run a mutation, you first call `useUpdateGoodieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGoodieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGoodieMutation, { data, loading, error }] = useUpdateGoodieMutation({
 *   variables: {
 *      goodieId: // value for 'goodieId'
 *      goodie: // value for 'goodie'
 *   },
 * });
 */
function useUpdateGoodieMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateGoodieDocument, options);
}
exports.useUpdateGoodieMutation = useUpdateGoodieMutation;
exports.ArchiveGoodieDocument = client_1.gql `
  mutation archiveGoodie($goodieId: uuid!) {
    update_goodies_by_pk(
      pk_columns: { id: $goodieId }
      _set: { is_archive: true }
    ) {
      id
      is_archive
    }
  }
`;
/**
 * __useArchiveGoodieMutation__
 *
 * To run a mutation, you first call `useArchiveGoodieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveGoodieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveGoodieMutation, { data, loading, error }] = useArchiveGoodieMutation({
 *   variables: {
 *      goodieId: // value for 'goodieId'
 *   },
 * });
 */
function useArchiveGoodieMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.ArchiveGoodieDocument, options);
}
exports.useArchiveGoodieMutation = useArchiveGoodieMutation;
exports.InsertGoodiesM2mAnimationsDocument = client_1.gql `
  mutation insertGoodiesM2mAnimations(
    $goodie_id: uuid!
    $animation: animations_obj_rel_insert_input!
  ) {
    insert_goodies_m2m_animations_one(
      object: { goodie_id: $goodie_id, animation: $animation }
    ) {
      ...GoodieM2MAnimation
    }
  }
  ${exports.GoodieM2MAnimationFragmentDoc}
`;
/**
 * __useInsertGoodiesM2mAnimationsMutation__
 *
 * To run a mutation, you first call `useInsertGoodiesM2mAnimationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGoodiesM2mAnimationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGoodiesM2mAnimationsMutation, { data, loading, error }] = useInsertGoodiesM2mAnimationsMutation({
 *   variables: {
 *      goodie_id: // value for 'goodie_id'
 *      animation: // value for 'animation'
 *   },
 * });
 */
function useInsertGoodiesM2mAnimationsMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertGoodiesM2mAnimationsDocument, options);
}
exports.useInsertGoodiesM2mAnimationsMutation = useInsertGoodiesM2mAnimationsMutation;
exports.DeleteGoodiesM2mAnimationsDocument = client_1.gql `
  mutation DeleteGoodiesM2mAnimations($goodie_id: uuid!, $animation_id: uuid!) {
    delete_goodies_m2m_animations_by_pk(
      goodie_id: $goodie_id
      animation_id: $animation_id
    ) {
      goodie_id
      animation_id
    }
  }
`;
/**
 * __useDeleteGoodiesM2mAnimationsMutation__
 *
 * To run a mutation, you first call `useDeleteGoodiesM2mAnimationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGoodiesM2mAnimationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGoodiesM2mAnimationsMutation, { data, loading, error }] = useDeleteGoodiesM2mAnimationsMutation({
 *   variables: {
 *      goodie_id: // value for 'goodie_id'
 *      animation_id: // value for 'animation_id'
 *   },
 * });
 */
function useDeleteGoodiesM2mAnimationsMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.DeleteGoodiesM2mAnimationsDocument, options);
}
exports.useDeleteGoodiesM2mAnimationsMutation = useDeleteGoodiesM2mAnimationsMutation;
exports.InsertInfoDocument = client_1.gql `
  mutation insertInfo($info: infos_insert_input!) {
    insert_infos_one(object: $info) {
      id
      ...Info
    }
  }
  ${exports.InfoFragmentDoc}
`;
/**
 * __useInsertInfoMutation__
 *
 * To run a mutation, you first call `useInsertInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertInfoMutation, { data, loading, error }] = useInsertInfoMutation({
 *   variables: {
 *      info: // value for 'info'
 *   },
 * });
 */
function useInsertInfoMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertInfoDocument, options);
}
exports.useInsertInfoMutation = useInsertInfoMutation;
exports.GetInfoSpecificsDocument = client_1.gql `
  query getInfoSpecifics($id: uuid!) {
    infos_by_pk(id: $id) {
      id
      ...InfoSpecifics
    }
  }
  ${exports.InfoSpecificsFragmentDoc}
`;
/**
 * __useGetInfoSpecificsQuery__
 *
 * To run a query within a React component, call `useGetInfoSpecificsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInfoSpecificsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInfoSpecificsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetInfoSpecificsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetInfoSpecificsDocument, options);
}
exports.useGetInfoSpecificsQuery = useGetInfoSpecificsQuery;
function useGetInfoSpecificsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetInfoSpecificsDocument, options);
}
exports.useGetInfoSpecificsLazyQuery = useGetInfoSpecificsLazyQuery;
exports.UpdateInfoDocument = client_1.gql `
  mutation updateInfo($id: uuid!, $updates: infos_set_input!) {
    update_infos_by_pk(pk_columns: { id: $id }, _set: $updates) {
      id
      ...Info
    }
  }
  ${exports.InfoFragmentDoc}
`;
/**
 * __useUpdateInfoMutation__
 *
 * To run a mutation, you first call `useUpdateInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInfoMutation, { data, loading, error }] = useUpdateInfoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *   },
 * });
 */
function useUpdateInfoMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateInfoDocument, options);
}
exports.useUpdateInfoMutation = useUpdateInfoMutation;
exports.InsertPhotoDocument = client_1.gql `
  mutation insertPhoto($photo: photos_insert_input!) {
    insert_photos_one(object: $photo) {
      ...Photo
    }
  }
  ${exports.PhotoFragmentDoc}
`;
/**
 * __useInsertPhotoMutation__
 *
 * To run a mutation, you first call `useInsertPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPhotoMutation, { data, loading, error }] = useInsertPhotoMutation({
 *   variables: {
 *      photo: // value for 'photo'
 *   },
 * });
 */
function useInsertPhotoMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertPhotoDocument, options);
}
exports.useInsertPhotoMutation = useInsertPhotoMutation;
exports.GetPhotoSpecificsDocument = client_1.gql `
  query getPhotoSpecifics($id: uuid!) {
    photos_by_pk(id: $id) {
      ...PhotoSpecifics
    }
  }
  ${exports.PhotoSpecificsFragmentDoc}
`;
/**
 * __useGetPhotoSpecificsQuery__
 *
 * To run a query within a React component, call `useGetPhotoSpecificsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotoSpecificsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotoSpecificsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetPhotoSpecificsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetPhotoSpecificsDocument, options);
}
exports.useGetPhotoSpecificsQuery = useGetPhotoSpecificsQuery;
function useGetPhotoSpecificsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetPhotoSpecificsDocument, options);
}
exports.useGetPhotoSpecificsLazyQuery = useGetPhotoSpecificsLazyQuery;
exports.UpdatePhotoDocument = client_1.gql `
  mutation updatePhoto($id: uuid!, $updates: photos_set_input!) {
    update_photos_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Photo
    }
  }
  ${exports.PhotoFragmentDoc}
`;
/**
 * __useUpdatePhotoMutation__
 *
 * To run a mutation, you first call `useUpdatePhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhotoMutation, { data, loading, error }] = useUpdatePhotoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *   },
 * });
 */
function useUpdatePhotoMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdatePhotoDocument, options);
}
exports.useUpdatePhotoMutation = useUpdatePhotoMutation;
exports.GetPrivatesDecksByClientDocument = client_1.gql `
  query getPrivatesDecksByClient($clientId: uuid!) {
    privates_decks(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...PrivateDeck
    }
  }
  ${exports.PrivateDeckFragmentDoc}
`;
/**
 * __useGetPrivatesDecksByClientQuery__
 *
 * To run a query within a React component, call `useGetPrivatesDecksByClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrivatesDecksByClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrivatesDecksByClientQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetPrivatesDecksByClientQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetPrivatesDecksByClientDocument, options);
}
exports.useGetPrivatesDecksByClientQuery = useGetPrivatesDecksByClientQuery;
function useGetPrivatesDecksByClientLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetPrivatesDecksByClientDocument, options);
}
exports.useGetPrivatesDecksByClientLazyQuery = useGetPrivatesDecksByClientLazyQuery;
exports.InsertPrivateDeckDocument = client_1.gql `
  mutation insertPrivateDeck($privateDeck: privates_decks_insert_input!) {
    insert_privates_decks_one(object: $privateDeck) {
      ...PrivateDeck
    }
  }
  ${exports.PrivateDeckFragmentDoc}
`;
/**
 * __useInsertPrivateDeckMutation__
 *
 * To run a mutation, you first call `useInsertPrivateDeckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPrivateDeckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPrivateDeckMutation, { data, loading, error }] = useInsertPrivateDeckMutation({
 *   variables: {
 *      privateDeck: // value for 'privateDeck'
 *   },
 * });
 */
function useInsertPrivateDeckMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertPrivateDeckDocument, options);
}
exports.useInsertPrivateDeckMutation = useInsertPrivateDeckMutation;
exports.UpdatePrivateDeckDocument = client_1.gql `
  mutation updatePrivateDeck(
    $privateDeckId: uuid!
    $privateDeck: privates_decks_set_input!
  ) {
    __typename
    update_privates_decks_by_pk(
      pk_columns: { id: $privateDeckId }
      _set: $privateDeck
    ) {
      __typename
      ...PrivateDeck
    }
  }
  ${exports.PrivateDeckFragmentDoc}
`;
/**
 * __useUpdatePrivateDeckMutation__
 *
 * To run a mutation, you first call `useUpdatePrivateDeckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePrivateDeckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePrivateDeckMutation, { data, loading, error }] = useUpdatePrivateDeckMutation({
 *   variables: {
 *      privateDeckId: // value for 'privateDeckId'
 *      privateDeck: // value for 'privateDeck'
 *   },
 * });
 */
function useUpdatePrivateDeckMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdatePrivateDeckDocument, options);
}
exports.useUpdatePrivateDeckMutation = useUpdatePrivateDeckMutation;
exports.ArchivePrivateDeckDocument = client_1.gql `
  mutation archivePrivateDeck($privateDeckId: uuid!) {
    __typename
    update_privates_decks_by_pk(
      pk_columns: { id: $privateDeckId }
      _set: { is_archive: true }
    ) {
      __typename
      ...PrivateDeck
    }
  }
  ${exports.PrivateDeckFragmentDoc}
`;
/**
 * __useArchivePrivateDeckMutation__
 *
 * To run a mutation, you first call `useArchivePrivateDeckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchivePrivateDeckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archivePrivateDeckMutation, { data, loading, error }] = useArchivePrivateDeckMutation({
 *   variables: {
 *      privateDeckId: // value for 'privateDeckId'
 *   },
 * });
 */
function useArchivePrivateDeckMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.ArchivePrivateDeckDocument, options);
}
exports.useArchivePrivateDeckMutation = useArchivePrivateDeckMutation;
exports.GetGamesCommunicationsMinimalInfosDocument = client_1.gql `
  query getGamesCommunicationsMinimalInfos($clientId: uuid) {
    games(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...GameMinimalInfos
    }
    communications(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...CommunnicationMinimalInfos
    }
  }
  ${exports.GameMinimalInfosFragmentDoc}
  ${exports.CommunnicationMinimalInfosFragmentDoc}
`;
/**
 * __useGetGamesCommunicationsMinimalInfosQuery__
 *
 * To run a query within a React component, call `useGetGamesCommunicationsMinimalInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesCommunicationsMinimalInfosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesCommunicationsMinimalInfosQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetGamesCommunicationsMinimalInfosQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGamesCommunicationsMinimalInfosDocument, options);
}
exports.useGetGamesCommunicationsMinimalInfosQuery = useGetGamesCommunicationsMinimalInfosQuery;
function useGetGamesCommunicationsMinimalInfosLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGamesCommunicationsMinimalInfosDocument, options);
}
exports.useGetGamesCommunicationsMinimalInfosLazyQuery = useGetGamesCommunicationsMinimalInfosLazyQuery;
exports.InsertPrivateDeckM2mEntityDocument = client_1.gql `
  mutation insertPrivateDeckM2mEntity($privateDeckId: uuid!, $entityId: uuid!) {
    insert_privates_decks_m2m_entities_one(
      object: { private_deck: $privateDeckId, entity_id: $entityId }
    ) {
      ...PrivateDeckM2mEntities
    }
  }
  ${exports.PrivateDeckM2mEntitiesFragmentDoc}
`;
/**
 * __useInsertPrivateDeckM2mEntityMutation__
 *
 * To run a mutation, you first call `useInsertPrivateDeckM2mEntityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPrivateDeckM2mEntityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPrivateDeckM2mEntityMutation, { data, loading, error }] = useInsertPrivateDeckM2mEntityMutation({
 *   variables: {
 *      privateDeckId: // value for 'privateDeckId'
 *      entityId: // value for 'entityId'
 *   },
 * });
 */
function useInsertPrivateDeckM2mEntityMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertPrivateDeckM2mEntityDocument, options);
}
exports.useInsertPrivateDeckM2mEntityMutation = useInsertPrivateDeckM2mEntityMutation;
exports.GetPrivateDeckM2mEntitiesDocument = client_1.gql `
  query getPrivateDeckM2mEntities($privateDeckId: uuid!) {
    privates_decks_m2m_entities(
      where: { private_deck: { _eq: $privateDeckId } }
    ) {
      ...PrivateDeckM2mEntities
    }
  }
  ${exports.PrivateDeckM2mEntitiesFragmentDoc}
`;
/**
 * __useGetPrivateDeckM2mEntitiesQuery__
 *
 * To run a query within a React component, call `useGetPrivateDeckM2mEntitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrivateDeckM2mEntitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrivateDeckM2mEntitiesQuery({
 *   variables: {
 *      privateDeckId: // value for 'privateDeckId'
 *   },
 * });
 */
function useGetPrivateDeckM2mEntitiesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetPrivateDeckM2mEntitiesDocument, options);
}
exports.useGetPrivateDeckM2mEntitiesQuery = useGetPrivateDeckM2mEntitiesQuery;
function useGetPrivateDeckM2mEntitiesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetPrivateDeckM2mEntitiesDocument, options);
}
exports.useGetPrivateDeckM2mEntitiesLazyQuery = useGetPrivateDeckM2mEntitiesLazyQuery;
exports.DeletePrivateDeckM2mEntitiesByPkDocument = client_1.gql `
  mutation deletePrivateDeckM2mEntitiesByPk(
    $privateDeckId: uuid!
    $entityId: uuid!
  ) {
    delete_privates_decks_m2m_entities_by_pk(
      entity_id: $entityId
      private_deck: $privateDeckId
    ) {
      ...PrivateDeckM2mEntities
    }
  }
  ${exports.PrivateDeckM2mEntitiesFragmentDoc}
`;
/**
 * __useDeletePrivateDeckM2mEntitiesByPkMutation__
 *
 * To run a mutation, you first call `useDeletePrivateDeckM2mEntitiesByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePrivateDeckM2mEntitiesByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePrivateDeckM2mEntitiesByPkMutation, { data, loading, error }] = useDeletePrivateDeckM2mEntitiesByPkMutation({
 *   variables: {
 *      privateDeckId: // value for 'privateDeckId'
 *      entityId: // value for 'entityId'
 *   },
 * });
 */
function useDeletePrivateDeckM2mEntitiesByPkMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.DeletePrivateDeckM2mEntitiesByPkDocument, options);
}
exports.useDeletePrivateDeckM2mEntitiesByPkMutation = useDeletePrivateDeckM2mEntitiesByPkMutation;
exports.GetQuizzSpecificsDocument = client_1.gql `
  query getQuizzSpecifics($id: uuid!) {
    quizz_by_pk(id: $id) {
      id
      winning_percentage
      ordered_questions
      quizz_questions {
        ...QuizzQuestions
      }
    }
  }
  ${exports.QuizzQuestionsFragmentDoc}
`;
/**
 * __useGetQuizzSpecificsQuery__
 *
 * To run a query within a React component, call `useGetQuizzSpecificsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizzSpecificsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizzSpecificsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetQuizzSpecificsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetQuizzSpecificsDocument, options);
}
exports.useGetQuizzSpecificsQuery = useGetQuizzSpecificsQuery;
function useGetQuizzSpecificsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetQuizzSpecificsDocument, options);
}
exports.useGetQuizzSpecificsLazyQuery = useGetQuizzSpecificsLazyQuery;
exports.InsertQuizzDocument = client_1.gql `
  mutation insertQuizz($quizz: quizz_insert_input!) {
    insert_quizz_one(object: $quizz) {
      ...Quizz
    }
  }
  ${exports.QuizzFragmentDoc}
`;
/**
 * __useInsertQuizzMutation__
 *
 * To run a mutation, you first call `useInsertQuizzMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertQuizzMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertQuizzMutation, { data, loading, error }] = useInsertQuizzMutation({
 *   variables: {
 *      quizz: // value for 'quizz'
 *   },
 * });
 */
function useInsertQuizzMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertQuizzDocument, options);
}
exports.useInsertQuizzMutation = useInsertQuizzMutation;
exports.UpdateQuizzDocument = client_1.gql `
  mutation updateQuizz($quizzId: uuid!, $quizz: quizz_set_input!) {
    __typename
    update_quizz_by_pk(pk_columns: { id: $quizzId }, _set: $quizz) {
      __typename
      ...Quizz
    }
  }
  ${exports.QuizzFragmentDoc}
`;
/**
 * __useUpdateQuizzMutation__
 *
 * To run a mutation, you first call `useUpdateQuizzMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizzMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizzMutation, { data, loading, error }] = useUpdateQuizzMutation({
 *   variables: {
 *      quizzId: // value for 'quizzId'
 *      quizz: // value for 'quizz'
 *   },
 * });
 */
function useUpdateQuizzMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateQuizzDocument, options);
}
exports.useUpdateQuizzMutation = useUpdateQuizzMutation;
exports.InsertQuizzQuestionDocument = client_1.gql `
  mutation insertQuizzQuestion($object: quizz_questions_insert_input!) {
    insert_quizz_questions_one(object: $object) {
      ...QuizzQuestions
      quizz_questions_answers {
        ...QuizzQuestionAnswers
      }
    }
  }
  ${exports.QuizzQuestionsFragmentDoc}
  ${exports.QuizzQuestionAnswersFragmentDoc}
`;
/**
 * __useInsertQuizzQuestionMutation__
 *
 * To run a mutation, you first call `useInsertQuizzQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertQuizzQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertQuizzQuestionMutation, { data, loading, error }] = useInsertQuizzQuestionMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
function useInsertQuizzQuestionMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertQuizzQuestionDocument, options);
}
exports.useInsertQuizzQuestionMutation = useInsertQuizzQuestionMutation;
exports.UpdateQuizzQuestionDocument = client_1.gql `
  mutation updateQuizzQuestion(
    $id: uuid!
    $updates: quizz_questions_set_input!
    $quizzQuestionsAnswers: [quizz_questions_answers_insert_input!]!
  ) {
    delete_quizz_questions_answers(where: { quizz_question_id: { _eq: $id } }) {
      affected_rows
    }
    insert_quizz_questions_answers(objects: $quizzQuestionsAnswers) {
      affected_rows
    }
    update_quizz_questions_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...QuizzQuestions
      quizz_questions_answers {
        ...QuizzQuestionAnswers
      }
    }
  }
  ${exports.QuizzQuestionsFragmentDoc}
  ${exports.QuizzQuestionAnswersFragmentDoc}
`;
/**
 * __useUpdateQuizzQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateQuizzQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizzQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizzQuestionMutation, { data, loading, error }] = useUpdateQuizzQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *      quizzQuestionsAnswers: // value for 'quizzQuestionsAnswers'
 *   },
 * });
 */
function useUpdateQuizzQuestionMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateQuizzQuestionDocument, options);
}
exports.useUpdateQuizzQuestionMutation = useUpdateQuizzQuestionMutation;
exports.DeleteQuizzQuestionDocument = client_1.gql `
  mutation deleteQuizzQuestion($id: uuid!) {
    delete_quizz_questions_by_pk(id: $id) {
      ...QuizzQuestions
    }
  }
  ${exports.QuizzQuestionsFragmentDoc}
`;
/**
 * __useDeleteQuizzQuestionMutation__
 *
 * To run a mutation, you first call `useDeleteQuizzQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuizzQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuizzQuestionMutation, { data, loading, error }] = useDeleteQuizzQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useDeleteQuizzQuestionMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.DeleteQuizzQuestionDocument, options);
}
exports.useDeleteQuizzQuestionMutation = useDeleteQuizzQuestionMutation;
exports.VerifyRandomDrawingInfosDocument = client_1.gql `
  query verifyRandomDrawingInfos($gameId: uuid!, $gainsIds: [uuid!]!) {
    game: games_by_pk(id: $gameId) {
      client_id
    }
    gains(where: { id: { _in: $gainsIds } }) {
      id
      client_id
      name
      stock
    }
  }
`;
/**
 * __useVerifyRandomDrawingInfosQuery__
 *
 * To run a query within a React component, call `useVerifyRandomDrawingInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyRandomDrawingInfosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyRandomDrawingInfosQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      gainsIds: // value for 'gainsIds'
 *   },
 * });
 */
function useVerifyRandomDrawingInfosQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.VerifyRandomDrawingInfosDocument, options);
}
exports.useVerifyRandomDrawingInfosQuery = useVerifyRandomDrawingInfosQuery;
function useVerifyRandomDrawingInfosLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.VerifyRandomDrawingInfosDocument, options);
}
exports.useVerifyRandomDrawingInfosLazyQuery = useVerifyRandomDrawingInfosLazyQuery;
exports.GetArPlayersDocument = client_1.gql `
  query getArPlayers(
    $gameId: uuid!
    $dateStart: timestamptz
    $dateEnd: timestamptz
  ) {
    players: ar_played(
      where: {
        game_id: { _eq: $gameId }
        played_at: { _gte: $dateStart, _lte: $dateEnd }
      }
    ) {
      user_id
    }
  }
`;
/**
 * __useGetArPlayersQuery__
 *
 * To run a query within a React component, call `useGetArPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArPlayersQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      dateStart: // value for 'dateStart'
 *      dateEnd: // value for 'dateEnd'
 *   },
 * });
 */
function useGetArPlayersQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetArPlayersDocument, options);
}
exports.useGetArPlayersQuery = useGetArPlayersQuery;
function useGetArPlayersLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetArPlayersDocument, options);
}
exports.useGetArPlayersLazyQuery = useGetArPlayersLazyQuery;
exports.GetQuizzPlayersDocument = client_1.gql `
  query getQuizzPlayers(
    $gameId: uuid!
    $dateStart: timestamptz
    $dateEnd: timestamptz
    $minScore: numeric
  ) {
    players: quizz_played(
      where: {
        game_id: { _eq: $gameId }
        played_at: { _gte: $dateStart, _lte: $dateEnd }
        score: { _gte: $minScore }
      }
    ) {
      user_id
    }
  }
`;
/**
 * __useGetQuizzPlayersQuery__
 *
 * To run a query within a React component, call `useGetQuizzPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizzPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizzPlayersQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      dateStart: // value for 'dateStart'
 *      dateEnd: // value for 'dateEnd'
 *      minScore: // value for 'minScore'
 *   },
 * });
 */
function useGetQuizzPlayersQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetQuizzPlayersDocument, options);
}
exports.useGetQuizzPlayersQuery = useGetQuizzPlayersQuery;
function useGetQuizzPlayersLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetQuizzPlayersDocument, options);
}
exports.useGetQuizzPlayersLazyQuery = useGetQuizzPlayersLazyQuery;
exports.GetVotePlayersDocument = client_1.gql `
  query getVotePlayers(
    $gameId: uuid!
    $dateStart: timestamptz
    $dateEnd: timestamptz
  ) {
    players: votes_played(
      where: {
        game_id: { _eq: $gameId }
        played_at: { _gte: $dateStart, _lte: $dateEnd }
      }
    ) {
      user_id
    }
  }
`;
/**
 * __useGetVotePlayersQuery__
 *
 * To run a query within a React component, call `useGetVotePlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVotePlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVotePlayersQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      dateStart: // value for 'dateStart'
 *      dateEnd: // value for 'dateEnd'
 *   },
 * });
 */
function useGetVotePlayersQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetVotePlayersDocument, options);
}
exports.useGetVotePlayersQuery = useGetVotePlayersQuery;
function useGetVotePlayersLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetVotePlayersDocument, options);
}
exports.useGetVotePlayersLazyQuery = useGetVotePlayersLazyQuery;
exports.GetGameRandomDrawingsDocument = client_1.gql `
  query getGameRandomDrawings($gameId: uuid!) {
    random_drawings(where: { game_id: { _eq: $gameId } }) {
      ...RandomDrawing
    }
  }
  ${exports.RandomDrawingFragmentDoc}
`;
/**
 * __useGetGameRandomDrawingsQuery__
 *
 * To run a query within a React component, call `useGetGameRandomDrawingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameRandomDrawingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameRandomDrawingsQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
function useGetGameRandomDrawingsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGameRandomDrawingsDocument, options);
}
exports.useGetGameRandomDrawingsQuery = useGetGameRandomDrawingsQuery;
function useGetGameRandomDrawingsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGameRandomDrawingsDocument, options);
}
exports.useGetGameRandomDrawingsLazyQuery = useGetGameRandomDrawingsLazyQuery;
exports.InsertRandomDrawingsDocument = client_1.gql `
  mutation insertRandomDrawings(
    $randomDrawingsInput: [random_drawings_insert_input!]!
  ) {
    randomDrawings: insert_random_drawings(objects: $randomDrawingsInput) {
      returning {
        ...RandomDrawing
      }
    }
  }
  ${exports.RandomDrawingFragmentDoc}
`;
/**
 * __useInsertRandomDrawingsMutation__
 *
 * To run a mutation, you first call `useInsertRandomDrawingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertRandomDrawingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertRandomDrawingsMutation, { data, loading, error }] = useInsertRandomDrawingsMutation({
 *   variables: {
 *      randomDrawingsInput: // value for 'randomDrawingsInput'
 *   },
 * });
 */
function useInsertRandomDrawingsMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertRandomDrawingsDocument, options);
}
exports.useInsertRandomDrawingsMutation = useInsertRandomDrawingsMutation;
exports.InsertSurveyDocument = client_1.gql `
  mutation insertSurvey($survey: surveys_insert_input!) {
    insert_surveys_one(object: $survey) {
      ...Survey
    }
  }
  ${exports.SurveyFragmentDoc}
`;
/**
 * __useInsertSurveyMutation__
 *
 * To run a mutation, you first call `useInsertSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSurveyMutation, { data, loading, error }] = useInsertSurveyMutation({
 *   variables: {
 *      survey: // value for 'survey'
 *   },
 * });
 */
function useInsertSurveyMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertSurveyDocument, options);
}
exports.useInsertSurveyMutation = useInsertSurveyMutation;
exports.GetSurveySpecificsDocument = client_1.gql `
  query getSurveySpecifics($id: uuid!) {
    surveys_by_pk(id: $id) {
      id
      surveys_questions {
        ...SurveyQuestions
      }
    }
  }
  ${exports.SurveyQuestionsFragmentDoc}
`;
/**
 * __useGetSurveySpecificsQuery__
 *
 * To run a query within a React component, call `useGetSurveySpecificsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSurveySpecificsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSurveySpecificsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetSurveySpecificsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetSurveySpecificsDocument, options);
}
exports.useGetSurveySpecificsQuery = useGetSurveySpecificsQuery;
function useGetSurveySpecificsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetSurveySpecificsDocument, options);
}
exports.useGetSurveySpecificsLazyQuery = useGetSurveySpecificsLazyQuery;
exports.UpdateSurveyDocument = client_1.gql `
  mutation updateSurvey($id: uuid!, $updates: surveys_set_input!) {
    __typename
    update_surveys_by_pk(pk_columns: { id: $id }, _set: $updates) {
      __typename
      ...Survey
    }
  }
  ${exports.SurveyFragmentDoc}
`;
/**
 * __useUpdateSurveyMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyMutation, { data, loading, error }] = useUpdateSurveyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *   },
 * });
 */
function useUpdateSurveyMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateSurveyDocument, options);
}
exports.useUpdateSurveyMutation = useUpdateSurveyMutation;
exports.InsertSurveyQuestionDocument = client_1.gql `
  mutation insertSurveyQuestion($object: surveys_questions_insert_input!) {
    insert_surveys_questions_one(object: $object) {
      ...SurveyQuestions
      surveys_questions_answers {
        ...SurveyQuestionAnswers
      }
    }
  }
  ${exports.SurveyQuestionsFragmentDoc}
  ${exports.SurveyQuestionAnswersFragmentDoc}
`;
/**
 * __useInsertSurveyQuestionMutation__
 *
 * To run a mutation, you first call `useInsertSurveyQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSurveyQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSurveyQuestionMutation, { data, loading, error }] = useInsertSurveyQuestionMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
function useInsertSurveyQuestionMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertSurveyQuestionDocument, options);
}
exports.useInsertSurveyQuestionMutation = useInsertSurveyQuestionMutation;
exports.UpdateSurveyQuestionDocument = client_1.gql `
  mutation updateSurveyQuestion(
    $id: uuid!
    $updates: surveys_questions_set_input!
    $surveysQuestionsAnswers: [surveys_questions_answers_insert_input!]!
  ) {
    delete_surveys_questions_answers(
      where: { survey_question_id: { _eq: $id } }
    ) {
      affected_rows
    }
    insert_surveys_questions_answers(objects: $surveysQuestionsAnswers) {
      affected_rows
    }
    update_surveys_questions_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...SurveyQuestions
      surveys_questions_answers {
        ...SurveyQuestionAnswers
      }
    }
  }
  ${exports.SurveyQuestionsFragmentDoc}
  ${exports.SurveyQuestionAnswersFragmentDoc}
`;
/**
 * __useUpdateSurveyQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyQuestionMutation, { data, loading, error }] = useUpdateSurveyQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *      surveysQuestionsAnswers: // value for 'surveysQuestionsAnswers'
 *   },
 * });
 */
function useUpdateSurveyQuestionMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateSurveyQuestionDocument, options);
}
exports.useUpdateSurveyQuestionMutation = useUpdateSurveyQuestionMutation;
exports.DeleteSurveyQuestionDocument = client_1.gql `
  mutation deleteSurveyQuestion($id: uuid!) {
    delete_surveys_questions_by_pk(id: $id) {
      id
    }
  }
`;
/**
 * __useDeleteSurveyQuestionMutation__
 *
 * To run a mutation, you first call `useDeleteSurveyQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSurveyQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSurveyQuestionMutation, { data, loading, error }] = useDeleteSurveyQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useDeleteSurveyQuestionMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.DeleteSurveyQuestionDocument, options);
}
exports.useDeleteSurveyQuestionMutation = useDeleteSurveyQuestionMutation;
exports.GetTemplatesByClientDocument = client_1.gql `
  query getTemplatesByClient($clientId: uuid!) {
    templates(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: asc }
    ) {
      ...Template
    }
  }
  ${exports.TemplateFragmentDoc}
`;
/**
 * __useGetTemplatesByClientQuery__
 *
 * To run a query within a React component, call `useGetTemplatesByClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplatesByClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplatesByClientQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetTemplatesByClientQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetTemplatesByClientDocument, options);
}
exports.useGetTemplatesByClientQuery = useGetTemplatesByClientQuery;
function useGetTemplatesByClientLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetTemplatesByClientDocument, options);
}
exports.useGetTemplatesByClientLazyQuery = useGetTemplatesByClientLazyQuery;
exports.InsertTemplateDocument = client_1.gql `
  mutation insertTemplate($template: templates_insert_input!) {
    insert_templates_one(object: $template) {
      ...Template
    }
  }
  ${exports.TemplateFragmentDoc}
`;
/**
 * __useInsertTemplateMutation__
 *
 * To run a mutation, you first call `useInsertTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTemplateMutation, { data, loading, error }] = useInsertTemplateMutation({
 *   variables: {
 *      template: // value for 'template'
 *   },
 * });
 */
function useInsertTemplateMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertTemplateDocument, options);
}
exports.useInsertTemplateMutation = useInsertTemplateMutation;
exports.UpdateTemplateDocument = client_1.gql `
  mutation updateTemplate($templateId: uuid!, $updates: templates_set_input!) {
    __typename
    update_templates_by_pk(pk_columns: { id: $templateId }, _set: $updates) {
      __typename
      ...Template
    }
  }
  ${exports.TemplateFragmentDoc}
`;
/**
 * __useUpdateTemplateMutation__
 *
 * To run a mutation, you first call `useUpdateTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTemplateMutation, { data, loading, error }] = useUpdateTemplateMutation({
 *   variables: {
 *      templateId: // value for 'templateId'
 *      updates: // value for 'updates'
 *   },
 * });
 */
function useUpdateTemplateMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateTemplateDocument, options);
}
exports.useUpdateTemplateMutation = useUpdateTemplateMutation;
exports.ArchiveTemplateDocument = client_1.gql `
  mutation archiveTemplate($templateId: uuid!) {
    __typename
    update_templates_by_pk(
      pk_columns: { id: $templateId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Template
    }
  }
  ${exports.TemplateFragmentDoc}
`;
/**
 * __useArchiveTemplateMutation__
 *
 * To run a mutation, you first call `useArchiveTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveTemplateMutation, { data, loading, error }] = useArchiveTemplateMutation({
 *   variables: {
 *      templateId: // value for 'templateId'
 *   },
 * });
 */
function useArchiveTemplateMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.ArchiveTemplateDocument, options);
}
exports.useArchiveTemplateMutation = useArchiveTemplateMutation;
exports.GetTrackersDocument = client_1.gql `
  query getTrackers($clientId: uuid) {
    ar_trackers(
      order_by: { name: asc }
      where: {
        _or: [
          { client_id: { _eq: $clientId } }
          { client_id: { _is_null: true } }
        ]
      }
    ) {
      ...Tracker
    }
  }
  ${exports.TrackerFragmentDoc}
`;
/**
 * __useGetTrackersQuery__
 *
 * To run a query within a React component, call `useGetTrackersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrackersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrackersQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetTrackersQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetTrackersDocument, options);
}
exports.useGetTrackersQuery = useGetTrackersQuery;
function useGetTrackersLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetTrackersDocument, options);
}
exports.useGetTrackersLazyQuery = useGetTrackersLazyQuery;
exports.InsertTrackerDocument = client_1.gql `
  mutation insertTracker($object: ar_trackers_insert_input!) {
    insert_ar_trackers_one(object: $object) {
      ...Tracker
    }
  }
  ${exports.TrackerFragmentDoc}
`;
/**
 * __useInsertTrackerMutation__
 *
 * To run a mutation, you first call `useInsertTrackerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTrackerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTrackerMutation, { data, loading, error }] = useInsertTrackerMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
function useInsertTrackerMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertTrackerDocument, options);
}
exports.useInsertTrackerMutation = useInsertTrackerMutation;
exports.UpdateTrackerDocument = client_1.gql `
  mutation updateTracker($id: uuid!, $updates: ar_trackers_set_input!) {
    update_ar_trackers_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Tracker
    }
  }
  ${exports.TrackerFragmentDoc}
`;
/**
 * __useUpdateTrackerMutation__
 *
 * To run a mutation, you first call `useUpdateTrackerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrackerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrackerMutation, { data, loading, error }] = useUpdateTrackerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *   },
 * });
 */
function useUpdateTrackerMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateTrackerDocument, options);
}
exports.useUpdateTrackerMutation = useUpdateTrackerMutation;
exports.GetVoteResultsDocument = client_1.gql `
  query getVoteResults($gameId: uuid!) {
    votes_selections(where: { vote_id: { _eq: $gameId } }) {
      id
      selection
      votes_selections_choices {
        id
        label
      }
    }
    votes_played(where: { game_id: { _eq: $gameId } }) {
      id
      game_id
      played_at
      results
      user_id
    }
  }
`;
/**
 * __useGetVoteResultsQuery__
 *
 * To run a query within a React component, call `useGetVoteResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVoteResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVoteResultsQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
function useGetVoteResultsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetVoteResultsDocument, options);
}
exports.useGetVoteResultsQuery = useGetVoteResultsQuery;
function useGetVoteResultsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetVoteResultsDocument, options);
}
exports.useGetVoteResultsLazyQuery = useGetVoteResultsLazyQuery;
exports.InsertVoteDocument = client_1.gql `
  mutation insertVote($vote: votes_insert_input!) {
    insert_votes_one(object: $vote) {
      ...Vote
    }
  }
  ${exports.VoteFragmentDoc}
`;
/**
 * __useInsertVoteMutation__
 *
 * To run a mutation, you first call `useInsertVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertVoteMutation, { data, loading, error }] = useInsertVoteMutation({
 *   variables: {
 *      vote: // value for 'vote'
 *   },
 * });
 */
function useInsertVoteMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertVoteDocument, options);
}
exports.useInsertVoteMutation = useInsertVoteMutation;
exports.GetVoteSpecificsDocument = client_1.gql `
  query getVoteSpecifics($id: uuid!) {
    votes_by_pk(id: $id) {
      id
      votes_selections {
        ...VoteSelection
      }
    }
  }
  ${exports.VoteSelectionFragmentDoc}
`;
/**
 * __useGetVoteSpecificsQuery__
 *
 * To run a query within a React component, call `useGetVoteSpecificsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVoteSpecificsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVoteSpecificsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetVoteSpecificsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetVoteSpecificsDocument, options);
}
exports.useGetVoteSpecificsQuery = useGetVoteSpecificsQuery;
function useGetVoteSpecificsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetVoteSpecificsDocument, options);
}
exports.useGetVoteSpecificsLazyQuery = useGetVoteSpecificsLazyQuery;
exports.InsertVoteSelectionDocument = client_1.gql `
  mutation insertVoteSelection($object: votes_selections_insert_input!) {
    insert_votes_selections_one(object: $object) {
      ...VoteSelection
      votes_selections_choices {
        ...VoteSelectionChoice
      }
    }
  }
  ${exports.VoteSelectionFragmentDoc}
  ${exports.VoteSelectionChoiceFragmentDoc}
`;
/**
 * __useInsertVoteSelectionMutation__
 *
 * To run a mutation, you first call `useInsertVoteSelectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertVoteSelectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertVoteSelectionMutation, { data, loading, error }] = useInsertVoteSelectionMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
function useInsertVoteSelectionMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertVoteSelectionDocument, options);
}
exports.useInsertVoteSelectionMutation = useInsertVoteSelectionMutation;
exports.UpdateVoteSelectionDocument = client_1.gql `
  mutation updateVoteSelection(
    $id: uuid!
    $updates: votes_selections_set_input!
    $voteSelectionsChoices: [votes_selections_choices_insert_input!]!
  ) {
    delete_votes_selections_choices(
      where: { vote_selection_id: { _eq: $id } }
    ) {
      affected_rows
    }
    insert_votes_selections_choices(objects: $voteSelectionsChoices) {
      affected_rows
    }
    update_votes_selections_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...VoteSelection
      votes_selections_choices {
        ...VoteSelectionChoice
      }
    }
  }
  ${exports.VoteSelectionFragmentDoc}
  ${exports.VoteSelectionChoiceFragmentDoc}
`;
/**
 * __useUpdateVoteSelectionMutation__
 *
 * To run a mutation, you first call `useUpdateVoteSelectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVoteSelectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVoteSelectionMutation, { data, loading, error }] = useUpdateVoteSelectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updates: // value for 'updates'
 *      voteSelectionsChoices: // value for 'voteSelectionsChoices'
 *   },
 * });
 */
function useUpdateVoteSelectionMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateVoteSelectionDocument, options);
}
exports.useUpdateVoteSelectionMutation = useUpdateVoteSelectionMutation;
exports.DeleteVoteSelectionDocument = client_1.gql `
  mutation deleteVoteSelection($id: uuid!) {
    delete_votes_selections_by_pk(id: $id) {
      ...VoteSelection
    }
  }
  ${exports.VoteSelectionFragmentDoc}
`;
/**
 * __useDeleteVoteSelectionMutation__
 *
 * To run a mutation, you first call `useDeleteVoteSelectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVoteSelectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVoteSelectionMutation, { data, loading, error }] = useDeleteVoteSelectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useDeleteVoteSelectionMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.DeleteVoteSelectionDocument, options);
}
exports.useDeleteVoteSelectionMutation = useDeleteVoteSelectionMutation;
exports.GetClientsByEmailDocument = client_1.gql `
  query getClientsByEmail($email: String!) {
    clients(where: { email: { _eq: $email } }) {
      ...ClientDisplay
      password
    }
  }
  ${exports.ClientDisplayFragmentDoc}
`;
/**
 * __useGetClientsByEmailQuery__
 *
 * To run a query within a React component, call `useGetClientsByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientsByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientsByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
function useGetClientsByEmailQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetClientsByEmailDocument, options);
}
exports.useGetClientsByEmailQuery = useGetClientsByEmailQuery;
function useGetClientsByEmailLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetClientsByEmailDocument, options);
}
exports.useGetClientsByEmailLazyQuery = useGetClientsByEmailLazyQuery;
exports.InsertClientDocument = client_1.gql `
  mutation insertClient($client: clients_insert_input!) {
    insert_clients_one(object: $client) {
      ...ClientDisplay
    }
  }
  ${exports.ClientDisplayFragmentDoc}
`;
/**
 * __useInsertClientMutation__
 *
 * To run a mutation, you first call `useInsertClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertClientMutation, { data, loading, error }] = useInsertClientMutation({
 *   variables: {
 *      client: // value for 'client'
 *   },
 * });
 */
function useInsertClientMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertClientDocument, options);
}
exports.useInsertClientMutation = useInsertClientMutation;
exports.InsertClientPasswordForgottenTokenDocument = client_1.gql `
  mutation insertClientPasswordForgottenToken($client_id: uuid!) {
    insert_clients_password_forgotten_tokens_one(
      object: { client_id: $client_id }
      on_conflict: {
        constraint: clients_password_forgotten_tokens_client_id_key
        update_columns: [id, created_at]
      }
    ) {
      id
    }
  }
`;
/**
 * __useInsertClientPasswordForgottenTokenMutation__
 *
 * To run a mutation, you first call `useInsertClientPasswordForgottenTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertClientPasswordForgottenTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertClientPasswordForgottenTokenMutation, { data, loading, error }] = useInsertClientPasswordForgottenTokenMutation({
 *   variables: {
 *      client_id: // value for 'client_id'
 *   },
 * });
 */
function useInsertClientPasswordForgottenTokenMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertClientPasswordForgottenTokenDocument, options);
}
exports.useInsertClientPasswordForgottenTokenMutation = useInsertClientPasswordForgottenTokenMutation;
exports.ResetPasswordDocument = client_1.gql `
  mutation resetPassword(
    $resetTokenId: uuid!
    $limitDate: timestamp!
    $newPassword: String!
  ) {
    update_clients(
      where: {
        password_forgotten_token: {
          id: { _eq: $resetTokenId }
          created_at: { _gte: $limitDate }
        }
      }
      _set: { password: $newPassword }
    ) {
      affected_rows
    }
    delete_clients_password_forgotten_tokens_by_pk(id: $resetTokenId) {
      id
    }
  }
`;
/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetTokenId: // value for 'resetTokenId'
 *      limitDate: // value for 'limitDate'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
function useResetPasswordMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.ResetPasswordDocument, options);
}
exports.useResetPasswordMutation = useResetPasswordMutation;
exports.GetUsersByEmailDocument = client_1.gql `
  query getUsersByEmail($email: String!) {
    users(where: { email: { _eq: $email } }) {
      ...UserDisplay
      password
      apple_id
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
/**
 * __useGetUsersByEmailQuery__
 *
 * To run a query within a React component, call `useGetUsersByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
function useGetUsersByEmailQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetUsersByEmailDocument, options);
}
exports.useGetUsersByEmailQuery = useGetUsersByEmailQuery;
function useGetUsersByEmailLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetUsersByEmailDocument, options);
}
exports.useGetUsersByEmailLazyQuery = useGetUsersByEmailLazyQuery;
exports.GetUsersByAppleIdDocument = client_1.gql `
  query getUsersByAppleId($appleId: String!) {
    users(where: { apple_id: { _eq: $appleId } }) {
      ...UserDisplay
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
/**
 * __useGetUsersByAppleIdQuery__
 *
 * To run a query within a React component, call `useGetUsersByAppleIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersByAppleIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersByAppleIdQuery({
 *   variables: {
 *      appleId: // value for 'appleId'
 *   },
 * });
 */
function useGetUsersByAppleIdQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetUsersByAppleIdDocument, options);
}
exports.useGetUsersByAppleIdQuery = useGetUsersByAppleIdQuery;
function useGetUsersByAppleIdLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetUsersByAppleIdDocument, options);
}
exports.useGetUsersByAppleIdLazyQuery = useGetUsersByAppleIdLazyQuery;
exports.InsertUserDocument = client_1.gql `
  mutation insertUser($user: users_insert_input!) {
    insert_users_one(object: $user) {
      ...UserDisplay
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
function useInsertUserMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertUserDocument, options);
}
exports.useInsertUserMutation = useInsertUserMutation;
exports.UpsertUserDocument = client_1.gql `
  mutation upsertUser($user: users_insert_input!) {
    insert_users_one(
      object: $user
      on_conflict: {
        constraint: users_email_key
        update_columns: [apple_id, name, first_name]
      }
    ) {
      ...UserDisplay
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
/**
 * __useUpsertUserMutation__
 *
 * To run a mutation, you first call `useUpsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertUserMutation, { data, loading, error }] = useUpsertUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
function useUpsertUserMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpsertUserDocument, options);
}
exports.useUpsertUserMutation = useUpsertUserMutation;
exports.UpsertAddressDocument = client_1.gql `
  mutation upsertAddress($address: addresses_insert_input!) {
    insert_addresses_one(
      object: $address
      on_conflict: {
        constraint: addresses_pkey
        update_columns: [address, city, zipcode, country]
      }
    ) {
      id
      ...Address
    }
  }
  ${exports.AddressFragmentDoc}
`;
/**
 * __useUpsertAddressMutation__
 *
 * To run a mutation, you first call `useUpsertAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertAddressMutation, { data, loading, error }] = useUpsertAddressMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
function useUpsertAddressMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpsertAddressDocument, options);
}
exports.useUpsertAddressMutation = useUpsertAddressMutation;
exports.ValidateGainDocument = client_1.gql `
  mutation validateGain($id: bigint!, $fromRandomDrawing: Boolean!) {
    update_games_played_by_pk(
      pk_columns: { id: $id }
      _set: { gain_validated: true }
    ) @skip(if: $fromRandomDrawing) {
      id
      gain_validated
    }
    update_random_drawings_by_pk(
      pk_columns: { id: $id }
      _set: { gain_validated: true }
    ) @include(if: $fromRandomDrawing) {
      id
      gain_validated
    }
  }
`;
/**
 * __useValidateGainMutation__
 *
 * To run a mutation, you first call `useValidateGainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateGainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateGainMutation, { data, loading, error }] = useValidateGainMutation({
 *   variables: {
 *      id: // value for 'id'
 *      fromRandomDrawing: // value for 'fromRandomDrawing'
 *   },
 * });
 */
function useValidateGainMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.ValidateGainDocument, options);
}
exports.useValidateGainMutation = useValidateGainMutation;
exports.GetGainsWonDocument = client_1.gql `
  query getGainsWon {
    games_played(
      where: { gain_id: { _is_null: false }, gain_validated: { _eq: false } }
      order_by: { played_at: desc }
    ) {
      ...GameWon
    }
    random_drawings(
      where: { gain_validated: { _eq: false } }
      order_by: { created_at: desc }
    ) {
      ...RandomDrawingWon
    }
  }
  ${exports.GameWonFragmentDoc}
  ${exports.RandomDrawingWonFragmentDoc}
`;
/**
 * __useGetGainsWonQuery__
 *
 * To run a query within a React component, call `useGetGainsWonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGainsWonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGainsWonQuery({
 *   variables: {
 *   },
 * });
 */
function useGetGainsWonQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGainsWonDocument, options);
}
exports.useGetGainsWonQuery = useGetGainsWonQuery;
function useGetGainsWonLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGainsWonDocument, options);
}
exports.useGetGainsWonLazyQuery = useGetGainsWonLazyQuery;
exports.GetGameFrequencyDocument = client_1.gql `
  query getGameFrequency($gameId: uuid!) {
    games_by_pk(id: $gameId) {
      is_active
      frequency
      max_participations
      tz
      type {
        name
      }
    }
  }
`;
/**
 * __useGetGameFrequencyQuery__
 *
 * To run a query within a React component, call `useGetGameFrequencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameFrequencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameFrequencyQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
function useGetGameFrequencyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGameFrequencyDocument, options);
}
exports.useGetGameFrequencyQuery = useGetGameFrequencyQuery;
function useGetGameFrequencyLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGameFrequencyDocument, options);
}
exports.useGetGameFrequencyLazyQuery = useGetGameFrequencyLazyQuery;
exports.GetGamePlayedCountDocument = client_1.gql `
  query getGamePlayedCount(
    $gameId: uuid!
    $userId: uuid!
    $dateFrom: timestamptz
  ) {
    games_played_aggregate(
      where: {
        game_id: { _eq: $gameId }
        user_id: { _eq: $userId }
        played_at: { _gte: $dateFrom }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
/**
 * __useGetGamePlayedCountQuery__
 *
 * To run a query within a React component, call `useGetGamePlayedCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamePlayedCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamePlayedCountQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      userId: // value for 'userId'
 *      dateFrom: // value for 'dateFrom'
 *   },
 * });
 */
function useGetGamePlayedCountQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGamePlayedCountDocument, options);
}
exports.useGetGamePlayedCountQuery = useGetGamePlayedCountQuery;
function useGetGamePlayedCountLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGamePlayedCountDocument, options);
}
exports.useGetGamePlayedCountLazyQuery = useGetGamePlayedCountLazyQuery;
exports.GetInfosToPlayArDocument = client_1.gql `
  query getInfosToPlayAr($gameId: uuid!) {
    ar: ar_by_pk(id: $gameId) {
      ...InfosToPlayAr
    }
  }
  ${exports.InfosToPlayArFragmentDoc}
`;
/**
 * __useGetInfosToPlayArQuery__
 *
 * To run a query within a React component, call `useGetInfosToPlayArQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInfosToPlayArQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInfosToPlayArQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
function useGetInfosToPlayArQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetInfosToPlayArDocument, options);
}
exports.useGetInfosToPlayArQuery = useGetInfosToPlayArQuery;
function useGetInfosToPlayArLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetInfosToPlayArDocument, options);
}
exports.useGetInfosToPlayArLazyQuery = useGetInfosToPlayArLazyQuery;
exports.PlayArDocument = client_1.gql `
  mutation playAr($gameId: uuid!, $gainId: uuid, $userId: uuid!) {
    arPlayed: insert_ar_played_one(
      object: { game_id: $gameId, gain_id: $gainId, user_id: $userId }
    ) {
      ...ArPlayed
    }
  }
  ${exports.ArPlayedFragmentDoc}
`;
/**
 * __usePlayArMutation__
 *
 * To run a mutation, you first call `usePlayArMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlayArMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [playArMutation, { data, loading, error }] = usePlayArMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      gainId: // value for 'gainId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
function usePlayArMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.PlayArDocument, options);
}
exports.usePlayArMutation = usePlayArMutation;
exports.GetInfosToPlayQuizzDocument = client_1.gql `
  query getInfosToPlayQuizz($gameId: uuid!) {
    quizz: quizz_by_pk(id: $gameId) {
      ...InfosToPlayQuizz
    }
  }
  ${exports.InfosToPlayQuizzFragmentDoc}
`;
/**
 * __useGetInfosToPlayQuizzQuery__
 *
 * To run a query within a React component, call `useGetInfosToPlayQuizzQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInfosToPlayQuizzQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInfosToPlayQuizzQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
function useGetInfosToPlayQuizzQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetInfosToPlayQuizzDocument, options);
}
exports.useGetInfosToPlayQuizzQuery = useGetInfosToPlayQuizzQuery;
function useGetInfosToPlayQuizzLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetInfosToPlayQuizzDocument, options);
}
exports.useGetInfosToPlayQuizzLazyQuery = useGetInfosToPlayQuizzLazyQuery;
exports.PlayQuizzDocument = client_1.gql `
  mutation playQuizz(
    $gameId: uuid!
    $gainId: uuid
    $userId: uuid!
    $score: numeric!
    $time: numeric!
  ) {
    quizzPlayed: insert_quizz_played_one(
      object: {
        game_id: $gameId
        gain_id: $gainId
        user_id: $userId
        score: $score
        time: $time
      }
    ) {
      ...QuizzPlayed
    }
  }
  ${exports.QuizzPlayedFragmentDoc}
`;
/**
 * __usePlayQuizzMutation__
 *
 * To run a mutation, you first call `usePlayQuizzMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlayQuizzMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [playQuizzMutation, { data, loading, error }] = usePlayQuizzMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      gainId: // value for 'gainId'
 *      userId: // value for 'userId'
 *      score: // value for 'score'
 *      time: // value for 'time'
 *   },
 * });
 */
function usePlayQuizzMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.PlayQuizzDocument, options);
}
exports.usePlayQuizzMutation = usePlayQuizzMutation;
exports.GetQuizzByIdDocument = client_1.gql `
  query getQuizzById($id: uuid!) {
    quizz_by_pk(id: $id) {
      ...QuizzClient
    }
  }
  ${exports.QuizzClientFragmentDoc}
`;
/**
 * __useGetQuizzByIdQuery__
 *
 * To run a query within a React component, call `useGetQuizzByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizzByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizzByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetQuizzByIdQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetQuizzByIdDocument, options);
}
exports.useGetQuizzByIdQuery = useGetQuizzByIdQuery;
function useGetQuizzByIdLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetQuizzByIdDocument, options);
}
exports.useGetQuizzByIdLazyQuery = useGetQuizzByIdLazyQuery;
exports.GetInfosToPlayVoteDocument = client_1.gql `
  query getInfosToPlayVote($gameId: uuid!) {
    vote: votes_by_pk(id: $gameId) {
      ...InfosToPlayVote
    }
  }
  ${exports.InfosToPlayVoteFragmentDoc}
`;
/**
 * __useGetInfosToPlayVoteQuery__
 *
 * To run a query within a React component, call `useGetInfosToPlayVoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInfosToPlayVoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInfosToPlayVoteQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
function useGetInfosToPlayVoteQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetInfosToPlayVoteDocument, options);
}
exports.useGetInfosToPlayVoteQuery = useGetInfosToPlayVoteQuery;
function useGetInfosToPlayVoteLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetInfosToPlayVoteDocument, options);
}
exports.useGetInfosToPlayVoteLazyQuery = useGetInfosToPlayVoteLazyQuery;
exports.PlayVoteDocument = client_1.gql `
  mutation playVote(
    $gameId: uuid!
    $gainId: uuid
    $userId: uuid!
    $results: jsonb!
  ) {
    votePlayed: insert_votes_played_one(
      object: {
        game_id: $gameId
        gain_id: $gainId
        user_id: $userId
        results: $results
      }
    ) {
      ...VotePlayed
    }
  }
  ${exports.VotePlayedFragmentDoc}
`;
/**
 * __usePlayVoteMutation__
 *
 * To run a mutation, you first call `usePlayVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlayVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [playVoteMutation, { data, loading, error }] = usePlayVoteMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      gainId: // value for 'gainId'
 *      userId: // value for 'userId'
 *      results: // value for 'results'
 *   },
 * });
 */
function usePlayVoteMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.PlayVoteDocument, options);
}
exports.usePlayVoteMutation = usePlayVoteMutation;
exports.GetVoteByIdDocument = client_1.gql `
  query getVoteById($id: uuid!) {
    votes_by_pk(id: $id) {
      ...VoteClient
    }
  }
  ${exports.VoteClientFragmentDoc}
`;
/**
 * __useGetVoteByIdQuery__
 *
 * To run a query within a React component, call `useGetVoteByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVoteByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVoteByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetVoteByIdQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetVoteByIdDocument, options);
}
exports.useGetVoteByIdQuery = useGetVoteByIdQuery;
function useGetVoteByIdLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetVoteByIdDocument, options);
}
exports.useGetVoteByIdLazyQuery = useGetVoteByIdLazyQuery;
exports.GetGoodiesDocument = client_1.gql `
  query getGoodies($clientId: uuid) {
    goodies(where: { client_id: { _eq: $clientId } }) {
      ...Goodie
      client {
        picture {
          ...Asset
        }
      }
    }
  }
  ${exports.GoodieFragmentDoc}
  ${exports.AssetFragmentDoc}
`;
/**
 * __useGetGoodiesQuery__
 *
 * To run a query within a React component, call `useGetGoodiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoodiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGoodiesQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
function useGetGoodiesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGoodiesDocument, options);
}
exports.useGetGoodiesQuery = useGetGoodiesQuery;
function useGetGoodiesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGoodiesDocument, options);
}
exports.useGetGoodiesLazyQuery = useGetGoodiesLazyQuery;
exports.GetGoodieAnimationsDocument = client_1.gql `
  query getGoodieAnimations($id: uuid!) {
    goodies_by_pk(id: $id) {
      id
      animations {
        ...GoodieM2MAnimation
      }
    }
  }
  ${exports.GoodieM2MAnimationFragmentDoc}
`;
/**
 * __useGetGoodieAnimationsQuery__
 *
 * To run a query within a React component, call `useGetGoodieAnimationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoodieAnimationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGoodieAnimationsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetGoodieAnimationsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetGoodieAnimationsDocument, options);
}
exports.useGetGoodieAnimationsQuery = useGetGoodieAnimationsQuery;
function useGetGoodieAnimationsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetGoodieAnimationsDocument, options);
}
exports.useGetGoodieAnimationsLazyQuery = useGetGoodieAnimationsLazyQuery;
exports.PlayGoodieDocument = client_1.gql `
  mutation playGoodie($goodieId: uuid!, $userId: uuid!) {
    goodiePlayed: insert_goodies_played_one(
      object: { goodie_id: $goodieId, user_id: $userId }
    ) {
      ...GoodiePlayed
    }
  }
  ${exports.GoodiePlayedFragmentDoc}
`;
/**
 * __usePlayGoodieMutation__
 *
 * To run a mutation, you first call `usePlayGoodieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlayGoodieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [playGoodieMutation, { data, loading, error }] = usePlayGoodieMutation({
 *   variables: {
 *      goodieId: // value for 'goodieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
function usePlayGoodieMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.PlayGoodieDocument, options);
}
exports.usePlayGoodieMutation = usePlayGoodieMutation;
exports.GetTemplateByIdDocument = client_1.gql `
  query getTemplateById($templateId: uuid!) {
    templates_by_pk(id: $templateId) {
      id
      name
      html
    }
  }
`;
/**
 * __useGetTemplateByIdQuery__
 *
 * To run a query within a React component, call `useGetTemplateByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplateByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplateByIdQuery({
 *   variables: {
 *      templateId: // value for 'templateId'
 *   },
 * });
 */
function useGetTemplateByIdQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetTemplateByIdDocument, options);
}
exports.useGetTemplateByIdQuery = useGetTemplateByIdQuery;
function useGetTemplateByIdLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetTemplateByIdDocument, options);
}
exports.useGetTemplateByIdLazyQuery = useGetTemplateByIdLazyQuery;
exports.GetNearbyCardsDocument = client_1.gql `
  query getNearbyCards($location: geometry!) {
    get_nearby_games(args: { user_location: $location }) {
      ...NearbyGameCard
    }
    get_nearby_communications(args: { user_location: $location }) {
      ...NearbyCommunicationCard
    }
  }
  ${exports.NearbyGameCardFragmentDoc}
  ${exports.NearbyCommunicationCardFragmentDoc}
`;
/**
 * __useGetNearbyCardsQuery__
 *
 * To run a query within a React component, call `useGetNearbyCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNearbyCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNearbyCardsQuery({
 *   variables: {
 *      location: // value for 'location'
 *   },
 * });
 */
function useGetNearbyCardsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetNearbyCardsDocument, options);
}
exports.useGetNearbyCardsQuery = useGetNearbyCardsQuery;
function useGetNearbyCardsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetNearbyCardsDocument, options);
}
exports.useGetNearbyCardsLazyQuery = useGetNearbyCardsLazyQuery;
exports.GetNearbyPrivateDeckCardsDocument = client_1.gql `
  query getNearbyPrivateDeckCards($location: geometry!, $privateDeckId: uuid!) {
    get_nearby_private_deck_games(
      args: { user_location: $location, private_deck_id: $privateDeckId }
    ) {
      ...NearbyGameCard
    }
    get_nearby_private_deck_communications(
      args: { user_location: $location, private_deck_id: $privateDeckId }
    ) {
      ...NearbyCommunicationCard
    }
  }
  ${exports.NearbyGameCardFragmentDoc}
  ${exports.NearbyCommunicationCardFragmentDoc}
`;
/**
 * __useGetNearbyPrivateDeckCardsQuery__
 *
 * To run a query within a React component, call `useGetNearbyPrivateDeckCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNearbyPrivateDeckCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNearbyPrivateDeckCardsQuery({
 *   variables: {
 *      location: // value for 'location'
 *      privateDeckId: // value for 'privateDeckId'
 *   },
 * });
 */
function useGetNearbyPrivateDeckCardsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetNearbyPrivateDeckCardsDocument, options);
}
exports.useGetNearbyPrivateDeckCardsQuery = useGetNearbyPrivateDeckCardsQuery;
function useGetNearbyPrivateDeckCardsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetNearbyPrivateDeckCardsDocument, options);
}
exports.useGetNearbyPrivateDeckCardsLazyQuery = useGetNearbyPrivateDeckCardsLazyQuery;
exports.GetNearbyCommunicationsDocument = client_1.gql `
  query getNearbyCommunications(
    $location: geography!
    $distance: Float!
    $currentDate: date!
  ) {
    communications(
      where: {
        location: { _st_d_within: { from: $location, distance: $distance } }
        is_active: { _eq: true }
        date_start: { _lte: $currentDate }
        date_end: { _gte: $currentDate }
        is_archive: { _neq: true }
      }
    ) {
      ...NearbyCommunication
    }
  }
  ${exports.NearbyCommunicationFragmentDoc}
`;
/**
 * __useGetNearbyCommunicationsQuery__
 *
 * To run a query within a React component, call `useGetNearbyCommunicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNearbyCommunicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNearbyCommunicationsQuery({
 *   variables: {
 *      location: // value for 'location'
 *      distance: // value for 'distance'
 *      currentDate: // value for 'currentDate'
 *   },
 * });
 */
function useGetNearbyCommunicationsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetNearbyCommunicationsDocument, options);
}
exports.useGetNearbyCommunicationsQuery = useGetNearbyCommunicationsQuery;
function useGetNearbyCommunicationsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetNearbyCommunicationsDocument, options);
}
exports.useGetNearbyCommunicationsLazyQuery = useGetNearbyCommunicationsLazyQuery;
exports.GetNearbyGamesDocument = client_1.gql `
  query getNearbyGames(
    $location: geography!
    $distance: Float!
    $currentDate: date!
  ) {
    games(
      where: {
        location: { _st_d_within: { from: $location, distance: $distance } }
        is_test: { _neq: true }
        is_active: { _eq: true }
        date_start: { _lte: $currentDate }
        date_end: { _gte: $currentDate }
        is_archive: { _neq: true }
      }
    ) {
      ...NearbyGame
    }
  }
  ${exports.NearbyGameFragmentDoc}
`;
/**
 * __useGetNearbyGamesQuery__
 *
 * To run a query within a React component, call `useGetNearbyGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNearbyGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNearbyGamesQuery({
 *   variables: {
 *      location: // value for 'location'
 *      distance: // value for 'distance'
 *      currentDate: // value for 'currentDate'
 *   },
 * });
 */
function useGetNearbyGamesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetNearbyGamesDocument, options);
}
exports.useGetNearbyGamesQuery = useGetNearbyGamesQuery;
function useGetNearbyGamesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetNearbyGamesDocument, options);
}
exports.useGetNearbyGamesLazyQuery = useGetNearbyGamesLazyQuery;
exports.GetTestGamesDocument = client_1.gql `
  query getTestGames {
    games(where: { is_test: { _eq: true } }) {
      ...NearbyGame
    }
  }
  ${exports.NearbyGameFragmentDoc}
`;
/**
 * __useGetTestGamesQuery__
 *
 * To run a query within a React component, call `useGetTestGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestGamesQuery({
 *   variables: {
 *   },
 * });
 */
function useGetTestGamesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetTestGamesDocument, options);
}
exports.useGetTestGamesQuery = useGetTestGamesQuery;
function useGetTestGamesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetTestGamesDocument, options);
}
exports.useGetTestGamesLazyQuery = useGetTestGamesLazyQuery;
exports.GetPrivateDeckByCodeDocument = client_1.gql `
  query getPrivateDeckByCode($code: String!) {
    privates_decks(
      where: { code: { _eq: $code }, is_archive: { _neq: true } }
    ) {
      ...PrivateDeck
    }
  }
  ${exports.PrivateDeckFragmentDoc}
`;
/**
 * __useGetPrivateDeckByCodeQuery__
 *
 * To run a query within a React component, call `useGetPrivateDeckByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrivateDeckByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrivateDeckByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
function useGetPrivateDeckByCodeQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetPrivateDeckByCodeDocument, options);
}
exports.useGetPrivateDeckByCodeQuery = useGetPrivateDeckByCodeQuery;
function useGetPrivateDeckByCodeLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetPrivateDeckByCodeDocument, options);
}
exports.useGetPrivateDeckByCodeLazyQuery = useGetPrivateDeckByCodeLazyQuery;
exports.InsertPrivateDeckM2mUserDocument = client_1.gql `
  mutation insertPrivateDeckM2mUser($privateDeckId: uuid!) {
    insert_privates_decks_m2m_users_one(
      object: { private_deck_id: $privateDeckId }
    ) {
      ...PrivateDeckM2mUser
    }
  }
  ${exports.PrivateDeckM2mUserFragmentDoc}
`;
/**
 * __useInsertPrivateDeckM2mUserMutation__
 *
 * To run a mutation, you first call `useInsertPrivateDeckM2mUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPrivateDeckM2mUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPrivateDeckM2mUserMutation, { data, loading, error }] = useInsertPrivateDeckM2mUserMutation({
 *   variables: {
 *      privateDeckId: // value for 'privateDeckId'
 *   },
 * });
 */
function useInsertPrivateDeckM2mUserMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.InsertPrivateDeckM2mUserDocument, options);
}
exports.useInsertPrivateDeckM2mUserMutation = useInsertPrivateDeckM2mUserMutation;
exports.GetPrivatesDeckByUserDocument = client_1.gql `
  query getPrivatesDeckByUser($userId: uuid!) {
    privates_decks_m2m_users(where: { user_id: { _eq: $userId } }) {
      ...PrivateDeckM2mUser
    }
  }
  ${exports.PrivateDeckM2mUserFragmentDoc}
`;
/**
 * __useGetPrivatesDeckByUserQuery__
 *
 * To run a query within a React component, call `useGetPrivatesDeckByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrivatesDeckByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrivatesDeckByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
function useGetPrivatesDeckByUserQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetPrivatesDeckByUserDocument, options);
}
exports.useGetPrivatesDeckByUserQuery = useGetPrivatesDeckByUserQuery;
function useGetPrivatesDeckByUserLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetPrivatesDeckByUserDocument, options);
}
exports.useGetPrivatesDeckByUserLazyQuery = useGetPrivatesDeckByUserLazyQuery;
exports.GetUserByIdDocument = client_1.gql `
  query getUserById($id: uuid!) {
    users_by_pk(id: $id) {
      ...UserDisplay
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGetUserByIdQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetUserByIdDocument, options);
}
exports.useGetUserByIdQuery = useGetUserByIdQuery;
function useGetUserByIdLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetUserByIdDocument, options);
}
exports.useGetUserByIdLazyQuery = useGetUserByIdLazyQuery;
exports.UpdateUserDocument = client_1.gql `
  mutation updateUser($userId: uuid!, $user: users_set_input) {
    update_users_by_pk(pk_columns: { id: $userId }, _set: $user) {
      ...UserDisplay
    }
  }
  ${exports.UserDisplayFragmentDoc}
`;
/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      user: // value for 'user'
 *   },
 * });
 */
function useUpdateUserMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.UpdateUserDocument, options);
}
exports.useUpdateUserMutation = useUpdateUserMutation;
exports.CreateStripeCustomerDocument = client_1.gql `
  mutation createStripeCustomer($name: String!, $email: String!) {
    create_stripe_customer(name: $name, email: $email) {
      stripe_cust_id
    }
  }
`;
/**
 * __useCreateStripeCustomerMutation__
 *
 * To run a mutation, you first call `useCreateStripeCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStripeCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStripeCustomerMutation, { data, loading, error }] = useCreateStripeCustomerMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
function useCreateStripeCustomerMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.CreateStripeCustomerDocument, options);
}
exports.useCreateStripeCustomerMutation = useCreateStripeCustomerMutation;
exports.CreateStripeIntentDocument = client_1.gql `
  mutation createStripeIntent($customerId: String!) {
    create_stripe_intent(customerId: $customerId) {
      client_secret
    }
  }
`;
/**
 * __useCreateStripeIntentMutation__
 *
 * To run a mutation, you first call `useCreateStripeIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStripeIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStripeIntentMutation, { data, loading, error }] = useCreateStripeIntentMutation({
 *   variables: {
 *      customerId: // value for 'customerId'
 *   },
 * });
 */
function useCreateStripeIntentMutation(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation(exports.CreateStripeIntentDocument, options);
}
exports.useCreateStripeIntentMutation = useCreateStripeIntentMutation;
exports.GetStripeCustomerPaymentMethodsDocument = client_1.gql `
  query getStripeCustomerPaymentMethods($customer: String!, $type: String!) {
    get_stripe_customer_payment_methods(customer: $customer, type: $type) {
      id
      object
      billing_details {
        address {
          city
          country
          line1
          line2
          postal_code
          state
        }
        email
        name
        phone
      }
      card {
        brand
        country
        exp_month
        exp_year
        fingerprint
        funding
        generated_from
        last4
        wallet
      }
      created
      customer
      livemode
      type
    }
  }
`;
/**
 * __useGetStripeCustomerPaymentMethodsQuery__
 *
 * To run a query within a React component, call `useGetStripeCustomerPaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStripeCustomerPaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStripeCustomerPaymentMethodsQuery({
 *   variables: {
 *      customer: // value for 'customer'
 *      type: // value for 'type'
 *   },
 * });
 */
function useGetStripeCustomerPaymentMethodsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GetStripeCustomerPaymentMethodsDocument, options);
}
exports.useGetStripeCustomerPaymentMethodsQuery = useGetStripeCustomerPaymentMethodsQuery;
function useGetStripeCustomerPaymentMethodsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GetStripeCustomerPaymentMethodsDocument, options);
}
exports.useGetStripeCustomerPaymentMethodsLazyQuery = useGetStripeCustomerPaymentMethodsLazyQuery;
const result = {
    possibleTypes: {},
};
exports.default = result;
