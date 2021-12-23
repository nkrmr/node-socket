"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimatesM2mEntitiesConstraint = exports.EstimatesConstraint = exports.CommunicationsUpdateColumn = exports.CommunicationsTypesUpdateColumn = exports.CommunicationsTypesSelectColumn = exports.CommunicationsTypesConstraint = exports.CommunicationsSelectColumn = exports.CommunicationsConstraint = exports.ClientsUpdateColumn = exports.ClientsSelectColumn = exports.ClientsRolesUpdateColumn = exports.ClientsRolesSelectColumn = exports.ClientsRolesEnum = exports.ClientsRolesConstraint = exports.ClientsPasswordForgottenTokensUpdateColumn = exports.ClientsPasswordForgottenTokensSelectColumn = exports.ClientsPasswordForgottenTokensConstraint = exports.ClientsConstraint = exports.AssetsUpdateColumn = exports.AssetsTypesUpdateColumn = exports.AssetsTypesSelectColumn = exports.AssetsTypesEnum = exports.AssetsTypesConstraint = exports.AssetsSelectColumn = exports.AssetsConstraint = exports.ArUpdateColumn = exports.ArTrackersUpdateColumn = exports.ArTrackersSelectColumn = exports.ArTrackersConstraint = exports.ArTrackerPositionsUpdateColumn = exports.ArTrackerPositionsSelectColumn = exports.ArTrackerPositionsEnum = exports.ArTrackerPositionsConstraint = exports.ArSelectColumn = exports.ArPlayedUpdateColumn = exports.ArPlayedSelectColumn = exports.ArPlayedConstraint = exports.ArM2mAnimationsUpdateColumn = exports.ArM2mAnimationsSelectColumn = exports.ArM2mAnimationsConstraint = exports.ArConstraint = exports.AnimationsUpdateColumn = exports.AnimationsSelectColumn = exports.AnimationsM2mAssetsUpdateColumn = exports.AnimationsM2mAssetsSelectColumn = exports.AnimationsM2mAssetsConstraint = exports.AnimationsConstraint = exports.AddressesUpdateColumn = exports.AddressesSelectColumn = exports.AddressesConstraint = void 0;
exports.GamesValorizationsSelectColumn = exports.GamesValorizationsEnum = exports.GamesValorizationsConstraint = exports.GamesUpdateColumn = exports.GamesTypesUpdateColumn = exports.GamesTypesSelectColumn = exports.GamesTypesConstraint = exports.GamesSelectColumn = exports.GamesPricesUpdateColumn = exports.GamesPricesTypesUpdateColumn = exports.GamesPricesTypesSelectColumn = exports.GamesPricesTypesConstraint = exports.GamesPricesSelectColumn = exports.GamesPricesConstraint = exports.GamesPlayedUpdateColumn = exports.GamesPlayedSelectColumn = exports.GamesPlayedParticipationsByDaySelectColumn = exports.GamesPlayedParticipationsByCurrentDayHoursSelectColumn = exports.GamesPlayedGainsByDaySelectColumn = exports.GamesPlayedGainsByCurrentDayHoursSelectColumn = exports.GamesPlayedConstraint = exports.GamesGainsUpdateColumn = exports.GamesGainsSelectColumn = exports.GamesGainsConstraint = exports.GamesGainsAvailableSelectColumn = exports.GamesFrequenciesUpdateColumn = exports.GamesFrequenciesSelectColumn = exports.GamesFrequenciesEnum = exports.GamesFrequenciesConstraint = exports.GamesConstraint = exports.GainsVirtualsUpdateColumn = exports.GainsVirtualsTypesUpdateColumn = exports.GainsVirtualsTypesSelectColumn = exports.GainsVirtualsTypesConstraint = exports.GainsVirtualsSelectColumn = exports.GainsVirtualsFormatsUpdateColumn = exports.GainsVirtualsFormatsSelectColumn = exports.GainsVirtualsFormatsConstraint = exports.GainsVirtualsConstraint = exports.GainsUpdateColumn = exports.GainsSelectColumn = exports.GainsConstraint = exports.EstimatesUpdateColumn = exports.EstimatesStatusUpdateColumn = exports.EstimatesStatusSelectColumn = exports.EstimatesStatusEnum = exports.EstimatesStatusConstraint = exports.EstimatesSelectColumn = exports.EstimatesM2mEntitiesUpdateColumn = exports.EstimatesM2mEntitiesSelectColumn = void 0;
exports.SurveysQuestionsAnswersSelectColumn = exports.SurveysQuestionsAnswersConstraint = exports.SurveysConstraint = exports.RandomDrawingsUpdateColumn = exports.RandomDrawingsSelectColumn = exports.RandomDrawingsConstraint = exports.QuizzUpdateColumn = exports.QuizzSelectColumn = exports.QuizzQuestionsUpdateColumn = exports.QuizzQuestionsSelectColumn = exports.QuizzQuestionsConstraint = exports.QuizzQuestionsAnswersUpdateColumn = exports.QuizzQuestionsAnswersSelectColumn = exports.QuizzQuestionsAnswersConstraint = exports.QuizzPlayedUpdateColumn = exports.QuizzPlayedSelectColumn = exports.QuizzPlayedConstraint = exports.QuizzConstraint = exports.PrivatesDecksUpdateColumn = exports.PrivatesDecksSelectColumn = exports.PrivatesDecksM2mUsersUpdateColumn = exports.PrivatesDecksM2mUsersSelectColumn = exports.PrivatesDecksM2mUsersConstraint = exports.PrivatesDecksM2mEntitiesUpdateColumn = exports.PrivatesDecksM2mEntitiesSelectColumn = exports.PrivatesDecksM2mEntitiesConstraint = exports.PrivatesDecksConstraint = exports.PhotosUpdateColumn = exports.PhotosSelectColumn = exports.PhotosConstraint = exports.OrderBy = exports.NearbyGamesUpdateColumn = exports.NearbyGamesSelectColumn = exports.NearbyGamesConstraint = exports.NearbyCommunicationsUpdateColumn = exports.NearbyCommunicationsSelectColumn = exports.NearbyCommunicationsConstraint = exports.InfosUpdateColumn = exports.InfosSelectColumn = exports.InfosConstraint = exports.GoodiesUpdateColumn = exports.GoodiesSelectColumn = exports.GoodiesPlayedUpdateColumn = exports.GoodiesPlayedSelectColumn = exports.GoodiesPlayedConstraint = exports.GoodiesM2mAnimationsUpdateColumn = exports.GoodiesM2mAnimationsSelectColumn = exports.GoodiesM2mAnimationsConstraint = exports.GoodiesConstraint = exports.GamesValorizationsUpdateColumn = void 0;
exports.VotesUpdateColumn = exports.VotesSelectionsUpdateColumn = exports.VotesSelectionsSelectColumn = exports.VotesSelectionsConstraint = exports.VotesSelectionsChoicesUpdateColumn = exports.VotesSelectionsChoicesSelectColumn = exports.VotesSelectionsChoicesConstraint = exports.VotesSelectColumn = exports.VotesPlayedSelectColumn = exports.VotesConstraint = exports.UsersUpdateColumn = exports.UsersSelectColumn = exports.UsersConstraint = exports.TemplatesUpdateColumn = exports.TemplatesSelectColumn = exports.TemplatesConstraint = exports.SurveysUpdateColumn = exports.SurveysSelectColumn = exports.SurveysQuestionsUpdateColumn = exports.SurveysQuestionsSelectColumn = exports.SurveysQuestionsConstraint = exports.SurveysQuestionsAnswersUpdateColumn = void 0;
/** unique or primary key constraints on table "addresses" */
var AddressesConstraint;
(function (AddressesConstraint) {
    /** unique or primary key constraint */
    AddressesConstraint["AddressesPkey"] = "addresses_pkey";
})(AddressesConstraint = exports.AddressesConstraint || (exports.AddressesConstraint = {}));
/** select columns of table "addresses" */
var AddressesSelectColumn;
(function (AddressesSelectColumn) {
    /** column name */
    AddressesSelectColumn["Address"] = "address";
    /** column name */
    AddressesSelectColumn["City"] = "city";
    /** column name */
    AddressesSelectColumn["Country"] = "country";
    /** column name */
    AddressesSelectColumn["Id"] = "id";
    /** column name */
    AddressesSelectColumn["Zipcode"] = "zipcode";
})(AddressesSelectColumn = exports.AddressesSelectColumn || (exports.AddressesSelectColumn = {}));
/** update columns of table "addresses" */
var AddressesUpdateColumn;
(function (AddressesUpdateColumn) {
    /** column name */
    AddressesUpdateColumn["Address"] = "address";
    /** column name */
    AddressesUpdateColumn["City"] = "city";
    /** column name */
    AddressesUpdateColumn["Country"] = "country";
    /** column name */
    AddressesUpdateColumn["Id"] = "id";
    /** column name */
    AddressesUpdateColumn["Zipcode"] = "zipcode";
})(AddressesUpdateColumn = exports.AddressesUpdateColumn || (exports.AddressesUpdateColumn = {}));
/** unique or primary key constraints on table "animations" */
var AnimationsConstraint;
(function (AnimationsConstraint) {
    /** unique or primary key constraint */
    AnimationsConstraint["AnimationsPkey"] = "animations_pkey";
})(AnimationsConstraint = exports.AnimationsConstraint || (exports.AnimationsConstraint = {}));
/** unique or primary key constraints on table "animations_m2m_assets" */
var AnimationsM2mAssetsConstraint;
(function (AnimationsM2mAssetsConstraint) {
    /** unique or primary key constraint */
    AnimationsM2mAssetsConstraint["AnimationsM2mAssetsPkey"] = "animations_m2m_assets_pkey";
})(AnimationsM2mAssetsConstraint = exports.AnimationsM2mAssetsConstraint || (exports.AnimationsM2mAssetsConstraint = {}));
/** select columns of table "animations_m2m_assets" */
var AnimationsM2mAssetsSelectColumn;
(function (AnimationsM2mAssetsSelectColumn) {
    /** column name */
    AnimationsM2mAssetsSelectColumn["AnimationId"] = "animation_id";
    /** column name */
    AnimationsM2mAssetsSelectColumn["AssetId"] = "asset_id";
    /** column name */
    AnimationsM2mAssetsSelectColumn["WhenWon"] = "when_won";
})(AnimationsM2mAssetsSelectColumn = exports.AnimationsM2mAssetsSelectColumn || (exports.AnimationsM2mAssetsSelectColumn = {}));
/** update columns of table "animations_m2m_assets" */
var AnimationsM2mAssetsUpdateColumn;
(function (AnimationsM2mAssetsUpdateColumn) {
    /** column name */
    AnimationsM2mAssetsUpdateColumn["AnimationId"] = "animation_id";
    /** column name */
    AnimationsM2mAssetsUpdateColumn["AssetId"] = "asset_id";
    /** column name */
    AnimationsM2mAssetsUpdateColumn["WhenWon"] = "when_won";
})(AnimationsM2mAssetsUpdateColumn = exports.AnimationsM2mAssetsUpdateColumn || (exports.AnimationsM2mAssetsUpdateColumn = {}));
/** select columns of table "animations" */
var AnimationsSelectColumn;
(function (AnimationsSelectColumn) {
    /** column name */
    AnimationsSelectColumn["AssetId"] = "asset_id";
    /** column name */
    AnimationsSelectColumn["ClientId"] = "client_id";
    /** column name */
    AnimationsSelectColumn["Id"] = "id";
    /** column name */
    AnimationsSelectColumn["Name"] = "name";
    /** column name */
    AnimationsSelectColumn["PortalId"] = "portal_id";
    /** column name */
    AnimationsSelectColumn["TrackerId"] = "tracker_id";
    /** column name */
    AnimationsSelectColumn["TrackerPosition"] = "tracker_position";
    /** column name */
    AnimationsSelectColumn["WonAssetId"] = "won_asset_id";
})(AnimationsSelectColumn = exports.AnimationsSelectColumn || (exports.AnimationsSelectColumn = {}));
/** update columns of table "animations" */
var AnimationsUpdateColumn;
(function (AnimationsUpdateColumn) {
    /** column name */
    AnimationsUpdateColumn["AssetId"] = "asset_id";
    /** column name */
    AnimationsUpdateColumn["ClientId"] = "client_id";
    /** column name */
    AnimationsUpdateColumn["Id"] = "id";
    /** column name */
    AnimationsUpdateColumn["Name"] = "name";
    /** column name */
    AnimationsUpdateColumn["PortalId"] = "portal_id";
    /** column name */
    AnimationsUpdateColumn["TrackerId"] = "tracker_id";
    /** column name */
    AnimationsUpdateColumn["TrackerPosition"] = "tracker_position";
    /** column name */
    AnimationsUpdateColumn["WonAssetId"] = "won_asset_id";
})(AnimationsUpdateColumn = exports.AnimationsUpdateColumn || (exports.AnimationsUpdateColumn = {}));
/** unique or primary key constraints on table "ar" */
var ArConstraint;
(function (ArConstraint) {
    /** unique or primary key constraint */
    ArConstraint["ArIdKey"] = "ar_id_key";
    /** unique or primary key constraint */
    ArConstraint["ArPkey"] = "ar_pkey";
})(ArConstraint = exports.ArConstraint || (exports.ArConstraint = {}));
/** unique or primary key constraints on table "ar_m2m_animations" */
var ArM2mAnimationsConstraint;
(function (ArM2mAnimationsConstraint) {
    /** unique or primary key constraint */
    ArM2mAnimationsConstraint["ArM2mAnimationsPkey"] = "ar_m2m_animations_pkey";
})(ArM2mAnimationsConstraint = exports.ArM2mAnimationsConstraint || (exports.ArM2mAnimationsConstraint = {}));
/** select columns of table "ar_m2m_animations" */
var ArM2mAnimationsSelectColumn;
(function (ArM2mAnimationsSelectColumn) {
    /** column name */
    ArM2mAnimationsSelectColumn["AnimationId"] = "animation_id";
    /** column name */
    ArM2mAnimationsSelectColumn["ArId"] = "ar_id";
})(ArM2mAnimationsSelectColumn = exports.ArM2mAnimationsSelectColumn || (exports.ArM2mAnimationsSelectColumn = {}));
/** update columns of table "ar_m2m_animations" */
var ArM2mAnimationsUpdateColumn;
(function (ArM2mAnimationsUpdateColumn) {
    /** column name */
    ArM2mAnimationsUpdateColumn["AnimationId"] = "animation_id";
    /** column name */
    ArM2mAnimationsUpdateColumn["ArId"] = "ar_id";
})(ArM2mAnimationsUpdateColumn = exports.ArM2mAnimationsUpdateColumn || (exports.ArM2mAnimationsUpdateColumn = {}));
/** unique or primary key constraints on table "ar_played" */
var ArPlayedConstraint;
(function (ArPlayedConstraint) {
    /** unique or primary key constraint */
    ArPlayedConstraint["ArPlayedPkey"] = "ar_played_pkey";
})(ArPlayedConstraint = exports.ArPlayedConstraint || (exports.ArPlayedConstraint = {}));
/** select columns of table "ar_played" */
var ArPlayedSelectColumn;
(function (ArPlayedSelectColumn) {
    /** column name */
    ArPlayedSelectColumn["GainId"] = "gain_id";
    /** column name */
    ArPlayedSelectColumn["GainValidated"] = "gain_validated";
    /** column name */
    ArPlayedSelectColumn["GameId"] = "game_id";
    /** column name */
    ArPlayedSelectColumn["Id"] = "id";
    /** column name */
    ArPlayedSelectColumn["PlayedAt"] = "played_at";
    /** column name */
    ArPlayedSelectColumn["UserId"] = "user_id";
})(ArPlayedSelectColumn = exports.ArPlayedSelectColumn || (exports.ArPlayedSelectColumn = {}));
/** update columns of table "ar_played" */
var ArPlayedUpdateColumn;
(function (ArPlayedUpdateColumn) {
    /** column name */
    ArPlayedUpdateColumn["GainId"] = "gain_id";
    /** column name */
    ArPlayedUpdateColumn["GainValidated"] = "gain_validated";
    /** column name */
    ArPlayedUpdateColumn["GameId"] = "game_id";
    /** column name */
    ArPlayedUpdateColumn["Id"] = "id";
    /** column name */
    ArPlayedUpdateColumn["PlayedAt"] = "played_at";
    /** column name */
    ArPlayedUpdateColumn["UserId"] = "user_id";
})(ArPlayedUpdateColumn = exports.ArPlayedUpdateColumn || (exports.ArPlayedUpdateColumn = {}));
/** select columns of table "ar" */
var ArSelectColumn;
(function (ArSelectColumn) {
    /** column name */
    ArSelectColumn["Address"] = "address";
    /** column name */
    ArSelectColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    ArSelectColumn["CardImageId"] = "card_image_id";
    /** column name */
    ArSelectColumn["City"] = "city";
    /** column name */
    ArSelectColumn["ClientId"] = "client_id";
    /** column name */
    ArSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    ArSelectColumn["DateEnd"] = "date_end";
    /** column name */
    ArSelectColumn["DateStart"] = "date_start";
    /** column name */
    ArSelectColumn["Description"] = "description";
    /** column name */
    ArSelectColumn["Frequency"] = "frequency";
    /** column name */
    ArSelectColumn["Gtc"] = "gtc";
    /** column name */
    ArSelectColumn["Id"] = "id";
    /** column name */
    ArSelectColumn["Instructions"] = "instructions";
    /** column name */
    ArSelectColumn["IsActive"] = "is_active";
    /** column name */
    ArSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    ArSelectColumn["IsPrivate"] = "is_private";
    /** column name */
    ArSelectColumn["IsTest"] = "is_test";
    /** column name */
    ArSelectColumn["KeepCumulatedProbability"] = "keep_cumulated_probability";
    /** column name */
    ArSelectColumn["Location"] = "location";
    /** column name */
    ArSelectColumn["MaxParticipations"] = "max_participations";
    /** column name */
    ArSelectColumn["Name"] = "name";
    /** column name */
    ArSelectColumn["Radius"] = "radius";
    /** column name */
    ArSelectColumn["TypeId"] = "type_id";
    /** column name */
    ArSelectColumn["Tz"] = "tz";
    /** column name */
    ArSelectColumn["Valorization"] = "valorization";
    /** column name */
    ArSelectColumn["WithInstantGains"] = "with_instant_gains";
    /** column name */
    ArSelectColumn["WithMagicRandomDrawings"] = "with_magic_random_drawings";
    /** column name */
    ArSelectColumn["WithRandomDrawings"] = "with_random_drawings";
})(ArSelectColumn = exports.ArSelectColumn || (exports.ArSelectColumn = {}));
/** unique or primary key constraints on table "ar_tracker_positions" */
var ArTrackerPositionsConstraint;
(function (ArTrackerPositionsConstraint) {
    /** unique or primary key constraint */
    ArTrackerPositionsConstraint["ArTrackerPositionsPkey"] = "ar_tracker_positions_pkey";
})(ArTrackerPositionsConstraint = exports.ArTrackerPositionsConstraint || (exports.ArTrackerPositionsConstraint = {}));
var ArTrackerPositionsEnum;
(function (ArTrackerPositionsEnum) {
    ArTrackerPositionsEnum["Floor"] = "floor";
    ArTrackerPositionsEnum["Wall"] = "wall";
})(ArTrackerPositionsEnum = exports.ArTrackerPositionsEnum || (exports.ArTrackerPositionsEnum = {}));
/** select columns of table "ar_tracker_positions" */
var ArTrackerPositionsSelectColumn;
(function (ArTrackerPositionsSelectColumn) {
    /** column name */
    ArTrackerPositionsSelectColumn["Position"] = "position";
})(ArTrackerPositionsSelectColumn = exports.ArTrackerPositionsSelectColumn || (exports.ArTrackerPositionsSelectColumn = {}));
/** update columns of table "ar_tracker_positions" */
var ArTrackerPositionsUpdateColumn;
(function (ArTrackerPositionsUpdateColumn) {
    /** column name */
    ArTrackerPositionsUpdateColumn["Position"] = "position";
})(ArTrackerPositionsUpdateColumn = exports.ArTrackerPositionsUpdateColumn || (exports.ArTrackerPositionsUpdateColumn = {}));
/** unique or primary key constraints on table "ar_trackers" */
var ArTrackersConstraint;
(function (ArTrackersConstraint) {
    /** unique or primary key constraint */
    ArTrackersConstraint["ArTrackersPkey"] = "ar_trackers_pkey";
})(ArTrackersConstraint = exports.ArTrackersConstraint || (exports.ArTrackersConstraint = {}));
/** select columns of table "ar_trackers" */
var ArTrackersSelectColumn;
(function (ArTrackersSelectColumn) {
    /** column name */
    ArTrackersSelectColumn["ClientId"] = "client_id";
    /** column name */
    ArTrackersSelectColumn["Height"] = "height";
    /** column name */
    ArTrackersSelectColumn["Id"] = "id";
    /** column name */
    ArTrackersSelectColumn["ImageId"] = "image_id";
    /** column name */
    ArTrackersSelectColumn["Name"] = "name";
    /** column name */
    ArTrackersSelectColumn["QrcodeInside"] = "qrcode_inside";
    /** column name */
    ArTrackersSelectColumn["Width"] = "width";
})(ArTrackersSelectColumn = exports.ArTrackersSelectColumn || (exports.ArTrackersSelectColumn = {}));
/** update columns of table "ar_trackers" */
var ArTrackersUpdateColumn;
(function (ArTrackersUpdateColumn) {
    /** column name */
    ArTrackersUpdateColumn["ClientId"] = "client_id";
    /** column name */
    ArTrackersUpdateColumn["Height"] = "height";
    /** column name */
    ArTrackersUpdateColumn["Id"] = "id";
    /** column name */
    ArTrackersUpdateColumn["ImageId"] = "image_id";
    /** column name */
    ArTrackersUpdateColumn["Name"] = "name";
    /** column name */
    ArTrackersUpdateColumn["QrcodeInside"] = "qrcode_inside";
    /** column name */
    ArTrackersUpdateColumn["Width"] = "width";
})(ArTrackersUpdateColumn = exports.ArTrackersUpdateColumn || (exports.ArTrackersUpdateColumn = {}));
/** update columns of table "ar" */
var ArUpdateColumn;
(function (ArUpdateColumn) {
    /** column name */
    ArUpdateColumn["Address"] = "address";
    /** column name */
    ArUpdateColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    ArUpdateColumn["CardImageId"] = "card_image_id";
    /** column name */
    ArUpdateColumn["City"] = "city";
    /** column name */
    ArUpdateColumn["ClientId"] = "client_id";
    /** column name */
    ArUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    ArUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    ArUpdateColumn["DateStart"] = "date_start";
    /** column name */
    ArUpdateColumn["Description"] = "description";
    /** column name */
    ArUpdateColumn["Frequency"] = "frequency";
    /** column name */
    ArUpdateColumn["Gtc"] = "gtc";
    /** column name */
    ArUpdateColumn["Id"] = "id";
    /** column name */
    ArUpdateColumn["Instructions"] = "instructions";
    /** column name */
    ArUpdateColumn["IsActive"] = "is_active";
    /** column name */
    ArUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    ArUpdateColumn["IsPrivate"] = "is_private";
    /** column name */
    ArUpdateColumn["IsTest"] = "is_test";
    /** column name */
    ArUpdateColumn["KeepCumulatedProbability"] = "keep_cumulated_probability";
    /** column name */
    ArUpdateColumn["Location"] = "location";
    /** column name */
    ArUpdateColumn["MaxParticipations"] = "max_participations";
    /** column name */
    ArUpdateColumn["Name"] = "name";
    /** column name */
    ArUpdateColumn["Radius"] = "radius";
    /** column name */
    ArUpdateColumn["TypeId"] = "type_id";
    /** column name */
    ArUpdateColumn["Tz"] = "tz";
    /** column name */
    ArUpdateColumn["Valorization"] = "valorization";
    /** column name */
    ArUpdateColumn["WithInstantGains"] = "with_instant_gains";
    /** column name */
    ArUpdateColumn["WithMagicRandomDrawings"] = "with_magic_random_drawings";
    /** column name */
    ArUpdateColumn["WithRandomDrawings"] = "with_random_drawings";
})(ArUpdateColumn = exports.ArUpdateColumn || (exports.ArUpdateColumn = {}));
/** unique or primary key constraints on table "assets" */
var AssetsConstraint;
(function (AssetsConstraint) {
    /** unique or primary key constraint */
    AssetsConstraint["AssetsPkey"] = "assets_pkey";
})(AssetsConstraint = exports.AssetsConstraint || (exports.AssetsConstraint = {}));
/** select columns of table "assets" */
var AssetsSelectColumn;
(function (AssetsSelectColumn) {
    /** column name */
    AssetsSelectColumn["ClientId"] = "client_id";
    /** column name */
    AssetsSelectColumn["Id"] = "id";
    /** column name */
    AssetsSelectColumn["Name"] = "name";
    /** column name */
    AssetsSelectColumn["Path"] = "path";
    /** column name */
    AssetsSelectColumn["Resources"] = "resources";
    /** column name */
    AssetsSelectColumn["ScaleX"] = "scaleX";
    /** column name */
    AssetsSelectColumn["ScaleY"] = "scaleY";
    /** column name */
    AssetsSelectColumn["ScaleZ"] = "scaleZ";
    /** column name */
    AssetsSelectColumn["Type"] = "type";
    /** column name */
    AssetsSelectColumn["UserId"] = "user_id";
})(AssetsSelectColumn = exports.AssetsSelectColumn || (exports.AssetsSelectColumn = {}));
/** unique or primary key constraints on table "assets_types" */
var AssetsTypesConstraint;
(function (AssetsTypesConstraint) {
    /** unique or primary key constraint */
    AssetsTypesConstraint["AssetsTypesPkey"] = "assets_types_pkey";
})(AssetsTypesConstraint = exports.AssetsTypesConstraint || (exports.AssetsTypesConstraint = {}));
var AssetsTypesEnum;
(function (AssetsTypesEnum) {
    AssetsTypesEnum["Image"] = "image";
    AssetsTypesEnum["Image360"] = "image360";
    AssetsTypesEnum["Object3D"] = "object3D";
    AssetsTypesEnum["Portal"] = "portal";
    AssetsTypesEnum["Video"] = "video";
    AssetsTypesEnum["Video360"] = "video360";
})(AssetsTypesEnum = exports.AssetsTypesEnum || (exports.AssetsTypesEnum = {}));
/** select columns of table "assets_types" */
var AssetsTypesSelectColumn;
(function (AssetsTypesSelectColumn) {
    /** column name */
    AssetsTypesSelectColumn["Type"] = "type";
})(AssetsTypesSelectColumn = exports.AssetsTypesSelectColumn || (exports.AssetsTypesSelectColumn = {}));
/** update columns of table "assets_types" */
var AssetsTypesUpdateColumn;
(function (AssetsTypesUpdateColumn) {
    /** column name */
    AssetsTypesUpdateColumn["Type"] = "type";
})(AssetsTypesUpdateColumn = exports.AssetsTypesUpdateColumn || (exports.AssetsTypesUpdateColumn = {}));
/** update columns of table "assets" */
var AssetsUpdateColumn;
(function (AssetsUpdateColumn) {
    /** column name */
    AssetsUpdateColumn["ClientId"] = "client_id";
    /** column name */
    AssetsUpdateColumn["Id"] = "id";
    /** column name */
    AssetsUpdateColumn["Name"] = "name";
    /** column name */
    AssetsUpdateColumn["Path"] = "path";
    /** column name */
    AssetsUpdateColumn["Resources"] = "resources";
    /** column name */
    AssetsUpdateColumn["ScaleX"] = "scaleX";
    /** column name */
    AssetsUpdateColumn["ScaleY"] = "scaleY";
    /** column name */
    AssetsUpdateColumn["ScaleZ"] = "scaleZ";
    /** column name */
    AssetsUpdateColumn["Type"] = "type";
    /** column name */
    AssetsUpdateColumn["UserId"] = "user_id";
})(AssetsUpdateColumn = exports.AssetsUpdateColumn || (exports.AssetsUpdateColumn = {}));
/** unique or primary key constraints on table "clients" */
var ClientsConstraint;
(function (ClientsConstraint) {
    /** unique or primary key constraint */
    ClientsConstraint["ClientsAddressIdKey"] = "clients_address_id_key";
    /** unique or primary key constraint */
    ClientsConstraint["ClientsEmailKey"] = "clients_email_key";
    /** unique or primary key constraint */
    ClientsConstraint["ClientsPkey"] = "clients_pkey";
})(ClientsConstraint = exports.ClientsConstraint || (exports.ClientsConstraint = {}));
/** unique or primary key constraints on table "clients_password_forgotten_tokens" */
var ClientsPasswordForgottenTokensConstraint;
(function (ClientsPasswordForgottenTokensConstraint) {
    /** unique or primary key constraint */
    ClientsPasswordForgottenTokensConstraint["ClientsPasswordForgottenTokensClientIdKey"] = "clients_password_forgotten_tokens_client_id_key";
    /** unique or primary key constraint */
    ClientsPasswordForgottenTokensConstraint["ClientsPasswordForgottenTokensPkey"] = "clients_password_forgotten_tokens_pkey";
})(ClientsPasswordForgottenTokensConstraint = exports.ClientsPasswordForgottenTokensConstraint || (exports.ClientsPasswordForgottenTokensConstraint = {}));
/** select columns of table "clients_password_forgotten_tokens" */
var ClientsPasswordForgottenTokensSelectColumn;
(function (ClientsPasswordForgottenTokensSelectColumn) {
    /** column name */
    ClientsPasswordForgottenTokensSelectColumn["ClientId"] = "client_id";
    /** column name */
    ClientsPasswordForgottenTokensSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    ClientsPasswordForgottenTokensSelectColumn["Id"] = "id";
})(ClientsPasswordForgottenTokensSelectColumn = exports.ClientsPasswordForgottenTokensSelectColumn || (exports.ClientsPasswordForgottenTokensSelectColumn = {}));
/** update columns of table "clients_password_forgotten_tokens" */
var ClientsPasswordForgottenTokensUpdateColumn;
(function (ClientsPasswordForgottenTokensUpdateColumn) {
    /** column name */
    ClientsPasswordForgottenTokensUpdateColumn["ClientId"] = "client_id";
    /** column name */
    ClientsPasswordForgottenTokensUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    ClientsPasswordForgottenTokensUpdateColumn["Id"] = "id";
})(ClientsPasswordForgottenTokensUpdateColumn = exports.ClientsPasswordForgottenTokensUpdateColumn || (exports.ClientsPasswordForgottenTokensUpdateColumn = {}));
/** unique or primary key constraints on table "clients_roles" */
var ClientsRolesConstraint;
(function (ClientsRolesConstraint) {
    /** unique or primary key constraint */
    ClientsRolesConstraint["ClientsRolesPkey"] = "clients_roles_pkey";
})(ClientsRolesConstraint = exports.ClientsRolesConstraint || (exports.ClientsRolesConstraint = {}));
var ClientsRolesEnum;
(function (ClientsRolesEnum) {
    ClientsRolesEnum["Admin"] = "admin";
    ClientsRolesEnum["Client"] = "client";
    ClientsRolesEnum["Reseller"] = "reseller";
})(ClientsRolesEnum = exports.ClientsRolesEnum || (exports.ClientsRolesEnum = {}));
/** select columns of table "clients_roles" */
var ClientsRolesSelectColumn;
(function (ClientsRolesSelectColumn) {
    /** column name */
    ClientsRolesSelectColumn["Name"] = "name";
})(ClientsRolesSelectColumn = exports.ClientsRolesSelectColumn || (exports.ClientsRolesSelectColumn = {}));
/** update columns of table "clients_roles" */
var ClientsRolesUpdateColumn;
(function (ClientsRolesUpdateColumn) {
    /** column name */
    ClientsRolesUpdateColumn["Name"] = "name";
})(ClientsRolesUpdateColumn = exports.ClientsRolesUpdateColumn || (exports.ClientsRolesUpdateColumn = {}));
/** select columns of table "clients" */
var ClientsSelectColumn;
(function (ClientsSelectColumn) {
    /** column name */
    ClientsSelectColumn["AddressId"] = "address_id";
    /** column name */
    ClientsSelectColumn["Company"] = "company";
    /** column name */
    ClientsSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    ClientsSelectColumn["Discount"] = "discount";
    /** column name */
    ClientsSelectColumn["Email"] = "email";
    /** column name */
    ClientsSelectColumn["FirstName"] = "first_name";
    /** column name */
    ClientsSelectColumn["Id"] = "id";
    /** column name */
    ClientsSelectColumn["IsActive"] = "is_active";
    /** column name */
    ClientsSelectColumn["Name"] = "name";
    /** column name */
    ClientsSelectColumn["Password"] = "password";
    /** column name */
    ClientsSelectColumn["Phone"] = "phone";
    /** column name */
    ClientsSelectColumn["PictureId"] = "picture_id";
    /** column name */
    ClientsSelectColumn["ResellerId"] = "reseller_id";
    /** column name */
    ClientsSelectColumn["Role"] = "role";
    /** column name */
    ClientsSelectColumn["StripeCustomerId"] = "stripe_customer_id";
    /** column name */
    ClientsSelectColumn["VatId"] = "vat_id";
})(ClientsSelectColumn = exports.ClientsSelectColumn || (exports.ClientsSelectColumn = {}));
/** update columns of table "clients" */
var ClientsUpdateColumn;
(function (ClientsUpdateColumn) {
    /** column name */
    ClientsUpdateColumn["AddressId"] = "address_id";
    /** column name */
    ClientsUpdateColumn["Company"] = "company";
    /** column name */
    ClientsUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    ClientsUpdateColumn["Discount"] = "discount";
    /** column name */
    ClientsUpdateColumn["Email"] = "email";
    /** column name */
    ClientsUpdateColumn["FirstName"] = "first_name";
    /** column name */
    ClientsUpdateColumn["Id"] = "id";
    /** column name */
    ClientsUpdateColumn["IsActive"] = "is_active";
    /** column name */
    ClientsUpdateColumn["Name"] = "name";
    /** column name */
    ClientsUpdateColumn["Password"] = "password";
    /** column name */
    ClientsUpdateColumn["Phone"] = "phone";
    /** column name */
    ClientsUpdateColumn["PictureId"] = "picture_id";
    /** column name */
    ClientsUpdateColumn["ResellerId"] = "reseller_id";
    /** column name */
    ClientsUpdateColumn["Role"] = "role";
    /** column name */
    ClientsUpdateColumn["StripeCustomerId"] = "stripe_customer_id";
    /** column name */
    ClientsUpdateColumn["VatId"] = "vat_id";
})(ClientsUpdateColumn = exports.ClientsUpdateColumn || (exports.ClientsUpdateColumn = {}));
/** unique or primary key constraints on table "communications" */
var CommunicationsConstraint;
(function (CommunicationsConstraint) {
    /** unique or primary key constraint */
    CommunicationsConstraint["CommunicationsPkey"] = "communications_pkey";
})(CommunicationsConstraint = exports.CommunicationsConstraint || (exports.CommunicationsConstraint = {}));
/** select columns of table "communications" */
var CommunicationsSelectColumn;
(function (CommunicationsSelectColumn) {
    /** column name */
    CommunicationsSelectColumn["Address"] = "address";
    /** column name */
    CommunicationsSelectColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    CommunicationsSelectColumn["CardImageId"] = "card_image_id";
    /** column name */
    CommunicationsSelectColumn["City"] = "city";
    /** column name */
    CommunicationsSelectColumn["ClientId"] = "client_id";
    /** column name */
    CommunicationsSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    CommunicationsSelectColumn["DateEnd"] = "date_end";
    /** column name */
    CommunicationsSelectColumn["DateStart"] = "date_start";
    /** column name */
    CommunicationsSelectColumn["Description"] = "description";
    /** column name */
    CommunicationsSelectColumn["Id"] = "id";
    /** column name */
    CommunicationsSelectColumn["IsActive"] = "is_active";
    /** column name */
    CommunicationsSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    CommunicationsSelectColumn["IsPrivate"] = "is_private";
    /** column name */
    CommunicationsSelectColumn["Location"] = "location";
    /** column name */
    CommunicationsSelectColumn["Name"] = "name";
    /** column name */
    CommunicationsSelectColumn["TypeId"] = "type_id";
    /** column name */
    CommunicationsSelectColumn["Tz"] = "tz";
})(CommunicationsSelectColumn = exports.CommunicationsSelectColumn || (exports.CommunicationsSelectColumn = {}));
/** unique or primary key constraints on table "communications_types" */
var CommunicationsTypesConstraint;
(function (CommunicationsTypesConstraint) {
    /** unique or primary key constraint */
    CommunicationsTypesConstraint["CommunicationsTypePkey"] = "communications_type_pkey";
    /** unique or primary key constraint */
    CommunicationsTypesConstraint["CommunicationsTypesAcronymKey"] = "communications_types_acronym_key";
})(CommunicationsTypesConstraint = exports.CommunicationsTypesConstraint || (exports.CommunicationsTypesConstraint = {}));
/** select columns of table "communications_types" */
var CommunicationsTypesSelectColumn;
(function (CommunicationsTypesSelectColumn) {
    /** column name */
    CommunicationsTypesSelectColumn["Acronym"] = "acronym";
    /** column name */
    CommunicationsTypesSelectColumn["Color"] = "color";
    /** column name */
    CommunicationsTypesSelectColumn["Id"] = "id";
    /** column name */
    CommunicationsTypesSelectColumn["Name"] = "name";
    /** column name */
    CommunicationsTypesSelectColumn["Price"] = "price";
    /** column name */
    CommunicationsTypesSelectColumn["RadiusPriceRange"] = "radius_price_range";
})(CommunicationsTypesSelectColumn = exports.CommunicationsTypesSelectColumn || (exports.CommunicationsTypesSelectColumn = {}));
/** update columns of table "communications_types" */
var CommunicationsTypesUpdateColumn;
(function (CommunicationsTypesUpdateColumn) {
    /** column name */
    CommunicationsTypesUpdateColumn["Acronym"] = "acronym";
    /** column name */
    CommunicationsTypesUpdateColumn["Color"] = "color";
    /** column name */
    CommunicationsTypesUpdateColumn["Id"] = "id";
    /** column name */
    CommunicationsTypesUpdateColumn["Name"] = "name";
    /** column name */
    CommunicationsTypesUpdateColumn["Price"] = "price";
    /** column name */
    CommunicationsTypesUpdateColumn["RadiusPriceRange"] = "radius_price_range";
})(CommunicationsTypesUpdateColumn = exports.CommunicationsTypesUpdateColumn || (exports.CommunicationsTypesUpdateColumn = {}));
/** update columns of table "communications" */
var CommunicationsUpdateColumn;
(function (CommunicationsUpdateColumn) {
    /** column name */
    CommunicationsUpdateColumn["Address"] = "address";
    /** column name */
    CommunicationsUpdateColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    CommunicationsUpdateColumn["CardImageId"] = "card_image_id";
    /** column name */
    CommunicationsUpdateColumn["City"] = "city";
    /** column name */
    CommunicationsUpdateColumn["ClientId"] = "client_id";
    /** column name */
    CommunicationsUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    CommunicationsUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    CommunicationsUpdateColumn["DateStart"] = "date_start";
    /** column name */
    CommunicationsUpdateColumn["Description"] = "description";
    /** column name */
    CommunicationsUpdateColumn["Id"] = "id";
    /** column name */
    CommunicationsUpdateColumn["IsActive"] = "is_active";
    /** column name */
    CommunicationsUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    CommunicationsUpdateColumn["IsPrivate"] = "is_private";
    /** column name */
    CommunicationsUpdateColumn["Location"] = "location";
    /** column name */
    CommunicationsUpdateColumn["Name"] = "name";
    /** column name */
    CommunicationsUpdateColumn["TypeId"] = "type_id";
    /** column name */
    CommunicationsUpdateColumn["Tz"] = "tz";
})(CommunicationsUpdateColumn = exports.CommunicationsUpdateColumn || (exports.CommunicationsUpdateColumn = {}));
/** unique or primary key constraints on table "estimates" */
var EstimatesConstraint;
(function (EstimatesConstraint) {
    /** unique or primary key constraint */
    EstimatesConstraint["EstimatesPkey"] = "estimates_pkey";
})(EstimatesConstraint = exports.EstimatesConstraint || (exports.EstimatesConstraint = {}));
/** unique or primary key constraints on table "estimates_m2m_entities" */
var EstimatesM2mEntitiesConstraint;
(function (EstimatesM2mEntitiesConstraint) {
    /** unique or primary key constraint */
    EstimatesM2mEntitiesConstraint["EstimatesM2mEntitiesPkey"] = "estimates_m2m_entities_pkey";
})(EstimatesM2mEntitiesConstraint = exports.EstimatesM2mEntitiesConstraint || (exports.EstimatesM2mEntitiesConstraint = {}));
/** select columns of table "estimates_m2m_entities" */
var EstimatesM2mEntitiesSelectColumn;
(function (EstimatesM2mEntitiesSelectColumn) {
    /** column name */
    EstimatesM2mEntitiesSelectColumn["EntityId"] = "entity_id";
    /** column name */
    EstimatesM2mEntitiesSelectColumn["EstimateId"] = "estimate_id";
    /** column name */
    EstimatesM2mEntitiesSelectColumn["Id"] = "id";
    /** column name */
    EstimatesM2mEntitiesSelectColumn["Name"] = "name";
    /** column name */
    EstimatesM2mEntitiesSelectColumn["Radius"] = "radius";
    /** column name */
    EstimatesM2mEntitiesSelectColumn["Trackers"] = "trackers";
})(EstimatesM2mEntitiesSelectColumn = exports.EstimatesM2mEntitiesSelectColumn || (exports.EstimatesM2mEntitiesSelectColumn = {}));
/** update columns of table "estimates_m2m_entities" */
var EstimatesM2mEntitiesUpdateColumn;
(function (EstimatesM2mEntitiesUpdateColumn) {
    /** column name */
    EstimatesM2mEntitiesUpdateColumn["EntityId"] = "entity_id";
    /** column name */
    EstimatesM2mEntitiesUpdateColumn["EstimateId"] = "estimate_id";
    /** column name */
    EstimatesM2mEntitiesUpdateColumn["Id"] = "id";
    /** column name */
    EstimatesM2mEntitiesUpdateColumn["Name"] = "name";
    /** column name */
    EstimatesM2mEntitiesUpdateColumn["Radius"] = "radius";
    /** column name */
    EstimatesM2mEntitiesUpdateColumn["Trackers"] = "trackers";
})(EstimatesM2mEntitiesUpdateColumn = exports.EstimatesM2mEntitiesUpdateColumn || (exports.EstimatesM2mEntitiesUpdateColumn = {}));
/** select columns of table "estimates" */
var EstimatesSelectColumn;
(function (EstimatesSelectColumn) {
    /** column name */
    EstimatesSelectColumn["ClientId"] = "client_id";
    /** column name */
    EstimatesSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    EstimatesSelectColumn["DateEnd"] = "date_end";
    /** column name */
    EstimatesSelectColumn["DateStart"] = "date_start";
    /** column name */
    EstimatesSelectColumn["Id"] = "id";
    /** column name */
    EstimatesSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    EstimatesSelectColumn["Name"] = "name";
    /** column name */
    EstimatesSelectColumn["ParticipationsCredits"] = "participations_credits";
    /** column name */
    EstimatesSelectColumn["Status"] = "status";
    /** column name */
    EstimatesSelectColumn["UpdatedAt"] = "updated_at";
})(EstimatesSelectColumn = exports.EstimatesSelectColumn || (exports.EstimatesSelectColumn = {}));
/** unique or primary key constraints on table "estimates_status" */
var EstimatesStatusConstraint;
(function (EstimatesStatusConstraint) {
    /** unique or primary key constraint */
    EstimatesStatusConstraint["EstimatesStatusPkey"] = "estimates_status_pkey";
})(EstimatesStatusConstraint = exports.EstimatesStatusConstraint || (exports.EstimatesStatusConstraint = {}));
var EstimatesStatusEnum;
(function (EstimatesStatusEnum) {
    /** Canceled quote */
    EstimatesStatusEnum["CanceledQuote"] = "CANCELED_QUOTE";
    /** In progress */
    EstimatesStatusEnum["InProgress"] = "IN_PROGRESS";
    /** Pending quote */
    EstimatesStatusEnum["PendingQuote"] = "PENDING_QUOTE";
    /** Validated */
    EstimatesStatusEnum["Validated"] = "VALIDATED";
})(EstimatesStatusEnum = exports.EstimatesStatusEnum || (exports.EstimatesStatusEnum = {}));
/** select columns of table "estimates_status" */
var EstimatesStatusSelectColumn;
(function (EstimatesStatusSelectColumn) {
    /** column name */
    EstimatesStatusSelectColumn["Description"] = "description";
    /** column name */
    EstimatesStatusSelectColumn["Value"] = "value";
})(EstimatesStatusSelectColumn = exports.EstimatesStatusSelectColumn || (exports.EstimatesStatusSelectColumn = {}));
/** update columns of table "estimates_status" */
var EstimatesStatusUpdateColumn;
(function (EstimatesStatusUpdateColumn) {
    /** column name */
    EstimatesStatusUpdateColumn["Description"] = "description";
    /** column name */
    EstimatesStatusUpdateColumn["Value"] = "value";
})(EstimatesStatusUpdateColumn = exports.EstimatesStatusUpdateColumn || (exports.EstimatesStatusUpdateColumn = {}));
/** update columns of table "estimates" */
var EstimatesUpdateColumn;
(function (EstimatesUpdateColumn) {
    /** column name */
    EstimatesUpdateColumn["ClientId"] = "client_id";
    /** column name */
    EstimatesUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    EstimatesUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    EstimatesUpdateColumn["DateStart"] = "date_start";
    /** column name */
    EstimatesUpdateColumn["Id"] = "id";
    /** column name */
    EstimatesUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    EstimatesUpdateColumn["Name"] = "name";
    /** column name */
    EstimatesUpdateColumn["ParticipationsCredits"] = "participations_credits";
    /** column name */
    EstimatesUpdateColumn["Status"] = "status";
    /** column name */
    EstimatesUpdateColumn["UpdatedAt"] = "updated_at";
})(EstimatesUpdateColumn = exports.EstimatesUpdateColumn || (exports.EstimatesUpdateColumn = {}));
/** unique or primary key constraints on table "gains" */
var GainsConstraint;
(function (GainsConstraint) {
    /** unique or primary key constraint */
    GainsConstraint["GainsPkey"] = "Gains_pkey";
})(GainsConstraint = exports.GainsConstraint || (exports.GainsConstraint = {}));
/** select columns of table "gains" */
var GainsSelectColumn;
(function (GainsSelectColumn) {
    /** column name */
    GainsSelectColumn["ClientId"] = "client_id";
    /** column name */
    GainsSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    GainsSelectColumn["Description"] = "description";
    /** column name */
    GainsSelectColumn["Gtc"] = "gtc";
    /** column name */
    GainsSelectColumn["Id"] = "id";
    /** column name */
    GainsSelectColumn["ImageId"] = "image_id";
    /** column name */
    GainsSelectColumn["Instructions"] = "instructions";
    /** column name */
    GainsSelectColumn["IsActive"] = "is_active";
    /** column name */
    GainsSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    GainsSelectColumn["IsVirtual"] = "is_virtual";
    /** column name */
    GainsSelectColumn["Name"] = "name";
    /** column name */
    GainsSelectColumn["Stock"] = "stock";
    /** column name */
    GainsSelectColumn["TemplateId"] = "template_id";
})(GainsSelectColumn = exports.GainsSelectColumn || (exports.GainsSelectColumn = {}));
/** update columns of table "gains" */
var GainsUpdateColumn;
(function (GainsUpdateColumn) {
    /** column name */
    GainsUpdateColumn["ClientId"] = "client_id";
    /** column name */
    GainsUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    GainsUpdateColumn["Description"] = "description";
    /** column name */
    GainsUpdateColumn["Gtc"] = "gtc";
    /** column name */
    GainsUpdateColumn["Id"] = "id";
    /** column name */
    GainsUpdateColumn["ImageId"] = "image_id";
    /** column name */
    GainsUpdateColumn["Instructions"] = "instructions";
    /** column name */
    GainsUpdateColumn["IsActive"] = "is_active";
    /** column name */
    GainsUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    GainsUpdateColumn["IsVirtual"] = "is_virtual";
    /** column name */
    GainsUpdateColumn["Name"] = "name";
    /** column name */
    GainsUpdateColumn["Stock"] = "stock";
    /** column name */
    GainsUpdateColumn["TemplateId"] = "template_id";
})(GainsUpdateColumn = exports.GainsUpdateColumn || (exports.GainsUpdateColumn = {}));
/** unique or primary key constraints on table "gains_virtuals" */
var GainsVirtualsConstraint;
(function (GainsVirtualsConstraint) {
    /** unique or primary key constraint */
    GainsVirtualsConstraint["GainsVirtualPkey"] = "gains_virtual_pkey";
    /** unique or primary key constraint */
    GainsVirtualsConstraint["GainsVirtualsValueGainIdKey"] = "gains_virtuals_value_gain_id_key";
})(GainsVirtualsConstraint = exports.GainsVirtualsConstraint || (exports.GainsVirtualsConstraint = {}));
/** unique or primary key constraints on table "gains_virtuals_formats" */
var GainsVirtualsFormatsConstraint;
(function (GainsVirtualsFormatsConstraint) {
    /** unique or primary key constraint */
    GainsVirtualsFormatsConstraint["GainsVirtualsFormatsPkey"] = "gains_virtuals_formats_pkey";
})(GainsVirtualsFormatsConstraint = exports.GainsVirtualsFormatsConstraint || (exports.GainsVirtualsFormatsConstraint = {}));
/** select columns of table "gains_virtuals_formats" */
var GainsVirtualsFormatsSelectColumn;
(function (GainsVirtualsFormatsSelectColumn) {
    /** column name */
    GainsVirtualsFormatsSelectColumn["Description"] = "description";
    /** column name */
    GainsVirtualsFormatsSelectColumn["Value"] = "value";
})(GainsVirtualsFormatsSelectColumn = exports.GainsVirtualsFormatsSelectColumn || (exports.GainsVirtualsFormatsSelectColumn = {}));
/** update columns of table "gains_virtuals_formats" */
var GainsVirtualsFormatsUpdateColumn;
(function (GainsVirtualsFormatsUpdateColumn) {
    /** column name */
    GainsVirtualsFormatsUpdateColumn["Description"] = "description";
    /** column name */
    GainsVirtualsFormatsUpdateColumn["Value"] = "value";
})(GainsVirtualsFormatsUpdateColumn = exports.GainsVirtualsFormatsUpdateColumn || (exports.GainsVirtualsFormatsUpdateColumn = {}));
/** select columns of table "gains_virtuals" */
var GainsVirtualsSelectColumn;
(function (GainsVirtualsSelectColumn) {
    /** column name */
    GainsVirtualsSelectColumn["Format"] = "format";
    /** column name */
    GainsVirtualsSelectColumn["GainId"] = "gain_id";
    /** column name */
    GainsVirtualsSelectColumn["Id"] = "id";
    /** column name */
    GainsVirtualsSelectColumn["Value"] = "value";
})(GainsVirtualsSelectColumn = exports.GainsVirtualsSelectColumn || (exports.GainsVirtualsSelectColumn = {}));
/** unique or primary key constraints on table "gains_virtuals_types" */
var GainsVirtualsTypesConstraint;
(function (GainsVirtualsTypesConstraint) {
    /** unique or primary key constraint */
    GainsVirtualsTypesConstraint["GainsVirtualsTypesPkey"] = "gains_virtuals_types_pkey";
})(GainsVirtualsTypesConstraint = exports.GainsVirtualsTypesConstraint || (exports.GainsVirtualsTypesConstraint = {}));
/** select columns of table "gains_virtuals_types" */
var GainsVirtualsTypesSelectColumn;
(function (GainsVirtualsTypesSelectColumn) {
    /** column name */
    GainsVirtualsTypesSelectColumn["Description"] = "description";
    /** column name */
    GainsVirtualsTypesSelectColumn["Value"] = "value";
})(GainsVirtualsTypesSelectColumn = exports.GainsVirtualsTypesSelectColumn || (exports.GainsVirtualsTypesSelectColumn = {}));
/** update columns of table "gains_virtuals_types" */
var GainsVirtualsTypesUpdateColumn;
(function (GainsVirtualsTypesUpdateColumn) {
    /** column name */
    GainsVirtualsTypesUpdateColumn["Description"] = "description";
    /** column name */
    GainsVirtualsTypesUpdateColumn["Value"] = "value";
})(GainsVirtualsTypesUpdateColumn = exports.GainsVirtualsTypesUpdateColumn || (exports.GainsVirtualsTypesUpdateColumn = {}));
/** update columns of table "gains_virtuals" */
var GainsVirtualsUpdateColumn;
(function (GainsVirtualsUpdateColumn) {
    /** column name */
    GainsVirtualsUpdateColumn["Format"] = "format";
    /** column name */
    GainsVirtualsUpdateColumn["GainId"] = "gain_id";
    /** column name */
    GainsVirtualsUpdateColumn["Id"] = "id";
    /** column name */
    GainsVirtualsUpdateColumn["Value"] = "value";
})(GainsVirtualsUpdateColumn = exports.GainsVirtualsUpdateColumn || (exports.GainsVirtualsUpdateColumn = {}));
/** unique or primary key constraints on table "games" */
var GamesConstraint;
(function (GamesConstraint) {
    /** unique or primary key constraint */
    GamesConstraint["GamesPkey"] = "games_pkey";
})(GamesConstraint = exports.GamesConstraint || (exports.GamesConstraint = {}));
/** unique or primary key constraints on table "games_frequencies" */
var GamesFrequenciesConstraint;
(function (GamesFrequenciesConstraint) {
    /** unique or primary key constraint */
    GamesFrequenciesConstraint["GamesFrequenciesPkey"] = "games_frequencies_pkey";
})(GamesFrequenciesConstraint = exports.GamesFrequenciesConstraint || (exports.GamesFrequenciesConstraint = {}));
var GamesFrequenciesEnum;
(function (GamesFrequenciesEnum) {
    /** Daily */
    GamesFrequenciesEnum["Daily"] = "DAILY";
    /** Monthly */
    GamesFrequenciesEnum["Monthly"] = "MONTHLY";
    /** Weekly */
    GamesFrequenciesEnum["Weekly"] = "WEEKLY";
})(GamesFrequenciesEnum = exports.GamesFrequenciesEnum || (exports.GamesFrequenciesEnum = {}));
/** select columns of table "games_frequencies" */
var GamesFrequenciesSelectColumn;
(function (GamesFrequenciesSelectColumn) {
    /** column name */
    GamesFrequenciesSelectColumn["Description"] = "description";
    /** column name */
    GamesFrequenciesSelectColumn["Value"] = "value";
})(GamesFrequenciesSelectColumn = exports.GamesFrequenciesSelectColumn || (exports.GamesFrequenciesSelectColumn = {}));
/** update columns of table "games_frequencies" */
var GamesFrequenciesUpdateColumn;
(function (GamesFrequenciesUpdateColumn) {
    /** column name */
    GamesFrequenciesUpdateColumn["Description"] = "description";
    /** column name */
    GamesFrequenciesUpdateColumn["Value"] = "value";
})(GamesFrequenciesUpdateColumn = exports.GamesFrequenciesUpdateColumn || (exports.GamesFrequenciesUpdateColumn = {}));
/** select columns of table "games_gains_available" */
var GamesGainsAvailableSelectColumn;
(function (GamesGainsAvailableSelectColumn) {
    /** column name */
    GamesGainsAvailableSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    GamesGainsAvailableSelectColumn["GainId"] = "gain_id";
    /** column name */
    GamesGainsAvailableSelectColumn["GameId"] = "game_id";
    /** column name */
    GamesGainsAvailableSelectColumn["IsActive"] = "is_active";
    /** column name */
    GamesGainsAvailableSelectColumn["IsGainActive"] = "is_gain_active";
    /** column name */
    GamesGainsAvailableSelectColumn["Probability"] = "probability";
    /** column name */
    GamesGainsAvailableSelectColumn["Stock"] = "stock";
    /** column name */
    GamesGainsAvailableSelectColumn["StockWon"] = "stock_won";
})(GamesGainsAvailableSelectColumn = exports.GamesGainsAvailableSelectColumn || (exports.GamesGainsAvailableSelectColumn = {}));
/** unique or primary key constraints on table "games_gains" */
var GamesGainsConstraint;
(function (GamesGainsConstraint) {
    /** unique or primary key constraint */
    GamesGainsConstraint["GamesGainsPkey"] = "games_gains_pkey";
})(GamesGainsConstraint = exports.GamesGainsConstraint || (exports.GamesGainsConstraint = {}));
/** select columns of table "games_gains" */
var GamesGainsSelectColumn;
(function (GamesGainsSelectColumn) {
    /** column name */
    GamesGainsSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    GamesGainsSelectColumn["GainId"] = "gain_id";
    /** column name */
    GamesGainsSelectColumn["GameId"] = "game_id";
    /** column name */
    GamesGainsSelectColumn["IsActive"] = "is_active";
    /** column name */
    GamesGainsSelectColumn["Probability"] = "probability";
    /** column name */
    GamesGainsSelectColumn["Stock"] = "stock";
    /** column name */
    GamesGainsSelectColumn["StockWon"] = "stock_won";
})(GamesGainsSelectColumn = exports.GamesGainsSelectColumn || (exports.GamesGainsSelectColumn = {}));
/** update columns of table "games_gains" */
var GamesGainsUpdateColumn;
(function (GamesGainsUpdateColumn) {
    /** column name */
    GamesGainsUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    GamesGainsUpdateColumn["GainId"] = "gain_id";
    /** column name */
    GamesGainsUpdateColumn["GameId"] = "game_id";
    /** column name */
    GamesGainsUpdateColumn["IsActive"] = "is_active";
    /** column name */
    GamesGainsUpdateColumn["Probability"] = "probability";
    /** column name */
    GamesGainsUpdateColumn["Stock"] = "stock";
    /** column name */
    GamesGainsUpdateColumn["StockWon"] = "stock_won";
})(GamesGainsUpdateColumn = exports.GamesGainsUpdateColumn || (exports.GamesGainsUpdateColumn = {}));
/** unique or primary key constraints on table "games_played" */
var GamesPlayedConstraint;
(function (GamesPlayedConstraint) {
    /** unique or primary key constraint */
    GamesPlayedConstraint["GamesPlayedPkey"] = "games_played_pkey";
})(GamesPlayedConstraint = exports.GamesPlayedConstraint || (exports.GamesPlayedConstraint = {}));
/** select columns of table "games_played_gains_by_current_day_hours" */
var GamesPlayedGainsByCurrentDayHoursSelectColumn;
(function (GamesPlayedGainsByCurrentDayHoursSelectColumn) {
    /** column name */
    GamesPlayedGainsByCurrentDayHoursSelectColumn["ClientId"] = "client_id";
    /** column name */
    GamesPlayedGainsByCurrentDayHoursSelectColumn["Date"] = "date";
    /** column name */
    GamesPlayedGainsByCurrentDayHoursSelectColumn["GainId"] = "gain_id";
    /** column name */
    GamesPlayedGainsByCurrentDayHoursSelectColumn["GameId"] = "game_id";
    /** column name */
    GamesPlayedGainsByCurrentDayHoursSelectColumn["Name"] = "name";
    /** column name */
    GamesPlayedGainsByCurrentDayHoursSelectColumn["TotalCount"] = "total_count";
})(GamesPlayedGainsByCurrentDayHoursSelectColumn = exports.GamesPlayedGainsByCurrentDayHoursSelectColumn || (exports.GamesPlayedGainsByCurrentDayHoursSelectColumn = {}));
/** select columns of table "games_played_gains_by_day" */
var GamesPlayedGainsByDaySelectColumn;
(function (GamesPlayedGainsByDaySelectColumn) {
    /** column name */
    GamesPlayedGainsByDaySelectColumn["ClientId"] = "client_id";
    /** column name */
    GamesPlayedGainsByDaySelectColumn["Date"] = "date";
    /** column name */
    GamesPlayedGainsByDaySelectColumn["GainId"] = "gain_id";
    /** column name */
    GamesPlayedGainsByDaySelectColumn["GameId"] = "game_id";
    /** column name */
    GamesPlayedGainsByDaySelectColumn["Name"] = "name";
    /** column name */
    GamesPlayedGainsByDaySelectColumn["TotalCount"] = "total_count";
})(GamesPlayedGainsByDaySelectColumn = exports.GamesPlayedGainsByDaySelectColumn || (exports.GamesPlayedGainsByDaySelectColumn = {}));
/** select columns of table "games_played_participations_by_current_day_hours" */
var GamesPlayedParticipationsByCurrentDayHoursSelectColumn;
(function (GamesPlayedParticipationsByCurrentDayHoursSelectColumn) {
    /** column name */
    GamesPlayedParticipationsByCurrentDayHoursSelectColumn["ClientId"] = "client_id";
    /** column name */
    GamesPlayedParticipationsByCurrentDayHoursSelectColumn["Date"] = "date";
    /** column name */
    GamesPlayedParticipationsByCurrentDayHoursSelectColumn["GameId"] = "game_id";
    /** column name */
    GamesPlayedParticipationsByCurrentDayHoursSelectColumn["Name"] = "name";
    /** column name */
    GamesPlayedParticipationsByCurrentDayHoursSelectColumn["TotalCount"] = "total_count";
})(GamesPlayedParticipationsByCurrentDayHoursSelectColumn = exports.GamesPlayedParticipationsByCurrentDayHoursSelectColumn || (exports.GamesPlayedParticipationsByCurrentDayHoursSelectColumn = {}));
/** select columns of table "games_played_participations_by_day" */
var GamesPlayedParticipationsByDaySelectColumn;
(function (GamesPlayedParticipationsByDaySelectColumn) {
    /** column name */
    GamesPlayedParticipationsByDaySelectColumn["ClientId"] = "client_id";
    /** column name */
    GamesPlayedParticipationsByDaySelectColumn["Date"] = "date";
    /** column name */
    GamesPlayedParticipationsByDaySelectColumn["GameId"] = "game_id";
    /** column name */
    GamesPlayedParticipationsByDaySelectColumn["Name"] = "name";
    /** column name */
    GamesPlayedParticipationsByDaySelectColumn["TotalCount"] = "total_count";
})(GamesPlayedParticipationsByDaySelectColumn = exports.GamesPlayedParticipationsByDaySelectColumn || (exports.GamesPlayedParticipationsByDaySelectColumn = {}));
/** select columns of table "games_played" */
var GamesPlayedSelectColumn;
(function (GamesPlayedSelectColumn) {
    /** column name */
    GamesPlayedSelectColumn["GainId"] = "gain_id";
    /** column name */
    GamesPlayedSelectColumn["GainValidated"] = "gain_validated";
    /** column name */
    GamesPlayedSelectColumn["GameId"] = "game_id";
    /** column name */
    GamesPlayedSelectColumn["Id"] = "id";
    /** column name */
    GamesPlayedSelectColumn["PlayedAt"] = "played_at";
    /** column name */
    GamesPlayedSelectColumn["UserId"] = "user_id";
})(GamesPlayedSelectColumn = exports.GamesPlayedSelectColumn || (exports.GamesPlayedSelectColumn = {}));
/** update columns of table "games_played" */
var GamesPlayedUpdateColumn;
(function (GamesPlayedUpdateColumn) {
    /** column name */
    GamesPlayedUpdateColumn["GainId"] = "gain_id";
    /** column name */
    GamesPlayedUpdateColumn["GainValidated"] = "gain_validated";
    /** column name */
    GamesPlayedUpdateColumn["GameId"] = "game_id";
    /** column name */
    GamesPlayedUpdateColumn["Id"] = "id";
    /** column name */
    GamesPlayedUpdateColumn["PlayedAt"] = "played_at";
    /** column name */
    GamesPlayedUpdateColumn["UserId"] = "user_id";
})(GamesPlayedUpdateColumn = exports.GamesPlayedUpdateColumn || (exports.GamesPlayedUpdateColumn = {}));
/** unique or primary key constraints on table "games_prices" */
var GamesPricesConstraint;
(function (GamesPricesConstraint) {
    /** unique or primary key constraint */
    GamesPricesConstraint["GamesPricesPkey"] = "games_prices_pkey";
})(GamesPricesConstraint = exports.GamesPricesConstraint || (exports.GamesPricesConstraint = {}));
/** select columns of table "games_prices" */
var GamesPricesSelectColumn;
(function (GamesPricesSelectColumn) {
    /** column name */
    GamesPricesSelectColumn["GameId"] = "game_id";
    /** column name */
    GamesPricesSelectColumn["Price"] = "price";
    /** column name */
    GamesPricesSelectColumn["PriceType"] = "price_type";
})(GamesPricesSelectColumn = exports.GamesPricesSelectColumn || (exports.GamesPricesSelectColumn = {}));
/** unique or primary key constraints on table "games_prices_types" */
var GamesPricesTypesConstraint;
(function (GamesPricesTypesConstraint) {
    /** unique or primary key constraint */
    GamesPricesTypesConstraint["GamesPricesTypesPkey"] = "games_prices_types_pkey";
})(GamesPricesTypesConstraint = exports.GamesPricesTypesConstraint || (exports.GamesPricesTypesConstraint = {}));
/** select columns of table "games_prices_types" */
var GamesPricesTypesSelectColumn;
(function (GamesPricesTypesSelectColumn) {
    /** column name */
    GamesPricesTypesSelectColumn["Description"] = "description";
    /** column name */
    GamesPricesTypesSelectColumn["Value"] = "value";
})(GamesPricesTypesSelectColumn = exports.GamesPricesTypesSelectColumn || (exports.GamesPricesTypesSelectColumn = {}));
/** update columns of table "games_prices_types" */
var GamesPricesTypesUpdateColumn;
(function (GamesPricesTypesUpdateColumn) {
    /** column name */
    GamesPricesTypesUpdateColumn["Description"] = "description";
    /** column name */
    GamesPricesTypesUpdateColumn["Value"] = "value";
})(GamesPricesTypesUpdateColumn = exports.GamesPricesTypesUpdateColumn || (exports.GamesPricesTypesUpdateColumn = {}));
/** update columns of table "games_prices" */
var GamesPricesUpdateColumn;
(function (GamesPricesUpdateColumn) {
    /** column name */
    GamesPricesUpdateColumn["GameId"] = "game_id";
    /** column name */
    GamesPricesUpdateColumn["Price"] = "price";
    /** column name */
    GamesPricesUpdateColumn["PriceType"] = "price_type";
})(GamesPricesUpdateColumn = exports.GamesPricesUpdateColumn || (exports.GamesPricesUpdateColumn = {}));
/** select columns of table "games" */
var GamesSelectColumn;
(function (GamesSelectColumn) {
    /** column name */
    GamesSelectColumn["Address"] = "address";
    /** column name */
    GamesSelectColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    GamesSelectColumn["CardImageId"] = "card_image_id";
    /** column name */
    GamesSelectColumn["City"] = "city";
    /** column name */
    GamesSelectColumn["ClientId"] = "client_id";
    /** column name */
    GamesSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    GamesSelectColumn["DateEnd"] = "date_end";
    /** column name */
    GamesSelectColumn["DateStart"] = "date_start";
    /** column name */
    GamesSelectColumn["Description"] = "description";
    /** column name */
    GamesSelectColumn["Frequency"] = "frequency";
    /** column name */
    GamesSelectColumn["Gtc"] = "gtc";
    /** column name */
    GamesSelectColumn["Id"] = "id";
    /** column name */
    GamesSelectColumn["Instructions"] = "instructions";
    /** column name */
    GamesSelectColumn["IsActive"] = "is_active";
    /** column name */
    GamesSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    GamesSelectColumn["IsPrivate"] = "is_private";
    /** column name */
    GamesSelectColumn["IsTest"] = "is_test";
    /** column name */
    GamesSelectColumn["KeepCumulatedProbability"] = "keep_cumulated_probability";
    /** column name */
    GamesSelectColumn["Location"] = "location";
    /** column name */
    GamesSelectColumn["MaxParticipations"] = "max_participations";
    /** column name */
    GamesSelectColumn["Name"] = "name";
    /** column name */
    GamesSelectColumn["Radius"] = "radius";
    /** column name */
    GamesSelectColumn["TypeId"] = "type_id";
    /** column name */
    GamesSelectColumn["Tz"] = "tz";
    /** column name */
    GamesSelectColumn["Valorization"] = "valorization";
    /** column name */
    GamesSelectColumn["WithInstantGains"] = "with_instant_gains";
    /** column name */
    GamesSelectColumn["WithMagicRandomDrawings"] = "with_magic_random_drawings";
    /** column name */
    GamesSelectColumn["WithRandomDrawings"] = "with_random_drawings";
})(GamesSelectColumn = exports.GamesSelectColumn || (exports.GamesSelectColumn = {}));
/** unique or primary key constraints on table "games_types" */
var GamesTypesConstraint;
(function (GamesTypesConstraint) {
    /** unique or primary key constraint */
    GamesTypesConstraint["GamesTypesPkey"] = "games_types_pkey";
})(GamesTypesConstraint = exports.GamesTypesConstraint || (exports.GamesTypesConstraint = {}));
/** select columns of table "games_types" */
var GamesTypesSelectColumn;
(function (GamesTypesSelectColumn) {
    /** column name */
    GamesTypesSelectColumn["Acronym"] = "acronym";
    /** column name */
    GamesTypesSelectColumn["Color"] = "color";
    /** column name */
    GamesTypesSelectColumn["Description"] = "description";
    /** column name */
    GamesTypesSelectColumn["Id"] = "id";
    /** column name */
    GamesTypesSelectColumn["Name"] = "name";
    /** column name */
    GamesTypesSelectColumn["ParticipationsPriceRange"] = "participations_price_range";
    /** column name */
    GamesTypesSelectColumn["Price"] = "price";
    /** column name */
    GamesTypesSelectColumn["RadiusPriceRange"] = "radius_price_range";
    /** column name */
    GamesTypesSelectColumn["TrackersPriceRange"] = "trackers_price_range";
})(GamesTypesSelectColumn = exports.GamesTypesSelectColumn || (exports.GamesTypesSelectColumn = {}));
/** update columns of table "games_types" */
var GamesTypesUpdateColumn;
(function (GamesTypesUpdateColumn) {
    /** column name */
    GamesTypesUpdateColumn["Acronym"] = "acronym";
    /** column name */
    GamesTypesUpdateColumn["Color"] = "color";
    /** column name */
    GamesTypesUpdateColumn["Description"] = "description";
    /** column name */
    GamesTypesUpdateColumn["Id"] = "id";
    /** column name */
    GamesTypesUpdateColumn["Name"] = "name";
    /** column name */
    GamesTypesUpdateColumn["ParticipationsPriceRange"] = "participations_price_range";
    /** column name */
    GamesTypesUpdateColumn["Price"] = "price";
    /** column name */
    GamesTypesUpdateColumn["RadiusPriceRange"] = "radius_price_range";
    /** column name */
    GamesTypesUpdateColumn["TrackersPriceRange"] = "trackers_price_range";
})(GamesTypesUpdateColumn = exports.GamesTypesUpdateColumn || (exports.GamesTypesUpdateColumn = {}));
/** update columns of table "games" */
var GamesUpdateColumn;
(function (GamesUpdateColumn) {
    /** column name */
    GamesUpdateColumn["Address"] = "address";
    /** column name */
    GamesUpdateColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    GamesUpdateColumn["CardImageId"] = "card_image_id";
    /** column name */
    GamesUpdateColumn["City"] = "city";
    /** column name */
    GamesUpdateColumn["ClientId"] = "client_id";
    /** column name */
    GamesUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    GamesUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    GamesUpdateColumn["DateStart"] = "date_start";
    /** column name */
    GamesUpdateColumn["Description"] = "description";
    /** column name */
    GamesUpdateColumn["Frequency"] = "frequency";
    /** column name */
    GamesUpdateColumn["Gtc"] = "gtc";
    /** column name */
    GamesUpdateColumn["Id"] = "id";
    /** column name */
    GamesUpdateColumn["Instructions"] = "instructions";
    /** column name */
    GamesUpdateColumn["IsActive"] = "is_active";
    /** column name */
    GamesUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    GamesUpdateColumn["IsPrivate"] = "is_private";
    /** column name */
    GamesUpdateColumn["IsTest"] = "is_test";
    /** column name */
    GamesUpdateColumn["KeepCumulatedProbability"] = "keep_cumulated_probability";
    /** column name */
    GamesUpdateColumn["Location"] = "location";
    /** column name */
    GamesUpdateColumn["MaxParticipations"] = "max_participations";
    /** column name */
    GamesUpdateColumn["Name"] = "name";
    /** column name */
    GamesUpdateColumn["Radius"] = "radius";
    /** column name */
    GamesUpdateColumn["TypeId"] = "type_id";
    /** column name */
    GamesUpdateColumn["Tz"] = "tz";
    /** column name */
    GamesUpdateColumn["Valorization"] = "valorization";
    /** column name */
    GamesUpdateColumn["WithInstantGains"] = "with_instant_gains";
    /** column name */
    GamesUpdateColumn["WithMagicRandomDrawings"] = "with_magic_random_drawings";
    /** column name */
    GamesUpdateColumn["WithRandomDrawings"] = "with_random_drawings";
})(GamesUpdateColumn = exports.GamesUpdateColumn || (exports.GamesUpdateColumn = {}));
/** unique or primary key constraints on table "games_valorizations" */
var GamesValorizationsConstraint;
(function (GamesValorizationsConstraint) {
    /** unique or primary key constraint */
    GamesValorizationsConstraint["GamesValorizationsPkey"] = "games_valorizations_pkey";
})(GamesValorizationsConstraint = exports.GamesValorizationsConstraint || (exports.GamesValorizationsConstraint = {}));
var GamesValorizationsEnum;
(function (GamesValorizationsEnum) {
    /** Immediate gain */
    GamesValorizationsEnum["ImmediateGain"] = "IMMEDIATE_GAIN";
    /** None */
    GamesValorizationsEnum["None"] = "NONE";
    /** Random drawing */
    GamesValorizationsEnum["RandomDrawing"] = "RANDOM_DRAWING";
})(GamesValorizationsEnum = exports.GamesValorizationsEnum || (exports.GamesValorizationsEnum = {}));
/** select columns of table "games_valorizations" */
var GamesValorizationsSelectColumn;
(function (GamesValorizationsSelectColumn) {
    /** column name */
    GamesValorizationsSelectColumn["Description"] = "description";
    /** column name */
    GamesValorizationsSelectColumn["Value"] = "value";
})(GamesValorizationsSelectColumn = exports.GamesValorizationsSelectColumn || (exports.GamesValorizationsSelectColumn = {}));
/** update columns of table "games_valorizations" */
var GamesValorizationsUpdateColumn;
(function (GamesValorizationsUpdateColumn) {
    /** column name */
    GamesValorizationsUpdateColumn["Description"] = "description";
    /** column name */
    GamesValorizationsUpdateColumn["Value"] = "value";
})(GamesValorizationsUpdateColumn = exports.GamesValorizationsUpdateColumn || (exports.GamesValorizationsUpdateColumn = {}));
/** unique or primary key constraints on table "goodies" */
var GoodiesConstraint;
(function (GoodiesConstraint) {
    /** unique or primary key constraint */
    GoodiesConstraint["GoodiesPkey"] = "goodies_pkey";
})(GoodiesConstraint = exports.GoodiesConstraint || (exports.GoodiesConstraint = {}));
/** unique or primary key constraints on table "goodies_m2m_animations" */
var GoodiesM2mAnimationsConstraint;
(function (GoodiesM2mAnimationsConstraint) {
    /** unique or primary key constraint */
    GoodiesM2mAnimationsConstraint["GoodiesM2mAnimationsPkey"] = "goodies_m2m_animations_pkey";
})(GoodiesM2mAnimationsConstraint = exports.GoodiesM2mAnimationsConstraint || (exports.GoodiesM2mAnimationsConstraint = {}));
/** select columns of table "goodies_m2m_animations" */
var GoodiesM2mAnimationsSelectColumn;
(function (GoodiesM2mAnimationsSelectColumn) {
    /** column name */
    GoodiesM2mAnimationsSelectColumn["AnimationId"] = "animation_id";
    /** column name */
    GoodiesM2mAnimationsSelectColumn["GoodieId"] = "goodie_id";
})(GoodiesM2mAnimationsSelectColumn = exports.GoodiesM2mAnimationsSelectColumn || (exports.GoodiesM2mAnimationsSelectColumn = {}));
/** update columns of table "goodies_m2m_animations" */
var GoodiesM2mAnimationsUpdateColumn;
(function (GoodiesM2mAnimationsUpdateColumn) {
    /** column name */
    GoodiesM2mAnimationsUpdateColumn["AnimationId"] = "animation_id";
    /** column name */
    GoodiesM2mAnimationsUpdateColumn["GoodieId"] = "goodie_id";
})(GoodiesM2mAnimationsUpdateColumn = exports.GoodiesM2mAnimationsUpdateColumn || (exports.GoodiesM2mAnimationsUpdateColumn = {}));
/** unique or primary key constraints on table "goodies_played" */
var GoodiesPlayedConstraint;
(function (GoodiesPlayedConstraint) {
    /** unique or primary key constraint */
    GoodiesPlayedConstraint["GoodiesPlayedPkey"] = "goodies_played_pkey";
})(GoodiesPlayedConstraint = exports.GoodiesPlayedConstraint || (exports.GoodiesPlayedConstraint = {}));
/** select columns of table "goodies_played" */
var GoodiesPlayedSelectColumn;
(function (GoodiesPlayedSelectColumn) {
    /** column name */
    GoodiesPlayedSelectColumn["GoodieId"] = "goodie_id";
    /** column name */
    GoodiesPlayedSelectColumn["Id"] = "id";
    /** column name */
    GoodiesPlayedSelectColumn["PlayedAt"] = "played_at";
    /** column name */
    GoodiesPlayedSelectColumn["UserId"] = "user_id";
})(GoodiesPlayedSelectColumn = exports.GoodiesPlayedSelectColumn || (exports.GoodiesPlayedSelectColumn = {}));
/** update columns of table "goodies_played" */
var GoodiesPlayedUpdateColumn;
(function (GoodiesPlayedUpdateColumn) {
    /** column name */
    GoodiesPlayedUpdateColumn["GoodieId"] = "goodie_id";
    /** column name */
    GoodiesPlayedUpdateColumn["Id"] = "id";
    /** column name */
    GoodiesPlayedUpdateColumn["PlayedAt"] = "played_at";
    /** column name */
    GoodiesPlayedUpdateColumn["UserId"] = "user_id";
})(GoodiesPlayedUpdateColumn = exports.GoodiesPlayedUpdateColumn || (exports.GoodiesPlayedUpdateColumn = {}));
/** select columns of table "goodies" */
var GoodiesSelectColumn;
(function (GoodiesSelectColumn) {
    /** column name */
    GoodiesSelectColumn["ClientId"] = "client_id";
    /** column name */
    GoodiesSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    GoodiesSelectColumn["DateEnd"] = "date_end";
    /** column name */
    GoodiesSelectColumn["DateStart"] = "date_start";
    /** column name */
    GoodiesSelectColumn["Description"] = "description";
    /** column name */
    GoodiesSelectColumn["Id"] = "id";
    /** column name */
    GoodiesSelectColumn["ImageId"] = "image_id";
    /** column name */
    GoodiesSelectColumn["IsActive"] = "is_active";
    /** column name */
    GoodiesSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    GoodiesSelectColumn["IsTest"] = "is_test";
    /** column name */
    GoodiesSelectColumn["Name"] = "name";
    /** column name */
    GoodiesSelectColumn["Tz"] = "tz";
})(GoodiesSelectColumn = exports.GoodiesSelectColumn || (exports.GoodiesSelectColumn = {}));
/** update columns of table "goodies" */
var GoodiesUpdateColumn;
(function (GoodiesUpdateColumn) {
    /** column name */
    GoodiesUpdateColumn["ClientId"] = "client_id";
    /** column name */
    GoodiesUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    GoodiesUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    GoodiesUpdateColumn["DateStart"] = "date_start";
    /** column name */
    GoodiesUpdateColumn["Description"] = "description";
    /** column name */
    GoodiesUpdateColumn["Id"] = "id";
    /** column name */
    GoodiesUpdateColumn["ImageId"] = "image_id";
    /** column name */
    GoodiesUpdateColumn["IsActive"] = "is_active";
    /** column name */
    GoodiesUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    GoodiesUpdateColumn["IsTest"] = "is_test";
    /** column name */
    GoodiesUpdateColumn["Name"] = "name";
    /** column name */
    GoodiesUpdateColumn["Tz"] = "tz";
})(GoodiesUpdateColumn = exports.GoodiesUpdateColumn || (exports.GoodiesUpdateColumn = {}));
/** unique or primary key constraints on table "infos" */
var InfosConstraint;
(function (InfosConstraint) {
    /** unique or primary key constraint */
    InfosConstraint["InfosIdKey"] = "infos_id_key";
    /** unique or primary key constraint */
    InfosConstraint["InfosPkey"] = "infos_pkey";
})(InfosConstraint = exports.InfosConstraint || (exports.InfosConstraint = {}));
/** select columns of table "infos" */
var InfosSelectColumn;
(function (InfosSelectColumn) {
    /** column name */
    InfosSelectColumn["Address"] = "address";
    /** column name */
    InfosSelectColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    InfosSelectColumn["CardImageId"] = "card_image_id";
    /** column name */
    InfosSelectColumn["City"] = "city";
    /** column name */
    InfosSelectColumn["ClientId"] = "client_id";
    /** column name */
    InfosSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    InfosSelectColumn["DateEnd"] = "date_end";
    /** column name */
    InfosSelectColumn["DateStart"] = "date_start";
    /** column name */
    InfosSelectColumn["Description"] = "description";
    /** column name */
    InfosSelectColumn["Design"] = "design";
    /** column name */
    InfosSelectColumn["Html"] = "html";
    /** column name */
    InfosSelectColumn["Id"] = "id";
    /** column name */
    InfosSelectColumn["IsActive"] = "is_active";
    /** column name */
    InfosSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    InfosSelectColumn["IsPrivate"] = "is_private";
    /** column name */
    InfosSelectColumn["Location"] = "location";
    /** column name */
    InfosSelectColumn["Name"] = "name";
    /** column name */
    InfosSelectColumn["TemplateId"] = "template_id";
    /** column name */
    InfosSelectColumn["TypeId"] = "type_id";
    /** column name */
    InfosSelectColumn["Tz"] = "tz";
})(InfosSelectColumn = exports.InfosSelectColumn || (exports.InfosSelectColumn = {}));
/** update columns of table "infos" */
var InfosUpdateColumn;
(function (InfosUpdateColumn) {
    /** column name */
    InfosUpdateColumn["Address"] = "address";
    /** column name */
    InfosUpdateColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    InfosUpdateColumn["CardImageId"] = "card_image_id";
    /** column name */
    InfosUpdateColumn["City"] = "city";
    /** column name */
    InfosUpdateColumn["ClientId"] = "client_id";
    /** column name */
    InfosUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    InfosUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    InfosUpdateColumn["DateStart"] = "date_start";
    /** column name */
    InfosUpdateColumn["Description"] = "description";
    /** column name */
    InfosUpdateColumn["Design"] = "design";
    /** column name */
    InfosUpdateColumn["Html"] = "html";
    /** column name */
    InfosUpdateColumn["Id"] = "id";
    /** column name */
    InfosUpdateColumn["IsActive"] = "is_active";
    /** column name */
    InfosUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    InfosUpdateColumn["IsPrivate"] = "is_private";
    /** column name */
    InfosUpdateColumn["Location"] = "location";
    /** column name */
    InfosUpdateColumn["Name"] = "name";
    /** column name */
    InfosUpdateColumn["TemplateId"] = "template_id";
    /** column name */
    InfosUpdateColumn["TypeId"] = "type_id";
    /** column name */
    InfosUpdateColumn["Tz"] = "tz";
})(InfosUpdateColumn = exports.InfosUpdateColumn || (exports.InfosUpdateColumn = {}));
/** unique or primary key constraints on table "nearby_communications" */
var NearbyCommunicationsConstraint;
(function (NearbyCommunicationsConstraint) {
    /** unique or primary key constraint */
    NearbyCommunicationsConstraint["NearbyCommunicationsPkey"] = "nearby_communications_pkey";
})(NearbyCommunicationsConstraint = exports.NearbyCommunicationsConstraint || (exports.NearbyCommunicationsConstraint = {}));
/** select columns of table "nearby_communications" */
var NearbyCommunicationsSelectColumn;
(function (NearbyCommunicationsSelectColumn) {
    /** column name */
    NearbyCommunicationsSelectColumn["Address"] = "address";
    /** column name */
    NearbyCommunicationsSelectColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    NearbyCommunicationsSelectColumn["CardImageId"] = "card_image_id";
    /** column name */
    NearbyCommunicationsSelectColumn["City"] = "city";
    /** column name */
    NearbyCommunicationsSelectColumn["ClientId"] = "client_id";
    /** column name */
    NearbyCommunicationsSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    NearbyCommunicationsSelectColumn["DateEnd"] = "date_end";
    /** column name */
    NearbyCommunicationsSelectColumn["DateStart"] = "date_start";
    /** column name */
    NearbyCommunicationsSelectColumn["Description"] = "description";
    /** column name */
    NearbyCommunicationsSelectColumn["Distance"] = "distance";
    /** column name */
    NearbyCommunicationsSelectColumn["Id"] = "id";
    /** column name */
    NearbyCommunicationsSelectColumn["IsActive"] = "is_active";
    /** column name */
    NearbyCommunicationsSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    NearbyCommunicationsSelectColumn["IsPrivate"] = "is_private";
    /** column name */
    NearbyCommunicationsSelectColumn["Location"] = "location";
    /** column name */
    NearbyCommunicationsSelectColumn["Name"] = "name";
    /** column name */
    NearbyCommunicationsSelectColumn["TypeId"] = "type_id";
    /** column name */
    NearbyCommunicationsSelectColumn["Tz"] = "tz";
})(NearbyCommunicationsSelectColumn = exports.NearbyCommunicationsSelectColumn || (exports.NearbyCommunicationsSelectColumn = {}));
/** update columns of table "nearby_communications" */
var NearbyCommunicationsUpdateColumn;
(function (NearbyCommunicationsUpdateColumn) {
    /** column name */
    NearbyCommunicationsUpdateColumn["Address"] = "address";
    /** column name */
    NearbyCommunicationsUpdateColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    NearbyCommunicationsUpdateColumn["CardImageId"] = "card_image_id";
    /** column name */
    NearbyCommunicationsUpdateColumn["City"] = "city";
    /** column name */
    NearbyCommunicationsUpdateColumn["ClientId"] = "client_id";
    /** column name */
    NearbyCommunicationsUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    NearbyCommunicationsUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    NearbyCommunicationsUpdateColumn["DateStart"] = "date_start";
    /** column name */
    NearbyCommunicationsUpdateColumn["Description"] = "description";
    /** column name */
    NearbyCommunicationsUpdateColumn["Distance"] = "distance";
    /** column name */
    NearbyCommunicationsUpdateColumn["Id"] = "id";
    /** column name */
    NearbyCommunicationsUpdateColumn["IsActive"] = "is_active";
    /** column name */
    NearbyCommunicationsUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    NearbyCommunicationsUpdateColumn["IsPrivate"] = "is_private";
    /** column name */
    NearbyCommunicationsUpdateColumn["Location"] = "location";
    /** column name */
    NearbyCommunicationsUpdateColumn["Name"] = "name";
    /** column name */
    NearbyCommunicationsUpdateColumn["TypeId"] = "type_id";
    /** column name */
    NearbyCommunicationsUpdateColumn["Tz"] = "tz";
})(NearbyCommunicationsUpdateColumn = exports.NearbyCommunicationsUpdateColumn || (exports.NearbyCommunicationsUpdateColumn = {}));
/** unique or primary key constraints on table "nearby_games" */
var NearbyGamesConstraint;
(function (NearbyGamesConstraint) {
    /** unique or primary key constraint */
    NearbyGamesConstraint["NearbyGamesPkey"] = "nearby_games_pkey";
})(NearbyGamesConstraint = exports.NearbyGamesConstraint || (exports.NearbyGamesConstraint = {}));
/** select columns of table "nearby_games" */
var NearbyGamesSelectColumn;
(function (NearbyGamesSelectColumn) {
    /** column name */
    NearbyGamesSelectColumn["Address"] = "address";
    /** column name */
    NearbyGamesSelectColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    NearbyGamesSelectColumn["CardImageId"] = "card_image_id";
    /** column name */
    NearbyGamesSelectColumn["City"] = "city";
    /** column name */
    NearbyGamesSelectColumn["ClientId"] = "client_id";
    /** column name */
    NearbyGamesSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    NearbyGamesSelectColumn["DateEnd"] = "date_end";
    /** column name */
    NearbyGamesSelectColumn["DateStart"] = "date_start";
    /** column name */
    NearbyGamesSelectColumn["Description"] = "description";
    /** column name */
    NearbyGamesSelectColumn["Distance"] = "distance";
    /** column name */
    NearbyGamesSelectColumn["Frequency"] = "frequency";
    /** column name */
    NearbyGamesSelectColumn["Gtc"] = "gtc";
    /** column name */
    NearbyGamesSelectColumn["Id"] = "id";
    /** column name */
    NearbyGamesSelectColumn["Instructions"] = "instructions";
    /** column name */
    NearbyGamesSelectColumn["IsActive"] = "is_active";
    /** column name */
    NearbyGamesSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    NearbyGamesSelectColumn["IsPrivate"] = "is_private";
    /** column name */
    NearbyGamesSelectColumn["IsTest"] = "is_test";
    /** column name */
    NearbyGamesSelectColumn["KeepCumulatedProbability"] = "keep_cumulated_probability";
    /** column name */
    NearbyGamesSelectColumn["Location"] = "location";
    /** column name */
    NearbyGamesSelectColumn["MaxParticipations"] = "max_participations";
    /** column name */
    NearbyGamesSelectColumn["Name"] = "name";
    /** column name */
    NearbyGamesSelectColumn["Radius"] = "radius";
    /** column name */
    NearbyGamesSelectColumn["TypeId"] = "type_id";
    /** column name */
    NearbyGamesSelectColumn["Tz"] = "tz";
    /** column name */
    NearbyGamesSelectColumn["Valorization"] = "valorization";
    /** column name */
    NearbyGamesSelectColumn["WithInstantGains"] = "with_instant_gains";
    /** column name */
    NearbyGamesSelectColumn["WithMagicRandomDrawings"] = "with_magic_random_drawings";
    /** column name */
    NearbyGamesSelectColumn["WithRandomDrawings"] = "with_random_drawings";
})(NearbyGamesSelectColumn = exports.NearbyGamesSelectColumn || (exports.NearbyGamesSelectColumn = {}));
/** update columns of table "nearby_games" */
var NearbyGamesUpdateColumn;
(function (NearbyGamesUpdateColumn) {
    /** column name */
    NearbyGamesUpdateColumn["Address"] = "address";
    /** column name */
    NearbyGamesUpdateColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    NearbyGamesUpdateColumn["CardImageId"] = "card_image_id";
    /** column name */
    NearbyGamesUpdateColumn["City"] = "city";
    /** column name */
    NearbyGamesUpdateColumn["ClientId"] = "client_id";
    /** column name */
    NearbyGamesUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    NearbyGamesUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    NearbyGamesUpdateColumn["DateStart"] = "date_start";
    /** column name */
    NearbyGamesUpdateColumn["Description"] = "description";
    /** column name */
    NearbyGamesUpdateColumn["Distance"] = "distance";
    /** column name */
    NearbyGamesUpdateColumn["Frequency"] = "frequency";
    /** column name */
    NearbyGamesUpdateColumn["Gtc"] = "gtc";
    /** column name */
    NearbyGamesUpdateColumn["Id"] = "id";
    /** column name */
    NearbyGamesUpdateColumn["Instructions"] = "instructions";
    /** column name */
    NearbyGamesUpdateColumn["IsActive"] = "is_active";
    /** column name */
    NearbyGamesUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    NearbyGamesUpdateColumn["IsPrivate"] = "is_private";
    /** column name */
    NearbyGamesUpdateColumn["IsTest"] = "is_test";
    /** column name */
    NearbyGamesUpdateColumn["KeepCumulatedProbability"] = "keep_cumulated_probability";
    /** column name */
    NearbyGamesUpdateColumn["Location"] = "location";
    /** column name */
    NearbyGamesUpdateColumn["MaxParticipations"] = "max_participations";
    /** column name */
    NearbyGamesUpdateColumn["Name"] = "name";
    /** column name */
    NearbyGamesUpdateColumn["Radius"] = "radius";
    /** column name */
    NearbyGamesUpdateColumn["TypeId"] = "type_id";
    /** column name */
    NearbyGamesUpdateColumn["Tz"] = "tz";
    /** column name */
    NearbyGamesUpdateColumn["Valorization"] = "valorization";
    /** column name */
    NearbyGamesUpdateColumn["WithInstantGains"] = "with_instant_gains";
    /** column name */
    NearbyGamesUpdateColumn["WithMagicRandomDrawings"] = "with_magic_random_drawings";
    /** column name */
    NearbyGamesUpdateColumn["WithRandomDrawings"] = "with_random_drawings";
})(NearbyGamesUpdateColumn = exports.NearbyGamesUpdateColumn || (exports.NearbyGamesUpdateColumn = {}));
/** column ordering options */
var OrderBy;
(function (OrderBy) {
    /** in the ascending order, nulls last */
    OrderBy["Asc"] = "asc";
    /** in the ascending order, nulls first */
    OrderBy["AscNullsFirst"] = "asc_nulls_first";
    /** in the ascending order, nulls last */
    OrderBy["AscNullsLast"] = "asc_nulls_last";
    /** in the descending order, nulls first */
    OrderBy["Desc"] = "desc";
    /** in the descending order, nulls first */
    OrderBy["DescNullsFirst"] = "desc_nulls_first";
    /** in the descending order, nulls last */
    OrderBy["DescNullsLast"] = "desc_nulls_last";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
/** unique or primary key constraints on table "photos" */
var PhotosConstraint;
(function (PhotosConstraint) {
    /** unique or primary key constraint */
    PhotosConstraint["PhotosIdKey"] = "photos_id_key";
    /** unique or primary key constraint */
    PhotosConstraint["PhotosPkey"] = "photos_pkey";
})(PhotosConstraint = exports.PhotosConstraint || (exports.PhotosConstraint = {}));
/** select columns of table "photos" */
var PhotosSelectColumn;
(function (PhotosSelectColumn) {
    /** column name */
    PhotosSelectColumn["Address"] = "address";
    /** column name */
    PhotosSelectColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    PhotosSelectColumn["CardImageId"] = "card_image_id";
    /** column name */
    PhotosSelectColumn["City"] = "city";
    /** column name */
    PhotosSelectColumn["ClientId"] = "client_id";
    /** column name */
    PhotosSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    PhotosSelectColumn["DateEnd"] = "date_end";
    /** column name */
    PhotosSelectColumn["DateStart"] = "date_start";
    /** column name */
    PhotosSelectColumn["Description"] = "description";
    /** column name */
    PhotosSelectColumn["ForegroundId"] = "foreground_id";
    /** column name */
    PhotosSelectColumn["Id"] = "id";
    /** column name */
    PhotosSelectColumn["IsActive"] = "is_active";
    /** column name */
    PhotosSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    PhotosSelectColumn["IsPrivate"] = "is_private";
    /** column name */
    PhotosSelectColumn["Location"] = "location";
    /** column name */
    PhotosSelectColumn["Name"] = "name";
    /** column name */
    PhotosSelectColumn["TypeId"] = "type_id";
    /** column name */
    PhotosSelectColumn["Tz"] = "tz";
})(PhotosSelectColumn = exports.PhotosSelectColumn || (exports.PhotosSelectColumn = {}));
/** update columns of table "photos" */
var PhotosUpdateColumn;
(function (PhotosUpdateColumn) {
    /** column name */
    PhotosUpdateColumn["Address"] = "address";
    /** column name */
    PhotosUpdateColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    PhotosUpdateColumn["CardImageId"] = "card_image_id";
    /** column name */
    PhotosUpdateColumn["City"] = "city";
    /** column name */
    PhotosUpdateColumn["ClientId"] = "client_id";
    /** column name */
    PhotosUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    PhotosUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    PhotosUpdateColumn["DateStart"] = "date_start";
    /** column name */
    PhotosUpdateColumn["Description"] = "description";
    /** column name */
    PhotosUpdateColumn["ForegroundId"] = "foreground_id";
    /** column name */
    PhotosUpdateColumn["Id"] = "id";
    /** column name */
    PhotosUpdateColumn["IsActive"] = "is_active";
    /** column name */
    PhotosUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    PhotosUpdateColumn["IsPrivate"] = "is_private";
    /** column name */
    PhotosUpdateColumn["Location"] = "location";
    /** column name */
    PhotosUpdateColumn["Name"] = "name";
    /** column name */
    PhotosUpdateColumn["TypeId"] = "type_id";
    /** column name */
    PhotosUpdateColumn["Tz"] = "tz";
})(PhotosUpdateColumn = exports.PhotosUpdateColumn || (exports.PhotosUpdateColumn = {}));
/** unique or primary key constraints on table "privates_decks" */
var PrivatesDecksConstraint;
(function (PrivatesDecksConstraint) {
    /** unique or primary key constraint */
    PrivatesDecksConstraint["PrivatesDecksClientIdCodeKey"] = "privates_decks_client_id_code_key";
    /** unique or primary key constraint */
    PrivatesDecksConstraint["PrivatesDecksPkey"] = "privates_decks_pkey";
})(PrivatesDecksConstraint = exports.PrivatesDecksConstraint || (exports.PrivatesDecksConstraint = {}));
/** unique or primary key constraints on table "privates_decks_m2m_entities" */
var PrivatesDecksM2mEntitiesConstraint;
(function (PrivatesDecksM2mEntitiesConstraint) {
    /** unique or primary key constraint */
    PrivatesDecksM2mEntitiesConstraint["PrivatesDecksM2mEntitiesPkey"] = "privates_decks_m2m_entities_pkey";
})(PrivatesDecksM2mEntitiesConstraint = exports.PrivatesDecksM2mEntitiesConstraint || (exports.PrivatesDecksM2mEntitiesConstraint = {}));
/** select columns of table "privates_decks_m2m_entities" */
var PrivatesDecksM2mEntitiesSelectColumn;
(function (PrivatesDecksM2mEntitiesSelectColumn) {
    /** column name */
    PrivatesDecksM2mEntitiesSelectColumn["EntityId"] = "entity_id";
    /** column name */
    PrivatesDecksM2mEntitiesSelectColumn["PrivateDeck"] = "private_deck";
})(PrivatesDecksM2mEntitiesSelectColumn = exports.PrivatesDecksM2mEntitiesSelectColumn || (exports.PrivatesDecksM2mEntitiesSelectColumn = {}));
/** update columns of table "privates_decks_m2m_entities" */
var PrivatesDecksM2mEntitiesUpdateColumn;
(function (PrivatesDecksM2mEntitiesUpdateColumn) {
    /** column name */
    PrivatesDecksM2mEntitiesUpdateColumn["EntityId"] = "entity_id";
    /** column name */
    PrivatesDecksM2mEntitiesUpdateColumn["PrivateDeck"] = "private_deck";
})(PrivatesDecksM2mEntitiesUpdateColumn = exports.PrivatesDecksM2mEntitiesUpdateColumn || (exports.PrivatesDecksM2mEntitiesUpdateColumn = {}));
/** unique or primary key constraints on table "privates_decks_m2m_users" */
var PrivatesDecksM2mUsersConstraint;
(function (PrivatesDecksM2mUsersConstraint) {
    /** unique or primary key constraint */
    PrivatesDecksM2mUsersConstraint["PrivatesDecksM2m2UsersPkey"] = "privates_decks_m2m2_users_pkey";
})(PrivatesDecksM2mUsersConstraint = exports.PrivatesDecksM2mUsersConstraint || (exports.PrivatesDecksM2mUsersConstraint = {}));
/** select columns of table "privates_decks_m2m_users" */
var PrivatesDecksM2mUsersSelectColumn;
(function (PrivatesDecksM2mUsersSelectColumn) {
    /** column name */
    PrivatesDecksM2mUsersSelectColumn["PrivateDeckId"] = "private_deck_id";
    /** column name */
    PrivatesDecksM2mUsersSelectColumn["UserId"] = "user_id";
})(PrivatesDecksM2mUsersSelectColumn = exports.PrivatesDecksM2mUsersSelectColumn || (exports.PrivatesDecksM2mUsersSelectColumn = {}));
/** update columns of table "privates_decks_m2m_users" */
var PrivatesDecksM2mUsersUpdateColumn;
(function (PrivatesDecksM2mUsersUpdateColumn) {
    /** column name */
    PrivatesDecksM2mUsersUpdateColumn["PrivateDeckId"] = "private_deck_id";
    /** column name */
    PrivatesDecksM2mUsersUpdateColumn["UserId"] = "user_id";
})(PrivatesDecksM2mUsersUpdateColumn = exports.PrivatesDecksM2mUsersUpdateColumn || (exports.PrivatesDecksM2mUsersUpdateColumn = {}));
/** select columns of table "privates_decks" */
var PrivatesDecksSelectColumn;
(function (PrivatesDecksSelectColumn) {
    /** column name */
    PrivatesDecksSelectColumn["ClientId"] = "client_id";
    /** column name */
    PrivatesDecksSelectColumn["Code"] = "code";
    /** column name */
    PrivatesDecksSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    PrivatesDecksSelectColumn["DateEnd"] = "date_end";
    /** column name */
    PrivatesDecksSelectColumn["DateStart"] = "date_start";
    /** column name */
    PrivatesDecksSelectColumn["Description"] = "description";
    /** column name */
    PrivatesDecksSelectColumn["Id"] = "id";
    /** column name */
    PrivatesDecksSelectColumn["IsActive"] = "is_active";
    /** column name */
    PrivatesDecksSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    PrivatesDecksSelectColumn["Name"] = "name";
})(PrivatesDecksSelectColumn = exports.PrivatesDecksSelectColumn || (exports.PrivatesDecksSelectColumn = {}));
/** update columns of table "privates_decks" */
var PrivatesDecksUpdateColumn;
(function (PrivatesDecksUpdateColumn) {
    /** column name */
    PrivatesDecksUpdateColumn["ClientId"] = "client_id";
    /** column name */
    PrivatesDecksUpdateColumn["Code"] = "code";
    /** column name */
    PrivatesDecksUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    PrivatesDecksUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    PrivatesDecksUpdateColumn["DateStart"] = "date_start";
    /** column name */
    PrivatesDecksUpdateColumn["Description"] = "description";
    /** column name */
    PrivatesDecksUpdateColumn["Id"] = "id";
    /** column name */
    PrivatesDecksUpdateColumn["IsActive"] = "is_active";
    /** column name */
    PrivatesDecksUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    PrivatesDecksUpdateColumn["Name"] = "name";
})(PrivatesDecksUpdateColumn = exports.PrivatesDecksUpdateColumn || (exports.PrivatesDecksUpdateColumn = {}));
/** unique or primary key constraints on table "quizz" */
var QuizzConstraint;
(function (QuizzConstraint) {
    /** unique or primary key constraint */
    QuizzConstraint["QuizzPkey"] = "quizz_pkey";
})(QuizzConstraint = exports.QuizzConstraint || (exports.QuizzConstraint = {}));
/** unique or primary key constraints on table "quizz_played" */
var QuizzPlayedConstraint;
(function (QuizzPlayedConstraint) {
    /** unique or primary key constraint */
    QuizzPlayedConstraint["QuizzPlayedPkey"] = "quizz_played_pkey";
})(QuizzPlayedConstraint = exports.QuizzPlayedConstraint || (exports.QuizzPlayedConstraint = {}));
/** select columns of table "quizz_played" */
var QuizzPlayedSelectColumn;
(function (QuizzPlayedSelectColumn) {
    /** column name */
    QuizzPlayedSelectColumn["GainId"] = "gain_id";
    /** column name */
    QuizzPlayedSelectColumn["GainValidated"] = "gain_validated";
    /** column name */
    QuizzPlayedSelectColumn["GameId"] = "game_id";
    /** column name */
    QuizzPlayedSelectColumn["Id"] = "id";
    /** column name */
    QuizzPlayedSelectColumn["PlayedAt"] = "played_at";
    /** column name */
    QuizzPlayedSelectColumn["Score"] = "score";
    /** column name */
    QuizzPlayedSelectColumn["Time"] = "time";
    /** column name */
    QuizzPlayedSelectColumn["UserId"] = "user_id";
})(QuizzPlayedSelectColumn = exports.QuizzPlayedSelectColumn || (exports.QuizzPlayedSelectColumn = {}));
/** update columns of table "quizz_played" */
var QuizzPlayedUpdateColumn;
(function (QuizzPlayedUpdateColumn) {
    /** column name */
    QuizzPlayedUpdateColumn["GainId"] = "gain_id";
    /** column name */
    QuizzPlayedUpdateColumn["GainValidated"] = "gain_validated";
    /** column name */
    QuizzPlayedUpdateColumn["GameId"] = "game_id";
    /** column name */
    QuizzPlayedUpdateColumn["Id"] = "id";
    /** column name */
    QuizzPlayedUpdateColumn["PlayedAt"] = "played_at";
    /** column name */
    QuizzPlayedUpdateColumn["Score"] = "score";
    /** column name */
    QuizzPlayedUpdateColumn["Time"] = "time";
    /** column name */
    QuizzPlayedUpdateColumn["UserId"] = "user_id";
})(QuizzPlayedUpdateColumn = exports.QuizzPlayedUpdateColumn || (exports.QuizzPlayedUpdateColumn = {}));
/** unique or primary key constraints on table "quizz_questions_answers" */
var QuizzQuestionsAnswersConstraint;
(function (QuizzQuestionsAnswersConstraint) {
    /** unique or primary key constraint */
    QuizzQuestionsAnswersConstraint["QuizzQuestionsAnswersPkey"] = "quizz_questions_answers_pkey";
})(QuizzQuestionsAnswersConstraint = exports.QuizzQuestionsAnswersConstraint || (exports.QuizzQuestionsAnswersConstraint = {}));
/** select columns of table "quizz_questions_answers" */
var QuizzQuestionsAnswersSelectColumn;
(function (QuizzQuestionsAnswersSelectColumn) {
    /** column name */
    QuizzQuestionsAnswersSelectColumn["Answer"] = "answer";
    /** column name */
    QuizzQuestionsAnswersSelectColumn["Id"] = "id";
    /** column name */
    QuizzQuestionsAnswersSelectColumn["IsCorrect"] = "is_correct";
    /** column name */
    QuizzQuestionsAnswersSelectColumn["Points"] = "points";
    /** column name */
    QuizzQuestionsAnswersSelectColumn["QuizzQuestionId"] = "quizz_question_id";
})(QuizzQuestionsAnswersSelectColumn = exports.QuizzQuestionsAnswersSelectColumn || (exports.QuizzQuestionsAnswersSelectColumn = {}));
/** update columns of table "quizz_questions_answers" */
var QuizzQuestionsAnswersUpdateColumn;
(function (QuizzQuestionsAnswersUpdateColumn) {
    /** column name */
    QuizzQuestionsAnswersUpdateColumn["Answer"] = "answer";
    /** column name */
    QuizzQuestionsAnswersUpdateColumn["Id"] = "id";
    /** column name */
    QuizzQuestionsAnswersUpdateColumn["IsCorrect"] = "is_correct";
    /** column name */
    QuizzQuestionsAnswersUpdateColumn["Points"] = "points";
    /** column name */
    QuizzQuestionsAnswersUpdateColumn["QuizzQuestionId"] = "quizz_question_id";
})(QuizzQuestionsAnswersUpdateColumn = exports.QuizzQuestionsAnswersUpdateColumn || (exports.QuizzQuestionsAnswersUpdateColumn = {}));
/** unique or primary key constraints on table "quizz_questions" */
var QuizzQuestionsConstraint;
(function (QuizzQuestionsConstraint) {
    /** unique or primary key constraint */
    QuizzQuestionsConstraint["QuizzQuestionPkey"] = "quizz_question_pkey";
})(QuizzQuestionsConstraint = exports.QuizzQuestionsConstraint || (exports.QuizzQuestionsConstraint = {}));
/** select columns of table "quizz_questions" */
var QuizzQuestionsSelectColumn;
(function (QuizzQuestionsSelectColumn) {
    /** column name */
    QuizzQuestionsSelectColumn["AssetId"] = "asset_id";
    /** column name */
    QuizzQuestionsSelectColumn["Id"] = "id";
    /** column name */
    QuizzQuestionsSelectColumn["Question"] = "question";
    /** column name */
    QuizzQuestionsSelectColumn["QuizzId"] = "quizz_id";
    /** column name */
    QuizzQuestionsSelectColumn["Time"] = "time";
    /** column name */
    QuizzQuestionsSelectColumn["TotalPoints"] = "total_points";
})(QuizzQuestionsSelectColumn = exports.QuizzQuestionsSelectColumn || (exports.QuizzQuestionsSelectColumn = {}));
/** update columns of table "quizz_questions" */
var QuizzQuestionsUpdateColumn;
(function (QuizzQuestionsUpdateColumn) {
    /** column name */
    QuizzQuestionsUpdateColumn["AssetId"] = "asset_id";
    /** column name */
    QuizzQuestionsUpdateColumn["Id"] = "id";
    /** column name */
    QuizzQuestionsUpdateColumn["Question"] = "question";
    /** column name */
    QuizzQuestionsUpdateColumn["QuizzId"] = "quizz_id";
    /** column name */
    QuizzQuestionsUpdateColumn["Time"] = "time";
    /** column name */
    QuizzQuestionsUpdateColumn["TotalPoints"] = "total_points";
})(QuizzQuestionsUpdateColumn = exports.QuizzQuestionsUpdateColumn || (exports.QuizzQuestionsUpdateColumn = {}));
/** select columns of table "quizz" */
var QuizzSelectColumn;
(function (QuizzSelectColumn) {
    /** column name */
    QuizzSelectColumn["Address"] = "address";
    /** column name */
    QuizzSelectColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    QuizzSelectColumn["CardImageId"] = "card_image_id";
    /** column name */
    QuizzSelectColumn["City"] = "city";
    /** column name */
    QuizzSelectColumn["ClientId"] = "client_id";
    /** column name */
    QuizzSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    QuizzSelectColumn["DateEnd"] = "date_end";
    /** column name */
    QuizzSelectColumn["DateStart"] = "date_start";
    /** column name */
    QuizzSelectColumn["Description"] = "description";
    /** column name */
    QuizzSelectColumn["Frequency"] = "frequency";
    /** column name */
    QuizzSelectColumn["Gtc"] = "gtc";
    /** column name */
    QuizzSelectColumn["Id"] = "id";
    /** column name */
    QuizzSelectColumn["Instructions"] = "instructions";
    /** column name */
    QuizzSelectColumn["IsActive"] = "is_active";
    /** column name */
    QuizzSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    QuizzSelectColumn["IsPrivate"] = "is_private";
    /** column name */
    QuizzSelectColumn["IsTest"] = "is_test";
    /** column name */
    QuizzSelectColumn["KeepCumulatedProbability"] = "keep_cumulated_probability";
    /** column name */
    QuizzSelectColumn["Location"] = "location";
    /** column name */
    QuizzSelectColumn["MaxParticipations"] = "max_participations";
    /** column name */
    QuizzSelectColumn["Name"] = "name";
    /** column name */
    QuizzSelectColumn["OrderedQuestions"] = "ordered_questions";
    /** column name */
    QuizzSelectColumn["Radius"] = "radius";
    /** column name */
    QuizzSelectColumn["TypeId"] = "type_id";
    /** column name */
    QuizzSelectColumn["Tz"] = "tz";
    /** column name */
    QuizzSelectColumn["Valorization"] = "valorization";
    /** column name */
    QuizzSelectColumn["WinningPercentage"] = "winning_percentage";
    /** column name */
    QuizzSelectColumn["WithInstantGains"] = "with_instant_gains";
    /** column name */
    QuizzSelectColumn["WithMagicRandomDrawings"] = "with_magic_random_drawings";
    /** column name */
    QuizzSelectColumn["WithRandomDrawings"] = "with_random_drawings";
})(QuizzSelectColumn = exports.QuizzSelectColumn || (exports.QuizzSelectColumn = {}));
/** update columns of table "quizz" */
var QuizzUpdateColumn;
(function (QuizzUpdateColumn) {
    /** column name */
    QuizzUpdateColumn["Address"] = "address";
    /** column name */
    QuizzUpdateColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    QuizzUpdateColumn["CardImageId"] = "card_image_id";
    /** column name */
    QuizzUpdateColumn["City"] = "city";
    /** column name */
    QuizzUpdateColumn["ClientId"] = "client_id";
    /** column name */
    QuizzUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    QuizzUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    QuizzUpdateColumn["DateStart"] = "date_start";
    /** column name */
    QuizzUpdateColumn["Description"] = "description";
    /** column name */
    QuizzUpdateColumn["Frequency"] = "frequency";
    /** column name */
    QuizzUpdateColumn["Gtc"] = "gtc";
    /** column name */
    QuizzUpdateColumn["Id"] = "id";
    /** column name */
    QuizzUpdateColumn["Instructions"] = "instructions";
    /** column name */
    QuizzUpdateColumn["IsActive"] = "is_active";
    /** column name */
    QuizzUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    QuizzUpdateColumn["IsPrivate"] = "is_private";
    /** column name */
    QuizzUpdateColumn["IsTest"] = "is_test";
    /** column name */
    QuizzUpdateColumn["KeepCumulatedProbability"] = "keep_cumulated_probability";
    /** column name */
    QuizzUpdateColumn["Location"] = "location";
    /** column name */
    QuizzUpdateColumn["MaxParticipations"] = "max_participations";
    /** column name */
    QuizzUpdateColumn["Name"] = "name";
    /** column name */
    QuizzUpdateColumn["OrderedQuestions"] = "ordered_questions";
    /** column name */
    QuizzUpdateColumn["Radius"] = "radius";
    /** column name */
    QuizzUpdateColumn["TypeId"] = "type_id";
    /** column name */
    QuizzUpdateColumn["Tz"] = "tz";
    /** column name */
    QuizzUpdateColumn["Valorization"] = "valorization";
    /** column name */
    QuizzUpdateColumn["WinningPercentage"] = "winning_percentage";
    /** column name */
    QuizzUpdateColumn["WithInstantGains"] = "with_instant_gains";
    /** column name */
    QuizzUpdateColumn["WithMagicRandomDrawings"] = "with_magic_random_drawings";
    /** column name */
    QuizzUpdateColumn["WithRandomDrawings"] = "with_random_drawings";
})(QuizzUpdateColumn = exports.QuizzUpdateColumn || (exports.QuizzUpdateColumn = {}));
/** unique or primary key constraints on table "random_drawings" */
var RandomDrawingsConstraint;
(function (RandomDrawingsConstraint) {
    /** unique or primary key constraint */
    RandomDrawingsConstraint["RandomDrawingsPkey"] = "random_drawings_pkey";
})(RandomDrawingsConstraint = exports.RandomDrawingsConstraint || (exports.RandomDrawingsConstraint = {}));
/** select columns of table "random_drawings" */
var RandomDrawingsSelectColumn;
(function (RandomDrawingsSelectColumn) {
    /** column name */
    RandomDrawingsSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    RandomDrawingsSelectColumn["GainId"] = "gain_id";
    /** column name */
    RandomDrawingsSelectColumn["GainValidated"] = "gain_validated";
    /** column name */
    RandomDrawingsSelectColumn["GameId"] = "game_id";
    /** column name */
    RandomDrawingsSelectColumn["Id"] = "id";
    /** column name */
    RandomDrawingsSelectColumn["WinnerId"] = "winner_id";
})(RandomDrawingsSelectColumn = exports.RandomDrawingsSelectColumn || (exports.RandomDrawingsSelectColumn = {}));
/** update columns of table "random_drawings" */
var RandomDrawingsUpdateColumn;
(function (RandomDrawingsUpdateColumn) {
    /** column name */
    RandomDrawingsUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    RandomDrawingsUpdateColumn["GainId"] = "gain_id";
    /** column name */
    RandomDrawingsUpdateColumn["GainValidated"] = "gain_validated";
    /** column name */
    RandomDrawingsUpdateColumn["GameId"] = "game_id";
    /** column name */
    RandomDrawingsUpdateColumn["Id"] = "id";
    /** column name */
    RandomDrawingsUpdateColumn["WinnerId"] = "winner_id";
})(RandomDrawingsUpdateColumn = exports.RandomDrawingsUpdateColumn || (exports.RandomDrawingsUpdateColumn = {}));
/** unique or primary key constraints on table "surveys" */
var SurveysConstraint;
(function (SurveysConstraint) {
    /** unique or primary key constraint */
    SurveysConstraint["SurveysIdKey"] = "surveys_id_key";
    /** unique or primary key constraint */
    SurveysConstraint["SurveysPkey"] = "surveys_pkey";
})(SurveysConstraint = exports.SurveysConstraint || (exports.SurveysConstraint = {}));
/** unique or primary key constraints on table "surveys_questions_answers" */
var SurveysQuestionsAnswersConstraint;
(function (SurveysQuestionsAnswersConstraint) {
    /** unique or primary key constraint */
    SurveysQuestionsAnswersConstraint["SurveysQuestionsAnswersPkey"] = "surveys_questions_answers_pkey";
})(SurveysQuestionsAnswersConstraint = exports.SurveysQuestionsAnswersConstraint || (exports.SurveysQuestionsAnswersConstraint = {}));
/** select columns of table "surveys_questions_answers" */
var SurveysQuestionsAnswersSelectColumn;
(function (SurveysQuestionsAnswersSelectColumn) {
    /** column name */
    SurveysQuestionsAnswersSelectColumn["Answer"] = "answer";
    /** column name */
    SurveysQuestionsAnswersSelectColumn["Id"] = "id";
    /** column name */
    SurveysQuestionsAnswersSelectColumn["SurveyQuestionId"] = "survey_question_id";
})(SurveysQuestionsAnswersSelectColumn = exports.SurveysQuestionsAnswersSelectColumn || (exports.SurveysQuestionsAnswersSelectColumn = {}));
/** update columns of table "surveys_questions_answers" */
var SurveysQuestionsAnswersUpdateColumn;
(function (SurveysQuestionsAnswersUpdateColumn) {
    /** column name */
    SurveysQuestionsAnswersUpdateColumn["Answer"] = "answer";
    /** column name */
    SurveysQuestionsAnswersUpdateColumn["Id"] = "id";
    /** column name */
    SurveysQuestionsAnswersUpdateColumn["SurveyQuestionId"] = "survey_question_id";
})(SurveysQuestionsAnswersUpdateColumn = exports.SurveysQuestionsAnswersUpdateColumn || (exports.SurveysQuestionsAnswersUpdateColumn = {}));
/** unique or primary key constraints on table "surveys_questions" */
var SurveysQuestionsConstraint;
(function (SurveysQuestionsConstraint) {
    /** unique or primary key constraint */
    SurveysQuestionsConstraint["SurveysQuestionsPkey"] = "surveys_questions_pkey";
})(SurveysQuestionsConstraint = exports.SurveysQuestionsConstraint || (exports.SurveysQuestionsConstraint = {}));
/** select columns of table "surveys_questions" */
var SurveysQuestionsSelectColumn;
(function (SurveysQuestionsSelectColumn) {
    /** column name */
    SurveysQuestionsSelectColumn["AssetId"] = "asset_id";
    /** column name */
    SurveysQuestionsSelectColumn["Id"] = "id";
    /** column name */
    SurveysQuestionsSelectColumn["Question"] = "question";
    /** column name */
    SurveysQuestionsSelectColumn["SurveyId"] = "survey_id";
})(SurveysQuestionsSelectColumn = exports.SurveysQuestionsSelectColumn || (exports.SurveysQuestionsSelectColumn = {}));
/** update columns of table "surveys_questions" */
var SurveysQuestionsUpdateColumn;
(function (SurveysQuestionsUpdateColumn) {
    /** column name */
    SurveysQuestionsUpdateColumn["AssetId"] = "asset_id";
    /** column name */
    SurveysQuestionsUpdateColumn["Id"] = "id";
    /** column name */
    SurveysQuestionsUpdateColumn["Question"] = "question";
    /** column name */
    SurveysQuestionsUpdateColumn["SurveyId"] = "survey_id";
})(SurveysQuestionsUpdateColumn = exports.SurveysQuestionsUpdateColumn || (exports.SurveysQuestionsUpdateColumn = {}));
/** select columns of table "surveys" */
var SurveysSelectColumn;
(function (SurveysSelectColumn) {
    /** column name */
    SurveysSelectColumn["Address"] = "address";
    /** column name */
    SurveysSelectColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    SurveysSelectColumn["CardImageId"] = "card_image_id";
    /** column name */
    SurveysSelectColumn["City"] = "city";
    /** column name */
    SurveysSelectColumn["ClientId"] = "client_id";
    /** column name */
    SurveysSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    SurveysSelectColumn["DateEnd"] = "date_end";
    /** column name */
    SurveysSelectColumn["DateStart"] = "date_start";
    /** column name */
    SurveysSelectColumn["Description"] = "description";
    /** column name */
    SurveysSelectColumn["Id"] = "id";
    /** column name */
    SurveysSelectColumn["IsActive"] = "is_active";
    /** column name */
    SurveysSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    SurveysSelectColumn["IsPrivate"] = "is_private";
    /** column name */
    SurveysSelectColumn["Location"] = "location";
    /** column name */
    SurveysSelectColumn["Name"] = "name";
    /** column name */
    SurveysSelectColumn["TypeId"] = "type_id";
    /** column name */
    SurveysSelectColumn["Tz"] = "tz";
})(SurveysSelectColumn = exports.SurveysSelectColumn || (exports.SurveysSelectColumn = {}));
/** update columns of table "surveys" */
var SurveysUpdateColumn;
(function (SurveysUpdateColumn) {
    /** column name */
    SurveysUpdateColumn["Address"] = "address";
    /** column name */
    SurveysUpdateColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    SurveysUpdateColumn["CardImageId"] = "card_image_id";
    /** column name */
    SurveysUpdateColumn["City"] = "city";
    /** column name */
    SurveysUpdateColumn["ClientId"] = "client_id";
    /** column name */
    SurveysUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    SurveysUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    SurveysUpdateColumn["DateStart"] = "date_start";
    /** column name */
    SurveysUpdateColumn["Description"] = "description";
    /** column name */
    SurveysUpdateColumn["Id"] = "id";
    /** column name */
    SurveysUpdateColumn["IsActive"] = "is_active";
    /** column name */
    SurveysUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    SurveysUpdateColumn["IsPrivate"] = "is_private";
    /** column name */
    SurveysUpdateColumn["Location"] = "location";
    /** column name */
    SurveysUpdateColumn["Name"] = "name";
    /** column name */
    SurveysUpdateColumn["TypeId"] = "type_id";
    /** column name */
    SurveysUpdateColumn["Tz"] = "tz";
})(SurveysUpdateColumn = exports.SurveysUpdateColumn || (exports.SurveysUpdateColumn = {}));
/** unique or primary key constraints on table "templates" */
var TemplatesConstraint;
(function (TemplatesConstraint) {
    /** unique or primary key constraint */
    TemplatesConstraint["TemplatesPkey"] = "Templates_pkey";
})(TemplatesConstraint = exports.TemplatesConstraint || (exports.TemplatesConstraint = {}));
/** select columns of table "templates" */
var TemplatesSelectColumn;
(function (TemplatesSelectColumn) {
    /** column name */
    TemplatesSelectColumn["ClientId"] = "client_id";
    /** column name */
    TemplatesSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    TemplatesSelectColumn["Design"] = "design";
    /** column name */
    TemplatesSelectColumn["Html"] = "html";
    /** column name */
    TemplatesSelectColumn["Id"] = "id";
    /** column name */
    TemplatesSelectColumn["IsActive"] = "is_active";
    /** column name */
    TemplatesSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    TemplatesSelectColumn["Name"] = "name";
    /** column name */
    TemplatesSelectColumn["UpdatedAt"] = "updated_at";
})(TemplatesSelectColumn = exports.TemplatesSelectColumn || (exports.TemplatesSelectColumn = {}));
/** update columns of table "templates" */
var TemplatesUpdateColumn;
(function (TemplatesUpdateColumn) {
    /** column name */
    TemplatesUpdateColumn["ClientId"] = "client_id";
    /** column name */
    TemplatesUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    TemplatesUpdateColumn["Design"] = "design";
    /** column name */
    TemplatesUpdateColumn["Html"] = "html";
    /** column name */
    TemplatesUpdateColumn["Id"] = "id";
    /** column name */
    TemplatesUpdateColumn["IsActive"] = "is_active";
    /** column name */
    TemplatesUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    TemplatesUpdateColumn["Name"] = "name";
    /** column name */
    TemplatesUpdateColumn["UpdatedAt"] = "updated_at";
})(TemplatesUpdateColumn = exports.TemplatesUpdateColumn || (exports.TemplatesUpdateColumn = {}));
/** unique or primary key constraints on table "users" */
var UsersConstraint;
(function (UsersConstraint) {
    /** unique or primary key constraint */
    UsersConstraint["UsersAddressIdKey"] = "users_address_id_key";
    /** unique or primary key constraint */
    UsersConstraint["UsersAppleIdKey"] = "users_apple_id_key";
    /** unique or primary key constraint */
    UsersConstraint["UsersEmailKey"] = "users_email_key";
    /** unique or primary key constraint */
    UsersConstraint["UsersPkey"] = "users_pkey";
})(UsersConstraint = exports.UsersConstraint || (exports.UsersConstraint = {}));
/** select columns of table "users" */
var UsersSelectColumn;
(function (UsersSelectColumn) {
    /** column name */
    UsersSelectColumn["AddressId"] = "address_id";
    /** column name */
    UsersSelectColumn["AppleId"] = "apple_id";
    /** column name */
    UsersSelectColumn["Birthdate"] = "birthdate";
    /** column name */
    UsersSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    UsersSelectColumn["Email"] = "email";
    /** column name */
    UsersSelectColumn["FirstName"] = "first_name";
    /** column name */
    UsersSelectColumn["Id"] = "id";
    /** column name */
    UsersSelectColumn["IsActive"] = "is_active";
    /** column name */
    UsersSelectColumn["IsTester"] = "is_tester";
    /** column name */
    UsersSelectColumn["Name"] = "name";
    /** column name */
    UsersSelectColumn["Password"] = "password";
    /** column name */
    UsersSelectColumn["PictureId"] = "picture_id";
})(UsersSelectColumn = exports.UsersSelectColumn || (exports.UsersSelectColumn = {}));
/** update columns of table "users" */
var UsersUpdateColumn;
(function (UsersUpdateColumn) {
    /** column name */
    UsersUpdateColumn["AddressId"] = "address_id";
    /** column name */
    UsersUpdateColumn["AppleId"] = "apple_id";
    /** column name */
    UsersUpdateColumn["Birthdate"] = "birthdate";
    /** column name */
    UsersUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    UsersUpdateColumn["Email"] = "email";
    /** column name */
    UsersUpdateColumn["FirstName"] = "first_name";
    /** column name */
    UsersUpdateColumn["Id"] = "id";
    /** column name */
    UsersUpdateColumn["IsActive"] = "is_active";
    /** column name */
    UsersUpdateColumn["IsTester"] = "is_tester";
    /** column name */
    UsersUpdateColumn["Name"] = "name";
    /** column name */
    UsersUpdateColumn["Password"] = "password";
    /** column name */
    UsersUpdateColumn["PictureId"] = "picture_id";
})(UsersUpdateColumn = exports.UsersUpdateColumn || (exports.UsersUpdateColumn = {}));
/** unique or primary key constraints on table "votes" */
var VotesConstraint;
(function (VotesConstraint) {
    /** unique or primary key constraint */
    VotesConstraint["VotesPkey"] = "votes_pkey";
})(VotesConstraint = exports.VotesConstraint || (exports.VotesConstraint = {}));
/** select columns of table "votes_played" */
var VotesPlayedSelectColumn;
(function (VotesPlayedSelectColumn) {
    /** column name */
    VotesPlayedSelectColumn["GainId"] = "gain_id";
    /** column name */
    VotesPlayedSelectColumn["GainValidated"] = "gain_validated";
    /** column name */
    VotesPlayedSelectColumn["GameId"] = "game_id";
    /** column name */
    VotesPlayedSelectColumn["Id"] = "id";
    /** column name */
    VotesPlayedSelectColumn["PlayedAt"] = "played_at";
    /** column name */
    VotesPlayedSelectColumn["Results"] = "results";
    /** column name */
    VotesPlayedSelectColumn["UserId"] = "user_id";
})(VotesPlayedSelectColumn = exports.VotesPlayedSelectColumn || (exports.VotesPlayedSelectColumn = {}));
/** select columns of table "votes" */
var VotesSelectColumn;
(function (VotesSelectColumn) {
    /** column name */
    VotesSelectColumn["Address"] = "address";
    /** column name */
    VotesSelectColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    VotesSelectColumn["CardImageId"] = "card_image_id";
    /** column name */
    VotesSelectColumn["City"] = "city";
    /** column name */
    VotesSelectColumn["ClientId"] = "client_id";
    /** column name */
    VotesSelectColumn["CreatedAt"] = "created_at";
    /** column name */
    VotesSelectColumn["DateEnd"] = "date_end";
    /** column name */
    VotesSelectColumn["DateStart"] = "date_start";
    /** column name */
    VotesSelectColumn["Description"] = "description";
    /** column name */
    VotesSelectColumn["Frequency"] = "frequency";
    /** column name */
    VotesSelectColumn["Gtc"] = "gtc";
    /** column name */
    VotesSelectColumn["Id"] = "id";
    /** column name */
    VotesSelectColumn["Instructions"] = "instructions";
    /** column name */
    VotesSelectColumn["IsActive"] = "is_active";
    /** column name */
    VotesSelectColumn["IsArchive"] = "is_archive";
    /** column name */
    VotesSelectColumn["IsPrivate"] = "is_private";
    /** column name */
    VotesSelectColumn["IsTest"] = "is_test";
    /** column name */
    VotesSelectColumn["KeepCumulatedProbability"] = "keep_cumulated_probability";
    /** column name */
    VotesSelectColumn["Location"] = "location";
    /** column name */
    VotesSelectColumn["MaxParticipations"] = "max_participations";
    /** column name */
    VotesSelectColumn["Name"] = "name";
    /** column name */
    VotesSelectColumn["Radius"] = "radius";
    /** column name */
    VotesSelectColumn["TypeId"] = "type_id";
    /** column name */
    VotesSelectColumn["Tz"] = "tz";
    /** column name */
    VotesSelectColumn["Valorization"] = "valorization";
    /** column name */
    VotesSelectColumn["WithInstantGains"] = "with_instant_gains";
    /** column name */
    VotesSelectColumn["WithMagicRandomDrawings"] = "with_magic_random_drawings";
    /** column name */
    VotesSelectColumn["WithRandomDrawings"] = "with_random_drawings";
})(VotesSelectColumn = exports.VotesSelectColumn || (exports.VotesSelectColumn = {}));
/** unique or primary key constraints on table "votes_selections_choices" */
var VotesSelectionsChoicesConstraint;
(function (VotesSelectionsChoicesConstraint) {
    /** unique or primary key constraint */
    VotesSelectionsChoicesConstraint["VotesSelectionsChoicesPkey"] = "votes_selections_choices_pkey";
})(VotesSelectionsChoicesConstraint = exports.VotesSelectionsChoicesConstraint || (exports.VotesSelectionsChoicesConstraint = {}));
/** select columns of table "votes_selections_choices" */
var VotesSelectionsChoicesSelectColumn;
(function (VotesSelectionsChoicesSelectColumn) {
    /** column name */
    VotesSelectionsChoicesSelectColumn["AssetId"] = "asset_id";
    /** column name */
    VotesSelectionsChoicesSelectColumn["Id"] = "id";
    /** column name */
    VotesSelectionsChoicesSelectColumn["Label"] = "label";
    /** column name */
    VotesSelectionsChoicesSelectColumn["VoteSelectionId"] = "vote_selection_id";
})(VotesSelectionsChoicesSelectColumn = exports.VotesSelectionsChoicesSelectColumn || (exports.VotesSelectionsChoicesSelectColumn = {}));
/** update columns of table "votes_selections_choices" */
var VotesSelectionsChoicesUpdateColumn;
(function (VotesSelectionsChoicesUpdateColumn) {
    /** column name */
    VotesSelectionsChoicesUpdateColumn["AssetId"] = "asset_id";
    /** column name */
    VotesSelectionsChoicesUpdateColumn["Id"] = "id";
    /** column name */
    VotesSelectionsChoicesUpdateColumn["Label"] = "label";
    /** column name */
    VotesSelectionsChoicesUpdateColumn["VoteSelectionId"] = "vote_selection_id";
})(VotesSelectionsChoicesUpdateColumn = exports.VotesSelectionsChoicesUpdateColumn || (exports.VotesSelectionsChoicesUpdateColumn = {}));
/** unique or primary key constraints on table "votes_selections" */
var VotesSelectionsConstraint;
(function (VotesSelectionsConstraint) {
    /** unique or primary key constraint */
    VotesSelectionsConstraint["VotesSelectionnsPkey"] = "votes_selectionns_pkey";
})(VotesSelectionsConstraint = exports.VotesSelectionsConstraint || (exports.VotesSelectionsConstraint = {}));
/** select columns of table "votes_selections" */
var VotesSelectionsSelectColumn;
(function (VotesSelectionsSelectColumn) {
    /** column name */
    VotesSelectionsSelectColumn["Id"] = "id";
    /** column name */
    VotesSelectionsSelectColumn["RequiredChoices"] = "required_choices";
    /** column name */
    VotesSelectionsSelectColumn["Selection"] = "selection";
    /** column name */
    VotesSelectionsSelectColumn["VoteId"] = "vote_id";
})(VotesSelectionsSelectColumn = exports.VotesSelectionsSelectColumn || (exports.VotesSelectionsSelectColumn = {}));
/** update columns of table "votes_selections" */
var VotesSelectionsUpdateColumn;
(function (VotesSelectionsUpdateColumn) {
    /** column name */
    VotesSelectionsUpdateColumn["Id"] = "id";
    /** column name */
    VotesSelectionsUpdateColumn["RequiredChoices"] = "required_choices";
    /** column name */
    VotesSelectionsUpdateColumn["Selection"] = "selection";
    /** column name */
    VotesSelectionsUpdateColumn["VoteId"] = "vote_id";
})(VotesSelectionsUpdateColumn = exports.VotesSelectionsUpdateColumn || (exports.VotesSelectionsUpdateColumn = {}));
/** update columns of table "votes" */
var VotesUpdateColumn;
(function (VotesUpdateColumn) {
    /** column name */
    VotesUpdateColumn["Address"] = "address";
    /** column name */
    VotesUpdateColumn["CardImageBackgroundId"] = "card_image_background_id";
    /** column name */
    VotesUpdateColumn["CardImageId"] = "card_image_id";
    /** column name */
    VotesUpdateColumn["City"] = "city";
    /** column name */
    VotesUpdateColumn["ClientId"] = "client_id";
    /** column name */
    VotesUpdateColumn["CreatedAt"] = "created_at";
    /** column name */
    VotesUpdateColumn["DateEnd"] = "date_end";
    /** column name */
    VotesUpdateColumn["DateStart"] = "date_start";
    /** column name */
    VotesUpdateColumn["Description"] = "description";
    /** column name */
    VotesUpdateColumn["Frequency"] = "frequency";
    /** column name */
    VotesUpdateColumn["Gtc"] = "gtc";
    /** column name */
    VotesUpdateColumn["Id"] = "id";
    /** column name */
    VotesUpdateColumn["Instructions"] = "instructions";
    /** column name */
    VotesUpdateColumn["IsActive"] = "is_active";
    /** column name */
    VotesUpdateColumn["IsArchive"] = "is_archive";
    /** column name */
    VotesUpdateColumn["IsPrivate"] = "is_private";
    /** column name */
    VotesUpdateColumn["IsTest"] = "is_test";
    /** column name */
    VotesUpdateColumn["KeepCumulatedProbability"] = "keep_cumulated_probability";
    /** column name */
    VotesUpdateColumn["Location"] = "location";
    /** column name */
    VotesUpdateColumn["MaxParticipations"] = "max_participations";
    /** column name */
    VotesUpdateColumn["Name"] = "name";
    /** column name */
    VotesUpdateColumn["Radius"] = "radius";
    /** column name */
    VotesUpdateColumn["TypeId"] = "type_id";
    /** column name */
    VotesUpdateColumn["Tz"] = "tz";
    /** column name */
    VotesUpdateColumn["Valorization"] = "valorization";
    /** column name */
    VotesUpdateColumn["WithInstantGains"] = "with_instant_gains";
    /** column name */
    VotesUpdateColumn["WithMagicRandomDrawings"] = "with_magic_random_drawings";
    /** column name */
    VotesUpdateColumn["WithRandomDrawings"] = "with_random_drawings";
})(VotesUpdateColumn = exports.VotesUpdateColumn || (exports.VotesUpdateColumn = {}));
