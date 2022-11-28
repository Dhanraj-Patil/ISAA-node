'use strict';

// import "./tab.css";

const e = React.createElement

var link=''

function getLink(a){
    link=a
}

class Tab extends React.Component{
    render(link){
        return e(
            'div',
            { onClick: () => {action()}},
            link
        );
    }
}



const domContainer = document.querySelector('#tab');
const root = ReactDOM.createRoot(domContainer);
root.render("link",e(Tab));