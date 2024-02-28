const H1 = React.createElement('h1',{},'i am H1')
const P = React.createElement('p',{},'i am paragrapy inside 1st Div')
const Div = React.createElement('div',{},P)

const P1 = React.createElement('p',{},'i am second p tag inside 2nd div')
const A = React.createElement('a',{href:'Home'},'i am ancher tag')
const Div2 = React.createElement('div',{},[P,A])

const P2 = React.createElement('p',{},'i am second paragrapy inside 3st Div')
const Div3 = React.createElement('div',{},P2)
const Div4 = React.createElement('div',{},H1,Div,Div2,Div3)

ReactDOM.render(Div4,document.getElementById('root'))
