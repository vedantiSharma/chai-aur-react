//  METHOD1****
 function  customComponent(reactElement,container){
//     const element = document.createElement(reactElement.type);
//     element.innerHTML = reactElement.children
//     element.setAttribute('href',reactElement.props.href)
//     element.setAttribute('target',reactElement.props.target)
//     mainContainer.appendChild(element)


//METHOD 2*************
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children;
for(const prop in reactElement.props){
    if(prop == 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
}
    container.appendChild(domElement);

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