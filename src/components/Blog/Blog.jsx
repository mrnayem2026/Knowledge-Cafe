import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-5xl text-center font-medium py-5'>Some important article</h1>
            {/* 1st article start */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">

                <div className="collapse-title text-xl font-medium">
                    Props vs state
                </div>
                <div className="collapse-content">
                    <p>In React, props and state are both used to manage data but they have different properties and use cases. <br /><br />

                        Props (short for “properties”) are used to pass data from a parent component to a child component.<br />
                        They are read-only, meaning that the child component cannot modify the props data it receives. <br />
                        Props make it easy to reuse components across your application and keep your code organized.<br /><br />

                        State, on the other hand, is used to manage data within a component itself.<br />
                        State can be updated by the component itself and re-renders the component whenever it changes.<br />
                        It is typically used for interactivity and user input, such as toggling a dropdown or updating a text field.</p>
                </div>

            </div>
            {/* 1st article end */}
            {/* 2nd article start */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">

                <div className="collapse-title text-xl font-medium">
                    How does useState work?
                </div>
                <div className="collapse-content">
                    <p>The useState hook in React allows functional components to have state. <br />
                        When you use useState, you pass in an initial  <br />
                        state value and the hook returns an array with two elements: <br />
                        the current state value and a function to update the state</p>
                </div>

            </div>
            {/* 2nd article end */}

            {/*  3rd article start */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">

                <div className="collapse-title text-xl font-medium">
                    Purpose of useEffect other than fetching data.
                </div>
                <div className="collapse-content">
                    <p>The useEffect hook in React is used for handling side effects in functional components, <br />
                        other than fetching data. A side effect is any action that is performed by a component other than rendering,<br />
                        such as modifying the DOM, setting up event listeners, or performing animations.<br /><br />

                        Some examples of other use cases for the useEffect hook include:<br /><br />

                        Modifying the title of the webpage based on some state or data.<br />
                        Animating a component when it first appears on the screen or when a certain condition is met.<br />
                        Setting up and tearing down event listeners based on state or data.</p>
                </div>

            </div>
            {/*  3rd article end */}
            {/*  4th article start */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How Does React work?
                </div>
                <div className="collapse-content">
                    <p> React works by creating a virtual representation of the UI, <br />
                        which is then updated when changes are made to components or state.<br />
                        This virtual representation, or virtual DOM, is an in-memory copy of the actual UI,<br />
                        which React uses to determine the most efficient way to update the UI when a change occurs.</p>
                </div>
            </div>
            {/*  4th article end */}
        </div>
    );
};

export default Blog;