// pusher.js
import Pusher from 'pusher-js';

var pusher = new Pusher('ef136162ebafbc149f55', {
    cluster: 'mt1'
});

export default pusher;
