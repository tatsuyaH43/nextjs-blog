import { ZodType } from 'zod';

type FetchArgument<T> = {
  /** API */
  url: string;
  /** Next.jsのfetchオプション */
  fetchInit: RequestInit;
  /** zodで作成した型 */
  schema: ZodType<T>;
};

/**
 * fetchを拡張した関数<br>
 * zodで作成した型を使って、fetchで取得したデータを型チェックする
 */
export const fetcher = <T>({ url, fetchInit, schema }: FetchArgument<T>) => {
  const fetchData = fetch(url, fetchInit)
    .then((res) => res.json())
    .then((res) => {
      const validatorData = schema.safeParse(res);
      return {
        success: validatorData.success,
        data: validatorData.success ? validatorData.data : null,
        error: validatorData.success ? null : validatorData.error,
      };
    });
  return fetchData;
};
