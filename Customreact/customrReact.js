
function  customComponent(reactElement,mainContainer){
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children
    element.setAttribute('href',reactElement.props.href)
    element.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(element)

}

const reactElement = {
    type:'a',
    props:{
        href: 'https://www.google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}




const mainContainer = document.querySelector("#root");
customComponent(reactElement,mainContainer)