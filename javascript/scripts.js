const { createApp } = Vue;

createApp({
  data() {
    return {
      my_flag: 0,
      active_index_messages: null,
      search: "",
      new_messages: "",
      active_index: 0,
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },

  methods: {
    active(i) {
      this.active_index = i;
    },
    send_message(event) {
      if (event.keyCode === 13) {
        if (this.new_messages.length > 0) {
          const new_message_obj = {
            date: this.current_time(),
            message: this.new_messages,
            status: "sent",
          };
          this.contacts[this.active_index].messages.push(new_message_obj);
          this.new_messages = "";
          setTimeout(() => {
            const new_reply_message_obj = {
              date: this.current_time(),
              message: "OK",
              status: "received",
            };
            this.contacts[this.active_index].messages.push(
              new_reply_message_obj
            );
          }, 1000);
        }
      }
    },
    show_contact() {
      for (let i = 0; i < this.contacts.length; i++) {
        if (
          this.contacts[i].name
            .toLowerCase()
            .includes(this.search.toLowerCase())
        ) {
          this.contacts[i].visible = true;
        } else {
          this.contacts[i].visible = false;
        }
      }
    },
    show_my_dropdown_content(i) {
      if (this.my_flag == 0) {
        this.active_index_messages = i;
        this.my_flag = 1;
      } else {
        this.active_index_messages = null;
        this.my_flag = 0;
      }
    },
    hide_my_dropdown_content() {
      this.active_index_messages = null;
      this.my_flag = 0;
    },
    delete_message(my_array, i) {
      my_array.splice(i, 1);
      this.active_index_messages = null;
      this.my_flag = 0;
    },
    current_time() {
      let final_result_current_time = "";

      const now = new Date();

      final_result_current_time += now.getDate().toString().padStart(2, "0");
      final_result_current_time += "/";
      final_result_current_time += (now.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      final_result_current_time += "/";
      final_result_current_time += now
        .getFullYear()
        .toString()
        .padStart(2, "0");

      final_result_current_time += " ";

      final_result_current_time += now.getHours().toString().padStart(2, "0");
      final_result_current_time += ":";
      final_result_current_time += now.getMinutes().toString().padStart(2, "0");
      final_result_current_time += ":";
      final_result_current_time += now.getSeconds().toString().padStart(2, "0");

      return final_result_current_time;
    },
  },
}).mount("#app");
