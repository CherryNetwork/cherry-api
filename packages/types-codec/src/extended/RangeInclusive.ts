// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple, CodecClass, INumber, Registry } from '../types';

import { Range } from './Range';

export class RangeInclusive<T extends INumber = INumber> extends Range<T> {
  constructor (registry: Registry, Type: CodecClass<T> | string, value?: AnyTuple) {
    super(registry, Type, value, 'RangeInclusive');
  }

  public static override with <T extends INumber> (Type: CodecClass<T> | string): CodecClass<RangeInclusive<T>> {
    return class extends RangeInclusive<T> {
      constructor (registry: Registry, value?: AnyTuple) {
        super(registry, Type, value);
      }
    };
  }
}
