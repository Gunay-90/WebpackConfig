import $ from 'jquery';

class Header {
    constructor(el){
        this.el = el;
    }
    render() {
        $('header').html(`
        <nav>
        <ul>
        </ul>
        </nav>
        `)

        this.el.map(e=> {
            $(nav ul).append(`
            <li><a href="/${ e === 'home' ? '' : e + "html" }">${e}</a></li>
            `)
        })
    }
}


// render() {
//     $('header').html(`
//     <nav>
//         <ul>
//             <li><a href='/'>Home</a></li>
//             <li><a href='/second.html'>Second</a></li>
//             <li>About</li>
//             <li>Products</li>
//             <li>Support</li>
//         </ul>
//     </nav>

//     `)
// }
// }

export default Header;