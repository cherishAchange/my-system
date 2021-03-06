import * as React from 'react';
import './Hello.scss';

export interface HelloProps { compiler: string; framework: string; }
export interface Second {  }

export const Hello = (props: HelloProps) => <h1>Hello from { props.compiler } and { props.framework }</h1>;