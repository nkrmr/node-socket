import * as Types from './common';
import * as Apollo from '@apollo/client';
export declare const GameTypeFragmentDoc: Apollo.DocumentNode;
export declare const AssetFragmentDoc: Apollo.DocumentNode;
export declare const TemplateFragmentDoc: Apollo.DocumentNode;
export declare const GainFragmentDoc: Apollo.DocumentNode;
export declare const GamesGainsFragmentDoc: Apollo.DocumentNode;
export declare const TrackerFragmentDoc: Apollo.DocumentNode;
export declare const AnimationFragmentDoc: Apollo.DocumentNode;
export declare const ArM2MAnimationFragmentDoc: Apollo.DocumentNode;
export declare const ArSpecificsFragmentDoc: Apollo.DocumentNode;
export declare const ArFragmentDoc: Apollo.DocumentNode;
export declare const AnimationM2MAssetFragmentDoc: Apollo.DocumentNode;
export declare const AssetResourcesFragmentDoc: Apollo.DocumentNode;
export declare const ClientDisplayFragmentDoc: Apollo.DocumentNode;
export declare const CommunicationTypeFragmentDoc: Apollo.DocumentNode;
export declare const EstimateM2mEntityFragmentDoc: Apollo.DocumentNode;
export declare const EstimateFragmentDoc: Apollo.DocumentNode;
export declare const GainVirtualFragmentDoc: Apollo.DocumentNode;
export declare const GamesPlayedParticipationsByDayFragmentDoc: Apollo.DocumentNode;
export declare const GamesPlayedParticipationsByCurrentDayHoursFragmentDoc: Apollo.DocumentNode;
export declare const GamesPlayedGainsByDayFragmentDoc: Apollo.DocumentNode;
export declare const GamesPlayedGainsByCurrentDayHoursFragmentDoc: Apollo.DocumentNode;
export declare const InfoFragmentDoc: Apollo.DocumentNode;
export declare const InfoSpecificsFragmentDoc: Apollo.DocumentNode;
export declare const PhotoFragmentDoc: Apollo.DocumentNode;
export declare const PhotoSpecificsFragmentDoc: Apollo.DocumentNode;
export declare const GameMinimalInfosFragmentDoc: Apollo.DocumentNode;
export declare const CommunnicationMinimalInfosFragmentDoc: Apollo.DocumentNode;
export declare const PrivateDeckM2mEntitiesFragmentDoc: Apollo.DocumentNode;
export declare const PrivateDeckFragmentDoc: Apollo.DocumentNode;
export declare const RandomDrawingFragmentDoc: Apollo.DocumentNode;
export declare const SurveyQuestionAnswersFragmentDoc: Apollo.DocumentNode;
export declare const SurveyQuestionsFragmentDoc: Apollo.DocumentNode;
export declare const SurveyFragmentDoc: Apollo.DocumentNode;
export declare const AddressFragmentDoc: Apollo.DocumentNode;
export declare const GainWonFragmentDoc: Apollo.DocumentNode;
export declare const GamePlayedFragmentDoc: Apollo.DocumentNode;
export declare const GameWonFragmentDoc: Apollo.DocumentNode;
export declare const GamesGainsAvailableFragmentDoc: Apollo.DocumentNode;
export declare const InfosToPlayArFragmentDoc: Apollo.DocumentNode;
export declare const ArPlayedFragmentDoc: Apollo.DocumentNode;
export declare const QuizzQuestionAnswersFragmentDoc: Apollo.DocumentNode;
export declare const QuizzQuestionsFragmentDoc: Apollo.DocumentNode;
export declare const InfosToPlayQuizzFragmentDoc: Apollo.DocumentNode;
export declare const QuizzPlayedFragmentDoc: Apollo.DocumentNode;
export declare const QuizzFragmentDoc: Apollo.DocumentNode;
export declare const QuizzClientFragmentDoc: Apollo.DocumentNode;
export declare const VoteSelectionChoiceFragmentDoc: Apollo.DocumentNode;
export declare const VoteSelectionFragmentDoc: Apollo.DocumentNode;
export declare const VoteFragmentDoc: Apollo.DocumentNode;
export declare const VoteClientFragmentDoc: Apollo.DocumentNode;
export declare const InfosToPlayVoteFragmentDoc: Apollo.DocumentNode;
export declare const VotePlayedFragmentDoc: Apollo.DocumentNode;
export declare const GoodieFragmentDoc: Apollo.DocumentNode;
export declare const GoodieM2MAnimationFragmentDoc: Apollo.DocumentNode;
export declare const GoodiePlayedFragmentDoc: Apollo.DocumentNode;
export declare const NearbyGameCardFragmentDoc: Apollo.DocumentNode;
export declare const NearbyCommunicationCardFragmentDoc: Apollo.DocumentNode;
export declare const CommunicationFragmentDoc: Apollo.DocumentNode;
export declare const NearbyCommunicationFragmentDoc: Apollo.DocumentNode;
export declare const GameFragmentDoc: Apollo.DocumentNode;
export declare const NearbyGameFragmentDoc: Apollo.DocumentNode;
export declare const PrivateDeckDisplayFragmentDoc: Apollo.DocumentNode;
export declare const PrivateDeckM2mUserFragmentDoc: Apollo.DocumentNode;
export declare const RandomDrawingWonFragmentDoc: Apollo.DocumentNode;
export declare const UserDisplayFragmentDoc: Apollo.DocumentNode;
export declare const GetArDocument: Apollo.DocumentNode;
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
export declare function useGetArQuery(baseOptions: Apollo.QueryHookOptions<Types.GetArQuery, Types.GetArQueryVariables>): Apollo.QueryResult<Types.GetArQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetArLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetArQuery, Types.GetArQueryVariables>): Apollo.QueryTuple<Types.GetArQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetArQueryHookResult = ReturnType<typeof useGetArQuery>;
export declare type GetArLazyQueryHookResult = ReturnType<typeof useGetArLazyQuery>;
export declare type GetArQueryResult = Apollo.QueryResult<Types.GetArQuery, Types.GetArQueryVariables>;
export declare const GetArSpecificsDocument: Apollo.DocumentNode;
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
export declare function useGetArSpecificsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetArSpecificsQuery, Types.GetArSpecificsQueryVariables>): Apollo.QueryResult<Types.GetArSpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetArSpecificsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetArSpecificsQuery, Types.GetArSpecificsQueryVariables>): Apollo.QueryTuple<Types.GetArSpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetArSpecificsQueryHookResult = ReturnType<typeof useGetArSpecificsQuery>;
export declare type GetArSpecificsLazyQueryHookResult = ReturnType<typeof useGetArSpecificsLazyQuery>;
export declare type GetArSpecificsQueryResult = Apollo.QueryResult<Types.GetArSpecificsQuery, Types.GetArSpecificsQueryVariables>;
export declare const InsertArDocument: Apollo.DocumentNode;
export declare type InsertArMutationFn = Apollo.MutationFunction<Types.InsertArMutation, Types.InsertArMutationVariables>;
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
export declare function useInsertArMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertArMutation, Types.InsertArMutationVariables>): Apollo.MutationTuple<Types.InsertArMutation, Types.Exact<{
    ar: Types.ArInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertArMutationHookResult = ReturnType<typeof useInsertArMutation>;
export declare type InsertArMutationResult = Apollo.MutationResult<Types.InsertArMutation>;
export declare type InsertArMutationOptions = Apollo.BaseMutationOptions<Types.InsertArMutation, Types.InsertArMutationVariables>;
export declare const UpdateAnimationDocument: Apollo.DocumentNode;
export declare type UpdateAnimationMutationFn = Apollo.MutationFunction<Types.UpdateAnimationMutation, Types.UpdateAnimationMutationVariables>;
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
export declare function useUpdateAnimationMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateAnimationMutation, Types.UpdateAnimationMutationVariables>): Apollo.MutationTuple<Types.UpdateAnimationMutation, Types.Exact<{
    id: string;
    updates: Types.AnimationsSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateAnimationMutationHookResult = ReturnType<typeof useUpdateAnimationMutation>;
export declare type UpdateAnimationMutationResult = Apollo.MutationResult<Types.UpdateAnimationMutation>;
export declare type UpdateAnimationMutationOptions = Apollo.BaseMutationOptions<Types.UpdateAnimationMutation, Types.UpdateAnimationMutationVariables>;
export declare const InsertArM2mAnimationsDocument: Apollo.DocumentNode;
export declare type InsertArM2mAnimationsMutationFn = Apollo.MutationFunction<Types.InsertArM2mAnimationsMutation, Types.InsertArM2mAnimationsMutationVariables>;
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
export declare function useInsertArM2mAnimationsMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertArM2mAnimationsMutation, Types.InsertArM2mAnimationsMutationVariables>): Apollo.MutationTuple<Types.InsertArM2mAnimationsMutation, Types.Exact<{
    ar_id: string;
    animation: Types.AnimationsObjRelInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertArM2mAnimationsMutationHookResult = ReturnType<typeof useInsertArM2mAnimationsMutation>;
export declare type InsertArM2mAnimationsMutationResult = Apollo.MutationResult<Types.InsertArM2mAnimationsMutation>;
export declare type InsertArM2mAnimationsMutationOptions = Apollo.BaseMutationOptions<Types.InsertArM2mAnimationsMutation, Types.InsertArM2mAnimationsMutationVariables>;
export declare const DeleteArM2mAnimationsDocument: Apollo.DocumentNode;
export declare type DeleteArM2mAnimationsMutationFn = Apollo.MutationFunction<Types.DeleteArM2mAnimationsMutation, Types.DeleteArM2mAnimationsMutationVariables>;
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
export declare function useDeleteArM2mAnimationsMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeleteArM2mAnimationsMutation, Types.DeleteArM2mAnimationsMutationVariables>): Apollo.MutationTuple<Types.DeleteArM2mAnimationsMutation, Types.Exact<{
    animation_id: string;
    ar_id: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type DeleteArM2mAnimationsMutationHookResult = ReturnType<typeof useDeleteArM2mAnimationsMutation>;
export declare type DeleteArM2mAnimationsMutationResult = Apollo.MutationResult<Types.DeleteArM2mAnimationsMutation>;
export declare type DeleteArM2mAnimationsMutationOptions = Apollo.BaseMutationOptions<Types.DeleteArM2mAnimationsMutation, Types.DeleteArM2mAnimationsMutationVariables>;
export declare const InsertAnimationsM2mAssetsDocument: Apollo.DocumentNode;
export declare type InsertAnimationsM2mAssetsMutationFn = Apollo.MutationFunction<Types.InsertAnimationsM2mAssetsMutation, Types.InsertAnimationsM2mAssetsMutationVariables>;
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
export declare function useInsertAnimationsM2mAssetsMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertAnimationsM2mAssetsMutation, Types.InsertAnimationsM2mAssetsMutationVariables>): Apollo.MutationTuple<Types.InsertAnimationsM2mAssetsMutation, Types.Exact<{
    objects: Types.AnimationsM2mAssetsInsertInput | Types.AnimationsM2mAssetsInsertInput[];
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertAnimationsM2mAssetsMutationHookResult = ReturnType<typeof useInsertAnimationsM2mAssetsMutation>;
export declare type InsertAnimationsM2mAssetsMutationResult = Apollo.MutationResult<Types.InsertAnimationsM2mAssetsMutation>;
export declare type InsertAnimationsM2mAssetsMutationOptions = Apollo.BaseMutationOptions<Types.InsertAnimationsM2mAssetsMutation, Types.InsertAnimationsM2mAssetsMutationVariables>;
export declare const UpdateAnimationsM2mAssetsDocument: Apollo.DocumentNode;
export declare type UpdateAnimationsM2mAssetsMutationFn = Apollo.MutationFunction<Types.UpdateAnimationsM2mAssetsMutation, Types.UpdateAnimationsM2mAssetsMutationVariables>;
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
export declare function useUpdateAnimationsM2mAssetsMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateAnimationsM2mAssetsMutation, Types.UpdateAnimationsM2mAssetsMutationVariables>): Apollo.MutationTuple<Types.UpdateAnimationsM2mAssetsMutation, Types.Exact<{
    animation_id: string;
    asset_id: string;
    when_won: boolean;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateAnimationsM2mAssetsMutationHookResult = ReturnType<typeof useUpdateAnimationsM2mAssetsMutation>;
export declare type UpdateAnimationsM2mAssetsMutationResult = Apollo.MutationResult<Types.UpdateAnimationsM2mAssetsMutation>;
export declare type UpdateAnimationsM2mAssetsMutationOptions = Apollo.BaseMutationOptions<Types.UpdateAnimationsM2mAssetsMutation, Types.UpdateAnimationsM2mAssetsMutationVariables>;
export declare const DeleteAnimationsM2mAssetsDocument: Apollo.DocumentNode;
export declare type DeleteAnimationsM2mAssetsMutationFn = Apollo.MutationFunction<Types.DeleteAnimationsM2mAssetsMutation, Types.DeleteAnimationsM2mAssetsMutationVariables>;
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
export declare function useDeleteAnimationsM2mAssetsMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeleteAnimationsM2mAssetsMutation, Types.DeleteAnimationsM2mAssetsMutationVariables>): Apollo.MutationTuple<Types.DeleteAnimationsM2mAssetsMutation, Types.Exact<{
    animation_id: string;
    asset_id: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type DeleteAnimationsM2mAssetsMutationHookResult = ReturnType<typeof useDeleteAnimationsM2mAssetsMutation>;
export declare type DeleteAnimationsM2mAssetsMutationResult = Apollo.MutationResult<Types.DeleteAnimationsM2mAssetsMutation>;
export declare type DeleteAnimationsM2mAssetsMutationOptions = Apollo.BaseMutationOptions<Types.DeleteAnimationsM2mAssetsMutation, Types.DeleteAnimationsM2mAssetsMutationVariables>;
export declare const GetAssetByIdDocument: Apollo.DocumentNode;
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
export declare function useGetAssetByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetAssetByIdQuery, Types.GetAssetByIdQueryVariables>): Apollo.QueryResult<Types.GetAssetByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetAssetByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAssetByIdQuery, Types.GetAssetByIdQueryVariables>): Apollo.QueryTuple<Types.GetAssetByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetAssetByIdQueryHookResult = ReturnType<typeof useGetAssetByIdQuery>;
export declare type GetAssetByIdLazyQueryHookResult = ReturnType<typeof useGetAssetByIdLazyQuery>;
export declare type GetAssetByIdQueryResult = Apollo.QueryResult<Types.GetAssetByIdQuery, Types.GetAssetByIdQueryVariables>;
export declare const GetAssetByPathDocument: Apollo.DocumentNode;
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
export declare function useGetAssetByPathQuery(baseOptions: Apollo.QueryHookOptions<Types.GetAssetByPathQuery, Types.GetAssetByPathQueryVariables>): Apollo.QueryResult<Types.GetAssetByPathQuery, Types.Exact<{
    clientId: string;
    path: string;
}>>;
export declare function useGetAssetByPathLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAssetByPathQuery, Types.GetAssetByPathQueryVariables>): Apollo.QueryTuple<Types.GetAssetByPathQuery, Types.Exact<{
    clientId: string;
    path: string;
}>>;
export declare type GetAssetByPathQueryHookResult = ReturnType<typeof useGetAssetByPathQuery>;
export declare type GetAssetByPathLazyQueryHookResult = ReturnType<typeof useGetAssetByPathLazyQuery>;
export declare type GetAssetByPathQueryResult = Apollo.QueryResult<Types.GetAssetByPathQuery, Types.GetAssetByPathQueryVariables>;
export declare const GetAssetsDocument: Apollo.DocumentNode;
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
export declare function useGetAssetsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetAssetsQuery, Types.GetAssetsQueryVariables>): Apollo.QueryResult<Types.GetAssetsQuery, Types.Exact<{
    type?: Types.AssetsTypesEnum | null | undefined;
    clientId?: import("yup/lib/types").Maybe<string>;
}>>;
export declare function useGetAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAssetsQuery, Types.GetAssetsQueryVariables>): Apollo.QueryTuple<Types.GetAssetsQuery, Types.Exact<{
    type?: Types.AssetsTypesEnum | null | undefined;
    clientId?: import("yup/lib/types").Maybe<string>;
}>>;
export declare type GetAssetsQueryHookResult = ReturnType<typeof useGetAssetsQuery>;
export declare type GetAssetsLazyQueryHookResult = ReturnType<typeof useGetAssetsLazyQuery>;
export declare type GetAssetsQueryResult = Apollo.QueryResult<Types.GetAssetsQuery, Types.GetAssetsQueryVariables>;
export declare const InsertAssetDocument: Apollo.DocumentNode;
export declare type InsertAssetMutationFn = Apollo.MutationFunction<Types.InsertAssetMutation, Types.InsertAssetMutationVariables>;
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
export declare function useInsertAssetMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertAssetMutation, Types.InsertAssetMutationVariables>): Apollo.MutationTuple<Types.InsertAssetMutation, Types.Exact<{
    object: Types.AssetsInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertAssetMutationHookResult = ReturnType<typeof useInsertAssetMutation>;
export declare type InsertAssetMutationResult = Apollo.MutationResult<Types.InsertAssetMutation>;
export declare type InsertAssetMutationOptions = Apollo.BaseMutationOptions<Types.InsertAssetMutation, Types.InsertAssetMutationVariables>;
export declare const UpdateAssetDocument: Apollo.DocumentNode;
export declare type UpdateAssetMutationFn = Apollo.MutationFunction<Types.UpdateAssetMutation, Types.UpdateAssetMutationVariables>;
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
export declare function useUpdateAssetMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateAssetMutation, Types.UpdateAssetMutationVariables>): Apollo.MutationTuple<Types.UpdateAssetMutation, Types.Exact<{
    id: string;
    updates: Types.AssetsSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateAssetMutationHookResult = ReturnType<typeof useUpdateAssetMutation>;
export declare type UpdateAssetMutationResult = Apollo.MutationResult<Types.UpdateAssetMutation>;
export declare type UpdateAssetMutationOptions = Apollo.BaseMutationOptions<Types.UpdateAssetMutation, Types.UpdateAssetMutationVariables>;
export declare const AddResourceToAssetDocument: Apollo.DocumentNode;
export declare type AddResourceToAssetMutationFn = Apollo.MutationFunction<Types.AddResourceToAssetMutation, Types.AddResourceToAssetMutationVariables>;
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
export declare function useAddResourceToAssetMutation(baseOptions?: Apollo.MutationHookOptions<Types.AddResourceToAssetMutation, Types.AddResourceToAssetMutationVariables>): Apollo.MutationTuple<Types.AddResourceToAssetMutation, Types.Exact<{
    id: string;
    resource: any;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type AddResourceToAssetMutationHookResult = ReturnType<typeof useAddResourceToAssetMutation>;
export declare type AddResourceToAssetMutationResult = Apollo.MutationResult<Types.AddResourceToAssetMutation>;
export declare type AddResourceToAssetMutationOptions = Apollo.BaseMutationOptions<Types.AddResourceToAssetMutation, Types.AddResourceToAssetMutationVariables>;
export declare const DeleteResourceFromAssetDocument: Apollo.DocumentNode;
export declare type DeleteResourceFromAssetMutationFn = Apollo.MutationFunction<Types.DeleteResourceFromAssetMutation, Types.DeleteResourceFromAssetMutationVariables>;
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
export declare function useDeleteResourceFromAssetMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeleteResourceFromAssetMutation, Types.DeleteResourceFromAssetMutationVariables>): Apollo.MutationTuple<Types.DeleteResourceFromAssetMutation, Types.Exact<{
    id: string;
    resource: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type DeleteResourceFromAssetMutationHookResult = ReturnType<typeof useDeleteResourceFromAssetMutation>;
export declare type DeleteResourceFromAssetMutationResult = Apollo.MutationResult<Types.DeleteResourceFromAssetMutation>;
export declare type DeleteResourceFromAssetMutationOptions = Apollo.BaseMutationOptions<Types.DeleteResourceFromAssetMutation, Types.DeleteResourceFromAssetMutationVariables>;
export declare const GetClientsDocument: Apollo.DocumentNode;
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
export declare function useGetClientsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetClientsQuery, Types.GetClientsQueryVariables>): Apollo.QueryResult<Types.GetClientsQuery, Types.Exact<{
    withDiscount?: boolean | null | undefined;
}>>;
export declare function useGetClientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetClientsQuery, Types.GetClientsQueryVariables>): Apollo.QueryTuple<Types.GetClientsQuery, Types.Exact<{
    withDiscount?: boolean | null | undefined;
}>>;
export declare type GetClientsQueryHookResult = ReturnType<typeof useGetClientsQuery>;
export declare type GetClientsLazyQueryHookResult = ReturnType<typeof useGetClientsLazyQuery>;
export declare type GetClientsQueryResult = Apollo.QueryResult<Types.GetClientsQuery, Types.GetClientsQueryVariables>;
export declare const GetClientByIdDocument: Apollo.DocumentNode;
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
export declare function useGetClientByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetClientByIdQuery, Types.GetClientByIdQueryVariables>): Apollo.QueryResult<Types.GetClientByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetClientByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetClientByIdQuery, Types.GetClientByIdQueryVariables>): Apollo.QueryTuple<Types.GetClientByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetClientByIdQueryHookResult = ReturnType<typeof useGetClientByIdQuery>;
export declare type GetClientByIdLazyQueryHookResult = ReturnType<typeof useGetClientByIdLazyQuery>;
export declare type GetClientByIdQueryResult = Apollo.QueryResult<Types.GetClientByIdQuery, Types.GetClientByIdQueryVariables>;
export declare const UpdateClientIsActiveDocument: Apollo.DocumentNode;
export declare type UpdateClientIsActiveMutationFn = Apollo.MutationFunction<Types.UpdateClientIsActiveMutation, Types.UpdateClientIsActiveMutationVariables>;
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
export declare function useUpdateClientIsActiveMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateClientIsActiveMutation, Types.UpdateClientIsActiveMutationVariables>): Apollo.MutationTuple<Types.UpdateClientIsActiveMutation, Types.Exact<{
    id: string;
    isActive: boolean;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateClientIsActiveMutationHookResult = ReturnType<typeof useUpdateClientIsActiveMutation>;
export declare type UpdateClientIsActiveMutationResult = Apollo.MutationResult<Types.UpdateClientIsActiveMutation>;
export declare type UpdateClientIsActiveMutationOptions = Apollo.BaseMutationOptions<Types.UpdateClientIsActiveMutation, Types.UpdateClientIsActiveMutationVariables>;
export declare const UpdateClientDocument: Apollo.DocumentNode;
export declare type UpdateClientMutationFn = Apollo.MutationFunction<Types.UpdateClientMutation, Types.UpdateClientMutationVariables>;
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
export declare function useUpdateClientMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateClientMutation, Types.UpdateClientMutationVariables>): Apollo.MutationTuple<Types.UpdateClientMutation, Types.Exact<{
    clientId: string;
    client?: Types.ClientsSetInput | null | undefined;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateClientMutationHookResult = ReturnType<typeof useUpdateClientMutation>;
export declare type UpdateClientMutationResult = Apollo.MutationResult<Types.UpdateClientMutation>;
export declare type UpdateClientMutationOptions = Apollo.BaseMutationOptions<Types.UpdateClientMutation, Types.UpdateClientMutationVariables>;
export declare const GetCommunicationsTypesDocument: Apollo.DocumentNode;
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
export declare function useGetCommunicationsTypesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetCommunicationsTypesQuery, Types.GetCommunicationsTypesQueryVariables>): Apollo.QueryResult<Types.GetCommunicationsTypesQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useGetCommunicationsTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCommunicationsTypesQuery, Types.GetCommunicationsTypesQueryVariables>): Apollo.QueryTuple<Types.GetCommunicationsTypesQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type GetCommunicationsTypesQueryHookResult = ReturnType<typeof useGetCommunicationsTypesQuery>;
export declare type GetCommunicationsTypesLazyQueryHookResult = ReturnType<typeof useGetCommunicationsTypesLazyQuery>;
export declare type GetCommunicationsTypesQueryResult = Apollo.QueryResult<Types.GetCommunicationsTypesQuery, Types.GetCommunicationsTypesQueryVariables>;
export declare const GetCommunicationTypeByIdDocument: Apollo.DocumentNode;
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
export declare function useGetCommunicationTypeByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetCommunicationTypeByIdQuery, Types.GetCommunicationTypeByIdQueryVariables>): Apollo.QueryResult<Types.GetCommunicationTypeByIdQuery, Types.Exact<{
    communicationTypeId: string;
}>>;
export declare function useGetCommunicationTypeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCommunicationTypeByIdQuery, Types.GetCommunicationTypeByIdQueryVariables>): Apollo.QueryTuple<Types.GetCommunicationTypeByIdQuery, Types.Exact<{
    communicationTypeId: string;
}>>;
export declare type GetCommunicationTypeByIdQueryHookResult = ReturnType<typeof useGetCommunicationTypeByIdQuery>;
export declare type GetCommunicationTypeByIdLazyQueryHookResult = ReturnType<typeof useGetCommunicationTypeByIdLazyQuery>;
export declare type GetCommunicationTypeByIdQueryResult = Apollo.QueryResult<Types.GetCommunicationTypeByIdQuery, Types.GetCommunicationTypeByIdQueryVariables>;
export declare const GetCommunicationsByClientDocument: Apollo.DocumentNode;
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
export declare function useGetCommunicationsByClientQuery(baseOptions: Apollo.QueryHookOptions<Types.GetCommunicationsByClientQuery, Types.GetCommunicationsByClientQueryVariables>): Apollo.QueryResult<Types.GetCommunicationsByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare function useGetCommunicationsByClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCommunicationsByClientQuery, Types.GetCommunicationsByClientQueryVariables>): Apollo.QueryTuple<Types.GetCommunicationsByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare type GetCommunicationsByClientQueryHookResult = ReturnType<typeof useGetCommunicationsByClientQuery>;
export declare type GetCommunicationsByClientLazyQueryHookResult = ReturnType<typeof useGetCommunicationsByClientLazyQuery>;
export declare type GetCommunicationsByClientQueryResult = Apollo.QueryResult<Types.GetCommunicationsByClientQuery, Types.GetCommunicationsByClientQueryVariables>;
export declare const GetCommunicationsByClientAndCommunicationTypeDocument: Apollo.DocumentNode;
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
export declare function useGetCommunicationsByClientAndCommunicationTypeQuery(baseOptions: Apollo.QueryHookOptions<Types.GetCommunicationsByClientAndCommunicationTypeQuery, Types.GetCommunicationsByClientAndCommunicationTypeQueryVariables>): Apollo.QueryResult<Types.GetCommunicationsByClientAndCommunicationTypeQuery, Types.Exact<{
    clientId: string;
    communicationTypeId: string;
}>>;
export declare function useGetCommunicationsByClientAndCommunicationTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCommunicationsByClientAndCommunicationTypeQuery, Types.GetCommunicationsByClientAndCommunicationTypeQueryVariables>): Apollo.QueryTuple<Types.GetCommunicationsByClientAndCommunicationTypeQuery, Types.Exact<{
    clientId: string;
    communicationTypeId: string;
}>>;
export declare type GetCommunicationsByClientAndCommunicationTypeQueryHookResult = ReturnType<typeof useGetCommunicationsByClientAndCommunicationTypeQuery>;
export declare type GetCommunicationsByClientAndCommunicationTypeLazyQueryHookResult = ReturnType<typeof useGetCommunicationsByClientAndCommunicationTypeLazyQuery>;
export declare type GetCommunicationsByClientAndCommunicationTypeQueryResult = Apollo.QueryResult<Types.GetCommunicationsByClientAndCommunicationTypeQuery, Types.GetCommunicationsByClientAndCommunicationTypeQueryVariables>;
export declare const InsertCommunicationDocument: Apollo.DocumentNode;
export declare type InsertCommunicationMutationFn = Apollo.MutationFunction<Types.InsertCommunicationMutation, Types.InsertCommunicationMutationVariables>;
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
export declare function useInsertCommunicationMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertCommunicationMutation, Types.InsertCommunicationMutationVariables>): Apollo.MutationTuple<Types.InsertCommunicationMutation, Types.Exact<{
    communication: Types.CommunicationsInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertCommunicationMutationHookResult = ReturnType<typeof useInsertCommunicationMutation>;
export declare type InsertCommunicationMutationResult = Apollo.MutationResult<Types.InsertCommunicationMutation>;
export declare type InsertCommunicationMutationOptions = Apollo.BaseMutationOptions<Types.InsertCommunicationMutation, Types.InsertCommunicationMutationVariables>;
export declare const UpdateCommunicationDocument: Apollo.DocumentNode;
export declare type UpdateCommunicationMutationFn = Apollo.MutationFunction<Types.UpdateCommunicationMutation, Types.UpdateCommunicationMutationVariables>;
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
export declare function useUpdateCommunicationMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateCommunicationMutation, Types.UpdateCommunicationMutationVariables>): Apollo.MutationTuple<Types.UpdateCommunicationMutation, Types.Exact<{
    communicationId: string;
    communication: Types.CommunicationsSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateCommunicationMutationHookResult = ReturnType<typeof useUpdateCommunicationMutation>;
export declare type UpdateCommunicationMutationResult = Apollo.MutationResult<Types.UpdateCommunicationMutation>;
export declare type UpdateCommunicationMutationOptions = Apollo.BaseMutationOptions<Types.UpdateCommunicationMutation, Types.UpdateCommunicationMutationVariables>;
export declare const ArchiveCommunicationDocument: Apollo.DocumentNode;
export declare type ArchiveCommunicationMutationFn = Apollo.MutationFunction<Types.ArchiveCommunicationMutation, Types.ArchiveCommunicationMutationVariables>;
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
export declare function useArchiveCommunicationMutation(baseOptions?: Apollo.MutationHookOptions<Types.ArchiveCommunicationMutation, Types.ArchiveCommunicationMutationVariables>): Apollo.MutationTuple<Types.ArchiveCommunicationMutation, Types.Exact<{
    communicationId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type ArchiveCommunicationMutationHookResult = ReturnType<typeof useArchiveCommunicationMutation>;
export declare type ArchiveCommunicationMutationResult = Apollo.MutationResult<Types.ArchiveCommunicationMutation>;
export declare type ArchiveCommunicationMutationOptions = Apollo.BaseMutationOptions<Types.ArchiveCommunicationMutation, Types.ArchiveCommunicationMutationVariables>;
export declare const GetEstimatesByClientDocument: Apollo.DocumentNode;
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
export declare function useGetEstimatesByClientQuery(baseOptions: Apollo.QueryHookOptions<Types.GetEstimatesByClientQuery, Types.GetEstimatesByClientQueryVariables>): Apollo.QueryResult<Types.GetEstimatesByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare function useGetEstimatesByClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetEstimatesByClientQuery, Types.GetEstimatesByClientQueryVariables>): Apollo.QueryTuple<Types.GetEstimatesByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare type GetEstimatesByClientQueryHookResult = ReturnType<typeof useGetEstimatesByClientQuery>;
export declare type GetEstimatesByClientLazyQueryHookResult = ReturnType<typeof useGetEstimatesByClientLazyQuery>;
export declare type GetEstimatesByClientQueryResult = Apollo.QueryResult<Types.GetEstimatesByClientQuery, Types.GetEstimatesByClientQueryVariables>;
export declare const InsertEstimateDocument: Apollo.DocumentNode;
export declare type InsertEstimateMutationFn = Apollo.MutationFunction<Types.InsertEstimateMutation, Types.InsertEstimateMutationVariables>;
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
export declare function useInsertEstimateMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertEstimateMutation, Types.InsertEstimateMutationVariables>): Apollo.MutationTuple<Types.InsertEstimateMutation, Types.Exact<{
    estimate: Types.EstimatesInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertEstimateMutationHookResult = ReturnType<typeof useInsertEstimateMutation>;
export declare type InsertEstimateMutationResult = Apollo.MutationResult<Types.InsertEstimateMutation>;
export declare type InsertEstimateMutationOptions = Apollo.BaseMutationOptions<Types.InsertEstimateMutation, Types.InsertEstimateMutationVariables>;
export declare const UpdateEstimateDocument: Apollo.DocumentNode;
export declare type UpdateEstimateMutationFn = Apollo.MutationFunction<Types.UpdateEstimateMutation, Types.UpdateEstimateMutationVariables>;
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
export declare function useUpdateEstimateMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateEstimateMutation, Types.UpdateEstimateMutationVariables>): Apollo.MutationTuple<Types.UpdateEstimateMutation, Types.Exact<{
    estimateId: string;
    estimate: Types.EstimatesSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateEstimateMutationHookResult = ReturnType<typeof useUpdateEstimateMutation>;
export declare type UpdateEstimateMutationResult = Apollo.MutationResult<Types.UpdateEstimateMutation>;
export declare type UpdateEstimateMutationOptions = Apollo.BaseMutationOptions<Types.UpdateEstimateMutation, Types.UpdateEstimateMutationVariables>;
export declare const ArchiveEstimateDocument: Apollo.DocumentNode;
export declare type ArchiveEstimateMutationFn = Apollo.MutationFunction<Types.ArchiveEstimateMutation, Types.ArchiveEstimateMutationVariables>;
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
export declare function useArchiveEstimateMutation(baseOptions?: Apollo.MutationHookOptions<Types.ArchiveEstimateMutation, Types.ArchiveEstimateMutationVariables>): Apollo.MutationTuple<Types.ArchiveEstimateMutation, Types.Exact<{
    estimateId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type ArchiveEstimateMutationHookResult = ReturnType<typeof useArchiveEstimateMutation>;
export declare type ArchiveEstimateMutationResult = Apollo.MutationResult<Types.ArchiveEstimateMutation>;
export declare type ArchiveEstimateMutationOptions = Apollo.BaseMutationOptions<Types.ArchiveEstimateMutation, Types.ArchiveEstimateMutationVariables>;
export declare const InsertEstimateM2mEntityDocument: Apollo.DocumentNode;
export declare type InsertEstimateM2mEntityMutationFn = Apollo.MutationFunction<Types.InsertEstimateM2mEntityMutation, Types.InsertEstimateM2mEntityMutationVariables>;
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
export declare function useInsertEstimateM2mEntityMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertEstimateM2mEntityMutation, Types.InsertEstimateM2mEntityMutationVariables>): Apollo.MutationTuple<Types.InsertEstimateM2mEntityMutation, Types.Exact<{
    estimateM2mEntity: Types.EstimatesM2mEntitiesInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertEstimateM2mEntityMutationHookResult = ReturnType<typeof useInsertEstimateM2mEntityMutation>;
export declare type InsertEstimateM2mEntityMutationResult = Apollo.MutationResult<Types.InsertEstimateM2mEntityMutation>;
export declare type InsertEstimateM2mEntityMutationOptions = Apollo.BaseMutationOptions<Types.InsertEstimateM2mEntityMutation, Types.InsertEstimateM2mEntityMutationVariables>;
export declare const UpdateEstimateM2mEntityDocument: Apollo.DocumentNode;
export declare type UpdateEstimateM2mEntityMutationFn = Apollo.MutationFunction<Types.UpdateEstimateM2mEntityMutation, Types.UpdateEstimateM2mEntityMutationVariables>;
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
export declare function useUpdateEstimateM2mEntityMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateEstimateM2mEntityMutation, Types.UpdateEstimateM2mEntityMutationVariables>): Apollo.MutationTuple<Types.UpdateEstimateM2mEntityMutation, Types.Exact<{
    estimateM2mEntityId: string;
    estimateM2mEntity: Types.EstimatesM2mEntitiesSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateEstimateM2mEntityMutationHookResult = ReturnType<typeof useUpdateEstimateM2mEntityMutation>;
export declare type UpdateEstimateM2mEntityMutationResult = Apollo.MutationResult<Types.UpdateEstimateM2mEntityMutation>;
export declare type UpdateEstimateM2mEntityMutationOptions = Apollo.BaseMutationOptions<Types.UpdateEstimateM2mEntityMutation, Types.UpdateEstimateM2mEntityMutationVariables>;
export declare const GetEstimatesM2mEntitiesDocument: Apollo.DocumentNode;
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
export declare function useGetEstimatesM2mEntitiesQuery(baseOptions: Apollo.QueryHookOptions<Types.GetEstimatesM2mEntitiesQuery, Types.GetEstimatesM2mEntitiesQueryVariables>): Apollo.QueryResult<Types.GetEstimatesM2mEntitiesQuery, Types.Exact<{
    estimateId: string;
}>>;
export declare function useGetEstimatesM2mEntitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetEstimatesM2mEntitiesQuery, Types.GetEstimatesM2mEntitiesQueryVariables>): Apollo.QueryTuple<Types.GetEstimatesM2mEntitiesQuery, Types.Exact<{
    estimateId: string;
}>>;
export declare type GetEstimatesM2mEntitiesQueryHookResult = ReturnType<typeof useGetEstimatesM2mEntitiesQuery>;
export declare type GetEstimatesM2mEntitiesLazyQueryHookResult = ReturnType<typeof useGetEstimatesM2mEntitiesLazyQuery>;
export declare type GetEstimatesM2mEntitiesQueryResult = Apollo.QueryResult<Types.GetEstimatesM2mEntitiesQuery, Types.GetEstimatesM2mEntitiesQueryVariables>;
export declare const ArchiveEstimatesM2mEntitiesByPkDocument: Apollo.DocumentNode;
export declare type ArchiveEstimatesM2mEntitiesByPkMutationFn = Apollo.MutationFunction<Types.ArchiveEstimatesM2mEntitiesByPkMutation, Types.ArchiveEstimatesM2mEntitiesByPkMutationVariables>;
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
export declare function useArchiveEstimatesM2mEntitiesByPkMutation(baseOptions?: Apollo.MutationHookOptions<Types.ArchiveEstimatesM2mEntitiesByPkMutation, Types.ArchiveEstimatesM2mEntitiesByPkMutationVariables>): Apollo.MutationTuple<Types.ArchiveEstimatesM2mEntitiesByPkMutation, Types.Exact<{
    estimateM2mEntityId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type ArchiveEstimatesM2mEntitiesByPkMutationHookResult = ReturnType<typeof useArchiveEstimatesM2mEntitiesByPkMutation>;
export declare type ArchiveEstimatesM2mEntitiesByPkMutationResult = Apollo.MutationResult<Types.ArchiveEstimatesM2mEntitiesByPkMutation>;
export declare type ArchiveEstimatesM2mEntitiesByPkMutationOptions = Apollo.BaseMutationOptions<Types.ArchiveEstimatesM2mEntitiesByPkMutation, Types.ArchiveEstimatesM2mEntitiesByPkMutationVariables>;
export declare const GetGamesCommunicationsTypesDocument: Apollo.DocumentNode;
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
export declare function useGetGamesCommunicationsTypesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetGamesCommunicationsTypesQuery, Types.GetGamesCommunicationsTypesQueryVariables>): Apollo.QueryResult<Types.GetGamesCommunicationsTypesQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useGetGamesCommunicationsTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGamesCommunicationsTypesQuery, Types.GetGamesCommunicationsTypesQueryVariables>): Apollo.QueryTuple<Types.GetGamesCommunicationsTypesQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type GetGamesCommunicationsTypesQueryHookResult = ReturnType<typeof useGetGamesCommunicationsTypesQuery>;
export declare type GetGamesCommunicationsTypesLazyQueryHookResult = ReturnType<typeof useGetGamesCommunicationsTypesLazyQuery>;
export declare type GetGamesCommunicationsTypesQueryResult = Apollo.QueryResult<Types.GetGamesCommunicationsTypesQuery, Types.GetGamesCommunicationsTypesQueryVariables>;
export declare const GetGainsVirtualsByGainDocument: Apollo.DocumentNode;
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
export declare function useGetGainsVirtualsByGainQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGainsVirtualsByGainQuery, Types.GetGainsVirtualsByGainQueryVariables>): Apollo.QueryResult<Types.GetGainsVirtualsByGainQuery, Types.Exact<{
    gainId: string;
}>>;
export declare function useGetGainsVirtualsByGainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGainsVirtualsByGainQuery, Types.GetGainsVirtualsByGainQueryVariables>): Apollo.QueryTuple<Types.GetGainsVirtualsByGainQuery, Types.Exact<{
    gainId: string;
}>>;
export declare type GetGainsVirtualsByGainQueryHookResult = ReturnType<typeof useGetGainsVirtualsByGainQuery>;
export declare type GetGainsVirtualsByGainLazyQueryHookResult = ReturnType<typeof useGetGainsVirtualsByGainLazyQuery>;
export declare type GetGainsVirtualsByGainQueryResult = Apollo.QueryResult<Types.GetGainsVirtualsByGainQuery, Types.GetGainsVirtualsByGainQueryVariables>;
export declare const InsertGainsVirtualsDocument: Apollo.DocumentNode;
export declare type InsertGainsVirtualsMutationFn = Apollo.MutationFunction<Types.InsertGainsVirtualsMutation, Types.InsertGainsVirtualsMutationVariables>;
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
export declare function useInsertGainsVirtualsMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertGainsVirtualsMutation, Types.InsertGainsVirtualsMutationVariables>): Apollo.MutationTuple<Types.InsertGainsVirtualsMutation, Types.Exact<{
    gainId: string;
    gainsVirtuals: Types.GainsVirtualsInsertInput | Types.GainsVirtualsInsertInput[];
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertGainsVirtualsMutationHookResult = ReturnType<typeof useInsertGainsVirtualsMutation>;
export declare type InsertGainsVirtualsMutationResult = Apollo.MutationResult<Types.InsertGainsVirtualsMutation>;
export declare type InsertGainsVirtualsMutationOptions = Apollo.BaseMutationOptions<Types.InsertGainsVirtualsMutation, Types.InsertGainsVirtualsMutationVariables>;
export declare const GetGainsByClientDocument: Apollo.DocumentNode;
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
export declare function useGetGainsByClientQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGainsByClientQuery, Types.GetGainsByClientQueryVariables>): Apollo.QueryResult<Types.GetGainsByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare function useGetGainsByClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGainsByClientQuery, Types.GetGainsByClientQueryVariables>): Apollo.QueryTuple<Types.GetGainsByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare type GetGainsByClientQueryHookResult = ReturnType<typeof useGetGainsByClientQuery>;
export declare type GetGainsByClientLazyQueryHookResult = ReturnType<typeof useGetGainsByClientLazyQuery>;
export declare type GetGainsByClientQueryResult = Apollo.QueryResult<Types.GetGainsByClientQuery, Types.GetGainsByClientQueryVariables>;
export declare const InsertGainDocument: Apollo.DocumentNode;
export declare type InsertGainMutationFn = Apollo.MutationFunction<Types.InsertGainMutation, Types.InsertGainMutationVariables>;
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
export declare function useInsertGainMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertGainMutation, Types.InsertGainMutationVariables>): Apollo.MutationTuple<Types.InsertGainMutation, Types.Exact<{
    gain: Types.GainsInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertGainMutationHookResult = ReturnType<typeof useInsertGainMutation>;
export declare type InsertGainMutationResult = Apollo.MutationResult<Types.InsertGainMutation>;
export declare type InsertGainMutationOptions = Apollo.BaseMutationOptions<Types.InsertGainMutation, Types.InsertGainMutationVariables>;
export declare const UpdateGainDocument: Apollo.DocumentNode;
export declare type UpdateGainMutationFn = Apollo.MutationFunction<Types.UpdateGainMutation, Types.UpdateGainMutationVariables>;
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
export declare function useUpdateGainMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateGainMutation, Types.UpdateGainMutationVariables>): Apollo.MutationTuple<Types.UpdateGainMutation, Types.Exact<{
    gainId: string;
    gain: Types.GainsSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateGainMutationHookResult = ReturnType<typeof useUpdateGainMutation>;
export declare type UpdateGainMutationResult = Apollo.MutationResult<Types.UpdateGainMutation>;
export declare type UpdateGainMutationOptions = Apollo.BaseMutationOptions<Types.UpdateGainMutation, Types.UpdateGainMutationVariables>;
export declare const ArchiveGainDocument: Apollo.DocumentNode;
export declare type ArchiveGainMutationFn = Apollo.MutationFunction<Types.ArchiveGainMutation, Types.ArchiveGainMutationVariables>;
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
export declare function useArchiveGainMutation(baseOptions?: Apollo.MutationHookOptions<Types.ArchiveGainMutation, Types.ArchiveGainMutationVariables>): Apollo.MutationTuple<Types.ArchiveGainMutation, Types.Exact<{
    gainId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type ArchiveGainMutationHookResult = ReturnType<typeof useArchiveGainMutation>;
export declare type ArchiveGainMutationResult = Apollo.MutationResult<Types.ArchiveGainMutation>;
export declare type ArchiveGainMutationOptions = Apollo.BaseMutationOptions<Types.ArchiveGainMutation, Types.ArchiveGainMutationVariables>;
export declare const InsertGameGainDocument: Apollo.DocumentNode;
export declare type InsertGameGainMutationFn = Apollo.MutationFunction<Types.InsertGameGainMutation, Types.InsertGameGainMutationVariables>;
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
export declare function useInsertGameGainMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertGameGainMutation, Types.InsertGameGainMutationVariables>): Apollo.MutationTuple<Types.InsertGameGainMutation, Types.Exact<{
    gameGain: Types.GamesGainsInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertGameGainMutationHookResult = ReturnType<typeof useInsertGameGainMutation>;
export declare type InsertGameGainMutationResult = Apollo.MutationResult<Types.InsertGameGainMutation>;
export declare type InsertGameGainMutationOptions = Apollo.BaseMutationOptions<Types.InsertGameGainMutation, Types.InsertGameGainMutationVariables>;
export declare const UpdateGameGainDocument: Apollo.DocumentNode;
export declare type UpdateGameGainMutationFn = Apollo.MutationFunction<Types.UpdateGameGainMutation, Types.UpdateGameGainMutationVariables>;
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
export declare function useUpdateGameGainMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateGameGainMutation, Types.UpdateGameGainMutationVariables>): Apollo.MutationTuple<Types.UpdateGameGainMutation, Types.Exact<{
    gameId: string;
    gainId: string;
    gameGain: Types.GamesGainsSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateGameGainMutationHookResult = ReturnType<typeof useUpdateGameGainMutation>;
export declare type UpdateGameGainMutationResult = Apollo.MutationResult<Types.UpdateGameGainMutation>;
export declare type UpdateGameGainMutationOptions = Apollo.BaseMutationOptions<Types.UpdateGameGainMutation, Types.UpdateGameGainMutationVariables>;
export declare const DeleteGameGainDocument: Apollo.DocumentNode;
export declare type DeleteGameGainMutationFn = Apollo.MutationFunction<Types.DeleteGameGainMutation, Types.DeleteGameGainMutationVariables>;
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
export declare function useDeleteGameGainMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeleteGameGainMutation, Types.DeleteGameGainMutationVariables>): Apollo.MutationTuple<Types.DeleteGameGainMutation, Types.Exact<{
    gameId: string;
    gainId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type DeleteGameGainMutationHookResult = ReturnType<typeof useDeleteGameGainMutation>;
export declare type DeleteGameGainMutationResult = Apollo.MutationResult<Types.DeleteGameGainMutation>;
export declare type DeleteGameGainMutationOptions = Apollo.BaseMutationOptions<Types.DeleteGameGainMutation, Types.DeleteGameGainMutationVariables>;
export declare const GetGamesPlayedStatisticByClientDocument: Apollo.DocumentNode;
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
export declare function useGetGamesPlayedStatisticByClientQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGamesPlayedStatisticByClientQuery, Types.GetGamesPlayedStatisticByClientQueryVariables>): Apollo.QueryResult<Types.GetGamesPlayedStatisticByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare function useGetGamesPlayedStatisticByClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGamesPlayedStatisticByClientQuery, Types.GetGamesPlayedStatisticByClientQueryVariables>): Apollo.QueryTuple<Types.GetGamesPlayedStatisticByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare type GetGamesPlayedStatisticByClientQueryHookResult = ReturnType<typeof useGetGamesPlayedStatisticByClientQuery>;
export declare type GetGamesPlayedStatisticByClientLazyQueryHookResult = ReturnType<typeof useGetGamesPlayedStatisticByClientLazyQuery>;
export declare type GetGamesPlayedStatisticByClientQueryResult = Apollo.QueryResult<Types.GetGamesPlayedStatisticByClientQuery, Types.GetGamesPlayedStatisticByClientQueryVariables>;
export declare const GetGameWinnersDocument: Apollo.DocumentNode;
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
export declare function useGetGameWinnersQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGameWinnersQuery, Types.GetGameWinnersQueryVariables>): Apollo.QueryResult<Types.GetGameWinnersQuery, Types.Exact<{
    game_id: string;
}>>;
export declare function useGetGameWinnersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGameWinnersQuery, Types.GetGameWinnersQueryVariables>): Apollo.QueryTuple<Types.GetGameWinnersQuery, Types.Exact<{
    game_id: string;
}>>;
export declare type GetGameWinnersQueryHookResult = ReturnType<typeof useGetGameWinnersQuery>;
export declare type GetGameWinnersLazyQueryHookResult = ReturnType<typeof useGetGameWinnersLazyQuery>;
export declare type GetGameWinnersQueryResult = Apollo.QueryResult<Types.GetGameWinnersQuery, Types.GetGameWinnersQueryVariables>;
export declare const GetGamesTypesDocument: Apollo.DocumentNode;
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
export declare function useGetGamesTypesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetGamesTypesQuery, Types.GetGamesTypesQueryVariables>): Apollo.QueryResult<Types.GetGamesTypesQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useGetGamesTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGamesTypesQuery, Types.GetGamesTypesQueryVariables>): Apollo.QueryTuple<Types.GetGamesTypesQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type GetGamesTypesQueryHookResult = ReturnType<typeof useGetGamesTypesQuery>;
export declare type GetGamesTypesLazyQueryHookResult = ReturnType<typeof useGetGamesTypesLazyQuery>;
export declare type GetGamesTypesQueryResult = Apollo.QueryResult<Types.GetGamesTypesQuery, Types.GetGamesTypesQueryVariables>;
export declare const GetGameTypeByIdDocument: Apollo.DocumentNode;
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
export declare function useGetGameTypeByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGameTypeByIdQuery, Types.GetGameTypeByIdQueryVariables>): Apollo.QueryResult<Types.GetGameTypeByIdQuery, Types.Exact<{
    gameTypeId: string;
}>>;
export declare function useGetGameTypeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGameTypeByIdQuery, Types.GetGameTypeByIdQueryVariables>): Apollo.QueryTuple<Types.GetGameTypeByIdQuery, Types.Exact<{
    gameTypeId: string;
}>>;
export declare type GetGameTypeByIdQueryHookResult = ReturnType<typeof useGetGameTypeByIdQuery>;
export declare type GetGameTypeByIdLazyQueryHookResult = ReturnType<typeof useGetGameTypeByIdLazyQuery>;
export declare type GetGameTypeByIdQueryResult = Apollo.QueryResult<Types.GetGameTypeByIdQuery, Types.GetGameTypeByIdQueryVariables>;
export declare const GetGamesMinimalInfosDocument: Apollo.DocumentNode;
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
export declare function useGetGamesMinimalInfosQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetGamesMinimalInfosQuery, Types.GetGamesMinimalInfosQueryVariables>): Apollo.QueryResult<Types.GetGamesMinimalInfosQuery, Types.Exact<{
    clientId?: import("yup/lib/types").Maybe<string>;
}>>;
export declare function useGetGamesMinimalInfosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGamesMinimalInfosQuery, Types.GetGamesMinimalInfosQueryVariables>): Apollo.QueryTuple<Types.GetGamesMinimalInfosQuery, Types.Exact<{
    clientId?: import("yup/lib/types").Maybe<string>;
}>>;
export declare type GetGamesMinimalInfosQueryHookResult = ReturnType<typeof useGetGamesMinimalInfosQuery>;
export declare type GetGamesMinimalInfosLazyQueryHookResult = ReturnType<typeof useGetGamesMinimalInfosLazyQuery>;
export declare type GetGamesMinimalInfosQueryResult = Apollo.QueryResult<Types.GetGamesMinimalInfosQuery, Types.GetGamesMinimalInfosQueryVariables>;
export declare const GetGamesByClientAndGameTypeDocument: Apollo.DocumentNode;
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
export declare function useGetGamesByClientAndGameTypeQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGamesByClientAndGameTypeQuery, Types.GetGamesByClientAndGameTypeQueryVariables>): Apollo.QueryResult<Types.GetGamesByClientAndGameTypeQuery, Types.Exact<{
    clientId: string;
    gameTypeId: string;
}>>;
export declare function useGetGamesByClientAndGameTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGamesByClientAndGameTypeQuery, Types.GetGamesByClientAndGameTypeQueryVariables>): Apollo.QueryTuple<Types.GetGamesByClientAndGameTypeQuery, Types.Exact<{
    clientId: string;
    gameTypeId: string;
}>>;
export declare type GetGamesByClientAndGameTypeQueryHookResult = ReturnType<typeof useGetGamesByClientAndGameTypeQuery>;
export declare type GetGamesByClientAndGameTypeLazyQueryHookResult = ReturnType<typeof useGetGamesByClientAndGameTypeLazyQuery>;
export declare type GetGamesByClientAndGameTypeQueryResult = Apollo.QueryResult<Types.GetGamesByClientAndGameTypeQuery, Types.GetGamesByClientAndGameTypeQueryVariables>;
export declare const InsertGameDocument: Apollo.DocumentNode;
export declare type InsertGameMutationFn = Apollo.MutationFunction<Types.InsertGameMutation, Types.InsertGameMutationVariables>;
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
export declare function useInsertGameMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertGameMutation, Types.InsertGameMutationVariables>): Apollo.MutationTuple<Types.InsertGameMutation, Types.Exact<{
    game: Types.GamesInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertGameMutationHookResult = ReturnType<typeof useInsertGameMutation>;
export declare type InsertGameMutationResult = Apollo.MutationResult<Types.InsertGameMutation>;
export declare type InsertGameMutationOptions = Apollo.BaseMutationOptions<Types.InsertGameMutation, Types.InsertGameMutationVariables>;
export declare const UpdateGameDocument: Apollo.DocumentNode;
export declare type UpdateGameMutationFn = Apollo.MutationFunction<Types.UpdateGameMutation, Types.UpdateGameMutationVariables>;
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
export declare function useUpdateGameMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateGameMutation, Types.UpdateGameMutationVariables>): Apollo.MutationTuple<Types.UpdateGameMutation, Types.Exact<{
    gameId: string;
    game: Types.GamesSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateGameMutationHookResult = ReturnType<typeof useUpdateGameMutation>;
export declare type UpdateGameMutationResult = Apollo.MutationResult<Types.UpdateGameMutation>;
export declare type UpdateGameMutationOptions = Apollo.BaseMutationOptions<Types.UpdateGameMutation, Types.UpdateGameMutationVariables>;
export declare const ArchiveGameDocument: Apollo.DocumentNode;
export declare type ArchiveGameMutationFn = Apollo.MutationFunction<Types.ArchiveGameMutation, Types.ArchiveGameMutationVariables>;
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
export declare function useArchiveGameMutation(baseOptions?: Apollo.MutationHookOptions<Types.ArchiveGameMutation, Types.ArchiveGameMutationVariables>): Apollo.MutationTuple<Types.ArchiveGameMutation, Types.Exact<{
    gameId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type ArchiveGameMutationHookResult = ReturnType<typeof useArchiveGameMutation>;
export declare type ArchiveGameMutationResult = Apollo.MutationResult<Types.ArchiveGameMutation>;
export declare type ArchiveGameMutationOptions = Apollo.BaseMutationOptions<Types.ArchiveGameMutation, Types.ArchiveGameMutationVariables>;
export declare const GetGoodieDocument: Apollo.DocumentNode;
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
export declare function useGetGoodieQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGoodieQuery, Types.GetGoodieQueryVariables>): Apollo.QueryResult<Types.GetGoodieQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetGoodieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGoodieQuery, Types.GetGoodieQueryVariables>): Apollo.QueryTuple<Types.GetGoodieQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetGoodieQueryHookResult = ReturnType<typeof useGetGoodieQuery>;
export declare type GetGoodieLazyQueryHookResult = ReturnType<typeof useGetGoodieLazyQuery>;
export declare type GetGoodieQueryResult = Apollo.QueryResult<Types.GetGoodieQuery, Types.GetGoodieQueryVariables>;
export declare const InsertGoodieDocument: Apollo.DocumentNode;
export declare type InsertGoodieMutationFn = Apollo.MutationFunction<Types.InsertGoodieMutation, Types.InsertGoodieMutationVariables>;
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
export declare function useInsertGoodieMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertGoodieMutation, Types.InsertGoodieMutationVariables>): Apollo.MutationTuple<Types.InsertGoodieMutation, Types.Exact<{
    goodie: Types.GoodiesInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertGoodieMutationHookResult = ReturnType<typeof useInsertGoodieMutation>;
export declare type InsertGoodieMutationResult = Apollo.MutationResult<Types.InsertGoodieMutation>;
export declare type InsertGoodieMutationOptions = Apollo.BaseMutationOptions<Types.InsertGoodieMutation, Types.InsertGoodieMutationVariables>;
export declare const UpdateGoodieDocument: Apollo.DocumentNode;
export declare type UpdateGoodieMutationFn = Apollo.MutationFunction<Types.UpdateGoodieMutation, Types.UpdateGoodieMutationVariables>;
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
export declare function useUpdateGoodieMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateGoodieMutation, Types.UpdateGoodieMutationVariables>): Apollo.MutationTuple<Types.UpdateGoodieMutation, Types.Exact<{
    goodieId: string;
    goodie: Types.GoodiesSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateGoodieMutationHookResult = ReturnType<typeof useUpdateGoodieMutation>;
export declare type UpdateGoodieMutationResult = Apollo.MutationResult<Types.UpdateGoodieMutation>;
export declare type UpdateGoodieMutationOptions = Apollo.BaseMutationOptions<Types.UpdateGoodieMutation, Types.UpdateGoodieMutationVariables>;
export declare const ArchiveGoodieDocument: Apollo.DocumentNode;
export declare type ArchiveGoodieMutationFn = Apollo.MutationFunction<Types.ArchiveGoodieMutation, Types.ArchiveGoodieMutationVariables>;
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
export declare function useArchiveGoodieMutation(baseOptions?: Apollo.MutationHookOptions<Types.ArchiveGoodieMutation, Types.ArchiveGoodieMutationVariables>): Apollo.MutationTuple<Types.ArchiveGoodieMutation, Types.Exact<{
    goodieId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type ArchiveGoodieMutationHookResult = ReturnType<typeof useArchiveGoodieMutation>;
export declare type ArchiveGoodieMutationResult = Apollo.MutationResult<Types.ArchiveGoodieMutation>;
export declare type ArchiveGoodieMutationOptions = Apollo.BaseMutationOptions<Types.ArchiveGoodieMutation, Types.ArchiveGoodieMutationVariables>;
export declare const InsertGoodiesM2mAnimationsDocument: Apollo.DocumentNode;
export declare type InsertGoodiesM2mAnimationsMutationFn = Apollo.MutationFunction<Types.InsertGoodiesM2mAnimationsMutation, Types.InsertGoodiesM2mAnimationsMutationVariables>;
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
export declare function useInsertGoodiesM2mAnimationsMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertGoodiesM2mAnimationsMutation, Types.InsertGoodiesM2mAnimationsMutationVariables>): Apollo.MutationTuple<Types.InsertGoodiesM2mAnimationsMutation, Types.Exact<{
    goodie_id: string;
    animation: Types.AnimationsObjRelInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertGoodiesM2mAnimationsMutationHookResult = ReturnType<typeof useInsertGoodiesM2mAnimationsMutation>;
export declare type InsertGoodiesM2mAnimationsMutationResult = Apollo.MutationResult<Types.InsertGoodiesM2mAnimationsMutation>;
export declare type InsertGoodiesM2mAnimationsMutationOptions = Apollo.BaseMutationOptions<Types.InsertGoodiesM2mAnimationsMutation, Types.InsertGoodiesM2mAnimationsMutationVariables>;
export declare const DeleteGoodiesM2mAnimationsDocument: Apollo.DocumentNode;
export declare type DeleteGoodiesM2mAnimationsMutationFn = Apollo.MutationFunction<Types.DeleteGoodiesM2mAnimationsMutation, Types.DeleteGoodiesM2mAnimationsMutationVariables>;
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
export declare function useDeleteGoodiesM2mAnimationsMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeleteGoodiesM2mAnimationsMutation, Types.DeleteGoodiesM2mAnimationsMutationVariables>): Apollo.MutationTuple<Types.DeleteGoodiesM2mAnimationsMutation, Types.Exact<{
    goodie_id: string;
    animation_id: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type DeleteGoodiesM2mAnimationsMutationHookResult = ReturnType<typeof useDeleteGoodiesM2mAnimationsMutation>;
export declare type DeleteGoodiesM2mAnimationsMutationResult = Apollo.MutationResult<Types.DeleteGoodiesM2mAnimationsMutation>;
export declare type DeleteGoodiesM2mAnimationsMutationOptions = Apollo.BaseMutationOptions<Types.DeleteGoodiesM2mAnimationsMutation, Types.DeleteGoodiesM2mAnimationsMutationVariables>;
export declare const InsertInfoDocument: Apollo.DocumentNode;
export declare type InsertInfoMutationFn = Apollo.MutationFunction<Types.InsertInfoMutation, Types.InsertInfoMutationVariables>;
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
export declare function useInsertInfoMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertInfoMutation, Types.InsertInfoMutationVariables>): Apollo.MutationTuple<Types.InsertInfoMutation, Types.Exact<{
    info: Types.InfosInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertInfoMutationHookResult = ReturnType<typeof useInsertInfoMutation>;
export declare type InsertInfoMutationResult = Apollo.MutationResult<Types.InsertInfoMutation>;
export declare type InsertInfoMutationOptions = Apollo.BaseMutationOptions<Types.InsertInfoMutation, Types.InsertInfoMutationVariables>;
export declare const GetInfoSpecificsDocument: Apollo.DocumentNode;
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
export declare function useGetInfoSpecificsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetInfoSpecificsQuery, Types.GetInfoSpecificsQueryVariables>): Apollo.QueryResult<Types.GetInfoSpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetInfoSpecificsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetInfoSpecificsQuery, Types.GetInfoSpecificsQueryVariables>): Apollo.QueryTuple<Types.GetInfoSpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetInfoSpecificsQueryHookResult = ReturnType<typeof useGetInfoSpecificsQuery>;
export declare type GetInfoSpecificsLazyQueryHookResult = ReturnType<typeof useGetInfoSpecificsLazyQuery>;
export declare type GetInfoSpecificsQueryResult = Apollo.QueryResult<Types.GetInfoSpecificsQuery, Types.GetInfoSpecificsQueryVariables>;
export declare const UpdateInfoDocument: Apollo.DocumentNode;
export declare type UpdateInfoMutationFn = Apollo.MutationFunction<Types.UpdateInfoMutation, Types.UpdateInfoMutationVariables>;
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
export declare function useUpdateInfoMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateInfoMutation, Types.UpdateInfoMutationVariables>): Apollo.MutationTuple<Types.UpdateInfoMutation, Types.Exact<{
    id: string;
    updates: Types.InfosSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateInfoMutationHookResult = ReturnType<typeof useUpdateInfoMutation>;
export declare type UpdateInfoMutationResult = Apollo.MutationResult<Types.UpdateInfoMutation>;
export declare type UpdateInfoMutationOptions = Apollo.BaseMutationOptions<Types.UpdateInfoMutation, Types.UpdateInfoMutationVariables>;
export declare const InsertPhotoDocument: Apollo.DocumentNode;
export declare type InsertPhotoMutationFn = Apollo.MutationFunction<Types.InsertPhotoMutation, Types.InsertPhotoMutationVariables>;
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
export declare function useInsertPhotoMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertPhotoMutation, Types.InsertPhotoMutationVariables>): Apollo.MutationTuple<Types.InsertPhotoMutation, Types.Exact<{
    photo: Types.PhotosInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertPhotoMutationHookResult = ReturnType<typeof useInsertPhotoMutation>;
export declare type InsertPhotoMutationResult = Apollo.MutationResult<Types.InsertPhotoMutation>;
export declare type InsertPhotoMutationOptions = Apollo.BaseMutationOptions<Types.InsertPhotoMutation, Types.InsertPhotoMutationVariables>;
export declare const GetPhotoSpecificsDocument: Apollo.DocumentNode;
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
export declare function useGetPhotoSpecificsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetPhotoSpecificsQuery, Types.GetPhotoSpecificsQueryVariables>): Apollo.QueryResult<Types.GetPhotoSpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetPhotoSpecificsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetPhotoSpecificsQuery, Types.GetPhotoSpecificsQueryVariables>): Apollo.QueryTuple<Types.GetPhotoSpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetPhotoSpecificsQueryHookResult = ReturnType<typeof useGetPhotoSpecificsQuery>;
export declare type GetPhotoSpecificsLazyQueryHookResult = ReturnType<typeof useGetPhotoSpecificsLazyQuery>;
export declare type GetPhotoSpecificsQueryResult = Apollo.QueryResult<Types.GetPhotoSpecificsQuery, Types.GetPhotoSpecificsQueryVariables>;
export declare const UpdatePhotoDocument: Apollo.DocumentNode;
export declare type UpdatePhotoMutationFn = Apollo.MutationFunction<Types.UpdatePhotoMutation, Types.UpdatePhotoMutationVariables>;
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
export declare function useUpdatePhotoMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdatePhotoMutation, Types.UpdatePhotoMutationVariables>): Apollo.MutationTuple<Types.UpdatePhotoMutation, Types.Exact<{
    id: string;
    updates: Types.PhotosSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdatePhotoMutationHookResult = ReturnType<typeof useUpdatePhotoMutation>;
export declare type UpdatePhotoMutationResult = Apollo.MutationResult<Types.UpdatePhotoMutation>;
export declare type UpdatePhotoMutationOptions = Apollo.BaseMutationOptions<Types.UpdatePhotoMutation, Types.UpdatePhotoMutationVariables>;
export declare const GetPrivatesDecksByClientDocument: Apollo.DocumentNode;
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
export declare function useGetPrivatesDecksByClientQuery(baseOptions: Apollo.QueryHookOptions<Types.GetPrivatesDecksByClientQuery, Types.GetPrivatesDecksByClientQueryVariables>): Apollo.QueryResult<Types.GetPrivatesDecksByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare function useGetPrivatesDecksByClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetPrivatesDecksByClientQuery, Types.GetPrivatesDecksByClientQueryVariables>): Apollo.QueryTuple<Types.GetPrivatesDecksByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare type GetPrivatesDecksByClientQueryHookResult = ReturnType<typeof useGetPrivatesDecksByClientQuery>;
export declare type GetPrivatesDecksByClientLazyQueryHookResult = ReturnType<typeof useGetPrivatesDecksByClientLazyQuery>;
export declare type GetPrivatesDecksByClientQueryResult = Apollo.QueryResult<Types.GetPrivatesDecksByClientQuery, Types.GetPrivatesDecksByClientQueryVariables>;
export declare const InsertPrivateDeckDocument: Apollo.DocumentNode;
export declare type InsertPrivateDeckMutationFn = Apollo.MutationFunction<Types.InsertPrivateDeckMutation, Types.InsertPrivateDeckMutationVariables>;
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
export declare function useInsertPrivateDeckMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertPrivateDeckMutation, Types.InsertPrivateDeckMutationVariables>): Apollo.MutationTuple<Types.InsertPrivateDeckMutation, Types.Exact<{
    privateDeck: Types.PrivatesDecksInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertPrivateDeckMutationHookResult = ReturnType<typeof useInsertPrivateDeckMutation>;
export declare type InsertPrivateDeckMutationResult = Apollo.MutationResult<Types.InsertPrivateDeckMutation>;
export declare type InsertPrivateDeckMutationOptions = Apollo.BaseMutationOptions<Types.InsertPrivateDeckMutation, Types.InsertPrivateDeckMutationVariables>;
export declare const UpdatePrivateDeckDocument: Apollo.DocumentNode;
export declare type UpdatePrivateDeckMutationFn = Apollo.MutationFunction<Types.UpdatePrivateDeckMutation, Types.UpdatePrivateDeckMutationVariables>;
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
export declare function useUpdatePrivateDeckMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdatePrivateDeckMutation, Types.UpdatePrivateDeckMutationVariables>): Apollo.MutationTuple<Types.UpdatePrivateDeckMutation, Types.Exact<{
    privateDeckId: string;
    privateDeck: Types.PrivatesDecksSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdatePrivateDeckMutationHookResult = ReturnType<typeof useUpdatePrivateDeckMutation>;
export declare type UpdatePrivateDeckMutationResult = Apollo.MutationResult<Types.UpdatePrivateDeckMutation>;
export declare type UpdatePrivateDeckMutationOptions = Apollo.BaseMutationOptions<Types.UpdatePrivateDeckMutation, Types.UpdatePrivateDeckMutationVariables>;
export declare const ArchivePrivateDeckDocument: Apollo.DocumentNode;
export declare type ArchivePrivateDeckMutationFn = Apollo.MutationFunction<Types.ArchivePrivateDeckMutation, Types.ArchivePrivateDeckMutationVariables>;
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
export declare function useArchivePrivateDeckMutation(baseOptions?: Apollo.MutationHookOptions<Types.ArchivePrivateDeckMutation, Types.ArchivePrivateDeckMutationVariables>): Apollo.MutationTuple<Types.ArchivePrivateDeckMutation, Types.Exact<{
    privateDeckId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type ArchivePrivateDeckMutationHookResult = ReturnType<typeof useArchivePrivateDeckMutation>;
export declare type ArchivePrivateDeckMutationResult = Apollo.MutationResult<Types.ArchivePrivateDeckMutation>;
export declare type ArchivePrivateDeckMutationOptions = Apollo.BaseMutationOptions<Types.ArchivePrivateDeckMutation, Types.ArchivePrivateDeckMutationVariables>;
export declare const GetGamesCommunicationsMinimalInfosDocument: Apollo.DocumentNode;
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
export declare function useGetGamesCommunicationsMinimalInfosQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetGamesCommunicationsMinimalInfosQuery, Types.GetGamesCommunicationsMinimalInfosQueryVariables>): Apollo.QueryResult<Types.GetGamesCommunicationsMinimalInfosQuery, Types.Exact<{
    clientId?: import("yup/lib/types").Maybe<string>;
}>>;
export declare function useGetGamesCommunicationsMinimalInfosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGamesCommunicationsMinimalInfosQuery, Types.GetGamesCommunicationsMinimalInfosQueryVariables>): Apollo.QueryTuple<Types.GetGamesCommunicationsMinimalInfosQuery, Types.Exact<{
    clientId?: import("yup/lib/types").Maybe<string>;
}>>;
export declare type GetGamesCommunicationsMinimalInfosQueryHookResult = ReturnType<typeof useGetGamesCommunicationsMinimalInfosQuery>;
export declare type GetGamesCommunicationsMinimalInfosLazyQueryHookResult = ReturnType<typeof useGetGamesCommunicationsMinimalInfosLazyQuery>;
export declare type GetGamesCommunicationsMinimalInfosQueryResult = Apollo.QueryResult<Types.GetGamesCommunicationsMinimalInfosQuery, Types.GetGamesCommunicationsMinimalInfosQueryVariables>;
export declare const InsertPrivateDeckM2mEntityDocument: Apollo.DocumentNode;
export declare type InsertPrivateDeckM2mEntityMutationFn = Apollo.MutationFunction<Types.InsertPrivateDeckM2mEntityMutation, Types.InsertPrivateDeckM2mEntityMutationVariables>;
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
export declare function useInsertPrivateDeckM2mEntityMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertPrivateDeckM2mEntityMutation, Types.InsertPrivateDeckM2mEntityMutationVariables>): Apollo.MutationTuple<Types.InsertPrivateDeckM2mEntityMutation, Types.Exact<{
    privateDeckId: string;
    entityId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertPrivateDeckM2mEntityMutationHookResult = ReturnType<typeof useInsertPrivateDeckM2mEntityMutation>;
export declare type InsertPrivateDeckM2mEntityMutationResult = Apollo.MutationResult<Types.InsertPrivateDeckM2mEntityMutation>;
export declare type InsertPrivateDeckM2mEntityMutationOptions = Apollo.BaseMutationOptions<Types.InsertPrivateDeckM2mEntityMutation, Types.InsertPrivateDeckM2mEntityMutationVariables>;
export declare const GetPrivateDeckM2mEntitiesDocument: Apollo.DocumentNode;
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
export declare function useGetPrivateDeckM2mEntitiesQuery(baseOptions: Apollo.QueryHookOptions<Types.GetPrivateDeckM2mEntitiesQuery, Types.GetPrivateDeckM2mEntitiesQueryVariables>): Apollo.QueryResult<Types.GetPrivateDeckM2mEntitiesQuery, Types.Exact<{
    privateDeckId: string;
}>>;
export declare function useGetPrivateDeckM2mEntitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetPrivateDeckM2mEntitiesQuery, Types.GetPrivateDeckM2mEntitiesQueryVariables>): Apollo.QueryTuple<Types.GetPrivateDeckM2mEntitiesQuery, Types.Exact<{
    privateDeckId: string;
}>>;
export declare type GetPrivateDeckM2mEntitiesQueryHookResult = ReturnType<typeof useGetPrivateDeckM2mEntitiesQuery>;
export declare type GetPrivateDeckM2mEntitiesLazyQueryHookResult = ReturnType<typeof useGetPrivateDeckM2mEntitiesLazyQuery>;
export declare type GetPrivateDeckM2mEntitiesQueryResult = Apollo.QueryResult<Types.GetPrivateDeckM2mEntitiesQuery, Types.GetPrivateDeckM2mEntitiesQueryVariables>;
export declare const DeletePrivateDeckM2mEntitiesByPkDocument: Apollo.DocumentNode;
export declare type DeletePrivateDeckM2mEntitiesByPkMutationFn = Apollo.MutationFunction<Types.DeletePrivateDeckM2mEntitiesByPkMutation, Types.DeletePrivateDeckM2mEntitiesByPkMutationVariables>;
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
export declare function useDeletePrivateDeckM2mEntitiesByPkMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeletePrivateDeckM2mEntitiesByPkMutation, Types.DeletePrivateDeckM2mEntitiesByPkMutationVariables>): Apollo.MutationTuple<Types.DeletePrivateDeckM2mEntitiesByPkMutation, Types.Exact<{
    privateDeckId: string;
    entityId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type DeletePrivateDeckM2mEntitiesByPkMutationHookResult = ReturnType<typeof useDeletePrivateDeckM2mEntitiesByPkMutation>;
export declare type DeletePrivateDeckM2mEntitiesByPkMutationResult = Apollo.MutationResult<Types.DeletePrivateDeckM2mEntitiesByPkMutation>;
export declare type DeletePrivateDeckM2mEntitiesByPkMutationOptions = Apollo.BaseMutationOptions<Types.DeletePrivateDeckM2mEntitiesByPkMutation, Types.DeletePrivateDeckM2mEntitiesByPkMutationVariables>;
export declare const GetQuizzSpecificsDocument: Apollo.DocumentNode;
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
export declare function useGetQuizzSpecificsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetQuizzSpecificsQuery, Types.GetQuizzSpecificsQueryVariables>): Apollo.QueryResult<Types.GetQuizzSpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetQuizzSpecificsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetQuizzSpecificsQuery, Types.GetQuizzSpecificsQueryVariables>): Apollo.QueryTuple<Types.GetQuizzSpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetQuizzSpecificsQueryHookResult = ReturnType<typeof useGetQuizzSpecificsQuery>;
export declare type GetQuizzSpecificsLazyQueryHookResult = ReturnType<typeof useGetQuizzSpecificsLazyQuery>;
export declare type GetQuizzSpecificsQueryResult = Apollo.QueryResult<Types.GetQuizzSpecificsQuery, Types.GetQuizzSpecificsQueryVariables>;
export declare const InsertQuizzDocument: Apollo.DocumentNode;
export declare type InsertQuizzMutationFn = Apollo.MutationFunction<Types.InsertQuizzMutation, Types.InsertQuizzMutationVariables>;
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
export declare function useInsertQuizzMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertQuizzMutation, Types.InsertQuizzMutationVariables>): Apollo.MutationTuple<Types.InsertQuizzMutation, Types.Exact<{
    quizz: Types.QuizzInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertQuizzMutationHookResult = ReturnType<typeof useInsertQuizzMutation>;
export declare type InsertQuizzMutationResult = Apollo.MutationResult<Types.InsertQuizzMutation>;
export declare type InsertQuizzMutationOptions = Apollo.BaseMutationOptions<Types.InsertQuizzMutation, Types.InsertQuizzMutationVariables>;
export declare const UpdateQuizzDocument: Apollo.DocumentNode;
export declare type UpdateQuizzMutationFn = Apollo.MutationFunction<Types.UpdateQuizzMutation, Types.UpdateQuizzMutationVariables>;
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
export declare function useUpdateQuizzMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateQuizzMutation, Types.UpdateQuizzMutationVariables>): Apollo.MutationTuple<Types.UpdateQuizzMutation, Types.Exact<{
    quizzId: string;
    quizz: Types.QuizzSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateQuizzMutationHookResult = ReturnType<typeof useUpdateQuizzMutation>;
export declare type UpdateQuizzMutationResult = Apollo.MutationResult<Types.UpdateQuizzMutation>;
export declare type UpdateQuizzMutationOptions = Apollo.BaseMutationOptions<Types.UpdateQuizzMutation, Types.UpdateQuizzMutationVariables>;
export declare const InsertQuizzQuestionDocument: Apollo.DocumentNode;
export declare type InsertQuizzQuestionMutationFn = Apollo.MutationFunction<Types.InsertQuizzQuestionMutation, Types.InsertQuizzQuestionMutationVariables>;
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
export declare function useInsertQuizzQuestionMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertQuizzQuestionMutation, Types.InsertQuizzQuestionMutationVariables>): Apollo.MutationTuple<Types.InsertQuizzQuestionMutation, Types.Exact<{
    object: Types.QuizzQuestionsInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertQuizzQuestionMutationHookResult = ReturnType<typeof useInsertQuizzQuestionMutation>;
export declare type InsertQuizzQuestionMutationResult = Apollo.MutationResult<Types.InsertQuizzQuestionMutation>;
export declare type InsertQuizzQuestionMutationOptions = Apollo.BaseMutationOptions<Types.InsertQuizzQuestionMutation, Types.InsertQuizzQuestionMutationVariables>;
export declare const UpdateQuizzQuestionDocument: Apollo.DocumentNode;
export declare type UpdateQuizzQuestionMutationFn = Apollo.MutationFunction<Types.UpdateQuizzQuestionMutation, Types.UpdateQuizzQuestionMutationVariables>;
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
export declare function useUpdateQuizzQuestionMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateQuizzQuestionMutation, Types.UpdateQuizzQuestionMutationVariables>): Apollo.MutationTuple<Types.UpdateQuizzQuestionMutation, Types.Exact<{
    id: string;
    updates: Types.QuizzQuestionsSetInput;
    quizzQuestionsAnswers: Types.QuizzQuestionsAnswersInsertInput | Types.QuizzQuestionsAnswersInsertInput[];
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateQuizzQuestionMutationHookResult = ReturnType<typeof useUpdateQuizzQuestionMutation>;
export declare type UpdateQuizzQuestionMutationResult = Apollo.MutationResult<Types.UpdateQuizzQuestionMutation>;
export declare type UpdateQuizzQuestionMutationOptions = Apollo.BaseMutationOptions<Types.UpdateQuizzQuestionMutation, Types.UpdateQuizzQuestionMutationVariables>;
export declare const DeleteQuizzQuestionDocument: Apollo.DocumentNode;
export declare type DeleteQuizzQuestionMutationFn = Apollo.MutationFunction<Types.DeleteQuizzQuestionMutation, Types.DeleteQuizzQuestionMutationVariables>;
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
export declare function useDeleteQuizzQuestionMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeleteQuizzQuestionMutation, Types.DeleteQuizzQuestionMutationVariables>): Apollo.MutationTuple<Types.DeleteQuizzQuestionMutation, Types.Exact<{
    id: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type DeleteQuizzQuestionMutationHookResult = ReturnType<typeof useDeleteQuizzQuestionMutation>;
export declare type DeleteQuizzQuestionMutationResult = Apollo.MutationResult<Types.DeleteQuizzQuestionMutation>;
export declare type DeleteQuizzQuestionMutationOptions = Apollo.BaseMutationOptions<Types.DeleteQuizzQuestionMutation, Types.DeleteQuizzQuestionMutationVariables>;
export declare const VerifyRandomDrawingInfosDocument: Apollo.DocumentNode;
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
export declare function useVerifyRandomDrawingInfosQuery(baseOptions: Apollo.QueryHookOptions<Types.VerifyRandomDrawingInfosQuery, Types.VerifyRandomDrawingInfosQueryVariables>): Apollo.QueryResult<Types.VerifyRandomDrawingInfosQuery, Types.Exact<{
    gameId: string;
    gainsIds: string | string[];
}>>;
export declare function useVerifyRandomDrawingInfosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.VerifyRandomDrawingInfosQuery, Types.VerifyRandomDrawingInfosQueryVariables>): Apollo.QueryTuple<Types.VerifyRandomDrawingInfosQuery, Types.Exact<{
    gameId: string;
    gainsIds: string | string[];
}>>;
export declare type VerifyRandomDrawingInfosQueryHookResult = ReturnType<typeof useVerifyRandomDrawingInfosQuery>;
export declare type VerifyRandomDrawingInfosLazyQueryHookResult = ReturnType<typeof useVerifyRandomDrawingInfosLazyQuery>;
export declare type VerifyRandomDrawingInfosQueryResult = Apollo.QueryResult<Types.VerifyRandomDrawingInfosQuery, Types.VerifyRandomDrawingInfosQueryVariables>;
export declare const GetArPlayersDocument: Apollo.DocumentNode;
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
export declare function useGetArPlayersQuery(baseOptions: Apollo.QueryHookOptions<Types.GetArPlayersQuery, Types.GetArPlayersQueryVariables>): Apollo.QueryResult<Types.GetArPlayersQuery, Types.Exact<{
    gameId: string;
    dateStart?: import("yup/lib/types").Maybe<string>;
    dateEnd?: import("yup/lib/types").Maybe<string>;
}>>;
export declare function useGetArPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetArPlayersQuery, Types.GetArPlayersQueryVariables>): Apollo.QueryTuple<Types.GetArPlayersQuery, Types.Exact<{
    gameId: string;
    dateStart?: import("yup/lib/types").Maybe<string>;
    dateEnd?: import("yup/lib/types").Maybe<string>;
}>>;
export declare type GetArPlayersQueryHookResult = ReturnType<typeof useGetArPlayersQuery>;
export declare type GetArPlayersLazyQueryHookResult = ReturnType<typeof useGetArPlayersLazyQuery>;
export declare type GetArPlayersQueryResult = Apollo.QueryResult<Types.GetArPlayersQuery, Types.GetArPlayersQueryVariables>;
export declare const GetQuizzPlayersDocument: Apollo.DocumentNode;
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
export declare function useGetQuizzPlayersQuery(baseOptions: Apollo.QueryHookOptions<Types.GetQuizzPlayersQuery, Types.GetQuizzPlayersQueryVariables>): Apollo.QueryResult<Types.GetQuizzPlayersQuery, Types.Exact<{
    gameId: string;
    dateStart?: import("yup/lib/types").Maybe<string>;
    dateEnd?: import("yup/lib/types").Maybe<string>;
    minScore?: import("yup/lib/types").Maybe<number>;
}>>;
export declare function useGetQuizzPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetQuizzPlayersQuery, Types.GetQuizzPlayersQueryVariables>): Apollo.QueryTuple<Types.GetQuizzPlayersQuery, Types.Exact<{
    gameId: string;
    dateStart?: import("yup/lib/types").Maybe<string>;
    dateEnd?: import("yup/lib/types").Maybe<string>;
    minScore?: import("yup/lib/types").Maybe<number>;
}>>;
export declare type GetQuizzPlayersQueryHookResult = ReturnType<typeof useGetQuizzPlayersQuery>;
export declare type GetQuizzPlayersLazyQueryHookResult = ReturnType<typeof useGetQuizzPlayersLazyQuery>;
export declare type GetQuizzPlayersQueryResult = Apollo.QueryResult<Types.GetQuizzPlayersQuery, Types.GetQuizzPlayersQueryVariables>;
export declare const GetVotePlayersDocument: Apollo.DocumentNode;
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
export declare function useGetVotePlayersQuery(baseOptions: Apollo.QueryHookOptions<Types.GetVotePlayersQuery, Types.GetVotePlayersQueryVariables>): Apollo.QueryResult<Types.GetVotePlayersQuery, Types.Exact<{
    gameId: string;
    dateStart?: import("yup/lib/types").Maybe<string>;
    dateEnd?: import("yup/lib/types").Maybe<string>;
}>>;
export declare function useGetVotePlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetVotePlayersQuery, Types.GetVotePlayersQueryVariables>): Apollo.QueryTuple<Types.GetVotePlayersQuery, Types.Exact<{
    gameId: string;
    dateStart?: import("yup/lib/types").Maybe<string>;
    dateEnd?: import("yup/lib/types").Maybe<string>;
}>>;
export declare type GetVotePlayersQueryHookResult = ReturnType<typeof useGetVotePlayersQuery>;
export declare type GetVotePlayersLazyQueryHookResult = ReturnType<typeof useGetVotePlayersLazyQuery>;
export declare type GetVotePlayersQueryResult = Apollo.QueryResult<Types.GetVotePlayersQuery, Types.GetVotePlayersQueryVariables>;
export declare const GetGameRandomDrawingsDocument: Apollo.DocumentNode;
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
export declare function useGetGameRandomDrawingsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGameRandomDrawingsQuery, Types.GetGameRandomDrawingsQueryVariables>): Apollo.QueryResult<Types.GetGameRandomDrawingsQuery, Types.Exact<{
    gameId: string;
}>>;
export declare function useGetGameRandomDrawingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGameRandomDrawingsQuery, Types.GetGameRandomDrawingsQueryVariables>): Apollo.QueryTuple<Types.GetGameRandomDrawingsQuery, Types.Exact<{
    gameId: string;
}>>;
export declare type GetGameRandomDrawingsQueryHookResult = ReturnType<typeof useGetGameRandomDrawingsQuery>;
export declare type GetGameRandomDrawingsLazyQueryHookResult = ReturnType<typeof useGetGameRandomDrawingsLazyQuery>;
export declare type GetGameRandomDrawingsQueryResult = Apollo.QueryResult<Types.GetGameRandomDrawingsQuery, Types.GetGameRandomDrawingsQueryVariables>;
export declare const InsertRandomDrawingsDocument: Apollo.DocumentNode;
export declare type InsertRandomDrawingsMutationFn = Apollo.MutationFunction<Types.InsertRandomDrawingsMutation, Types.InsertRandomDrawingsMutationVariables>;
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
export declare function useInsertRandomDrawingsMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertRandomDrawingsMutation, Types.InsertRandomDrawingsMutationVariables>): Apollo.MutationTuple<Types.InsertRandomDrawingsMutation, Types.Exact<{
    randomDrawingsInput: Types.RandomDrawingsInsertInput | Types.RandomDrawingsInsertInput[];
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertRandomDrawingsMutationHookResult = ReturnType<typeof useInsertRandomDrawingsMutation>;
export declare type InsertRandomDrawingsMutationResult = Apollo.MutationResult<Types.InsertRandomDrawingsMutation>;
export declare type InsertRandomDrawingsMutationOptions = Apollo.BaseMutationOptions<Types.InsertRandomDrawingsMutation, Types.InsertRandomDrawingsMutationVariables>;
export declare const InsertSurveyDocument: Apollo.DocumentNode;
export declare type InsertSurveyMutationFn = Apollo.MutationFunction<Types.InsertSurveyMutation, Types.InsertSurveyMutationVariables>;
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
export declare function useInsertSurveyMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertSurveyMutation, Types.InsertSurveyMutationVariables>): Apollo.MutationTuple<Types.InsertSurveyMutation, Types.Exact<{
    survey: Types.SurveysInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertSurveyMutationHookResult = ReturnType<typeof useInsertSurveyMutation>;
export declare type InsertSurveyMutationResult = Apollo.MutationResult<Types.InsertSurveyMutation>;
export declare type InsertSurveyMutationOptions = Apollo.BaseMutationOptions<Types.InsertSurveyMutation, Types.InsertSurveyMutationVariables>;
export declare const GetSurveySpecificsDocument: Apollo.DocumentNode;
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
export declare function useGetSurveySpecificsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetSurveySpecificsQuery, Types.GetSurveySpecificsQueryVariables>): Apollo.QueryResult<Types.GetSurveySpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetSurveySpecificsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetSurveySpecificsQuery, Types.GetSurveySpecificsQueryVariables>): Apollo.QueryTuple<Types.GetSurveySpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetSurveySpecificsQueryHookResult = ReturnType<typeof useGetSurveySpecificsQuery>;
export declare type GetSurveySpecificsLazyQueryHookResult = ReturnType<typeof useGetSurveySpecificsLazyQuery>;
export declare type GetSurveySpecificsQueryResult = Apollo.QueryResult<Types.GetSurveySpecificsQuery, Types.GetSurveySpecificsQueryVariables>;
export declare const UpdateSurveyDocument: Apollo.DocumentNode;
export declare type UpdateSurveyMutationFn = Apollo.MutationFunction<Types.UpdateSurveyMutation, Types.UpdateSurveyMutationVariables>;
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
export declare function useUpdateSurveyMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateSurveyMutation, Types.UpdateSurveyMutationVariables>): Apollo.MutationTuple<Types.UpdateSurveyMutation, Types.Exact<{
    id: string;
    updates: Types.SurveysSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateSurveyMutationHookResult = ReturnType<typeof useUpdateSurveyMutation>;
export declare type UpdateSurveyMutationResult = Apollo.MutationResult<Types.UpdateSurveyMutation>;
export declare type UpdateSurveyMutationOptions = Apollo.BaseMutationOptions<Types.UpdateSurveyMutation, Types.UpdateSurveyMutationVariables>;
export declare const InsertSurveyQuestionDocument: Apollo.DocumentNode;
export declare type InsertSurveyQuestionMutationFn = Apollo.MutationFunction<Types.InsertSurveyQuestionMutation, Types.InsertSurveyQuestionMutationVariables>;
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
export declare function useInsertSurveyQuestionMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertSurveyQuestionMutation, Types.InsertSurveyQuestionMutationVariables>): Apollo.MutationTuple<Types.InsertSurveyQuestionMutation, Types.Exact<{
    object: Types.SurveysQuestionsInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertSurveyQuestionMutationHookResult = ReturnType<typeof useInsertSurveyQuestionMutation>;
export declare type InsertSurveyQuestionMutationResult = Apollo.MutationResult<Types.InsertSurveyQuestionMutation>;
export declare type InsertSurveyQuestionMutationOptions = Apollo.BaseMutationOptions<Types.InsertSurveyQuestionMutation, Types.InsertSurveyQuestionMutationVariables>;
export declare const UpdateSurveyQuestionDocument: Apollo.DocumentNode;
export declare type UpdateSurveyQuestionMutationFn = Apollo.MutationFunction<Types.UpdateSurveyQuestionMutation, Types.UpdateSurveyQuestionMutationVariables>;
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
export declare function useUpdateSurveyQuestionMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateSurveyQuestionMutation, Types.UpdateSurveyQuestionMutationVariables>): Apollo.MutationTuple<Types.UpdateSurveyQuestionMutation, Types.Exact<{
    id: string;
    updates: Types.SurveysQuestionsSetInput;
    surveysQuestionsAnswers: Types.SurveysQuestionsAnswersInsertInput | Types.SurveysQuestionsAnswersInsertInput[];
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateSurveyQuestionMutationHookResult = ReturnType<typeof useUpdateSurveyQuestionMutation>;
export declare type UpdateSurveyQuestionMutationResult = Apollo.MutationResult<Types.UpdateSurveyQuestionMutation>;
export declare type UpdateSurveyQuestionMutationOptions = Apollo.BaseMutationOptions<Types.UpdateSurveyQuestionMutation, Types.UpdateSurveyQuestionMutationVariables>;
export declare const DeleteSurveyQuestionDocument: Apollo.DocumentNode;
export declare type DeleteSurveyQuestionMutationFn = Apollo.MutationFunction<Types.DeleteSurveyQuestionMutation, Types.DeleteSurveyQuestionMutationVariables>;
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
export declare function useDeleteSurveyQuestionMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeleteSurveyQuestionMutation, Types.DeleteSurveyQuestionMutationVariables>): Apollo.MutationTuple<Types.DeleteSurveyQuestionMutation, Types.Exact<{
    id: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type DeleteSurveyQuestionMutationHookResult = ReturnType<typeof useDeleteSurveyQuestionMutation>;
export declare type DeleteSurveyQuestionMutationResult = Apollo.MutationResult<Types.DeleteSurveyQuestionMutation>;
export declare type DeleteSurveyQuestionMutationOptions = Apollo.BaseMutationOptions<Types.DeleteSurveyQuestionMutation, Types.DeleteSurveyQuestionMutationVariables>;
export declare const GetTemplatesByClientDocument: Apollo.DocumentNode;
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
export declare function useGetTemplatesByClientQuery(baseOptions: Apollo.QueryHookOptions<Types.GetTemplatesByClientQuery, Types.GetTemplatesByClientQueryVariables>): Apollo.QueryResult<Types.GetTemplatesByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare function useGetTemplatesByClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetTemplatesByClientQuery, Types.GetTemplatesByClientQueryVariables>): Apollo.QueryTuple<Types.GetTemplatesByClientQuery, Types.Exact<{
    clientId: string;
}>>;
export declare type GetTemplatesByClientQueryHookResult = ReturnType<typeof useGetTemplatesByClientQuery>;
export declare type GetTemplatesByClientLazyQueryHookResult = ReturnType<typeof useGetTemplatesByClientLazyQuery>;
export declare type GetTemplatesByClientQueryResult = Apollo.QueryResult<Types.GetTemplatesByClientQuery, Types.GetTemplatesByClientQueryVariables>;
export declare const InsertTemplateDocument: Apollo.DocumentNode;
export declare type InsertTemplateMutationFn = Apollo.MutationFunction<Types.InsertTemplateMutation, Types.InsertTemplateMutationVariables>;
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
export declare function useInsertTemplateMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertTemplateMutation, Types.InsertTemplateMutationVariables>): Apollo.MutationTuple<Types.InsertTemplateMutation, Types.Exact<{
    template: Types.TemplatesInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertTemplateMutationHookResult = ReturnType<typeof useInsertTemplateMutation>;
export declare type InsertTemplateMutationResult = Apollo.MutationResult<Types.InsertTemplateMutation>;
export declare type InsertTemplateMutationOptions = Apollo.BaseMutationOptions<Types.InsertTemplateMutation, Types.InsertTemplateMutationVariables>;
export declare const UpdateTemplateDocument: Apollo.DocumentNode;
export declare type UpdateTemplateMutationFn = Apollo.MutationFunction<Types.UpdateTemplateMutation, Types.UpdateTemplateMutationVariables>;
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
export declare function useUpdateTemplateMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateTemplateMutation, Types.UpdateTemplateMutationVariables>): Apollo.MutationTuple<Types.UpdateTemplateMutation, Types.Exact<{
    templateId: string;
    updates: Types.TemplatesSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateTemplateMutationHookResult = ReturnType<typeof useUpdateTemplateMutation>;
export declare type UpdateTemplateMutationResult = Apollo.MutationResult<Types.UpdateTemplateMutation>;
export declare type UpdateTemplateMutationOptions = Apollo.BaseMutationOptions<Types.UpdateTemplateMutation, Types.UpdateTemplateMutationVariables>;
export declare const ArchiveTemplateDocument: Apollo.DocumentNode;
export declare type ArchiveTemplateMutationFn = Apollo.MutationFunction<Types.ArchiveTemplateMutation, Types.ArchiveTemplateMutationVariables>;
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
export declare function useArchiveTemplateMutation(baseOptions?: Apollo.MutationHookOptions<Types.ArchiveTemplateMutation, Types.ArchiveTemplateMutationVariables>): Apollo.MutationTuple<Types.ArchiveTemplateMutation, Types.Exact<{
    templateId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type ArchiveTemplateMutationHookResult = ReturnType<typeof useArchiveTemplateMutation>;
export declare type ArchiveTemplateMutationResult = Apollo.MutationResult<Types.ArchiveTemplateMutation>;
export declare type ArchiveTemplateMutationOptions = Apollo.BaseMutationOptions<Types.ArchiveTemplateMutation, Types.ArchiveTemplateMutationVariables>;
export declare const GetTrackersDocument: Apollo.DocumentNode;
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
export declare function useGetTrackersQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetTrackersQuery, Types.GetTrackersQueryVariables>): Apollo.QueryResult<Types.GetTrackersQuery, Types.Exact<{
    clientId?: import("yup/lib/types").Maybe<string>;
}>>;
export declare function useGetTrackersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetTrackersQuery, Types.GetTrackersQueryVariables>): Apollo.QueryTuple<Types.GetTrackersQuery, Types.Exact<{
    clientId?: import("yup/lib/types").Maybe<string>;
}>>;
export declare type GetTrackersQueryHookResult = ReturnType<typeof useGetTrackersQuery>;
export declare type GetTrackersLazyQueryHookResult = ReturnType<typeof useGetTrackersLazyQuery>;
export declare type GetTrackersQueryResult = Apollo.QueryResult<Types.GetTrackersQuery, Types.GetTrackersQueryVariables>;
export declare const InsertTrackerDocument: Apollo.DocumentNode;
export declare type InsertTrackerMutationFn = Apollo.MutationFunction<Types.InsertTrackerMutation, Types.InsertTrackerMutationVariables>;
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
export declare function useInsertTrackerMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertTrackerMutation, Types.InsertTrackerMutationVariables>): Apollo.MutationTuple<Types.InsertTrackerMutation, Types.Exact<{
    object: Types.ArTrackersInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertTrackerMutationHookResult = ReturnType<typeof useInsertTrackerMutation>;
export declare type InsertTrackerMutationResult = Apollo.MutationResult<Types.InsertTrackerMutation>;
export declare type InsertTrackerMutationOptions = Apollo.BaseMutationOptions<Types.InsertTrackerMutation, Types.InsertTrackerMutationVariables>;
export declare const UpdateTrackerDocument: Apollo.DocumentNode;
export declare type UpdateTrackerMutationFn = Apollo.MutationFunction<Types.UpdateTrackerMutation, Types.UpdateTrackerMutationVariables>;
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
export declare function useUpdateTrackerMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateTrackerMutation, Types.UpdateTrackerMutationVariables>): Apollo.MutationTuple<Types.UpdateTrackerMutation, Types.Exact<{
    id: string;
    updates: Types.ArTrackersSetInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateTrackerMutationHookResult = ReturnType<typeof useUpdateTrackerMutation>;
export declare type UpdateTrackerMutationResult = Apollo.MutationResult<Types.UpdateTrackerMutation>;
export declare type UpdateTrackerMutationOptions = Apollo.BaseMutationOptions<Types.UpdateTrackerMutation, Types.UpdateTrackerMutationVariables>;
export declare const GetVoteResultsDocument: Apollo.DocumentNode;
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
export declare function useGetVoteResultsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetVoteResultsQuery, Types.GetVoteResultsQueryVariables>): Apollo.QueryResult<Types.GetVoteResultsQuery, Types.Exact<{
    gameId: string;
}>>;
export declare function useGetVoteResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetVoteResultsQuery, Types.GetVoteResultsQueryVariables>): Apollo.QueryTuple<Types.GetVoteResultsQuery, Types.Exact<{
    gameId: string;
}>>;
export declare type GetVoteResultsQueryHookResult = ReturnType<typeof useGetVoteResultsQuery>;
export declare type GetVoteResultsLazyQueryHookResult = ReturnType<typeof useGetVoteResultsLazyQuery>;
export declare type GetVoteResultsQueryResult = Apollo.QueryResult<Types.GetVoteResultsQuery, Types.GetVoteResultsQueryVariables>;
export declare const InsertVoteDocument: Apollo.DocumentNode;
export declare type InsertVoteMutationFn = Apollo.MutationFunction<Types.InsertVoteMutation, Types.InsertVoteMutationVariables>;
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
export declare function useInsertVoteMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertVoteMutation, Types.InsertVoteMutationVariables>): Apollo.MutationTuple<Types.InsertVoteMutation, Types.Exact<{
    vote: Types.VotesInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertVoteMutationHookResult = ReturnType<typeof useInsertVoteMutation>;
export declare type InsertVoteMutationResult = Apollo.MutationResult<Types.InsertVoteMutation>;
export declare type InsertVoteMutationOptions = Apollo.BaseMutationOptions<Types.InsertVoteMutation, Types.InsertVoteMutationVariables>;
export declare const GetVoteSpecificsDocument: Apollo.DocumentNode;
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
export declare function useGetVoteSpecificsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetVoteSpecificsQuery, Types.GetVoteSpecificsQueryVariables>): Apollo.QueryResult<Types.GetVoteSpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetVoteSpecificsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetVoteSpecificsQuery, Types.GetVoteSpecificsQueryVariables>): Apollo.QueryTuple<Types.GetVoteSpecificsQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetVoteSpecificsQueryHookResult = ReturnType<typeof useGetVoteSpecificsQuery>;
export declare type GetVoteSpecificsLazyQueryHookResult = ReturnType<typeof useGetVoteSpecificsLazyQuery>;
export declare type GetVoteSpecificsQueryResult = Apollo.QueryResult<Types.GetVoteSpecificsQuery, Types.GetVoteSpecificsQueryVariables>;
export declare const InsertVoteSelectionDocument: Apollo.DocumentNode;
export declare type InsertVoteSelectionMutationFn = Apollo.MutationFunction<Types.InsertVoteSelectionMutation, Types.InsertVoteSelectionMutationVariables>;
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
export declare function useInsertVoteSelectionMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertVoteSelectionMutation, Types.InsertVoteSelectionMutationVariables>): Apollo.MutationTuple<Types.InsertVoteSelectionMutation, Types.Exact<{
    object: Types.VotesSelectionsInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertVoteSelectionMutationHookResult = ReturnType<typeof useInsertVoteSelectionMutation>;
export declare type InsertVoteSelectionMutationResult = Apollo.MutationResult<Types.InsertVoteSelectionMutation>;
export declare type InsertVoteSelectionMutationOptions = Apollo.BaseMutationOptions<Types.InsertVoteSelectionMutation, Types.InsertVoteSelectionMutationVariables>;
export declare const UpdateVoteSelectionDocument: Apollo.DocumentNode;
export declare type UpdateVoteSelectionMutationFn = Apollo.MutationFunction<Types.UpdateVoteSelectionMutation, Types.UpdateVoteSelectionMutationVariables>;
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
export declare function useUpdateVoteSelectionMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateVoteSelectionMutation, Types.UpdateVoteSelectionMutationVariables>): Apollo.MutationTuple<Types.UpdateVoteSelectionMutation, Types.Exact<{
    id: string;
    updates: Types.VotesSelectionsSetInput;
    voteSelectionsChoices: Types.VotesSelectionsChoicesInsertInput | Types.VotesSelectionsChoicesInsertInput[];
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateVoteSelectionMutationHookResult = ReturnType<typeof useUpdateVoteSelectionMutation>;
export declare type UpdateVoteSelectionMutationResult = Apollo.MutationResult<Types.UpdateVoteSelectionMutation>;
export declare type UpdateVoteSelectionMutationOptions = Apollo.BaseMutationOptions<Types.UpdateVoteSelectionMutation, Types.UpdateVoteSelectionMutationVariables>;
export declare const DeleteVoteSelectionDocument: Apollo.DocumentNode;
export declare type DeleteVoteSelectionMutationFn = Apollo.MutationFunction<Types.DeleteVoteSelectionMutation, Types.DeleteVoteSelectionMutationVariables>;
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
export declare function useDeleteVoteSelectionMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeleteVoteSelectionMutation, Types.DeleteVoteSelectionMutationVariables>): Apollo.MutationTuple<Types.DeleteVoteSelectionMutation, Types.Exact<{
    id: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type DeleteVoteSelectionMutationHookResult = ReturnType<typeof useDeleteVoteSelectionMutation>;
export declare type DeleteVoteSelectionMutationResult = Apollo.MutationResult<Types.DeleteVoteSelectionMutation>;
export declare type DeleteVoteSelectionMutationOptions = Apollo.BaseMutationOptions<Types.DeleteVoteSelectionMutation, Types.DeleteVoteSelectionMutationVariables>;
export declare const GetClientsByEmailDocument: Apollo.DocumentNode;
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
export declare function useGetClientsByEmailQuery(baseOptions: Apollo.QueryHookOptions<Types.GetClientsByEmailQuery, Types.GetClientsByEmailQueryVariables>): Apollo.QueryResult<Types.GetClientsByEmailQuery, Types.Exact<{
    email: string;
}>>;
export declare function useGetClientsByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetClientsByEmailQuery, Types.GetClientsByEmailQueryVariables>): Apollo.QueryTuple<Types.GetClientsByEmailQuery, Types.Exact<{
    email: string;
}>>;
export declare type GetClientsByEmailQueryHookResult = ReturnType<typeof useGetClientsByEmailQuery>;
export declare type GetClientsByEmailLazyQueryHookResult = ReturnType<typeof useGetClientsByEmailLazyQuery>;
export declare type GetClientsByEmailQueryResult = Apollo.QueryResult<Types.GetClientsByEmailQuery, Types.GetClientsByEmailQueryVariables>;
export declare const InsertClientDocument: Apollo.DocumentNode;
export declare type InsertClientMutationFn = Apollo.MutationFunction<Types.InsertClientMutation, Types.InsertClientMutationVariables>;
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
export declare function useInsertClientMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertClientMutation, Types.InsertClientMutationVariables>): Apollo.MutationTuple<Types.InsertClientMutation, Types.Exact<{
    client: Types.ClientsInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertClientMutationHookResult = ReturnType<typeof useInsertClientMutation>;
export declare type InsertClientMutationResult = Apollo.MutationResult<Types.InsertClientMutation>;
export declare type InsertClientMutationOptions = Apollo.BaseMutationOptions<Types.InsertClientMutation, Types.InsertClientMutationVariables>;
export declare const InsertClientPasswordForgottenTokenDocument: Apollo.DocumentNode;
export declare type InsertClientPasswordForgottenTokenMutationFn = Apollo.MutationFunction<Types.InsertClientPasswordForgottenTokenMutation, Types.InsertClientPasswordForgottenTokenMutationVariables>;
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
export declare function useInsertClientPasswordForgottenTokenMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertClientPasswordForgottenTokenMutation, Types.InsertClientPasswordForgottenTokenMutationVariables>): Apollo.MutationTuple<Types.InsertClientPasswordForgottenTokenMutation, Types.Exact<{
    client_id: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertClientPasswordForgottenTokenMutationHookResult = ReturnType<typeof useInsertClientPasswordForgottenTokenMutation>;
export declare type InsertClientPasswordForgottenTokenMutationResult = Apollo.MutationResult<Types.InsertClientPasswordForgottenTokenMutation>;
export declare type InsertClientPasswordForgottenTokenMutationOptions = Apollo.BaseMutationOptions<Types.InsertClientPasswordForgottenTokenMutation, Types.InsertClientPasswordForgottenTokenMutationVariables>;
export declare const ResetPasswordDocument: Apollo.DocumentNode;
export declare type ResetPasswordMutationFn = Apollo.MutationFunction<Types.ResetPasswordMutation, Types.ResetPasswordMutationVariables>;
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
export declare function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<Types.ResetPasswordMutation, Types.ResetPasswordMutationVariables>): Apollo.MutationTuple<Types.ResetPasswordMutation, Types.Exact<{
    resetTokenId: string;
    limitDate: any;
    newPassword: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export declare type ResetPasswordMutationResult = Apollo.MutationResult<Types.ResetPasswordMutation>;
export declare type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<Types.ResetPasswordMutation, Types.ResetPasswordMutationVariables>;
export declare const GetUsersByEmailDocument: Apollo.DocumentNode;
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
export declare function useGetUsersByEmailQuery(baseOptions: Apollo.QueryHookOptions<Types.GetUsersByEmailQuery, Types.GetUsersByEmailQueryVariables>): Apollo.QueryResult<Types.GetUsersByEmailQuery, Types.Exact<{
    email: string;
}>>;
export declare function useGetUsersByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetUsersByEmailQuery, Types.GetUsersByEmailQueryVariables>): Apollo.QueryTuple<Types.GetUsersByEmailQuery, Types.Exact<{
    email: string;
}>>;
export declare type GetUsersByEmailQueryHookResult = ReturnType<typeof useGetUsersByEmailQuery>;
export declare type GetUsersByEmailLazyQueryHookResult = ReturnType<typeof useGetUsersByEmailLazyQuery>;
export declare type GetUsersByEmailQueryResult = Apollo.QueryResult<Types.GetUsersByEmailQuery, Types.GetUsersByEmailQueryVariables>;
export declare const GetUsersByAppleIdDocument: Apollo.DocumentNode;
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
export declare function useGetUsersByAppleIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetUsersByAppleIdQuery, Types.GetUsersByAppleIdQueryVariables>): Apollo.QueryResult<Types.GetUsersByAppleIdQuery, Types.Exact<{
    appleId: string;
}>>;
export declare function useGetUsersByAppleIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetUsersByAppleIdQuery, Types.GetUsersByAppleIdQueryVariables>): Apollo.QueryTuple<Types.GetUsersByAppleIdQuery, Types.Exact<{
    appleId: string;
}>>;
export declare type GetUsersByAppleIdQueryHookResult = ReturnType<typeof useGetUsersByAppleIdQuery>;
export declare type GetUsersByAppleIdLazyQueryHookResult = ReturnType<typeof useGetUsersByAppleIdLazyQuery>;
export declare type GetUsersByAppleIdQueryResult = Apollo.QueryResult<Types.GetUsersByAppleIdQuery, Types.GetUsersByAppleIdQueryVariables>;
export declare const InsertUserDocument: Apollo.DocumentNode;
export declare type InsertUserMutationFn = Apollo.MutationFunction<Types.InsertUserMutation, Types.InsertUserMutationVariables>;
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
export declare function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertUserMutation, Types.InsertUserMutationVariables>): Apollo.MutationTuple<Types.InsertUserMutation, Types.Exact<{
    user: Types.UsersInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export declare type InsertUserMutationResult = Apollo.MutationResult<Types.InsertUserMutation>;
export declare type InsertUserMutationOptions = Apollo.BaseMutationOptions<Types.InsertUserMutation, Types.InsertUserMutationVariables>;
export declare const UpsertUserDocument: Apollo.DocumentNode;
export declare type UpsertUserMutationFn = Apollo.MutationFunction<Types.UpsertUserMutation, Types.UpsertUserMutationVariables>;
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
export declare function useUpsertUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpsertUserMutation, Types.UpsertUserMutationVariables>): Apollo.MutationTuple<Types.UpsertUserMutation, Types.Exact<{
    user: Types.UsersInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpsertUserMutationHookResult = ReturnType<typeof useUpsertUserMutation>;
export declare type UpsertUserMutationResult = Apollo.MutationResult<Types.UpsertUserMutation>;
export declare type UpsertUserMutationOptions = Apollo.BaseMutationOptions<Types.UpsertUserMutation, Types.UpsertUserMutationVariables>;
export declare const UpsertAddressDocument: Apollo.DocumentNode;
export declare type UpsertAddressMutationFn = Apollo.MutationFunction<Types.UpsertAddressMutation, Types.UpsertAddressMutationVariables>;
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
export declare function useUpsertAddressMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpsertAddressMutation, Types.UpsertAddressMutationVariables>): Apollo.MutationTuple<Types.UpsertAddressMutation, Types.Exact<{
    address: Types.AddressesInsertInput;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpsertAddressMutationHookResult = ReturnType<typeof useUpsertAddressMutation>;
export declare type UpsertAddressMutationResult = Apollo.MutationResult<Types.UpsertAddressMutation>;
export declare type UpsertAddressMutationOptions = Apollo.BaseMutationOptions<Types.UpsertAddressMutation, Types.UpsertAddressMutationVariables>;
export declare const ValidateGainDocument: Apollo.DocumentNode;
export declare type ValidateGainMutationFn = Apollo.MutationFunction<Types.ValidateGainMutation, Types.ValidateGainMutationVariables>;
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
export declare function useValidateGainMutation(baseOptions?: Apollo.MutationHookOptions<Types.ValidateGainMutation, Types.ValidateGainMutationVariables>): Apollo.MutationTuple<Types.ValidateGainMutation, Types.Exact<{
    id: string;
    fromRandomDrawing: boolean;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type ValidateGainMutationHookResult = ReturnType<typeof useValidateGainMutation>;
export declare type ValidateGainMutationResult = Apollo.MutationResult<Types.ValidateGainMutation>;
export declare type ValidateGainMutationOptions = Apollo.BaseMutationOptions<Types.ValidateGainMutation, Types.ValidateGainMutationVariables>;
export declare const GetGainsWonDocument: Apollo.DocumentNode;
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
export declare function useGetGainsWonQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetGainsWonQuery, Types.GetGainsWonQueryVariables>): Apollo.QueryResult<Types.GetGainsWonQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useGetGainsWonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGainsWonQuery, Types.GetGainsWonQueryVariables>): Apollo.QueryTuple<Types.GetGainsWonQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type GetGainsWonQueryHookResult = ReturnType<typeof useGetGainsWonQuery>;
export declare type GetGainsWonLazyQueryHookResult = ReturnType<typeof useGetGainsWonLazyQuery>;
export declare type GetGainsWonQueryResult = Apollo.QueryResult<Types.GetGainsWonQuery, Types.GetGainsWonQueryVariables>;
export declare const GetGameFrequencyDocument: Apollo.DocumentNode;
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
export declare function useGetGameFrequencyQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGameFrequencyQuery, Types.GetGameFrequencyQueryVariables>): Apollo.QueryResult<Types.GetGameFrequencyQuery, Types.Exact<{
    gameId: string;
}>>;
export declare function useGetGameFrequencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGameFrequencyQuery, Types.GetGameFrequencyQueryVariables>): Apollo.QueryTuple<Types.GetGameFrequencyQuery, Types.Exact<{
    gameId: string;
}>>;
export declare type GetGameFrequencyQueryHookResult = ReturnType<typeof useGetGameFrequencyQuery>;
export declare type GetGameFrequencyLazyQueryHookResult = ReturnType<typeof useGetGameFrequencyLazyQuery>;
export declare type GetGameFrequencyQueryResult = Apollo.QueryResult<Types.GetGameFrequencyQuery, Types.GetGameFrequencyQueryVariables>;
export declare const GetGamePlayedCountDocument: Apollo.DocumentNode;
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
export declare function useGetGamePlayedCountQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGamePlayedCountQuery, Types.GetGamePlayedCountQueryVariables>): Apollo.QueryResult<Types.GetGamePlayedCountQuery, Types.Exact<{
    gameId: string;
    userId: string;
    dateFrom?: import("yup/lib/types").Maybe<string>;
}>>;
export declare function useGetGamePlayedCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGamePlayedCountQuery, Types.GetGamePlayedCountQueryVariables>): Apollo.QueryTuple<Types.GetGamePlayedCountQuery, Types.Exact<{
    gameId: string;
    userId: string;
    dateFrom?: import("yup/lib/types").Maybe<string>;
}>>;
export declare type GetGamePlayedCountQueryHookResult = ReturnType<typeof useGetGamePlayedCountQuery>;
export declare type GetGamePlayedCountLazyQueryHookResult = ReturnType<typeof useGetGamePlayedCountLazyQuery>;
export declare type GetGamePlayedCountQueryResult = Apollo.QueryResult<Types.GetGamePlayedCountQuery, Types.GetGamePlayedCountQueryVariables>;
export declare const GetInfosToPlayArDocument: Apollo.DocumentNode;
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
export declare function useGetInfosToPlayArQuery(baseOptions: Apollo.QueryHookOptions<Types.GetInfosToPlayArQuery, Types.GetInfosToPlayArQueryVariables>): Apollo.QueryResult<Types.GetInfosToPlayArQuery, Types.Exact<{
    gameId: string;
}>>;
export declare function useGetInfosToPlayArLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetInfosToPlayArQuery, Types.GetInfosToPlayArQueryVariables>): Apollo.QueryTuple<Types.GetInfosToPlayArQuery, Types.Exact<{
    gameId: string;
}>>;
export declare type GetInfosToPlayArQueryHookResult = ReturnType<typeof useGetInfosToPlayArQuery>;
export declare type GetInfosToPlayArLazyQueryHookResult = ReturnType<typeof useGetInfosToPlayArLazyQuery>;
export declare type GetInfosToPlayArQueryResult = Apollo.QueryResult<Types.GetInfosToPlayArQuery, Types.GetInfosToPlayArQueryVariables>;
export declare const PlayArDocument: Apollo.DocumentNode;
export declare type PlayArMutationFn = Apollo.MutationFunction<Types.PlayArMutation, Types.PlayArMutationVariables>;
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
export declare function usePlayArMutation(baseOptions?: Apollo.MutationHookOptions<Types.PlayArMutation, Types.PlayArMutationVariables>): Apollo.MutationTuple<Types.PlayArMutation, Types.Exact<{
    gameId: string;
    gainId?: import("yup/lib/types").Maybe<string>;
    userId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type PlayArMutationHookResult = ReturnType<typeof usePlayArMutation>;
export declare type PlayArMutationResult = Apollo.MutationResult<Types.PlayArMutation>;
export declare type PlayArMutationOptions = Apollo.BaseMutationOptions<Types.PlayArMutation, Types.PlayArMutationVariables>;
export declare const GetInfosToPlayQuizzDocument: Apollo.DocumentNode;
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
export declare function useGetInfosToPlayQuizzQuery(baseOptions: Apollo.QueryHookOptions<Types.GetInfosToPlayQuizzQuery, Types.GetInfosToPlayQuizzQueryVariables>): Apollo.QueryResult<Types.GetInfosToPlayQuizzQuery, Types.Exact<{
    gameId: string;
}>>;
export declare function useGetInfosToPlayQuizzLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetInfosToPlayQuizzQuery, Types.GetInfosToPlayQuizzQueryVariables>): Apollo.QueryTuple<Types.GetInfosToPlayQuizzQuery, Types.Exact<{
    gameId: string;
}>>;
export declare type GetInfosToPlayQuizzQueryHookResult = ReturnType<typeof useGetInfosToPlayQuizzQuery>;
export declare type GetInfosToPlayQuizzLazyQueryHookResult = ReturnType<typeof useGetInfosToPlayQuizzLazyQuery>;
export declare type GetInfosToPlayQuizzQueryResult = Apollo.QueryResult<Types.GetInfosToPlayQuizzQuery, Types.GetInfosToPlayQuizzQueryVariables>;
export declare const PlayQuizzDocument: Apollo.DocumentNode;
export declare type PlayQuizzMutationFn = Apollo.MutationFunction<Types.PlayQuizzMutation, Types.PlayQuizzMutationVariables>;
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
export declare function usePlayQuizzMutation(baseOptions?: Apollo.MutationHookOptions<Types.PlayQuizzMutation, Types.PlayQuizzMutationVariables>): Apollo.MutationTuple<Types.PlayQuizzMutation, Types.Exact<{
    gameId: string;
    gainId?: import("yup/lib/types").Maybe<string>;
    userId: string;
    score: number;
    time: number;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type PlayQuizzMutationHookResult = ReturnType<typeof usePlayQuizzMutation>;
export declare type PlayQuizzMutationResult = Apollo.MutationResult<Types.PlayQuizzMutation>;
export declare type PlayQuizzMutationOptions = Apollo.BaseMutationOptions<Types.PlayQuizzMutation, Types.PlayQuizzMutationVariables>;
export declare const GetQuizzByIdDocument: Apollo.DocumentNode;
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
export declare function useGetQuizzByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetQuizzByIdQuery, Types.GetQuizzByIdQueryVariables>): Apollo.QueryResult<Types.GetQuizzByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetQuizzByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetQuizzByIdQuery, Types.GetQuizzByIdQueryVariables>): Apollo.QueryTuple<Types.GetQuizzByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetQuizzByIdQueryHookResult = ReturnType<typeof useGetQuizzByIdQuery>;
export declare type GetQuizzByIdLazyQueryHookResult = ReturnType<typeof useGetQuizzByIdLazyQuery>;
export declare type GetQuizzByIdQueryResult = Apollo.QueryResult<Types.GetQuizzByIdQuery, Types.GetQuizzByIdQueryVariables>;
export declare const GetInfosToPlayVoteDocument: Apollo.DocumentNode;
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
export declare function useGetInfosToPlayVoteQuery(baseOptions: Apollo.QueryHookOptions<Types.GetInfosToPlayVoteQuery, Types.GetInfosToPlayVoteQueryVariables>): Apollo.QueryResult<Types.GetInfosToPlayVoteQuery, Types.Exact<{
    gameId: string;
}>>;
export declare function useGetInfosToPlayVoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetInfosToPlayVoteQuery, Types.GetInfosToPlayVoteQueryVariables>): Apollo.QueryTuple<Types.GetInfosToPlayVoteQuery, Types.Exact<{
    gameId: string;
}>>;
export declare type GetInfosToPlayVoteQueryHookResult = ReturnType<typeof useGetInfosToPlayVoteQuery>;
export declare type GetInfosToPlayVoteLazyQueryHookResult = ReturnType<typeof useGetInfosToPlayVoteLazyQuery>;
export declare type GetInfosToPlayVoteQueryResult = Apollo.QueryResult<Types.GetInfosToPlayVoteQuery, Types.GetInfosToPlayVoteQueryVariables>;
export declare const PlayVoteDocument: Apollo.DocumentNode;
export declare type PlayVoteMutationFn = Apollo.MutationFunction<Types.PlayVoteMutation, Types.PlayVoteMutationVariables>;
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
export declare function usePlayVoteMutation(baseOptions?: Apollo.MutationHookOptions<Types.PlayVoteMutation, Types.PlayVoteMutationVariables>): Apollo.MutationTuple<Types.PlayVoteMutation, Types.Exact<{
    gameId: string;
    gainId?: import("yup/lib/types").Maybe<string>;
    userId: string;
    results: any;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type PlayVoteMutationHookResult = ReturnType<typeof usePlayVoteMutation>;
export declare type PlayVoteMutationResult = Apollo.MutationResult<Types.PlayVoteMutation>;
export declare type PlayVoteMutationOptions = Apollo.BaseMutationOptions<Types.PlayVoteMutation, Types.PlayVoteMutationVariables>;
export declare const GetVoteByIdDocument: Apollo.DocumentNode;
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
export declare function useGetVoteByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetVoteByIdQuery, Types.GetVoteByIdQueryVariables>): Apollo.QueryResult<Types.GetVoteByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetVoteByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetVoteByIdQuery, Types.GetVoteByIdQueryVariables>): Apollo.QueryTuple<Types.GetVoteByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetVoteByIdQueryHookResult = ReturnType<typeof useGetVoteByIdQuery>;
export declare type GetVoteByIdLazyQueryHookResult = ReturnType<typeof useGetVoteByIdLazyQuery>;
export declare type GetVoteByIdQueryResult = Apollo.QueryResult<Types.GetVoteByIdQuery, Types.GetVoteByIdQueryVariables>;
export declare const GetGoodiesDocument: Apollo.DocumentNode;
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
export declare function useGetGoodiesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetGoodiesQuery, Types.GetGoodiesQueryVariables>): Apollo.QueryResult<Types.GetGoodiesQuery, Types.Exact<{
    clientId?: import("yup/lib/types").Maybe<string>;
}>>;
export declare function useGetGoodiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGoodiesQuery, Types.GetGoodiesQueryVariables>): Apollo.QueryTuple<Types.GetGoodiesQuery, Types.Exact<{
    clientId?: import("yup/lib/types").Maybe<string>;
}>>;
export declare type GetGoodiesQueryHookResult = ReturnType<typeof useGetGoodiesQuery>;
export declare type GetGoodiesLazyQueryHookResult = ReturnType<typeof useGetGoodiesLazyQuery>;
export declare type GetGoodiesQueryResult = Apollo.QueryResult<Types.GetGoodiesQuery, Types.GetGoodiesQueryVariables>;
export declare const GetGoodieAnimationsDocument: Apollo.DocumentNode;
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
export declare function useGetGoodieAnimationsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetGoodieAnimationsQuery, Types.GetGoodieAnimationsQueryVariables>): Apollo.QueryResult<Types.GetGoodieAnimationsQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetGoodieAnimationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetGoodieAnimationsQuery, Types.GetGoodieAnimationsQueryVariables>): Apollo.QueryTuple<Types.GetGoodieAnimationsQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetGoodieAnimationsQueryHookResult = ReturnType<typeof useGetGoodieAnimationsQuery>;
export declare type GetGoodieAnimationsLazyQueryHookResult = ReturnType<typeof useGetGoodieAnimationsLazyQuery>;
export declare type GetGoodieAnimationsQueryResult = Apollo.QueryResult<Types.GetGoodieAnimationsQuery, Types.GetGoodieAnimationsQueryVariables>;
export declare const PlayGoodieDocument: Apollo.DocumentNode;
export declare type PlayGoodieMutationFn = Apollo.MutationFunction<Types.PlayGoodieMutation, Types.PlayGoodieMutationVariables>;
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
export declare function usePlayGoodieMutation(baseOptions?: Apollo.MutationHookOptions<Types.PlayGoodieMutation, Types.PlayGoodieMutationVariables>): Apollo.MutationTuple<Types.PlayGoodieMutation, Types.Exact<{
    goodieId: string;
    userId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type PlayGoodieMutationHookResult = ReturnType<typeof usePlayGoodieMutation>;
export declare type PlayGoodieMutationResult = Apollo.MutationResult<Types.PlayGoodieMutation>;
export declare type PlayGoodieMutationOptions = Apollo.BaseMutationOptions<Types.PlayGoodieMutation, Types.PlayGoodieMutationVariables>;
export declare const GetTemplateByIdDocument: Apollo.DocumentNode;
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
export declare function useGetTemplateByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetTemplateByIdQuery, Types.GetTemplateByIdQueryVariables>): Apollo.QueryResult<Types.GetTemplateByIdQuery, Types.Exact<{
    templateId: string;
}>>;
export declare function useGetTemplateByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetTemplateByIdQuery, Types.GetTemplateByIdQueryVariables>): Apollo.QueryTuple<Types.GetTemplateByIdQuery, Types.Exact<{
    templateId: string;
}>>;
export declare type GetTemplateByIdQueryHookResult = ReturnType<typeof useGetTemplateByIdQuery>;
export declare type GetTemplateByIdLazyQueryHookResult = ReturnType<typeof useGetTemplateByIdLazyQuery>;
export declare type GetTemplateByIdQueryResult = Apollo.QueryResult<Types.GetTemplateByIdQuery, Types.GetTemplateByIdQueryVariables>;
export declare const GetNearbyCardsDocument: Apollo.DocumentNode;
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
export declare function useGetNearbyCardsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetNearbyCardsQuery, Types.GetNearbyCardsQueryVariables>): Apollo.QueryResult<Types.GetNearbyCardsQuery, Types.Exact<{
    location: any;
}>>;
export declare function useGetNearbyCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetNearbyCardsQuery, Types.GetNearbyCardsQueryVariables>): Apollo.QueryTuple<Types.GetNearbyCardsQuery, Types.Exact<{
    location: any;
}>>;
export declare type GetNearbyCardsQueryHookResult = ReturnType<typeof useGetNearbyCardsQuery>;
export declare type GetNearbyCardsLazyQueryHookResult = ReturnType<typeof useGetNearbyCardsLazyQuery>;
export declare type GetNearbyCardsQueryResult = Apollo.QueryResult<Types.GetNearbyCardsQuery, Types.GetNearbyCardsQueryVariables>;
export declare const GetNearbyPrivateDeckCardsDocument: Apollo.DocumentNode;
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
export declare function useGetNearbyPrivateDeckCardsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetNearbyPrivateDeckCardsQuery, Types.GetNearbyPrivateDeckCardsQueryVariables>): Apollo.QueryResult<Types.GetNearbyPrivateDeckCardsQuery, Types.Exact<{
    location: any;
    privateDeckId: string;
}>>;
export declare function useGetNearbyPrivateDeckCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetNearbyPrivateDeckCardsQuery, Types.GetNearbyPrivateDeckCardsQueryVariables>): Apollo.QueryTuple<Types.GetNearbyPrivateDeckCardsQuery, Types.Exact<{
    location: any;
    privateDeckId: string;
}>>;
export declare type GetNearbyPrivateDeckCardsQueryHookResult = ReturnType<typeof useGetNearbyPrivateDeckCardsQuery>;
export declare type GetNearbyPrivateDeckCardsLazyQueryHookResult = ReturnType<typeof useGetNearbyPrivateDeckCardsLazyQuery>;
export declare type GetNearbyPrivateDeckCardsQueryResult = Apollo.QueryResult<Types.GetNearbyPrivateDeckCardsQuery, Types.GetNearbyPrivateDeckCardsQueryVariables>;
export declare const GetNearbyCommunicationsDocument: Apollo.DocumentNode;
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
export declare function useGetNearbyCommunicationsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetNearbyCommunicationsQuery, Types.GetNearbyCommunicationsQueryVariables>): Apollo.QueryResult<Types.GetNearbyCommunicationsQuery, Types.Exact<{
    location: any;
    distance: number;
    currentDate: any;
}>>;
export declare function useGetNearbyCommunicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetNearbyCommunicationsQuery, Types.GetNearbyCommunicationsQueryVariables>): Apollo.QueryTuple<Types.GetNearbyCommunicationsQuery, Types.Exact<{
    location: any;
    distance: number;
    currentDate: any;
}>>;
export declare type GetNearbyCommunicationsQueryHookResult = ReturnType<typeof useGetNearbyCommunicationsQuery>;
export declare type GetNearbyCommunicationsLazyQueryHookResult = ReturnType<typeof useGetNearbyCommunicationsLazyQuery>;
export declare type GetNearbyCommunicationsQueryResult = Apollo.QueryResult<Types.GetNearbyCommunicationsQuery, Types.GetNearbyCommunicationsQueryVariables>;
export declare const GetNearbyGamesDocument: Apollo.DocumentNode;
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
export declare function useGetNearbyGamesQuery(baseOptions: Apollo.QueryHookOptions<Types.GetNearbyGamesQuery, Types.GetNearbyGamesQueryVariables>): Apollo.QueryResult<Types.GetNearbyGamesQuery, Types.Exact<{
    location: any;
    distance: number;
    currentDate: any;
}>>;
export declare function useGetNearbyGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetNearbyGamesQuery, Types.GetNearbyGamesQueryVariables>): Apollo.QueryTuple<Types.GetNearbyGamesQuery, Types.Exact<{
    location: any;
    distance: number;
    currentDate: any;
}>>;
export declare type GetNearbyGamesQueryHookResult = ReturnType<typeof useGetNearbyGamesQuery>;
export declare type GetNearbyGamesLazyQueryHookResult = ReturnType<typeof useGetNearbyGamesLazyQuery>;
export declare type GetNearbyGamesQueryResult = Apollo.QueryResult<Types.GetNearbyGamesQuery, Types.GetNearbyGamesQueryVariables>;
export declare const GetTestGamesDocument: Apollo.DocumentNode;
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
export declare function useGetTestGamesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetTestGamesQuery, Types.GetTestGamesQueryVariables>): Apollo.QueryResult<Types.GetTestGamesQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare function useGetTestGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetTestGamesQuery, Types.GetTestGamesQueryVariables>): Apollo.QueryTuple<Types.GetTestGamesQuery, Types.Exact<{
    [key: string]: never;
}>>;
export declare type GetTestGamesQueryHookResult = ReturnType<typeof useGetTestGamesQuery>;
export declare type GetTestGamesLazyQueryHookResult = ReturnType<typeof useGetTestGamesLazyQuery>;
export declare type GetTestGamesQueryResult = Apollo.QueryResult<Types.GetTestGamesQuery, Types.GetTestGamesQueryVariables>;
export declare const GetPrivateDeckByCodeDocument: Apollo.DocumentNode;
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
export declare function useGetPrivateDeckByCodeQuery(baseOptions: Apollo.QueryHookOptions<Types.GetPrivateDeckByCodeQuery, Types.GetPrivateDeckByCodeQueryVariables>): Apollo.QueryResult<Types.GetPrivateDeckByCodeQuery, Types.Exact<{
    code: string;
}>>;
export declare function useGetPrivateDeckByCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetPrivateDeckByCodeQuery, Types.GetPrivateDeckByCodeQueryVariables>): Apollo.QueryTuple<Types.GetPrivateDeckByCodeQuery, Types.Exact<{
    code: string;
}>>;
export declare type GetPrivateDeckByCodeQueryHookResult = ReturnType<typeof useGetPrivateDeckByCodeQuery>;
export declare type GetPrivateDeckByCodeLazyQueryHookResult = ReturnType<typeof useGetPrivateDeckByCodeLazyQuery>;
export declare type GetPrivateDeckByCodeQueryResult = Apollo.QueryResult<Types.GetPrivateDeckByCodeQuery, Types.GetPrivateDeckByCodeQueryVariables>;
export declare const InsertPrivateDeckM2mUserDocument: Apollo.DocumentNode;
export declare type InsertPrivateDeckM2mUserMutationFn = Apollo.MutationFunction<Types.InsertPrivateDeckM2mUserMutation, Types.InsertPrivateDeckM2mUserMutationVariables>;
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
export declare function useInsertPrivateDeckM2mUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertPrivateDeckM2mUserMutation, Types.InsertPrivateDeckM2mUserMutationVariables>): Apollo.MutationTuple<Types.InsertPrivateDeckM2mUserMutation, Types.Exact<{
    privateDeckId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type InsertPrivateDeckM2mUserMutationHookResult = ReturnType<typeof useInsertPrivateDeckM2mUserMutation>;
export declare type InsertPrivateDeckM2mUserMutationResult = Apollo.MutationResult<Types.InsertPrivateDeckM2mUserMutation>;
export declare type InsertPrivateDeckM2mUserMutationOptions = Apollo.BaseMutationOptions<Types.InsertPrivateDeckM2mUserMutation, Types.InsertPrivateDeckM2mUserMutationVariables>;
export declare const GetPrivatesDeckByUserDocument: Apollo.DocumentNode;
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
export declare function useGetPrivatesDeckByUserQuery(baseOptions: Apollo.QueryHookOptions<Types.GetPrivatesDeckByUserQuery, Types.GetPrivatesDeckByUserQueryVariables>): Apollo.QueryResult<Types.GetPrivatesDeckByUserQuery, Types.Exact<{
    userId: string;
}>>;
export declare function useGetPrivatesDeckByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetPrivatesDeckByUserQuery, Types.GetPrivatesDeckByUserQueryVariables>): Apollo.QueryTuple<Types.GetPrivatesDeckByUserQuery, Types.Exact<{
    userId: string;
}>>;
export declare type GetPrivatesDeckByUserQueryHookResult = ReturnType<typeof useGetPrivatesDeckByUserQuery>;
export declare type GetPrivatesDeckByUserLazyQueryHookResult = ReturnType<typeof useGetPrivatesDeckByUserLazyQuery>;
export declare type GetPrivatesDeckByUserQueryResult = Apollo.QueryResult<Types.GetPrivatesDeckByUserQuery, Types.GetPrivatesDeckByUserQueryVariables>;
export declare const GetUserByIdDocument: Apollo.DocumentNode;
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
export declare function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetUserByIdQuery, Types.GetUserByIdQueryVariables>): Apollo.QueryResult<Types.GetUserByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetUserByIdQuery, Types.GetUserByIdQueryVariables>): Apollo.QueryTuple<Types.GetUserByIdQuery, Types.Exact<{
    id: string;
}>>;
export declare type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export declare type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export declare type GetUserByIdQueryResult = Apollo.QueryResult<Types.GetUserByIdQuery, Types.GetUserByIdQueryVariables>;
export declare const UpdateUserDocument: Apollo.DocumentNode;
export declare type UpdateUserMutationFn = Apollo.MutationFunction<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>;
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
export declare function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>): Apollo.MutationTuple<Types.UpdateUserMutation, Types.Exact<{
    userId: string;
    user?: Types.UsersSetInput | null | undefined;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export declare type UpdateUserMutationResult = Apollo.MutationResult<Types.UpdateUserMutation>;
export declare type UpdateUserMutationOptions = Apollo.BaseMutationOptions<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>;
export declare const CreateStripeCustomerDocument: Apollo.DocumentNode;
export declare type CreateStripeCustomerMutationFn = Apollo.MutationFunction<Types.CreateStripeCustomerMutation, Types.CreateStripeCustomerMutationVariables>;
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
export declare function useCreateStripeCustomerMutation(baseOptions?: Apollo.MutationHookOptions<Types.CreateStripeCustomerMutation, Types.CreateStripeCustomerMutationVariables>): Apollo.MutationTuple<Types.CreateStripeCustomerMutation, Types.Exact<{
    name: string;
    email: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type CreateStripeCustomerMutationHookResult = ReturnType<typeof useCreateStripeCustomerMutation>;
export declare type CreateStripeCustomerMutationResult = Apollo.MutationResult<Types.CreateStripeCustomerMutation>;
export declare type CreateStripeCustomerMutationOptions = Apollo.BaseMutationOptions<Types.CreateStripeCustomerMutation, Types.CreateStripeCustomerMutationVariables>;
export declare const CreateStripeIntentDocument: Apollo.DocumentNode;
export declare type CreateStripeIntentMutationFn = Apollo.MutationFunction<Types.CreateStripeIntentMutation, Types.CreateStripeIntentMutationVariables>;
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
export declare function useCreateStripeIntentMutation(baseOptions?: Apollo.MutationHookOptions<Types.CreateStripeIntentMutation, Types.CreateStripeIntentMutationVariables>): Apollo.MutationTuple<Types.CreateStripeIntentMutation, Types.Exact<{
    customerId: string;
}>, Record<string, any>, Apollo.ApolloCache<any>>;
export declare type CreateStripeIntentMutationHookResult = ReturnType<typeof useCreateStripeIntentMutation>;
export declare type CreateStripeIntentMutationResult = Apollo.MutationResult<Types.CreateStripeIntentMutation>;
export declare type CreateStripeIntentMutationOptions = Apollo.BaseMutationOptions<Types.CreateStripeIntentMutation, Types.CreateStripeIntentMutationVariables>;
export declare const GetStripeCustomerPaymentMethodsDocument: Apollo.DocumentNode;
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
export declare function useGetStripeCustomerPaymentMethodsQuery(baseOptions: Apollo.QueryHookOptions<Types.GetStripeCustomerPaymentMethodsQuery, Types.GetStripeCustomerPaymentMethodsQueryVariables>): Apollo.QueryResult<Types.GetStripeCustomerPaymentMethodsQuery, Types.Exact<{
    customer: string;
    type: string;
}>>;
export declare function useGetStripeCustomerPaymentMethodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetStripeCustomerPaymentMethodsQuery, Types.GetStripeCustomerPaymentMethodsQueryVariables>): Apollo.QueryTuple<Types.GetStripeCustomerPaymentMethodsQuery, Types.Exact<{
    customer: string;
    type: string;
}>>;
export declare type GetStripeCustomerPaymentMethodsQueryHookResult = ReturnType<typeof useGetStripeCustomerPaymentMethodsQuery>;
export declare type GetStripeCustomerPaymentMethodsLazyQueryHookResult = ReturnType<typeof useGetStripeCustomerPaymentMethodsLazyQuery>;
export declare type GetStripeCustomerPaymentMethodsQueryResult = Apollo.QueryResult<Types.GetStripeCustomerPaymentMethodsQuery, Types.GetStripeCustomerPaymentMethodsQueryVariables>;
export interface PossibleTypesResultData {
    possibleTypes: {
        [key: string]: string[];
    };
}
declare const result: PossibleTypesResultData;
export default result;
