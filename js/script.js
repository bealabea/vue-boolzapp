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
        answer: [
                'Non sono convinto', 'Sei forte', 'Che ne so?', 'Si ma stai calmo!', 'Brindo alla tua!',
                'Ma chi sei?', 'Buongiorno', 'Raccontami', ':)'  
            ],
        currentIndex: 0,
        temporaryMex: '',
        searchName: '',
        notifyText: 'Ricevi notifiche di nuovi messaggi',
        modale: 0,
        state: false,
    },
    methods: {
        changeChat: function(index) {
            this.currentIndex = index
        },
        sendMessage: function(index){
            if (this.temporaryMex !== ''){
            this.contacts[index].messages.push({ date: this.getDate(), text: this.temporaryMex, status: 'sent'});
            this.temporaryMex = '';
            this.answerMessage(index);
            this.scrollToEnd();
            }
        },
        answerMessage: function(index) {
            setTimeout(()=>{
                let rand = Math.floor(Math.random()*this.answer.length);
                this.contacts[index].messages.push({ date: this.getDate(), text: this.answer[rand], status: 'received'});
             },1000);
        },
        scrollToEnd: function() {  
            setTimeout(()=>{
            let container = this.$el.querySelector(".chat-bg");
            container.scrollTo(0, container.scrollHeight)
        },1200);
        },
        // contactResearch: function(element){
        //     return element.name.toLowerCase().startsWith(this.searchName) || this.searchName === ''; 
        // },
        notifyOnOff: function(){
            if (this.notifyText === 'Ricevi notifiche di nuovi messaggi'){
            this.notifyText = 'Disattiva notifiche di nuovi messaggi';
            } else {
            this.notifyText ='Ricevi notifiche di nuovi messaggi';
            }
        },
        getDate() {
            return dayjs().format('DD/MM/YYYY  HH:mm:ss')
        },
        lastAccess: function(index) {  
            return this.contacts[index].messages.length -1;
        },
        openModal(){
            this.state === !this.state;
        }
        }
});
