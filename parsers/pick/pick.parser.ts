import { LibsType } from '../global-libs';

export type InputDataType = Array<Record<string, any>>;
export type OutputDataType = InputDataType;
export type OptionsType =
  | undefined
  | {
      keys: Array<string>;
    };

export default async function (
  tokens: InputDataType,
  options: OptionsType = { keys: ['name'] },
  { _ }: Pick<LibsType, '_'>,
): Promise<OutputDataType> {
  return tokens.map(token => {
    return _.pick(token, options.keys);
  });
}
