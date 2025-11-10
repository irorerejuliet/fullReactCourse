export const examples = {
    components: {
        title: 'Components',
        description: 'Components are the building blocks of react aplication. A component is reuseable.',
        code: `function welcome() {
        return <h1>Hello, World</h1>;
        }`,
    },
     jsx: {
        title: 'JSX',
        description: 'Jsx, a syntax extension to javascript. It is smilar to tenplate litrals',
        code:` <div>
            <h1>Wecome {userName}</h1>
            <p>Time to learn React!</p>
        </div>`,
    },
     props: {
        title: 'Props',
        description: 'Components accept abitrary input called props.',
        code: `function (props.name) {
        return <h1>Hello, World</h1>;
        }`,
    },
     state: {
        title: 'State',
        description: 'State allow react to chnage output over time.',
        code: `function Counter() {
        const [isvisible, setIsvisible]
        return <h1>Hello, World</h1>;
        }`,
    }
}