/**
 * created 10.02.2025
 */
import React from 'react';
import type {PropsWithChildren} from 'react';

type pageComponentType = PropsWithChildren<{}>

export default function Page(props: pageComponentType) {
  return <p>Customers page</p>;
}
