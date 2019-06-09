import * as React from "react";
import { withSizes, Sizes } from "react-sizes";

type TestProps = {
    foo: string;
    width: number;
    height: number;
}

const mapSizesToProps = ({ width, height }: Sizes) => ({
    foo: 'foo',
    width,
    height
});

const TestComponent: React.ComponentType<TestProps> = ({
    foo,
    width,
    height
}) => {
    foo; // $ExpectType string
    width; // $ExpectType number
    height; // $ExpectType number
    return (
        <div>
            <p>Foo: {foo}</p>
            <p>Window width: {width}</p>
            <p>Window height: {height}</p>
        </div>
    );
};

withSizes(mapSizesToProps)(TestComponent); // $ExpectType ComponentType<TestProps>
