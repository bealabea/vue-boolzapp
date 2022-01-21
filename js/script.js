new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Marco',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Martina',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Un uomo entra in un caffè',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Splash',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Sara',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luca',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'andiamo al Cinema?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'si, che bello!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Francesco',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Heilà',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Buongiorno',
                        status: 'received'
                    }
                ],
            },
        ],
        // risposte random
        answer: [
                'Non sono convinto', 'Sei forte', 'Che ne so?', 'Si ma stai calmo!', 'Brindo alla tua!',
                'Ma chi sei?', 'Buongiorno', 'Raccontami', ':)'  
            ],
        currentIndex: 0,
        temporaryMex: '',
        searchName: '',
        notify: true,
        modale: null,
    },
    methods: {
        // con questo metodo, quando clicco su un contatto visualizzo la chat corrispondente (setto currentIndex allo stesso valore dell'indice dei contatti)
        changeChat: function(index) {
            this.currentIndex = index
            this.modale = null;
        },
        // con questo metodo se la v:modal data all'input della chat è diversa da una stringa vuota pusho la stringa in un oggetto(con data e status)
        // che automaticamente si visualizzerà come messaggio nella chat, poi svuoto la stringa e compare una risposta random
        sendMessage: function(index){
            if (this.temporaryMex !== ''){
            this.contacts[index].messages.push({ date: this.getDate(), text: this.temporaryMex, status: 'sent'});
            this.temporaryMex = '';
            this.answerMessage(index);
            this.scrollToEnd();
            }
        },
        // con questo metodo pusho le risposte random dopo un secondo dall'invio del messaggio (inserito in sendMessage)
        answerMessage: function(index) {
            setTimeout(()=>{
                let rand = Math.floor(Math.random()*this.answer.length);
                this.contacts[index].messages.push({ date: this.getDate(), text: this.answer[rand], status: 'received'});
             },1000);
        },
        // con questo metodo porto lo scroll all'ultimo messaggio visualizzato (inserito in sendMessage)
        scrollToEnd: function() {  
            setTimeout(()=>{
            let container = this.$el.querySelector(".chat-bg");
            container.scrollTo(0, container.scrollHeight)
        },1200);
        },
        // bonus: ho creato questo metodo per settare la ricezione di notifiche e cambiare icona
        notifyOnOff: function(){
            this.notify = !this.notify
        },
        // con questo metodo e la libreria dayJs creo ora e data dinamici, (inserito in sendMessage e answerMessage)
        getDate() {
            return dayjs().format('DD/MM/YYYY  HH:mm:ss')
        },
        // con questo metodo creo una funzione che individua l'ultimo messaggio della chat
        // (utilizzato per aggiungere dinamicamente il giorno e l'ora dell'ultimo accesso del contatto)
        getLastAccess: function(index) {  
            let lastMex= this.contacts[index].messages.length -1;
            return this.contacts[index].messages[lastMex].date;
        },
        // con questo metodo setto la modale in false se è uguale all'indice del messaggio, quindi se aperta (= all'indice) si chiude, se è chiusa (=false) si apre
        openModal(index){
            if(this.modale === index){
                this.modale = false;
            } else {
                this.modale = index;
            }
        },
        deleteMex(index){
            this.contacts[index].messages.splice(this.modale, 1)
        }
    },
});

        // contactResearch: function(element){
        //     return element.name.toLowerCase().startsWith(this.searchName) || this.searchName === ''; 
        // },
