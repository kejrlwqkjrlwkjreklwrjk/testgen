/*
*	Generated by fireback 1.1.28
*	Written by Ali Torabi.
* The code is generated for react-query@v3.39.3
*	Checkout the repository for licenses and contribution: https://github.com/torabian/fireback
*/
import { FormikHelpers } from "formik";
import React, { useCallback, useContext } from "react";
import { useMutation, useQuery, useQueryClient, QueryClient , UseQueryOptions} from "react-query";
import {
  execApiFn,
  RemoteRequestOption,
  IDeleteResponse,
  IResponse,
  ExecApi,
  mutationErrorsToFormik,
  IResponseList
} from "../../core/http-tools";
import {
  RemoteQueryContext,
  queryBeforeSend,
  UseRemoteQuery
} from "../../core/react-tools";
export function useGetRegionalContentByUniqueId({ 
    queryOptions,
    execFnOverride,
    query,
    queryClient,
    unauthorized
}: UseRemoteQuery) {
  const { options, execFn } = useContext(RemoteQueryContext);
  // Calculare the function which will do the remote calls.
  // We consider to use global override, this specific override, or default which
  // comes with the sdk.
  const rpcFn = execFnOverride
    ? execFnOverride(options)
    : execFn
    ? execFn(options)
    : execApiFn(options);
  // Url of the remote affix.
  const url = "/regional-content/:uniqueId".substr(1);
  let computedUrl = `${url}?${new URLSearchParams(
    queryBeforeSend(query)
  ).toString()}`;
    computedUrl = computedUrl.replace(":uniqueId", (query as any)[":uniqueId".replace(":", "")])
  // Attach the details of the request to the fn
  const fn = () => rpcFn("GET", computedUrl);
  const auth = options?.headers?.authorization
  const hasKey = auth != "undefined" && auth != undefined && auth !=null && auth != "null" && !!auth
  const query$ = useQuery([options, query, "*workspaces.RegionalContentEntity"], fn, {
    cacheTime: 1001,
    retry: false,
    keepPreviousData: true,
    enabled: (hasKey || unauthorized ),
    // This is what it was before, but not sure how it would effect
    // enabled: (hasKey || unauthorized ) && !!query?.uniqueId,
    ...((queryOptions as any) || {})
  });
  return { query: query$ };
}
