export const data = {
    components: {
        title: 'Components',
        description: 'Components are the building blocks of react aplication. A component is a self-contained module (HTML + optional CSS + Js) that renders some output ',
        code: `function welcome() {
        return <h1>Hello, World</h1>;
        }`,
    },
     jsx: {
        title: 'JSX',
        description: 'Jsx, a syntax extension to javascript. It is smilar to template language, but it has full power of javascript (eg, it may output dynamic content',
        code:` <div>
            <h1>Wecome {userName}</h1>
            <p>Time to learn React!</p>
        </div>`,
    },
     props: {
        title: 'Props',
        description: 'Components accept abitrary input called props. They are like function arguments',
        code: `function (props.name) {
        return <h1>Hello, World</h1>;
        }`,
    },
     state: {
        title: 'State',
        description: 'State allow react to chnage output over time in response to usser actiobs, network responses, and anything esle',
        code: `function Counter() {
        const [isvisible, setIsvisible] = useState(false);

        function handleClick(){
        setInvisible(true);
        }
        return 
        <h1>Hello, World</h1>;
        }`,
    }
}