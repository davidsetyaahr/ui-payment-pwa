import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/utils/api.util";
import {baseUrl } from "@/helper/baseUrl";

export const fetchScore = (props) => {
  return apiGet({
    url: `${baseUrl}score/getTestItem`,
    ...props,
  });
};
export const useScoreDetail = (params) => {
  const { key = "fetchScore", deps, fnParams, options, token } = params || {};

  return useQuery({
    queryKey: deps ? [key, deps] : [key],
    queryFn: async ({ signal }) =>
      await fetchScore({ params: fnParams, signal, token }),
    ...options,
  });
};

// export const fetchScoreByTest = (studentId, testId, props) => {
//     return apiGet({
//       url: `${baseUrl}score/getScore/${studentId}/${testId}`,
//       ...props,
//     });
// };
// export const useScoreDetailBytest = (params) => {
//     const { key = 'fetchScoreByTest', studentId, testId, deps, fnParams, options, token } = params || {};

//     return useQuery({
//       queryKey: deps ? [key, studentId, testId, deps] : [key, studentId, testId],
//       queryFn: async ({ signal }) => await fetchScoreByTest(studentId, testId, { params: fnParams, signal, token }),
//       ...options,
//     });
// };
