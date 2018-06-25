import * as React from 'react';
import './hello_style.scss';
import { HelloProps, Second } from './hello_IF';

export const Hello = (props: HelloProps) => <h1>Hello from { props.compiler } and { props.framework }</h1>;