import { Token, AllowedFieldsWithType } from '../../types';
import libs from '../global-libs';

type listAllowedFields = Exclude<AllowedFieldsWithType<Token, string>, undefined>;
export type InputDataType = Array<Partial<Pick<Token, listAllowedFields>>>;
export type OutputDataType = Promise<Array<Partial<Token>>>;
export type OptionsType =
  | undefined
  | {
      keys: Array<listAllowedFields>;
    };

export default async function (
  tokens: InputDataType,
  options: OptionsType = { keys: ['name'] },
  { _ }: typeof libs,
): OutputDataType {
  try {
    return tokens.map((token: Partial<Pick<Token, listAllowedFields>>) => {
      options.keys.forEach(key => {
        if (token[key]) token[key] = _.flow(_.camelCase, _.upperFirst)(token[key]);
      });
      return token;
    });
  } catch (err) {
    throw err;
  }
}
